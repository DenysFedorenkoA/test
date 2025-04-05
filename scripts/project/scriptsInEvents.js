

const scriptsInEvents = {

	async EventSheet1_Event11_Act1(runtime, localVars)
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
		    const tDayData = await readFromCloudStorage('save');
		
		
		    localVars.saveData = String(tDayData);
			runtime.signal("getDataCompleted");
		
		  } catch (err) {
		    console.error('Error retrieving data from CloudStorage:', err);
		  }
		}
		
		retrieveData();
	}
};

self.C3.ScriptsInEvents = scriptsInEvents;
