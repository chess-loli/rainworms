import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    globalTiles: [],
    globalDice: [],
    globalTakenDice: [],
    players: [],
    currentPlayer: {},
    tempPlayer: {},
    turnOrderDetermination: 0
  },
  mutations: {
    addTilesToGlobalMutation (state, tiles) {
      state.globalTiles = tiles
    },
    addDiceToGlobalMutation (state, dice) {
      state.globalDice = dice
    },
    addTakenDiceToGlobalMutation (state, takenDice) {
      state.globalTakenDice = takenDice
    },
    resetTakenDiceMutation (state) {
      state.globalTakenDice = []
    },
    addPlayerToGameMutation (state, player) {
      state.players.push(player)
    },
    takeTileIfPossibleMutation (state, diceScore) {
      var currentPlayer = state.players[state.turnOrderDetermination]
      if (diceScore >= 21) {
        for (var i = 0; i < state.globalTiles.length; i++) {
          if (state.globalTiles[i].tileNo === diceScore) {
            currentPlayer.tiles.push(state.globalTiles[i])
            state.globalTiles.splice(i, 1)
            return
          }
        }
        for (var player of state.players) {
          if (player.tiles[player.tiles.length - 1].tileNo === diceScore) {
            currentPlayer.tiles.push(player.tiles[player.tiles.length - 1])
            player.tiles.splice(player.tiles[player.tiles.length - 1], 1)
            return
          }
        }
      } else { alert('dit is geen geldige score, volgende speler is aan de beurt') }
    },
    setScoreMutation (state) {
      for (var player of state.players) {
        player.score = 0
        for (var tiles of player.tiles) {
          player.score += tiles.value
        }
      }
    },
    endTurnMutation (state) {
      state.tempPlayer = {}
    },
    addNewPlayerMutation (state, player) {
      state.players.push(player)
    },
    resetGlobalDiceMutation (state) {
      state.globalDice = []
    },
    turnOrderMutation (state) {
      state.turnOrderDetermination += 1
      state.currentPlayer = state.players[state.turnOrderDetermination]
      if (state.turnOrderDetermination >= state.players.length) {
        state.turnOrderDetermination = 0
      }
    },
    startGameMutation (state) {
      state.currentPlayer = state.players[state.turnOrderDetermination]
    }
  },
  actions: {
    addTilesToGlobalAction (context, tiles) {
      context.commit('addTilesToGlobalMutation', tiles)
    },
    addDiceToGlobalAction (context, dice) {
      context.commit('addDiceToGlobalMutation', dice)
    },
    addTakenDiceToGlobalAction (context, takenDice) {
      context.commit('addTakenDiceToGlobalMutation', takenDice)
    },
    resetTakenDiceAction (context) {
      context.commit('resetTakenDiceMutation')
    },
    addPlayerToGameAction (context, player) {
      context.commit('addPlayerToGameMutation', player)
    },
    takeTileIfPossibleAction (context, diceScore) {
      context.commit('takeTileIfPossibleMutation', diceScore)
    },
    addNewPlayerAction (context, player) {
      context.commit('addNewPlayerMutation', player)
    },
    resetGlobalDiceAction (context) {
      context.commit('resetGlobalDiceMutation')
    },
    turnOrderAction (context) {
      context.commit('turnOrderMutation')
    },
    startGameAction (context) {
      context.commit('startGameMutation')
    },
    endTurnAction (context) {
      context.commit('endTurnMutation')
    },
    setScoreAction (context) {
      context.commit('setScoreMutation')
    }
  },
  getters: {
    diceScore: state => {
      var diceScore = 0
      for (var num of state.globalTakenDice) {
        diceScore += num
      }
      return diceScore
    },
    determineCurrentPlayer: state => {
      return state.players[state.turnOrderDetermination]
    }
  },
  modules: {
  }
})
