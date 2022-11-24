<template>
  <div>
    <header-comp/>

    <div class="item-list">
      <product v-for="(item, index) in itemList" :key="index" :item="item"/>
    </div>
  </div>
</template>

<script>
import { API_CATE_DETAIL } from '@/api.config.js'
import HeaderComp from '../components/Header'
import Product from '../components/Product'

export default {
  data () {
    return {
      itemList: []
    }
  },
  components: {
    HeaderComp,
    Product
  },
  created () {
    const {
      cateId,
      subId
    } = this.$route.params
    this.getCateDetail(cateId, subId)
  },
  methods: {
    async getCateDetail (cateId, subId) {
      const { itemList } = await this.$axios.post(API_CATE_DETAIL, {
        cateId,
        subId
      })
      this.itemList = itemList
    }
  }
}
</script>

<style lang="scss" scoped>
.item-list {
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 0.2rem;
}
</style>
