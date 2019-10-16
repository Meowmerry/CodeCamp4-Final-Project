
    // Function to change webpage background color
    const changeColor = document.getElementById('changeColor'),
    colors      = ['red', 'green', 'blue','pink'];
    let   colorIndex  = 0;

    changeColor.addEventListener('click', () => {
    document.body.style.backgroundColor = colors[colorIndex];      
    colorIndex = (colorIndex + 1) % colors.length
    });

// Function to change name
function mynameFunction() {
    var name;
    var username = prompt("Please enter your name:", "Thasanee Puttamadilok");
    if (username == null || username == "") {
      name = "User cancelled the prompt.";
    } else {
      name = "Hello " + username + "! How are you today?";
    }
    document.getElementById("changename").innerHTML = name;
  }

// Function to add and remove skills
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
      alert("You must write something!");
  } else {
      document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");

  span.appendChild(txt);
  li.appendChild(span);
  span.className = "close";   
  for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
  var div = this.parentElement;
  div.style.display = "none";
}
}
}
  function removeFromList(){
      var list = document.getElementById("myUL");
       list.removeChild(list.childNodes[0]);
   }


