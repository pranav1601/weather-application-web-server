const path=require('path')
const express=require('express')

console.log(__dirname)

const app= express()
const publicDirectoryPath=path.join(__dirname,'../public')

app.set('view engine','hbs')
app.use(express.static(publicDirectoryPath))

app.get('',(req,res)=>{
    res.render('index',{
        title:'WEATHER APP',
        name: 'Pranav Agarwal'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'ABOUT',
        name:'Pranav Agarwal'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        message:'This is the help page!'
    })
})

app.get('/weather',(req,res)=>{
    res.send({
        forecast:'cloudy',
        location:'Bangalore'
    })
})

app.listen(3000,()=>{
    console.log('Server is up on port 3000')
})