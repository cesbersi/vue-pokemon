<template>
  <v-app>
    <v-main>
      <PokemonPage/>
    </v-main>
  </v-app>
</template>

<script>
import PokemonPage from './pages/PokemonPage.vue'

export default {
  name: 'App',

  components: {
    PokemonPage,
  },

  data: () => ({
    //
  }),
}
</script>
