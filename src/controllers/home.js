import { environmentName } from '../settings';

export const indexPage = (req, res) => res.status(200).json({ message: `Hello from ${environmentName}` });
