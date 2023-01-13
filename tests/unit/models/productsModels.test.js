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

    sinon.stub(connection, 'execute').resolves([happyQueryAll])

    const result = await productModels.getAll();

    expect(result).to.be.deep.equal(happyQueryAll);
  })
  it('Testando se é retornado corretamente o elemento quando é passado um id correto', async function() {

    sinon.stub(connection, 'execute').resolves([[happyQueryById]])

    const result = await productModels.getById(1);

    expect(result).to.be.deep.equal(happyQueryById);
  })
  it('Testando se é retornado undefined quando é passado um id incorreto', async function () {
    sinon.stub(connection, 'execute').resolves(undefined)

    const result = await productModels.getById(100);

    expect(result).to.be.equal(undefined);
  })
})
