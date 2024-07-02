const elInput = document.querySelector("#input");
const elBtn0 = document.querySelector("#but0");
const elBtn1 = document.querySelector("#but1");
const elBtn2 = document.querySelector("#but2");
const elBtn3 = document.querySelector("#but3");
const elBtn4 = document.querySelector("#but4");
const elBtn5 = document.querySelector("#but5");
const elBtn6 = document.querySelector("#but6");
const elBtn7 = document.querySelector("#but7");
const elBtn8 = document.querySelector("#but8");
const elBtn9 = document.querySelector("#but9");
const elBorder = document.querySelector("#top-all-left");
const elBorder2 = document.querySelector("#top-all-right");
const but = document.querySelector("#dark");

elBtn0.addEventListener("click", function () {
  const value = 0;

  if (Number(elInput.value) < 10) {
    elInput.value = elInput.value + value;
  }
});
// elBtn1
elBtn1.addEventListener("click", function () {
  const value = 1;
  elInput.className = "border__inp";

  if (Number(elInput.value) < 10) {
    elInput.value = elInput.value + value;
    elBorder.className = "top-all-left-border";
  }
  if (Number(elInput.value) >= 10) {
    elBorder2.className = "top-all-left-border2";
    elBorder.className = "top-all-left-border-0";
  }
});
// elBtn2
elBtn2.addEventListener("click", function () {
  const value = 2;

  if (Number(elInput.value) < 10) {
    elInput.value = elInput.value + value;
    elBorder.className = "top-all-left-border";
  }
  if (Number(elInput.value) >= 10) {
    elBorder2.className = "top-all-left-border2";
    elBorder.className = "top-all-left-border-0";
  }
});
// elBtn3
elBtn3.addEventListener("click", function () {
  const value = 3;

  if (Number(elInput.value) < 10) {
    elInput.value = elInput.value + value;
    elBorder.className = "top-all-left-border";
  }
  if (Number(elInput.value) >= 10) {
    elBorder2.className = "top-all-left-border2";
    elBorder.className = "top-all-left-border-0";
  }
});
// elBtn4
elBtn4.addEventListener("click", function () {
  const value = 4;

  if (Number(elInput.value) < 10) {
    elInput.value = elInput.value + value;
    elBorder.className = "top-all-left-border";
  }
  if (Number(elInput.value) >= 10) {
    elBorder2.className = "top-all-left-border2";
    elBorder.className = "top-all-left-border-0";
  }
});
// elBtn5
elBtn5.addEventListener("click", function () {
  const value = 5;

  if (Number(elInput.value) < 10) {
    elInput.value = elInput.value + value;
    elBorder.className = "top-all-left-border";
  }
  if (Number(elInput.value) >= 10) {
    elBorder2.className = "top-all-left-border2";
    elBorder.className = "top-all-left-border-0";
  }
});
// elBtn6
elBtn6.addEventListener("click", function () {
  const value = 6;

  if (Number(elInput.value) < 10) {
    elInput.value = elInput.value + value;
    elBorder.className = "top-all-left-border";
  }
  if (Number(elInput.value) >= 10) {
    elBorder2.className = "top-all-left-border2";
    elBorder.className = "top-all-left-border-0";
  }
});
// elBtn7
elBtn7.addEventListener("click", function () {
  const value = 7;

  if (Number(elInput.value) < 10) {
    elInput.value = elInput.value + value;
    elBorder.className = "top-all-left-border";
  }
  if (Number(elInput.value) >= 10) {
    elBorder2.className = "top-all-left-border2";
    elBorder.className = "top-all-left-border-0";
  }
});
// elBtn8
elBtn8.addEventListener("click", function () {
  const value = 8;

  if (Number(elInput.value) < 10) {
    elInput.value = elInput.value + value;
    elBorder.className = "top-all-left-border";
  }
  if (Number(elInput.value) >= 10) {
    elBorder2.className = "top-all-left-border2";
    elBorder.className = "top-all-left-border-0";
  }
});
// elBtn9
elBtn9.addEventListener("click", function () {
  const value = 9;

  if (Number(elInput.value) < 10) {
    elInput.value = elInput.value + value;
    elBorder.className = "top-all-left-border";
  }
  if (Number(elInput.value) >= 10) {
    elBorder2.className = "top-all-left-border2";
    elBorder.className = "top-all-left-border-0";
  }
});
but.addEventListener("click", () => {
  // document.body.classList.add("tun");
  // document.body.classList.remove("tun");
  if (but.textContent == "Tun") {
    but.textContent = "Tun";
  } else {
    but.textContent = "Kun ☀";
  }

  document.body.classList.toggle("tun");
});
