


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
			runtime.globalVars.qwe = 1;
			runtime.globalVars.loadComplite=true;
		
		  } catch (err) {
		    console.error('Error retrieving data from CloudStorage:', err);
		  }
		}
		
		retrieveData();
	},

	async EventSheet1_Event7_Act1(runtime, localVars)
	{
		// Инициализация Telegram Web App
		const tg = window.Telegram.WebApp;
		
		// Функция для открытия счета (инвойса)
		function showInvoice() {
		    const invoicePayload = {
		        currency: "USD", // Валюта (например, USD)
		        total_amount: 5000, // Сумма в минимальных единицах (5000 = 50.00 долларов)
		        description: "Product Purchase", // Описание продукта или услуги
		        payload: "unique_payload", // Уникальный идентификатор счета
		    };
		
		    // Открыть инвойс для оплаты
		    tg.openInvoice(invoicePayload);
		}
		
		// Вызов функции для отображения счета
		showInvoice();
	},

	async EventSheet1_Event8_Act1(runtime, localVars)
	{
		Telegram.WebApp.CloudStorage.setItem(localVars.key,localVars.data);
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

