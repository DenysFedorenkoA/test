const Config = {AddonId: "LostTelegramMiniAppsSDK"};
const C3 = globalThis.C3;
C3.Plugins[Config.AddonId] = class LostPlugin extends globalThis.ISDKPluginBase {
    constructor() {
        super();
    }
};
