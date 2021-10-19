
/*
    //sin biblioteca Express
const http = require("http")
const app = http.createServer( (req, res)=>{

    res.writeHead(200, {'Content-type':'application/json'})
    
    res.end(JSON.stringify(notes) )
} ).listen(3001) 
*/



const express = require('express')
const PORT = 3001;

let notes = [
    {
        "id": 1,
        "content": "contenido 1",
        "date": "2019-05-02",
        "important": false,
    },
    {
        "id": 2,
        "content": "contenido 2",
        "date": "2019-05-02",
        "important": true,
    },
    {
        "id": 3,
        "content": "contenido 3",
        "date": "2019-05-02",
        "important": true,
    }
]



const app = express()
app.use(express.json())

app.get('/', (req, res) => {

    res.send("<h1>Hola midudevs</h1>")
})

app.get('/notes', (req, res) => {

    res.json(notes)
})

app.post('/notes', (req, res) => {

    const note = req.body

    if(!note || !note.content){

        return res.status(400).json('I dont have that')
    }



    const ids = notes.map( note => note.id )
    idMax = Math.max(... ids)

    const newNote = {

        id: idMax + 1,
        content: note.content,
        important: typeof note.important !== 'undefined' ? note.important : false,
        date: new Date().toISOString(),

    }

    notes = [... notes, newNote]
    res.status(201).json(newNote)
})

app.get('/notes/:id', (req, res) => {

    const id = Number(req.params.id)
    note = notes.find(note => note.id === id)

    if (note) {

        res.send(note)
    } else {

        res.status(404).end()
    }

})


app.delete('/notes/:id', (req, res) => {

    const id = Number(req.params.id)
    notes = notes.filter(note => note.id !== id)

    res.status(204).end()

})


app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`)
})