<template>
  <div>
    <img src="" alt="">
    <div class="sectionWrapper">
      <div class="container">
        <div class="cell-7">
          <div class="row">
            <div class="block fx animated fadeInLeft" data-animate="fadeInLeft">
              <h3 class="block-head">{{goodDetail.name}}</h3>
              <p>{{goodDetail.describe1}}</p>
              <p>{{goodDetail.describe2}}</p>
            </div>
          </div>
        </div>
        <div class="cell-1"></div>
        <div class="cell-4">
          <div class="cell-4 fx animated fadeInUp" data-animate="fadeInUp" style="width: 350px;">
            <img :src="goodDetail.img" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "goods-detail",
    props: [
      'goodDetail'
    ]
  }
</script>

<style scoped>

</style>
