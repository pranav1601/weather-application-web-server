const path=require('path')
const express=require('express')
const hbs=require('hbs')
const geocode=require('./utils/geocode.js')
const forecast=require('./utils/forecast.js')

const app= express()

const port= process.env.PORT || 3000

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
    if(!req.query.address){
        return res.send({
            error:'Please enter the address.'
        })
    }
    const address=req.query.address
    geocode(address,(error,data)=>{
        if(error){
            return res.send({
                error
            })
        }
        const {longitude,latitude,location}=data
        forecast(longitude,latitude,(error,forecastData)=>{
            if(error){
                return res.send({
                    error
                })
            }
            res.send({
                forecastData,
                location,
                address
        })
    })
    
    
    })
})

app.get('/products',(req,res)=>{
    if(!req.query.search){
        return res.send({
            error:'You must provide a search term'
        })

    }
    console.log(req.query.search)
    res.send({
        products:[]
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

app.listen(port,()=>{
    console.log('Server is up on port '+port)
})