<template>
  <v-bottom-navigation>
    <v-btn value="recent">
      <span>{{ correctoComp }}</span>
      <span><b> Intentos acertados </b></span>
    </v-btn>

    <v-btn value="favorites">
      <span>{{ inCorrectoComp }}</span>
      <span><b> Intentos fallidos</b></span>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  props: {
    correctos: {
      type: Number,
      require: true,
    },
    inCorrectos: {
      type: Number,
      require: true,
    },
  },
  computed: {
    correctoComp() {
      return this.correctos;
    },
    inCorrectoComp() {
      return this.inCorrectos;
    },
  },
};
</script>

<style>
</style>