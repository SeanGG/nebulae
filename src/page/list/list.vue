<template>
  <div class="list-content">
    <div v-if="page_sessionid">
      {{page_sessionid}}
    </div>
    <div v-if="page_udid">
      {{page_udid}}
    </div>
    <div v-if="url">
      url : {{url}}
    </div>
    {{testName}}
    <div class="topPic">
      <div @click="linkTo" class="top_link">
        <!-- <img src="../assets/images/app_experience/big_bg.png"> -->
      </div>
      <div class="info clearfix">
        <div class="game fl">
          <img :src="appIconUrl" alt="" class="fl game_icon" />
          <div class="des fl">
            <h3>{{appName}}</h3>
          </div>
        </div>
        <div class="task fr">
          <p class="top">独家算力任务</p>
          <p class="bottom">登录送星钻</p>
        </div>
        <div class="game_description fl">{{appInfo}}</div>
      </div>
    </div>
    <div class="list">
      <h3>安利墙</h3>
      <ul v-if="anliList.length > 0">
        <li :key="index" v-for="(item, index) in anliList">
          <div @click="anliLink(item.interactUrl, item.appId)"><img :src="item.appBanner" alt=''></div>
          <div class='content'>
            <h4>{{item.appName}}</h4>
            <div class='info'>{{item.appInfo}}</div>
          </div>
        </li>
      </ul>
      <div v-else class="empty-list">
        暂无安利内容
      </div>
    </div>
  </div>
</template>

<script>
import * as http from '@/utils/http'
import * as api from '@/api/'
import { setInitParams } from '@/utils/util'
export default {
  name: 'List',
  data () {
    return {
      url: '',
      dataSource: {},
      appName: '',  // 游戏名
      appIconUrl: '',
      appInfo: '',
      appId: '',
      appLink: '',
      anliList: [
        {
          interactUrl: '',
          appId: ''
        }
      ], // 安利墙列表
      page_sessionid: '',
      page_udid: '',
      testName: ''
    }
  },
  computed: {},
  created () {
    this.handleChange()
    this.setInitParams()
    this.getData()
  },
  methods: {
    handleChange (v) {
      const self = this
      http.get({
        url: api.test1
      }).then(res => {
        self.testName = res
      })
    },
    linkTo () {
      const appLink = this.appLink
      if (appLink && appLink !== '') {
        window.location.href = appLink
      } else {
        return false
      }
      // this.number = Number(this.number) + 1
    },
    anliLink (interactUrl, appId) {
      window.location.href = interactUrl + '?session=' + this.page_sessionid + '&appId=' + appId + '&udid=' + this.page_udid
    },
    setInitParams () {
      const query = this.$route.query
      this.url = setInitParams(query).url
      this.page_sessionid = setInitParams(query).page_sessionid
      this.page_udid = setInitParams(query).page_udid
    },
    getData () {
      const self = this
      $.ajax({
        url: self.url,
        dataType: 'jsonp',
        jsonpCallback: 'jsonp_' + self.page_sessionid.slice(0, 8),
        data: {
          r: 'task/app-web-list',
          session: self.page_sessionid,
          platform: 'ios'
        },
        success: function (data) {
          if (data.state.code === 0) {
            self.dataSource = data
            self.render_html()
          }
        }
      })
      // http.get({
      //   url: self.url,
      //   data: {
      //     r: 'task/app-web-list',
      //     session: self.page_sessionid,
      //     platform: 'ios'
      //   }
      // }).then(res => {
      //   self.testName = res
      // })
    },
    render_html () {
      this.render_top()
      // this.render_list()
    },
    render_top () {
      const data = this.dataSource.data
      const top = data.top

      this.appName = top.appName
      this.appIconUrl = top.appIconUrl
      this.appInfo = top.appInfo
      this.appId = top.appId
      this.appLink = top.interactUrl + '?session=' + this.page_sessionid + '&appId=' + this.appid + '&udid=' + this.page_udid
    }
  }
}
</script>
