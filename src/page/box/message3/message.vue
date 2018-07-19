<template>
  <section class="content">
    <main>
      <section class="msg-content">
        <section class="title">{{title}}</section>
        <section class="msg-gird">
          <section class="desc" :key="index" v-for="(item,index) in 40">{{desc}}</section>
        </section>
      </section>
    </main>
  </section>
</template>

<style lang="scss" scoped src="./message.scss"></style>

<script>
import * as http from '@/utils/http'
import * as api from '@/api/'
import { setHeaderView } from '@/utils/util'

export default {
  name: 'Message',
  data () {
    return {
      header: {
        name: '盒子',
        desc: '盒子应用&功能入口集合',
        status: false
      },
      title: '盒子应用&功能入口集合',
      desc: '盒子应用&功能入口集合盒子应用&功能入口集合盒子应用&功能入口集合盒子应用&功能入口集合盒子应用&功能入口集合盒子应用&功能入口集合盒子应用&功能入口集合盒子应用&功能入口集合盒子应用&功能入口集合盒子应用&功能入口集合盒子应用&功能入口集合盒子应用&功能入口集合盒子应用&功能入口集合'
    }
  },
  computed: {
  },
  created () {
    setHeaderView(this)
  },
  methods: {
  }
}
</script>
