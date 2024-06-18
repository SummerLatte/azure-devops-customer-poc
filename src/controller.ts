import { Request, Response } from 'express';

// A simple controller function
const getHelloWorld = (req: Request, res: Response): void => {
  res.send('Hello World!');
};

// Export the controller function
export default {
  getHelloWorld,
};
