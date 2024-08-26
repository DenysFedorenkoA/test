const C3 = globalThis.C3;
class SingleGlobalInstance extends globalThis.ISDKInstanceBase {
    constructor() {
        super();
        this.isVerticalSwipesEnabled = false;
        this.isClosingConfirmationEnabled = false;
        this.isExpanded = false;
        this.scanQrPopupData = '';
        this.cloudStorageValues = [];
        this.PluginConditions = C3.Plugins.TelegramMiniAppsSDK.Cnds;
        const properties = this._getInitProperties();
        if (properties) {
            //@ts-ignore
            this.isExpanded = properties[0];
            if (this.isExpanded) {
                Telegram.WebApp.expand();
            }
            //@ts-ignore
            this.isClosingConfirmationEnabled = properties[1];
            if (this.isClosingConfirmationEnabled) {
                Telegram.WebApp.enableClosingConfirmation();
            }
            Telegram.WebApp.disableClosingConfirmation();
            //@ts-ignore
            this.isVerticalSwipesEnabled = properties[2];
            if (this.isVerticalSwipesEnabled) {
                Telegram.WebApp.enableVerticalSwipes();
            }
            Telegram.WebApp.disableVerticalSwipes();
        }
        Telegram.WebApp.ready();
        Telegram.WebApp.onEvent('backButtonClicked', () => {
            this._trigger(C3.Plugins.TelegramMiniAppsSDK.Cnds.OnClickBackButton);
        });
        Telegram.WebApp.onEvent('mainButtonClicked', () => {
            this._trigger(C3.Plugins.TelegramMiniAppsSDK.Cnds.OnClickMainButton);
        });
        Telegram.WebApp.onEvent('settingsButtonClicked', () => {
            this._trigger(C3.Plugins.TelegramMiniAppsSDK.Cnds.OnClickSettingsButton);
        });
    }
    _release() {
        super._release();
    }
    _getNumberFromBoolean(bool) {
        if (bool) {
            return 1;
        }
        return 0;
    }
    _isInTelegram() {
        if (typeof Telegram.WebApp.initDataUnsafe.user !== 'undefined') {
            return true;
        }
        else {
            return false;
        }
    }
}
;
C3.Plugins.TelegramMiniAppsSDK.Instance = SingleGlobalInstance;
// export {};
