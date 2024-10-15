const C3 = globalThis.C3;
const Config = {"SupportsWorkerMode":false,"CanBeBundled":false,"IsSingleGlobal":true,"ObjectName":"TelegramMiniApps","AddonId":"LostTelegramMiniAppsSDK","Type":"plugin","Category":"platform-specific","AddonName":"Telegram MiniApps SDK for Construct 3","AddonDescription":"Providing convenient access to the Telegram Mini Apps API.","Version":"5.1.0.0","Author":"lostinmind.","WebsiteURL":"https://t.me/tg_c3addons","DocsURL":"https://lost-2.gitbook.io/telegram-mini-apps-sdk-for-construct-3","Icon":{"FileName":"miniapps.svg","Type":"image/svg+xml"},"Scripts":[{"FileName":"telegram-web-app-7.10.js","Type":"external-dom-script"}]};
C3.Plugins[Config.AddonId] = class LPlugin extends globalThis.ISDKPluginBase {
    constructor() {
        super();
    }
};
