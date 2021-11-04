<template>
  <div class="q-pa-md">
    <q-layout view="lHh Lpr lFf" container style="height: 580px" class="shadow-2 rounded-borders">
      <q-header reveal elevated>
        <!-- <q-toolbar>
          <q-btn flat round dense icon="menu" @click="drawerLeft = !drawerLeft" />

          <q-toolbar-title>
            <strong>Quasar</strong> Framework
          </q-toolbar-title>

          <q-btn flat round dense icon="menu" @click="drawerRight = !drawerRight" />
        </q-toolbar> -->

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
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="star" />
              </q-item-section>

              <q-item-section>
                Formation et diplome
              </q-item-section>
            </q-item>

            <q-item active clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="star"/>
              </q-item-section>

              <q-item-section>
                Star
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="Home" />
              </q-item-section>

              <q-item-section>
                Send
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="send" />
              </q-item-section>

              <q-item-section>
                Drafts
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
        <q-page padding>
          <p v-for="n in 15" :key="n">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?
          </p>

          <!-- place QPageSticky at end of page -->
          <q-page-sticky position="top-left" :offset="[18, 18]">
            <q-btn round color="accent" icon="arrow_back" class="rotate-45" />
          </q-page-sticky>
          <q-page-sticky position="top" :offset="[0, 18]">
            <q-btn round color="accent" icon="arrow_back" class="rotate-90" />
          </q-page-sticky>
          <q-page-sticky position="top-right" :offset="[18, 18]">
            <q-btn round color="accent" icon="arrow_upward" class="rotate-45" />
          </q-page-sticky>
          <q-page-sticky position="right" :offset="[18, 0]">
            <q-btn round color="accent" icon="arrow_upward" class="rotate-90" />
          </q-page-sticky>
          <q-page-sticky position="left" :offset="[18, 0]">
            <q-btn round color="accent" icon="arrow_back" />
          </q-page-sticky>
          <q-page-sticky position="bottom-left" :offset="[18, 18]">
            <q-btn round color="accent" icon="arrow_forward" class="rotate-135" />
          </q-page-sticky>
          <q-page-sticky position="bottom" :offset="[0, 18]">
            <q-btn round color="accent" icon="arrow_forward" class="rotate-90" />
          </q-page-sticky>
          <q-page-sticky position="bottom-right" :offset="[18, 18]">
            <q-btn round color="accent" icon="arrow_forward" class="rotate-45" />
          </q-page-sticky>
        </q-page>
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
        { label: 'Formations et Diplome', value: 'one' },
        { label: 'Experience Professionnelle', value: 'two' },
        { label: 'Competances', value: 'three' },
         { label: 'Competances Linguistique', value: 'four' },
          { label: 'Activites Et Sports', value: 'five' }
      ]

    }
  }
}
</script>
