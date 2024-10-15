const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TelegramMiniAppsSDK,
		C3.Plugins.Text,
		C3.Plugins.Touch,
		C3.Plugins.Dictionary,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Exps.projectname,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.TelegramMiniAppsSDK.Exps.UserId,
		C3.Plugins.TelegramMiniAppsSDK.Exps.UserFirstName,
		C3.Plugins.TelegramMiniAppsSDK.Exps.CloudStorageValue,
		C3.Plugins.System.Exps.int,
		C3.Plugins.Dictionary.Acts.JSONLoad,
		C3.Plugins.Text.Cnds.HasTags,
		C3.Plugins.Dictionary.Exps.AsJSON,
		C3.Plugins.Touch.Cnds.OnTapGesture,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Dictionary.Acts.AddKey,
		C3.Plugins.TelegramMiniAppsSDK.Acts.CloudStorageSetItem
	];
};
self.C3_JsPropNameTable = [
	{TelegramMiniAppsSDK: 0},
	{Text: 0},
	{Touch: 0},
	{Dictionary: 0},
	{Text2: 0},
	{score: 0},
	{scorePath: 0},
	{savePath: 0}
];

self.InstanceType = {
	TelegramMiniAppsSDK: class extends self.C3.Plugins.TelegramMiniAppsSDK.Instance {},
	Text: class extends self.ITextInstance {},
	Touch: class extends self.IInstance {},
	Dictionary: class extends self.IDictionaryInstance {},
	Text2: class extends self.ITextInstance {}
}