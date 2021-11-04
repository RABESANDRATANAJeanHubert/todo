<template>
  <q-page class="row items-center justify-evenly" style="background-color:#D3D3D3">
  <div class="q-pa-mdi-36px" style="max-width: 600px">

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="name"
        label="Your name *"
        hint="Name and surname"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        filled
        type="number"
        v-model="age"
        label="Your age *"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please type your age',
          val => val > 0 && val < 100 || 'Please type a real age'
        ]"
      />

      <q-toggle v-model="accept" label="I accept the license and terms" />

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>

  </div>

  </q-page>


</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {useLogin} from '../firebase/user/login.service';

export default defineComponent({
  name: 'PageIndex',
  components: {  },
  setup() {
    return {
      ...useLogin()
    };
  }
});
</script>
