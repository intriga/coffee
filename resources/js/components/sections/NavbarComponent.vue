<template>
    <div>
    
        <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div class="container">
            <router-link :to="{ name: 'home' }"
                        class="navbar-brand">Intriga</router-link>
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <!-- <a class="nav-link" href="index.html">Home</a> -->
                    <router-link :to="{ name: 'home' }"
                        class="nav-link">Home</router-link>
                </li>
                <li class="nav-item">
                    <!-- <a class="nav-link" href="about.html">About</a> -->
                    <router-link :to="{ name: 'about' }"
                        class="nav-link">About</router-link>
                </li>
                <!-- <li class="nav-item">
                    <a class="nav-link" href="post.html">Sample Post</a>
                </li> -->
                <li class="nav-item">
                    <!-- <a class="nav-link" href="contact.html">Contact</a> -->
                    <router-link to="/contact"
                        class="nav-link">Contact</router-link>
                </li>
                </ul>
            </div>
            </div>

            
        </nav>
        
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>