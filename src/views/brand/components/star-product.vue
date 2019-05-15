<template>
  <div class="sectionWrapper">
    <div class="container">
      <h3 class="block-head">明星产品</h3>
      <el-row :gutter="20">
        <el-col :span="6" v-for="item in starProduct" class="portfolio-item fx animated fadeInDown" :key="item.name">
          <div class="img-holder">
            <div class="img-over full-over" style="display: none">
              <a :ref="item.name" class="fx zoom undefined animated fadeOutDown"
                 :title="item.name"
                 data-gal="prettyPhoto[pp_gal]"><b class="fa fa-search-plus"></b>
              </a>
            </div>

            <img :src="item.url" alt="">
          </div>
          <div class="name-hold">
            <a href="">{{item.name}}</a>
            <p>{{item.englishName}}</p>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: "star-product",
    props: [
      'starProduct'
    ]
  }
</script>

<style scoped>

</style>
