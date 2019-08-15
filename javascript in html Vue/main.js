Vue.component('dice-table', {
    props: {
        dice: Array,
    },
    template: ` 
                <div style="margin-top: 40px">
                    <table class="table is-bordered"> 
                        <tbody> 
                            <tr>
                                <th>dice number</th>
                                <td>amount of them rolled</td>
                            </tr>
                            <tr v-for="(amount, die) in diceCounter">
                                <th>{{die}}</th>
                                <td>{{amount}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `,

    
computed: {
    diceCounter() {
        return this.dice.reduce((counter, dice) => {
            counter[dice]++
            return counter
        }, {
            1:0,
            2:0,
            3:0,
            4:0,
            5:0,
            6:0
        })
    }
},
    


});


new Vue({
    el: '#root',
    
    data: {
        dice: []
    },

    methods: {
        reset() {
            if (this.dice.length > 2) {
                this.dice = []
            }
           
        },
        throwDice() {
            this.reset()
            this.oneIsEight()
            this.dice.sort()
        },
        oneIsEight() {
            this.dice.push(Math.floor(Math.random() * 6) + 1)
            this.dice.push(Math.floor(Math.random() * 6) + 1)
            this.dice.push(Math.floor(Math.random() * 6) + 1)
            this.dice.push(Math.floor(Math.random() * 6) + 1)
            this.dice.push(Math.floor(Math.random() * 6) + 1)
            this.dice.push(Math.floor(Math.random() * 6) + 1)
            this.dice.push(Math.floor(Math.random() * 6) + 1)
            this.dice.push(Math.floor(Math.random() * 6) + 1)
        },
    }
});