// Do not edit the variables below directly
const cities = ['London', 'Shanghai', 'New York', 'Delhi', 'Kuala Lumpur']
const names = []
const numbers = [1, 2, 3]
const colours = ['Red', 'Blue', 'Yellow']
const keys = ['q', 'w', 'e', 'r', 't', 'y']
const countries = ['Bolivia', 'Jordan', 'Greenland']
const fruits = ['Apple', 'Orange', 'Pear']

// 1. Add Fred to the names array
const addingName = names.push('Fred')
console.log(addingName)

// 2. Add 4 to the end of the numbers array
const addNumber = numbers.push(4)
console.log(addNumber)
// 3. Add Rio to the start of the cities array
const addingNewCity = cities.unshift('Rio')
console.log(addingNewCity)
// 4. Remove the first colour from the colours array
const RemoveColour = colours.shift('Red')
console.log(RemoveColour)
// 5. Remove the last item from the keys array
const removeKey = keys.pop()
console.log(removeKey)
// 6. Remove Jordan from the countries array
const Index = countries.indexOf('Jordan')
countries.splice(Index, 1)
console.log(Index)

// 7. Remove the last fruit from the fruits array and store it in pear below
const pear = fruits.pop()
console.log(pear)
console.log('Hello,everyone')

// Do not change the code below
module.exports = {
  a: names,
  b: numbers,
  c: cities,
  d: colours,
  e: keys,
  f: countries,
  g: fruits,
  h: pear
}
