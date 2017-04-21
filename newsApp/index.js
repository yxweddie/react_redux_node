import express from 'express';

let app = express();

app.use('/static',express.static(__dirname+'/src/'));
app.set('views',__dirname+'/src/views');
app.set('view engine','pug');

//  routing

app.get('*',(req,res)=>{
    res.render("index");
});

app.listen(3000,()=>{
    console.log('listen to this joint on port 3000');
});