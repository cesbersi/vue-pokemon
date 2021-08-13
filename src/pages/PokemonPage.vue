<template>
  <v-progress-circular
    v-if="!pokemon"
    indeterminate
    color="primary"
  ></v-progress-circular>

  <div v-else style="text-align: center">
    <h1 style="text-align: center">¿Quien es este pokemon?</h1>
    <pokemon-picture
      :pokemon-id="pokemon.id"
      :show-pokemon="showPokemon"
    ></pokemon-picture>  

    <pokemon-options
      v-show="!showAnswer"
      :pokemons="pokemonArr"
      @selection="checkAnswer"
    ></pokemon-options>

    <template v-if="showAnswer">
      <h2 class="fade-in" style="text-align: center">{{ message }}</h2>
      <v-btn @click="newGame" color="primary" elevation="24" x-large x-small
        >Nuevo Juego</v-btn
      >
    </template>
  </div>
    <puntaje
      :correctos="correctos"
      :inCorrectos="inCorrectos"
    >


    </puntaje>
</template>

<script>
import PokemonOptions from "@/components/PokemonOptions";
import PokemonPicture from "@/components/PokemonPicture";
import Puntaje from "@/components/Puntaje";
import getPokemonsOptions from "@/helpers/getPokemonOptions";

export default {
  components: {
    PokemonOptions,
    PokemonPicture,
    Puntaje
  },
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: "",
      correctos: 0,
      inCorrectos: 0
    };
  },
  methods: {
    async misPokemonArray() {
      this.showAnswer = false;
      this.showPokemon = false;
      this.pokemon = null;
      this.message = "";
      this.pokemonArr = await getPokemonsOptions();
      const rnfInt = Math.floor(Math.random() * 4);
      this.pokemon = this.pokemonArr[rnfInt];
    },

    checkAnswer(pokemonId) {
      this.showAnswer = true;
      this.showPokemon = true;
      if (this.pokemon.id === pokemonId) {
        this.message = "Que bien lo has logrado";
        this.correctos ++;
      } else {
        this.message = `Que mal, el pokemon correcto es ${this.pokemon.name}`;
        this.inCorrectos++;
      }
    },
    newGame() {
      this.misPokemonArray();
    },
  },
  mounted() {
    this.misPokemonArray();
  },
};
</script>

<style>
</style>