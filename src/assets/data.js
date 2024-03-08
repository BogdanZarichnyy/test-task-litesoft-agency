import image from '../images/image.jpg';

const sample = [
  [ image, 5894684854, 'Power bank (UMB) XO PR156, 30000 mAh, 3USB + Type-C + Lighting, Quick Charge, Power Delivery, 22.5W, Black', 'NY', '56 qty', [ '48 €', '15.45 $' ] ],
  [ image, 5894684854, 'Power bank (UMB) XO PR156, 30000 mAh, 3USB + Type-C + Lighting, Quick Charge, Power Delivery, 22.5W, Black', 'Washington', '56 qty', [ '48 €', '15.45 $' ] ],
  [ image, 5894684854, 'Power bank (UMB) XO PR156, 30000 mAh, 3USB + Type-C + Lighting, Quick Charge, Power Delivery, 22.5W, Black', 'Kyiv', '56 qty', [ '48 €', '15.45 $' ] ],
];

function createData(id, photo, productCode, name, stock, qty, price, addButton, actions) {
  return { id, photo, productCode, name, stock, qty, price, addButton, actions, like: Math.random() >= 0.5 ? true : false };
}
  
export const columns = [
  {
    width: 100,
    label: 'Photo',
    dataKey: 'photo',
  },
  {
    width: 100,
    label: 'Product code',
    dataKey: 'productCode',
  },
  {
    width: 100,
    label: 'Name',
    dataKey: 'name',
  },
  {
    width: 80,
    label: 'Stock',
    dataKey: 'stock',
  },
  {
    width: 80,
    label: 'QTY',
    dataKey: 'qty',
  },
  {
    width: 100,
    label: 'Price',
    dataKey: 'price',
  },
  {
    width: 100,
    label: '',
    dataKey: 'addButton',
  },
  {
    width: 100,
    label: 'Image',
    dataKey: 'actions',
  },
];

export const rows = Array.from({ length: 20 }, (_, index) => {
  const randomSelection = sample[Math.floor(Math.random() * sample.length)];
  return createData(index, ...randomSelection);
});