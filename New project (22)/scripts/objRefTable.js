const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Text,
		C3.Plugins.Touch,
		C3.Plugins.Dictionary,
		C3.Plugins.Sprite,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.ScriptsInEvents.EventSheet1_Event1_Act1,
		C3.Plugins.System.Cnds.CompareBoolVar,
		C3.Plugins.Dictionary.Acts.JSONLoad,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Dictionary.Exps.AsJSON,
		C3.Plugins.System.Acts.SetBoolVar,
		C3.Plugins.Touch.Cnds.OnTapGesture,
		C3.Plugins.Dictionary.Cnds.HasKey,
		C3.Plugins.Dictionary.Acts.SetKey,
		C3.Plugins.Dictionary.Exps.Get,
		C3.Plugins.Dictionary.Acts.AddKey,
		C3.ScriptsInEvents.EventSheet1_Event7_Act1,
		C3.ScriptsInEvents.EventSheet1_Event8_Act1,
		C3.Plugins.Touch.Cnds.OnTouchObject
	];
};
self.C3_JsPropNameTable = [
	{Text: 0},
	{Touch: 0},
	{saveVariable: 0},
	{Sprite: 0},
	{Text2: 0},
	{var: 0},
	{loadComplite: 0},
	{qwe: 0},
	{key: 0},
	{data: 0}
];

self.InstanceType = {
	Text: class extends self.ITextInstance {},
	Touch: class extends self.IInstance {},
	saveVariable: class extends self.IDictionaryInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Text2: class extends self.ITextInstance {}
}