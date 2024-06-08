const marvel_hero=["Ironman","Batman","spiderman"]
const dc_hero=["superman","batman"]

// marvel_hero.push(dc_hero)

// console.log(marvel_hero)
// console.log(marvel_hero[3][1])

// const AllHeros=marvel_hero.concat(dc_hero)
// console.log(AllHeros)

// const All_new_hero=[ ...marvel_hero, ...dc_hero] //spread method
// console.log(All_new_hero)


const anotherArray=[1,2,3,[4,6], 5,2, [[4,3],2]]

const another_realArray=anotherArray.flat(Infinity)
console.log(another_realArray)

console.log(Array.isArray("Abhishek"))
console.log(Array.from("Abhishek"))//convert into array
console.log(Array.from ({name:"Abhishek"}))//intreting

const score1=100
const score2=200
const score3=300

console.log(Array.of(score1,score2,score3))
