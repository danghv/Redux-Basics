const express = require('express')
const app = express()

app.get('/api/book', (req, res) => {
    res.json({
        title: 'you dont know js',
        page: 999
    })
})


app.listen(3001, () => {
    console.log('Listening on port 3001')
})