// Creating and using a promise step by step.

const isMomHappy = true;

// creating promise
const willGetNewComputer = new Promise(
  (resolve, reject) => {
    if (isMomHappy) {
      resolve("mommy bought me a new computer!");
    } else {
      const reason = new Error('mom is not happy');
      reject(reason)
    }
  }
);

// Using promise
willGetNewComputer.then((momsAnswer) => {
  console.log(momsAnswer)
}).catch((momsAnswer) => {
  console.log(momsAnswer)
})

console.log("this executes before promise")

logHello = async () => {
  await willGetNewComputer.then((momsAnswer) => {
    console.log(momsAnswer)
  }).catch((momsAnswer) => {
    console.log(momsAnswer)
  })
  console.log("this executes after promise")
}

logHello();