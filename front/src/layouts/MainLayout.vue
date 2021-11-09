<template>
  <div class="q-pa-md">
    <q-layout view="lHh Lpr lFf" container style="height: 580px" class="shadow-2 rounded-borders">
      <q-header reveal elevated>

<!-- header -->

    <q-toolbar class="bg-secondary text-white  shadow-2">
      <q-btn flat round dense icon="menu" @click="drawerLeft = !drawerLeft" />
      <q-space />
      <q-btn-toggle
        v-model="model"
        flat stretch
        toggle-color="yellow"
        :options="options"
      />
    </q-toolbar>

<!-- header -->

      </q-header>

      <q-footer reveal elevated>
        <q-toolbar>
          <q-btn flat round dense icon="menu" @click="drawerLeft = !drawerLeft" />

          <q-toolbar-title>
            <strong>Quasar</strong> Framework
          </q-toolbar-title>

          <q-btn flat round dense icon="menu" @click="drawerRight = !drawerRight" />
        </q-toolbar>
      </q-footer>

      <q-drawer
        v-model="drawerLeft"
        show-if-above
        :width="200"
        :breakpoint="400"
      >
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item
            to="/"
             clickable
              v-ripple>
              <q-item-section avatar>
                <q-icon name="menu" />
              </q-item-section>

              <q-item-section>
               INFORMATION
              </q-item-section>
            </q-item>

            <q-item
              to="/category"
            active clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="link"/>
              </q-item-section>

              <q-item-section>
                LINK
              </q-item-section>
            </q-item>

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
      <q-drawer
        side="right"
        v-model="drawerRight"
        bordered
        :width="150"
        :breakpoint="500"
        behavior="desktop"
        class="bg-grey-3"
      >

        <q-scroll-area class="fit">
          <div class="q-pa-sm">
            <div v-for="n in 50" :key="n">Drawer {{ n }} / 50</div>
          </div>
        </q-scroll-area>

      </q-drawer>

      <q-page-container>
      <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>

import { useQuasar } from 'quasar'
import { ref } from 'vue'

export default {
  setup () {
    const $q = useQuasar()

    return {
      drawerLeft: ref($q.screen.width > 700),
      drawerRight: ref($q.screen.width > 500),
        drawer: ref(false),


            model: ref('one'),

      options: [

        {  to:'/formation',
          label: 'Formations et Diplome',
          value: 'one'
        },

        { to:'/experience',
          label: 'Experience Professionnelle',
          value: 'two'
         },

        { to:'/competence',
          label: 'Competances',
          value: 'three',
          },

         { to:'/competencelinguistique',
           label: 'Competances Linguistique',
           value: 'four'
          },

          { to:'/activate',
            label: 'Activites Et Sports',
            value: 'five'
          }
      ]

    }
  }
}
</script>
