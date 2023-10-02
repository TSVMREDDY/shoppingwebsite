import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  expiryDate: Date;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getProducts(): Product[] {
    return [
      {
        id: 1,
        name: 'Rice',
        price: 2.65,
        image:
          'https://5.imimg.com/data5/SELLER/Default/2021/9/DH/ED/YI/20704244/1-kg-rice-packaging-pouch.jpeg',
        expiryDate: new Date(2023, 8, 28),
      },
      {
        id: 2,
        name: 'Sugar',
        price: 0.6,
        image:
          'https://5.imimg.com/data5/SP/UH/XY/SELLER-85092171/icing-sugar.jpg',
        expiryDate: new Date(2023, 8, 28),
      },
      {
        id: 3,
        name: 'Wheat Atta',
        price: 0.84,
        image:
          'https://5.imimg.com/data5/SELLER/Default/2020/9/FI/MZ/XI/10118072/1-kg-aashirvaad-wheat-atta.jpg',
        expiryDate: new Date(2023, 8, 28),
      },

      {
        id: 4,
        name: 'Onions',
        price: 0.78,
        image: 'https://vkshop.in/wp-content/uploads/2020/07/Fresh-Onion.jpg',
        expiryDate: new Date(2023, 8, 28),
      },
      {
        id: 5,
        name: 'Paneer',
        price: 5,
        image:
          'https://www.bigbasket.com/media/uploads/p/l/214022_2-heritage-paneer.jpg',
        expiryDate: new Date(2023, 8, 29),
      },
      {
        id: 6,
        name: 'Grapes',
        price: 2.53,
        image:
          'https://www.shoprite.co.za/medias/10148803EA-20190726-Media-checkers300Wx300H?context=bWFzdGVyfGltYWdlc3w5OTk5NXxpbWFnZS9wbmd8aW1hZ2VzL2gzZC9oZTgvODg1NzY0NTI4NTQwNi5wbmd8M2M2NjYyODdkOWY4ZGVmNTBiYThhODU2ZGI0NmZhM2YzNTM0OThlOWQzNWJkMmE1MjUwOTM4N2VkNWY1NmY1NA',
        expiryDate: new Date(2023, 8, 30),
      },
      {
        id: 7,
        name: 'Chicken and Mutton',
        price: 10,
        image:
          'https://i0.wp.com/freshprotino.com/wp-content/uploads/2021/06/Combo-1.jpg?fit=400%2C515&ssl=1',
        expiryDate: new Date(2023, 9, 1),
      },
      {
        id: 8,
        name: 'Thums Up',
        price: 0.72,
        image:
          'https://5.imimg.com/data5/SELLER/Default/2023/3/296244606/ON/GJ/XV/130701409/1l-thums-up-carbonated-drinks.jpg',
        expiryDate: new Date(2023, 9, 2),
      },
      {
        id: 9,
        name: 'Anjeer',
        price: 1.2,
        image: 'https://m.media-amazon.com/images/I/61zCWZ3av9L.jpg',
        expiryDate: new Date(2023, 9, 3),
      },
      {
        id: 10,
        name: 'Kismis ',
        price: 1.5,
        image:
          'https://5.imimg.com/data5/SELLER/Default/2023/6/317450571/HA/BD/CW/27015350/img-20230617-wa0015-1-.jpg',
        expiryDate: new Date(2023, 9, 4),
      },
      {
        id: 11,
        name: 'Soft Drink',
        price: 0.75,
        image:
          'https://5.imimg.com/data5/SELLER/Default/2023/5/306591068/KX/PV/HE/101915868/2-25-litre-fanta-orange-flavour-carbonated-drinks.png',
        expiryDate: new Date(2023, 9, 5),
      },
      {
        id: 12,
        name: 'Kimia Dried Dates',
        price: 2,
        image: 'https://m.media-amazon.com/images/I/71MH2q5Pf-L._AC_SS300_.jpg',
        expiryDate: new Date(2023, 9, 6),
      },
      {
        id: 10,
        name: 'Kissan Jam',
        price: 1.7,
        image:
          'https://rukminim1.flixcart.com/image/850/1000/kae95e80/jam-spread/z/h/r/1-jam-jar-mixed-fruit-jam-kissan-original-imafrz64c8ktxgzb.jpeg?q=20',
        expiryDate: new Date(2023, 9, 7),
      },
    ];
  }
}
