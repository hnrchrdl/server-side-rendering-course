import express from 'express'
import renderer from './helpers/renderer'

const app = express();

app.get('*', (req, res) => res.send(renderer(req)));

app.use(express.static('public'))

app.listen(3000, () => {
    console.log('listening on 3000')
})