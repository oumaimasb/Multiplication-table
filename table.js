function createTable() {
  let inputValue = document.getElementById("input").value;
  let table = document.getElementById("table");
  let reset = document.getElementById("reset");
  let inputText = document.getElementById("input");

  if (inputValue <= 0 || inputValue > 1000) {
    alert("Not allowed to put this number (between 1 and 1000)");
    inputText.value = " ";
  } else {
    table.innerText = " ";
    table.style.display = "block";
    for (var i = 0; i <= 10; i++) {
      let result = `${inputValue} x ${i} = ${inputValue * i} <hr>`;
      table.innerHTML += result;
    }
    inputText.value = " ";
    reset.style.display = "block";
  }
}

function resetTable() {
  let table = document.getElementById("table");
  let reset = document.getElementById("reset");

  table.style.display = "none";
  //   reset.style.display = "none";
}
