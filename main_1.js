let i = 0;
var Liftivity_arr = [];
var Liftivity_val = [];

// myArr_1 = ["Mac", "iPad", "Goodies"];
// myArr_2 = [2.3, 1.6, 10];

myArr_1 = ["Placeholder", "Mac", "iPad", "Goodies"];
myArr_2 = [0, 2.3, 1.6, 10];

// localStorage.setItem("firstLoad", 0);

function myFunction() {
  for (let s = 0; s < myArr_1.length; s++) {
    let itemList = myArr_1[s];
    let valList = myArr_2[s];

    if (localStorage.getItem("firstLoad") == null) {
      addToLocal();
      localStorage.setItem("firstLoad", 1);
    }
    savePresets();

    var node = document.createElement("LI");
    var texWeig = document.createElement("DIV");
    var node2 = document.createElement("SPAN");
    var item = document.getElementById("inp-1").value;
    var weig = document.getElementById("inp-2").value;

    //เช็คค่าว่างและสร้างโนด
    if (itemList == "") {
      var textnode = document.createTextNode(itemList + `Untitled`);
    } else {
      var textnode = document.createTextNode(itemList);
    }

    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);
    // console.log(textnode);

    document.querySelectorAll("li")[s].appendChild(node2).classList.add("pic");
    var texWeighNode = (document
      .querySelectorAll("li")
      [s].appendChild(
        texWeig
      ).innerHTML = `<div class="textWeight">${valList}</div>`);
    addTotalWeight(valList);
    document.getElementById("total-w").innerText = totalSum.toFixed(2) + ` kg`;

    weig = 0;
  }

  return weig;
}
let totalSum = 0;

function getList() {
  for (var s = 0; s < Liftivity_arr.length; s++) {
    var itemList = Liftivity_arr[s];
    return itemList;
  }

  for (var g = 0; g < Liftivity_val.length; g++) {
    var valList = Liftivity_val[g];
    return valList;
  }
}

function addItemList() {
  var itemforAdd = document.getElementById("inp-1").value;
  var weigforAdd = document.getElementById("inp-2").value;
  if (itemforAdd == "") {
    myArr_1.push("Untitled");
  } else if (itemforAdd == "clearlo") {
    localStorage.clear();
    location.reload();
  } else {
    myArr_1.push(itemforAdd);
  }
  myArr_2.push(weigforAdd);

  addToLocal();
  location.reload();
}

var arr = [];

function savePresets() {
  Object.keys(localStorage).forEach(function (key) {
    var a = localStorage.getItem(key);
    arr[i] = a.split(",");
    i++;
  });
  myArr_1 = arr[1];
  myArr_2 = arr[0];
}

function addTotalWeight(x) {
  if (totalSum < 999) {
    let val = parseFloat(x);
    totalSum += val;
    // console.log(totalSum);
    return totalSum;
  } else {
    return (totalSum = 999);
    document.getElementById("btn-main").disabled = true;
  }
}

function addToLocal() {
  // Check browser support
  if (typeof Storage !== "undefined") {
    // Store
    localStorage.setItem("Liftivity_49js1AAvsl", myArr_1);
    localStorage.setItem("Liftivity_gas#VWsa&7", myArr_2);
    // Retrieve
  } else {
    document.getElementById("result").innerHTML =
      "Sorry, your browser does not support Web Storage...";
  }
}

function deleteChild() {
  myArr_2 = [0];
  myArr_1 = ["Placeholder"];

  addToLocal();
  location.reload();
}
var btn = (document.getElementById("btn").onclick = function () {
  deleteChild();
  i = 0;
  totalSum = 0;
  document.getElementById("total-w").innerText = totalSum + ` kg`;
});
