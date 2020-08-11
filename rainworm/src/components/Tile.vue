<template>
    <div>
        <p v-for="tile in tiles" :key="tile.tileNo">tegel {{tile.tileNo}}, {{tile.value}} regenworm(en).</p>
    </div>
</template>

<script>
export default {
  created () {
    this.createTiles()
  },
  data () {
    return {

    }
  },
  methods: {
    createTiles () {
      var tiles = []
      for (var i = 20; i < 36; i++) {
        var tileObject = {
          tileNo: i + 1,
          value: Number
        }
        if (tileObject.tileNo === 21 || tileObject.tileNo === 22 || tileObject.tileNo === 23 || tileObject.tileNo === 24) {
          tileObject.value = 1
        } else if (tileObject.tileNo === 25 || tileObject.tileNo === 26 || tileObject.tileNo === 27 || tileObject.tileNo === 28) {
          tileObject.value = 2
        } else if (tileObject.tileNo === 29 || tileObject.tileNo === 30 || tileObject.tileNo === 31 || tileObject.tileNo === 32) {
          tileObject.value = 3
        } else if (tileObject.tileNo === 33 || tileObject.tileNo === 34 || tileObject.tileNo === 35 || tileObject.tileNo === 36) {
          tileObject.value = 4
        } else {
          console.log('something went wrong here')
        }
        tiles.push(tileObject)
      }
      this.$store.dispatch('addTilesToGlobalAction', tiles)
    }
  },
  computed: {
    tiles: function () {
      return this.$store.state.globalTiles
    }
  }
}
</script>
