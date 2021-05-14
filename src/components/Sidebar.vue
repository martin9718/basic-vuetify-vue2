<template>
  <v-navigation-drawer class="boxShawdom"
                       :value="getDraw"
                       width="280"
                       app
  >
    <v-list
        class="boxShawdom d-flex align-center"
        style="height: 80px; width: 280px"
    >
      <v-list-item class="text-left">
        <v-list-item-icon>
          <v-icon style="font-size: 20px;" class="primary--text"

          >fas fa-file-invoice</v-icon
          >
        </v-list-item-icon>

        <h1>
          <v-list-item-title style="font-size: 20px" color="primary-text"
          >Logo</v-list-item-title
          >
        </h1>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: "Sidebar",
  computed:{
    ...mapGetters(['getDraw'])
  }
}
</script>

<style scoped>

</style>