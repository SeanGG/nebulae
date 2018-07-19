<template>
  <div class="content">
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

<style lang="scss" scoped src="./appApi.scss"></style>

<script>
import { appBridge } from '@/utils/appBridge'
import { isApp, isWeixin } from '@/utils/platform'
import { setHeaderView } from '@/utils/util'
export default {
  name: 'AppAPi',
  data () {
    return {
      header: {
        name: 'appApi列表',
        desc: 'app提供原生功能接口'
      },
      userAgent: '当前环境计算中...',
      apiList: [
        {
          gridName: '基础功能api',
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
          gridName: '支付api',
          gridList: [
            {
              name: 'reqSession',
              key: 'reqSession',
              desc: 'reqSession'
            },
            {
              name: 'reqPay',
              key: 'reqPay',
              desc: '支付'
            },
            {
              name: 'reqClose',
              key: 'reqClose',
              desc: 'reqClose'
            },
            {
              name: '音频播放',
              key: 'reqAudioStart',
              desc: '音频播放'
            },
            {
              name: '音频暂停',
              key: 'reqAudioPause',
              desc: '音频暂停'
            },
            {
              name: '音频停止',
              key: 'reqAudioStop',
              desc: '音频停止'
            },
          ]
        }
      ]
    }
  },
  computed: {},
  created () {
    this.testAgent()
    setHeaderView(this)
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
      // eval(`this.${key}(key)`)
      try {
        eval(`this.${key}(key)`)
      } catch (error) {
        console.error(`不存在 ${key} 方法 !请确认是否正确配置`)
      }
    },
    // app方法
    // 判断是否安装
    isAppCanOpen (name) {
      const key = name || 'unknowApi-isAppCanOpen'
      // try {
      //   webkit.messageHandlers.isAppCanOpen.postMessage({ url: "wxc21a915b1ea48402://" })
      // } catch (error) {
      //   console.error(`The native ${key} not exist !`)
      // }
      appBridge.ready(function (e) {
        e.isAppCanOpen.postMessage({ url: "wxc21a915b1ea48402://" })
      }, 'isAppCanOpen')
    },
    // 打开app
    openApp (name) {
      const key = name || 'unknowApi-openApp'
      try {
        webkit.messageHandlers.openApp.postMessage({ url: "wxc21a915b1ea48402://" })
      } catch (error) {
        console.error(`The native ${key} not exist !`)
      }
    },
    // 测试奖励弹框
    taskRewardAlert (name) {
      const key = name || 'unknowApi-openApp'
      // try {
      //   webkit.messageHandlers.taskRewardAlert.postMessage({ title: "任务奖励测试", coin: 0.2, power: 0 })
      // } catch (error) {
      //   console.error(`The native ${key} not exist !`)
      // }
      appBridge.ready(function (e) {
        e.taskRewardAlert.postMessage({ title: "任务奖励测试", coin: 0.2, power: 0 })
      }, 'taskRewardAlert')
    },
    // 显示导航栏
    showNavigation (name) {
      const key = name || 'unknowApi-openApp'
      try {
        webkit.messageHandlers.showNavigation.postMessage({})
      } catch (error) {
        console.error(`The native ${key} not exist !`)
      }
    },
    // 隐藏导航栏
    hideNavigation (name) {
      const key = name || 'unknowApi-openApp'
      try {
        webkit.messageHandlers.hideNavigation.postMessage({})
      } catch (error) {
        console.error(`The native ${key} not exist !`)
      }
    },
    reqSession () {
      this.callNative("reqSession", {});
    },
    reqPay () {
      /*
      | 参数        | 类型           | 意义   |
      | ------------- |:-------------:| -----:|
      |  session | string | 是 | 用户session | - | xxxxxx |
      |  subGameId | string | 是 | 分配给h5游戏的id | - | xxxxxx |
      |  productId | string | 是 | 商品id | - | xxxxxx |
      |  productName | string | 是 | 商品名称 | - | 购买道具A |
      |  productPrice | Int | 是 | 商品价格 | - | 实际花费的星钻值 x 100000 |
      |  count | Int | 是 | 购买数量 | - | 2 |
      |  extra | string | 是 | 扩展信息 | - | 购买道具A x 2 |
      |  zoneId | string | 是 | h5游戏的分区id | - | xxxxxx |
       */
      //注意是utf8格式
      this.callNative("reqPay", { "session": "96e26647eacf25679effe4b080e928fe", "subGameId": "aaa", "productId": "a", "productName": "aa", "productPrice": 10, "count": 2, "extra": "购买aa x 2", "zoneId": "aa" });
    },

    reqClose () {
      callNative("reqClose", {});
    },

    reqAudioStart () {
      /*
      | 参数        | 类型           | 意义   |
      | ------------- |:-------------:| -----:|
      |  url | string | 是 | 播放的音频url | - | xxxxxx |
       */
      //注意是utf8格式
      this.callNative("reqAudioStart", { "url": "http://xxx" });
    },
    reqAudioPause () {
      this.callNative("reqAudioPause", {});
    },
    reqAudioClose () {
      this.callNative("reqAudioClose", {});
    },
    callNative (commandName, dict) {
      var obj;
      var params;
      if (dict == null) {
        params = {};
      } else {
        params = dict;
      }
      var obj = { "command": commandName, "data": params };
      var postString = JSON.stringify(obj);
      console.log("callNative postString:", postString);
      if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
        appBridge.ready(function (e) {
          e.NativeBridge.postMessage(obj);
        })
      } else {
        appBridge.ready(function () {
          NativeBridge.postMessage(postString);
        })
      }
      //console.log("callNative commandName:", commandName, " dict:",dict);
      // setTimeout(function () {
      //   if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
      //     // ios
      //     var obj;
      //     var params;
      //     if (dict == null) {
      //       params = {};
      //     } else {
      //       params = dict;
      //     }
      //     var obj = { "command": commandName, "data": params };
      //     var postString = JSON.stringify(obj);

      //     console.log("callNative postString:", postString);
      //     window.webkit.messageHandlers.NativeBridge.postMessage(obj);
      //   } else if (/(Android)/i.test(navigator.userAgent)) {
      //     // android
      //     var obj;
      //     var params;
      //     if (dict == null) {
      //       params = {};
      //     } else {
      //       params = dict;
      //     }
      //     var obj = { "command": commandName, "data": params };
      //     var postString = JSON.stringify(obj);
      //     console.log("callNative postString:", postString);
      //     NativeBridge.postMessage(postString);
      //   } else {
      //   };
      // }, 0);
    }
  }
}
</script>
