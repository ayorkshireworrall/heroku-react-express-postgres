import express from 'express';
import { indexPage, messagesPage, addMessage, deleteMessage } from '../controllers/index.js';
import { modifyMessage, performAsyncAction } from '../middleware/index.js';

const indexRouter = express.Router();

indexRouter.get('/', indexPage);
indexRouter.get('/messages', messagesPage);
indexRouter.post('/messages', modifyMessage, performAsyncAction, addMessage);
indexRouter.delete('/messages/:nameOrId', deleteMessage);

export default indexRouter;
