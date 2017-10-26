const fs = require('fs');

const faker = require('faker');


// generate dataSet as example
// fs.writeFile(__dirname + '/dataSet.json',  JSON.stringify(faker.helpers.userCard()), function() {
//   console.log("dataSet generated successfully!");
// });
// generate bigDataSet as example
const bigSet = [];

for(let i = 20; i >= 0; i--) {
  let gender = null;
  if (i % 2 === 0) {
    gender = 'male'
  } else {
    gender = 'female'
  }
  bigSet.push({
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    email: faker.internet.email(),
    sex: gender
  });
};


fs.writeFile(__dirname + '/userData.json',  JSON.stringify(bigSet), function() {
  console.log("bigDataSet generated successfully!");
});