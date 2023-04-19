<template>
    <ul class="list-none bg-red-50 mb-2 text-center rounded-lg" >
        <li v-for="errorrMessage in errorMessages" :key="errorrMessage" class="tp-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400">
            {{ errorrMessage }} 
        </li>
    </ul>
</template>
<script>
export default {
    name: 'ValidationError',
    props:{
        validationErrors:{
            type:Object,
            required:true
        }
    },

    computed:{
        errorMessages(){
            return Object.keys(this.validationErrors).map( name => {
                const msg = this.validationErrors[name].join(', ')
                return `${msg}`
            })
        }
    }
}
</script>
<style>
    
</style>