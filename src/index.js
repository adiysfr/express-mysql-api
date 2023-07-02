const express = require('express');
const app = express();
const userRoutes = require('./routes/users.js')
const articleRoutes = require('./routes/article.js')
const upload = require('./middelware/multer.js')
const PORT = process.env.PORT || 4000
const cors = require('cors')

app.use(express.json())

// handle cors
app.use(cors());

// hanndle upload


// ***** ROUTE LIST ENDPOINT ***** //

// Route Users
app.use('/users', userRoutes);

//Route Article
app.use('/article', articleRoutes);

// ***** END ROUTE LIST ENDPOINT ***** //



// static file read
app.use('/assets', express.static('public/images'))

app.post('/upload', upload.single('image'), (req ,res)=>{
  res.json({
    message: "upload berhasil"
  })
})
app.use((err, req, res, next) => {
  res.json({
    message: err.message
  })
})

app.listen(PORT, () => {
  console.log(`server running in port ${PORT}`)
})

