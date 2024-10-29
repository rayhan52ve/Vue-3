<template>
    <div>
      <h1>Blog Page</h1>
      <p>{{ $route.params.id }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "BlogPage",
    mounted() {
      console.log(this.$route); // Logs the route object to the console
    },
  };
  </script>
  