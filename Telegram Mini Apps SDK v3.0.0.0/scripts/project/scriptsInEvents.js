
// Import any other script files here, e.g.:
// import * as myModule from "./mymodule.js";

runOnStartup(async runtime =>
{
	// Code to run on the loading screen.
	// Note layouts, objects etc. are not yet available.
	
	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
});

async function OnBeforeProjectStart(runtime)
{
	// Code to run just before 'On start of layout' on
	// the first layout. Loading has finished and initial
	// instances are created and available to use here.
	
	runtime.addEventListener("tick", () => Tick(runtime));
}

function Tick(runtime)
{
	// Code to run every tick
}
function abbreviateNumber(n) {
    if (n < 1e3) return n;
  if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "k";
  if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "m";
  if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "b";
  if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
}


const scriptsInEvents = {

	async Coin_Event3_Act1(runtime, localVars)
	{
		localVars.result = abbreviateNumber(localVars.num_coin)
	},

	async Homeevents_Event22_Act1(runtime, localVars)
	{
		window.Telegram.WebApp.close()
	},

	async Homeevents_Event23_Act1(runtime, localVars)
	{
		window.Telegram.WebApp.enableClosingConfirmation()
	},

	async Homeevents_Event25_Act1(runtime, localVars)
	{
		window.Telegram.WebApp.setHeaderColor('#aa2132') 
	},

	async Homeevents_Event26_Act1(runtime, localVars)
	{
		window.Telegram.WebApp.openLink('https://docs.telegram-mini-apps.com/')
	},

	async Homeevents_Event28_Act1(runtime, localVars)
	{
		window.Telegram.WebApp.showAlert('Привет!!!')
	},

	async Homeevents_Event29_Act1(runtime, localVars)
	{
		window.Telegram.WebApp.showConfirm('Хочешь сыграть?')
	},

	async Homeevents_Event30_Act1(runtime, localVars)
	{
		window.Telegram.WebApp.setBackgroundColor('#888311')
	},

	async Homeevents_Event31_Act1(runtime, localVars)
	{
		  const search = new URLSearchParams(decodeURIComponent(window.Telegram.WebApp.initData));
		  const user = JSON.parse(search.get('user'));
		console.log(user);
		runtime.globalVars.id = user.id;
		runtime.globalVars.first_name = user.first_name;
		runtime.globalVars.last_name = user.last_name;
		runtime.globalVars.language_code = user.language_code;
		runtime.globalVars.username = user.username;
	},

	async Homeevents_Event32_Act1(runtime, localVars)
	{
		window.Telegram.WebApp.MainButton.show()
	},

	async Homeevents_Event32_Act2(runtime, localVars)
	{
		window.Telegram.WebApp.BackButton.show()
	},

	async Homeevents_Event32_Act3(runtime, localVars)
	{
		window.Telegram.WebApp.SettingsButton.show()
	},

	async Homeevents_Event32_Act4(runtime, localVars)
	{
		window.Telegram.WebApp.CloseButton.hide()
	},

	async Homeevents_Event33_Act1(runtime, localVars)
	{
		window.Telegram.WebApp.initData
	},

	async Homeevents_Event33_Act2(runtime, localVars)
	{
		window.Telegram.WebApp.initDataUnsafe
	},

	async Homeevents_Event33_Act3(runtime, localVars)
	{
		window.Telegram.WebApp.version
	},

	async Homeevents_Event33_Act4(runtime, localVars)
	{
		window.Telegram.WebApp.initDataUnsafe.user.id
	},

	async Homeevents_Event33_Act5(runtime, localVars)
	{
		window.Telegram.WebApp.initDataUnsafe.user.isBot
	},

	async Homeevents_Event34_Act1(runtime, localVars)
	{
		window.Telegram.WebApp.platform
	},

	async Homeevents_Event34_Act2(runtime, localVars)
	{
		window.Telegram.WebApp.colorScheme
	},

	async Homeevents_Event34_Act3(runtime, localVars)
	{
		window.Telegram.WebApp.themeParams
	},

	async Homeevents_Event34_Act4(runtime, localVars)
	{
		window.Telegram.WebApp.isExpanded
	},

	async Homeevents_Event34_Act5(runtime, localVars)
	{
		window.Telegram.WebApp.viewportHeight
	},

	async Homeevents_Event34_Act6(runtime, localVars)
	{
		window.Telegram.WebApp.viewportStableHeight
	},

	async Homeevents_Event34_Act7(runtime, localVars)
	{
		window.Telegram.WebApp.headerColor
	},

	async Homeevents_Event34_Act8(runtime, localVars)
	{
		window.Telegram.WebApp.backgroundColor
	},

	async Homeevents_Event34_Act9(runtime, localVars)
	{
		window.Telegram.WebApp.isClosingConfirmationEnabled
	},

	async Homeevents_Event34_Act10(runtime, localVars)
	{
		window.Telegram.WebApp.BackButton
	},

	async Homeevents_Event34_Act11(runtime, localVars)
	{
		window.Telegram.WebApp.MainButton
	},

	async Homeevents_Event34_Act12(runtime, localVars)
	{
		window.Telegram.WebApp.SettingsButton
	},

	async Homeevents_Event34_Act13(runtime, localVars)
	{
		window.Telegram.WebApp.HapticFeedback
	},

	async Homeevents_Event34_Act14(runtime, localVars)
	{
		window.Telegram.WebApp.CloudStorage
	},

	async Homeevents_Event34_Act15(runtime, localVars)
	{
		window.Telegram.WebApp.BiometricManager 
	},

	async Homeevents_Event34_Act16(runtime, localVars)
	{
		window.Telegram.WebApp.isVersionAtLeast(version) 
	},

	async Homeevents_Event34_Act17(runtime, localVars)
	{
		window.Telegram.WebApp.onEvent(eventType, eventHandler)
	},

	async Homeevents_Event34_Act18(runtime, localVars)
	{
		window.Telegram.WebApp.offEvent(eventType, eventHandler)
	},

	async Homeevents_Event34_Act19(runtime, localVars)
	{
		window.Telegram.WebApp.sendData(data)
	},

	async Homeevents_Event34_Act20(runtime, localVars)
	{
		window.Telegram.WebApp.switchInlineQuery(query[ choose_chat_types])
	},

	async Homeevents_Event34_Act21(runtime, localVars)
	{
		window.Telegram.WebApp.openInvoice(url[ callback])
	},

	async Homeevents_Event34_Act22(runtime, localVars)
	{
		window.Telegram.WebApp.showPopup(params[ callback])
	},

	async Homeevents_Event34_Act23(runtime, localVars)
	{
		window.Telegram.WebApp.showScanQrPopup("test3"[ callback])
	},

	async Homeevents_Event34_Act24(runtime, localVars)
	{
		window.Telegram.WebApp.closeScanQrPopup()
	},

	async Homeevents_Event34_Act25(runtime, localVars)
	{
		window.Telegram.WebApp.readTextFromClipboard([callback])        
	},

	async Homeevents_Event34_Act26(runtime, localVars)
	{
		window.Telegram.WebApp.requestWriteAccess([callback])
	},

	async Homeevents_Event34_Act27(runtime, localVars)
	{
		window.Telegram.WebApp.PopupButton.type('OK')
	},

	async Homeevents_Event40(runtime, localVars)
	{
		window.Telegram.WebApp.onEvent('mainButtonClicked', function(){
			window.Telegram.WebApp.sendData("yes1");});
	},

	async Homeevents_Event41(runtime, localVars)
	{
		window.Telegram.WebApp.onEvent('backButtonClicked', function(){
			window.Telegram.WebApp.sendData("yes2");});
	},

	async Homeevents_Event42(runtime, localVars)
	{
		window.Telegram.WebApp.onEvent('settingsButtonClicked', function(){
			window.Telegram.WebApp.sendData("yes3");});
	},

	async Homeevents_Event43(runtime, localVars)
	{
		window.Telegram.WebApp.onEvent('popupClosed', function(){
			window.Telegram.WebApp.sendData("yes4");});
	},

	async Homeevents_Event74_Act1(runtime, localVars)
	{
		window.Telegram.WebApp.ready()
	},

	async Homeevents_Event74_Act2(runtime, localVars)
	{
		window.Telegram.WebApp.expand()
	},

	async Homeevents_Event74_Act3(runtime, localVars)
	{
		window.Telegram.WebApp.enableClosingConfirmation()
	},

	async Homeevents_Event74_Act4(runtime, localVars)
	{
		window.Telegram.WebApp.disableVerticalSwipes()
	},

	async Homeevents_Event74_Act6(runtime, localVars)
	{
		  const search = new URLSearchParams(decodeURIComponent(window.Telegram.WebApp.initData));
		  console.log(search);
		  const user = JSON.parse(search.get('user'));
		console.log(user);
		runtime.globalVars.id = user.id;
		runtime.globalVars.first_name = user.first_name;
		runtime.globalVars.last_name = user.last_name;
		runtime.globalVars.language_code = user.language_code;
		runtime.globalVars.username = user.username;
		// runtime.globalVars.Start_param = user.start;
		//   const start_param = JSON.parse(search.get('startapp'));
		// console.log(start_param);
		// runtime.globalVars.Start_param = window.Telegram.WebApp.initDataUnsafe.start_param;
		runtime.globalVars.Start_param = decodeURIComponent(window.Telegram.WebApp.initDataUnsafe.start_param);
		console.log(runtime.globalVars.Start_param);
	},

	async Homeevents_Event122_Act7(runtime, localVars)
	{
		window.Telegram.WebApp.openTelegramLink(runtime.globalVars.TGINVITEURL)
	},

	async Homeevents_Event141_Act1(runtime, localVars)
	{
		window.Telegram.WebApp.openTelegramLink('https://t.me/gs_community')
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

