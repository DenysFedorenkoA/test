


const scriptsInEvents = {

	async EventSheet1_Event4_Act3(runtime, localVars)
	{
		window.onload = function() {
		  if (typeof TMAds !== 'undefined' && typeof Telegram !== 'undefined') {
		    TMAds.init(runtime.globalVars.adsID); // Замените на ваш реальный ключ приложения
		// Включение режима отладки
			if(runtime.globalVars.adsDebug==true){
				TMAds.setDebugMode(true); 
			}
		    
		  } else {
		    console.error('TMAds или Telegram SDK не загружен!');
		  }
		};
	},

	async EventSheet1_Event5_Act1(runtime, localVars)
	{
		TMAds.showInterstitialAd()
		  .then(()=>{
		    //interstitial ad has been successfully shown and closed
		  })
		  .catch(()=>{
		    //interstitial ad failed to show (likely due to the network issues)
		  });
	},

	async EventSheet1_Event6_Act1(runtime, localVars)
	{
		TMAds.showRewardedAd()
		  .then(()=>{
		    //rewarded ad has been successfully shown and closed, user should be rewarded
		  })
		  .catch(()=>{
		    //user decided to skip the rewarded ad, shouldn't be rewarded
		  });
	},

	async EventSheet1_Event7_Act1(runtime, localVars)
	{
		TMAds.show('bottom');
	},

	async EventSheet1_Event8_Act1(runtime, localVars)
	{
		TMAds.hide();
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

