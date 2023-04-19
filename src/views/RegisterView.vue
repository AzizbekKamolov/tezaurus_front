<template>
  <div class="flex items-center justify-center min-h-screen">
    <form
    class="w-full max-w-sm mx-auto bg-white p-8 rounded-md drop-shadow-2xl"
    >
    <h1 class="text-2xl font-bold mb-6 text-center">Registration Form</h1>
    <ValidationError :validationErrors="validationErrors" v-if="validationErrors"/>
      <AuthInput
        :type="'text'"
        :name="'first_name'"
        :labelName="'First name'"
        v-model="first_name"
      />
      <AuthInput
        :type="'text'"
        :name="'login'"
        :labelName="'Login'"
        v-model="login"
      />
      <AuthInput
        :type="'password'"
        :name="'password'"
        :labelName="'Password'"
        v-model="password"
      />
      <AuthInput
        :type="'password'"
        :name="'confirmation_password'"
        :labelName="'Confirm Password'"
        v-model="confirmation_password"
      />
      <AuthButton :disabled="isLoadingButton" @click="submitHandler"
        >Register</AuthButton
      >
      <RouterLink :to="{ name: 'login' }" class="text-blue-500"
        >Avval ro'yxatdan o'tganmisiz</RouterLink
      >
    </form>
  </div>
</template>
<script>
import ValidationError from '../components/ValidationError.vue';
import AuthButton from "../ui_components/AuthButton.vue";
import AuthInput from "../ui_components/AuthInput.vue";
export default {
  data() {
    return {
      first_name: "",
      login: "",
      password: "",
      confirmation_password: "",
    };
  },
  name: "RegisterView",
  components: { AuthButton, AuthInput, ValidationError },
  methods: {
    submitHandler(e) {
      e.preventDefault();
      const data = {
        first_name: this.first_name,
        login: this.login,
        password: this.password,
        confirmation_password: this.confirmation_password
      };
      this.$store
        .dispatch("register", data)
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
