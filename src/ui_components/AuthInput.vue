<template>
  <div class="mb-4">
    <label class="block text-gray-700 text-sm font-bold mb-2" :for="name">{{
      labelName
    }}</label>
    <input
      class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
      :type="type"
      :id="name"
      :name="name"
      v-on:input="updateInput"
      :value="modelValue"
    />
  </div>
</template>
<script>
export default {
  props: {
    name: String,
    type: String,
    labelName: String,
    modelValue: [String, Number],
  },
  methods: {
    updateInput(e) {
      this.$emit('update:modelValue', e.target.value)
    },
  },
  name: "AuthInput",
};
</script>
<style>
</style>