$(function () {
    toastr.options = {
        closeButton: false,
        debug: false,
        newestOnTop: false,
        progressBar: true,
        positionClass: "toast-top-right",
        preventDuplicates: false,
        onclick: null,
        showDuration: "300",
        hideDuration: "1000",
        timeOut: "5000",
        extendedTimeOut: "1000",
        showEasing: "swing",
        hideEasing: "linear",
        showMethod: "fadeIn",
        hideMethod: "fadeOut",
    };
});

function clearData() {
    $("#name").val("");
    $("#email").val("");
    $("#message").val("");
}

function sendEmail() {
    $(".contact-loader").removeClass("display-none");

    let name = $("#name").val();
    let email = $("#email").val();
    let message = $("#message").val();

    let api = "/services/contact";

    let data = {
        name: name,
        email: email,
        message: message,
    };

    axios
        .post(api, data)
        .then(function (response) {
            console.log(response);
            clearData();
            $(".contact-loader").addClass("display-none");
            toastr["success"](
                "Your query has been recorded. We will get back to you soon."
            );
        })
        .catch(function (error) {
            console.log(error);
        });
}
