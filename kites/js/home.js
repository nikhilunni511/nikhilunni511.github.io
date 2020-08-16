var cart = document.getElementsByClassName('cart');
for (var cartIndex = 0; cartIndex < cart.length; cartIndex++) {
    cart[cartIndex].addEventListener('click', function (event) {
        add2cart(event);
    })
}


function add2cart(event) {
    var pId = event.currentTarget.id;
    pId = pId.replace('cart', '')
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200 && this.responseText === 'success') {
            document.getElementById('cart' + pId).innerHTML = 'Added to cart';

        }
    };

    xhttp.open("POST", "/add2cart", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(`product=${pId}`);


}




var deleteCartId = document.getElementsByClassName('deleteItem');
for (var index = 0; index < deleteCartId.length; index++) {
    deleteCartId[index].addEventListener('click', function (event) {
        deleteFromCart(event);

    })
}


function deleteFromCart(event) {
    var cartId = event.currentTarget.id;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200 && this.responseText === 'success') {
            document.getElementById('delete' + cartId).style.display = 'none';
            var price = parseInt(document.getElementById('price' + cartId).innerHTML);
            var count = parseInt(document.getElementById('count' + cartId).value);
            var total = parseInt(document.getElementById('total').innerHTML);
            total = total - (price * count);
            document.getElementById('total').innerHTML = total;


        }
    };

    xhttp.open("POST", "/deleteCart", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(`product=${cartId}`);


}


var modal = document.getElementById('myModal');
var modalB = document.getElementById('myModalB');


var btn = document.getElementById("myBtn");
var amount = parseInt(document.getElementById('total').innerHTML)

var cancel = document.getElementsByClassName("cancel")[0];
var cancelB = document.getElementsByClassName("cancel")[1];
var confirm = document.getElementsByClassName("confirm")[0];
confirm.onclick = function () {
    modal.style.display = "none";
    if (amount === 0) {
        modalB.style.display = "block";
    }
    else {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200 && this.responseText === 'success') {
                window.location.href = '/orders'

            }
        };

        xhttp.open("GET", "/removeCart", true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send();   
    }



}

btn.onclick = function () {
    modal.style.display = "block";
}


cancel.onclick = function () {
    modal.style.display = "none";
    
}
cancelB.onclick = function () {
 
    modalB.style.display = "none";
}


window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}


