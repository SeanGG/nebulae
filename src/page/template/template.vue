<template>
  <div class="content">
    <div v-if="page_sessionid">
      {{page_sessionid}}
    </div>
    <div v-if="page_udid">
      {{page_udid}}
    </div>
    <div v-if="url">
      url : {{url}}
    </div>
  </div>
</template>

<script>
import * as http from '@/utils/http'
import * as api from '@/api/'
import { setInitParams } from '@/utils/util'
export default {
  name: 'list',
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
    // this.handleChange()
    this.setInitParams()
    this.getData()
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
    }
  }
}
</script>
