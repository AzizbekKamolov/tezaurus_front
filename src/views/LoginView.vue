<template>
     <div class="container mx-auto py-8">
    <h1 class="text-2xl font-bold mb-6 text-center">Login Form</h1>
    <form class="w-full max-w-sm mx-auto bg-white p-8 rounded-md drop-shadow-2xl">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="login">Login</label>
        <input class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="text" id="login" name="login" >
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
        <input class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="password" id="password" name="password">
      </div>
      <button
        class="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
        type="submit">Login</button>
        <RouterLink :to="{name: 'register'}" class="text-blue-500">Ro'yxatdan o'tish</RouterLink>
    </form>
  </div>
</template>
<script>
export default {
    
}
</script>
<style>
    
</style>