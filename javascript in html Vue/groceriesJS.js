Vue.component('shopping-list', {
    props: {
        products: Array,

    },
    template: `
        <div style="margin-top: 40px">
            <table class="table is-bordered">
                <tbody>
                    <tr>
                        <th>product name</th>
                        <th>price(in euros)</th>
                        <th>amount</th>
                    </tr>
                    
                    <tr v-for="product of products">
                        <td>{{product.name}}</td>
                        <td>{{product.price}}</td>
                        <td><button @click="{{product.amount -= 1}}">-</button> {{product.amount}} <button @click="{{product.amount += 1}}">+</button></td>                    
                    </tr>
                    <tr>
                        <th>total</th>
                        <td>{{totalPrice}}</td>
                        <td>{{totalAmount}}</td>
                    </tr>
                   
                </tbody>
            </table>
        </div>
    `,
     
    computed: {
        totalPrice() {
            prices = []
            for (product of this.products) {
                product.total = product.amount * product.price
                prices.push(product.total)
            }
            
            return prices.reduce((products, totalPrice) => {
                return products + totalPrice
            }, 0)
        },
        totalAmount() {
            amount = 0
            for (product of this.products) {
                amount += product.amount
            }
            return amount
        },
    },
});

new Vue({
    el: '#root',

    data: {
        products: [
            {
                name: 'amd ryzen 5 3600 boxed',
                price: 205.00,
                amount: 0,
                total: 0
            },
            {
                name: 'msi b450 tomahawk',
                price: 123.00,
                amount: 0,
                total: 0
            },
            {
                name: 'sapphire radeon rx 5700',
                price: 430.00,
                amount: 0,
                total: 0
            },
            {
                name: '16gb ripjaws v f4',
                price: 88.00,
                amount: 0,
                total: 0
            },
            {
                name: 'intel ssd 660p 1tb',
                price: 100.00,
                amount: 0,
                total: 0
            },
            {
                name: 'bitfenix formula gold 450W',
                price: 66.00,
                amount: 0,
                total: 0
            },
            {
                name: 'fractal design define s',
                price: 82.00,
                amount: 0,
                total: 0
            }
        ],
        
    },
    methods: {
        
    },     
});