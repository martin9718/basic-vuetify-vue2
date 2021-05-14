<template>
  <v-app-bar app class="boxShawdom" style="height: 80px">
    <v-app-bar-nav-icon @click="setDraw"></v-app-bar-nav-icon>

  </v-app-bar>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  name: "Navbar",
  methods: {
    ...mapActions(['setDraw'])
  }
}
</script>

<style scoped>

</style>