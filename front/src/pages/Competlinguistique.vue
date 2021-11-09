/* eslint-disable @typescript-eslint/no-unsafe-return */
<template>
 <div class="q-pa-md">
 <q-layout view="lHh Lpr lFf" container style="height: 500px" class="shadow-2 rounded-borders">

   <div class="q-pa-md">
    <q-markup-table flat bordered>
      <thead class="bg-teal">
        <tr>
          <th colspan="5">
            <div class="row no-wrap items-center">
              <q-img
                style="width: 150px"
                :ratio="1"
                class="rounded-borders"
                src="https://cdn.quasar.dev/img/donuts.png"
              />

              <div class="text-h4 q-ml-md text-white">COMPETENCES LINGUISTIQUES</div>
            </div>
          </th>
        </tr>
        <tr>
          <th class="text-left">Langues</th>
          <th class="text-right">Compréhensionà l’audition</th>
          <th class="text-right">Lecture</th>
          <th class="text-right">Rédaction écrite</th>
          <th class="text-right">Communicationorale</th>
        </tr>
      </thead>
      <tbody class="bg-grey-3">
        <tr>
          <td class="text-left">Français</td>
          <td class="text-right">TB</td>
          <td class="text-right">TB</td>
          <td class="text-right">B</td>
          <td class="text-right">B</td>
        </tr>
        <tr>
          <td class="text-left">Anglais</td>
          <td class="text-right">TB</td>
          <td class="text-right">TB</td>
          <td class="text-right">B</td>
          <td class="text-right">B</td>
        </tr>
        <tr>
          <td class="text-left">Espaniol</td>
          <td class="text-right">P</td>
          <td class="text-right">P</td>
          <td class="text-right">P</td>
          <td class="text-right">P</td>
        </tr>
      </tbody>
    </q-markup-table>
  <br><br>
     <p><strong>Grille d’évaluation :</strong>
     Très bonne<strong>(TB)</strong>
      Bonne<strong>(B)</strong>
     Assez-Bonne<strong>(AB)</strong>
     Passable<strong>(P)</strong>
     Niveau Scolaire<strong>(NS)</strong>
     </p>

  </div>
</q-layout>
</div>
</template>

