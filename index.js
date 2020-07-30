const express = require('express')
const app = express()
const port = 5000

const mongoose  = require('mongoose')
mongoose.connect('mongodb+srv://vladastam:dlwngh1234@boilerplate.o1jfd.mongodb.net/<dbname>?retryWrites=true&w=majority', {
	useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))



app.get('/', (req, res) => res.send('Hello World! + 박지우 인기남느님'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))