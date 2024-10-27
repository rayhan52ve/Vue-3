<template>
  <div class="products">
    <img :src="image" alt="" />
    <div class="text-container">
      <h3>{{ title }}</h3>
      <p class="price">$ {{ price }}</p>
    </div>
    <slot></slot>
    <button class="custom-btn" @click="addToCartHandler">Add to cart</button>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Title not found.",
    },
    image: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    id: Number,
  },
  methods: {
    addToCartHandler() {
      this.$emit("cartClicked",this.id);
    }
  },

};
</script>

<style>
.products {
  /* background-color: #f0f0f0; */
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgb(163, 161, 161);
}

.products h3 {
  font-weight: bold;
}
.price {
  font-weight: bold;
  color: #79409d;
}

.text-container {
  bottom: 2px;
  padding: 5px;
}

.products img {
  width: 100%;
  height: 250px;
}

.custom-btn {
  width: 100%;
  background-color: #79409d;
  color: aliceblue;
  font-family: "Courier New", Courier, monospace;
  font-size: large;
  padding: 10px 5px 10px 5px;
  margin-top: 10px;
  border: none;
  border-radius: 9px;
  cursor: pointer;
  transition: transform 0.2s ease, background-color 0.2s ease, color 0.2s ease;
}

.custom-btn:hover {
  background-color: #c0a5d1;
  color: black;
}

.custom-btn:active {
  transform: scale(0.95); /* Slightly reduces the size on click */
  background-color: #522a6b; /* Change to a darker shade when clicked */
  color: aliceblue;
}
</style>