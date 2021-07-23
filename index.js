const express = require('express')
const path = require('path')
const app = express()
const port = 3000

// obtiene la ruta del directorio publico donde se encuentran los elementos estaticos (css, js).
var publicPath = path.resolve(__dirname, 'public'); 
// Para que los archivos estaticos queden disponibles.
app.use(express.static(publicPath));



app.get('/',(request,response)=> {
   
    response.sendFile(path.resolve(__dirname, './tdt.html'))
})

    
   
app.listen(port, () => {
    console.log('La aplicacion esta en linea!');
})
