<template>
  <v-app>
<!--    <router-link :to="{ name: 'pepe', params: {card_qty: 10} }">-->
<!--      sadfasdf-->
<!--    </router-link>-->
    <router-view :key="$route.name">

    </router-view>
  </v-app>
</template>

<script>
export default {
  name: "App"
}
</script>

<style scoped>

</style>