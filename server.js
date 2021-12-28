const express = require('express')

const port = process.env.PORT || 5000
const app = express()
// If in development run from public, if not in development, run build
const staticDir = process.env.DEV ? "./client/public" : "./client/build"

//middleware functions
app.use(express.static(staticDir))
app.use(express.urlencoded({extended: true}))

