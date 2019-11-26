<template>
  <section class="section-hero section-shaped my-0">
    <video autoplay muted loop id="myVideo">
        <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4">
        Your browser does not support HTML5 video.
    </video>

    <div class="shape shape-style-1 shape-primary">
      <span class="span-150"></span>
      <span class="span-50"></span>
      <span class="span-50"></span>
      <span class="span-75"></span>
      <span class="span-100"></span>
      <span class="span-75"></span>
      <span class="span-50"></span>
      <span class="span-100"></span>
      <span class="span-50"></span>
      <span class="span-100"></span>
    </div>
    <div class="container shape-container d-flex align-items-center">
      <div class="col px-0">
        <div class="row justify-content-center align-items-center">
          <div class="container">
            <form action="#" method="post" novalidate="novalidate">
              <div class="row">
                <div class="col-lg-12">
                  <div class="row">
                    <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                      <input
                        type="text"
                        class="form-control search-slt"
                        placeholder="Enter Pickup City"
                      />
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                      <input
                        type="text"
                        class="form-control search-slt"
                        placeholder="Enter Drop City"
                      />
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                      <select class="form-control search-slt" id="exampleFormControlSelect1">
                        <option>Select Vehicle</option>
                        <option>Example one</option>
                        <option>Example one</option>
                        <option>Example one</option>
                        <option>Example one</option>
                        <option>Example one</option>
                        <option>Example one</option>
                      </select>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                      <button type="button" class="btn btn-danger wrn-btn">Search</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div class="col-lg-7 text-center pt-lg">
            <!-- <img src="img/brand/white.png" style="width: 200px;" class="img-fluid"> -->

            <p class="lead text-white mt-4 mb-5">Seleccione la categoria para visualizar.</p>
            <!-- <p class="lead text-white mt-4 mb-5">A beautiful Design System for Bootstrap 4. It's Free and Open Source.</p> -->
            <!-- <div class="btn-wrapper">
                            <base-button tag="a"
                                         href="https://demos.creative-tim.com/vue-argon-design-system/documentation"
                                         class="mb-3 mb-sm-0"
                                         type="info"
                                         icon="fa fa-code">
                                Components
                            </base-button>
                            <base-button tag="a"
                                         href="https://www.creative-tim.com/product/vue-argon-design-system"
                                         class="mb-3 mb-sm-0"
                                         type="white"
                                         icon="ni ni-cloud-download-95">
                                Download Vue
                            </base-button>
            </div>-->
          </div>
        </div>
        <!-- <div class="row align-items-center justify-content-around stars-and-coded">
                    <div class="col-sm-4">
                        <span class="text-white alpha-7 ml-3">Star us on</span>
                        <a href="https://github.com/creativetimofficial/argon-design-system" target="_blank" title="Support us on Github">
                            <img src="img/brand/github-white-slim.png" style="height: 22px; margin-top: -3px">
                        </a>
                    </div>
                    <div class="col-sm-4 mt-4 mt-sm-0 text-right">
                        <span class="text-white alpha-7">Coded by</span>
                        <a href="https://www.creative-tim.com" target="_blank" title="Creative Tim - Premium Bootstrap Themes and Templates">
                            <img src="img/brand/creativetim-white-slim.png" class="ml-3" style="height: 30px;">
                        </a>
                    </div>
        </div>-->
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

 <style scoped>
#myVideo {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
}
</style>
