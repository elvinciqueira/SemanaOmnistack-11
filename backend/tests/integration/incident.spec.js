// import request from 'supertest';
// import app from '../../src/app';
// // import connection from '../../src/database/index';

// describe('Incidents', () => {
//   // beforeEach(async () => {
//   //   await connection.migrate.rollback();
//   //   await connection.migrate.latest();
//   // });

//   // afterAll(async () => {
//   //   await connection.destroy();
//   // });

//   it('should be able to create new incident', async () => {
//     const response = await request(app)
//       .post('/incidents')
//       .set('Authorization', '207c66c8')
//       .send({
//         title: 'Caso teste',
//         description: 'Detalhes do caso',
//         value: 120,
//       });

//     expect(response.body).toHaveProperty('id');
//   });
// });
