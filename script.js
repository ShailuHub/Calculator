const buttons = document.querySelectorAll("button");
let text = document.getElementById("display");
let res = "";

let btnArr = Array.from(buttons);

btnArr.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    if (event.target.innerHTML == "AC") {
      res = "";
      text.value = res;
    } else if (event.target.innerHTML == "DEL") {
      res = res.substring(0, res.length - 1);
      text.value = res;
    } else if (event.target.innerHTML == "=") {
      res = eval(res);
      text.value = res;
    } else {
      res += event.target.innerHTML;
      text.value = res;
    }
  });
});
