<template>
    <button
        class="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300 focus:outline-none"
        type="submit">
    <slot></slot>
    </button>
</template>
<script>
export default {
    name: 'AuthButton'
}
</script>
<style>
    
</style>