const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Text,
		C3.Plugins.Touch,
		C3.Plugins.Dictionary,
		C3.Plugins.LostTelegramMiniAppsSDK,
		C3.Plugins.LostTelegramPaymentsAPI,
		C3.Plugins.Sprite,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Exps.replace,
		C3.Plugins.System.Exps.projectname,
		C3.Plugins.System.Exps.int,
		C3.Plugins.LostTelegramMiniAppsSDK.Exps.CloudStorageValue,
		C3.Plugins.Dictionary.Acts.JSONLoad,
		C3.Plugins.Dictionary.Acts.AddKey,
		C3.Plugins.Text.Cnds.HasTags,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.LostTelegramMiniAppsSDK.Exps.UserId,
		C3.Plugins.LostTelegramMiniAppsSDK.Exps.UserFirstName,
		C3.Plugins.Dictionary.Exps.AsJSON,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.LostTelegramMiniAppsSDK.Acts.setItem,
		C3.Plugins.Touch.Cnds.OnTapGesture,
		C3.Plugins.Touch.Cnds.OnTouchObject,
		C3.Plugins.Sprite.Cnds.HasTags,
		C3.Plugins.LostTelegramPaymentsAPI.Acts.createInvoiceLink,
		C3.Plugins.LostTelegramPaymentsAPI.Cnds.onCreateInvoiceLinkSuccess,
		C3.Plugins.LostTelegramMiniAppsSDK.Acts.openInvoice,
		C3.Plugins.LostTelegramPaymentsAPI.Exps.GetLastInvoiceLink,
		C3.Plugins.Text.Acts.AppendText,
		C3.Plugins.LostTelegramPaymentsAPI.Cnds.onCreateInvoiceLinkError
	];
};
self.C3_JsPropNameTable = [
	{Text: 0},
	{Touch: 0},
	{Dictionary: 0},
	{Text2: 0},
	{TelegramMiniApps: 0},
	{TelegramPaymentsAPI: 0},
	{Sprite: 0},
	{price: 0},
	{score: 0},
	{scorePath: 0},
	{savePath: 0}
];

self.InstanceType = {
	Text: class extends self.ITextInstance {},
	Touch: class extends self.IInstance {},
	Dictionary: class extends self.IDictionaryInstance {},
	Text2: class extends self.ITextInstance {},
	TelegramMiniApps: class extends self.C3.Plugins.LostTelegramMiniAppsSDK.Instance {},
	TelegramPaymentsAPI: class extends self.C3.Plugins.LostTelegramPaymentsAPI.Instance {},
	Sprite: class extends self.ISpriteInstance {},
	price: class extends self.IDictionaryInstance {}
}