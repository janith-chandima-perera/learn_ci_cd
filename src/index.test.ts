import request from 'supertest';
import app from './index';  // Import the actual app

describe('GET /', () => {
    it('should return Hello, TypeScript with CI/CD!', async () => {
        const res = await request(app).get('/');
        expect(res.text).toBe('Hello, TypeScript with CI/CD!');
        expect(res.statusCode).toBe(200);
    });
});
