const wrongSaleNotProductIdBody = [{quantity:1}];
const wrongSaleNotQuantityBody = [{productId:1}];
const nonexistentProductIdBody = [{productId:9999,quantity:1}];
const nonexistentProductIdBody2 = [
  {productId:1,quantity:1},
  {productId:99999,quantity:5},
];
const wrongZeroQuantityBody = [{productId:1,quantity: 0}];
const wrongZeroNegativeBody = [{ productId: 1, quantity: -1 }];
const wrongBodyProductId = [{productId:'a',quantity: 0}];
const otherProductIdSaleBody = [
  {productId:1,quantity:1},
  {productId:3,quantity:5},
];
const rightSaleBody = [
  {productId:1,quantity:1},
  {productId:2,quantity:10},
];
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
  wrongSaleNotProductIdBody,
  wrongSaleNotQuantityBody,
  nonexistentProductIdBody,
  nonexistentProductIdBody2,
  wrongZeroQuantityBody,
  wrongZeroNegativeBody,
  otherProductIdSaleBody,
  rightSaleBody,
  saleCreateResponse,
  responseGetByIds1,
  responseGetByIds2,
  responseGetById,
  responseSales,
  responseSalesById,
  responseService,
  responseGetInnerAll,
  wrongBodyProductId,
}
