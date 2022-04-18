import { expect, server, BASE_URL } from './setup';
describe('Messages', () => {
  it('get messages page', done => {
    server
      .get(`${BASE_URL}/messages`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.data).to.be.instanceOf(Array);
        res.body.data.forEach(m => {
          expect(m).to.have.property('id');
          expect(m).to.have.property('name');
          expect(m).to.have.property('message');
          expect(m).to.have.property('createdAt');
          expect(m).to.have.property('updatedAt');
        });
        done();
      });
  });

  it('posts message', done => {
      const message = {name: 'spook', message: 'You have been spooked with spaget'}
      server
      .post(`${BASE_URL}/messages`)
      .send(message)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.data).to.have.property('id');
        expect(res.body.data).to.have.property('name', message.name);
        expect(res.body.data).to.have.property('message', `Says: ${message.message}`);
        expect(res.body.data).to.have.property('createdAt');
        expect(res.body.data).to.have.property('updatedAt');
        done();
      })
  })

  it('fails to post duplicate name', done => {
    const message = {name: 'spook', message: 'You have been spooked with spaget'}
    server
      .post(`${BASE_URL}/messages`)
      .send(message)
      .expect(400)
      .end((err, res) => {
        expect(res.status).to.equal(400);
        expect(res.body.data).to.be.instanceOf(Array);
        expect(res.body.data.length).to.equal(1);
        expect(res.body.data[0]).to.have.property('message', 'name must be unique');
        expect(res.body.data[0]).to.have.property('type', 'unique violation');
        done();
      })
  })

  it('deletes message with name', done => {
    server
    .delete(`${BASE_URL}/messages/delete-me`)
    .send()
    .expect(200)
    .end((err, res) => {
      expect(res.status).to.equal(200);
      expect(res.body.data).to.equal(1)
      done();
    })
  })
});