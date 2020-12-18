

// Throttling executes a given function after a specified amount of time has elapsed. This limits the number of times a function is called, this is reasonable when the repeated function calls won’t reset any data.

// A debounce is a cousin of the throttle, and they both improve the performance of web applications. However, they are used in different cases. 

// A debounce is utilized when you only care about the final state. For example, waiting until a user stops typing to fetch typeahead search results. A throttle is best used when you want to handle all intermediate states but at a controlled rate. For example, track the screen width as a user resizes the window and rearrange page content while it changes instead of waiting until the user has finished.

// My NOTES: With respect to below examples.
// On calling the outer function once, it forms a closure of the variable and the functions defined inside it. On calling the inner function for the first time it updates timer variable and calling inner funtion again and again, it just clear the timer which is stored and creates timer again. 

function justLogHello(str) {
  console.log(str)
}

function debounce (time, fn) {
  let timer;
  return function (str) {
    clearInterval(timer)
    const later = () => {
      fn(str)
    }
    timer = setTimeout(later, time)
  }
}

let de = debounce(500, justLogHello)

let i = 0;
while (i < 5) {
  console.log(i)
  de("hello")
  i++
}

