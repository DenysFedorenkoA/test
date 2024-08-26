


const scriptsInEvents = {

	async Es_main_Event1_Act1(runtime, localVars)
	{
		document.cookie.split(';').forEach(cookie => {
			const eqPos = cookie.indexOf('=');
			const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
			document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
		
		});
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

