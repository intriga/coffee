<template>
    <div>
        <!-- Navigation -->
        <navbar-component></navbar-component>

        <!-- Page Header -->
        <header-component></header-component>

        <!-- Main Content -->
        <router-view></router-view>  

        <!-- Footer -->
        <footer-component></footer-component>
        
              
        
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>