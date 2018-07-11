<template>
  <section class="turntable-content">
    <section class="turntable-main">
      <section class="turntable-grid">
        <template v-for="(item,index) in turntableList">
          <section :class="index === currentIndex ? 'turntable-cell shine' : 'turntable-cell'" :key="index">
            <section v-if="index === 8" class="btn-cell">
              <section class="btn" @click="startGame(1)">抽奖一次</section>
              <section class="btn" @click="startGame(10)">连抽十次</section>
            </section>
            <section v-else class="gift-cell">
              <section class="gift-img" :style='"background-image:url(" + item.img + ")"'></section>
              <section class="gift-name">{{item.name}}</section>
            </section>
          </section>
        </template>
      </section>
      <section class="turntable-shadow" v-show="turnStatus"></section>
    </section>
    <section class="turntable-form">
      <section class="turntable-line">
        <section class="turntable-label">
          得奖值（随机数）：
        </section>
        <section class="turntable-center">
          {{giftKey}}
          <!-- <input type="text" v-model="giftKey"> -->
        </section>
      </section>
      <section class="turntable-line">
        <section class="turntable-label">
          转动速率：
        </section>
        <section class="turntable-center">
          {{frequency}} 毫秒
        </section>
      </section>
      <section class="turntable-line">
        <section class="turntable-label">
          剩余时间：
        </section>
        <section class="turntable-center">
          {{turntableTime1}} 秒
        </section>
      </section>
      <section class="turntable-line">
        <section class="turntable-label">
          剩余次数：
        </section>
        <section class="turntable-center">
          {{runTime}} 次
        </section>
      </section>
      <!-- <section class="turntable-line">
        <section class="turntable-label btn" @click="setTime('1500')">
          设置时间1500ms
        </section>
      </section>
      <section class="turntable-line">
        <section class="turntable-label btn" @click="setTime('1000')">
          设置时间1000ms
        </section>
      </section>
      <section class="turntable-line">
        <section class="turntable-label btn" @click="setTime('500')">
          设置时间500ms
        </section>
      </section> -->
    </section>
    <section class="gift-room" v-if="giftList.length >= 1">
      <section class="title">中奖列表</section>
      <section class="grid">
        <section class="gift-cell" :key="index" v-for="(item, index) in giftList">
          <section><img :src="item.img" v-if="item.img" /></section>
          <section>名称：{{item.name}}</section>
          <section>key：{{item.key}}</section>
        </section>
      </section>
    </section>
  </section>
</template>

<script>
import giftImg1 from '@/assets/images/app_experience/big_bg.png'
import giftImg2 from '@/assets/images/app_experience/list_item.png'

import * as http from '@/utils/http'
import * as api from '@/api/'
import { setInitParams } from '@/utils/util'

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
      turnTime: 0,  // 当前页面已转动次数
      turnStatus: false,  // 是否在转动中
      // turntableList: 9,  // 九宫格转盘
      turntableList: [
        {
          key: 0,
          name: '征途0',
          img: giftImg1
        },
        {
          key: 1,
          name: '京东1',
          img: giftImg2
        },
        {
          key: 2,
          name: '征途2',
          img: giftImg1
        },
        {
          key: 3,
          name: '京东3',
          img: giftImg2
        },
        {
          key: 4,
          name: '征途4',
          img: giftImg1
        },
        {
          key: 5,
          name: '京东5',
          img: giftImg2
        },
        {
          key: 6,
          name: '征途6',
          img: giftImg1
        },
        {
          key: 7,
          name: '京东7',
          img: giftImg2
        },
        {
          key: 8,
          name: '征途',
          img: giftImg1
        },
      ],
      runTime: 0, // 点击一次转动次数
      currentIndex: '',  // 选中的格子
      turntableTime1: 5,  // 轮盘时间,默认5秒
      giftKey: '结果获取中。。。',  // 奖品key
      frequency: 100,  // 跳动频率
      interval: {},  // 转动定时器
      giftList: [] //  获奖列表
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
    this.$parent.header = this.header
  },
  methods: {
    // 开始游戏
    startGame (time) {  // time == 抽奖次数
      this.runTime = time
      if (time && time > 1) {
        this.runTime = time
      }
      this.getGift();
      this.startTime();
    },
    // 开始转动
    startTime () {
      // const timeout = this.turntableTime1 && this.turntableTime1 !== '' ? this.turntableTime1 : 5
      // const frequency = this.frequency  // 跳动频率

      const self = this;
      const fastTime = 1000;
      if (self.turnStatus) {
        return
      } else {
        self.turnStatus = true
        self.turnTime++
        self.resetParams()
      }

      if (self.turnTime <= 1) {
        self.currentIndex = 0;
      }


      console.log('------start------')

      this.newInterval()
      let interVal = setInterval(function () {
        if (self.turntableTime1 < 1) {
          clearInterval(interVal)
          clearInterval(self.interval)
          self.goGift()
        } else {
          self.turntableTime1--
          if (self.frequency < fastTime) {
            self.frequency = Number(self.frequency) + 40
            self.setTime(self.frequency)
          } else {
            clearInterval(interVal)
          }
        }
      }, fastTime)

      // self.newInterval()
    },
    // 获取中奖结果
    getGift () {
      const mockTime = Number(this.turntableTime1) / 2;
      let number = Math.floor(Math.random() * Math.random() * 10)
      if (number >= 8) {
        number = 1
      }
      const timer = setTimeout(() => {
        clearTimeout(timer)
        // if (!this.giftKey) {
        this.giftKey = number;
        // }
        console.log('-----getGift-----')
      }, mockTime * 1000)
    },
    // 加速转动
    setTime (time) {
      const timer = time || self.frequency
      clearInterval(this.interval)
      this.frequency = timer
      this.newInterval()
    },
    // 转动定时器
    newInterval () {
      const self = this
      const frequency = this.frequency  // 跳动频率
      this.interval = setInterval(function () {
        if (self.currentIndex < 7) {
          self.currentIndex = Number(self.currentIndex) + 1
        } else {
          self.currentIndex = 0
        }
      }, frequency)
    },
    // 重置转动初始参数
    resetParams () {
      this.turntableTime1 = 5  // 轮盘时间,默认5秒
      this.giftKey = '结果获取中。。。';  // 中奖结果
      this.frequency = 100  // 跳动频率
      this.interval = {}  // 转动定时器
    },
    // 取得奖励后，移动到奖品位置
    goGift () {
      const self = this
      const giftKey = this.giftKey
      const frequency = Number(this.frequency) + 100  // 跳动频率
      const interval = setInterval(() => {
        if (this.turntableList[this.currentIndex].key == this.giftKey) {
          clearInterval(interval)
          self.turnStatus = false
          self.runTime = Number(self.runTime) - 1
          console.log('------ end ------')
          self.setGiftList()
          self.startAgain()
          return
        }
        if (this.currentIndex < 7) {
          this.currentIndex = Number(this.currentIndex) + 1
        } else {
          this.currentIndex = 0
        }
      }, frequency)
    },
    // 判断是否继续转动
    startAgain () {
      const self = this
      if (self.runTime != 0) {
        self.startGame(self.runTime)
      }
    },
    // 展示获奖结果
    setGiftList () {
      let gift = {}
      const giftKey = this.giftKey
      const turntableList = this.turntableList
      turntableList.forEach((item) => {
        if (item.key == giftKey) {
          gift = item
        }
      })
      console.log(gift)
      let giftList = this.giftList
      giftList.push(gift)
      this.giftList = giftList
    }
  }
}
</script>
