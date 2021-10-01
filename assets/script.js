let yourName = "Anthony Babka"
let gb = 0      // Ginger bread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
let cookieTotal = 0

document.getElementById('credit').textContent = `Created by ${yourName}`
//document.getElementById('#qty-total').textContent = cookieTotal

let gbQty = document.querySelector("#qty-gb")
//let gbCookie = localStorage.getItem('gbCookie')
/*if ('gbCookie'){
    gbQty.textContent = gbCookie;
}*/
document.querySelector('#add-gb').addEventListener('click', function() {
    //let gb = parseInt(gbQty.textContent);
    gb = gb +1;
    gbQty.textContent = gb;
    //localStorage.setItem('gbCookie', gb)
    cookieTotal.textContent = gb + cc + sugar;
    console.log("gb was pressed")
})

document.querySelector('#minus-gb').addEventListener('click', function() {
    //let gb = parseInt(gbQty.textContent);
    gb = gb -1;
    gbQty.textContent = gb;
    //localStorage.setItem('gbCookie', gb)
    cookieTotal.textContent = gb + cc + sugar;
    console.log("gb minus was pressed")
})

let ccQty = document.querySelector("#qty-cc")
document.querySelector('#add-cc').addEventListener('click', function() {
    cc = cc +1;
    ccQty.textContent = cc;
    cookieTotal.textContent = gb + cc + sugar;
    console.log("cc was pressed")
})

document.querySelector('#minus-cc').addEventListener('click', function() {
    cc = cc -1;
    ccQty.textContent = cc;
    cookieTotal.textContent = gb + cc + sugar;
    console.log("cc minus was pressed")
})

let sugarQty = document.querySelector("#qty-sugar")
document.querySelector('#add-sugar').addEventListener('click', function() {
    sugar = sugar +1;
    sugarQty.textContent = sugar;
    cookieTotal.textContent = gb + cc + sugar;
    console.log("sugar was pressed")
})

document.querySelector('#minus-sugar').addEventListener('click', function() {
    sugar = sugar -1;
    sugarQty.textContent = sugar;
    cookieTotal.textContent = gb + cc + sugar;
    console.log("sugar minus was pressed")
}) 