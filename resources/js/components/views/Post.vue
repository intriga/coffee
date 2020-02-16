<template>
    <article>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          
          <h2 class="section-heading"
            v-text="post.title"></h2>

            <img :src="post.file" class="img-fluid">

          <p
            v-html="post.content"></p>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
    props : ['slug'],
    data() {
        return {
            post: {},
        }
    },
    created() {
        let url = 'https://shrouded-cliffs-70003.herokuapp.com/api/post/'+this.slug;

        axios.get(url)
            .then(response => {
                this.post = response.data
                // console.log('response: ',response.data);
                
        	})
    },
}
</script>

<style>

</style>