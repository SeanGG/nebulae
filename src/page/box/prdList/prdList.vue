<template>
  <section class="content">
    <main>
      <!-- 商品列表 -->
      <section class="prdList-main">
        <section class="prdList-block" :key="index" v-for="(item, index) in prdList" v-if="prdList.length >= 1">
          <section class="prdList-cell" @click="goPage" :data-source='JSON.stringify(item)'>
            <section class="prdList-img" v-if="item.img" :style="'background-image:url(' + item.img + ')'"></section>
            <section class="prdList-video" v-if="item.video">{{item.video}}</section>
            <section class="prdList-info">
              <section class="prdList-name">{{item.name}}</section>
              <section class="prdList-desc">{{item.desc}}</section>
              <section class="clearfix">
                <section class="prdList-count fl">剩余数量：{{item.count}}</section>
                <section class="prdList-price fr">售价：{{item.price}}</section>
              </section>
            </section>
          </section>
        </section>
        <section v-else>
          暂无商品
        </section>
      </section>
    </main>
  </section>
</template>

<style lang="scss" scoped src="./prdList.scss"></style>

<script>
import giftImg1 from '@/assets/images/app_experience/big_bg.png'
import giftImg2 from '@/assets/images/app_experience/list_item.png'

import * as http from '@/utils/http'
import * as api from '@/api/'
// import { setInitParams } from '@/utils/util'

export default {
  name: 'PrdList',
  data () {
    return {
      header: {
        name: '盒子--商品列表',
        desc: '盒子--商品列表'
      },
      prdList: [
        // {
        //   "game_id": "123", //游戏id
        //   "id": "123",//商品id
        //   "name": "赛马币", //商品名称
        //   "price": "123", //商品架构
        //   "count": "1", //购买商品的数量
        //   "desc": "扩展说明", //扩展说明
        //   img: giftImg1
        // },
        // {
        //   "game_id": "123", //游戏id
        //   "id": "123",//商品id
        //   "name": "赛马币", //商品名称
        //   "price": "123", //商品价格
        //   "count": "1", //购买商品的数量
        //   "desc": "扩展说明", //扩展说明
        //   img: giftImg2
        // },
      ]
    }
  },
  computed: {
  },
  created () {
    this.$parent.header = this.header

    this.getList()
  },
  methods: {
    goPage (e) {
      const source = e.currentTarget.dataset.source;
      const gameId = JSON.parse(source).game_id
      console.log(gameId)
      this.$router.push({
        name: 'prd',
        query: {
          gameId: gameId
        }
      })
    },
    getList () {
      http.post({
        url: api.goodsList,
        data: {
          game_id: '10000',
          session: 'f6de91a8b790fff28714c',
        },
        emulateJSON: true,
      }).then(res => {
        if (res.state.code == 0) {
          let prdList = res.data
          prdList.forEach( (item) => {
            if(!item.img){
              item.img = giftImg2
            }
            if(!item.count){
              item.count = '10'
            }
            
          })
          this.prdList = prdList
        } else {
          console.log(res.state.msg)
        }
      }).catch(res => {
        console.error(res)
      })
      // $.ajax({
      //   type:'POST',
      //   url: 'http://122.11.58.232:8003/goods/list',
      //   headers: {
      //     'Content-Type': 'application/x-www-form-urlencoded'
      //   },
      //   data: {
      //     game_id: '10000',
      //     session: 'f6de91a8b790fff28714c',
      //   },
      //   success: function (res) {
      //     console.log(res)
      //   }
      // });

      // http.getJsonp({
      //   url: api.goodsList,
      //   data: {
      //     game_id: '10000',
      //     session: 'f6de91a8b790fff28714c',
      //   },
      //   emulateJSON: false,
      // }).then(res => {
      //   console.log(res)
      // }).catch(res => {
      //   console.error(res)
      // })
    }
  }
}
</script>
