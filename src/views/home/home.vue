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
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="BOZITA" name="first">
            <el-row :gutter="20">
              <el-col :span="6" v-for="item in data.bozita" class="portfolio-item fx animated fadeInDown" :key="item.name">
                <div class="img-holder" @mouseenter="imgMouseEnter(item.name)" @mouseleave="imgMouseLeave(item.name)">
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
          </el-tab-pane>
          <el-tab-pane label="Fromm" name="second">
            <el-row :gutter="20">
              <el-col :span="6" v-for="item in data.fromm" class="portfolio-item fx animated fadeInDown" :key="item.name">
                <div class="img-holder" @mouseenter="imgMouseEnter(item.name)" @mouseleave="imgMouseLeave(item.name)">
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
          </el-tab-pane>
          <el-tab-pane label="Solid GOLD" name="third">
            <el-row :gutter="20">
              <el-col :span="6" v-for="item in data.solidGold" class="portfolio-item fx animated fadeInDown" :key="item.name">
                <div class="img-holder" @mouseenter="imgMouseEnter(item.name)" @mouseleave="imgMouseLeave(item.name)">
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
          </el-tab-pane>
          <el-tab-pane label="哈根纽翠斯" name="fourth">
            <el-row :gutter="20">
              <el-col :span="6" v-for="item in data.nutrience" class="portfolio-item fx animated fadeInDown" :key="item.name">
                <div class="img-holder" @mouseenter="imgMouseEnter(item.name)" @mouseleave="imgMouseLeave(item.name)">
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
          </el-tab-pane>
        </el-tabs>
        <!--<div class="portfolio-box">-->
        <!--<div class="portfolio-filterable">-->
        <!--<div class="row">-->
        <!--<div class="gry-bg skew-25">-->
        <!--<span class="skew25 left filter-by">选择:</span>-->
        <!--<ul id="filters">-->
        <!--<li class="active">-->
        <!--<a href="#" class="skew25 filter">全部</a>-->
        <!--</li>-->
        <!--<li>-->
        <!--<a href="#" class="skew25 filter">BOZITA</a>-->
        <!--</li>-->
        <!--<li>-->
        <!--<a href="#" class="skew25 filter">Fromm</a>-->
        <!--</li>-->
        <!--<li>-->
        <!--<a href="#" class="skew25 filter">Solid GOLD</a>-->
        <!--</li>-->
        <!--<li>-->
        <!--<a href="#" class="skew25 filter">哈根纽翠斯</a>-->
        <!--</li>-->
        <!--</ul>-->
        <!--</div>-->
        <!--</div>-->
        <!--</div>-->
        <!--</div>-->
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
          {imgSrc: '../../static/images/banner/solidGold.png', id: 4},
        ],
        data: {
          bozita: [
            {
              url: '../../static/images/BOZITA/chengmaotianranwuguzhushiguanjirousanwenyuminganxing.jpg',
              name: '成猫天然无谷主食罐鸡肉三文鱼',
              englishName: null,
            },
            {
              url: '../../static/images/BOZITA/quanmaoqitianranwuguzhushiguandaxiarou.jpg',
              name: '全猫期天然无谷主食罐 大虾肉',
              englishName: null
            },
            {
              url: '../../static/images/BOZITA/quanmaoqitianranwuguzhushiguanniurou.jpg',
              name: '全猫期天然无谷主食罐 牛肉',
              englishName: null
            },
            {
              url: '../../static/images/BOZITA/quanmaoqitianranwuguzhushiguanxiaojirou.jpg',
              name: '全猫期天然无谷主食罐 小鸡肉',
              englishName: null
            },
            {
              url: '../../static/images/BOZITA/quanmaoqitianranwuguzhushiguanyangrouroudong.jpg',
              name: '全猫期天然无谷主食罐 羊肉 肉冻',
              englishName: ''
            },
            {
              url: '../../static/images/BOZITA/quanmaoqitianranwuguzhushiguanjiganroudong.jpg',
              name: '全猫期天然无谷主食罐 鸡肝 肉冻',
              englishName: null
            },
            {
              url: '../../static/images/BOZITA/quanmaoqitianranwuguzhushiguanyurou.jpg',
              name: '全猫期天然无谷主食罐 鱼肉',
              englishName: null
            },
            {
              url: '../../static/images/BOZITA/shineichengmaotianranwuguzhushiguanjirouandzuoxuanroujian.jpg',
              name: '全猫期天然无谷主食罐 鸡肉+左旋肉碱',
              englishName: null
            },
          ],
          fromm: [
            {
              url: '../../static/images/Fromm/jirousucaiquanliang.jpg',
              name: '美国无谷鸡肉素菜犬粮',
              englishName: 'Four-Star Dry Recipes for dogs'
            },
            {
              url: '../../static/images/Fromm/quanjiaqinquan.jpg',
              name: '美国无谷全家禽粮',
              englishName: 'Four-Star Dry Recipes for dogs'
            },
            {
              url: '../../static/images/Fromm/sanwenyusucaimaoliang.jpg',
              name: '美国福摩三文鱼蔬菜猫粮',
              englishName: 'Four-Star Dry Recipes for dogs'
            },
            {
              url: '../../static/images/Fromm/sanwenyusucaiquanliang.jpg',
              name: '美国福摩三文鱼犬粮',
              englishName: 'Four-Star Dry Recipes for dogs'
            },
            {
              url: '../../static/images/Fromm/wuguquanyusucaipeifangmaoliang.jpg',
              name: '美国无谷全蔬菜配方猫粮',
              englishName: 'Four-Star Dry Recipes for dogs'
            },
            {
              url: '../../static/images/Fromm/wugusanwenyuyaroumaoliang.jpg',
              name: '美国福摩无谷三文鱼鸭肉猫粮',
              englishName: 'Four-Star Dry Recipes for dogs'
            },
            {
              url: '../../static/images/Fromm/wugusanwenyuyarouquanliang.jpg',
              name: '美国福摩无谷三文鱼鸭肉犬粮',
              englishName: 'Four-Star Dry Recipes for dogs'
            },
            {
              url: '../../static/images/Fromm/wuguturouyaroutianshumaoliang.jpg',
              name: '美国福摩无谷兔肉鸭肉甜薯猫粮',
              englishName: 'Four-Star Dry Recipes for dogs'
            },
            {
              url: '../../static/images/Fromm/wuguyangrouquanliang.jpg',
              name: '美国福摩无谷羊肉犬粮',
              englishName: 'Four-Star Dry Recipes for dogs'
            },
            {
              url: '../../static/images/Fromm/wuguyatuquanliang.jpg',
              name: '美国福摩无谷鸭肉犬粮',
              englishName: 'Four-Star Dry Recipes for dogs'
            },
            {
              url: '../../static/images/Fromm/yaroutianshuquanliang.jpg',
              name: '美国福摩鸭肉甜薯犬粮',
              englishName: 'Four-Star Dry Recipes for dogs'
            },
            {
              url: '../../static/images/Fromm/yaroutianshusucaimaoliang.jpg',
              name: '美国福摩鸭肉甜薯蔬菜猫粮',
              englishName: 'Four-Star Dry Recipes for dogs'
            },
          ],
          solidGold: [
            {
              url: '../../static/images/solidGold/gold.jpg',
              name: '素力高金装无谷全猫粮',
              englishName: 'Kibble Cat Food'
            },
            {
              url: '../../static/images/solidGold/kissofheaven.jpg',
              name: '美国素力高天堂之吻无谷幼猫粮',
              englishName: 'Kibble Cat Food'
            },
            {
              url: '../../static/images/solidGold/redStrawberry.jpg',
              name: '素力高无谷红莓精华全猫粮',
              englishName: 'Kibble Cat Food'
            },
            {
              url: '../../static/images/solidGold/silver.jpg',
              name: '素力高银装无谷全猫粮',
              englishName: 'Kibble Cat Food'
            },
          ],
          nutrience: [
            {
              url: '../../static/images/HagenNutrience/grain-free-turkey-formula.jpg',
              name: null,
              englishName: 'Grain Free Turkey Formula'
            },
            {
              url: '../../static/images/HagenNutrience/grain-free-turkey-formula.jpg',
              name: null,
              englishName: 'Subzero Fraser Valley Formula'
            },
            {
              url: '../../static/images/HagenNutrience/Subzero-Prairie-Red-Formula.jpg',
              name: '',
              englishName: 'Subzero Prairie Red Formula'
            },
            {
              url: '../../static/images/HagenNutrience/Subzero-Puppy-Fraser-Valley-Formula.jpg',
              name: null,
              englishName: 'Subzero Puppy Fraser Valley Formula'
            },
          ],
        },
        activeName: 'first'
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      imgMouseEnter(name){
        // this.$refs[name].removeClass('fadeOutDown').addClass('fadeInUp')
      },
      imgMouseLeave(name){
        // this.$refs[name].removeClass('fadeInUp').addClass('fadeOutDown')
      },
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
