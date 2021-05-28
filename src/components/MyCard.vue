<template>
  <v-hover
      #default="{ hover }"
  >
    <v-lazy>
      <v-card
          :max-width="`${width}px`"
          class="ma-4"
          :style="`opacity: ${hover ? 1 : 0.6}`"
          style="transition: opacity 1s"
          :elevation="hover ? 24 : 6"
          :loading="!(image_loaded && text_loaded)"
      >
        <v-img
            :src="seededImageUrl"
            @load="image_loaded = true"
        >
          <template v-slot:placeholder>
            <v-row
                justify="center"
                align="center"
                class="fill-height ma-0"
            >
              <v-progress-circular
                  indeterminate
              ></v-progress-circular>
            </v-row>
          </template>
          <v-card-title class="title">
            {{ title }}
          </v-card-title>
        </v-img>
        <v-card-text v-if="text">
          {{ text }}
        </v-card-text>
        <v-card-text v-else style="text-align: center">
          <v-progress-circular
              indeterminate
          ></v-progress-circular>
        </v-card-text>
      </v-card>
    </v-lazy>
  </v-hover>
</template>
<script>
export default {
  name: 'MyCard',
  data: () => ({
    image_loaded: false,
    text_loaded: false,
    text: ''
  }),
  props: {
    title: {
      default: '0123',
      type: String
    },
    width: {
      default: 150,
      type: Number
    }
  },
  methods: {},
  computed: {
    seededImageUrl() {
      return `https://picsum.photos/seed/${encodeURIComponent(this.title)}/${this.width}/${Math.round(this.width / 3)}`
    }
  },
  created() {
    // fetch('https://cors-anywhere.herokuapp.com/https://loripsum.net/api/1/short')
    fetch('https://baconipsum.com/api/?type=meat&paras=1&format=text')
        .then(r => r.text())
        .then(data => {
              this.text = data
              this.text_loaded = true
            }
        );
  },
  watch: {
    width() {
      this.image_loaded = false
    }
  }
}
</script>
<style>
.title {
  color: white;
  /*mix-blend-mode: difference;*/
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
}
</style>