let price = document.getElementById('price')

let plusBtn = Array.from(document.querySelectorAll('.plus-btn'));
plusBtn.forEach((idbtn, index) => {
    idbtn.onclick = () => {
        let tt = parseInt(document.getElementById('price').innerHTML)
        let id = `number${index}`
        let px = parseInt(document.getElementById(`price${index}`).innerHTML)
        let total = tt + px
        price.innerHTML = `${total} dt`
        this.addToinput(id)
    }

});

let minusBtn = Array.from(document.querySelectorAll('.minus-btn'));
minusBtn.forEach((idbtn, index) => {
    idbtn.onclick = () => {
        let tt = parseInt(document.getElementById('price').innerHTML)
        let id = `number${index}`
        let px = parseInt(document.getElementById(`price${index}`).innerHTML)
        let total;
        if(parseInt(document.getElementById(id).value )  > 0){
           total = tt - px
        }
        else{
            total = tt
        }
        
        price.innerHTML = `${total} dt`
        this.minToinput(id)
    }

});

function addToinput(id) {
    var value = parseInt(document.getElementById(id).value, 10);
    value = isNaN(value) ? 0 : value;
    if (value < 100) {
        value++;
        document.getElementById(id).value = value;
    }
}

function minToinput(id) {
    var value = parseInt(document.getElementById(id).value, 10);
    value = isNaN(value) ? 0 : value;
    if (value > 0) {
        value--;
        document.getElementById(id).value = value;
    }
}

//let total = (document.getElementById('number0').value * 150) + (document.getElementById('number1').value * 200) + (document.getElementById('number2').value * 180)
//price.innerHTML = `${total} dt`