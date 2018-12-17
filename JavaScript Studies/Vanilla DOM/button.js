// creating new tag.

let button = document.createElement("button");
//  This creates button tag                             <button></button>

button.innerHTML = "0";
// this changes the text of the button to "0"        <button>0</button>

button.style.padding = "10px";  
// will give style attribute                        <button style="padding: 10px">0</button>

button.style.borderRadius = "5px";
// some properties require cammelcase to implement properties.

button.addEventListener("click", increment);

function increment (e) {
  let number = Number(e.target.innerHTML);
  e.target.innerHTML = number + 1;
}

// adding a click event that will increment the HTML;

document.body.appendChild(button);

// finally appending to the childNode to the body.