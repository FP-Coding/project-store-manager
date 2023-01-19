const { expect } = require('chai');
const sinon = require('sinon');
const camelize = require('camelize')

const { salesProductsMock, inputSales, innerGetAllMock } = require('./mocks/salesProductsModels.mock')
const { salesProductsModels } = require('../../../src/models');
const connection = require('../../../src/models/connection');

describe('Testando salesProductsModels', function () {
  afterEach(() => {
    sinon.restore();
  })
  it('Testando busca de todas as vendas', async function () {
    sinon.stub(connection, 'execute').resolves([salesProductsMock])

    const result = await salesProductsModels.getAll();

    expect(result).to.be.deep.equal(salesProductsMock)
  })
  it('Testando se criação de uma sale acontece corretamente', async function () {
    sinon.stub(connection, 'execute').onFirstCall().resolves([{ insertId: 3 }])
      .onSecondCall().resolves([{ insertId: 1 }])
      .onThirdCall().resolves([{ insertId: 2 }])

    const result = await salesProductsModels.create(inputSales);

    expect(result).to.be.deep.equal(3)
  })
  it('Testando se a listagem da sale pelo id acontece corretamente', async function () {
    sinon.stub(connection, 'execute').resolves([salesProductsMock[0]])

    const result = await salesProductsModels.getById(1);

    expect(result).to.be.deep.equal(salesProductsMock[0])
  })
  it('Testando se a listagem da sale pelo id acontece corretamente', async function () {
    sinon.stub(connection, 'execute').resolves([innerGetAllMock])

    const result = await salesProductsModels.innerGetAll();

    expect(result).to.be.deep.equal(camelize(innerGetAllMock))
  })
  it('Testando se a listagem da sale pelo id acontece corretamente', async function () {
    sinon.stub(connection, 'execute').onFirstCall().resolves([{ affectedRows: 1 }]).onSecondCall().resolves([{ affectedRows: 1 }])

    const result = await salesProductsModels.update({ id: 1, sales: inputSales });

    expect(result).to.be.equal(true)
  })
})
