// let div = document.createElement('div');

// div.className = 'alert'
// div.innerHTML = "<strong>Asalamu alaykum!</strong> Awwal welocme to my beatiful website."

// document.body.append(div);


// second.after(first)

let div2 = div.cloneNode(true)

div2.querySelector('strong').innerHTML = 'Ma Salam!'

div.after(div2);
// setTimeout(() => div.remove(), 2000)

function getListContent() {
    let fragment = new DocumentFragment();
    
    for(let i = 1; i <= 30; i++) {
        let li = document.createElement('li');
        li.append(`${i} x 3 = ${i * 3}`);

        fragment.append(li)
    }

    return fragment;
}


ul.append(getListContent());



