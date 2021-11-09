<template>
 <div class="q-pa-md">
 <q-layout view="lHh Lpr lFf" container style="height: 580px" class="shadow-2 rounded-borders">

      <q-page-container>
        <q-page padding style="padding-top: 66px">
          <!-- <p v-for="n in 5" :key="n">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?
          </p> -->
          <!-- debut Table Panel -->

          <!-- <div class="q-pa-md" style="max-width: 600px"> -->
    <q-card>
      <q-tabs
        v-model="tab"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
      >
        <q-tab  label="Annee de formation" />
        <!-- <q-tab name="alarms" label="Alarms" />
        <q-tab name="movies" label="Movies" /> -->
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="mails" class="q-pa-none">

          <q-splitter
            v-model="splitterModel"
            style="height: 400px"
          >

            <template v-slot:before>
              <q-tabs
                v-model="innerTab"
                vertical
                class="text-teal"
              >
                 <q-tab name="innerMovies"  label="2019-2020"/>
                <q-tab name="innerAlarms" label="2018-2019" />
                <q-tab name="innerMails"  label="2017-2018" />
                <q-tab name="innersecond" label="2016-2017 " />
                <q-tab name="innerfirst"  label="2015-2016" />
                <!-- <q-tab name="innerMovies"  label="2014-2015" /> -->
              </q-tabs>
            </template>

            <template v-slot:after>
              <q-tab-panels
                v-model="innerTab"
                animated
                transition-prev="slide-down"
                transition-next="slide-up"
              >
                <q-tab-panel name="innerMovies">
                  <div class="text-h4 q-mb-md"> <strong>2019-2020</strong></div>
                 <p>Première année de la formation en MASTER Professionnelle en informatique à l’Ecole Nationale d’Informatique (ENI), Université de Fianarantsoa.</p>
                </q-tab-panel>

                <q-tab-panel name="innerAlarms">
                    <div class="text-h4 q-mb-md"> <strong>2018-2019</strong></div>
                  <p>Deuxieme  annee de la formation en LICENCE Professionnelle en informatique à l’Ecole Nationale d’Informatique (ENI), Université de Fianarantsoa</p>
                     <div class="text-h4 q-mb-md"> <strong>Spécialité :</strong></div>
                     <p>Génie logiciel et Base de données</p>
                </q-tab-panel>

                <q-tab-panel name="innerMails">
                  <div class="text-h4 q-mb-md"><strong>2017-2018</strong></div>
                  <p>Première année de la formation en LICENCE Professionnelle en informatique à l’ENI.</p>
                </q-tab-panel>

              <q-tab-panel name="innersecond">
                    <div class="text-h4 q-mb-md"> <strong>2016-2017</strong></div>
                  <p>Première nnée à l’Ecole Supérieur Polytechnique Antsiranana.</p>
                </q-tab-panel>

                <q-tab-panel name="innerfirst">
                    <div class="text-h4 q-mb-md"> <strong>2015-2016</strong></div>
                  <p> Classe de terminale au Lycée Saint Pierre Canisius d’Ambohipo Antananarivo. Obtention du baccalauréat série C.</p>
                </q-tab-panel>
              </q-tab-panels>
            </template>

          </q-splitter>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  <!-- </div> -->
          <!-- Fin table Panel -->

          <!-- place QPageSticky at end of page -->
          <q-page-sticky expand position="top">
            <q-toolbar class="bg-blue text-white">
              <q-avatar>
                <!-- <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"> -->
              </q-avatar>
              <q-toolbar-title>
                FORMATION ET DIPLOMES
              </q-toolbar-title>
            </q-toolbar>
          </q-page-sticky>
        </q-page>
      </q-page-container>

 </q-layout>
 </div>
</template>


<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      tab: ref('mails'),
      innerTab: ref('innerMails'),
      splitterModel: ref(20)
    }
  }
}
</script>
