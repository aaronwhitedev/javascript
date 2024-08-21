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
	if (!obj[item.auto]) {
		obj[item.auto] = 1
	} else {
		obj[item.auto]++
	}
	return obj
}, {})
console.log(total)
```
