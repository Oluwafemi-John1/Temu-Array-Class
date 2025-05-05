
const toast = (text, background, color, position = 'right') => {
    Toastify({
        text,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position, // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background,
            color,
        },
        onClick: function () { } // Callback after click
    }).showToast();
}

let allUsers = []

if(localStorage.users) {
    let retrieved = JSON.parse(localStorage.getItem('users'))
    console.log(retrieved);
    allUsers = retrieved
} else {
    allUsers = []
}

const signUp = () => {
    if (firstName.value === '' || lastName.value === '' || email.value === '' || password.value === '') {
        // errorMsg.style.display = 'block'
        toast('Haba now, fill in the inputs joor😠👿', '#f00', '#fff')
        sub.innerHTML = '...loading'
        setTimeout(() => {
            sub.innerHTML = 'Submit'
        }, 1000)
    } else {
        // errorMsg.style.display = 'none'
        sub.innerHTML = '...loading'

        const fName = document.getElementById('firstName').value
        const lName = document.getElementById('lastName').value
        const mail = document.getElementById('email').value
        const pass = document.getElementById('password').value

        const userObj = { fName, lName, mail, pass }
        // console.log(userObj);
        allUsers.push(userObj)
        toast('Sign up successful😁', '#006400', '#fff')
        console.log(allUsers);

        document.getElementById('firstName').value = ''
        document.getElementById('lastName').value = ''
        document.getElementById('email').value = ''
        document.getElementById('password').value = ''

        localStorage.users = JSON.stringify(allUsers)
        setTimeout(()=>{
            window.location.href = 'signin.html'
        }, 2000)
    }
}