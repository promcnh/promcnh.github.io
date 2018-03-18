function getParameterByName(name) {
    url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var arg_ticket_kind = getParameterByName("ticket");
var ticket_title_str = "";
var partnerName = false;

//if (arg_ticket_kind == "01") {
	ticket_title_str = "vé";
	document.getElementById("ticket_title").innerHTML = "Đặt "+ticket_title_str;
	ticket_kind = "ticket"+arg_ticket_kind;
/*} else if (arg_ticket_kind == "02") {
	ticket_title_str = "vé kèm suất ăn";
	document.getElementById("ticket_title").innerHTML = "Đặt "+ticket_title_str;
	ticket_kind = "ticket"+arg_ticket_kind;
} else if (arg_ticket_kind == "03") {
	ticket_title_str = "vé đôi đặc biệt";
	document.getElementById("ticket_title").innerHTML = "Vé đôi đặc biệt";
	ticket_kind = "ticket02";
	partnerName = true;
} else {
	window.location = "index.html";
}*/

//document.getElementById("ticket_title").innerHTML += " THỬ NGHIỆM";

function validateEmail(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}
