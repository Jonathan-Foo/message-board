const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}));

const messages = [
    {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    },
    {
        text: "Howdy!",
        user: "Steve",
        added: new Date()
    },
    {
        text: "Hi Everybody!",
        user: "Laura",
        added: new Date()
    },

]

app.get('/', (req, res) => {
    
    res.render('index.ejs', {messages: messages});
})

app.get('/new', (req, res) => {
    res.render('new.ejs');
})

app.post('/new', (req, res) => {
    const newMessage = {
        text: req.body.message,
        user: req.body.name,
        added: new Date()
    }; 
    messages.push(newMessage);
    res.redirect('/');
})

app.listen(3000);


