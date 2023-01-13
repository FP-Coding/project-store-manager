const { expect } = require('chai')
const sinon = require('sinon')

// const validationInputValues = require('../../../src/services/validations/validationInputValues')
const { productModels } = require('../../../src/models')
const { happyQueryAll, happyQueryById } = require('./mocks/productsServices.mock')
const { productsService } = require('../../../src/services');

describe('Testando service de Products', function () {
  afterEach(() => {
    sinon.restore();
  })

  it('Testando getAll da productsServices', async function () {
    // Arrange
    sinon.stub(productModels, 'getAll').resolves(happyQueryAll)
    // Act
    const result = await productsService.getAll()
    // Assert
    expect(result.type).to.be.equal(null);
    expect(result.message).to.be.deep.equal(happyQueryAll)
  })

  it('Testando getById da productsServices com id válido', async function () {
    // Arrange
    sinon.stub(productModels, 'getById').resolves(happyQueryById)
    // Act
    const result = await productsService.getById(1)
    // Assert
    expect(result.type).to.be.equal(null);
    expect(result.message).to.be.deep.equal(happyQueryById)
  })

  it('Testando getById da productsServices passando um id de um produto não existente', async function () {
    // Arrange
    sinon.stub(productModels, 'getById').resolves(undefined)
    // Act
    const result = await productsService.getById(4)
    // Assert
    expect(result.type).to.be.equal('PRODUCT_NOT_FOUND');
    expect(result.message).to.be.deep.equal('Product not found')
  })

  it('Testando getById da productsServices passando um id invalido', async function () {
    // Arrange
    sinon.stub(productModels, 'getById').resolves(undefined)
    // Act
    const result = await productsService.getById('a')
    // Assert
    expect(result.type).to.be.equal('INVALID_VALUE');
    expect(result.message).to.be.deep.equal('"id" must be a number')
  })
})
