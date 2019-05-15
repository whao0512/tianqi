<template>
  <div>
    <goods-detail :goodDetail="goodDetail"></goods-detail>
    <star-product :starProduct="starProduct"></star-product>
  </div>
</template>


<script>
  import {GoodsDetail, StarProduct} from './components'

  export default {
    name: "fromm",
    components: {
      GoodsDetail,
      StarProduct
    },
    data() {
      return {
        goodDetail: {
          name: 'Fromm',
          describe1: 'Fromm是一个家族式的企业，从1904年至今一直致力于研发满足宠物健康和营养要求的宠物干粮。自1904年起，Fromm 家族就保持不断革新的传统，使产品更进一步满足动物健康和营养的要求。',
          describe2: '作为美国第一个优质宠物食品公司，Fromm家族是这个行业的领航者，Fromm家族认识到只有用最好的原料制作出最优质的宠物食品时，才能获得信誉，这就保证客户可以继续在这里会购买到更好的宠物食品。',
          img: '../../static/images/brand/fromm-brand.jpg'
        },
        starProduct: [
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
      }
    }
  }
</script>

<style scoped>

</style>
