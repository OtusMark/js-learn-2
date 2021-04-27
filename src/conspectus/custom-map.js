// Custom map function
const array = [1, 25, 55, 77, -5, 108];

Array.prototype.myMap = function (callback) {
  const result = [];
  const thisArray = this;
  for (let i = 0; i < thisArray.length; i++) {
    result.push(callback(thisArray[i], i, thisArray));
  }
  return result;
};

const result = array.myMap((el, index, arr) => {
  return el.toString();
});

console.log(result);