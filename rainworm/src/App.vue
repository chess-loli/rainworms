<template>
  <div id="app">
    <Tiles></Tiles>
    <PlayingBoard></PlayingBoard>
    <Dice></Dice>
    <Scoreboard></Scoreboard>
  </div>
</template>

<script>
import PlayingBoard from './components/PlayingBoard.vue'
import Dice from './components/Dice.vue'
import Tiles from './components/Tile.vue'
import Scoreboard from './components/Scoreboard.vue'

export default {
  name: 'App',
  components: {
    PlayingBoard,
    Dice,
    Tiles,
    Scoreboard
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
