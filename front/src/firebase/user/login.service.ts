import { ref, reactive } from 'vue';

export class Login {
  email = '';
  password = '';
}

export const useLogin = () => {

  const input = reactive<Login>(new Login());

  const loading = ref<boolean>(false);

  function onSubmit() {

    loading.value = true;

    setTimeout(() => loading.value = false, 3000);

  }
  return { input ,loading,onSubmit};
}
