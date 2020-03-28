import request from 'supertest';
import app from '../../src/app';
import connection from '../../src/database/index';

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to create a new ONG', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        name: 'APAD3',
        email: 'contato@contato.com',
        whatsapp: '11943062027',
        city: 'Diadema',
        uf: 'SP',
      });

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
});
