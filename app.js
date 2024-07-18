// const container = document.querySelector('.container');
// const login = document.querySelector('.login');
// const signup = document.querySelector('.signup');

// signup.addEventListener('click', ()=> {
//     container.classList.add('active');
// });
// login.addEventListener('click', ()=> {
//     container.classList.remove('active');
// });


document.addEventListener('DOMContentLoaded', (event) => {
    const chk = document.getElementById('chk');
    const signupForm = document.querySelector('.signup form');
    const loginForm = document.querySelector('.login form');

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = signupForm.querySelector('input[name="txt"]').value;
        const email = signupForm.querySelector('input[name="email"]').value;
        const password = signupForm.querySelector('input[name="pswd"]').value;
        
        console.log('Sign up:');
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);
    });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = loginForm.querySelector('input[name="email"]').value;
        const password = loginForm.querySelector('input[name="pswd"]').value;

        console.log('Login:');
        console.log('Email:', email);
        console.log('Password:', password);
    });
});
