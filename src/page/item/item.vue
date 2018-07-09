<template>
  <div class="content">
    <div class="top">
      <template v-if="video_address">
        <video :poster="banner" id="video" x5-video-player-type="h5" x5-video-player-fullscreen="true" playsinline="true" webkit-playsinline="true" x-webkit-airplay="true" preload="auto" :src="video_address"></video>
        <div class="mask">
          <div class="playButton"></div>
        </div>
      </template>
      <img v-else :src="banner" alt="" />
    </div>
    <div class="game_info">
      <img :src="appIconUrl" alt="" class="fl game_icon">
      <div class="text fl">
        <h4>{{appName}}</h4>
        <p class="version">版本：
          <span>{{ver}}</span>
        </p>
        <p class="time">{{date}}</p>
      </div>
      <div class="wonderful fr">
        <ul class="star">
          <li class="active"></li>
          <li class="active"></li>
          <li class="active"></li>
          <li class="active"></li>
          <li class="active"></li>
        </ul>
        <a class="link" href="javascript:;"></a>
      </div>
    </div>
    <div class="main_content">
      <ul class="header">
        <li :class="tabName === 'detail' ? 'active' : ''">
          <a href="javascript:;" @click="clickTab('detail')">详情</a>
        </li>
        <li :class="tabName === 'task_single' ? 'active' : ''">
          <a href="javascript:;" @click="clickTab('task_single')">独家任务</a>
        </li>
      </ul>
      <div class="container">
        <div class="item detail" v-show="tabName === 'detail'">
          <div class="pic_scroll">
            <div class="cc">
              <img :src="item" :key="index" v-for="(item, index) in adImgs" />
            </div>
          </div>
          <div class="update component">
            <h4>更新
              <i :class="verInfoClass" @click="toggle('verInfoStatus')"></i>
            </h4>
            <p :class="[verInfoLen ? 'cute' : 'short', verInfoStatus ? 'long' : 'short']" v-html="verInfo"></p>
          </div>
          <div class="line"></div>
          <div class="app_intro component">
            <h4>应用介绍
              <i :class="appDescClass" @click="toggle('appDescStatus')"></i>
            </h4>
            <p :class="[appDescLen ? 'cute' : 'short', appDescStatus ? 'long' : 'short']" v-html="appDesc"></p>
          </div>
          <div class="line"></div>
          <div class="developer component">
            <h4>开发者信息
              <i :class="developerClass" @click="toggle('developerStatus')"></i>
            </h4>
            <p :class="[developerLen ? 'cute' : 'short', developerStatus ? 'long' : 'short']" v-html="developer"></p>
          </div>
        </div>
        <!-- <div class="item comment">评论</div> -->
        <div class="item task_single" v-show="tabName === 'task_single'">
          <div class="task_content">
            <template v-for="(item, index) in tasks">
              <div v-if="item.status == 3" :key="index" class="task_item" :data-coin="item.coin" :data-power="item.power" :data-download-url="download_url" :data-open-url="tryOpenUrl" :data-status="item.status" :data-task-type="item.type" :data-task-id="item.id">
                <h5>{{item.name}}</h5><img class="icon" :src="item.icon_url" alt="">
                <div class="information">
                  <p>星钻奖励
                    <span>+
                      <i class='coin'>{{item.coin}}</i>
                    </span>
                  </p>
                  <p>算力奖励
                    <span>+
                      <i class='power'>{{item.power}}</i>
                    </span>
                  </p>
                </div>
                <img class="completed" src="@/assets/images/app_experience/completed.png" />
              </div>
              <div v-else :key="index" class="task_item uncompleted" :data-coin="item.coin" :data-power="item.power" :data-download-url="download_url" :data-open-url="tryOpenUrl" :data-status="item.status" :data-task-type="item.type" :data-task-id="item.id" @click="doTask(item)">
                <h5>{{item.name}}</h5>
                <img class="icon" :src="item.icon_url" alt="">
                <div class="information">
                  <p>星钻奖励
                    <span>+
                      <i class='coin'>{{item.coin}}</i>
                    </span>
                  </p>
                  <p>算力奖励
                    <span>+
                      <i class='power'>{{item.power}}</i>
                    </span>
                  </p>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
    <!-- 弹窗1 -->
    <div class="cover cover_prompt">
      <div class="content">
        <div class="text">
          <p class="info"></p>
          <div class="tips">
            <p>请注意：</p>
            <p>1.请使用与登陆APP一致的账号进入游戏</p>
            <p>2.数据或有延迟，请稍后重新领取</p>
          </div>
        </div>
        <div class="button">
          <div class="btn btn-cancel">取消</div>
          <div class="btn btn-submit"></div>
        </div>
      </div>
    </div>
    <!-- 弹窗2 -->
    <div class="cover cover_alert">
      <div class="content">
        <div class="text">
          已有其他账号在您的设备上领取过安装奖励，您无法重复领取，快去看看基地的其他任务吧
        </div>
        <div class="button">
          <div class="btn btn-submit">确定</div>
        </div>
      </div>
    </div>

    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" :key="index" v-for="(item, index) in adImgs">
          <img :src="item" />
        </div>
      </div>
    </div>

    <a href="javascript:;" class="bottom_btn" :downloadurl="download_url" :tryOpenUrl="tryOpenUrl"></a>
  </div>
</template>

<script>
import * as http from '@/utils/http'
import * as api from '@/api/'
import { setInitParams } from '@/utils/util'
export default {
  name: 'Item',
  data () {
    return {
      url: '',
      page_sessionid: '',
      page_udid: '',
      page_appid: '',
      video_address: '',  // 视频地址
      banner: '',   // 视频预览图or头图
      appIconUrl: '', // app图标
      appName: '', // app名称
      ver: '',  // app版本
      date: '', // app日期
      adImgs: '', // app预览图
      developer: '',  // app开发者信息
      verInfo: '1<br>2<br>3<br>4<br>',  // app版本更新信息
      appDesc: '',  // app应用介绍
      download_url: '', // app下载链接
      tryOpenUrl: '', // app sechma打开链接
      dataSource: {},   // 数据
      tasks: [
        {
          status: 3,
          coin: 1,
          power: 2,
          download_url: 'https://wwww.baidu.com',
          tryOpenUrl: 'https://wwww.baidu.com',
          name: 'test',
          icon_url: '/static/img/big_bg.d19eb01.png',
          type: 1,
          id: 'id'
        },
        {
          status: 4,
          coin: 1,
          power: 2,
          download_url: 'https://wwww.baidu.com',
          tryOpenUrl: 'https://wwww.baidu.com',
          name: 'test',
          icon_url: '/static/img/big_bg.d19eb01.png',
          type: 1,
          id: 'id'
        }
      ],  // 任务列表 
      tabName: 'detail',  // 当前选中tab
      verInfoStatus: false,
      appDescStatus: false,
      developerStatus: false,
    }
  },
  computed: {
    // 开发者更新信息文案数量
    verInfoLen () {
      const len = this.verInfo.split('<br>').length - 1
      const status = len <= 3
      return status
    },
    // 开发者更新信息div class
    verInfoClass () {
      const className = [
        this.verInfoLen ? 'cute fr' : 'shouqi fr',
        this.verInfoStatus ? 'zhankai fr' : 'shouqi fr',
      ]
      return className
    },
    // 开发说明文案数量
    appDescLen () {
      const len = this.appDesc.split('<br>').length - 1
      const status = len <= 3
      return status
    },
    // 开发说明div class
    appDescClass () {
      const className = [
        this.appDescLen ? 'cute fr' : 'shouqi fr',
        this.appDescStatus ? 'zhankai fr' : 'shouqi fr',
      ]
      return className
    },
    // 开发者文案数量
    developerLen () {
      const len = this.developer.split('<br>').length - 1
      const status = len <= 3
      return status
    },
    // 开发者div class
    developerClass () {
      const className = [
        this.developerLen ? 'cute fr' : 'shouqi fr',
        this.developerStatus ? 'zhankai fr' : 'shouqi fr',
      ]
      return className
    },
    // 输出手机类型
    phoneType () {
      const u = navigator.userAgent, device = ''
      if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
        return 'android'
      } else if (u.indexOf('iPhone') > -1) {
        return 'ios'
      }
    },
  },
  created () {
    this.setInitParams()
    this.getData()
  },
  methods: {
    // 切换tab
    clickTab (tag) {
      this.tabName = tag
    },
    // 获取地址传參
    setInitParams () {
      const query = this.$route.query
      this.url = setInitParams(query).url
      this.page_sessionid = setInitParams(query).page_sessionid
      this.page_udid = setInitParams(query).page_udid
      this.page_appid = setInitParams(query).page_appid
    },
    // 获取页面数据
    getData () {
      const self = this
      $.ajax({
        url: self.url,
        dataType: 'jsonp',
        jsonpCallback: 'jsonp_' + self.page_sessionid.slice(0, 8),
        jsonp: 'callback',
        data: {
          r: 'task/app-info',
          session: self.page_sessionid,
          platform: self.phoneType,
          id: self.page_appid
        },
        success: function (data) {
          if (data.state.code === 0) {
            self.dataSource = data
            self.render_detail()
            self.render_task()
            self.event_trigger()
            self.install_app()
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
    //渲染页面详细信息
    render_detail: function () {
      const dataSource = this.dataSource
      this.video_address = dataSource.video_address
      this.banner = dataSource.banner
      this.appIconUrl = dataSource.appIconUrl
      this.appName = dataSource.appName
      this.ver = dataSource.ver
      this.date = dataSource.date
      this.adImgs = dataSource.adImgs
      this.developer = dataSource.developer
      this.verInfo = dataSource.verInfo
      this.appDesc = dataSource.appDesc

      this.download_url = dataSource.download_url
      this.tryOpenUrl = dataSource.tryOpenUrl

      this.split_str()
    },
    // 展开收缩说明文字
    toggle (type) {
      console.log(type)
      if (type === 'verInfoStatus') {
        this.verInfoStatus = !this.verInfoStatus
      }
      if (type === 'appDescStatus') {
        this.appDescStatus = !this.appDescStatus
      }
      if (type === 'developerStatus') {
        this.developerStatus = !this.developerStatus
      }
    },
    // 点击做任务
    doTask(obj){
      console.log(obj)
    },
    // 检测是否可打开app
    install_app: function () {
      const self = this
        const url = self.tryOpenUrl
        const phone = self.phoneType
        const tryopenurl = self.tryOpenUrl
        if (phone == 'android') {
            document.location = "yuntu://webView?data={'name':'canOpen','value':'com.xxx.xxx', 'tryopenurl': " + tryopenurl + " }"
        } else if (phone == 'ios') {
            try {
                webkit.messageHandlers.isAppCanOpen.postMessage({
                    url: url,
                    data: {}
                })
            } catch (err) {
                console.log('native')
            }
        }
    },
  }
}
</script>
