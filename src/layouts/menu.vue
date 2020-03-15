<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar color="primary">
        <q-btn flat dense round @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu">
          <q-icon name="menu" />
        </q-btn>
        <q-toolbar-title>
          <div class="row justify-between">
            <div class="col-2">
              <div>{{itl18n[$store.getters['user/getLanguage']].appName}}</div>
              <div style="font-size: 12px">
                {{itl18n[$store.getters['user/getLanguage']].appSubtitleName}}
              </div>
            </div>
            <div class="col-1">
              <q-select
                v-model="language"
                :options="listLanguages"
                @input="changeLanguage"
                dark
              />
            </div>
            <div class="col-2 q-mt-sm" style="font-size: 14px">
              {{itl18n[$store.getters['user/getLanguage']].scoreName}}: <span style="color: #00ff08">{{$store.getters['user/getScore']}}</span>
            </div>
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>
    <q-layout-drawer v-model="leftDrawerOpen" :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null" >
      <q-btn size="15px" class="full-width" align="left" @click.native="home" color="grey-8" flat>
        <q-icon size="18px" color="dark" name="home"/>&nbsp;&nbsp;<q-item>&nbsp;&nbsp;Home</q-item>
      </q-btn>
      <br>
    </q-layout-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>
import { openURL } from 'quasar'
import itl18n from 'assets/itl18n'
import listLanguages from 'assets/listLanguages'
export default {
  name: 'LayoutDefault',
  data () {
    return {
      user: {},
      leftDrawerOpen: this.$q.platform.is.desktop,
      selected: null,
      listLanguages,
      language: 'en',
      itl18n
    }
  },
  methods: {
    openURL,
    home () {
      this.$router.push('/')
    },
    changeLanguage (value) {
      this.$store.commit('user/setLanguage', value)
    }
  }
}
</script>
