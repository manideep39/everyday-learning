/* Testing crackPin function:
assume the correct password is "182909".
We know that password should be of length 6 and takes alphanumeric (0-9 & a-d)
*/

const correctPin = "182909";
crackPin(6, "0123456789abcd");

function crackPin(passLength, allowedChar) {
  let pinCracked = false;
  findPin([]);

  if (pinCracked) {
    console.log("password cracked");
  } else {
    console.log("couldn't crack");
  }

  function findPin(pin) {
    if (pinCracked) {
      return;
    }
    if (pin.length === passLength) {
      console.log(pin.join(""));
      if (correctPin === pin.join("")) {
        pinCracked = true;
      }
      return;
    }
    for (let i = 0; i < allowedChar.length; i++) {
      pin.push(allowedChar[i]);
      findPin(pin);
      pin.pop();
    }
  }
}
