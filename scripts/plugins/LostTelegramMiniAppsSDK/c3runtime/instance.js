const Config = {AddonId: "LostTelegramMiniAppsSDK"};
const C3 = globalThis.C3;
const ButtonPositions = ['left', 'right', 'top', 'bottom'];
class AppData {
    constructor() {
        this.invoicesStatus = [];
        this.biometricToken = '';
        this.qrTextReceived = '';
        this.cloudStorage = null;
        this.phoneNumberShared = false;
        this.requestWriteAccess = { accessGranted: false };
        this.showConfirm = { okPressed: false };
        this.showPopup = { id: '' };
        this.lastChatMemberUserStatus = '';
        this.currentInvoiceId = '';
        this.locationInfo = null;
        this.popupButtons = [];
    }
    ;
}
class LostInstance extends globalThis.ISDKInstanceBase {
    constructor() {
        super();
        this.WebApp = Telegram.WebApp;
        this.PluginConditions = C3.Plugins[Config.AddonId].Cnds;
        this.data = new AppData();
        const properties = this._getInitProperties();
        (() => {
            console.log(properties);
            this.isFullscreenOnStart = properties[0];
            this.expandOnStart = properties[1];
            this.readyOnStart = properties[2];
            if (this.readyOnStart)
                this.WebApp.ready();
            this.enableVerticalSwipes = properties[3];
            this.enableClosingConfirmation = properties[4];
            this.backgroundColor = properties[5];
            this.headerColor = properties[6];
            this.bottomBarColor = properties[7];
            /**
             * Main Button
             */
            this.isMainButtonActive = properties[8];
            this.isMainButtonVisible = properties[9];
            this.mainButtonColor = properties[10];
            this.mainButtonText = properties[11];
            this.mainButtonTextColor = properties[12];
            this.isMainButtonHasShineEffect = properties[13];
            /**
             * Secondary Button
             */
            this.isSecondaryButtonActive = properties[14];
            this.isSecondaryButtonVisible = properties[15];
            this.secondaryButtonColor = properties[16];
            this.secondaryButtonText = properties[17];
            this.secondaryButtonTextColor = properties[18];
            this.isSecondaryButtonHasShineEffect = properties[19];
            this.secondaryButtonPosition = ButtonPositions[properties[20]];
        })();
        this.setup();
    }
    _release() {
        super._release();
    }
    _getTelegramUser() {
        const user = this.WebApp.initDataUnsafe.user;
        return (user) ? user : null;
    }
    _isInTelegram() {
        const user = this._getTelegramUser();
        return (user === null) ? false : true;
    }
    async _getChatMember(botAPIToken, chatId, userId) {
        const url = `https://api.telegram.org/bot${botAPIToken}/getChatMember`;
        const params = new URLSearchParams({
            chat_id: String(chatId),
            user_id: String(userId)
        });
        try {
            const response = await fetch(`${url}?${params.toString()}`);
            const data = await response.json();
            if (data.ok) {
                const status = data.result.status;
                this.data.lastChatMemberUserStatus = status;
                if (status === 'creator' ||
                    status === 'administrator' ||
                    status === 'member') {
                    this._trigger(this.PluginConditions.onGetChatMember);
                }
                else {
                    this._trigger(this.PluginConditions.onGetChatMemberError);
                }
            }
            else {
                this._trigger(this.PluginConditions.onGetChatMemberError);
            }
        }
        catch (error) {
            this._trigger(this.PluginConditions.onGetChatMemberError);
        }
    }
    _loadCloudStorage() {
        if (this._isInTelegram()) {
            this.WebApp.CloudStorage.getKeys((error, keys) => {
                if (!error && keys !== null) {
                    this.WebApp.CloudStorage.getItems(keys, (error, values) => {
                        if (!error) {
                            this.data.cloudStorage = values;
                        }
                    });
                }
            });
        }
    }
    addEventHandlers() {
        /**
         * Other
         */
        this.WebApp.onEvent('themeChanged', () => this._trigger(this.PluginConditions.onThemeChanged));
        this.WebApp.onEvent('viewportChanged', ({ isStateStable }) => this._trigger(this.PluginConditions.onViewportChanged(isStateStable)));
        this.WebApp.onEvent('popupClosed', ({ button_id }) => {
            if (button_id === null)
                this._trigger(this.PluginConditions.onPopupClosed);
        });
        this.WebApp.onEvent('qrTextReceived', ({ data }) => {
            this.data.qrTextReceived = data;
            if (data !== '')
                this._trigger(this.PluginConditions.onQrTextRecieved);
        });
        this.WebApp.onEvent('scanQrPopupClosed', () => this._trigger(this.PluginConditions.onScanQrPopupClosed));
        this.WebApp.onEvent('writeAccessRequested', ({ status }) => {
            if (status === 'allowed')
                this._trigger(this.PluginConditions.onWriteAccessAllowed);
            if (status === 'cancelled')
                this._trigger(this.PluginConditions.onWriteAccessCancelled);
        });
        this.WebApp.onEvent('contactRequested', ({ status }) => {
            if (status === 'sent')
                this._trigger(this.PluginConditions.onContactRequestSent);
            if (status === 'cancelled')
                this._trigger(this.PluginConditions.onContactRequestCancelled);
        });
        /**
         * Biometric Manager
         */
        this.WebApp.onEvent('biometricManagerUpdated', () => {
            this._trigger(this.PluginConditions.onBMUpdated);
        });
        this.WebApp.onEvent('biometricAuthRequested', (params) => {
            if (params.isAuthenticated) {
                this.data.biometricToken = (params.biometricToken) ? params.biometricToken : '';
            }
        });
        // this.WebApp.onEvent('biometricTokenUpdated', (isUpdated) => {
        // })
        /**
         * Buttons
         */
        this.WebApp.onEvent('backButtonClicked', () => this._trigger(this.PluginConditions.onBackButtonClicked));
        this.WebApp.onEvent('secondaryButtonClicked', () => this._trigger(this.PluginConditions.onSecondaryButtonClicked));
        this.WebApp.onEvent('settingsButtonClicked', () => this._trigger(this.PluginConditions.onSettingsButtonClicked));
        this.WebApp.onEvent('mainButtonClicked', () => this._trigger(this.PluginConditions.onMainButtonClicked));
        /**
         * Other
         */
        this.WebApp.onEvent('homeScreenAdded', () => this._trigger(this.PluginConditions.onAddedToHomeScreen));
        /**
         * Invoice
         */
        this.WebApp.onEvent('invoiceClosed', ({ status }) => {
            switch (status) {
                case 'pending':
                    this._trigger(this.PluginConditions.onInvoicePending);
                    break;
                case 'paid':
                    this._trigger(this.PluginConditions.onInvoicePaid);
                    break;
                case 'cancelled':
                    this._trigger(this.PluginConditions.onInvoiceCancelled);
                    break;
                case 'failed':
                    this._trigger(this.PluginConditions.onInvoiceFailed);
                    break;
                default:
                    this._trigger(this.PluginConditions.onInvoiceError);
                    break;
            }
        });
    }
    setup() {
        this.addEventHandlers();
        this._loadCloudStorage();
        /** Fullscreen */
        if (this.isFullscreenOnStart && this._isInTelegram()) {
            this.WebApp.requestFullscreen();
        }
        /** Expand */
        if (this.expandOnStart) {
            this.WebApp.expand();
        }
        /** Vertical swipes */
        if (this.enableVerticalSwipes) {
            this.WebApp.enableVerticalSwipes();
        }
        else {
            this.WebApp.disableVerticalSwipes();
        }
        /** Closing confirmarion */
        if (this.enableClosingConfirmation) {
            this.WebApp.enableClosingConfirmation();
        }
        else {
            this.WebApp.disableClosingConfirmation();
        }
        /** Theme */
        this.WebApp.setBackgroundColor(this.rgbToHex(this.backgroundColor));
        this.WebApp.setHeaderColor(this.rgbToHex(this.headerColor));
        this.WebApp.setBottomBarColor(this.rgbToHex(this.bottomBarColor));
        this.WebApp.MainButton.setParams({
            text: this.mainButtonText,
            color: this.rgbToHex(this.mainButtonColor),
            text_color: this.rgbToHex(this.mainButtonTextColor),
            has_shine_effect: this.isMainButtonHasShineEffect,
            is_active: this.isMainButtonActive,
            is_visible: this.isMainButtonVisible
        });
        this.WebApp.SecondaryButton.setParams({
            text: this.secondaryButtonText,
            color: this.rgbToHex(this.secondaryButtonColor),
            text_color: this.rgbToHex(this.secondaryButtonTextColor),
            has_shine_effect: this.isSecondaryButtonHasShineEffect,
            position: this.secondaryButtonPosition,
            is_active: this.isSecondaryButtonActive,
            is_visible: this.isSecondaryButtonVisible
        });
    }
    rgbToHex(rgb) {
        // Убедимся, что значения в диапазоне от 0 до 1
        const clampedRgb = rgb.map(x => Math.max(0, Math.min(1, x)));
        // Преобразуем значения в диапазоне от 0 до 255 и форматируем в шестнадцатеричный вид
        const hexColor = '#' + clampedRgb
            .map(x => Math.round(x * 255) // Умножаем на 255 и округляем
            .toString(16).padStart(2, '0')) // Преобразуем в шестнадцатеричный формат
            .join('');
        return hexColor.toUpperCase(); // Возвращаем в верхнем регистре
    }
}
;
C3.Plugins[Config.AddonId].Instance = LostInstance;
export {};
