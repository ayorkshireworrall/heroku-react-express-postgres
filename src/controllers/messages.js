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