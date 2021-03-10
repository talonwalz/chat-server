const express = require('express')
const app = express()
const mc = require('./controllers/messages_controller')
app.use(express.json())
app.use(express.static(__dirname + '/../public/build'))


app.get(`/api/messages`, mc.read)
app.post('/api/messages/', mc.create)
app.put(`/api/messages/:id`, mc.update)
app.delete(`/api/messages/:id`, mc.delete)

const port = 3001
app.listen(port, () => console.log(`I am runnning on port ${port}!`))