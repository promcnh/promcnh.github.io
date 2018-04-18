var backend_name = "http://api.chatbot.ngxson.com";

$(document).ready(function() {
	document.getElementById("loading").style.display = "none";
	document.getElementById("submitbtn").style.display = "inline";
	document.getElementById("fromMainView").style.display = "inline";
});
var waitMsg = "<img src=\"img/loading.gif\" height=\"25\" width=\"25\"><br/>Xin bạn đợi chút...";
var doneMsg = "Chúc mừng ";
var doneMsg2 = "Bạn đã đặt vé thành công. Chúc bạn có một đêm dạ hội vui vẻ!</br>";
var doneMsgUber = "";
var nomoreticket = "Chúng mình hết vé mất rồi bạn ạ. Bạn làm ơn chuyển qua link vé đơn nhé :(";
var errCannotConnect = "Không thể kết nối. Hãy thử vào lại bạn nhé!";
var errNotFullFill = "Bạn còn chỗ quên chưa điền kìa!";
var errNoAddr = "Bạn chưa điền địa chỉ nhà kìa!";
var errDuplicated = "Xin lỗi bạn nhưng mỗi người chỉ được đặt tối đa 1 lần.";
var errWrongEmail = "Email bạn nhập không hợp lệ. Vui lòng kiềm tra lại!";
var errNetwork = "Lỗi. Bạn hãy kiểm tra lại mạng :(";
var errPartnerName = "Tên ghi trên vé không được quá dài (vượt quá 18 ký tự mỗi tên) bạn nhé!";
var errNoValidName = "Họ và tên không hợp lệ";
var errInvalidSLV = "Số lượng vé không hợp lệ. Chỉ nhập số thôi bạn nhé!";
var sent_request = false;
//begin
document.getElementById("submitbtn").style.display = "none";
document.getElementById('vea').checked = true;
document.getElementById("fromMainView").style.display = "none";
document.getElementById("loading").style.visibility = "visible";
var app = angular.module('app', ['firebase']);
var loaive = 1;
var mScope;
app.controller('ticketCtrl', ['$scope', '$firebase',
	function($scope, $firebase) {
		num=0;
		$scope.num = "hello world";
		$scope.nameMes = "";
		$scope.mailMes = "";
		$scope.mclassMes = "";
		$scope.chatMes = "";
		$scope.checkShip = "none";
		$scope.nameMesA = "";
		$scope.nameMesB = "";
		$scope.soluongve = "1";
		
		$(document).ready(function() {
			$scope.checkShip = "Yes";
		});
		
		$scope.sendChat = function() {
			nuiNui($scope);
		}

		mScope = $scope;
	}
]);

function formSubmit(token) {
	nuiNui(mScope);
}

var nuiNui = function($scope) {
	/* get option params */
	var e;
	var diachiid = 1;
	var e1;
	var chuyenid = 0;
	var e2;
	var lopid = "100";
	var isDuplicated = false;
	var myNumber = 0;
	var currentdate = new Date(); 
	var dateinnano = currentdate.getTime();
	var myName = toTitleCase($scope.nameMes);
	var diachi2 = "";
	var fillState = false;
	
	/*lalalalalalala*/
	if(document.getElementById('veb').checked) {
		loaive = 2;
		e = document.getElementById("ddlViewBy");
		diachiid = e.options[e.selectedIndex].value;
		diachi2 = document.getElementById("diachi2").value;
	} else {
		loaive = 1;
		diachi2="";
		diachiid=1;
	}
	
	if (!($scope.checkSchool)) {
		e1 = document.getElementById("optionChuyen");
		chuyenid = e1.options[e1.selectedIndex].value;
		e2 = document.getElementById("optionLop");
		lopid = e2.options[e2.selectedIndex].value;
	}
	
	fillState = ($scope.nameMes == "") ||
			($scope.mailMes == "") ||
			((lopid != "100")&&(chuyenid == 0)) ||
			(lopid == 0) ||
			($scope.chatMes == "");

	/*if (partnerName) {
		if ($scope.nameMesA.length > 18 || $scope.nameMesB.length > 18) {
			alert(errPartnerName);
			return;
		}
		fillState = fillState || ($scope.nameMesA == "") || ($scope.nameMesB == "");
	} else {
		$scope.nameMesA = ""; $scope.nameMesB = "";
	}*/
	
	if (!(/\s/.test(myName)) || myName.length > 30) {
		toastr.error(errNoValidName, "CHÚ Ý"); grecaptcha.reset();
	} else if(fillState) {
		toastr.error(errNotFullFill, "CHÚ Ý"); grecaptcha.reset();
	} else if(!validateEmail($scope.mailMes)) {
		toastr.error(errWrongEmail, "CHÚ Ý"); grecaptcha.reset();
	} else if(isDuplicated) {
		toastr.error(errDuplicated, "CHÚ Ý"); grecaptcha.reset();
	} else if((loaive == 1) || ((loaive == 2) && (diachiid != 1) && (diachi2 != ""))) {
		document.getElementById("submitbtn").style.display = "none";
		document.getElementById("finalMsg").innerHTML = ("<center>"+waitMsg+"</center>");
		selSLV = document.getElementById("optionSLV");
		
		var myTicketData = {
			ticket: "ticket01",
			//a: firebase.database.ServerValue.TIMESTAMP, //time
			b: myName, //name
			b1: $scope.nameMesA, //name1
			//b2: $scope.nameMesB, //name2
			b2: +(selSLV.options[selSLV.selectedIndex].value),
			c: +(chuyenid), //chuyen
			d: +(lopid), //lop
			e: $scope.chatMes, //sdt
			f: $scope.mailMes, //mail
			g: diachi2, //addr
			h: diachiid, //ship
			"g-recaptcha-response": grecaptcha.getResponse()
		};
		
		$.ajax({
			type: "POST",
			url: backend_name+"/prom18/ticket/book",
			timeout: 12000,
			data: myTicketData,
			success: function (data) {
				if (data.slice(-2) == 'OK') {
					console.log("successful!");
					document.getElementById("finalMsg").innerHTML = (doneMsg + myName + "! </br>" + doneMsg2);
					document.getElementById("finalMsgUber").innerHTML = (doneMsgUber);
					//document.getElementById("fromMainView").style.display = "none";
					//document.getElementById("guideReceiveTicket").style.display = "none";
					$('#fromMainView').slideUp();
					$scope.checkShip = "none";
				} else if (data.slice(-11)=='ERR_CAPTCHA'){
					resetSubmitBtn();
					toastr.error("Không thể xác thực CAPTCHA", "LỖI");
					grecaptcha.reset();
				} else if (data.slice(-6)=='ERR_DB') {
					resetSubmitBtn();
					toastr.error(errDuplicated, "LỖI");
					grecaptcha.reset();
				}
			},
			error: function (xhr, ajaxOptions, thrownError) {
				resetSubmitBtn();
				toastr.error(errNetwork + "\n" + thrownError, "LỖI MẠNG");
				grecaptcha.reset();
			}
		});
	} else {
		toastr.error(errNoAddr, "CHÚ Ý"); grecaptcha.reset();
	}
	
	function resetSubmitBtn() {
		document.getElementById("submitbtn").style.display = "inline";
		document.getElementById("finalMsg").innerHTML = "";
	}
}