import { Request, Response } from 'express';
import controller from '../controller';

describe('Controller Tests', () => {
  it('should send "Hello World!"', () => {
    const req = {} as Request; // Mock request
    const res = {
      send: jest.fn(),
    } as unknown as Response; // Mock response

    controller.getHelloWorld(req, res);
    
    expect(res.send).toHaveBeenCalledWith('Hello World!');
  });
});
