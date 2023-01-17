const salesProductsMock = [
  {
    sale_id: 1,
    product_id: 2,
    quantity: 10
  },
  {
    sale_id: 2,
    product_id: 3,
    quantity: 15
  }
];

const inputSales = [
  {
    "productId": 1,
    "quantity": 1
  },
  {
    "productId": 2,
    "quantity": 5
  }
];

const innerGetAllMock = [
  {
    sale_id: 1,
    date: '2023-01-16 20:16:04',
    product_id: 2,
    quantity: 10
  },
  {
    sale_id: 2,
    date: '2023-01-16 20:16:04',
    product_id: 3,
    quantity: 15
  },
]


module.exports = {
  salesProductsMock,
  inputSales,
  innerGetAllMock
}
