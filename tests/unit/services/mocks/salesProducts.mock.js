const nonexistentProductIdBody = [{productId:9999,quantity:1}];

const rightSaleBody = [
  {productId:1,quantity:1},
  {productId:2,quantity:10},
];
const wrongBodyProductId = [{productId:'a',quantity: 0}];

const saleCreateResponse = {
  id: 1,
  itemsSold: [
    {productId:1,quantity:1},
    {productId:2,quantity:10},
  ]
}

const responseGetByIds1 = [
  {
    id: '1',
    name: 'Mjonir',
  },
  {
    id: '2',
    name: 'Traje de encolhimento',
  }
];

const responseGetByIds2 = [
  {
    id: '1',
    name: 'Mjonir',
  }
];

const responseGetById = [
  {
    sale_id: 1,
    product_id: 1,
    quantity: 5
  },
  {
    sale_id: 1,
    product_id: 2,
    quantity: 10
  }
]

const responseSales = { id: 1, date: '2023-01-17T12:42:24.000Z' };

const responseSalesById = [
  { sale_id: 1, product_id: 1, quantity: 5 },
  { sale_id: 1, product_id: 2, quantity: 10 }
]

const responseService = [
  {
    date: "2023-01-17T12:42:24.000Z",
    productId: 1,
    quantity: 5
  },
  {
    date: "2023-01-17T12:42:24.000Z",
    productId: 2,
    quantity: 10
  }
]

const responseGetInnerAll = [
  {
    saleId: 1,
    date: '2023-01-17T12:42:24.000Z',
    productId: 1,
    quantity: 5
  },
  {
    saleId: 1,
    date: '2023-01-17T12:42:24.000Z',
    productId: 2,
    quantity: 10
  },
  {
    saleId: 2,
    date: '2023-01-17T12:42:24.000Z',
    productId: 3,
    quantity: 15
  },
  {
    saleId: 3,
    date: '2023-01-17T14:37:26.000Z',
    productId: 1,
    quantity: 1
  },
  {
    saleId: 3,
    date: '2023-01-17T14:37:26.000Z',
    productId: 2,
    quantity: 10
  }
]

module.exports = {
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
}
