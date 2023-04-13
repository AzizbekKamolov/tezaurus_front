<template>
  <div class="flex items-center justify-center min-h-screen">
    <form
      class="w-full max-w-sm mx-auto bg-white p-8 rounded-md drop-shadow-2xl"
    >
      <h1 class="text-2xl font-bold mb-6 text-center">Registration Form</h1>
      <AuthInput
        :type="'text'"
        :name="'name'"
        :labelName="'Name'"
        :errorrMessage="``"
      />
      <AuthInput
        :type="'text'"
        :name="'login'"
        :labelName="'Login'"
        :errorrMessage="``"
      />
      <AuthInput
        :type="'password'"
        :name="'password'"
        :labelName="'Password'"
        :errorrMessage="``"
      />
      <AuthInput
        :type="'password'"
        :name="'confirmation_password'"
        :labelName="'Confirm Password'"
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
  name: "RegisterView",
  components: { AuthButton, AuthInput },
  methods:{
    submitHandler(e) {
      e.preventDefault();
      this.$store.dispatch("register");
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
