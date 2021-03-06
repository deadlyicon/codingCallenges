/*
Given an input string, return an array of substrings that are each less than
  or equal to 140 characters, including a count of the string’s position out
  of total (like in a text message showing (1 of 3) messages the substring
  cannot break up any words so must be split on a space or delimiter
*/

(() => {
  let input = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae nobis nam perferendis sint beatae, dignissimos ab inventore adipisci. Odio placeat quisquam impedit esse, quia optio repudiandae voluptate odit nisi, perferendis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, voluptatum nobis dicta dignissimos rerum accusantium, ad hic fugiat obcaecati magni iusto alias laudantium. Magni, labore, culpa. Provident nam consectetur blanditiis.'

  const createSubstrings = (inputString) => {
    let largeString = inputString.split('')
    let subStrings = []
    let stringCounter = 0
    let stringLoops = true
    let startSlice = 0

    while(stringLoops) {
      let currentString = largeString.slice(startSlice)

      for(let i = 0; i < currentString.length; i++){
        if (i % 140 === 0 ) {
          subStrings[stringCounter] = currentString.slice(startSlice, i).join('')
          startSlice = i
          stringCounter++
        }

        if (currentString.slice(startSlice).length < 140) {
          subStrings[stringCounter] = currentString.slice(startSlice).join('')
          stringLoops = false
          break
        }
      }
    }

    return subStrings
  }

  let result =  createSubstrings(input)

  for (var i = 0; i <= result.length; i++) {
    console.log(`Substring ${i} is: \n ${result[i]}`)
  }

})()

/*
Output:





Message 1 of X: (0-137)
 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae nobis nam perferendis sint beatae, dignissimos ab inventore adipisci. Odio

Message 2 of X: (138-277)
  placeat quisquam impedit esse, quia optio repudiandae voluptate odit nisi, perferendis! Lorem ipsum dolor sit amet, consectetur adipisicing

Message 3 of X: (278-412)
  elit. Sint, voluptatum nobis dicta dignissimos rerum accusantium, ad hic fugiat obcaecati magni iusto alias laudantium. Magni, labore,

Message $ of X: (412)
  culpa. Provident nam consectetur blanditiis.
*/