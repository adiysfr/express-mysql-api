const UsersModel = require('../models/users')

// Get All Users
const getAllUsers = async (req, res) => {
  try {
    const [data] = await UsersModel.getAllUsers();
    res.json({
      message: "success get data",
      data: data
    })
    
  } catch (error) {
    res.status(500).json({
      message: "server error",
      serverMessage: error
    })
  }
}

// Create New User
const createNewUser = async (req, res) => {
  const {body} = req;
  if(!body.name || !body.email || !body.address){
    return res.status(400).json({
      message: "Data yang anda masukan salah",
      data: null
    })
  }
  try {
    await UsersModel.createNewUser(body);
    res.status(201).json({
      message: "success",
      data: body
    })
  } catch (error) {
    res.status(400).json({
      message: "server error",
      serverMessage: error
    })
  }
}

const updateUser = async (req, res) => {
  const { id } = req.params
  const {body} = req;

  try {
    await UsersModel.updateUser(body, id);
    res.json({
      message: "success",
      data: {
        id: id,
        ...body
      }
    })
  } catch (error) {
    res.status(400).json({
      message: "server error",
      serverMessage: error
    })
  }
}

const deleteUser = async (req, res) => {
  const { id } = req.params
  try {
    await UsersModel.deleteUser(id);
    res.json({
      message: "success delete user",
      data: {
        id: id
      }
    })
  } catch (error) {
    res.status(400).json({
      message: "server error",
      serverMessage: error
    })
  }

}

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser
}