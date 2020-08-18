<template>
    <div>
        <div>
          <p>{{dice}}</p>
          <button @click="throwDice">Rol de dobbelstenen!</button>
        </div>
        <br>
        <div>
          <input type="number" v-model="excludedNum">
          <button @click="removeNum">kies dit nummer!</button>
        </div>
        <br>
        <div>
          <p>huidige score: {{currentDiceScore}}</p>
        </div>
        <br>
        <div>
          <p>gekozen nummers: </p>
          <p v-for="num in excludedNumList" :key="num">{{ num }}</p>
        </div>
        <br>
        <div>
          <button @click="endTurn">beëindig beurt</button>
        </div>
        <div>
          <button @click="startGame">start spel</button>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      dice: [],
      diceTaken: [],
      excludedNum: '',
      currentDiceScore: 0,
      excludedNumList: []
    }
  },
  methods: {
    endTurn () {
      this.$store.dispatch('takeTileIfPossibleAction', this.currentDiceScore)
      this.$store.dispatch('resetTakenDiceAction')
      this.$store.dispatch('resetGlobalDiceAction')
      this.$store.dispatch('turnOrderAction')
      this.takenDiceReset()
      this.numListReset()
      var currentplayer = this.$store.getters.determineCurrentPlayer
      alert('het is nu ' + currentplayer.name + ' zijn/haar beurt')
      this.currentDiceScore = 0
      this.dice = []
      this.$store.dispatch('setScoreAction')
      this.$store.dispatch('endTurnAction')
    },
    startGame () {
      var firstPlayer = this.$store.getters.determineCurrentPlayer
      alert(firstPlayer.name + ' begint!')
      this.$store.dispatch('startGameAction')
    },
    takenDiceReset () {
      this.diceTaken = []
    },
    numListReset () {
      this.excludedNumList = []
    },
    rollDice () {
      if (this.dice.length === 0) {
        var x = this.diceTaken.length
        for (var i = 0; i < (8 - x); i++) {
          this.dice.push(Math.floor(Math.random() * 6) + 1)
        }
        this.$store.dispatch('addDiceToGlobalAction', this.dice)
        this.currentDiceScore = this.$store.getters.diceScore
      } else { alert('eerst een nummer kiezen, dan pas rollen! of beëindig uw beurt.') }
    },
    removeNum () {
      if (this.dice.length > 0) {
        for (var i = 0; i < this.dice.length; i++) {
          if (this.dice[i] === Number(this.excludedNum) && this.dice[i + 1] === Number(this.excludedNum) && this.dice[i + 2] === Number(this.excludedNum) && this.dice[i + 3] === Number(this.excludedNum) && this.dice[i + 4] === Number(this.excludedNum) && this.dice[i + 5] === Number(this.excludedNum) && this.dice[i + 6] === Number(this.excludedNum) && this.dice[i + 7] === Number(this.excludedNum) && this.excludedNumList.includes(this.excludedNum) === false) {
            this.diceTaken.push(this.dice[i])
            this.diceTaken.push(this.dice[i + 1])
            this.diceTaken.push(this.dice[i + 2])
            this.diceTaken.push(this.dice[i + 3])
            this.diceTaken.push(this.dice[i + 4])
            this.diceTaken.push(this.dice[i + 5])
            this.diceTaken.push(this.dice[i + 6])
            this.diceTaken.push(this.dice[i + 7])
            this.dice.splice(i, 8)
            this.$store.dispatch('addDiceToGlobalAction', this.dice)
            this.$store.dispatch('addTakenDiceToGlobalAction', this.diceTaken)
          } else if (this.dice[i] === Number(this.excludedNum) && this.dice[i + 1] === Number(this.excludedNum) && this.dice[i + 2] === Number(this.excludedNum) && this.dice[i + 3] === Number(this.excludedNum) && this.dice[i + 4] === Number(this.excludedNum) && this.dice[i + 5] === Number(this.excludedNum) && this.dice[i + 6] === Number(this.excludedNum) && this.excludedNumList.includes(this.excludedNum) === false) {
            this.diceTaken.push(this.dice[i])
            this.diceTaken.push(this.dice[i + 1])
            this.diceTaken.push(this.dice[i + 2])
            this.diceTaken.push(this.dice[i + 3])
            this.diceTaken.push(this.dice[i + 4])
            this.diceTaken.push(this.dice[i + 5])
            this.diceTaken.push(this.dice[i + 6])
            this.dice.splice(i, 7)
            this.$store.dispatch('addDiceToGlobalAction', this.dice)
            this.$store.dispatch('addTakenDiceToGlobalAction', this.diceTaken)
          } else if (this.dice[i] === Number(this.excludedNum) && this.dice[i + 1] === Number(this.excludedNum) && this.dice[i + 2] === Number(this.excludedNum) && this.dice[i + 3] === Number(this.excludedNum) && this.dice[i + 4] === Number(this.excludedNum) && this.dice[i + 5] === Number(this.excludedNum) && this.excludedNumList.includes(this.excludedNum) === false) {
            this.diceTaken.push(this.dice[i])
            this.diceTaken.push(this.dice[i + 1])
            this.diceTaken.push(this.dice[i + 2])
            this.diceTaken.push(this.dice[i + 3])
            this.diceTaken.push(this.dice[i + 4])
            this.diceTaken.push(this.dice[i + 5])
            this.dice.splice(i, 6)
            this.$store.dispatch('addDiceToGlobalAction', this.dice)
            this.$store.dispatch('addTakenDiceToGlobalAction', this.diceTaken)
          } else if (this.dice[i] === Number(this.excludedNum) && this.dice[i + 1] === Number(this.excludedNum) && this.dice[i + 2] === Number(this.excludedNum) && this.dice[i + 3] === Number(this.excludedNum) && this.dice[i + 4] === Number(this.excludedNum) && this.excludedNumList.includes(this.excludedNum) === false) {
            this.diceTaken.push(this.dice[i])
            this.diceTaken.push(this.dice[i + 1])
            this.diceTaken.push(this.dice[i + 2])
            this.diceTaken.push(this.dice[i + 3])
            this.diceTaken.push(this.dice[i + 4])
            this.dice.splice(i, 5)
            this.$store.dispatch('addDiceToGlobalAction', this.dice)
            this.$store.dispatch('addTakenDiceToGlobalAction', this.diceTaken)
          } else if (this.dice[i] === Number(this.excludedNum) && this.dice[i + 1] === Number(this.excludedNum) && this.dice[i + 2] === Number(this.excludedNum) && this.dice[i + 3] === Number(this.excludedNum) && this.excludedNumList.includes(this.excludedNum) === false) {
            this.diceTaken.push(this.dice[i])
            this.diceTaken.push(this.dice[i + 1])
            this.diceTaken.push(this.dice[i + 2])
            this.diceTaken.push(this.dice[i + 3])
            this.dice.splice(i, 4)
            this.$store.dispatch('addDiceToGlobalAction', this.dice)
            this.$store.dispatch('addTakenDiceToGlobalAction', this.diceTaken)
          } else if (this.dice[i] === Number(this.excludedNum) && this.dice[i + 1] === Number(this.excludedNum) && this.dice[i + 2] === Number(this.excludedNum) && this.excludedNumList.includes(this.excludedNum) === false) {
            this.diceTaken.push(this.dice[i])
            this.diceTaken.push(this.dice[i + 1])
            this.diceTaken.push(this.dice[i + 2])
            this.dice.splice(i, 3)
            this.$store.dispatch('addDiceToGlobalAction', this.dice)
            this.$store.dispatch('addTakenDiceToGlobalAction', this.diceTaken)
          } else if (this.dice[i] === Number(this.excludedNum) && this.dice[i + 1] === Number(this.excludedNum) && this.excludedNumList.includes(this.excludedNum) === false) {
            this.diceTaken.push(this.dice[i])
            this.diceTaken.push(this.dice[i + 1])
            this.dice.splice(i, 2)
            this.$store.dispatch('addDiceToGlobalAction', this.dice)
            this.$store.dispatch('addTakenDiceToGlobalAction', this.diceTaken)
          } else if (this.dice[i] === Number(this.excludedNum) && this.excludedNumList.includes(this.excludedNum) === false) {
            this.diceTaken.push(this.dice[i])
            this.dice.splice(i, 1)
            this.$store.dispatch('addDiceToGlobalAction', this.dice)
            this.$store.dispatch('addTakenDiceToGlobalAction', this.diceTaken)
          } else if (this.excludedNumList.includes(this.excludedNum) === true && this.excludedNumList.includes(this.dice[i] || this.dice[i + 1] || this.dice[i + 2] || this.dice[i + 3] || this.dice[i + 4] || this.dice[i + 5]) !== true) {
            alert('dit nummer is al gebruikt en kan niet nog een keer gekozen worden, helaas. beëindig uw beurt of kies een ander nummer dat nog wel mogelijk is.')
            break
          } else if (this.excludedNumList.includes(this.dice[i]) === true && this.excludedNumList.includes(this.excludedNum) === true) {
            alert('geen zet meer mogelijk')
            break
          }
        }
      } else { alert('eerst rollen kukel!') }
      if (this.excludedNumList.includes(this.excludedNum) === false) {
        this.excludedNumList.push(this.excludedNum)
      } else { alert('dit cijfer is al een keer gekozen') }
      this.currentDiceScore = this.$store.getters.diceScore
      this.dice = []
    },
    reset () {
      if (this.dice.length >= 1) {
        this.dice = []
      }
    },
    throwDice () {
      this.reset()
      this.rollDice()
      this.dice.sort()
    }
  }
}

</script>
