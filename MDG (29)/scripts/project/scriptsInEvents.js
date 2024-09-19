
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

	async EsHome_Event5_Act2(runtime, localVars)
	{
		window.Telegram.WebApp.openTelegramLink(runtime.globalVars.TGINVITEURL)
	},

	async EsHome_Event74_Act1(runtime, localVars)
	{
		window.Telegram.WebApp.openTelegramLink('https://t.me/gs_community')
	},

	async EsMain_Event5_Act1(runtime, localVars)
	{
		runtime.globalVars.language_code = user.language_code;
	},

	async EsMain_Event13_Act1(runtime, localVars)
	{
		Telegram.WebApp.CloudStorage.setItem(localVars.key,localVars.data);
	},

	async EsLoad_Event1_Act1(runtime, localVars)
	{
		window.Telegram.WebApp.ready()
	},

	async EsLoad_Event1_Act2(runtime, localVars)
	{
		window.Telegram.WebApp.expand()
	},

	async EsLoad_Event1_Act3(runtime, localVars)
	{
		window.Telegram.WebApp.enableClosingConfirmation()
	},

	async EsLoad_Event1_Act4(runtime, localVars)
	{
		window.Telegram.WebApp.disableVerticalSwipes()
	},

	async EsLoad_Event1_Act6(runtime, localVars)
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

	async EsLoad_Event4_Act1(runtime, localVars)
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
		    const gamePushID = await readFromCloudStorage('gamePushID');
		
		
		    runtime.globalVars.gamePushID = String(gamePushID);
			runtime.globalVars.loadComplite=true;
		
		  } catch (err) {
		    console.error('Error retrieving data from CloudStorage:', err);
		  }
		}
		
		retrieveData();
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

