const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { expect } = chai;

chai.use(sinonChai)

const { productsService } = require('../../../src/services');
const { productsController } = require('../../../src/controllers');

const { happyQueryAll, happyQueryById } = require('./mocks/productsControllers.mock')

describe('Testando a camada controller de products', function () {
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
    expect(res.json).to.have.been.calledWith(happyQueryAll)
  })

  it('Testando getByID com id válido', async function () {
    const req = { params: { id: 1 } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'getById').resolves({ type: null, message: happyQueryById });

    await productsController.getById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(happyQueryById)
  })

  it('Testando getByID com id inválido', async function () {
    const req = { params: { id: 9 } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'getById').resolves({ type: 'PRODUCT_NOT_FOUND', message: 'Product not found' });

    await productsController.getById(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({message: 'Product not found'})
  })

  it('Testando função create com name válido', async function () {
    const req = { body: { name: 'ProdutoX' } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'create').resolves({ type: null, message: { id: 1, name: 'ProdutoX' } });

    await productsController.create(req,res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith({ id: 1, name: 'ProdutoX' })
  })

  it('Testando função create com name inválido', async function () {
    const req = { body: { name: 'a' } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'create').resolves({ type: 'INVALID_NAME', message: '"name" length must be at least 5 characters long' });

    await productsController.create(req,res);

    expect(res.status).to.have.been.calledWith(422);
    expect(res.json).to.have.been.calledWith({ message: '"name" length must be at least 5 characters long' })
  })

  it('Testando função update com name válido', async function () {
    const req = { body: { name: 'ProdutoX' }, params: { id: 1 } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'update').resolves({ type: null, message: { id: 1, name: 'ProdutoX' } });

    await productsController.update(req,res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith({ id: 1, name: 'ProdutoX' })
  })

  it('Testando função update com name inválido', async function () {
    const req = { body: { name: 'x' }, params: { id: 1 } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'update').resolves({ type: 'INVALID_NAME', message: '"name" length must be at least 5 characters long' });

    await productsController.update(req,res);

    expect(res.status).to.have.been.calledWith(422);
    expect(res.json).to.have.been.calledWith({ message: '"name" length must be at least 5 characters long' })
  })

  it('Testando função delete', async function () {
    const req = { params: { id: 9999 } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'deleteProduct').resolves({ type: 'PRODUCT_NOT_FOUND', message: 'Product not found' });

    await productsController.deleteProduct(req,res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Product not found' })
  })

  it('Testando função delete', async function () {
    const req = { params: { id: 1 } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.end = sinon.stub().returns();

    sinon.stub(productsService, 'deleteProduct').resolves({ type: null, message: '' });

    await productsController.deleteProduct(req,res);

    expect(res.status).to.have.been.calledWith(204);
  })
})
