// import data.json file in js file
// import jsonData from './' assert { type: 'json' };
// const userData = jsonData;
// console.log(userData);
async function getData() {
  try {
    const response = await fetch('./data.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
const userData = await getData();
console.log(userData);
