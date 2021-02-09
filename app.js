
function getPin() {
    const random = Math.random()*10000;
    const pin = (random + '').split('.')[0];
    if (pin.length === 4) {
        return pin;
    }
    else{
        return getPin();
    }
}
//display pin
const pinGenerate = document.getElementById('pin-generate');
pinGenerate.addEventListener('click', function() {


const pinInput = document.getElementById('pin-display');
pinInput.value = getPin();

})

// handle click calculate  

const calculate = document.getElementById('calculate');
calculate.addEventListener('click', function (event) {
    const digit = event.target.innerText;
    if (isNaN(digit)) {
        if (digit==='C') {
            const pinType = document.getElementById('type-pin');
            pinType.value = '';
        }
        // if (digit==='<') {
        //     const pinType = document.getElementById('type-pin');
        //     pinType.value = pinType.value.remove;
        // }
    }
    else{
        const pinType = document.getElementById('type-pin');
        pinType.value = pinType.value + digit;
    }
})
//verify pin
const verifyPin = document.getElementById('verify-btn');
verifyPin.addEventListener('click', function () {
    const pin = document.getElementById('pin-display').value;
    const pinType = document.getElementById('type-pin').value;
    if (pin===pinType) {
        const correctPin = document.getElementById('correct-pin');
        correctPin.style.display = 'block';
        const incorrectPin = document.getElementById('incorrect-pin');
        incorrectPin.style.display = 'none';
    }
    else{
        const incorrectPin = document.getElementById('incorrect-pin');
        incorrectPin.style.display = 'block';
        const correctPin = document.getElementById('correct-pin');
        correctPin.style.display = 'none';
    }
})