

var editLink = document.getElementsByClassName('editProduct');
for(var i =0; i < editLink.length; i++){
    editLink[i].addEventListener('click', function(event){
        update(event.currentTarget.id);
    })
}

function update(pId){
    
    document.getElementById('viewProduct').style.display = "none";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
           var product = JSON.parse(this.responseText);
          document.getElementById('name').value = product[0].name;
          document.getElementById('price').value = product[0].price;
          document.getElementById('message').value = product[0].description;
          document.getElementById('price').value = product[0].price;
          document.getElementById('blah').src = product[0].image;
          document.getElementById('submit').value = product[0]._id;
          document.getElementById('category').value = product[0].category
           document.getElementById('editProduct').style.display = "block";

        }
    };

    xhttp.open("POST", "/edit", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(`product=${pId}`);
}






var removeLink = document.getElementsByClassName('removeProduct');
for(var j =0; j < removeLink.length; j++){
    removeLink[j].addEventListener('click', function(event){
        removeItem(event.currentTarget.id);
    })
}

function removeItem(pId){
    
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          
            document.getElementById(`row${pId}`).style.display = "none";
        }
    };

    xhttp.open("POST", "/removeItem", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(`product=${pId}`);
}