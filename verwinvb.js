// windows

var isIE = (navigator.appVersion.indexOf("MSIE") != -1) ? true : false;

var isWin = (navigator.appVersion.indexOf("Windows") != -1) ? true : false;

jsVersion = 1.1;

// if not on mac.

if(isIE && isWin){

	document.write('<SCR' + 'IPT LANGUAGE=VBScript\> \n');

	document.write('on error resume next \n');

	document.write('flash2Installed = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.2"))) \n');

	document.write('flash3Installed = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.3"))) \n');

	document.write('flash4Installed = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.4"))) \n');

	document.write('flash5Installed = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.5"))) \n');

	document.write('flash6Installed = (IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.6"))) \n');	

	document.write('</SCR' + 'IPT\> \n');

}