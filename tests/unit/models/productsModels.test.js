const { expect } = require('chai');
const sinon = require('sinon')

const { happyQueryAll, happyQueryById } = require('./mocks/productsModels.mock');
const { productModels } = require('../../../src/models')

describe('Testando o productModels', function () {
  afterEach(() => {
    sinon.restore()
  })

  it('Testando se é retornado todos os itens corretamente', async function () {
    // Arrange
    sinon.stub(productModels, 'getAll').resolves([happyQueryAll])
    // Act
    const result = await productModels.getAll();
    // Assert
    expect(result).to.be.deep.equal(happyQueryAll)
  })
})
