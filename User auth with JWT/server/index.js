const app = require('./app');

const PORT = process.env.PORT || 4000 ;

app.listen(PORT, () => {
    console.log(`PORT is running at http://localhost:${PORT}`)
})