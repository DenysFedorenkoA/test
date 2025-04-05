const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.LostTelegramMiniAppsSDK,
		C3.Plugins.Text,
		C3.Plugins.Dictionary,
		C3.Plugins.Touch,
		C3.Plugins.Browser,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.Touch.Cnds.OnTapGesture,
		C3.Plugins.Dictionary.Cnds.HasKey,
		C3.Plugins.Dictionary.Acts.SetKey,
		C3.Plugins.Dictionary.Exps.Get,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.Dictionary.Acts.AddKey,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.LostTelegramMiniAppsSDK.Acts.setItem,
		C3.Plugins.Dictionary.Exps.AsJSON,
		C3.Plugins.LostTelegramMiniAppsSDK.Cnds.onItemSet,
		C3.Plugins.Browser.Acts.ConsoleLog,
		C3.Plugins.LostTelegramMiniAppsSDK.Cnds.onItemSetError,
		C3.Plugins.LostTelegramMiniAppsSDK.Cnds.onCloudStorageLoaded,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.LostTelegramMiniAppsSDK.Exps.CloudStorageValue,
		C3.Plugins.Dictionary.Acts.JSONLoad,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.ScriptsInEvents.EventSheet1_Event11_Act1,
		C3.Plugins.System.Exps.projectversion,
		C3.Plugins.System.Cnds.OnSignal
	];
};
self.C3_JsPropNameTable = [
	{TelegramMiniApps: 0},
	{Text: 0},
	{Dictionary: 0},
	{Touch: 0},
	{Browser: 0},
	{Text2: 0},
	{saveData: 0}
];

self.InstanceType = {
	TelegramMiniApps: class extends C3.Plugins.LostTelegramMiniAppsSDK.Instance {},
	Text: class extends self.ITextInstance {},
	Dictionary: class extends self.IDictionaryInstance {},
	Touch: class extends self.IInstance {},
	Browser: class extends self.IInstance {},
	Text2: class extends self.ITextInstance {}
}