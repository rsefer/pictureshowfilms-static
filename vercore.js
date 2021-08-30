function detectFlash(){	

	if (navigator.plugins){	

		if (navigator.plugins["Shockwave Flash 2.0"]

		|| navigator.plugins["Shockwave Flash"]){

			var isVersion2 = navigator.plugins["Shockwave Flash 2.0"] ? " 2.0" : "";

			var flashDescription = navigator.plugins["Shockwave Flash" + isVersion2].description;

			var flashVersion = parseInt(flashDescription.charAt(flashDescription.indexOf(".") - 1));

			flash2Installed = flashVersion == 2;		

			flash3Installed = flashVersion == 3;

			flash4Installed = flashVersion == 4;

			flash5Installed = flashVersion == 5;

			flash6Installed = flashVersion == 6;

		}

	}	

	for (var i = 2; i <= maxVersion; i++) {	

		if (eval("flash" + i + "Installed") == true) actualVersion = i;

	}

	if(navigator.userAgent.indexOf("WebTV") != -1) actualVersion = 2;	

	 //alert("version detected: " + actualVersion);

	if (actualVersion >= requiredVersion) { 

		hasRightVersion = true;



		if (useRedirect) {

			if(jsVersion > 1.0) {

			window.open(flashPage,"mainpage","status=no,resizable=no,width=800,height=550,scrollbars=no");

				//window.location.replace(flashPage);

			} else {

			window.open(flashPage,"mainpage","status=no,resizable=no,width=800,height=550,scrollbars=no");

				//window.location = flashPage;

			}

		}

	} else {	// user doesn't have a new version.

		if (useRedirect) {

			if(jsVersion > 1.0) {

				window.location.replace((actualVersion >= 2) ? upgradePage : noFlashPage);

			} else {

				window.location = (actualVersion >= 2) ? upgradePage : noFlashPage;

			}

		}

	}

}

detectFlash();		