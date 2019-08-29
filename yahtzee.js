Vue.component('scoresheet', {
    props: {
        dice: Array,

    },
    template: `
        <div class="container">
            <table class="table is-bordered">
                <tbody>
                    <tr>
                        <th>Combinations</th>
                        <th>Points</th>
                    </tr>
                    <tr>
                        <th>ones</th>
                        <td>{{ones}}</td>
                    </tr>
                    <tr>
                        <th>twos</th>
                        <td>{{twos}}</td>
                    </tr>
                    <tr>
                        <th>threes</th>
                        <td>{{threes}}</td>
                    </tr>
                    <tr>
                        <th>fours</th>
                        <td>{{fours}}</td>
                    </tr>
                    <tr>
                        <th>fives</th>
                        <td>{{fives}}</td>
                    </tr>
                    <tr>
                        <th>sixes</th>
                        <td>{{sixes}}</td>
                    </tr>
                    <tr>
                        <th>Three of a Kind</th>
                        <td>{{threeOfAKind}}</td>
                    </tr>
                    <tr>
                        <th>Carré</th>
                        <td>{{carre}}</td>
                    </tr>
                    <tr>
                        <th>Small Street</th>
                        <td>{{smallStreet}}</td>
                    </tr>
                    <tr>
                        <th>Big Street</th>
                        <td>{{bigStreet}}</td>
                    </tr>
                    <tr>
                        <th>Full House</th>
                        <td>{{fullHouse}}</td>
                    </tr>
                    <tr>
                        <th>Chance</th>
                        <td>{{chance}}</td>
                    </tr>
                    <tr>
                        <th>Yahtzee</th>
                        <td>{{yahtzee}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,
    computed: {
        reduceDice() {
            return this.dice.reduce((counter, dice) => {
                counter[dice]++
                return counter
            }, {
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0,
                    5: 0,
                    6: 0
                })
        },
        ones() {
            return Object.getOwnPropertyDescriptor(this.reduceDice, '1').value * 1
        },
        twos() {
            return Object.getOwnPropertyDescriptor(this.reduceDice, '2').value * 2
        },
        threes() {
            return Object.getOwnPropertyDescriptor(this.reduceDice, '3').value * 3
        },
        fours() {
            return Object.getOwnPropertyDescriptor(this.reduceDice, '4').value * 4
        },
        fives() {
            return Object.getOwnPropertyDescriptor(this.reduceDice, '5').value * 5
        },
        sixes() {
            return Object.getOwnPropertyDescriptor(this.reduceDice, '6').value * 6
        },
        threeOfAKind() {
            var diceObject = this.reduceDice
           for (key in diceObject ) {
                    if (diceObject[key] >= 3) {
                        return this.dice.reduce((dices, dice) => {
                            return dices + dice
                        }, 0) 
                    }
            }               
        },
        carre() {
            var diceObject = this.reduceDice
            for (key in diceObject) {
                if (diceObject[key] >= 4) {
                    return this.dice.reduce((dices, dice) => {
                        return dices + dice
                    }, 0)
                }
            }
        },
        smallStreet() {
            var uniqueDice = [...new Set(this.dice)]
            for (var i = 0; i < uniqueDice.length; i++) {
                if (uniqueDice[i + 1] == uniqueDice[i] + 1 && uniqueDice[i + 2] == uniqueDice[i] + 2 && uniqueDice[i + 3] == uniqueDice[i] + 3) {
                    return 30
                } 
            }
        },
        bigStreet() {
            var uniqueDice = [...new Set(this.dice)]
            for (var i = 0; i < uniqueDice.length; i++) {
                if (uniqueDice[i + 1] == uniqueDice[i] + 1 && uniqueDice[i + 2] == uniqueDice[i] + 2 && uniqueDice[i + 3] == uniqueDice[i] + 3 && uniqueDice[i + 4] == uniqueDice[i] + 4) {
                    return 40
                }
            }
        },
        fullHouse() {
            var diceObject = this.reduceDice
            var two = false
            var three = false
            for (key in diceObject) {
                if (diceObject[key] == 2) {
                    two = true
                }
                if (diceObject[key] == 3) {
                    three = true
                }
            } 
            if (two && three) {
                return 25
            } 
        },
        chance() {
            return this.dice.reduce((dices, dice) => {
                return dices + dice
            }, 0)
        },
        yahtzee() {
            var diceObject = this.reduceDice
            for (key in diceObject) {
                if (diceObject[key] == 5) {
                   return 50
                } 
            }
        },
    },
})

new Vue({
    el: '#root',
    data: {
        dice: [],

    },
    methods: {
        reset() {
            if (this.dice.length > 2) {
                this.dice = []
            }
        },
        throwDice() {
            this.reset()
            this.rollFive()
            this.dice.sort()
        },
        rollFive() {
           for (var i = 0; i < 5; i++) {
               this.dice.push(Math.floor(Math.random() * 6) + 1)
           }
        },
    },
})