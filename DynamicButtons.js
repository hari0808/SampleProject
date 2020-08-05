for (let i = 1; i <= 5; i++) {
  const button = document.createElement("button");
  button.innerText = i;
  button.id = 'Button-' + i;
  button.setAttribute('index', i);
  button.addEventListener("click", buttonClicked)
  buttonsContainer.appendChild(button);
}

function buttonClicked(element) {
alert('Name: '+ element.target.id + ' Index: '+ element.target.getAttribute('index')); 
}