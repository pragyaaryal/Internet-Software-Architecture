function addToDisplay(value) {
    var display = document.getElementById("display");
    display.value += value;
  }
  
  function clearDisplay() {
    var display = document.getElementById("display");
    var result = document.getElementById("result");
    var error = document.getElementById("error");
    display.value = "";
    result.innerHTML = "";
    error.innerHTML = "";
  }
  
  function calculate() {
    var display = document.getElementById("display");
    var result = document.getElementById("result");
    var error = document.getElementById("error");
  
    try {
      var expr = display.value.trim();
      if (expr === "") {
        throw new Error("Enter an expression");
      }
      var ans = eval(expr);
      if (isNaN(ans)) {
        throw new Error("Invalid expression");
      }
      display.value = ans;
      result.innerHTML = "";
      error.innerHTML = "";
    } catch (err) {
      error.innerHTML = err.message;
      result.innerHTML = "";
      display.value = "";
    }
  }
  