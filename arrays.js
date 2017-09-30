var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  var newarray = array.slice(0)
  newarray.unshift(element)
//  console.log("newarray " + newarray)
//  console.log("original " + array)
  return newarray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  var arrayLength = array.length
//  console.log(arrayLength)
  var newarray = array.slice(0, arrayLength)
  newarray.push(element)
  return newarray
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.shift()
}
