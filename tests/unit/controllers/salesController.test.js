const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { expect } = chai;

chai.use(sinonChai)

const { salesServices } = require('../../../src/services');
const { salesController } = require('../../../src/controllers');


describe('Testando a camada controller de products', function () {
  afterEach(() => {
    sinon.restore()
  })
  it('Testando função de deleção de uma sale passando um id inválido', async function () {
    const req = { params: { id: 'a' }};
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(salesServices, 'deleteSale').resolves({ type: 'INVALID_VALUE', message: '"id" must be a number' });

    await salesController.deleteSale(req, res);

    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith({ message: '"id" must be a number' })
  })

  it('Testando função de deleção de uma sale com sucesso', async function () {
    const req = { params: { id: 1 }};
    const res = {};

    res.status = sinon.stub().returns(res);
    res.end = sinon.stub().returns();

    sinon.stub(salesServices, 'deleteSale').resolves({ type: null, message: '' });

    await salesController.deleteSale(req, res);

    expect(res.status).to.have.been.calledWith(204);
  })
})
