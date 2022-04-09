import express from 'express';
import { environmentName } from '../settings'

const indexRouter = express.Router();

indexRouter.get('/', (req, res) => res.status(200).json({ message: `Hello from ${environmentName}` }));

export default indexRouter;
