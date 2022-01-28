const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Food' },
    { name: 'Household Supplies' },
    { name: 'Electronics' },
    { name: 'Books' },
    { name: 'Toys' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Fresh Injera',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'Injera_ethiopian_bread.jpg',
      category: categories[0]._id,
      price: 5.99,
      quantity: 4
    },
    {
      name: 'unroasted coffee',
      description:
        'it is unroaste coffee which is in every house hold and it is very sensitive odor which is attractive when traditinally raosted',
      image: 'ethiopian_coffee.jpg',
      category: categories[0]._id,
      price: 9.99,
      quantity: 1
    },
    {
      name: 'Hand made ceramic Ethiopian-Eritrean coffee Set',
      category: categories[1]._id,
      description:
        'is used to drink coffee traditinally both in ethiopia and eritrea',
      image: 'hand_made_ceramic_ethiopia_eritrian_coffee_set.jpg',
      price:140.89,
      quantity: 41
    },
    {
      name: 'Diana Soap',
      category: categories[1]._id,
      description:
        'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
      image: 'diana_soap.png',
      price: 3.99,
      quantity: 50
    },
    {
      name: 'coffee pot',
      category: categories[1]._id,
      description:
        'used to boill coffee traditinally in ethiopia and eritrea',
      image: 'jebena_coffee_pot.jpg',
      price:51.79,
      quantity: 1
    },
    {
      name: 'Stove',
      category: categories[2]._id,
      description:
        'traditional stove used to roast and boil coffee ethiopia and eritrea',
      image: 'stove_coffee.jpg',
      price: 399.99,
      quantity: 30
    },
    {
      name: 'Digital Mitad',
      category: categories[2]._id,
      description:
        'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
      image: 'WASS-Grill-Digital-Mitad.png',
      price: 150,
      quantity: 1
    },
    {
      name: 'Feker Eske Mekaber',
      category: categories[3]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: 'feker_eske_mekaber.jpg',
      price: 9.99,
      quantity: 1
    },
    {
      name: 'Ethiopia foods book',
      category: categories[3]._id,
      description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: 'ethiopia_foods_book.jpg',
      price: 5.99,
      quantity: 1
    },
    {
      name: 'Set of Plastic Horses',
      category: categories[4]._id,
      description:
        'Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.',
      image: 'horse_set.jpg',
      price: 2.99,
      quantity: 1000
    },
    {
      name: 'Teddy Bear',
      category: categories[4]._id,
      description:
        'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
      image: 'tedy_bear.jpg',
      price: 7.99,
      quantity: 100
    },
    {
      name: 'Alphabet Blocks',
      category: categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: 'alphabet_plastic.jpg',
      price: 9.99,
      quantity: 600
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'tesfu',
    lastName: 'tegenge',
    email: 'tesfu@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'abebe',
    lastName: 'kebede',
    email: 'abebe@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});