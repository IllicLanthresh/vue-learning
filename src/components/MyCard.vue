<template>
  <v-hover
      close-delay="200"
      #default="{ hover }"
  >
    <v-card
        :max-width="`${width}px`"
        class="ma-4"
        :elevation="hover ? 24 : 6"
        :loading="!(image_loaded && text_loaded)"
    >
      <v-img
          :src="seededImageUrl"
          @load="image_loaded = true"
      >
        <v-card-title class="title">
          {{ title }}
        </v-card-title>
      </v-img>
      <v-card-text>
        {{ text }}
      </v-card-text>
    </v-card>
  </v-hover>
</template>
<script>
export default {
  name: 'MyCard',
  data: () => ({
    image_loaded: false,
    text_loaded: false,
    text: 'loading...'
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
    fetch(`https://cors-anywhere.herokuapp.com/https://loripsum.net/api/1/short`)
        .then(r => r.text())
        .then(data => {
              this.text = data
                  .replace(/^\s+|\s+$/g, '')
                  .replace(/<\/?p>/g, '')
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