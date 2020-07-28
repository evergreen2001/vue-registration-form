<template>
  <div>
    <h1>Register with us</h1>

    <div class="container">
      
        <div class="card bg-white col-lg-6 mx-auto my-5">
          <div class="card-body">
            <div class="row">
              <!-- <h2 class="display-5 text-center">Hozula Dev</h2> -->
<form>
              <div v-if="step === 1">
                <h2>Step 1</h2>
                <div class="col-xl-12">
                  <div class="form-group">
                    <label for="name"></label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      class="form-control"
                      v-model="userData.name"
                      required
                    />
                  </div>
                </div>

                <div class="col-xl-12">
                  <div class="form-group">
                    <label for="flier">Your Date of Birth</label>

                    <input
                      type="date"
                      placeholder="Date of birth"
                      class="form-control"
                      v-model="userData.DOB"
                      required
                    />
                  </div>
                </div>

                <div class="col-xl-12">
                  <span class>Gender:</span>
                  <br />
                  <div class="form-check form-check-inline ml-2 mb-5 mt-3">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios1"
                      value="Male"
                      v-model="userData.gender"
                      required
                    />
                    <label class="form-check-label" for="Male">Male</label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios2"
                      value="Female"
                      v-model="userData.gender"
                      required
                    />
                    <label class="form-check-label" for="Female">Female</label>
                  </div>
                </div>

                <button class="btn btn-primary" @click="next()"> Next</button>

              </div>
</form>
              <div v-if="step ===2">

                  <h1>Step 2</h1>
                <div class="col-xl-12">
                  <div class="form-group">
                    <textarea
                      placeholder="Tell us About your self"
                      class="form-control"
                      v-model="userData.about"
                      required
                      row="3"
                    />
                  </div>
                </div>

                <div class="col-xl-12">
                  <div class="form-group">
                    <input
                      type="text"
                      placeholder="Your skill"
                      class="form-control"
                      v-model="userData.skill"
                      required
                    />
                  </div>
                </div>

                <div class="col-xl-12">
                  <div class="form-group">
                    <input
                      type="text"
                      placeholder="Social media Handle (IG/TWITTER)"
                      class="form-control"
                      v-model="userData.socialMedia"
                      required
                    />
                  </div>
                </div>

                <div class="col-xl-12">
                  <div class="form-group">
                    <input
                      type="text"
                      placeholder="Category of Business"
                      class="form-control"
                      v-model="userData.business"
                      required
                    />
                  </div>
                </div>
                <button class="btn btn-primary" @click="previous()"> previous</button>

                <button class="btn btn-primary" @click="next()"> Next</button>

              </div>


              <div v-if="step ===3">

                  <h1>Step 3</h1>

              <div class="col-xl-12">
                <div class="form-group">
                  <label for="flier">Upload Flier</label>
                  <input
                    type="file"
                    placeholder
                    class="form-control-file"
                    @change="showImage"
                    accept="image/*"
                    required
                  />
                  <img :src="this.preview" />
                </div>
              </div>

              <div class="col-xl-12">
                <div class="form-group">
                  <label for="flier">Upload Rate Card</label>

                  <input
                    type="file"
                    placeholder
                    class="form-control-file"
                    @change="showImage2"
                    accept="image/*"
                    required
                  />
                  <img :src="preview2" />
                </div>
              </div>

              <div class="col-xl-12">
                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Website"
                    class="form-control"
                    v-model="userData.website"
                    required
                  />
                </div>
              </div>

              <div class="col-xl-12">
                <div class="form-group">
                  <textarea
                    placeholder="Comment"
                    class="form-control"
                    v-model="userData.comment"
                    required
                    row="3"
                  />
                </div>
              </div>

              <!-- <button class="btn btn-dark btn-lg" type="submit" @click="submit()">Submit</button> -->



    <button class="btn btn-primary" @click="previous()"> previous</button>

                <button class="btn btn-primary" @click="next()"> REview</button>

              </div>

              <div class="final-page" v-if="step === 4">


<!-- {{userData}} -->

<p>

    Name:{{userData.name}}
</p>
Date of birth: {{userData.DOB}}

              </div>
            </div>
          </div>
        </div>
    
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      step: 1,
      preview: null,
      image: null,
      preview2: null,
      image2: null,
      userData: {
        name: null,
        DOB: null,
        gender: null,
        about: null,
        skill: null,
        socialMedia: null,
        business: null,
        flierImg: "",
        rateCard: "",
        website: null,
        comment: null
      }
    };
  } , 
  methods:{

      previous(){
this.step --
      } , 

      next(){


if(this.userData.name == null){

    alert('check form for errors ')
}

else{
this.step ++

} }, 

submit(){


    this.step += 4
}



 
  
}};
</script>