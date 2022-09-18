function greeting(greetingHandler, name) {
    greetingHandler(name)
}
// const name = 'Halim mama';
// const nums = [12, 56, 98]
// const laptop = { price: 50000, brand: 'HP', memory: '256gp' };

function greetingHandler(name) {
    console.log('good morning', name)
}

function greetEvening(name) {
    console.log('good evening', name);
}

function greetNight(name) {
    console.log('good night', name)
}

greeting(greetingHandler, 'TOM Akkas')
greeting(greetingHandler, 'Tom brady')
greeting(greetingHandler, 'TOM cruise')

greeting(greetEvening, 'Tom Jerry')
greeting(greetEvening, 'Tom burluk')

greeting(greetNight, 'solim da')
greeting(greetNight, 'kolim da')


function submitHandler() {
    console.log('submit vutton clicked')
}
document.getElementById('btn-submit').addEventListener('click', submitHandler)