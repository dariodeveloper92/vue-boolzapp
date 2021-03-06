// Vue js

Vue.config.devtools = true; // scrivere per attivare l'estenzione sul browser

const app = new Vue({
    el: '#root',
    data: {
        cercaContatti: '',  //stringa
        newChat: '',    //stringa
        photos: [   //Array
            'img/avatar_1.jpg',
            'img/avatar_2.jpg',
            'img/avatar_3.jpg',
            'img/avatar_4.jpg',
        ],
        contacts: [ //Array di oggetti
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
    },
    methods: {
        addChat(index) { //clicca il button aggiungi: stampare in pagina un item per ogni elemento contenuto in un array
            if(this.newChat != '') {
                let tmp = dayjs().format('DD/MM/YYYY hh:m:ss'); // variabile data
                let thisContact = this.contacts[this.selected_user];    // VARIABILE GENERICA 'thisContact'

                thisContact.messages.push({message: this.newChat, date: tmp, status: 'sent',}); // metodo "PUSH"
                
                this.newChat ='';
                
                setTimeout(() => {  //  setTimeout - usato per lanciare messaggio 'ok' dopo che l'utente ha scritto un messaggio in chat
                    thisContact.messages.push({message: 'ok', date: tmp, status: 'received',});
                }, 1000); // 1 secondi
            }
        },
        filterContact() { // Filtro l'Array di oggetti 'contacts'
            return this.contacts.filter(contact => contact.name.toLowerCase().includes(this.cercaContatti.toLowerCase())) //ritornami l'Array di oggetti 'contacts' filtrato (con 'name' minuscolo e che 'includa' la stringa vuota 'cercaContatti' anche minuscolo)       
        },
        selectedContact(index) {   // Cambia contatto
            this.selected_user = index;
            let thisContact = this.contacts[this.selected_user];    // VARIABILE GENERICA 'thisContact'
            this.messages_array = thisContact.messages;
            console.log(this.messages_array);

            // variabile data
            let tmp = dayjs().format('DD/MM/YYYY hh:m:ss'); // variabile data
            console.log(tmp)
        },
    },
})