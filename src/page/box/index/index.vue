<template>
  <section class="content">
    <main>
      <!-- api分类1 -->
      <section :key="index" v-for="(item,index) in apiList">
        <section class="h2">{{item.gridName}}</section>
        <ul class="api-list">
          <li :key="apiIndex" v-for="(apiCell, apiIndex) in item.gridList">
            <section class="api-cell" @click="goPage" :data-key="apiCell.key">
              <section class="api-btn">{{apiCell.name}}</section>
              <section class="api-desc">{{apiCell.desc}}</section>
            </section>
          </li>
        </ul>
      </section>
    </main>
  </section>
</template>

<style lang="scss" scoped src="./index.scss"></style>

<script>
import * as http from '@/utils/http'
import * as api from '@/api/'
import { setHeaderView } from '@/utils/util'

export default {
  name: 'BoxIndex',
  data () {
    return {
      header: {
        name: '盒子',
        desc: '盒子应用&功能入口集合'
      },
      userAgent: '当前环境计算中...',
      apiList: [
        {
          gridName: '页面列表',
          gridList: [
            {
              name: '商品列表页',
              key: 'prdList',
              desc: '商城商品列表页'
            },
            {
              name: '商品详情页',
              key: 'prd',
              desc: '商城商品详情页'
            },
            {
              name: '文案页面1',
              key: 'message',
              desc: '盒子文案页面1'
            },
            // {
            //   name: '文案页面2',
            //   key: 'message2',
            //   desc: '盒子文案页面2'
            // },
            // {
            //   name: '文案页面3',
            //   key: 'message3',
            //   desc: '盒子文案页面3'
            // }
          ]
        }
      ]
    }
  },
  computed: {
  },
  created () {
    setHeaderView(this)
  },
  methods: {
    goPage (e) {
      const key = e.currentTarget.dataset.key;
      this.$router.push({
        name: key
      })
    }
  }
}
</script>
