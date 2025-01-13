
const signUpBtnLink = document.querySelector('.signUpBtn-link');
const signInBtnLink = document.querySelector('.signInBtn-link');
const signInForm = document.querySelector('.form-wrapper.sign-in');
const signUpForm = document.querySelector('.form-wrapper.sign-up');


signUpBtnLink.addEventListener('click', (e) => {
    e.preventDefault();
    signInForm.classList.remove('active');
    signUpForm.classList.add('active');
});


signInBtnLink.addEventListener('click', (e) => {
    e.preventDefault();
    signUpForm.classList.remove('active');
    signInForm.classList.add('active');
});
