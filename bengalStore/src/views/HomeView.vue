<template>
  <div>
    <span>Cart Clicked:{{ cart.length }}</span>
    <h1>Proucts</h1>
    <div class="grid">
      <product
        v-for="product in products"
        :key="product.id"
        :title="product.title"
        :image="product.image"
        :price="product.price"
        :id="product.id"

        @cartClicked="addToCart"
      >
        <span style="color: greenyellow; align-items: center;">Best Sell</span>
      </product>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Product from "./../components/Product.vue";
export default {
  components: {
    Product,
  },
  data() {
    return {
      products: [],
      cart: [],
    };
  },
  beforeCreate(){
    console.log('Before Create Hook Called');
  },
  created(){
    console.log('Created Hook Called');
  },
  beforeMount(){
    console.log('Before Mount Hook Called');
  },
  mounted() {
    console.log('Mount Hook Called');
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        this.products = res.data;
        // console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  },
  methods: {
    addToCart(id){
      this.cart.push(id);
    },
  },
};
</script>

<style>
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}
</style>
