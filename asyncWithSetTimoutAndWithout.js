function longOp(ms) {
  var now = Date.now()
  var end = now + ms
  while (now < end) {
    now = Date.now()
  }
}

function dummyOne(ms) {
  longOp(ms)
  console.log("sync exam")
}

function dummyTwo(ms) {
  setTimeout(() => {
  }, ms);
  console.log("async exam")
}

let i = 0;
while (i < 5) {
  dummyOne(500)
  i++
}

let j = 0
while (j < 5) {
  dummyTwo(500)
  j++
}
