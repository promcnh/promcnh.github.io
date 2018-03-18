var backend_name = "https://api.chatbot.ngxson.com";

var formSubmit = function(token) {
    var email = $("#email").val();
    var code = $("#code").val();
    code = code.toUpperCase().replace(/[^A-Z0-9]+/g, "");

    if (!validateEmail(email)) {
        toastr.error('Bạn hãy kiểm tra lại địa chỉ email nhé!', 'Sai email');
        grecaptcha.reset();
    } else if (!validateCode(code)) {
        toastr.error('Bạn hãy kiểm tra lại mã số vé nhé!', 'Sai mã số vé');
        grecaptcha.reset();
    } else {
        $("#btn_submit").hide();
		$("#btn_submit_loading").show();
        $.ajax({
            url: backend_name+"/prom18/ticket/minigame",
            type: 'post',
            data: {
                "name": $("#name").val(),
                "code": code,
                "email": email,
                "phone": $("#phone").val(),
                "g-recaptcha-response": grecaptcha.getResponse()
            },
            success: function(result) {
                if (result && result == 'OK') {
					window.location.href = "thanks.html";
				} else {
					toastr.error(result, "Có lỗi xảy ra");
					$("#btn_submit").show();
                    $("#btn_submit_loading").hide();
                    grecaptcha.reset();
				}
            },
            error: function(request, status, error) {
				toastr.error("Có lỗi xảy ra, hãy kiểm tra lại kết nối mạng!", "Lỗi mạng");
				$("#btn_submit").show();
                $("#btn_submit_loading").hide();
                grecaptcha.reset();
            }
        })
    }
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validateCode(code) {
    var re = /^[A-Z][A-Z][0-9][0-9]$/;
    return re.test(code);
}