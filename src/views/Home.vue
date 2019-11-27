<template>
  <section class>
    <v-app>
      <video autoplay muted loop id="myVideo">
        <source src="@/assets/vendor/video/gatitos.mp4#t=45,120" type="video/mp4" />Your browser does not support HTML5 video.
      </video>

      <div class="container" style="margin-top:250px">
        <div class="row justify-content-center align-items-center">
          <div class="col-lg-10 text-center card shadow m-2">
            <p class="lead text-black">Seleccione un filtro de búsqueda</p>
            <div class="row">
              <div class="col-lg-3 col-md-3 col-sm-12">
                <v-select
                  v-model="selected_breed"
                  :items="breeds"
                  item-text="name"
                  item-value="id"
                  dense
                  solo
                  placeholder="Breeds..."
                ></v-select>
              </div>

              <div class="col-lg-3 col-md-3 col-sm-12">
                <v-select
                  v-model="selected_category"
                  :items="categories"
                  item-text="name"
                  item-value="id"
                  dense
                  solo
                  placeholder="Categories..."
                ></v-select>
              </div>
              <div class="col-lg-3 col-md-3 col-sm-12">
                <v-select
                  v-model="selected_type"
                  :items="types"
                  label="Type"
                  dense
                  solo
                  placeholder="Types..."
                ></v-select>
              </div>
              <div class="col-lg-3 col-md-3 col-sm-12">
                <button type="button" class="btn btn-primary wrn-btn" @click="buscar">Search</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </v-app>
  </section>
</template>

<script>
import { cats } from "../mixins/the_cats.js";
export default {
  name: "Home",
  mixins: [cats],
  data() {
    return {
      selected_breed: "",
      selected_category: "",
      selected_type: "",
      types: ["all", "gif", "jpg", "png"]
    };
  },
  mounted() {
    this.getCategories();
    this.getBreeds();
  },
  methods: {
    buscar() {
      var query = "";
      if (this.selected_breed !== "") {
        query += "breed_ids=" + this.selected_breed + "&";
      }
      if (this.selected_category !== "") {
        query += "category_ids=" + this.selected_category + "&";
      }
      if (this.selected_type !== "") {
        query += "mime_types=" + this.selected_type;
      }
      this.$router.push("/search/" + query);
    }
  }
};
</script>

 <style scoped>
#myVideo {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 90%;
}
</style>
