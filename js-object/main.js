
let brian = {
  name: "Brian",
  age: 30,
  height: "5'/8",
  male: true,
  siblings: []
}

let dad = {
  name: "Craig",
  age: 51,
  height: "5'/6",
  male: true,
  siblings: []
}

let mom = {
  name: "Betty",
  age: 58,
  height: "5'/1",
  male: false,
  siblings: []
}

let tS = {
  name: "Tamarha Southwick",
  age: 36,
  height: "5'/5",
  male: false,
  siblings: [brian]
}

let sA = {
  name: "Seth Adamson",
  age: 34,
  height: "5'/6",
  male: true,
  siblings: [brian, tS]
}
let kP = {
  name: "Kiri Patterson",
  age: 32,
  height: "5'/4",
  male: false,
  siblings: [brian, tS, sA]
}

let hA = {
  name: "Heith Adamson",
  age: 26,
  height: "5'/11",
  male: true,
  siblings: [brian, tS, sA, kP]
}

let eA = {
  name: "Eric Adamson",
  age: 22,
  height: "5'/11",
  male: true,
  siblings: [brian, tS, sA, kP, hA]
}
let sD = {
  name: "Shayla Dillworth",
  age: 20,
  height: "5'/5",
  male: false,
  siblings: [brian, tS, sA, kP, hA, eA]
}

let wife = {
  name: "Shurressa Adamson",
  age: 26,
  height: "5'/6",
  male: false,
  siblings: []
}

brian.siblings.push(tS, sA, kP, hA, eA, sD)
tS.siblings.push(sA, kP, hA, eA, sD)
sA.siblings.push(kP, hA, eA, sD)
kP.siblings.push(hA, eA, sD)
hA.siblings.push(eA, sD)
eA.siblings.push(sD)
let humans = [brian, dad, mom, tS, sA, kP, hA, eA, sD, wife]

let story = `My name is ${humans[0].name} and I am a son of ${humans[1].name} and ${humans[2].name}. I have several siblings including ${humans[3].name}, ${humans[4].name}, ${humans[5].name}, ${humans[6].name}, ${humans[7].name} and ${humans[8].name}. I am married to ${humans[8].name}.  `

console.log(story);


