const temp = [12, 15, 14, 20, 22, 30];

let lowestTemp = temp[temp.length - 1];
let highestTemp = temp[0];

for (let i = 0; i < temp.length; i++) {
  if (temp[i] > highestTemp) {
    highestTemp = temp[i];
  }
}
console.log("Temperaturata vo najtopliot den e: " + highestTemp);

for (let i = 0; i < temp.length; i++) {
  if (temp[i] < lowestTemp) {
    lowestTemp = temp[i];
  }
}
console.log("Temperaturata vo najladniot den e: " + lowestTemp);
