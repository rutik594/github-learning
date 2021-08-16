const express = require('express')
const app =express()
const PORT = 3002
app.listen(PORT, (req, res) => {
    res.send('Connected to server1')
})
