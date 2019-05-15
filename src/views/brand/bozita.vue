<template>
  <div>
    <goods-detail :goodDetail="goodDetail"></goods-detail>
    <star-product :starProduct="starProduct"></star-product>
  </div>
</template>

<script>
  import {GoodsDetail, StarProduct} from './components'

  export default {
    name: "bozita",
    components: {
      GoodsDetail,
      StarProduct
    },
    data(){
      return {
        goodDetail: {
          name: 'BOZITA',
          describe1: 'BOZITA是瑞典的猫狗食品著名品牌。',
          describe2: 'BOZITA 秉持着为客户提供优质的宠物食品这一发展理念，运用来自于瑞典的自然灵感和创意，结合当地的天然食材，为广大消费者提供满意的宠物口粮。',
          img: ''
        },
        starProduct: [
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
        img: '../../static/images/brand/bozita-brand.jpg'
      }
    }
  }
</script>

<style scoped>

</style>
