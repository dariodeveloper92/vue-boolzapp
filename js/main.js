// Vue js

Vue.config.devtools = true; // scrivere per attivare l'estenzione sul browser

const app = new Vue({
    el: '#root',
    data: {
        cercaContatti: '',
        newChat: '',
        chats: [ //Bonus - Array di Oggetti
            {
                date: '10/01/2020 15:30:55',
                message: '',
                status: 'sent'
            },
            /*{title: ' ', done: true, date: '10/01/2020 15:30:55'},
            {title: ' ', done: false, date: '10/01/2020 15:30:55'},
            {title: ' ', done: true, date: '10/01/2020 15:30:55'},*/
        ],
        photos: [
            'img/avatar_1.jpg',
            'img/avatar_2.jpg',
            'img/avatar_3.jpg',
            'img/avatar_4.jpg',
        ],
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [{
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent'
                },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [{
                    date: '28/03/2020 10:10:40',
                    message: 'La Marianna va in campagna',
                    status: 'received'
                },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [{
                    date: '10/01/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],
        selected_user: 0,
        messages_array: '',
    /*mounted() {     //setTimeout - timer
        setTimeout(  () => {
            this.addChat();
        }, 1000);  */  
    },
    methods: {
        addChat(i) { //clicca il button aggiungi: stampare in pagina un item per ogni elemento contenuto in un array
            if(this.newChat != "") {
                this.chats.push({message: this.newChat}); // metodo "PUSH"
                this.newChat="";
            }
        },
        selectedContact(index) {   // Cambia contatto
                this.selected_user = index;
                this.messages_array = this.contacts[this.selected_user].messages;
                console.log(this.messages_array);
                let tmp = dayjs().format('DD/MM/YYYY hh:m:ss');
                console.log(tmp)
        },
        /*getMessageClass(index) {
            let thisContact = this.contacts[this.selected_user];
            let messageCLass = 'message' + thisContact.messages[index].status;
            return messageCLass;
        }*/
    },
})