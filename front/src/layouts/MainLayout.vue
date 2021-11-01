<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat round dense icon="assignment_ind" />

        <q-toolbar-title>Quasar</q-toolbar-title>

        <q-btn flat round dense icon="sim_card" class="q-mr-xs" />
        <q-btn flat round dense icon="gamepad"/>
      </q-toolbar>
      <q-toolbar inset>
        <q-breadcrumbs active-color="white" style="font-size: 16px">
          <q-breadcrumbs-el to="/" clickable label="Product" icon="Product"/>
          <q-breadcrumbs-el to="/category" clickable label="category" icon="widgets"/>
          <q-breadcrumbs-el label="Toolbar" />
        </q-breadcrumbs>
        <q-toolbar-title>
          Todo
        </q-toolbar-title>

        <div>Quasar v1{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>

      </q-list>
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item 
            to="/"
            clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="Home"/>
              </q-item-section>

              <q-item-section>
                Product
              </q-item-section>
            </q-item>
            <q-item 
            to="/category"
            clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="About"/>
              </q-item-section>

              <q-item-section>
                Category
              </q-item-section>
            </q-item>
                    <q-item-label
          header
        >
        Liens essentiels
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <div class="text-weight-bold">Razvan Stoenescu</div>
            <div>@rstoenescu</div>
          </div>
        </q-img>
    </q-drawer>
   <q-footer reveal elevated>
        <q-toolbar>
          <q-toolbar-title>Footer</q-toolbar-title>
        </q-toolbar>
      </q-footer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
 
<script lang="ts">
import EssentialLink from 'components/EssentialLink.vue'


const linksList = [
  // {
  //   title: 'Docs',
  //   caption: 'quasar.dev',
  //   icon: 'school',
  //   link: 'https://quasar.dev'
  // },
  // {
  //   title: 'Github',
  //   caption: 'github.com/quasarframework',
  //   icon: 'code',
  //   link: 'https://github.com/quasarframework'
  // },
  // {
  //   title: 'Discord Chat Channel',
  //   caption: 'chat.quasar.dev',
  //   icon: 'chat',
  //   link: 'https://chat.quasar.dev'
  // },
  // {
  //   title: 'Todo',
  //   // caption: 'forum.quasar.dev',
  //   icon: 'Setting',
  //   // link: 'https://forum.quasar.dev'
  // },
  // {
  //   title: 'Twitter',
  //   caption: '@quasarframework',
  //   icon: 'rss_feed',
  //   link: 'https://twitter.quasar.dev'
  // },
  // {
    // title: 'Facebook',
    // caption: '@QuasarFramework',
    // icon: 'public',
    // link: 'https://facebook.quasar.dev'
  // },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
];

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
