const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.LostTelegramMiniAppsSDK,
		C3.Plugins.Text,
		C3.Plugins.Touch,
		C3.Plugins.LostTelegramMiniAppsSDK.Cnds.onCloudStorageLoaded,
		C3.Plugins.Text.Acts.AppendText,
		C3.Plugins.Touch.Cnds.OnTouchObject,
		C3.Plugins.LostTelegramMiniAppsSDK.Acts.setItem,
		C3.Plugins.LostTelegramMiniAppsSDK.Cnds.onItemSet,
		C3.Plugins.LostTelegramMiniAppsSDK.Cnds.onItemSetError,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.LostTelegramMiniAppsSDK.Exps.CloudStorageValue
	];
};
self.C3_JsPropNameTable = [
	{TelegramMiniApps: 0},
	{Text: 0},
	{Touch: 0},
	{Text2: 0}
];

self.InstanceType = {
	TelegramMiniApps: class extends self.C3.Plugins.LostTelegramMiniAppsSDK.Instance {},
	Text: class extends self.ITextInstance {},
	Touch: class extends self.IInstance {},
	Text2: class extends self.ITextInstance {}
}