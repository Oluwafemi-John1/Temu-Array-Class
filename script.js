const checkPerson = () => {
    if (localStorage.person) {
        const signedInUser = JSON.parse(localStorage.getItem('person'))
        console.log(signedInUser);
        showPerson.innerHTML = `<h4 class="my-3 text-center">Welcome ${signedInUser.fName} ${signedInUser.lName},</h4>`
        signin
    } else {
        body.innerHTML = `<h4 class="my-3 text-center">You are not signed in, redirecting you to sign in...</h4>`
        setTimeout(() => {
            window.location.href = 'signin.html'
        }, 1500)
    }
}
checkPerson()

const signOut = () => {
    localStorage.removeItem('person')
    checkPerson()
}


const cart = []

const addItem = () => {
    if (item.value === '') {
        // alert('Haba now, fill in the inputs joor')
        errorMsg.style.display = 'block'
    } else {
        errorMsg.style.display = 'none'
        cart.push(item.value)
        document.getElementById('item').value = ''
        console.log(cart);
        if (cart.length >= 1) {
            btnDelete.style.display = 'block'
        }
        displayItem()
    }
}

const deleteAnyItem = () => {
    if (cart.length >= 1) {
        const userValue = Number(prompt("Enter the number you want to delete"))
        // console.log(userValue);
        if (userValue < 1) {
            console.log('Numbering starts from 1');
        } else if (userValue <= cart.length) {
            cart.splice(userValue - 1, 1)
            displayItem()
            if (cart.length < 1) {
                btnDelete.style.display = 'none'
            }
        }
        else {
            alert('Invalid number entered')
        }
        // cart.splice(index,1)
    }
}

const displayItem = () => {
    show.innerHTML = ""
    // for(let i=0;i < cart.length;i++) {
    //     show.innerHTML += `
    //         <p>${i+1}. ${cart[i]}</p>
    //     `
    // }
    cart.map((data, index) => {
        console.log(data);
        show.innerHTML += `
            <p>${index + 1}. ${data}</p>
        `
    })
}

// let allStudents = ['Mary', 'Sultan', 'Ayanfe', 'Taiwo']
// allStudents.splice(1,3)
// console.log(allStudents);





// all users are dumb