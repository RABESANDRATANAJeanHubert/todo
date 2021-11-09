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
                 <q-tab name="innerMovies"  label="Septembre 2020"/>
                <q-tab name="innerAlarms" label="Novembre 2019" />
                <q-tab name="innerMails"  label="Aout 2019" />
                <q-tab name="innersecond" label="Aout 2018 " />
                <q-tab name="innerlast" label="Décembre 2017 " />
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
                  <div class="text-h4 q-mb-md"> <strong>Septembre 2020</strong></div>
                 <p>Admis au concours de poste Assistant informatique écrit et orale au sein de la société OTIV SAVA</p>
                </q-tab-panel>

                <q-tab-panel name="innerAlarms">
                    <div class="text-h4 q-mb-md"> <strong>Novembre 2019</strong></div>
                  <p>Stage pratique au sein de la société Nir-Info</p>
                     <div class="text-h4 q-mb-md"> <strong>Thème :</strong></div>
                     <p>Conception et réalisation d’une gestion personnelle</p>
                     <div class="text-h4 q-mb-md"> <strong>Langage :</strong></div>
                        <p>PHP, JQuery, Ajax, JavaScript</p>
                </q-tab-panel>

                <q-tab-panel name="innerMails">
                  <div class="text-h4 q-mb-md"><strong>Aout 2019</strong></div>
                  <p>Projet d’équipe pour la réalisation d’une application de gestion de notes au sein de l’école Nationale Informatique.</p>
                  <div class="text-h4 q-mb-md"> <strong>Langage utilisé  :</strong></div>
                  <p>JAVA/ASP.NET/JSP.</p>
                </q-tab-panel>

              <q-tab-panel name="innersecond">
                    <div class="text-h4 q-mb-md"> <strong>Aout 2018 </strong></div>
                  <p>Projet d’équipe pour la réalisation d’une application de gestion de
prestation de médecine au sein de l’école Nationale Informatique</p>
                  <div class="text-h4 q-mb-md"> <strong>Langage utilisé  :</strong></div>
                  <p>PHP. Javascript,Jquery,Bootstrap.</p>
                </q-tab-panel>

                <q-tab-panel name="innerfirst">
                    <div class="text-h4 q-mb-md"> <strong>Décembre 2018 </strong></div>
                  <p>Projet sur la conception et réalisation d’une application web via
PHP et MySQL au sein de Ministère de la jeunesse et du Sport Antananarivo
Ambohijatovo.</p>
<div class="text-h4 q-mb-md"> <strong>Theme  :</strong></div>
<p> Conception et Mise en œuvre de base de données de fédération de sport à
Madagascar</p>
                </q-tab-panel>
                   <q-tab-panel name="innerlast">
                    <div class="text-h4 q-mb-md"> <strong>Décembre 2018 </strong></div>
                  <p>Projet de fin d’années sur la conception et réalisation de gestion
des utilisateurs via QT au sein de l’Ecole National Informatique Fianarantsoa(ENI).</p>

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
