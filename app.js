const express= require('express');
const ejs = require('ejs');
const app = express()

const port =  process.env.PORT|| 7000;

//all static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))

//template engine
app.set('views', './src/views')
app.set('view engine', 'ejs')

//rputes for app
app.get('/', (req,res) => {  
    res.render('index');
});
app.get('/about', (req,res) => {
    res.render('about.ejs');

});
app.get('/service', (req,res) => {
    res.render('service.ejs');

});
app.get('/blog', (req,res) => {
    res.render('blog');

});
app.get('/*', (req,res) => {
    res.render('index');

})
//listen to the port
app.listen(port, ()=>{
    console.log('listening to the port')
})