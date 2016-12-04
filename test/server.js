let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server.js');
let should = chai.should();

chai.use(chaiHttp);

describe('ToDo', () => {

    describe('/GET todo', () => {
        it('it should GET all the todo', (done) => {
            chai.request(server)
                .get('/api/todo')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(0);
                    done();
                });
        });
    });

    describe('/POST todo', () => {
        it('POST should create new todo', (done) => {
            chai.request(server)
                .post('/api/todo')
                .send({ name: 'Test' })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('id');
                    res.body.should.have.property('checked');
                    res.body.should.have.property('name');
                    res.body.name.should.be.eql('Test');
                    done();
                });
        });
    });

    describe('/GET todo/:id', () => {
        it('GET should return new todo', (done) => {
            chai.request(server)
                .post('/api/todo')
                .send({ name: 'Test' })
                .end((err, res) => {
                    var newId = res.body.id;
                    chai.request(server)
                        .get(`/api/todo/${newId}`)
                        .end((err, res) => {
                            res.should.have.status(200);
                            res.body.should.be.a('object');
                            res.body.should.have.property('id');
                            res.body.should.have.property('checked');
                            res.body.should.have.property('name');
                            res.body.id.should.be.eql(newId);
                            res.body.name.should.be.eql('Test');
                            done();
                        });
                });
        });
    });

    describe('/PUT todo/:id', () => {
        it('PUT should update', (done) => {
            chai.request(server)
                .post('/api/todo')
                .send({ name: 'Test' })
                .end((err, res) => {
                    var newId = res.body.id;
                    chai.request(server)
                        .put(`/api/todo/${newId}`)
                        .send({ name: 'UpdatedTest', checked: true })
                        .end((err, res) => {
                            chai.request(server)
                                .get(`/api/todo/${newId}`)
                                .end((err, res) => {
                                    res.should.have.status(200);
                                    res.body.should.be.a('object');
                                    res.body.should.have.property('id');
                                    res.body.should.have.property('checked');
                                    res.body.should.have.property('name');
                                    res.body.id.should.be.eql(newId);
                                    res.body.name.should.be.eql('UpdatedTest');
                                    res.body.checked.should.be.eql(true);
                                    done();
                                })
                        });
                });
        });
    });

    describe('/DELETE todo/:id', () => {
        it('DELETE should delete', (done) => {
            chai.request(server)
                .post('/api/todo')
                .send({ name: 'Test' })
                .end((err, res) => {
                    var newId = res.body.id;
                    chai.request(server)
                        .delete(`/api/todo/${newId}`)
                        .end((err, res) => {
                            chai.request(server)
                                .get(`/api/todo/${newId}`)
                                .end((err, res) => {
                                    res.should.have.status(404);
                                    done();
                                })
                        });
                });
        });
    });

});