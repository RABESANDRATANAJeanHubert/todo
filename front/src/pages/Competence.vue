<template>

 <div class="q-pa-md">
 <q-layout view="lHh Lpr lFf" container style="height: 580px" class="shadow-2 rounded-borders">
      <div class="q-pa-md">
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h6">MON COMPETENCE PERSONNELLE</div>
        <div class="text-subtitle2">by Hubert</div>
      </q-card-section>

      <q-tabs v-model="tab" class="text-teal">
        <q-tab label="Systèmes d’exploitation" name="one" />
        <q-tab label="SGBD" name="two" />
        <q-tab label="Langages de programmation" name="three" />
        <q-tab label="Technologies web" name="four" />
        <q-tab label="Framework" name="five" />
        <q-tab label="Méthode de conception " name="six" />
        <q-tab label="Langage de conception" name="seven" />
      </q-tabs>
      <q-separator />
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="one">
           Windows, linux
        </q-tab-panel>
        <q-tab-panel name="two">
         MYSQL
        </q-tab-panel>
        <q-tab-panel name="three">
          C++, Visual Basic, PHP, AJAX, JAVASCRIPT,
JAVA, Python
        </q-tab-panel>
            <q-tab-panel name="four">
         HTML5, CSS3, Bootstrap
    </q-tab-panel>
    <q-tab-panel name="five">
          QT, ASP, SYMFONY, Code Igniteur, Yii Framework, Angular,Quasar
        </q-tab-panel>
            <q-tab-panel name="six">
         Merise
        </q-tab-panel>
            <q-tab-panel name="seven">
        UML
        </q-tab-panel>

         </q-tab-panels>
    </q-card>
  </div>
 </q-layout>
 </div>

</template>


<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      tab: ref('one')
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 900px
  height: 300px

</style>
