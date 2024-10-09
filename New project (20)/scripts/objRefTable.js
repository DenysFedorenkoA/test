const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Plugins.Browser,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Browser.Acts.SetWindowSize
	];
};
self.C3_JsPropNameTable = [
	{TiledBackground: 0},
	{Browser: 0}
];

self.InstanceType = {
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	Browser: class extends self.IInstance {}
}