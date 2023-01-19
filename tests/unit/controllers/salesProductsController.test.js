const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const { expect } = chai;

chai.use(sinonChai)

const { salesProductsServices } = require('../../../src/services');
const { salesProductsControllers } = require('../../../src/controllers');

const {
  rightSaleBody,
  responseCreate,
  nonexistentProductIdBody2,
  responseGetById,
  responseInnerGetAll,
} = require('./mocks/salesProductsController.mock')

describe('Testando salesProductsServices', function () {
  afterEach(() => {
    sinon.restore();
  })
  it('Testando função create',async function () {
    const req = { body: rightSaleBody };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(salesProductsServices, 'create').resolves({ type: null, message: responseCreate })

    await salesProductsControllers.create(req,res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(responseCreate);
  })

  it('Testando função create com id de um produto que não existe',async function () {
    const req = { body: nonexistentProductIdBody2 };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(salesProductsServices, 'create').resolves({ type: 'PRODUCT_NOT_FOUND', message: 'Product not found' })

    await salesProductsControllers.create(req,res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Product not found'});
  })

  it('Testando função getById com id de um produto que existe',async function () {
    const req = { params: { id: 1 } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(salesProductsServices, 'getById').resolves({ type: null, message: responseGetById })

    await salesProductsControllers.getById(req,res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(responseGetById);
  })

  it('Testando função getById com id de um produto que não existe',async function () {
    const req = { params: { id: 9999 } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(salesProductsServices, 'getById').resolves({ type: 'SALE_NOT_FOUND', message: 'Sale not found' })

    await salesProductsControllers.getById(req,res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Sale not found' });
  })

  it('Testando função innerGetAll',async function () {
    const req = {};
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(salesProductsServices, 'innerGetAll').resolves({ type: null, message: responseInnerGetAll })

    await salesProductsControllers.innerGetAll(req,res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(responseInnerGetAll);
  })

  it('Testando função update passando id invalido',async function () {
    const req = { params: { id: 'a' }, body: rightSaleBody };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(salesProductsServices, 'update').resolves({ type: 'INVALID_VALUE', message: '"id" must be a number' })

    await salesProductsControllers.update(req,res);

    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith({ message: '"id" must be a number' });
  })

  it('Testando função update passando id invalido',async function () {
    const req = { params: { id: 1 }, body: rightSaleBody };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(salesProductsServices, 'update').resolves({ type: null, message: { saleId: 1, itemsUpdated: rightSaleBody } })

    await salesProductsControllers.update(req,res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith({ saleId: 1, itemsUpdated: rightSaleBody });
  })
})
