<template>
  <v-main>
    <v-slider
        v-model="card_qty"
        class="align-center"
        :max="card_qty_max"
        :min="card_qty_min"
        hide-details
        label="Card Quantity"
    >
      <template v-slot:append>
        <v-text-field
            v-model="card_qty"
            class="mt-0 pt-0"
            hide-details
            single-line
            type="number"
            style="width: 60px"
        ></v-text-field>
      </template>
    </v-slider>
    <v-slider
        v-model="width"
        class="align-center"
        :max="width_max"
        :min="width_min"
        hide-details
        label="Card Width"
    >
      <template v-slot:append>
        <v-text-field
            v-model="width"
            class="mt-0 pt-0"
            hide-details
            single-line
            type="number"
            style="width: 60px"
        ></v-text-field>
      </template>
    </v-slider>
    <v-container>
      <v-row>
        <MyCard
            v-for="i in card_qty"
            :key="i"
            :title="`#${i}`"
            :width="width"
        />
      </v-row>
    </v-container>
  </v-main>
</template>

<script>

import MyCard from "../components/MyCard";

function pushRouter(context) {
  context.$router.push({name: 'Cards', params: {card_qty: context.card_qty.toString(), width: context.width.toString()}})
}

export default {
  name: 'App',
  components: {
    MyCard
  },
  data() {
    return {
      card_qty: parseInt(this.$route.params.card_qty) || 20,
      width: parseInt(this.$route.params.width) || 300,
      card_qty_min: 0,
      card_qty_max: 90,
      width_min: 150,
      width_max: 500,
    }
  },
  watch: {
    width() {
      pushRouter(this)
    },
    card_qty() {
      pushRouter(this)
    }
  },
  created() {
    pushRouter(this)
  }
};
</script>
