function isLanguageDiverse(developers) {
  let pythonCount = 0;
  let rubyCount = 0;
  let jsCount = 0;

  developers.forEach((dev) => {
    if (dev.language === "Python") pythonCount++;
    else if (dev.language === "Ruby") rubyCount++;
    else if (dev.language === "JavaScript") jsCount++;
  });

  let counts = { Python: pythonCount, Ruby: rubyCount, JavaScript: jsCount };

  return (
    counts.Python <= 2 * counts.Ruby &&
    counts.Python <= 2 * counts.JavaScript &&
    counts.Ruby <= 2 * counts.Python &&
    counts.Ruby <= 2 * counts.JavaScript &&
    counts.JavaScript <= 2 * counts.Python &&
    counts.JavaScript <= 2 * counts.Ruby
  );
}

var list1 = [
  {
    firstName: "Daniel",
    lastName: "J.",
    country: "Aruba",
    continent: "Americas",
    age: 42,
    language: "Python",
  },
  {
    firstName: "Kseniya",
    lastName: "T.",
    country: "Belarus",
    continent: "Europe",
    age: 22,
    language: "Ruby",
  },
  {
    firstName: "Sou",
    lastName: "B.",
    country: "Japan",
    continent: "Asia",
    age: 43,
    language: "Ruby",
  },
  {
    firstName: "Hanna",
    lastName: "L.",
    country: "Hungary",
    continent: "Europe",
    age: 95,
    language: "JavaScript",
  },
  {
    firstName: "Jayden",
    lastName: "P.",
    country: "Jamaica",
    continent: "Americas",
    age: 18,
    language: "JavaScript",
  },
  {
    firstName: "Joao",
    lastName: "D.",
    country: "Portugal",
    continent: "Europe",
    age: 25,
    language: "JavaScript",
  },
];

var result = isLanguageDiverse(list1);
console.log(result);

//////////////////////////////////////////////
//TASK 2
////////////////////////////////////////////////////
function averageAge(developers) {
  let totalAge = developers.reduce((sum, dev) => sum + dev.age, 0);
  let average = totalAge / developers.length;
  return Math.round(average);
}

var list1 = [
  {
    firstName: "Maria",
    lastName: "Y.",
    country: "Cyprus",
    continent: "Europe",
    age: 30,
    language: "Java",
  },
  {
    firstName: "Victoria",
    lastName: "T.",
    country: "Puerto Rico",
    continent: "Americas",
    age: 70,
    language: "Python",
  },
];

var result = averageAge(list1);
console.log(result);
///////////////////////////////////////
//TASK_3
//////////////////////////
function areContinentsRepresented(developers) {
  const requiredContinents = new Set([
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
  ]);
  const representedContinents = new Set();

  developers.forEach((dev) => {
    representedContinents.add(dev.continent);
  });

  for (const continent of requiredContinents) {
    if (!representedContinents.has(continent)) {
      return false;
      g;
    }
  }

  return true;
}

var list1 = [
  {
    firstName: "Fatima",
    lastName: "A.",
    country: "Algeria",
    continent: "Africa",
    age: 25,
    language: "JavaScript",
  },
  {
    firstName: "Agustín",
    lastName: "M.",
    country: "Chile",
    continent: "Americas",
    age: 37,
    language: "C",
  },
  {
    firstName: "Jing",
    lastName: "X.",
    country: "China",
    continent: "Asia",
    age: 39,
    language: "Ruby",
  },
  {
    firstName: "Laia",
    lastName: "P.",
    country: "Andorra",
    continent: "Europe",
    age: 55,
    language: "Ruby",
  },
  {
    firstName: "Oliver",
    lastName: "Q.",
    country: "Australia",
    continent: "Oceania",
    age: 65,
    language: "PHP",
  },
];

var result = areContinentsRepresented(list1);
console.log(result);
///////////////////////////////////////////////////////
///TASK_4
/////////////////////////////////////////
function allCodeInSameLanguage(developers) {
  if (developers.length === 0) return true;
  const firstLanguage = developers[0].language;

  return developers.every((dev) => dev.language === firstLanguage);
}

var list1 = [
  {
    firstName: "Daniel",
    lastName: "J.",
    country: "Aruba",
    continent: "Americas",
    age: 42,
    language: "JavaScript",
  },
  {
    firstName: "Kseniya",
    lastName: "T.",
    country: "Belarus",
    continent: "Europe",
    age: 22,
    language: "JavaScript",
  },
  {
    firstName: "Hanna",
    lastName: "L.",
    country: "Hungary",
    continent: "Europe",
    age: 65,
    language: "JavaScript",
  },
];

var result = allCodeInSameLanguage(list1);
console.log(result);
