function analyzeArray(array) {
  if (!array) return console.log('Give me something to work on.');
  const analyzed = {};

  const sum = array.reduce((acc, curr) => acc + curr);

  analyzed.average = sum / array.length;
  analyzed.min = array.reduce((acc, curr) => Math.min(acc, curr));
  analyzed.max = array.reduce((acc, curr) => Math.max(acc, curr));
  analyzed.length = array.length;

  return analyzed;
}

export default analyzeArray;
