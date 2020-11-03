/** * Created by vouill on 11/14/17. */

<template>
  <card>
    <v-footer dark padless class="footer">
      <v-card
        flat
        tile
        class="blue-grey darken-2 lighten-1 white--text text-center"
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
          Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
          accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim
          a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula
          lacinia malesuada. Nulla placerat augue vel ipsum ultrices
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </card>
</template>

<style scoped>
.sq-footer {
  background-color: rgb(183, 72, 14);
  height: 20px;
  font-size: 12px;
  display: flex;
  justify-content: flex-end;
  color: white;
  align-items: center;
  padding-right: 1em;
}
a {
  color: white;
}
</style>

<script>
export default {
  name: "sqreen-footer",
  data: () => ({
    // eslint-disable-next-line prettier/prettier
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    // items: [
    //   {
    //     src: require("../assets/img/work1.jpg"),
    //   },
    //   {
    //     src: require("../assets/img/work2.jpg"),
    //   },
    //   {
    //     src: require("../assets/img/work3.jpg"),
    //   },
    //   {
    //     src: require("../assets/img/work4.jpg"),
    //   },
    // ],
  }),
};
</script>
