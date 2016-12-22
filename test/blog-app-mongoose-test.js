const chai = require('chai');
const chaiHttp = require('chai-http');
const faker = require('faker');
const mongoose = require('mongoose');



const should = chai.should();

const {BlogPost} = require ('../models');
const {app, runServer, closeServer} = require('../server');


chai.use(chaiHttp);




// our data seeding function - step 1 of 4?

function seedBlogPostData() {
  console.info('seeding blog post data');
  const seedData = [];

  for (let i=1; i<=10; i++) {
    seedData.push(generateBlogPostData());
  }
  // return a seeding promise
  return BlogPost.insertMany(seedData);
}

function generateBlogPostData() {
  return {
    title: faker.company.catchPhrase(),
    author: {firstName: faker.name.firstName(),
             lastName: faker.name.lastName()},
    content: faker.lorem.paragraphs()
  }
}


// {
// "title": "20 things -- you won't believe #4",
// "author": {"firstName": "Tabernacle", "lastName": "Jeff"},
// "content": "Lorem ....."
// }

//faker.company.catchPhrase
