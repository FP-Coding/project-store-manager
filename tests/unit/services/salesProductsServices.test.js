const { expect } = require('chai')
const sinon = require('sinon')

const {
  rightSaleBody,
  responseSales,
  responseGetInnerAll,
  wrongBodyProductId,
  responseService,
  responseSalesById,
  responseGetByIds1,
  responseGetByIds2,
  responseGetById,
  saleCreateResponse,
  nonexistentProductIdBody
} = require('./mocks/salesProducts.mock')
const { salesProductsModels, productModels, salesModels } = require('../../../src/models')
const { salesProductsServices } = require('../../../src/services');

describe('Testando salesProducts Services', function () {
  afterEach(() => {
    sinon.restore()
  })
  it('Testando a criação de um relacionamento entre as tabelas sale e products', async function () {
    sinon.stub(productModels, 'getByIds').resolves(responseGetByIds1);
    sinon.stub(salesProductsModels, 'create').resolves(1);
    sinon.stub(salesProductsModels, 'getById').resolves(responseGetById);

    const result = await salesProductsServices.create(rightSaleBody);

    expect(result.type).to.be.equal(null);
    expect(result.message).to.be.deep.equal(saleCreateResponse)
  })

  it('Testando se a criação de um relacionamento entre as tabelas sale e products falha ao passar um body incorreto', async function () {

    const result = await salesProductsServices.create(wrongBodyProductId);

    expect(result.type).to.be.equal('INVALID_VALUE');
    expect(result.message).to.be.deep.equal('"[0].productId" must be a number')
  })

  it('Testando a criação de um relacionamento entre as tabelas sale e products falha ao passar um id de produto inexistente', async function () {
    sinon.stub(productModels, 'getByIds').resolves(responseGetByIds2);

    const result = await salesProductsServices.create(nonexistentProductIdBody);

    expect(result.type).to.be.equal('PRODUCT_NOT_FOUND');
    expect(result.message).to.be.deep.equal('Product not found')
  })

  it('Testando a busca de sales pelo id passando um id inválido', async function () {
    const result = await salesProductsServices.getById('a');

    expect(result.type).to.be.equal('INVALID_VALUE');
    expect(result.message).to.be.deep.equal('"id" must be a number')
  })

  it('listagem de sales falha ao passar um id de produto existente', async function () {
    sinon.stub(productModels, 'getById').resolves(undefined);

    const result = await salesProductsServices.getById(9999);

    expect(result.type).to.be.equal('SALE_NOT_FOUND');
    expect(result.message).to.be.deep.equal('Sale not found')
  })

  it('listagem de sales acontece com sucesso', async function () {
    sinon.stub(salesModels, 'getById').resolves(responseSales);
    sinon.stub(salesProductsModels, 'getById').resolves(responseSalesById)

    const result = await salesProductsServices.getById(1);

    expect(result.type).to.be.equal(null);
    expect(result.message).to.be.deep.equal(responseService)
  })

  it('listagem de todas as sales com sucesso', async function () {
    sinon.stub(salesProductsModels, 'innerGetAll').resolves(responseGetInnerAll);

    const result = await salesProductsServices.innerGetAll();

    expect(result.type).to.be.equal(null);
    expect(result.message).to.be.deep.equal(responseGetInnerAll)
  })
})
