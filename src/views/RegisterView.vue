<template>
  <div class="flex items-center justify-center min-h-screen">
    <form
      class="w-full max-w-sm mx-auto bg-white p-8 rounded-md drop-shadow-2xl"
    >
      <h1 class="text-2xl font-bold mb-6 text-center">Registration Form</h1>
      <AuthInput
        :type="'text'"
        :name="'first_name'"
        :labelName="'First name'"
        :errorrMessage="``"
        v-model="first_name"
      />
      <AuthInput
        :type="'text'"
        :name="'login'"
        :labelName="'Login'"
        :errorrMessage="``"
        v-model="login"
      />
      <AuthInput
        :type="'password'"
        :name="'password'"
        :labelName="'Password'"
        :errorrMessage="``"
        v-model="password"
      />
      <AuthInput
        :type="'password'"
        :name="'confirmation_password'"
        :labelName="'Confirm Password'"
        v-model="confirmation_password"
        :errorrMessage="``"
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
import AuthButton from "../ui_components/AuthButton.vue";
import AuthInput from "../ui_components/AuthInput.vue";

export default {
  data() {
    return {
      first_name: "",
      login: "",
      password: "",
      consirmation_password: "",
    };
  },
  name: "RegisterView",
  components: { AuthButton, AuthInput },
  methods: {
    submitHandler(e) {
      e.preventDefault();
      const data = {
        first_name: "admin1",
        login: "admisssndd1ss",
        password: "admin",
        confirmation_password: "admin",
      };
      this.$store
        .dispatch("register", data)
        .then((user) => {
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
  },
};
</script>
<style></style>
