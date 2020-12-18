// Reference: http://www.html5rocks.com/en/tutorials/speed/animations/

window.onload = () => {
  const container = document.querySelector("#container");
  let i = 0,
    html = "";
  while (i < 5) {
    html += `<div class='box'></div>`;
    i++;
  }
  container.innerHTML = html;
};

let last_known_scroll_position = 0;
let ticking = false;

function virtualScroll(scroll_pos) {
  if (scroll_pos > 240) {
    console.log(scroll_pos);
    const container = document.querySelector("#container");
    const children = container.childNodes;
    container.removeChild(children[0]);
    let div = document.createElement("div");
    container.appendChild(div);
  }
}

document.addEventListener("scroll", function (e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function () {
      virtualScroll(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});
