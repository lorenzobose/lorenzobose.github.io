const body =  document.body;

const container = document.createElement("div");
container.id = "container";

const button = document.createElement("div");
button.id="button";

const input = document.createElement("input");
input.type = "checkbox";
input.id = "_checkbox";
input.checked = false;

const label = document.createElement("label");
label.htmlFor = "_checkbox";
label.id = "label";

const textBar = document.createElement("div");
textBar.id="text_bar";

label.appendChild(textBar);
button.appendChild(input);
button.appendChild(label);
container.appendChild(button);
body.appendChild(container);

