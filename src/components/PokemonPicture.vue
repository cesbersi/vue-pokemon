<template>
  <div class="pokemon-container">
    <img
      class="hidden-pokemon"
      v-if="!showPokemon"
      :src="imgSrc"
      alt="pokemon"
    />
    <img class="fade-in" v-if="showPokemon" :src="imgSrc" alt="pokemon" />
  </div>
</template>

<script>
export default {
  props: {
    pokemonId: {
      type: Number,
      require: true,
    },
    showPokemon: {
      type: Boolean,
      require: true,
      default: false,
    },
  },
  computed: {
    imgSrc() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
    },
  },
};
</script>

<style scoped>
.pokemon-container {
  height: 200px;
}
img {
  height: 200px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  right: 32%;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
.hidden-pokemon {
  filter: brightness(0);
}
</style>