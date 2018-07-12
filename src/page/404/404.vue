<template>
  <div class="content-404">
    <div class="bg-404"></div>
  </div>
</template>

<style lang="scss" scoped src="./404.scss"></style>

<script>
import * as http from '@/utils/http'
import * as api from '@/api/'
import { getQueryString } from '@/utils/util'
export default {
  name: 'Nofound',
  data () {
    return {
      url: '',
      page_sessionid: '',
      page_udid: ''
    }
  },
  computed: {},
  created () {
  },
  methods: {
  }
}
</script>
