const express = require('express');
const app = express();
const userRoutes = require('./routes/users.js')
const articleRoutes = require('./routes/article.js')
const categoriesRoutes = require('./routes/categories.js')
// const upload = require('./middelware/multer.js')
const PORT = process.env.PORT || 4000
const cors = require('cors')
const apiKeyValidate = require('./middelware/apiKeyValidate.js')

app.use(express.json())

// handle cors
app.use(cors());

// API KEY VALIDATE
app.use(apiKeyValidate)


// ***** ROUTE LIST ENDPOINT ***** //

// Route Users
app.use('/users', userRoutes);

//Route Article
app.use('/article', articleRoutes);

//Route Categories
app.use('/categories', categoriesRoutes);

// ***** END ROUTE LIST ENDPOINT ***** //



// static file read
app.use('/assets', express.static('public/images'))

app.use((err, req, res, next) => {
  res.json({
    message: err.message
  })
})

app.listen(PORT, () => {
  console.log(`server running in port ${PORT}`)
})

