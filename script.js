const cart = []

const addItem = () => {
    if(item.value === '') {
        alert('Haba now, fill in the inputs joor')
    } else {
        cart.push(item.value)
        document.getElementById('item').value = ''
        console.log(cart);

        displayItem()
    }
}

const displayItem = () => {
    show.innerHTML = ""
        for(let i=0;i < cart.length;i++) {
            show.innerHTML += `
                <p>${i+1}. ${cart[i]}</p>
            `
        }
}

// const test1 = ['Segun', 'Tolu', 'Kola', 'Jerry']
// console.log(test1.length);

// for(i=0; i < test1.length; i++) {
//     console.log(test1[i]);
    
// }



// all users are dumb