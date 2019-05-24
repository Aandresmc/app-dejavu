<template>
  <v-layout wrap>
    <v-flex xs12>
      <ion-slides
        ref="slides"
        @ionSlideTap="tap()"
        @ionSlideTransitionEnd="swipe()"
        :options="slideOpt"
        class="w"
      >
        <ion-slide :id="index" v-for="(slide, index) in peliculas" :key="index">
          <img class="slider-card m-auto" :src="slide.image" :alt="slide.title">
        </ion-slide>
      </ion-slides>

      <v-layout class="slider-info" wrap justify-space-around align-content-space-between>
        <h1>{{selectedSlide.title}}</h1>
        <p>{{selectedSlide.description}}</p>
        <!-- <h6 class="headline mb-0">$10.00</h6> -->

        <v-btn fab color="white" absolute bottom left @click="dislike">
          <v-icon color="pink">close</v-icon>
        </v-btn>

        <v-btn fab color="pink" dark absolute bottom right @click="like">
          <v-icon>check</v-icon>
        </v-btn>
      </v-layout>
    </v-flex>
  </v-layout>
</template>
<style>
</style>

<script>
export default {
  name: "productComponent",
  props: {
    peliculas: {
      type: Array,
      default: () => []
    }
  },
  update() {
    console.log("data", this.peliculas);
  },
  data() {
    return {
      slideOpt: {
        slidesPerView: 1.0,
        freeMode: true,
        spaceBetween: 0
      },
      selectedIndex: 0
    };
  },
  computed: {
    selectedSlide() {
      return this.peliculas[this.selectedIndex];
    },
    slides() {
      return this.$refs.slides;
    }
  },

  methods: {
    async swipe() {
      this.selectedIndex = await this.slides.getActiveIndex();
    },
    tap(event) {
      console.log("tap", event.target);
    },
    async like() {
      await this.slides.slideNext();
      let like = this.selectedSlide;
      this.activeAlert = !this.activeAlert;
      console.log("favorite", like);
    },
    async dislike() {
      await this.slides.slideNext();
      let dislike = this.selectedSlide;
      console.log("dislike", dislike);
    }
  }
};
</script>

