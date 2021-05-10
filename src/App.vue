<template>
  <AppLayout>
    <v-app>
      <router-view></router-view>
    </v-app>
  </AppLayout>
</template>

<script>
import AppLayout from "./layouts/AppLayout";


export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
