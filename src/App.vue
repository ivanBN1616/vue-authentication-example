<template>
  <div id="app">
    <navigation />
    <div class="main-container clickable">
      <center-container>
        <router-view />
      </center-container>
    </div>
    <sqreen-footer />
  </div>
</template>

<script>
import Navigation from "components/navigation";
import { USER_REQUEST } from "actions/user";
import SqreenFooter from "./components/footer/index.vue";
export default {
  components: {
    SqreenFooter,
    Navigation
  },
  name: "app",
  created: function() {
    if (this.$store.getters.isAuthenticated) {
      this.$store.dispatch(USER_REQUEST);
    }
  }
};
</script>

<style>
/* #app {
  background-image: url("https://images.unsplash.com/photo-1497733942558-e74c87ef89db?dpr=1&auto=compress,format&fit=crop&w=1650&h=&q=80&cs=tinysrgb&crop=");
  background-size: cover;
  overflow: hidden;
} */
/* .clickable {
  -webkit-app-region: no-drag;
} */
body {
  margin: 0;
  font-family: "Roboto", sans-serif;
  color: #2e426b;
}
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
</style>

<style scoped>
.main-container {
  min-height: calc(100vh - 70px);
}
</style>
