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
              <img class="grid-gallery__image" :src="imagen.url" />
            </a>
          </div>
        </div>
          <div class="text-center mt-3">
            <v-pagination v-model="page" :length="10" circle color="#1565C0" next-icon="mdi-chevron-right" ></v-pagination>
          </div>
      </div>
    </v-content>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Gatos",
  components: {},
  data() {
    return {
      api_key: '4d798a51-42ad-49e1-b89d-6afa753ee6db',
      categories: [],
      selected_category:{},
      images: [],
      order: "Asc",
      page: 1,
      limit: 15,
      pagination_count: 0 //default until we get a result with the 'Pagination-Count' header in the response
    };
  },
  created() {
    this.getImages();
    // this.getCategories();
  },
  watch: {
    // if the user changes any of these values, then make a new request to the API
    page: function() {
      this.getImages();
    },
    limit: function() {
      this.getImages();
    },
    order: function() {
      this.getImages();
    },
    selected_category: function()
    {
        console.log(this.selected_category)
        this.getImages();
    }
  },
  computed: {
    getNumPages: function() {
      return Math.floor(this.pagination_count / this.limit) | 0;
    }
  },
  methods: {
    async nextBtn() {
      this.page++;
      await this.getImages();
    },
    async getCategories()
    {
        try{
            axios.defaults.headers.common['x-api-key'] = this.api_key // Replace this with your API Key, as it's set to defaults it will be used from now onwards
                    
            let response = await axios.get('https://api.thecatapi.com/v1/categories/' ) 
            this.categories = response.data;
            // console.log("-- ("+this.categories.length +") Categories from TheCatAPI.com")
                    
            // pick one to display initially
            this.selected_category = this.categories[2]
        }catch(err){
            console.log(err)
        }
    },
    async getImages() {
      try {
        axios.defaults.headers.common["x-api-key"] =
          this.api_key; // Replace this with your API Key

        let query_params = {
          limit: this.limit,
          order: this.order,
          page: this.page - 1
        };
        let response = await axios.get(
          "https://api.thecatapi.com/v1/images/search",
          { params: query_params }
        );

        this.pagination_count = response.headers["pagination-count"];
        this.images = response.data;
       /*  console.log(
          "-- (" + this.images.length + ") Images from TheCatAPI.com"
        ); */
        // console.log(this.pagination_count, "images available for this query.");
      } catch (err) {
        console.log(err);
      }
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