// [   1   ]    [   2   ]    [   3   ]
// < button id = "1" > < /button>
// < button id = "2" > < /button>
// < button id = "3" > < /button>

// [        "tips"           ]
// <div id="tips"> tips </div>

let [ button1, button2, button3, tooltip ] = [ getById("1"), getById("2"), getById("3"), getById("tips") ];
let buttons = document.querySelectorAll("button");
let texts = [
  "tip1", "tip2", "tip3"
];

buttons.forEach((button, i) => {
  giveHoverEvent(button, texts[i]);
});

function getById(id) {
  return document.getElementById(id);
}

function giveHoverEvent(button, text) {
  button.addEventListener("mouseover", () => tooltip.innerHTML = text);
}