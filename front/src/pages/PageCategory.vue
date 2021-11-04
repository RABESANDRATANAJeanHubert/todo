<template>
  <q-page class="row items-center justify-evenly" style="background-color:#D3D3D3">
  <h1>Hello</h1>
  <q-form
      @submit="onSubmit"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="input.email"
        label="Your email *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Please type something']"
      />

      <q-input
        filled
        type="password"
        v-model="input.password"
        label="Your password *"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Please type your age',
        ]"
      />
      <q-btn :loading="loading" label="Submit" type="submit" color="primary"/>
    </q-form>
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
