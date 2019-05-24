<template>
  <div class="deep-purple darken-4 contenido">
    <v-container class="grid-list-xl text-xs-center">
      <productComponent :peliculas="peliculas"/>
    </v-container>
  </div>
</template>

<script>
import productComponent from "@/components/productComponent";
export default {
  name: "products",
  components: {
    productComponent
  },
  data() {
    return {
      peliculas: [
        {
          title: "'Ready Player One',",
          description:
            "'When the creator of a popular video game system dies, a virtual contest is created to compete for his fortune.',",
          image:
            "https://image.tmdb.org/t/p/w300_and_h450_bestv2/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg"
        },
        {
          title: "'Avengers: Infinity War',",
          description:
            "'As the Avengers and their allies have continued to protect the world from threats too large for any...',",
          image:
            "https://image.tmdb.org/t/p/w300_and_h450_bestv2/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"
        },
        {
          title: "'Coco',",
          description:
            "'Despite his family’s baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician...',",
          image:
            "https://image.tmdb.org/t/p/w300_and_h450_bestv2/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg"
        }
      ]
    };
  }
};
</script>
