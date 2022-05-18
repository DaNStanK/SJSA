// 1. Da se napise funkcija koja kako parametar kje prima ime i prezime i kje gi ispecati inicijalite. Treba da raboti za povekje od edno prezime.Primer: George Raymond Richard Martin -> GRRM

const namesSurnamesList = [
  "steFaNi",
  "ojle dojle",
  "damjan",
  "Dikembe Mutombo Mpolondo mukamba jean-Jacques wamutombo",
];

function namesWithInitials(names) {
  const modifiedNames = [];

  for (let name of names) {
    name = name.toUpperCase().split(" ");

    const nameArray = name.map((shortenNS) =>
      shortenNS.replace(shortenNS, shortenNS.charAt(0).split(" ").join(""))
    );

    name = nameArray.join(" ");
    modifiedNames.push(name);
  }

  console.log(modifiedNames);
}

namesWithInitials(namesSurnamesList);

// 2.  Da se napise funkcija koja kje ja presmeta razlikata vo godini pomegju najstariot i najmladiot clen vo edna familija i da se ispecati razlikata, zaedno so najmalata i najgolemata vozrast. Clenovite se objekti so dve properties- name & age.

const nameYear = [
  {
    name: "John",
    age: 13,
  },
  {
    name: "Marki",
    age: 56,
  },
  {
    name: "Rachel",
    age: 45,
  },
  {
    name: "Nate",
    age: 67,
  },
  {
    name: "Jeniffer",
    age: 65,
  },
];

let minMaxDifference = (value) => {
  let ageValue = value.map((x) => x.age);

  let minMaxDiff = [
    Math.min(...ageValue),
    Math.max(...ageValue),
    Math.max(...ageValue) - Math.min(...ageValue),
  ];

  console.log(minMaxDiff);
};

minMaxDifference(nameYear);

// 3. Da se napise funkcija koja ke presmeta faktoriel od nekoj priroden broj. Primer: 5! = 5*4*3*2*1
let number = 5;

let factoring = (value) => {
  let factoringOfNumber = 1;

  for (let i = value; i > 0; i--) {
    factoringOfNumber *= i;
  }

  console.log(`The factoring number of ${number} is ${factoringOfNumber}`);
};

factoring(number);

// 4. Da se napise funkcija koja kako parametar prima niza od nizi, i ke ispecati kolku e dolzinata na sekoja od pod-nizite.

const charArray = [
  ["a", "b", "c"],
  ["c", "d", "f", "m"],
  ["d", "f", "g", "h", "n"],
];

let stringLenght = (value) => {
  let arrayNumber = value.map((x) => x.length);

  console.log(arrayNumber);
};

stringLenght(charArray);
