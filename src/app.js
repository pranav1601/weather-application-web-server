const path=require('path')
const express=require('express')
const hbs=require('hbs')

const app= express()

//paths for express config
const publicDirectoryPath=path.join(__dirname,'../public')
const viewsPath=path.join(__dirname,'../templates/views')
const partialsPath=path.join(__dirname,'../templates/partials')


//setup handlebars enginene and views location
app.set('view engine','hbs')
app.set('views',viewsPath)
app.use(express.static(publicDirectoryPath))
hbs.registerPartials(partialsPath)

app.get('',(req,res)=>{
    res.render('index',{
        title:'WEATHER APP',
        name: 'Pranav Agarwal'
    })
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'ABOUT ME!',
        name:'Pranav Agarwal'
    })
})

app.get('/help',(req,res)=>{
    res.render('help',{
        title:'HELP',
        message:'This is the help page!',
        name: 'Pranav Agarwal'
    })
})

app.get('/weather',(req,res)=>{
    res.send({
        forecast:'cloudy',
        location:'Bangalore'
    })
})

app.get('/help/*',(req,res)=>{
    res.render('404',{
        title:'404!',
        errorMessage:'This help article could not be found :(',
        name: 'Pranav Agarwal'
    })
})

app.get('*',(req,res)=>{
    res.render('404',{
        title:'404!',
        errorMessage:'This web page could not be found :(',
        name: 'Pranav Agarwal'
    })
})

app.listen(3000,()=>{
    console.log('Server is up on port 3000')
})