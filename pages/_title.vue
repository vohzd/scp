<template lang="html">
  <main class="center-container">
    <nuxt-link to="/"><button type="button" name="button">Back</button></nuxt-link>
    <h1>{{ title }}</h1>
    <div v-html="story" class="story">
    </div>
  </main>
</template>

<script>

//import parseMD from "parse-md";

import showdown from "showdown";

/*
var converter = new showdown.Converter(),
    text      = '# hello, markdown!',
    html      = converter.makeHtml(text);*/
export default {
  asyncData({ params }){
    return {
      title: params.title,
      id: params.title.split(" ")[0].split("-")[1]
    }
  },
  data(){
    return {
      story: null
    }
  },
  methods: {
    async init(){
      const converter = new showdown.Converter();
      console.log(converter);
      const { data } = await this.$axios.get(`/data/${this.id}.md`);

      this.story = converter.makeHtml(data);
      //this.story = parseMD(data)

    }
  },
  mounted(){
    this.init();
  }
}
</script>

<style lang="css">

  p {
    margin-top: 16px;
    margin-bottom: 32px;
  }

  strong {
    font-size: 18px;
    font-weight: 700;
    color: var(--button);
  }

  blockquote {
    border-left: 4px solid rgba(255,255,255,0.1);
    padding-left: 32px;
    font-size: 16px;
  }

  blockquote strong {
    font-size: 18px;
    color: rgba(255,255,255,0.3);
  }

  .story a {
    display: none;
  }

  .story img {
    width: 100%;
  }

  .story ul {
    margin-left: 38px;
  }

  .story li {
    list-style: georgian;
  }

</style>
