new Vue ({
    el : '#app',
    currentSeclected: null,
    data :{
        menu: [
            {
                name:'HOME',
                choosen:false,
            },

            {
                name:'PROJECTS',
                choosen:false,
            },

            {
                name:'SERVICES',
                choosen:false,
            },

            {
                name:'CONTACT',
                choosen:false,
            },

        ],
    },

    methods: {
        clickNav(item) {
            const itemIndex = this.menu.findIndex(i => i.name === item.name)
            if(itemIndex >= 0) {
                this.menu[itemIndex].choosen = !this.menu[itemIndex].choosen
                
            }
            this.itemIndex = this.currentSeclected
            this.currentSeclected = item.name
        },
    }
    })