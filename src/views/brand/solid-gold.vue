<template>
  <div>
    <goods-detail :goodDetail="goodDetail"></goods-detail>
    <star-product :starProduct="starProduct"></star-product>
  </div>
</template>

<script>
  import {GoodsDetail, StarProduct} from './components'

  export default {
    name: "solid-gold",
    components: {
      GoodsDetail,
      StarProduct
    },
    data() {
      return {
        goodDetail: {
          name: 'Solid gold',
          describe1: '这个问题并不是“素力高是什么？”，而是“素力高是谁？”素力高是一群想要给宠物最好的宠物愛好者，探索者，以及营养专家。我们的宠物给与我们太多了，所以我们的使命就是提供优质，全面，天然的产品给他们，以此作为回报，让这些神奇的动物看起来感觉很好，可以充分地享受生活。',
          describe2: '素力高整体动物营养中心创建于1974年，是美国首个全面天然宠物食品品牌，创始人是茜茜·哈林顿麦吉尔（Sissy Harrington McGill），是专业的宠物营养专家。她坚信每个人的宠物都值得最好的营养，天然的食物，可以让宠物保持开心和健康。因此，我们的龙头产品Hund-N-Flocken诞生了。现在40多年过去了，素力高拥有丰富的生产线，旗下的产品包含了干粮、罐头食品、零食以及保健品，全方位保证犬猫的健康。每包素力高都倾注了超过40年的宠物营养学研究成果，备受中国消费者的赞誉。',
          img: '../../static/images/brand/solid-gold-brand.jpg'
        },
        starProduct: [
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
      }
    }
  }
</script>

<style scoped>

</style>
