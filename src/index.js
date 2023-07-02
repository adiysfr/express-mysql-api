const express = require('express');
const app = express();
const userRoutes = require('./routes/users.js')
const upload = require('./middelware/multer.js')
const PORT = process.env.PORT || 4000

app.use(express.json())
app.use('/users', userRoutes);

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

