<template>
  <div id="app">
    <div class="container-fluid">
        <!-- Sidebar -->
        <div class="row">
          <div id="sidecol" class="flex-column justify-content-between sidecol">
            <div class="text-left">
              <ul class="nav flex-column">
                <li class="nav-item navitem">
                  <a v-on:click="greet" class="nav-link" href="#">
                    <img class="sidebar_icon" src="@/assets/sidebar_icon_0.svg">
                  </a>
                </li>
                
                <li class="nav-item navitem">
                  <a class="nav-link" href="#">
                    <img v-if="counter=='open' " src = "@/assets/longicon1.svg" >
                    <img v-if="counter=='close' " src = "@/assets/sidebar_icon_1.svg" >
                  </a>
                </li>
                <li class="nav-item navitem">
                  <a class="nav-link" href="#">
                    <img v-if="counter=='open' " src = "@/assets/longicon2.svg" >
                    <img v-if="counter=='close' " src = "@/assets/sidebar_icon_2.svg" >
                  </a>
                </li>
                <li class="nav-item navitem ">
                  <a class="nav-link" href="#">
                    <img v-if="counter=='open' " src = "@/assets/longicon3.svg" >
                    <img v-if="counter=='close' " src = "@/assets/sidebar_icon_3.svg" >
                  </a>
                </li>
                <li class="nav-item navitem ">
                  <a class="nav-link" href="#">
                    <img v-if="counter=='open' " src = "@/assets/longicon4.svg" >
                    <img v-if="counter=='close' " src = "@/assets/sidebar_icon_4.svg" >
                  </a>
                </li>
                <li class="nav-item navitem ">
                  <a class="nav-link" href="#">
                    <img v-if="counter=='open' " src = "@/assets/longicon5.svg" >
                    <img v-if="counter=='close' " src = "@/assets/sidebar_icon_5.svg" >
                  </a>
                </li>
                <li class="nav-item navitem ">
                  <a class="nav-link" href="#">
                    <img v-if="counter=='open' " src = "@/assets/longicon6.svg" >
                    <img v-if="counter=='close' " src = "@/assets/sidebar_icon_6.svg" >
                  </a>
                </li>
                <li class="nav-item navitem ">
                  <a class="nav-link" href="#">
                    <img v-if="counter=='open' " src = "@/assets/longicon7.svg" >
                    <img v-if="counter=='close' " src = "@/assets/sidebar_icon_7.svg" >
                  </a>
                </li>
                <li class="nav-item navitem ">
                  <a class="nav-link" href="#">
                    <img v-if="counter=='open' " src = "@/assets/longicon8.svg" >
                    <img v-if="counter=='close' " src = "@/assets/sidebar_icon_8.svg" >
                  </a>
                </li>
                <li class="nav-item navitem ">
                  <a class="nav-link" href="#">
                    <img v-if="counter=='open' " src = "@/assets/longicon9.svg" >
                    <img v-if="counter=='close' " src = "@/assets/sidebar_icon_9.svg" >
                  </a>
                </li>
              </ul>         
            </div>
            <div class="text-center">
              <ul class="nav flex-column">
                <li class="nav-item navitem anav">
                  <a class="anav nav-link" href="#">
                    <img v-if="counter=='open' " src = "@/assets/longicon10.svg" >
                    <img id="powered" v-if="counter=='close' " src = "@/assets/sidebar_icon_10.svg" >
                  </a>
                </li>
              </ul>
            </div> 
            <!-- tanda -->
          </div>

          <!-- Navbar-->
          <div class="col navcol" style="padding-left:0px;padding-right:0px;">
            <nav class="navbar navbar-expand-lg navbar-light" style="background-color:#EBEBEB;">
              <div class="collapse navbar-collapse">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <span class="navbar-text" style="margin-right:12px">Project</span>
                  </li>
                  <li class="nav-item dropdown">
                    <button class="btn btn-secondary btn-outline-light text-body dropdown-toggle" style="background: #FCFCFC; border-radius: 6px;" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Virtusee Project Name
                      <img src="@/assets/dropdown arrow.svg" style="margin-left:32px">
                    </button>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a class="dropdown-item" href="#">Action</a>
                      <a class="dropdown-item" href="#">Another action</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                  </li>
                </ul>
                <span class="navbar-text">
                  <img src="@/assets/lonceng.svg" style="margin-right:5px">Help and Support
                </span>
                <span class="linedivide1"></span>
                <div class="dropdown">
                  <button class="btn btn-secondary text-body dropdown-toggle" style="background:#EBEBEB; border-color:#EBEBEB;" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <img src="@/assets/icon profil.svg" alt="" style="margin-right:5px">
                      Dropdown button
                      <img src="@/assets/dropdown arrow.svg" alt="" style="margin-left:32px">
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>
              </div>
            </nav>
            
            <!-- Main Content Start-->
            <div class="main_kontener">
                              <!-- Main Content Start-->
                <b-container fluid>
                    <b-row>
                        <b-col lg="11">
                            <b-breadcrumb :items="items"></b-breadcrumb>
                        </b-col>
                        <b-col lg="1">
                            
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col lg="11">
                            <hr>
                        </b-col>
                        <b-col lg="1">
                            
                        </b-col>
                    </b-row>
                    <b-form @submit="onSubmit" @reset="onReset" class="konten">
                        <b-row>
                          
                            <b-col lg="5" style="background-color:;">
                                
                                <b-form-group id="input-group-1" label="ID" label-for="input-1">
                                  
                                    <b-form-input
                                        id="input-1"
                                        v-model="form.id"
                                        required
                                        placeholder="e.g SPV-1"
                                        font-awesome-icon="user"
                                    >
                                    </b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col lg="1" style="background-color:;">
                            </b-col>
                            <b-col lg="5" style="background-color:;">
                              
                                <b-form-group id="input-group-2" label="Create Password" label-for="input-2" description="At least 5 character long">
                                    
                                    <b-form-input
                                        id="input-1"
                                        v-model="form.password"
                                        type="password"
                                        required
                                        
                                    >
                                    </b-form-input>
                                    <span><font-awesome-icon icon="user" /></span>
                                </b-form-group>
                            </b-col>
                            <b-col lg="1" style="background-color:;">
                            </b-col>
                        </b-row>
                          <!-- row 1 end -->
                        <b-row>
                            <b-col lg="5">
                                <b-form-group id="input-group-3" label="Name" label-for="input-3">
                                    <b-form-input
                                        id="input-1"
                                        v-model="form.name"
                                        required
                                        placeholder="e.g Rika"
                                    >
                                    </b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col lg="1">
                            </b-col>
                            <b-col lg="5">
                                <b-form-group id="input-group-4" label="Confirm Password" label-for="input-4" description="Must same as above">
                                    <b-form-input
                                        id="input-1"
                                        v-model="form.cpassword"
                                        type="password"
                                        required
                                    >
                                    
                                    </b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col lg="1">
                            </b-col>
                        </b-row>
                              <!-- row 2 end -->
                        <b-row>
                            <b-col lg="5">
                                <b-form-group id="input-group-5" label="User Name" label-for="input-5" description="You can not change this after submitting">
                                    <b-form-input
                                        id="input-1"
                                        v-model="form.username"
                                        required
                                        placeholder="e.g SPV-Rika"
                                        
                                    ><font-awesome-icon icon="user" />
                                    </b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col lg="1"></b-col>
                            
                        </b-row>
                        <!-- row 3 end-->
                        <!-- row button -->
                        <b-row style="padding-bottom:40px;">
                          <b-col lg="9">
                          </b-col>
                          <b-col lg="1">
                            <div class="text-right">
                              <a>
                                <b-button id="buttoncancel" class="buttonstyle">Cancel</b-button>
                              </a>
                                
                            </div>
                          </b-col>
                          <b-col lg="1">
                            <div class="text-right">
                              <a >
                                <b-button id="buttonsave" class="buttonstyle" type="submit">Save</b-button>
                              </a>
                            </div>
                          </b-col>
                          
                        </b-row>
                        <!-- row button -->
                    </b-form>
                </b-container>
                            <!-- Main Content Start-->
            </div>
                              <!-- Main Content End-->

          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'desktop2',
        data() {
            return {
                items: [
                    {
                        text: 'My Team',
                        href: '#'
                    },
                    {
                        text: 'Add Member',
                        active: true
                    }
                ],
                form: {
                id: '',
                password: '',
                name: '',
                cpassword: '',
                username: '',
                show: true,
                },
                counter:'close'
            }
        },
        methods: {
        greet: function () {
            // `this` inside methods points to the Vue instance
            // `event` is the native DOM event
            if (this.counter == 'close') {
                this.counter = 'open'
                document.getElementById("sidecol").style.width = "219px";
            }
            else if (this.counter == 'open'){
                this.counter = 'close'
                document.getElementById("sidecol").style.width = "90px";
            }
        },
        onSubmit(evt) {
          evt.preventDefault()
          alert(JSON.stringify(this.form))
        },
        onReset(evt) {
          evt.preventDefault()
          // Reset our form values
          this.form.email = ''
          this.form.name = ''
          this.form.food = null
          this.form.checked = []
          // Trick to reset/clear native browser form validation state
          this.show = false
          this.$nextTick(() => {
            this.show = true
          })
        }
        
        
      }
}
// methods: {
//             onSubmit(evt) {
//                 evt.preventDefault()
//                 alert(JSON.stringify(this.form))
//             },
//             onReset(evt) {
//                 evt.preventDefault()
//                 // Reset our form values
//                 this.form.id = ''
//                 this.form.password = ''
//                 this.form.name = ''
//                 this.form.cpassword = ''
//                 this.form.username = ''
//                 // Trick to reset/clear native browser form validation state
//                 this.show = false
//                 this.$nextTick(() => {
//                 this.show = true
//                 })
//             }
//         }
</script>
<style>
body{
    /* margin:0 px;
    padding:0 px; */
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
}
.main_kontener{
    background-color: none;
    padding-top:20px;
    padding-left: 10%;
}
.konten{
    padding-top: 30px;
    background-color: none;
    text-align: left;
}

hr{
  position: absolute;
  background: #C4C4C4;
  width: 98%;
  height: 1px;
}

.buttonstyle{
  float: right;
}
#buttoncancel{
  width:114px;
  height: 40px;
  color:#114483; background-color:white;
  border-color:#114483;
  margin-right:12px;
  /* style button tidak masuk jika menggunakan class */
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
}
#buttonsave{
  width:99px;
  height: 40px;
  background-color:#114483;
  /* style button tidak masuk jika menggunakan class */
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
}

ul.nav.flex-column.icon10{
  padding:0px;
}
.text-left{
  padding-left:15px;
}
.anav{
  padding-bottom:0px;
}
</style>