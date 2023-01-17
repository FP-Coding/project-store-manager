const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/connection');
const { salesModels } = require('../../../src/models');

const { salesMock } = require('./mocks/salesModels.mock')

describe('Testando salesModels', function () {
  afterEach(() => {
    sinon.restore();
  })
  it('Testando a criação de uma sale', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 1 }]);

    const result = await salesModels.create();

    expect(result).to.be.equal(1);
  })
  it('Testando a busca de um produto pelo id', async function () {
    sinon.stub(connection, 'execute').resolves([[salesMock[0]]]);

    const result = await salesModels.getById(1);

    expect(result).to.be.deep.equal(salesMock[0])
  })
  it('Testando a busca de um produto pelo id', async function () {
    sinon.stub(connection, 'execute').resolves([[salesMock[0]]]);

    const result = await salesModels.getById(1);

    expect(result).to.be.deep.equal(salesMock[0])
  })
  it('Testando a busca de todos os produtos', async function () {
    sinon.stub(connection, 'execute').resolves([salesMock]);

    const result = await salesModels.getAll();

    expect(result).to.be.deep.equal(salesMock);
  })
})
