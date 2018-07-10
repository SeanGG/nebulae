<template>
  <div class="invite-content">
    <div class="invite-container">
        <h4>方式一：</h4>
        <p>已入驻基地的用户均可获得邀请码</p>
        <p>多关注下身边好友以及基地用户活跃群，进行寻求。</p>
        <h4>方式二：</h4>
        <p>关注微信公众号：星云基地</p>
        <p>我们将不定期开放邀请码发放活动，敬请关注。</p>
    </div>
  </div>
</template>

<script>
import * as http from '@/utils/http'
import * as api from '@/api/'
import { setInitParams } from '@/utils/util'
export default {
  name: 'Invite',
  data () {
    return {
      url: '',
      page_sessionid: '',
      page_udid: '',
      page_appid: ''
    }
  },
  computed: {},
  created () {
    this.setInitParams()
    // this.getData()
  },
  methods: {
    setInitParams () {
      const query = this.$route.query
      this.url = setInitParams(query).url
      this.page_sessionid = setInitParams(query).page_sessionid
      this.page_udid = setInitParams(query).page_udid
      this.page_appid = setInitParams(query).page_appid
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
  }
}
</script>
