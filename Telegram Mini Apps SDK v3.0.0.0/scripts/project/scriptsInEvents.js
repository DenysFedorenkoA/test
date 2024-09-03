
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

	async EsCoin_Event3_Act1(runtime, localVars)
	{
		localVars.result = abbreviateNumber(localVars.num_coin)
	},

	async EsMain_Event47_Act1(runtime, localVars)
	{
		Telegram.WebApp.CloudStorage.setItem(localVars.key,localVars.data);
	},

	async EsMain_Event56_Act1(runtime, localVars)
	{
		async function readFromCloudStorage(key) {
		  return new Promise((resolve, reject) => {
		    Telegram.WebApp.CloudStorage.getItem(key, (err, data) => {
		      if (err) {
		        reject(err);
		      } else {
		        resolve(data);
		      }
		    });
		  });
		}
		
		async function retrieveData() {
		  try {
		    const varData = await readFromCloudStorage('varData');
			const gameVar = await readFromCloudStorage('gameVar');
			const gameSave = await readFromCloudStorage('gameSave');
		
		    runtime.globalVars.varData = String(varData);
			runtime.globalVars.gameVar = String(gameVar);
			runtime.globalVars.gameSave = String(gameSave);
			runtime.globalVars.loadComplite=true;
		
		  } catch (err) {
		    console.error('Error retrieving data from CloudStorage:', err);
		  }
		}
		
		retrieveData();
	},

	async EsHomeevents_Event20_Act1(runtime, localVars)
	{
		window.Telegram.WebApp.close()
	},

	async EsHomeevents_Event21_Act1(runtime, localVars)
	{
		window.Telegram.WebApp.enableClosingConfirmation()
	},

	async EsHomeevents_Event23_Act1(runtime, localVars)
	{
		window.Telegram.WebApp.setHeaderColor('#aa2132') 
	},

	async EsHomeevents_Event24_Act1(runtime, localVars)
	{
		window.Telegram.WebApp.openLink('https://docs.telegram-mini-apps.com/')
	},

	async EsHomeevents_Event26_Act1(runtime, localVars)
	{
		window.Telegram.WebApp.showAlert('Привет!!!')
	},

	async EsHomeevents_Event27_Act1(runtime, localVars)
	{
		window.Telegram.WebApp.showConfirm('Хочешь сыграть?')
	},

	async EsHomeevents_Event28_Act1(runtime, localVars)
	{
		window.Telegram.WebApp.setBackgroundColor('#888311')
	},

	async EsHomeevents_Event29_Act1(runtime, localVars)
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

	async EsHomeevents_Event30_Act1(runtime, localVars)
	{
		window.Telegram.WebApp.MainButton.show()
	},

	async EsHomeevents_Event30_Act2(runtime, localVars)
	{
		window.Telegram.WebApp.BackButton.show()
	},

	async EsHomeevents_Event30_Act3(runtime, localVars)
	{
		window.Telegram.WebApp.SettingsButton.show()
	},

	async EsHomeevents_Event30_Act4(runtime, localVars)
	{
		window.Telegram.WebApp.CloseButton.hide()
	},

	async EsHomeevents_Event31_Act1(runtime, localVars)
	{
		window.Telegram.WebApp.initData
	},

	async EsHomeevents_Event31_Act2(runtime, localVars)
	{
		window.Telegram.WebApp.initDataUnsafe
	},

	async EsHomeevents_Event31_Act3(runtime, localVars)
	{
		window.Telegram.WebApp.version
	},

	async EsHomeevents_Event31_Act4(runtime, localVars)
	{
		window.Telegram.WebApp.initDataUnsafe.user.id
	},

	async EsHomeevents_Event31_Act5(runtime, localVars)
	{
		window.Telegram.WebApp.initDataUnsafe.user.isBot
	},

	async EsHomeevents_Event32_Act1(runtime, localVars)
	{
		window.Telegram.WebApp.platform
	},

	async EsHomeevents_Event32_Act2(runtime, localVars)
	{
		window.Telegram.WebApp.colorScheme
	},

	async EsHomeevents_Event32_Act3(runtime, localVars)
	{
		window.Telegram.WebApp.themeParams
	},

	async EsHomeevents_Event32_Act4(runtime, localVars)
	{
		window.Telegram.WebApp.isExpanded
	},

	async EsHomeevents_Event32_Act5(runtime, localVars)
	{
		window.Telegram.WebApp.viewportHeight
	},

	async EsHomeevents_Event32_Act6(runtime, localVars)
	{
		window.Telegram.WebApp.viewportStableHeight
	},

	async EsHomeevents_Event32_Act7(runtime, localVars)
	{
		window.Telegram.WebApp.headerColor
	},

	async EsHomeevents_Event32_Act8(runtime, localVars)
	{
		window.Telegram.WebApp.backgroundColor
	},

	async EsHomeevents_Event32_Act9(runtime, localVars)
	{
		window.Telegram.WebApp.isClosingConfirmationEnabled
	},

	async EsHomeevents_Event32_Act10(runtime, localVars)
	{
		window.Telegram.WebApp.BackButton
	},

	async EsHomeevents_Event32_Act11(runtime, localVars)
	{
		window.Telegram.WebApp.MainButton
	},

	async EsHomeevents_Event32_Act12(runtime, localVars)
	{
		window.Telegram.WebApp.SettingsButton
	},

	async EsHomeevents_Event32_Act13(runtime, localVars)
	{
		window.Telegram.WebApp.HapticFeedback
	},

	async EsHomeevents_Event32_Act14(runtime, localVars)
	{
		window.Telegram.WebApp.CloudStorage
	},

	async EsHomeevents_Event32_Act15(runtime, localVars)
	{
		window.Telegram.WebApp.BiometricManager 
	},

	async EsHomeevents_Event32_Act16(runtime, localVars)
	{
		window.Telegram.WebApp.isVersionAtLeast(version) 
	},

	async EsHomeevents_Event32_Act17(runtime, localVars)
	{
		window.Telegram.WebApp.onEvent(eventType, eventHandler)
	},

	async EsHomeevents_Event32_Act18(runtime, localVars)
	{
		window.Telegram.WebApp.offEvent(eventType, eventHandler)
	},

	async EsHomeevents_Event32_Act19(runtime, localVars)
	{
		window.Telegram.WebApp.sendData(data)
	},

	async EsHomeevents_Event32_Act20(runtime, localVars)
	{
		window.Telegram.WebApp.switchInlineQuery(query[ choose_chat_types])
	},

	async EsHomeevents_Event32_Act21(runtime, localVars)
	{
		window.Telegram.WebApp.openInvoice(url[ callback])
	},

	async EsHomeevents_Event32_Act22(runtime, localVars)
	{
		window.Telegram.WebApp.showPopup(params[ callback])
	},

	async EsHomeevents_Event32_Act23(runtime, localVars)
	{
		window.Telegram.WebApp.showScanQrPopup("test3"[ callback])
	},

	async EsHomeevents_Event32_Act24(runtime, localVars)
	{
		window.Telegram.WebApp.closeScanQrPopup()
	},

	async EsHomeevents_Event32_Act25(runtime, localVars)
	{
		window.Telegram.WebApp.readTextFromClipboard([callback])        
	},

	async EsHomeevents_Event32_Act26(runtime, localVars)
	{
		window.Telegram.WebApp.requestWriteAccess([callback])
	},

	async EsHomeevents_Event32_Act27(runtime, localVars)
	{
		window.Telegram.WebApp.PopupButton.type('OK')
	},

	async EsHomeevents_Event38(runtime, localVars)
	{
		window.Telegram.WebApp.onEvent('mainButtonClicked', function(){
			window.Telegram.WebApp.sendData("yes1");});
	},

	async EsHomeevents_Event39(runtime, localVars)
	{
		window.Telegram.WebApp.onEvent('backButtonClicked', function(){
			window.Telegram.WebApp.sendData("yes2");});
	},

	async EsHomeevents_Event40(runtime, localVars)
	{
		window.Telegram.WebApp.onEvent('settingsButtonClicked', function(){
			window.Telegram.WebApp.sendData("yes3");});
	},

	async EsHomeevents_Event41(runtime, localVars)
	{
		window.Telegram.WebApp.onEvent('popupClosed', function(){
			window.Telegram.WebApp.sendData("yes4");});
	},

	async EsHomeevents_Event46_Act1(runtime, localVars)
	{
		window.Telegram.WebApp.ready()
	},

	async EsHomeevents_Event46_Act2(runtime, localVars)
	{
		window.Telegram.WebApp.expand()
	},

	async EsHomeevents_Event46_Act3(runtime, localVars)
	{
		window.Telegram.WebApp.enableClosingConfirmation()
	},

	async EsHomeevents_Event46_Act4(runtime, localVars)
	{
		window.Telegram.WebApp.disableVerticalSwipes()
	},

	async EsHomeevents_Event46_Act6(runtime, localVars)
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

	async EsHomeevents_Event88_Act7(runtime, localVars)
	{
		window.Telegram.WebApp.openTelegramLink(runtime.globalVars.TGINVITEURL)
	},

	async EsHomeevents_Event107_Act1(runtime, localVars)
	{
		window.Telegram.WebApp.openTelegramLink('https://t.me/gs_community')
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

