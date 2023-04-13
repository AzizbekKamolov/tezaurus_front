<template>
  <div class="flex items-center justify-center min-h-screen">
    <form
      class="w-full max-w-sm mx-auto bg-white p-8 rounded-md drop-shadow-2xl"
    >
      <h1 class="text-2xl font-bold mb-6 text-center">Login Form</h1>
      <AuthInput :type="'text'" :name="'name'" :labelName="'Login'" :errorrMessage="``"/>
      <AuthInput
        :type="'password'"
        :name="'password'"
        :labelName="'Password'"
        :errorrMessage="''"
      />
      <AuthButton>Login</AuthButton>
      <RouterLink :to="{ name: 'register' }" class="text-blue-500"
        >Ro'yxatdan o'tish</RouterLink>
    </form>
  </div>
</template>
<script>
import AuthButton from "../ui_components/AuthButton.vue";
import AuthInput from "../ui_components/AuthInput.vue";

export default {
  name: "LoginView",
  components: { AuthButton, AuthInput },
};
</script>
<style></style>
