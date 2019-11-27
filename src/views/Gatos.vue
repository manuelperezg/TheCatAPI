<template>
  <div>
    <v-content>
      <div class="container-fluid p-4">
        <div class="row mt-3">
          <div class="grid-gallery">
            <a
              class="grid-gallery__item card border-0 shadow"
              href="#"
              v-for="imagen in images"
              :key="imagen.id"
            >
              <img class="grid-gallery__image" v-lazy="imagen.url" />
            </a>
          </div>
        </div>
        <div class="text-center mt-3">
          <v-pagination
            v-if="getNumPages>1"
            v-model="page"
            :length="getNumPages"
            circle
            color="#1565C0"
            next-icon="navigate_next"
            prev-icon="navigate_before"
            totalVisible="8"
          ></v-pagination>
        </div>
      </div>
    </v-content>
  </div>
</template>

<script>
import axios from "axios";
import { cats } from "../mixins/the_cats.js";
export default {
  name: "Gatos",
  components: {},
  mixins: [cats],
  data() {
    return {
      query: "",
      images: []
    };
  },
  created() {
    this.query = this.$route.params.query;
    this.getImages(this.$route.params.query);
  },
  watch: {
    // if the user changes any of these values, then make a new request to the API
    page: function() {
      this.getImages(this.$route.params.query);
    },
    limit: function() {
      this.getImages(this.$route.params.query);
    },
    order: function() {
      this.getImages(this.$route.params.query);
    }
  },
  computed: {
    getNumPages: function() {
      return Math.floor(this.pagination_count / this.limit) | 1;
    }
  }
};
</script>



<style scoped>
.gal-item {
  overflow: hidden;
  padding: 3px;
}
.gal-item .box {
  height: 100%;
  overflow: hidden;
}
.box img {
  height: 100%;
  width: auto;
  object-fit: cover;
}

.grid-gallery {
  display: grid;
  grid-auto-rows: 300px;
  grid-gap: 0.9rem;
  grid-auto-flow: row dense;
}

@media all and (min-width: 320px) {
  .grid-gallery {
    grid-template-columns: repeat(1, 1fr);
  }
}

@media all and (min-width: 768px) {
  .grid-gallery {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media all and (min-width: 1024px) {
  .grid-gallery {
    grid-template-columns: repeat(6, 1fr);
  }
}

.grid-gallery__item:nth-child(11n + 1) {
  grid-column: span 1;
}

.grid-gallery__item:nth-child(11n + 4) {
  grid-column: span 2;
  grid-row: span 1;
}

.grid-gallery__item:nth-child(11n + 6) {
  grid-column: span 3;
  grid-row: span 1;
}

.grid-gallery__item:nth-child(11n + 7) {
  grid-column: span 1;
  grid-row: span 2;
}

.grid-gallery__item:nth-child(11n + 8) {
  grid-column: span 2;
  grid-row: span 2;
}

.grid-gallery__item:nth-child(11n + 9) {
  grid-row: span 3;
}

.grid-gallery__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>