const wrongSaleNotProductIdBody = [{quantity:1}];
const wrongSaleNotQuantityBody = [{productId:1}];
const nonexistentProductIdBody2 = [
  {productId:1,quantity:1},
  {productId:99999,quantity:5},
];
const wrongZeroQuantityBody = [{productId:1,quantity: 0}];
const wrongZeroNegativeBody = [{ productId: 1, quantity: -1 }];
const rightSaleBody = [
  {productId:1,quantity:1},
  {productId:3,quantity:5},
];

const responseCreate = {
  id: 1,
  itemsSold: [
    {
      productId: 1,
      quantity: 1
    },
    {
      productId: 3,
      quantity: 5
    }
  ]
}

const responseGetById = [
  {
    date: "2023-01-17T16:01:18.000Z",
    productId: 1,
    quantity: 5
  },
  {
    date: "2023-01-17T16:01:18.000Z",
    productId: 2,
    quantity: 10
  }
]

const responseInnerGetAll = [
  {
    saleId: 1,
    date: "2023-01-17T16:01:18.000Z",
    productId: 1,
    quantity: 5
  },
  {
    saleId: 1,
    date: "2023-01-17T16:01:18.000Z",
    productId: 2,
    quantity: 10
  },
  {
    saleId: 2,
    date: "2023-01-17T16:01:18.000Z",
    productId: 3,
    quantity: 15
  },
  {
    saleId: 3,
    date: "2023-01-17T17:13:04.000Z",
    productId: 1,
    quantity: 1
  },
  {
    saleId: 3,
    date: "2023-01-17T17:13:04.000Z",
    productId: 3,
    quantity: 5
  }
]

module.exports = {
  wrongSaleNotProductIdBody,
  wrongSaleNotQuantityBody,
  nonexistentProductIdBody2,
  wrongZeroNegativeBody,
  wrongZeroQuantityBody,
  rightSaleBody,
  responseCreate,
  responseGetById,
  responseInnerGetAll
}
