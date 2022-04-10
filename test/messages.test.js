import { expect, server, BASE_URL } from './setup';
describe('Messages', () => {
  it('get messages page', done => {
    server
      .get(`${BASE_URL}/messages`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.messages).to.be.instanceOf(Array);
        res.body.messages.forEach(m => {
          expect(m).to.have.property('name');
          expect(m).to.have.property('message');
        });
        done();
      });
  });

  it('posts message', done => {
      const data = {name: 'spook', message: 'You have been spooked with spaget'}
      server
      .post(`${BASE_URL}/messages`)
      .send(data)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.messages).to.be.instanceOf(Array);
        res.body.messages.forEach(m => {
            expect(m).to.have.property('id');
            expect(m).to.have.property('name', data.name);
            expect(m).to.have.property('message', `Says: ${data.message}`);
          });
          done();
      })
  })
});