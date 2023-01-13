const { expect } = require('chai');
const sinon = require('sinon')

const { happyQueryAll, happyQueryById } = require('./mocks/productsModels.mock');
const { productModels } = require('../../../src/models');
const connection = require('../../../src/models/connection');

describe('Testando o productModels', function () {
  afterEach(() => {
    sinon.restore()
  })

  it('Testando se é retornado todos os itens corretamente', async function () {
    // Arrange
    sinon.stub(connection, 'execute').resolves([happyQueryAll])
    // Act
    const result = await productModels.getAll();
    // Assert
    expect(result).to.be.deep.equal(happyQueryAll);
  })
})
