const { expect } = require('chai')
const sinon = require('sinon')

const { salesModels } = require('../../../src/models')
const { salesServices } = require('../../../src/services');

const { responseSales } = require('./mocks/salesProducts.mock')

describe('Testando service de Products', function () {
  afterEach(() => {
    sinon.restore();
  })
  it('Testando deleção de uma sales passando um id inválido', async function () {
    const result = await salesServices.deleteSale('a');

    expect(result.type).to.be.equal('INVALID_VALUE');
    expect(result.message).to.be.equal('"id" must be a number')
  })

  it('Testando deleção de uma sales passando um id de uma sale que não existe', async function () {
    sinon.stub(salesModels, 'getById').resolves(undefined);

    const result = await salesServices.deleteSale(999);

    expect(result.type).to.be.equal('SALE_NOT_FOUND');
    expect(result.message).to.be.equal('Sale not found')
  })

  it('Testando que a deleção acontece com sucesso',async function () {
    sinon.stub(salesModels, 'getById').resolves(responseSales);
    sinon.stub(salesModels, 'deleteSale').resolves(1);

    const result = await salesServices.deleteSale(1);

    expect(result.type).to.be.equal(null);
    expect(result.message).to.be.equal('')
  })
})
