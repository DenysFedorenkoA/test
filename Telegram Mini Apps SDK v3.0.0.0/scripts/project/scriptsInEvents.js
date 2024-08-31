


const scriptsInEvents = {

	async EventSheet1_Event1_Act1(runtime, localVars)
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
		    const tDayData = await readFromCloudStorage('var');
		
		
		    runtime.globalVars.var = String(tDayData);
			runtime.globalVars.loadComplite=true;
		
		  } catch (err) {
		    console.error('Error retrieving data from CloudStorage:', err);
		  }
		}
		
		retrieveData();
	},

	async EventSheet1_Event7_Act1(runtime, localVars)
	{
		Telegram.WebApp.CloudStorage.setItem(localVars.key,localVars.data);
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

