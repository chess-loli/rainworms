
<template>
    <div>
      <div>
          <div>
            <p>speler naam:</p>
            <input type="text" v-model="pName">
            <br>
            <button @click="makePlayer(pName)">voeg speler toe</button>
          </div>
      </div>

        <div v-if="this.currentPlayer !== undefined && this.currentPlayer !== {}">
          <p>{{currentPlayer.name}} is aan de beurt met een score van {{currentPlayer.score}} en de volgende tegels: </p>
          <p><img v-for="tile in currentPlayer.tiles" :key="tile.tileNo" :src="tile.imgurl" :alt="tile.imgalt"></p>
        </div>
        <div v-for="participant in properScoreboard" :key="participant.name">
          <p>{{participant.name}}: {{participant.score}} wormen</p>
        </div>
    </div>
</template>
<script>
export default {
  created () {

  },
  data () {
    return {
      players: [],
      pName: ''
    }
  },
  computed: {
    properScoreboard: function () {
      var board = []
      var playerList = this.$store.state.players
      for (var player of playerList) {
        board.push({
          name: player.name,
          score: player.score
        })
      }
      return board
    },
    currentPlayer: function () {
      return this.$store.getters.determineCurrentPlayer
    }
  },
  methods: {
    makePlayer (playerName) {
      var player = {
        name: playerName,
        tiles: [],
        score: 0
      }
      this.players.push(player)
      this.$store.dispatch('addNewPlayerAction', player)
    }
  }
}
</script>
