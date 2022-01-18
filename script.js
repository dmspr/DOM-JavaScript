// // dom ke-1

const cardTittle = document.querySelectorAll('.card-title');
for (let i = 0; i < cardTittle.length; i++) {
    cardTittle[i].style.color = 'coral';
}

// // dom ke-2

const h2 = document.getElementsByTagName('h2')[0]
h2.setAttribute('id', 'heading2')

document.getElementById('heading2').innerHTML = "<em>Produk Terbaru</em>"

// // dom ke-3

const h2i1 = document.getElementsByTagName('h2')[1];
h2i1.setAttribute('id', 'heading2i1');

document.getElementById('heading2i1').onclick = () => {
    alert('this is featured product!');
}

//  // dom ke-4

// Buat Element baru

const pNew = document.createElement('p');
const pText = document.createTextNode('produk tidak tersedia');
pNew.appendChild(pText);
const cardGroup = document.getElementsByClassName('card-group')[0];

cardGroup.appendChild(pNew);

//  // dom ke-5
const h4 = document.getElementsByTagName('h4')[0];
h4.setAttribute('onclick', 'changeTextElement(this)');

function changeTextElement(element) {
    element.innerHTML = ("THANKS FOR CLICKED ME!");
}

// // dom ke-6
const pNew2 = document.createElement('p');
const pText2 = document.createTextNode('produk tidak tersedia kedua');
pNew2.appendChild(pText2);
const cardGroup2 = document.getElementsByClassName('card-group')[0];

cardGroup2.appendChild(pNew2);

            // remove
cardGroup.removeChild(pNew2)

