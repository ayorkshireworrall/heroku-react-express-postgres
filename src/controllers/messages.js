// import Message from '../models/message.js';

// const messagesModel = new Message('messages');

// export const messagesPage = async (req, res) => {
//   try {
//     const data = await messagesModel.select('name, message');
//     res.status(200).json({ messages: data.rows });
//   } catch (err) {
//     res.status(200).json({ messages: err.stack });
//   }
// };

// export const addMessage = async (req, res) => {
//   const { name, message } = req.body;
//   const columns = 'name, message';
//   const values = `'${name}', '${message}'`;
//   try {
//     const data = await messagesModel.insertWithReturn(columns, values);
//     res.status(200).json({ messages: data.rows });
//   } catch (err) {
//     res.status(200).json({ messages: err.stack });
//   }
// };
import { Message } from "../models/index.js";

export const messagesPage = async (req, res) => {
  try {
    const data = await Message.findAll();
    console.log(data)
    res.status(200).json({messages: data})
  } catch (error) {
    
  }
}

export const addMessage = async (req, res) => {
  const { name, message } = req.body;
  try {
    const data = await Message.create({name, message})
    res.status(200).json({ messages: data.rows });
  } catch (err) {
    res.status(200).json({ messages: err.stack });
  }
};