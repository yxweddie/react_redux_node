import express from 'express';
let app = express();

// setting up others
app.use('/static', express.static(__dirname+'/public')); 
app.set('views', __dirname+ '/views')
app.set('view engine','pug');

app.get('/',(req,res)=>{
    // res.send("hello redux and react!");
    res.render("index");
});

app.listen(3000,()=>{
    console.log('listen to this joint on port 3000');
});