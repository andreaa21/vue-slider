const {createApp} = Vue;

createApp({
    data(){
        return {
            items: [
                {
                    title: 'Argentina',
                    desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, perspiciatis',
                    link: 'img/argentina.jpg'
                },
                {
                    title: 'Chile',
                    desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit',
                    link: 'img/chile.jpg'
                },
                {
                    title: 'Colombia',
                    desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores',
                    link: 'img/colombia.jpg'
                },
                {
                    title: 'Peru',
                    desc: ' Lorem ipsum dolor sit amet consectetur adipisicing',
                    link: 'img/peru.jpg'
                },
                {
                    title: 'Sweden',
                    desc: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, perspiciatis parole in latino',
                    link: 'img/sweden.jpg'
                }
            ],
            counterImage: 0,
            classActive: '',
            isActive: false
        }
    },
    methods: {
        nextItem(){ 
            if(this.counterImage < this.items.length -1){
                this.counterImage++;
            }
        },
        prevItem(){
            if(this.counterImage > 0){
                this.counterImage--;
            }

        },
        changeImage(index){
            this.counterImage = index;
        }
    }

}).mount('#app');

