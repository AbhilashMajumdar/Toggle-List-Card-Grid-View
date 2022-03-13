var list = document.getElementById("list-view");
var grid = document.getElementById("grid-view");


// displayList function 
function displayList() {
  grid.style.visibility = "hidden";
  list.style.visibility = "visible";
}


// displayGrid function 
function displayGrid() {
  list.style.visibility = "hidden";
  grid.style.visibility = "visible";
}

var idv = "";
var namev = "";
var skillsv = "";
var projectv = "";
var hcmv = "";

// onEdit function 
function onEdit(n) {
  var edit = document.getElementById("edit" + n);
  var save = document.getElementById("save" + n);

  console.log(edit);
  console.log(save);

  edit.style.display = "none";
  save.style.display = "block";

  var input_idv = document.getElementById("id" + n + "1");
  var input_namev = document.getElementById("id" + n + "2");
  var input_skillsv = document.getElementById("id" + n + "3");
  var input_projectv = document.getElementById("id" + n + "4");
  var input_hcmv = document.getElementById("id" + n + "5");

  idv = input_idv.value;
  namev = input_namev.value;
  skillsv = input_skillsv.value;
  projectv = input_projectv.value;
  hcmv = input_hcmv.value;

  input_idv.disabled = false;
  input_namev.disabled = false;
  input_skillsv.disabled = false;
  input_projectv.disabled = false;
  input_hcmv.disabled = false;
}


// onSave function 
function onSave(n) {
  var edit = document.getElementById("edit" + n);
  var save = document.getElementById("save" + n);

  console.log(edit);
  console.log(save);

  edit.style.display = "block";
  save.style.display = "none";

  var input_idv = document.getElementById("id" + n + "1");
  var input_namev = document.getElementById("id" + n + "2");
  var input_skillsv = document.getElementById("id" + n + "3");
  var input_projectv = document.getElementById("id" + n + "4");
  var input_hcmv = document.getElementById("id" + n + "5");

  input_idv.disabled = true;
  input_namev.disabled = true;
  input_skillsv.disabled = true;
  input_projectv.disabled = true;
  input_hcmv.disabled = true;
}


// onDelete function 
function onDelete(n){
    var selectedRow = document.getElementById("row" + n);
    selectedRow.remove();
}

//deletef function
function deletef(n){
  var selectedCardItem = document.getElementById("card" + n);
  selectedCardItem.remove();
}


// editf function 
function editf(n) {
  var edit = document.getElementById("editf" + n);
  var save = document.getElementById("savef" + n);

  console.log(edit);
  console.log(save);

  edit.style.display = "none";
  save.style.display = "block";

  var input_idv = document.getElementById("idd" + n + "1");
  var input_namev = document.getElementById("idd" + n + "2");
  var input_skillsv = document.getElementById("idd" + n + "3");
  var input_projectv = document.getElementById("idd" + n + "4");
  var input_hcmv = document.getElementById("idd" + n + "5");

  idv = input_idv.value;
  namev = input_namev.value;
  skillsv = input_skillsv.value;
  projectv = input_projectv.value;
  hcmv = input_hcmv.value;

  input_idv.disabled = false;
  input_namev.disabled = false;
  input_skillsv.disabled = false;
  input_projectv.disabled = false;
  input_hcmv.disabled = false;
}


// savef function 
function savef(n) {
  var edit = document.getElementById("editf" + n);
  var save = document.getElementById("savef" + n);

  console.log(edit);
  console.log(save);

  edit.style.display = "block";
  save.style.display = "none";

  var input_idv = document.getElementById("idd" + n + "1");
  var input_namev = document.getElementById("idd" + n + "2");
  var input_skillsv = document.getElementById("idd" + n + "3");
  var input_projectv = document.getElementById("idd" + n + "4");
  var input_hcmv = document.getElementById("idd" + n + "5");

  input_idv.disabled = true;
  input_namev.disabled = true;
  input_skillsv.disabled = true;
  input_projectv.disabled = true;
  input_hcmv.disabled = true;
}