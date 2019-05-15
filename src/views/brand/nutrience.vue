<template>
  <div>
    <goods-detail :goodDetail="goodDetail"></goods-detail>
    <star-product :starProduct="starProduct"></star-product>
  </div>
</template>

<script>
  import {GoodsDetail, StarProduct} from './components'
    export default {
        name: "nutrience",
      components: {
        GoodsDetail,
        StarProduct
      },
      data() {
        return {
          goodDetail: {
            name: 'Hagen Nutrience',
            describe1: '作为宠物界全球最大的跨国家族企业，1955年成立至今的哈根公司始终延续着家族传统。ROLF C. HAGEN ，这位创始人坚信“如果要赋予一个词形容我们的产品，那必须是无与伦比。客户信任我们，我们需要证明我们值得这份信任。归根结底，是他们的支持让我们在行业里探索前行。”',
            describe2: '为提供绝对的安全和质量保证，哈根纽翠斯品牌遵循哈根集团历史悠久的原则，承诺只选用真正滋养宠物的加拿大优质食材，并在自有的宠物食品加工工厂，以人类食品工厂的行业最高标准SQF Level-3生产宠物粮，让宠物焕发活力，更健康、更长寿。滋养全身，焕发活力”是哈根纽翠斯为你爱宠带来的保证。',
            img: '../../static/images/brand/nutrience-brand.jpg'
          },
          starProduct: [
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
        }
      }
    }
</script>

<style scoped>

</style>
