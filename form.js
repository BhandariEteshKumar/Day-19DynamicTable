function tableadd() {
  let table = document.getElementById("mytable");
  let firstname = document.getElementById("FirstName");
  let lastname = document.getElementById("LastName");
  let Adderess = document.getElementById("Adderess");
  let Pincode = document.getElementById("Pincode");
  let food = document.getElementById("food");
  let State = document.getElementById("state");
  let country = document.getElementById("country");
  let btn = document.getElementById("button");
  let enteredCount = 0;
  firstname.value.length !== 0 ? enteredCount++ : enteredCount;
  lastname.value.length !== 0 ? enteredCount++ : enteredCount;
  Adderess.value.length !== 0 ? enteredCount++ : enteredCount;
  Pincode.value.length !== 0 ? enteredCount++ : enteredCount;
  if (enteredCount < 2) {
    alert("Enter aleast 2 values from FirstName, LastName, Address, Pincode");
    clear();
  } else {
    let row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    cell1.innerHTML = firstname.value;
    cell2.innerHTML = lastname.value;
    cell3.innerHTML = Adderess.value;
    cell4.innerHTML = Pincode.value;
    cell5.innerHTML = document.querySelector(
      'input[name="Gender"]:checked'
    ).value;
    cell6.innerHTML = document.getElementById("food").value;
    cell7.innerHTML = document.getElementById("state").value;
    cell8.innerHTML = document.getElementById("country").value;
    btn.style.background = "green";
    btn.textContent = "Data added to the table";
    console.log(btn);
  }
  setTimeout(function () {
    btn.style.backgroundColor = "blue";
    btn.textContent = "Add data to the table";
    clear();
  }, 1000);
  function clear() {
    firstname.value = "";
    lastname.value = "";
    Pincode.value = "";
    Adderess.value = "";
    food.value = "";
    State.value = "";
    country.value = "";
  }
}
