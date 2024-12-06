const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.LostTelegramMiniAppsSDK,
		C3.Plugins.Text,
		C3.Plugins.Touch,
		C3.Plugins.LostTelegramMiniAppsSDK.Cnds.onCloudStorageLoaded,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Touch.Cnds.OnTouchObject,
		C3.Plugins.LostTelegramMiniAppsSDK.Acts.setItem
	];
};
self.C3_JsPropNameTable = [
	{TelegramMiniApps: 0},
	{Text: 0},
	{Touch: 0}
];

self.InstanceType = {
	TelegramMiniApps: class extends self.C3.Plugins.LostTelegramMiniAppsSDK.Instance {},
	Text: class extends self.ITextInstance {},
	Touch: class extends self.IInstance {}
}