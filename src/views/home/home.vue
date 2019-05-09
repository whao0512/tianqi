<template>
  <div>
    <el-carousel indicator-position="outside" height="478px">
      <el-carousel-item v-for="item in banner" :key="item.id">
        <img v-bind:src="item.imgSrc">
      </el-carousel-item>
    </el-carousel>

    <div class="sectionWrapper">
      <div class="container">
        <h3 class="block-head">明星产品</h3>
        <!--<el-tabs v-model="activeName" @tab-click="handleClick">-->
          <!--<el-tab-pane label="BOZITA" name="first">BOZITA</el-tab-pane>-->
          <!--<el-tab-pane label="Fromm" name="second">Fromm</el-tab-pane>-->
          <!--<el-tab-pane label="Solid GOLD" name="third">Solid GOLD</el-tab-pane>-->
          <!--<el-tab-pane label="哈根纽翠斯" name="fourth">哈根纽翠斯</el-tab-pane>-->
        <!--</el-tabs>-->
        <div class="portfolio-box">
          <div class="portfolio-filterable">
            <div class="row">
              <div class="gry-bg skew-25">
                <span class="skew25 left filter-by">选择:</span>
                <ul id="filters">
                  <li class="active">
                    <a href="#" class="skew25 filter">全部</a>
                  </li>
                  <li>
                    <a href="#" class="skew25 filter">BOZITA</a>
                  </li>
                  <li>
                    <a href="#" class="skew25 filter">Fromm</a>
                  </li>
                  <li>
                    <a href="#" class="skew25 filter">Solid GOLD</a>
                  </li>
                  <li>
                    <a href="#" class="skew25 filter">哈根纽翠斯</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "home",
    data() {
      return {
        banner: [
          {imgSrc: '../../static/images/banner/BOZTIA.png', id: 1},
          {imgSrc: '../../static/images/banner/Fromm.png', id: 2},
          {imgSrc: '../../static/images/banner/nutrience.jpg', id: 3},
          {imgSrc: '../../static/images/banner/Solid Gold.png', id: 4},
        ],
        activeName: 'second'
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>

<style type="text/css" lang="scss" scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
