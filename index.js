const express = require('express')
const routes = require('./routes')

const app = express();
app.set('view engine', 'ejs')
app.set('x-powered-by', false)
app.set('env', 'production')

app.use((req, res) => {
    res.send('not found any matching route, sorry 404.')
})

app.use(routes)


app.listen(3000, _ => {
    console.log('express is listening...')
})