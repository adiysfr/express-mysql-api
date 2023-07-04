const ApiKeyModel = require('../models/apiKey') 

const apiKeyValidate = async(req, res, next) => {
  const apiHeader = req.header('api-key')
  if(apiHeader == null) return res.json({message:"api key is empty"})
  try {
    const [data] = await ApiKeyModel.getApiKey();
    const apiKey = data[0].api_key
    if(apiHeader === apiKey){
      next()
    }else{
      res.status(404).json({
        message: "api key invalid",
      })
    }
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
      serverMessage: error
    })
  }
}

module.exports = apiKeyValidate;