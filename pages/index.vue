<template lang="html">
  <main class="center-container">
    <h1 class="mb">SCP Stories</h1>
    <input v-model="query" @keyup="handleSearch" placeholder="Search for SCP..."/>

    <!--
    <main v-if="response.hits" class="mtx">
      <h1>Search response</h1>
      <div v-for="hit in response.hits" class="row mb">
        <header>{{ hit.title }}</header>
      </div>
    </main>-->


    <div class="row mt listings">
      <div class="" v-if="!query">
        <nuxt-link v-for="(story, i) in allStories" class="row mb" :to="`/${story.title}`">
          <header>{{ story.title }}</header>
        </nuxt-link>
      </div>
      <div class="row mt listings" v-else>
        <nuxt-link v-for="(story, i) in response.hits" class="row mb" :to="`/${story.title}`">
          <header>{{ story.title }}</header>
        </nuxt-link>
      </div>
    </div>


  </main>
</template>

<script>

import MeiliSearch from "meilisearch";

export default {
  data(){
    return {
      query: null,
      response: [],
      allStories: [],
      meili: null,
      index: null
    }
  },
  methods: {
    async init(){
      this.meili = new MeiliSearch({
        host: "https://librarian.apps.epitrade.io",
        apiKey: "xYSEY28Yjk#JHEwaX%7jEP6C7DVn",
      });
      await this.getIndex();
      await this.getAll();
      //await this.buildIndex();
    },
    async buildIndex(){
      const { data } = await this.$axios("/metadata/index.js");
      let json = [];
      data.forEach((v, i) => {
        json.push({ id: i, title: v })
      });
      await this.index.addDocuments(json)
    },
    createNumber(title){
      console.log(title.split());
      //return number <= 999 ? ("000" + number).substr(-3 ,3) : ("0000" + number).substr(-4 ,4)
      return 423;
    },
    async getIndex(){
      this.index = await this.meili.getIndex("scp");
    },
    async getAll(){
      let response = await this.index.search("", {
        limit: 40
      });
      this.allStories = response.hits
    },
    async handleSearch(){
      if (this.query){
        this.response = await this.index.search(this.query, {
          limit: 100
        });
      }
    },
  },
  async mounted(){
    await this.init();
    //await this.index.deleteAllDocuments()
  }
}
</script>

<style lang="css">

  .listings a {
    background: rgba(255,255,255,0.01);
    padding: 16px;
    border-radius: 3px;
  }
</style>
