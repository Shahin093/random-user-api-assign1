const express = require('express');
const cors = require("cors");
const userRouter = require('./router/v1/users.router');
const app = express()
const port = process.env.PORT || 5000;


// middleware 
app.use(cors());
app.use(express.json());


app.use('/api/v1/user', userRouter);
app.use('/all', userRouter);
app.use('/save', userRouter);
app.use('/:id', userRouter);

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.use('*', (req, res) => {
    res.send('no found a data..')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})