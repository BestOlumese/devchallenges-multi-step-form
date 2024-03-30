let nameInput = document.getElementById("name")
let emailInput = document.getElementById("email")
let firstBtn = document.getElementById("first-btn")
let secondBtn = document.getElementById("second-btn")
let finalBtn = document.getElementById("final-btn")
let topic  = document.querySelectorAll(".topic")
let nameResult = document.getElementById("name-result")
let emailResult = document.getElementById("email-result")
let topicList = document.getElementById("topic-list")
let stepNo = document.getElementById("step-no")
let bullet = document.querySelectorAll(".bullet")
let boxOne = document.getElementById("box-one")
let boxTwo = document.getElementById("box-two")
let boxThree = document.getElementById("box-three")
let valueOne;
let valueTwo;
let valueThree;

function firstComplete(e) {
    e.preventDefault()
    if(nameInput.value == '' || emailInput.value == '') {
        return alert('Please fill all fields')
    }
    if(nameInput.value.length <= 1) {
        return alert('Please enter a valid name')
    }
    if(!nameInput.value.toLowerCase().match(/^[a-zA-Z ]+$/)
    ) {
        return alert('Please enter a valid name')
    }
    if(!emailInput.value.toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )) {
        return alert('Please enter a valid Email')
    }

    boxOne.style.display = 'none';
    boxTwo.style.display = 'block';
    stepNo.innerHTML = 2
    localStorage.setItem('name', nameInput.value)
    localStorage.setItem('email', emailInput.value)

    bullet.forEach((item, i) => {
        item.classList.remove('selected')
        if(i == 1) {
            item.classList.add('active')
            item.classList.add('selected')
        }
    })
}

topic.forEach((item, i) => {
    item.addEventListener('click', () => {
        if(item.classList[1] == 'active') {
            item.classList.remove('active')
            if(i == 0) {
                localStorage.removeItem('optionOne')
            } else if(i == 1) {
                localStorage.removeItem('optionTwo')
            } else if(i == 2) {
                localStorage.removeItem('optionThree')
            }
        } else {
            item.classList.add('active')
            if(i == 0) {
                localStorage.setItem('optionOne', item.innerHTML)
            } else if(i == 1) {
                localStorage.setItem('optionTwo', item.innerHTML)
            } else if(i == 2) {
                localStorage.setItem('optionThree', item.innerHTML)
            }
        }
    })
})

function secondComplete() {
    boxTwo.style.display = 'none';
    boxThree.style.display = 'block';
    stepNo.innerHTML = 3

    bullet.forEach((item, i) => {
        item.classList.remove('selected')
        if(i == 2) {
            item.classList.add('active')
            item.classList.add('selected')
        }
    })

    nameResult.innerHTML = localStorage.getItem('name')
    emailResult.innerHTML = localStorage.getItem('email')

    if(localStorage.getItem('optionOne')) {
        valueOne = `<li>${localStorage.getItem('optionOne')}</li>`
    }

    if(localStorage.getItem('optionTwo')) {
        valueTwo = `<li>${localStorage.getItem('optionTwo')}</li>`
    }

    if(localStorage.getItem('optionThree')) {
        valueThree = `<li>${localStorage.getItem('optionThree')}</li>`
    }

    topicList.innerHTML = `
        ${valueOne ? valueOne : ''}
        ${valueTwo ? valueTwo : ''}
        ${valueThree ? valueThree : ''}
    `
}

firstBtn.addEventListener('click', firstComplete)

secondBtn.addEventListener('click', secondComplete)

finalBtn.addEventListener('click', () => {
    alert('Thank you for registeriing with us!')
})

window.addEventListener('load', () => {
    localStorage.removeItem('name')
    localStorage.removeItem('email')
    localStorage.removeItem('optionOne')
    localStorage.removeItem('optionTwo')
    localStorage.removeItem('optionThree')
})