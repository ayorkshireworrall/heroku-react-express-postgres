import { Message } from "../models/index.js";

export const messagesPage = async (req, res) => {
  try {
    const data = await Message.findAll();
    res.status(200).json({data: data})
  } catch (error) {
    
  }
}

export const addMessage = async (req, res) => {
  const { name, message } = req.body;
  try {
    const data = await Message.create({name, message})
    res.status(200).json({ data: data });
  } catch (err) {
    res.status(400).json({ data: err.errors });
  }
};

const deleteById = async id => {
  return await Message.destroy({
    where: {id: id}
  })
}

const deleteByName = async name => {
  return await Message.destroy({
    where: {name: name
    }
  })
}

export const deleteMessage = async (req, res) => {
  const nameOrId = req.params.nameOrId
  const isId = Number.isInteger(nameOrId)
  let deletedRows = 0
  try {
    if (isId) {
      deletedRows = await deleteById(nameOrId)
    } else {
      deletedRows = await deleteByName(nameOrId)
    }
    res.status(200).json( {data: deletedRows})
  } catch (error) {
    res.status(400).json({ data: error.errors });
  }
}