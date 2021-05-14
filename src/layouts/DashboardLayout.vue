<template>
<div>
  <Navbar></Navbar>
  <Sidebar></Sidebar>
  <slot/>
</div>
</template>

<script>
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
export default {
  name: "DashboardLayout",
  components:{
    Navbar,
    Sidebar
  }
}
</script>

<style scoped>

</style>