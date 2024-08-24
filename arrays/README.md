### Add to the beginning of array

```
const data=[{name:"Joe"},{name:"Bill"}]
data.unshift({name:"Bob"})
console.log(data)

// OR

const tempAry = [{name:"Bob"},...data]
```

### Add to the end of an array

```
const data=[{name:"Joe"},{name:"Bill"}]
const tempAry = [...data, {name:"Bob"}]
console.log(newNames)

// OR

const data=[{name:"Joe"},{name:"Bill"}]
data.push({name:"Bob"})
console.log(data)
```

### Return specific properties using map

```
const data=[{name:"Bill",age:40,state:"FL"},{name:"Joe",age:50,state:"PA"}]
const tempAry = data.map(x => ({name:x.name,state:x.state}))
console.log(tempAry)
```

### Return a distinct list of objects without duplicates

```
const list=[{name:"Bill"},{name:"Joe"},{name:"Bill"}]
const distinct=[]
list.map((item) => {
	if (distinct.indexOf(item.name) < 0) distinct.push(item.name)
})
console.log(distinct)
```

### Sort an array

```
const list=[{name:"Bill"},{name:"Bob"},{name:"Joe"}]
list.sort((a, b) => a.name < b.name ? -1 : 0).map((item) => {
	console.log(item.name)
})
```

### Sort an array and return only distinct items

```
const list=[{name:"Bill"},{name:"Joe"},{name:"Bill"},{name:"Bob"}]
const distinct=[]
list.sort((a,b) => a.name < b.name ? -1 : 0).map((item) => {
	if (distinct.indexOf(item.name) < 0) distinct.push(item.name)
})
console.log(distinct)
```

### Merge two arrays and sort

```
const even=[{num:0},{num:2},{num:4},{num:6},{num:8},{num:10}]
const odd=[{num:1},{num:3},{num:5},{num:7},{num:9}]
const result=[...odd,...even].sort((a,b) => {
	if (a.num < b.num) return -1; return 0
})
console.log(result)
```

### Merge two arrays and sort without duplicates

```
const names=[{name:"Bill"},{name:"Joe"},{name:"June"},{name:"April"}]
const months=[{name:"March"},{name:"April"},{name:"May"},{name:"June"}]
const unique=[...names,...months].filter((obj, i, arr) => arr.findIndex(x => JSON.stringify(x) === JSON.stringify(obj)) === i).sort((a,b) => {
	if (a.name < b.name) return -1; return 0
})
console.log(unique)
```

### Shallow copy (using the spead operator)

#### Only goes one layer deep

```
const people=[{name:"Bill",location:{ address: { street: '123 main st'} }},{name:"Joe",location:{ address: { street: '345 main st'}}}]
const persons = [...people]
persons[1].location = { address: { street:'900 block st' }}
console.log(people[1].location)
console.log(persons[1].location)
```

### Deep copy using JSON

Using JSON.parse(JSON.stringify()) messes up dates

### Deep copy using structuredClone

```
const people=[{name:"Bill",location:{ address: { street: '123 main st'} }},{name:"Joe",location:{ address: { street: '345 main st'}}}]
const persons = structuredClone(people)
persons[1].location = { address: { street:'900 block st' }}
console.log(people[1].location)
```

### Sum the numbers

```
const ages=[{num:0},{num:3},{num:4},{num:6},{num:8},{num:10}]
const total=ages.reduce((total,item) => {
	return total + item.num
},0)
console.log(total)
```

### Return a distinct list with a count of occurances

```
const data=[{auto:"car"},{auto:"truck"},{auto:"car"},{auto:"car"},{auto:"van"}]
const total=data.reduce((obj, item) => {
	// If item doesn't exist yet we need to make an entry
	// for that item
	if (!obj[item.auto]) {
		obj[item.auto] = 1
	} else {
		obj[item.auto]++
	}
	return obj
}, {})
console.log(total)

const fruit = [{name:'orange'},{name:'banana'},{name:'orange'},{name:'banana'},{name:'apple'}]
const distinctItems = []
fruit.map((item) => {
	const index = distinctItems.findIndex(x => x.name === item.name)
	if (index !== -1) {
		distinctItems[index].count = distinctItems[index].count+1
	} else {
		distinctItems.push({...item, count: 1 })
	}
})
console.log(distinctItems)


const inventors = [
	{first:'Albert',last:'Einstein',year:1879,passed:1955},
	{first:'Isaac',last:'Newton',year:1643,passed:1727},
	{first:'Galileo',last:'Galilei',year:1564,passed:1642},
	{first:'Marie',last:'Curie',year:1867,passed:1934},
	{first:'Johannes',last:'Kepler',year:1571,passed:1630},
	{first:'Nicolaus',last:'copernicus',year:1473,passed:1543},
	{first:'Max',last:'Planck',year:1858,passed:1847},
]

const totalYears = inventors.reduce((total, inventor) => {
	return total + (inventor.passed - inventor.year)
}, 0)
console.log(totalYears)


const oldest = inventors.sort((a, b) => {
	const lastGuy = a.passed - a.year
	const nextGuy = b.passed - b.year

	return lastGuy > nextGuy ? -1 : 1;
})
console.table(oldest)

const people = ['Beck, Glenn', 'Becker, Carl', 'Black, Elk', 'Blair, Tony']
const alpha = people.sort((lastOne, nextOne) => {
	// const parts = lastOne.split(', ')
	// use destructuring instead
	const [aLast, aFirst] = lastOne.split(', ')
	const [bLast, bFirst] = nextOne.split(', ')
	return aLast > bLast ? -1 : 1
})
console.log(alpha)
```

```
const groupBy = (list, keyGetter) => {
    const map = new Map();
    list.forEach((item) => {
         const key = keyGetter(item);
         const collection = map.get(key);
         if (!collection) {
             map.set(key, [item]);
         } else {
             collection.push(item);
         }
    });
    return map;
}

const pets = [
    {type:"Dog",name:"Spot"},
    {type:"Cat",name:"Tiger"},
    {type:"Dog",name:"Rover"},
    {type:"Cat",name:"Leo"}
];

const grouped = groupBy(pets, pet => pet.type);
console.log(grouped.get("Dog"));
console.log(grouped.get("Cat"));

const odd = Symbol();
const even = Symbol();
const numbers = [1,2,3,4,5,6,7];

const oddEven = groupBy(numbers, x => (x % 2 === 1 ? odd : even));

console.log(oddEven.get(odd)); // -> [1,3,5,7]
console.log(oddEven.get(even)); // -> [2,4,6]
```
