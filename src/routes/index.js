import express from 'express';
import { indexPage, messagesPage, addMessage } from '../controllers/index.js';
import { modifyMessage, performAsyncAction } from '../middleware/index.js';

const indexRouter = express.Router();

indexRouter.get('/', indexPage);
indexRouter.get('/messages', messagesPage);
indexRouter.post('/messages', modifyMessage, performAsyncAction, addMessage);

export default indexRouter;
