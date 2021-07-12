const express = require('express')
const app = express()
require('dotenv/config');
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const PORT = process.env.PORT || 5000

// Routes
const PersonRoutes = require('./routes/Persons.routes')
const CityRoutes = require('./routes/Citys.routes')
const ActivitysRoutes = require('./routes/Activitys.routes')
const OrganismRoutes = require('./routes/Organism.routes')
const UserRoutes = require('./routes/Users.routes')
const { verifyIsAuth } = require('./middlewares/auth.middleware')

mongoose.connect(process.env.DB_MONGODB, 
    {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true},
    () => console.log('Datatbase Connected')
)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
const corsOptions = {
    origin: 'http://localhost:3000', 
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200
}
app.use(cors(corsOptions))

app.use('/api', PersonRoutes)
app.use('/api', CityRoutes)
app.use('/api', ActivitysRoutes)
app.use('/api', OrganismRoutes)
app.use('/api', UserRoutes)

app.use('*', verifyIsAuth, (req, res, next) => {
    next()
})

app.listen(PORT, (err) => {
    if (err) {
        console.log(err)
    }
    console.log(`Your App Listen To Port ${PORT}`)
})
