// ============================== Task 1  ===========================


const result = document.querySelector(".result");
const buttons = document.querySelectorAll(" .calc button");
const specialChars = ['+', '-', '*', '/', '='];
let output = " ";
const calculate = (btnValue) => {
    if (btnValue === "=" && output !== "") {
        output = eval(output);

    } else if (btnValue === "AC") {
        output = " ";

    } else if (btnValue === "DEL") {
        output = output.toString().slice(0, -1);

    } else {
        if (output == " " && specialChars.includes(btnValue))
            output = " "
        else {
            output += btnValue
        }
    }
    result.value = output;
};

buttons.forEach((button) => {
    button.addEventListener("click", e => calculate(e.target.value))

});


// ============================== Task 2 ============================

const background = document.getElementById('task-two-content')
const mode_button = document.getElementById('mode-icon')
const img = document.querySelector('#mode-icon img')

mode_button.addEventListener("click", () => {
    background.classList.toggle('light-theme')
    const class_list = background.classList
    class_list.forEach((e) => {
        if (e == 'dark-theme') {
            img.src = "./assets/images/icons/sun.svg";
        } else {
            img.src = "./assets/images/icons/moon.svg";
        }
    })

})



// ============================== Task 3 ============================
const questions = document.querySelectorAll('.question-box')
const answer = document.querySelectorAll('.answer')
const icons = document.querySelectorAll('.question-box i')
let i = 0;
for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", () => {
        if (answer[i].style.display == "none") {
            answer[i].style.display = "block"
            icons[i].classList.remove("fa-chevron-down")
            icons[i].classList.add("fa-chevron-up")
        } else {
            answer[i].style.display = "none"
            icons[i].classList.remove("fa-chevron-up")
            icons[i].classList.add("fa-chevron-down")
        }
    })
}

// ============================== Task 4 ============================

let k;
const stars = document.querySelectorAll('.fa-star')
const description = document.querySelector('.description')


for (let i = 0; i < stars.length; i++) {

    stars[i].addEventListener('click', () => {
        if (i == 0) { description.innerHTML = "I just hate 😕" }
        else if (i == 1) { description.innerHTML = "I don't like it 😒" }
        else if (i == 2) { description.innerHTML = "it is not bad 😌" }
        else if (i == 3) { description.innerHTML = "it is awesome 🤩" }
        else if (i == 4) { description.innerHTML = "I love it 😍" }


        if (stars[i].classList.contains('active')) {

            for (let index = k; index > i; index--) {
                stars[index].classList.remove('active')


            }
        } else {
            stars[i].classList.add('active')
            k = i;
            for (let j = 0; j <= i; j++) {
                stars[j].classList.add('active')
            }
        }

    })
}

// ============================== Task 5 ============================

const both_button = document.querySelector(".both")
const male_button = document.querySelector(".male")
const female_button = document.querySelector(".female")
const male_tab = document.querySelector(".male-tab")
const female_tab = document.querySelector(".female-tab")
both_button.addEventListener("click", () => {
    both_button.classList.add('active')
    male_button.classList.remove('active')
    female_button.classList.remove('active')
    male_tab.style.display = "block"
    female_tab.style.display = "block"
})
male_button.addEventListener("click", () => {
    male_button.classList.add('active')
    both_button.classList.remove('active')
    female_button.classList.remove('active')
    female_tab.style.display = "none"
    male_tab.style.display = "block"
})
female_button.addEventListener("click", () => {
    female_button.classList.add('active')
    both_button.classList.remove('active')
    male_button.classList.remove('active')

    male_tab.style.display = "none"
    female_tab.style.display = "block"
})




// ============================== Task 6 ============================

const small_images = document.querySelectorAll('.small-img')
const main_image = document.querySelector('#mainImg')

small_images.forEach((small_image) => {
    small_image.addEventListener('click', () => {
        main_image.src = small_image.src

    })
}
)

// ============================== Task 7 ============================

const user_name = document.getElementById('name')
const email = document.getElementById('email')
const message = document.getElementById('message')
const checkbox = document.getElementById('checkbox')
const form_button = document.querySelector('.task-eight button')
const err_msg = document.querySelectorAll('.errMsg ')
const res = document.querySelector('.msg_res')


form_button.addEventListener('click', (event) => {
    event.preventDefault();
    form_user_name = user_name.value
    if (form_user_name == "") {
        err_msg[0].style.display = "block"
    } else {
        err_msg[0].style.display = "none"
    }
    form_email = email.value
    if (form_email == "") {
        err_msg[1].style.display = "block"
    } else {
        err_msg[1].style.display = "none"
    }
    form_message = message.value
    if (form_message == "") {
        err_msg[2].style.display = "block"
    } else {
        err_msg[2].style.display = "none"
    }
    form_checkbox = checkbox.checked ? true : false

    if (form_user_name != "" && form_email != "" && form_message != "") {
        user_info = {
            'name': form_user_name,
            'email': form_email,
            'message': form_message,
            'status': form_checkbox
        }
        res.style.display = "block"
        console.log(user_info)

    } else {
        res.style.display = "none"

    }
})


//================ additional night mode for all page ================

const body_mode = document.querySelector('#body_mode')
const body_mode_img = document.querySelector('#body_mode .head-img img')
const form_m = document.querySelector('.task-eight .form')
body_mode_img.addEventListener('click', () => {

    body_mode.classList.toggle('body-dark-theme')

    if (body_mode.classList[0] == 'body-dark-theme') {
        body_mode_img.src = "./assets/images/icons/sun.svg";
        form_m.style.color = 'white'
    } else {
        body_mode_img.src = "./assets/images/icons/moon.svg";
        form_m.style.color = 'rgb(3, 56, 82)'

    }


})

