// Throttling executes a given function after a specified amount of time has elapsed. This limits the number of times a function is called, this is reasonable when the repeated function calls won’t reset any data.

// A debounce is a cousin of the throttle, and they both improve the performance of web applications. However, they are used in different cases.

// A debounce is utilized when you only care about the final state. For example, waiting until a user stops typing to fetch typeahead search results. A throttle is best used when you want to handle all intermediate states but at a controlled rate. For example, track the screen width as a user resizes the window and rearrange page content while it changes instead of waiting until the user has finished.

function justLogHello() {
    console.log("hello");
}

let timer;

function throttle(fn, delay) {
    // If setTimeout is already scheduled, no need to do anything
    if (timer) return;
    timer = setTimeout(() => {
        fn();
        // Once setTimeout function execution is finished, timerId = undefined so that in <br>
		    // the next scroll event function execution can be scheduled by the setTimeout
        timer = undefined;
    }, delay);
}

window.addEventListener("scroll", () => {
    throttle(justLogHello, 1000);
});
