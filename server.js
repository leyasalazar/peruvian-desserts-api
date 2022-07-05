const express = require('express')
const app = express()

const cors = require('cors')
const PORT = 8000

app.use(cors())

const peruvianDesserts = {
    'pionono': {
        'description': "This Peruvian dessert is a delicate jelly roll cake filled with dulce de leche. The perfect ending to a celebratory feast."},
    'picarones': {
        'description': 'The unique flavor of these deep-fried donuts comes from the pureed butternut squash and the addition of a premium beer to the dough. When dripping with spiced syrup, picarones will be insanely addictive.'},
    'mazamorra morada': {
        'description': 'This pudding is made with a unique variety of corn, dried fruits, and sweet potato starch. It has a jelly-like consistency, brimming with warm flavors from cinnamon and cloves. Serve it hot for a winter comfort food like no other!'},
    'arroz con leche': {
        'description': "Arroz con leche is a sweet rice pudding that's deliciously creamy. This dessert is made with rice and milk, and is flavored with cinnamon, vanilla, and sometimes raisins."},
    'alfajores': {
        'description': "It's a cookie sandwich with cinnamon-infused dulce de leche, then rolled in powdered sugar. "},
    'chicha morada': {
        'description': "It's a healthy, invigorating drink made with purple corn, green apples, lime juice, and a few spices. "},
    'unknown': {
        'description': 'unknown'
    }
}

app.get('/',(request, response)=> {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:dessertName', (request, response)=>{
    const dessertsName = request.params.dessertName.toLowerCase()
    if(peruvianDesserts[dessertsName]){
        response.json(peruvianDesserts[dessertsName])
    } else {
        response.json(peruvianDesserts['unknown'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log('Server is running.')
})