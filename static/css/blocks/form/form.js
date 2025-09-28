function form(name, tel, check) {
    this.name = name;
    this.tel = tel;
    this.check = check;
}
const formList = document.querySelectorAll('.basket-window ');
const formSubmit = document.querySelector('.form_button')
const inputName = document.getElementById('name');
const inputTel = document.getElementById('tel');
const inputCheck = document.getElementById('checkbox');

function formError(){
    console.log('error');
    inputName.classList.add('form_input-text--error');
    inputTel.classList.add('form_input-text--error');
    inputName.value = '';
    inputTel.value = '';

    inputName.placeholder = '';
    inputTel.placeholder = '+7 (___) ___ __ __';
    inputCheck.checked = false;
}

function createForm(event){
    event.preventDefault(); 
    
    const name = inputName.value;
    const tel = inputTel.value;
    const check = inputCheck.checked;

    if (name && tel && check) {
        const formData = new form(name, tel, check);

        inputName.value = '';
        inputTel.value = '';
        inputCheck.checked = false;
        inputName.classList.remove('form_input-text--error');
        inputTel.classList.remove('form_input-text--error');
        inputName.placeholder = 'Ваше имя';
        inputTel.placeholder = 'Ваш телефон';
        console.log(formData);
    }
    else{
        formError();
    }
}



formSubmit.addEventListener('click', (event) =>{
    console.log('click');
    createForm(event);
})

