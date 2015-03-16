/**********************************************
KEYPRESS VALIDADOR
**********************************************/
function onKeyPressValidator() {
    //Place this in your jQuery ready function:
    //Use this to change the regular expression(in this example to any word with no numbers):
    $(".lp_num").keypress(function (e) {
		//ALLOW NUMBERS
        tecla = (document.all) ? e.keyCode : e.which;
        if (tecla == 8) return true;
        if (tecla == "0") { return true; };
        patron = /\d/;
        te = String.fromCharCode(tecla);
        return patron.test(te);
    });
    $(".lp_num_mas").keypress(function (e) {
		//ALLOW NUMBERS AND COMMA
        tecla = (document.all) ? e.keyCode : e.which;
        if (tecla == 8) return true;
        if (tecla == "0") { return true; };
        patron = /[0-9,]/;
        te = String.fromCharCode(tecla);
        return patron.test(te);
    });
    $(".lp_letras").keypress(function (e) {
		//ALLOW LETTERS
        tecla = (document.all) ? e.keyCode : e.which;
        if (tecla == 8) return true;
        if (tecla == "0") { return true; };
        patron = /\w/;
        te = String.fromCharCode(tecla);
        return patron.test(te);
    });
    $(".lp_letras_mas").keypress(function (e) {
		//ALLOW LETTERS, ACCENTS AND SPACE
        tecla = (document.all) ? e.keyCode : e.which;
        if (tecla == 8) return true;
        if (tecla == "0") { return true; };
        patron = /[A-Za-z·ÈÌÛ˙Ò¡…Õ”⁄— ]/;
        te = String.fromCharCode(tecla);
        return patron.test(te);
    });
    $(".lp_letras_num").keypress(function (e) {
		//ALLOW LETTERS, ACCENTS, SPACE AND NUMBERS
        tecla = (document.all) ? e.keyCode : e.which;
        if (tecla == 8) return true;
        if (tecla == "0") { return true; };
        patron = /[A-Za-z0-9·ÈÌÛ˙Ò¡…Õ”⁄— ]/;
        te = String.fromCharCode(tecla);
        return patron.test(te);
    });
    $(".lp_fono").keypress(function (e) {
		//ALLOW NUMBERS AND DASH
        tecla = (document.all) ? e.keyCode : e.which;
        if (tecla == 8) return true;
        if (tecla == "0") { return true; };
        patron = /[0-9\-]/;
        te = String.fromCharCode(tecla);
        return patron.test(te);
    });
    $(".lp_web").keypress(function (e) {
		//ALLOW URL FORMAT
        tecla = (document.all) ? e.keyCode : e.which;
        if (tecla == 8) return true;
        if (tecla == "0") { return true; };
        patron = /[A-Za-z0-9\-\/._:]/;
        te = String.fromCharCode(tecla);
        return patron.test(te);
    });
    $(".lp_mail").keypress(function (e) {
		//ALLOW MAIL FORMAT
        tecla = (document.all) ? e.keyCode : e.which;
        if (tecla == 8) return true;
        if (tecla == "0") { return true; };
        patron = /[A-Za-z0-9\-_.@]/;
        te = String.fromCharCode(tecla);
        return patron.test(te);
    });
	$(".lp_rut").keypress(function (e) {
		//VALID CHARS FOR CHILEAN ID
		tecla = (document.all) ? e.keyCode : e.which;
		if (tecla == 8) return true;
		if (tecla == "0") { return true; };
		patron = /[0-9kK\-]/;
		te = String.fromCharCode(tecla);
		return patron.test(te);
	});
}
/**********************************************
VALIDADOR KEYPRESS
**********************************************/