<template>
  <div class="turntable-content">
    <div class="turntable-grid">
      <template v-for="(item,index) in turntableList">
        <div :class="index === currentIndex ? 'turntable-cell shine' : 'turntable-cell'" :key="index">
          <div v-if="index === 8" @click="startGame" class="btn">点击开始</div>
          <div v-else> {{index}}</div>
        </div>
      </template>
    </div>
    <div class="turntable-form">
      <div class="turntable-line">
        <div class="turntable-label">
          设置最终得奖序号：
        </div>
        <div class="turntable-center">
          <input type="text" v-model="giftKey">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as http from '@/utils/http'
import * as api from '@/api/'
import { setInitParams, setHeaderView } from '@/utils/util'
export default {
  name: 'Turntable',
  data () {
    return {
      dataSource: {},
      anliList: [
        {
          interactUrl: '',
          appId: ''
        }
      ], // 安利墙列表
      page_sessionid: '',
      page_udid: '',
      url: '',
      testName: '',

      header: {
        name: '九宫格转盘',
        desc: '九宫格转盘抽奖'
      },
      turntableList: 9,  // 九宫格转盘
      currentIndex: '',  // 选中的格子
      turntableTime1: '',  // 轮盘时间
      turntableTime2: '',  // 选中的格子
      giftKey: '',  // 奖品key
      frequency: 500,  // 跳动频率
    }
  },
  computed: {
    turntableCell (index) {
      let className = ['turntable-cell']
      if (index === this.currentIndex) {
        className.push('shine')
      }
      return className
    }
  },
  created () {
    setHeaderView(this)
  },
  methods: {
    startGame () {
      this.getGift();
      this.startTime();
    },
    startTime () {
      const timeout = this.turntableTime1 && this.turntableTime1 !== '' ? this.turntableTime1 : 5
      const frequency = this.frequency  // 跳动频率

      console.log('------start------')
      if (!this.currentIndex || this.currentIndex == '') {
        this.currentIndex = 0
      }

      const interval = setInterval(() => {
        console.log(this.currentIndex)
        if (this.currentIndex < 7) {
          this.currentIndex = Number(this.currentIndex) + 1
        } else {
          this.currentIndex = 0
        }
      }, frequency)

      const timer = setTimeout(() => {
        clearInterval(interval)
        clearTimeout(timer)
        this.goGift()
        console.log('------ end ------')
      }, timeout * 1000)
      // console.log(timeout)
    },
    getGift () {
      const mockTime = 5;
      const timer = setTimeout(() => {
        clearTimeout(timer)
        if (!this.giftKey) {
          this.giftKey = 0;
        }
        console.log('-----getGift-----')
      }, mockTime * 1000)
    },
    goGift () {
      const giftKey = this.giftKey
      const currentIndex = this.currentIndex
      const frequency = this.frequency  // 跳动频率

      const interval = setInterval(() => {
        console.log(this.currentIndex)
        if (this.currentIndex == this.giftKey) {
          clearInterval(interval)
          return
        }
        if (this.currentIndex < 7) {
          this.currentIndex = Number(this.currentIndex) + 1
        } else {
          this.currentIndex = 0
        }
      }, frequency)
    }
  }
}
</script>
