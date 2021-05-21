new Vue ({
    el : '#app',
    data :{
        list: [
            {
                name:'web development',
                choosen:true,
                price: 300.00,
            },

            {
                name:'design',
                choosen:false,
                price:400.00,
            },

            {
                name:'intergation',
                choosen:false,
                price:250.00,
            },

            {
                name:'training',
                choosen:false,
                price:220.00,
            },

        ],
    },

    methods: {
        pickItem(item) {
            const itemIndex = this.list.findIndex(i => i.name === item.name)
            let total = 0;
            if(itemIndex >=0) {
                this.list[itemIndex].choosen = !this.list[itemIndex].choosen
                }
            },
        total: function() {
            let total = 0;
            this.list.forEach (function(item) {
                if(item.choosen) {
                    total += item.price;
                }
            });
            return total;
        },
        }
    });