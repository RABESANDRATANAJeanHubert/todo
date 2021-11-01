<template>
  <q-page class="row items-center justify-evenly">
  <h1>Hello</h1>
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
