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

<style lang="scss" scoped src="./prd.scss"></style>

<script>
import * as http from '@/utils/http'
import * as api from '@/api/'
// import { setInitParams } from '@/utils/util'

export default {
  name: 'Prd',
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
          ]
        }
      ]
    }
  },
  computed: {
  },
  created () {
    this.$parent.header = this.header
  },
  methods: {
    goPage (key) {
      this.$router.push({
        name: key
      })
    }
  }
}
</script>
