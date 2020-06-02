
function login() {

    var email = document.getElementById('email').value;
    var pwd = document.getElementById('password').value;

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            if (this.responseText === 'failed') {
                document.getElementById('classLogin').reset();
                document.getElementById('email').focus();
                document.getElementById('alertBox').style.display = "block";
            }

            else {
                window.location.href = '/';
            }


        }
    };

    xhttp.open("POST", "/loginUser", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(`email=${email}&password=${pwd}`);



}