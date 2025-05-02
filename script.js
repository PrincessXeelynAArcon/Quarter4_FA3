let num = prompt("Enter a number:");
while (isNaN(num) || num === "" || num === null) {
  num = prompt("Please enter a valid number:");
}
num = parseInt(num);
let output = "Number inputted: " + num + "\n\n";

if (num % 2 !== 0) {
  for (let row = num; row >= 1; row--) {
    for (let col = 1; col <= num; col++) {
      output += row + " ";
    }
    output += "\n";
  }
} else {
  for (let row = num; row >= 1; row--) {
    for (let col = 1; col <= row; col++) {
      output += row + " ";
    }
    output += "\n";
  }
}
document.getElementById("output").textContent = output;

let contacts = [];

function updateContactList() {
  document.getElementById("contactList").textContent = contacts.join(" ");
}

function addName() {
  const name = document.getElementById("nameInput").value.trim();
  if (name === "") return;
  if (contacts.length >= 7) {
    contacts.shift(); 
  }
  contacts.push(name);
  updateContactList();
  document.getElementById("nameInput").value = "";
}

function removeName() {
  contacts.pop();
  updateContactList();
}


