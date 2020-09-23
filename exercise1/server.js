var express= require('express');
var timestampRoutes= require('./routes/timestampRoutes')
var app= express();

app.use('/api/timestamp',timestampRoutes);
app.listen(9000, () => {
    console.log('Server started')
})

