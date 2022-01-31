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
        'Injera is traditinal food in ethiopia and eritrea and it is the only food tha is used with all kind of food.',
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
        'it is first made using hand then gradually develop into factory which is now has many customers',
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
        'this mahsine like for making just like bread for injera in any place in the world ',
      image: 'WASS-Grill-Digital-Mitad.png',
      price: 150,
      quantity: 1
    },
    {
      name: 'Feker Eske Mekaber',
      category: categories[3]._id,
      description:
        'this about love book in ethiopia',
      image: 'feker_eske_mekaber.jpg',
      price: 9.99,
      quantity: 1
    },
    {
      name: 'Ethiopia foods book',
      category: categories[3]._id,
      description: 'book on traditional food making in ethiopia',
      image: 'ethiopia_foods_book.jpg',
      price: 5.99,
      quantity: 1
    },
    {
      name: 'Set of Plastic Horses',
      category: categories[4]._id,
      description:
        'this a set of horse toy',
      image: 'horse_set.jpg',
      price: 2.99,
      quantity: 1000
    },
    {
      name: 'Teddy Bear',
      category: categories[4]._id,
      description:
        'teddy bear toy',
      image: 'tedy_bear.jpg',
      price: 7.99,
      quantity: 100
    },
    {
      name: 'Alphabet Blocks',
      category: categories[4]._id,
      description:
        ' Alphabet Blocks details',
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
