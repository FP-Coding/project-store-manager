const { expect } = require('chai')
const sinon = require('sinon')

const { productModels } = require('../../../src/models')
const { happyQueryAll, happyQueryById, happyQueryByRouteParam } = require('./mocks/productsServices.mock')
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
  it('Testando a criação de um produto passando um nome com mais de 5 caracteres', async function () {
    // Arrange
    sinon.stub(productModels, 'create').resolves(3)
    // Act
    const result = await productsService.create('ProdutoX')
    // Assert
    expect(result.type).to.be.equal(null);
    expect(result.message).to.be.deep.equal({ id: 3, name: 'ProdutoX' })
  })
  it('Testando a criação de um produto passando um nome com menos de 5 caracteres', async function () {
    // Arrange
    sinon.stub(productModels, 'create').resolves(3)
    // Act
    const result = await productsService.create('a')
    // Assert
    expect(result.type).to.be.equal('INVALID_NAME');
    expect(result.message).to.be.deep.equal('"name" length must be at least 5 characters long')
  })
  it('Testando a atualização de um produto passando um nome com mais de 5 caracteres e com id correto', async function () {
    // Arrange
    sinon.stub(productModels, 'getById').resolves({ id: 1,name: 'Mjonir' })
    sinon.stub(productModels, 'update').resolves(1)
    // Act
    const result = await productsService.update(1, 'Manopla do Destino')
    // Assert
    expect(result.type).to.be.equal(null);
    expect(result.message).to.be.deep.equal({ id: 1, name: 'Manopla do Destino' })
  })
  it('Testando a atualização de um produto passando um nome com menos de 5 caracteres', async function () {
    // Arrange
    sinon.stub(productModels, 'getById').resolves({ id: 1,name: 'Mjonir' })
    sinon.stub(productModels, 'update').resolves(1)
    // Act
    const result = await productsService.update(1, 'a')
    // Assert
    expect(result.type).to.be.equal('INVALID_NAME');
    expect(result.message).to.be.deep.equal('"name" length must be at least 5 characters long')
  })
  it('Testando a atualização de um produto passando um id inexistente', async function () {
    // Arrange
    sinon.stub(productModels, 'getById').resolves(undefined)
    // Act
    const result = await productsService.update(9999, 'a')
    // Assert
    expect(result.type).to.be.equal('PRODUCT_NOT_FOUND');
    expect(result.message).to.be.deep.equal('Product not found')
  })
  it('Testando a atualização de um produto passando um id incorreto', async function () {
    // Act
    const result = await productsService.update('a', 'a')
    // Assert
    expect(result.type).to.be.equal('INVALID_VALUE');
    expect(result.message).to.be.deep.equal('"id" must be a number')
  })
  it('Testando a atualização de um produto passando um dado igual ao que está no banco de dados', async function () {
    // Arrange
    sinon.stub(productModels, 'getById').resolves({ id: 1,name: 'Mjonir' })
    sinon.stub(productModels, 'update').resolves(0)
    // Act
    const result = await productsService.update(1, 'Mjonir')
    // Assert
    expect(result.type).to.be.equal('FAIL_UPDATE');
    expect(result.message).to.be.deep.equal('Unable to update with this data')
  })
  it('Testando a deleção de um produto passando um id de produto existente', async function () {
    // Arrange
    sinon.stub(productModels, 'getById').resolves({ id: 1,name: 'Mjonir' })
    sinon.stub(productModels, 'deleteProduct').resolves(1)
    // Act
    const result = await productsService.deleteProduct(1)
    // Assert
    expect(result.type).to.be.equal(null);
    expect(result.message).to.be.deep.equal('')
  })
  it('Testando a deleção de um produto passando um id inválido', async function () {
    // Act
    const result = await productsService.deleteProduct('a')
    // Assert
    expect(result.type).to.be.equal('INVALID_VALUE');
    expect(result.message).to.be.deep.equal('"id" must be a number')
  })
  it('Testando a deleção de um produto passando um id de produto inexistente', async function () {
    // Arrange
    sinon.stub(productModels, 'getById').resolves(undefined)
    // Act
    const result = await productsService.deleteProduct(9999)
    // Assert
    expect(result.type).to.be.equal('PRODUCT_NOT_FOUND');
    expect(result.message).to.be.deep.equal('Product not found')
  })
  it('Testando a busca de produtos pelo route param', async function () {
    // Arrange
    sinon.stub(productModels, 'search').resolves(happyQueryByRouteParam)
    // Act
    const result = await productsService.search('th')
    // Assert
    expect(result.type).to.be.equal(null);
    expect(result.message).to.be.deep.equal(happyQueryByRouteParam)
  })
})
