


const scriptsInEvents = {

	async EventSheet1_Event7_Act1(runtime, localVars)
	{
		TMAds.init(runtime.globalVars.adsID); // Замените на ваш реальный ключ приложения
			console.log('Competed')
		// Включение режима отладки
			if(runtime.globalVars.adsDebug==true){
				TMAds.setDebugMode(true); 
			};
		    
		
	},

	async EventSheet1_Event9_Act1(runtime, localVars)
	{
		TMAds.checkInterstitialAd()
		  .then(()=>{
		    //interstitial ad preloaded
		  })
		  .catch(()=>{
		    //interstitial ad failed to preload (no fill, network issues etc)
		  });
	},

	async EventSheet1_Event10_Act1(runtime, localVars)
	{
		TMAds.showInterstitialAd()
		  .then(()=>{
		    //interstitial ad has been successfully shown and closed
		  })
		  .catch(()=>{
		    //interstitial ad failed to show (likely due to the network issues)
		  });
	},

	async EventSheet1_Event11_Act1(runtime, localVars)
	{
		TMAds.checkRewardedAd()
		  .then(()=>{
		    //rewarded ad preloaded
		  })
		  .catch(()=>{
		    //rewarded ad failed to preload (no fill, network issues etc)
		  });
		
	},

	async EventSheet1_Event12_Act1(runtime, localVars)
	{
		TMAds.showRewardedAd()
		  .then(()=>{
		    //rewarded ad has been successfully shown and closed, user should be rewarded
		  })
		  .catch(()=>{
		    //user decided to skip the rewarded ad, shouldn't be rewarded
		  });
	},

	async EventSheet1_Event13_Act1(runtime, localVars)
	{
		TMAds.show('bottom');
	},

	async EventSheet1_Event14_Act1(runtime, localVars)
	{
		TMAds.hide();
	},

	async EventSheet1_Event15_Act1(runtime, localVars)
	{
		window.Telegram.WebApp.openTelegramLink(runtime.globalVars.inviteURL)
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

