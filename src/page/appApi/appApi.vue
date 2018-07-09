<template>
  <div class="content">
    <header>
      <section class="title">appApi列表</section>
      <section class="description">app提供原生功能接口</section>
    </header>
    <main>
      <section class="alert">当前环境：
        <span class="agent">{{userAgent}}</span>
      </section>
      <!-- api分类1 -->
      <section :key="index" v-for="(item,index) in apiList">
        <section class="h2">{{item.gridName}}</section>
        <ul class="api-list">
          <li :key="apiIndex" v-for="(apiCell, apiIndex) in item.gridList">
            <section class="api-cell" @click="testApi" :data-key="apiCell.key">
              <section class="api-btn">{{apiCell.name}}</section>
              <section class="api-desc">{{apiCell.desc}}</section>
            </section>
          </li>
        </ul>
      </section>
    </main>
  </div>
</template>

<script>
import * as http from '@/utils/http'
import * as api from '@/api/'
import { isApp, isWeixin } from '@/utils/platform'
export default {
  name: 'Invite',
  data () {
    return {
      userAgent: '当前环境计算中...',
      apiList: [
        {
          gridName: 'api分类1',
          gridList: [
            {
              name: 'app是否已安装',
              key: 'isAppCanOpen',
              desc: 'app是否已安装'
            },
            {
              name: '打开app',
              key: 'openApp',
              desc: '打开app'
            },
            {
              name: '测试奖励弹框',
              key: 'taskRewardAlert',
              desc: '测试奖励弹框'
            },
            {
              name: '隐藏导航栏',
              key: 'hideNavigation',
              desc: '隐藏导航栏'
            },
            {
              name: '显示导航栏',
              key: 'showNavigation',
              desc: '显示导航栏'
            }
          ]
        },
        {
          gridName: 'api分类测试',
          gridList: [
            {
              name: '测试接口1',
              key: 'aa',
              desc: '测试描述aa'
            },
            {
              name: '测试接口2',
              key: 'bb',
              desc: '测试描述bb'
            }
          ]
        }
      ]
    }
  },
  computed: {},
  created () {
    this.testAgent();
  },
  methods: {
    testAgent () {
      const isAppStatus = isApp(),
        isWeixinStatus = isWeixin()

      if (isAppStatus) {
        this.userAgent = 'app'
      } else if (isWeixinStatus) {
        this.userAgent = 'weixin'
      } else {
        this.userAgent = 'h5'
      }
    },
    testApi (e) {
      if (this.userAgent && this.userAgent === "h5") {
        alert('当前环境不在app内，无法调用app接口');
        return;
      }
      const key = e.currentTarget.dataset.key;
      try {
        eval(`this.${key}(key)`)
      } catch (error) {
        console.error(`不存在 ${key} 方法 !请确认是否正确配置`)
      }
    },
    // app方法
    isAppCanOpen (name) {
      const key = name || 'unknowApi-isAppCanOpen'
      try {
        webkit.messageHandlers.isAppCanOpen.postMessage({ url: "wxc21a915b1ea48402://" })
      } catch (error) {
        console.error(`The native ${key} not exist !`)
      }
    },
    openApp (name) {
      const key = name || 'unknowApi-openApp'
      try {
        webkit.messageHandlers.openApp.postMessage({ url: "wxc21a915b1ea48402://" })
      } catch (error) {
        console.error(`The native ${key} not exist !`)
      }
    },
    taskRewardAlert (name) {
      const key = name || 'unknowApi-openApp'
      try {
        webkit.messageHandlers.taskRewardAlert.postMessage({ title: "任务奖励测试", coin: 0.2, power: 0 })
      } catch (error) {
        console.error(`The native ${key} not exist !`)
      }
    },
    showNavigation (name) {
      const key = name || 'unknowApi-openApp'
      try {
        webkit.messageHandlers.showNavigation.postMessage({})
      } catch (error) {
        console.error(`The native ${key} not exist !`)
      }
    },
    hideNavigation (name) {
      const key = name || 'unknowApi-openApp'
      try {
        webkit.messageHandlers.hideNavigation.postMessage({})
      } catch (error) {
        console.error(`The native ${key} not exist !`)
      }
    }
  }
}
</script>
