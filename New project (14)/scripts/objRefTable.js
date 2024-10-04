const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Text,
		C3.Plugins.Touch,
		C3.Plugins.Touch.Cnds.OnTouchObject,
		C3.Plugins.Sprite.Acts.StartAnim,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Sprite.Acts.StopAnim,
		C3.ScriptsInEvents.EventSheet1_Event6_Act4,
		C3.Plugins.Text.Cnds.CompareInstanceVar,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Exps.projectversion,
		C3.ScriptsInEvents.EventSheet1_Event8_Act1,
		C3.ScriptsInEvents.EventSheet1_Event9_Act1,
		C3.ScriptsInEvents.EventSheet1_Event10_Act1,
		C3.ScriptsInEvents.EventSheet1_Event11_Act1,
		C3.ScriptsInEvents.EventSheet1_Event12_Act1,
		C3.ScriptsInEvents.EventSheet1_Event13_Act1
	];
};
self.C3_JsPropNameTable = [
	{type: 0},
	{button: 0},
	{Text: 0},
	{Touch: 0},
	{adsID: 0},
	{adsDebug: 0}
];

self.InstanceType = {
	button: class extends self.ISpriteInstance {},
	Text: class extends self.ITextInstance {},
	Touch: class extends self.IInstance {}
}