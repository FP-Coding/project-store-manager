const { expect } = require('chai');
const sinon = require('sinon');

const { productsService } = require('../../../src/services');
const { productsController } = require('../../../src/controllers');

const { happyQueryAll, happyQueryById } = require('./mocks/productsControllers.test')

describe('Testando a camada de services', function () {
  afterEach(() => {
    sinon.restore()
  })
  it('Testando getAll', async function () {
    const req = {};
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'getAll').resolves({ type: null, message: happyQueryAll });

    await productsController.getAll(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.has.been.calledWith(happyQueryAll)
  })



  // it('Testando getByID com id válido', async function () {
  //   const req = { params: { id: 1 } };
  //   const res = {};

  //   res.status = sinon.stub().returns(res);
  //   res.json = sinon.stub().returns();

  //   sinon.stub(productsService, 'getById').resolves({ type: null, message: happyQueryById });

  //   await productsController.getById(req, res);

  //   expect(res.status).to.have.been.calledWith(200);
  //   expect(res.json).to.have.been.calledWith(happyQueryById)
  // })

  // it('Testando getByID com id inválido', async function () {
  //   const req = { params: { id: 9 } };
  //   const res = {};

  //   res.status = sinon.stub().returns(res);
  //   res.json = sinon.stub().returns();

  //   sinon.stub(productsService, 'getById').resolves({ type: 'PRODUCT_NOT_FOUND', message: 'Product not found' });

  //   await productsController.getById(req, res);

  //   expect(res.status).to.have.been.calledWith(404);
  //   expect(res.json).to.have.been.calledWith({message: 'Product not found'})
  // })
})
