import app from '../../server';
import supertest from 'supertest'

describe('Test routes GET /', () => {
 it('should return a list of users', async () => {
  const res=await supertest(app)
  .get('/')
  expect(res.body.message).toBe('hi')
  
  })
})