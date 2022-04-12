import { Message } from "../models/index.js";

export const messageInitialiser = async () => {
    await Message.sync({ force: true});
    await Message.create({'name': 'hello', 'message': 'Hi you grob!'})
}