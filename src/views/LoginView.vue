<template>
  <div class="flex items-center justify-center min-h-screen">
    <form
      class="w-full max-w-sm mx-auto bg-white p-8 rounded-md drop-shadow-2xl"
    >
      <h1 class="text-2xl font-bold mb-6 text-center">Login Form</h1>
    <ValidationError :validationErrors="validationErrors" v-if="validationErrors"/>

      <AuthInput :type="'text'" :name="'login'" :labelName="'Login'" v-model="login"/>
      <AuthInput
        :type="'password'"
        :name="'password'"
        :labelName="'Password'"
        v-model="password"
      />
      <AuthButton :disabled="isLoadingButton" @click="submitHandler">Login</AuthButton>
      <RouterLink :to="{ name: 'register' }" class="text-blue-500"
        >Ro'yxatdan o'tish</RouterLink>
    </form>
  </div>
</template>
<script>
import ValidationError from '../components/ValidationError.vue';
import AuthButton from "../ui_components/AuthButton.vue";
import AuthInput from "../ui_components/AuthInput.vue";

export default {
  name: "LoginView",
  components: { AuthButton, AuthInput, ValidationError},
  methods: {
    submitHandler(e) {
      e.preventDefault();
      const data = {
        login: this.login,
        password: this.password,
      };
      this.$store
        .dispatch("login", data)
        .then((user) => {
          this.$router.push({name : 'home'})
          // console.log(user)
        })
        .catch((error) => {
          console.log("error", error.data.errors);
        });
    },
  },
  computed: {
    isLoadingButton() {
      return this.$store.state.auth.isLoading;
    },
    validationErrors(){
      return this.$store.state.auth.errors
    }
  },
};
</script>
<style></style>
