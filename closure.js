// the following below is not a closure
function foobar() {}

let a = function () {
  // this `a` function is also not a closure.
  // because it has a name!
};

let fruits = [
  'apples',
  'bananas',
  'cherries',
  'durians',
  'figs',
  'elderberries',
];
let fruitDiv = document.querySelector('#fruits');
let func = [];
for (let f of fruits) {
  let liElement = document.createElement('li');
  let template = `
            <span>${f}</span>
            <button>Process</button>
        `;
  liElement.innerHTML = template;
  // look for child elements nested within the <li>
  func.push(function () {
    console.log(f);
  });
  liElement.querySelector('button').addEventListener('click', function () {
    console.log('Processing ' + f);
  });
  fruitDiv.appendChild(liElement);
}

for (let i = 0; i < 10; i++) {
  let b = document.createElement('button');
  b.innerHTML = i;
  b.addEventListener('click', function () {
    alert(i);
  });
  document.querySelector('body').appendChild(b);
}
console.log(func);
