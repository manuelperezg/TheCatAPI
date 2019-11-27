<template>
  <header class="header-global">
    <base-nav class="navbar-main" transparent type effect="dark" expand>
      <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
        <img
          src="https://gatosyhumanos.com/wp-content/uploads/2018/04/cropped-logo-3.png"
          alt="logo"
        />
      </router-link>

      <div class="row" slot="content-header" slot-scope="{closeMenu}">
        <div class="col-6 collapse-brand">
          <a href="/">
            <img src="https://gatosyhumanos.com/wp-content/uploads/2018/04/cropped-logo-3.png" />
          </a>
        </div>
        <div class="col-6 collapse-close">
          <close-button @click="closeMenu"></close-button>
        </div>
      </div>

      <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
        <base-dropdown tag="li" class="nav-item">
          <a slot="title" href="#" class="nav-link" data-toggle="dropdown" role="button">
            <i class="ni ni-collection d-lg-none"></i>
            <span class="nav-link-inner--text">Types</span>
          </a>
          <router-link to="/search/mime_types=gif" class="dropdown-item">Gif</router-link>
          <router-link to="/search/mime_types=jpg" class="dropdown-item">Jpg</router-link>
          <router-link to="/search/mime_types=png" class="dropdown-item">Png</router-link>
        </base-dropdown>
      </ul>
      <ul class="navbar-nav align-items-lg-center ml-lg-auto"></ul>
    </base-nav>
  </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";
import BaseDropdown from "@/components/BaseDropdown";
import CloseButton from "@/components/CloseButton";

export default {
  components: {
    BaseNav,
    CloseButton,
    BaseDropdown
  }
};
</script>
<style>
</style>
