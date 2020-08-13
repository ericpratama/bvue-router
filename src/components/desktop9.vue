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
            <div>
            <!-- Main Content Start-->
              <b-container fluid class="main_kontener">
                <b-row class="rowatas">
                    <b-col lg="3">
                      <b-breadcrumb :items="items"></b-breadcrumb>
                    </b-col>
                    
                    <b-col lg="9">
                      <div class="custom-control custom-switch text-right" style="margin-top:15px;">
                        <input type="checkbox" class="custom-control-input" id="customSwitches">
                        <label class="custom-control-label" for="customSwitches"></label>
                      </div>
                    </b-col>
                    
                </b-row>
                <div class="hr_line" >
                  <p style="width:100%;height:1px;background-color:#C4C4C4;margin-top:24px;"></p>
                </div>
                <div class="konten">
                  <b-tabs>
                    <b-tab>
                      <template v-slot:title>
                        <a>
                          <img class="sidebar_icon" src="@/assets/d9account.svg">
                        </a>
                        
                      </template>
                      <div class="text-left">
                        <p style="width:100%;height:1px;background-color:#C4C4C4;margin-top:24px;"></p>
                      </div>
                      <b-form @submit="onSubmit" @reset="onReset">
                        
                        <b-row>
                          <b-col lg="5"><p class="d4_header">Account Details</p></b-col>
                          <b-col lg="2"></b-col>
                          <b-col lg="5"><p class="d4_header">Change Password</p></b-col>
                        </b-row>
                        <b-row>
                          <b-col lg="5">
                            <b-form-group id="input-group-1" label="ID" label-for="input-1" description="You can not change this field" disabled>
                              <b-form-input
                                id="input-1"
                                v-model="form.id"
                                required
                                type="text"
                                readonly 
                                placeholder="JKT0003"
                              >
                              </b-form-input>
                            </b-form-group>
                          </b-col>
                          <b-col lg="2"></b-col>
                          <b-col lg="5">
                            <b-form-group id="input-group-2" label="Create Password" label-for="input-2" description="At least 5 character long">
                              <b-form-input
                                  id="input-2"
                                  v-model="form.password"
                                  type="password"
                                  required
                              >
                              </b-form-input>
                            </b-form-group>
                          </b-col>
                        </b-row>
                        <b-row>
                          <b-col lg="5">
                            <b-form-group id="input-group-3" label="Name" label-for="input-3">
                              <b-form-input
                                id="input-3"
                                v-model="form.name"
                                required
                                placeholder="Rika Sulistiyawati"
                              >
                              </b-form-input>
                            </b-form-group>
                          </b-col>
                          <b-col lg="2"></b-col>
                          <b-col lg="5">
                            <b-form-group id="input-group-4" label="Confirm Password" label-for="input-4" description="Re-type your new password">
                              <b-form-input
                                  id="input-4"
                                  v-model="form.cpassword"
                                  type="password"
                                  required
                              >
                              </b-form-input>
                            </b-form-group>
                          </b-col>
                        </b-row>
                        <b-row>
                          <b-col lg="5">
                            <b-form-group id="input-group-5" label="User Name" label-for="input-5" description="You can not change this field" disabled>
                              <b-form-input
                                id="input-5"
                                v-model="form.username"
                                required
                                type="text"
                                readonly 
                                placeholder="RikaJOG"
                              >
                              </b-form-input>
                            </b-form-group>
                          </b-col>
                        </b-row>
                        <!-- button save and cancel -->
                        <b-row style="padding-top:40px;">
                          <b-col lg="10">
                          </b-col>
                          <b-col lg="1">
                            <div class="text-right">
                              <a><b-button id="buttoncancel" class="buttonstyle">Cancel</b-button></a>
                            </div>
                          </b-col>
                          <b-col lg="1">
                            <div class="text-right">
                              <a ><b-button id="buttonsave" class="buttonstyle" type="submit">Save</b-button></a>
                            </div>
                          </b-col>
                        </b-row>
                      </b-form>
                    </b-tab>
                    <b-tab>
                      <template v-slot:title>
                        <img class="sidebar_icon" src="@/assets/d9schedule.svg">
                      </template>
                      <v-app id="dayspan" v-cloak>
                     <ds-calendar-app ref="app"
                        :calendar="calendar"
                        :read-only="readOnly"
                        @change="saveState">

                        <!-- <template slot="title">
                          DaySpan
                        </template> -->

                        <!-- <template slot="menuRight">
                          <v-btn icon large href="https://github.com/ClickerMonkey/dayspan-vuetify" target="_blank">
                            <v-avatar size="32px" tile>
                              <img src="https://simpleicons.org/icons/github.svg" alt="Github">
                            </v-avatar>
                          </v-btn>
                        </template> -->

                        <template slot="eventPopover" slot-scope="slotData">
                          <ds-calendar-event-popover
                            v-bind="slotData"
                            :read-only="readOnly"
                            @finish="saveState"
                          ></ds-calendar-event-popover>
                        </template>

                        <template slot="eventCreatePopover" slot-scope="{placeholder, calendar}">
                          <ds-calendar-event-create-popover
                            :calendar-event="placeholder"
                            :calendar="calendar"
                            :close="$refs.app.$refs.calendar.clearPlaceholder"
                            @create-edit="$refs.app.editPlaceholder"
                            @create-popover-closed="saveState"
                          ></ds-calendar-event-create-popover>
                        </template>

                        <template slot="eventTimeTitle" slot-scope="{calendarEvent, details}">
                          <div>
                            <v-icon class="ds-ev-icon"
                              v-if="details.icon"
                              size="14"
                              :style="{color: details.forecolor}">
                              {{ details.icon }}
                            </v-icon>
                            <strong class="ds-ev-title">{{ details.title }}</strong>
                          </div>
                          <div class="ds-ev-description">{{ getCalendarTime( calendarEvent ) }}</div>
                        </template>

                        <template slot="drawerBottom">
                          <div class="pa-3">
                            <v-checkbox
                              label="Read Only?"
                              v-model="readOnly"
                            ></v-checkbox>
                          </div>
                        </template>
                      </ds-calendar-app>
                    </v-app>
                    </b-tab>
                    
                  </b-tabs>
                </div>
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
import { Calendar, Month } from 'dayspan';
export default {
  name: 'desktop9',
    data() {
      return {
        items: [
        {
          text: 'My Team',
          href: '#'
        },
        {
          text: 'Member Detail',
          href: '#'
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
      counter:'close',
      storeKey: 'dayspanState',
      calendar: Calendar.months(),
      readOnly: false,
      defaultEvents: [
      {
        data: {
          title: 'Christmas Day',
          color: '#2196F3',
          calendar: 'US Holidays'
        },
        schedule: {
          month: [Month.DECEMBER],
          dayOfMonth: [25]
        }
      }
    ]
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
    },
    getCalendarTime(calendarEvent)
        {
          let sa = calendarEvent.start.format('a');
          let ea = calendarEvent.end.format('a');
          let sh = calendarEvent.start.format('h');
          let eh = calendarEvent.end.format('h');

          if (calendarEvent.start.minute !== 0)
          {
            sh += calendarEvent.start.format(':mm');
          }

          if (calendarEvent.end.minute !== 0)
          {
            eh += calendarEvent.end.format(':mm');
          }

          return (sa === ea) ? (sh + ' - ' + eh + ea) : (sh + sa + ' - ' + eh + ea);
        },

        saveState()
        {
          let state = this.calendar.toInput(true);
          let json = JSON.stringify(state);

          localStorage.setItem(this.storeKey, json);
        },

        loadState()
        {
          let state = {};

          try
          {
            let savedState = JSON.parse(localStorage.getItem(this.storeKey));

            if (savedState)
            {
              state = savedState;
              state.preferToday = false;
            }
          }
          catch (e)
          {
            // eslint-disable-next-line
            console.log( e );
          }

          if (!state.events || !state.events.length)
          {
            state.events = this.defaultEvents;
          }

          state.events.forEach(ev =>
          {
            let defaults = this.$dayspan.getDefaultEventDetails();

            ev.data = Vue.util.extend( defaults, ev.data );
          });

          this.$refs.app.setState( state );
        }
    
    
  }
}
</script>
<style>
#app{
    background-color: white;;
}
.main_kontener{
    padding-left:50px !important;
    padding-right:50px !important;
    padding-right: 50px;
    background-color: none;
    padding-top:20px;
    font-family: Roboto;
    font-style: normal;
}

.tab-content{
    background-color: white;
    padding-top:10px;   
    color:#555555;
    
}
hr{
    position: absolute;
    background: #C4C4C4;
    width: 98%;
    height: 1px;
}
/* bagian text dan header dalam konten */
.d4_header{
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 34px;
    letter-spacing: 0.5px;
    color: #555555;
}
.d-block{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
}

.text-muted{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 19px;
}
/* header tabs and NAVS */
.nav-tabs{
    border-bottom: 0px solid transparent !important;
    padding-left: 0px !important;
}

/* bagian text dan header dalam konten */
.nav-link.active, .nav-item.show .nav-link {
    color: #114483 !important;
    border-color: #dee2e6 #dee2e6 #fff !important;
    border-bottom: 5px solid #114483 !important;
    padding-left: 0px !important;
}
.nav-link{
    margin-right: 66px;
    border: 0px solid transparent !important;
    /* border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    padding:0px */
}
a {
    color: #9D9D9D !important;
    text-decoration: none;
    background-color: transparent;
}
/* header tabs and NAVS */

/* button */
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
/* button */
.text-left{
  padding-left:15px;
}
.anav{
  padding-bottom:0px;
}
#app{
  text-align: left;
}
</style>