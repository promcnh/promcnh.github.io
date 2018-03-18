function setCookie(key, value, minutes) {
    var date = new Date();
    date.setTime(+ date + (minutes * 60*1000)); //24 * 60 * 60 * 1000

    document.cookie = key + "=" + value + "; expires=" + date.toGMTString();
    //document.cookie = key + "=" + value + "; expires=Thu, 01 Jan 1970 00:00:01 GMT";

    return value;
};

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}
