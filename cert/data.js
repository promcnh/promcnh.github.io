var mycode = "";
var myNum = 0;
function verifyMe() {
	mycode = document.getElementById('enterCode').value;
    if ((mycode != "") && (mycode.length == 4)) {
		var found = false;
		for(myNum = 0; myNum < 42 ; myNum++) {
			//console.log(myData[myNum][0]);
			if(myData[myNum][0] == mycode.toLowerCase()) {
				//alert("num"+myNum);
				found = true;
				break;
			}
		}
		if(found) {
			document.getElementById('resultText').style.display = "inline";
			document.getElementById('errMess').style = "none";
			document.getElementById('errMess').innerHTML = "";
			showInfo();
		} else {
			document.getElementById('errMess').style = "inline";
			document.getElementById('errMess').color = "red";
			document.getElementById('errMess').innerHTML = "Cannot find this code</br>";
			document.getElementById('resultText').style.display = "none";
		}
    } else {
		document.getElementById('errMess').style = "inline";
		document.getElementById('errMess').color = "red";
		document.getElementById('errMess').innerHTML = "Please fill in the verification code correctly</br>";
    }
}

function showInfo() {
	document.getElementById('cert_name').innerHTML = myData[myNum][1];
	document.getElementById('cert_dob').innerHTML = myData[myNum][5];
	document.getElementById('cert_sex').innerHTML = "";
	document.getElementById('cert_email').innerHTML= myData[myNum][4];
	document.getElementById('cert_pos').innerHTML = myData[myNum][2] + " of the " + myData[myNum][3];
	document.getElementById('cert_code').innerHTML = myData[myNum][0];
}

var myData=[["9zw8","L&#234; Vi&#7879;t Phong","the leader","Logistics Team","vietphong279@gmail.com",""],
["ekzp","Ho&#224;ng Hi&#7873;n Mai ","a member","Logistics Team","dontstaycalm@gmail.com",""],
["1mb6","Nguy&#7877;n Minh Di&#7879;p ","a member","Logistics Team","daylaemailcuadiep@gmail.com",""],
["en1v","Ho&#224;ng H&#7843;i Linh ","a member","Logistics Team","linhgeorginacnh@gmail.com",""],
["c9k7","Nguy&#7877;n Ph&#432;&#417;ng Anh ","a member","Logistics Team","mitxd2000@gmail.com",""],
["9wpq","V&#361; Thu H&#224; ","a member","Logistics Team","lovesogogi3415@gmail.com",""],
["cknn","Nguy&#7877;n Ph&#432;&#417;ng Linh ","a member","Logistics Team","iameinstein1311@gmail.com",""],
["8cd6","Nguy&#7877;n Vi&#7879;t B&#7843;o H&#226;n ","a member","Logistics Team","nvbaohan@gmail.com",""],
["mtwq","Nguy&#7877;n Kh&#225;nh Nguy&#234;n ","a member","Logistics Team","therainkhanhnguyen@gmail.com",""],
["1477","&#272;&#224;o Quang Nh&#7853;t ","a member","Logistics Team","dqnhat99@gmail.com",""],
["08du","Nguy&#7877;n B&#225; Tu&#7845;n Anh ","a member","Logistics Team","batuananh99@gmail.com",""],
["eda9","Ti&#234;u Th&#249;y Linh ","a member","Logistics Team","tieutieulinhlinh15@gmail.com",""],
["x6cx","&#272;&#7895; Minh Nguy&#7879;t ","a member","Logistics Team","nguyetmoon1907@gmail.com",""],
["xax7","Nguy&#7877;n Th&#7883; Lan Ph&#432;&#417;ng ","a member","Logistics Team","phuong11012000@gmail.com",""],
["gmku","Phan Ng&#7885;c B&#7843;o Trang ","a member","Logistics Team","dontstaycalm@gmail.com",""],
["qec4","Tr&#7847;n Ng&#7885;c Trinh ","a member","Logistics Team","nhoxbunnys2nam@gmail.com",""],
["88kg","Nguy&#7877;n H&#224; Thanh ","a member","Logistics Team","cunlon1411@gmail.com",""],
["7bwg","Nguy&#7877;n Th&#249;y Trang ","a member","Logistics Team","kissbabyskydbsk@gmail.com",""],
["g9kg","Ng&#244; Th&#7883; Th&#7909;c Y&#7871;n","the leader","Media Team","yenngo.3409@gmail.com",""],
["tnt3","Nguy&#7877;n Xu&#226;n S&#417;n","a member","Media Team","thichthat@gmail.com",""],
["vhte","Ho&#224;ng Th&#249;y Dung ","a member","Media Team","biyeubau@gmail.com",""],
["sydg","&#272;&#224;o Xu&#226;n V&#361; ","a member","Media Team","xuanvu0906@gmail.com",""],
["c145","Nguy&#7877;n Ph&#432;&#417;ng V&#226;n Nhi ","a member","Media Team","nnhii19@gmail.com",""],
["2yze","Tr&#7847;n &#272;&#224;o Quang Huy ","a member","Media Team","titongteo99@gmail.com ",""],
["hgk3","V&#361; Qu&#7889;c Vi&#7879;t","the leader","PR Team","zzzkaitoukid9zzz@gmail.com",""],
["qst9","Nguy&#7877;n Mai Ph&#432;&#417;ng ","a member","PR Team","mphuong22102k@gmail.com",""],
["gemy","Ph&#7841;m Ph&#432;&#417;ng Linh ","a member","PR Team","phamphuonglinh0609@gmail.com",""],
["h3sc","V&#361; To&#224;n Kh&#225;nh ","a member","PR Team","vutoankhanh99@gmail.com",""],
["tkkw","B&#249;i Quang H&#432;ng ","a member","PR Team","Duhocnga2017@gmail.com",""],
["54dw","&#272;&#224;o Minh Giang ","a member","PR Team","deleamile@gmail.com",""],
["pnxs","B&#7841;ch Kh&#225;nh V&#226;n ","a member","PR Team","minakhanhvan@gmail.com",""],
["9sem","&#272;&#7863;ng H&#432;&#417;ng Giang","the production manager","Iridescent Prom","tiectientieuthu.98@gmail.com ",""],
["eex6","&#272;&#7895; H&#7843;i Minh","the director","Iridescent Prom","minhkazin@gmail.com ",""],
["5324","Nguy&#7877;n Thu H&#7857;ng ","a member","Content Team","alice.lucyvic@gmail.com",""],
["sszg","Nguy&#7877;n &#193;nh Ng&#7885;c ","a member","Content Team","ngocnguyen2803o.0@gmail.com",""],
["83eh","&#272;&#7863;ng Thanh H&#432;&#417;ng ","a member","Content Team","dangthanhhuong2212@gmail.com",""],
["yk3u","Ph&#7841;m Th&#7843;o Ng&#226;n ","a member","Content Team","thaongan1104@gmail.com",""],
["0k5e","Nguy&#7877;n L&#432;&#417;ng &#272;&#7913;c ","a member","Content Team","l.duc199x@gmail.com",""],
["bdt5","V&#361; H&#432;&#417;ng Giang","the leader","Finance Team","vanessavu2807@gmail.com",""],
["qhh3","H&#224; B&#7843;o Ng&#7885;c ","a member","Finance Team","abaongoc.131100@yahoo.com.vn",""],
["0nap","L&#234; Th&#7883; Huy&#7873;n ","a member","Finance Team","lehuyen303507@gmail.com",""],
["ge2c","&#272;o&#224;n Tr&#7847;n Y&#7871;n Chi ","a member","Finance Team","christinedoan1312000@gmail.com",""]];