const C3 = globalThis.C3;
function getStyleByIndex(styleIndex) {
    const styles = ["light", "medium", "heavy", "rigid", "soft"];
    return styles[styleIndex];
}
function getTypeByIndex(typeIndex) {
    const types = ["error", "success", "warning"];
    return types[typeIndex];
}
C3.Plugins.TelegramMiniAppsSDK.Acts =
    {
        /**
         *
         * @author Buttons
         * @alias buttons
         */
        /**
         * @author Back Button
         */
        HideBackButton() { Telegram.WebApp.BackButton.hide(); },
        ShowBackButton() { Telegram.WebApp.BackButton.show(); },
        /**
         * @author Main Button
         */
        DisableMainButton() { Telegram.WebApp.MainButton.disable(); },
        EnableMainButton() { Telegram.WebApp.MainButton.enable(); },
        HideMainButton() { Telegram.WebApp.MainButton.hide(); },
        ShowMainButton() { Telegram.WebApp.MainButton.show(); },
        SetMainButtonColor(color = '#RRGGBB') { Telegram.WebApp.MainButton.color = color; },
        SetMainButtonText(text) { Telegram.WebApp.MainButton.setText(text); },
        SetMainButtonTextColor(color = '#RRGGBB') { Telegram.WebApp.MainButton.textColor = color; },
        ShowMainButtonProgress(leaveActive) { Telegram.WebApp.MainButton.showProgress(leaveActive); },
        HideMainButtonProgress() { Telegram.WebApp.MainButton.hideProgress(); },
        /**
         * @author Settings Button
         */
        HideSettingsButton() { Telegram.WebApp.SettingsButton.hide(); },
        ShowSettingsButton() { Telegram.WebApp.SettingsButton.show(); },
        /**
         *
         * @author Biometric Manager
         * @alias biometric-manager
         */
        InitBiometricManager() {
            Telegram.WebApp.BiometricManager.init(async () => {
                //@ts-ignore
                await this.TriggerAsync(this.PluginConditions.OnBiometricManagerInited);
            });
        },
        AuthenticateBiometricManager(reason) {
            Telegram.WebApp.BiometricManager.authenticate({
                reason: reason
            }, async (isAuthenticated) => {
                if (isAuthenticated) {
                    await this._triggerAsync(this.PluginConditions.OnBiometricAuthenticateSuccess);
                }
                else {
                    await this._triggerAsync(this.PluginConditions.OnBiometricAuthenticateError);
                }
            });
        },
        OpenSettingsBiometricManager() { Telegram.WebApp.BiometricManager.openSettings(); },
        RequestAccessBiometricManager(reason) {
            Telegram.WebApp.BiometricManager.requestAccess({
                reason: reason
            }, async (isAccessGranted) => {
                if (isAccessGranted) {
                    await this._triggerAsync(this.PluginConditions.OnBiometricAccessGranted);
                }
                else {
                    await this._triggerAsync(this.PluginConditions.OnBiometricAccessDeclined);
                }
            });
        },
        UpdateBiometricToken(token) {
            Telegram.WebApp.BiometricManager.updateBiometricToken(token, async (isBiometricTokenUpdated) => {
                if (isBiometricTokenUpdated) {
                    await this._triggerAsync(this.PluginConditions.OnUpdateBiometricTokenSuccess);
                }
                else {
                    await this._triggerAsync(this.PluginConditions.OnUpdateBiometricTokenError);
                }
            });
        },
        /**
         *
         * @author Haptic Feedback
         * @alias haptic-feedback
         */
        ImpactOccurred(styleIndex) {
            let style = getStyleByIndex(styleIndex);
            Telegram.WebApp.HapticFeedback.impactOccurred(style);
        },
        NotificationOccurred(typeIndex) {
            let type = getTypeByIndex(typeIndex);
            Telegram.WebApp.HapticFeedback.notificationOccurred(type);
        },
        OnSelectionChanged() { Telegram.WebApp.HapticFeedback.selectionChanged(); },
        /**
         *
         * @author Main
         * @alias main
         */
        SetBackgroundColor(color = '#RRGGBB') { Telegram.WebApp.backgroundColor = color; },
        SetHeaderColor(color = '#RRGGBB') { Telegram.WebApp.headerColor = color; },
        CloseMiniApp() { Telegram.WebApp.close(); },
        DisableClosingConfirmation() { Telegram.WebApp.disableClosingConfirmation(); },
        EnableClosingConfirmation() { Telegram.WebApp.enableClosingConfirmation(); },
        DisableVerticalSwipes() { Telegram.WebApp.disableVerticalSwipes(); },
        EnableVerticalSwipes() { Telegram.WebApp.enableVerticalSwipes(); },
        Expand() { Telegram.WebApp.expand(); },
        OpenLink(url, _try_instant_view) {
            let try_instant_view = true;
            switch (_try_instant_view) {
                case 0:
                    try_instant_view = true;
                    break;
                case 1:
                    try_instant_view = false;
                    break;
            }
            Telegram.WebApp.openLink(url, {
                try_instant_view: try_instant_view
            });
        },
        OpenTelegramLink(url) { Telegram.WebApp.openTelegramLink(url); },
        Share(url, text) {
            const path = {
                path_full: `/share/url?text=${text}&url=${url}`
            };
            //@ts-ignore
            Telegram.WebView.postEvent('web_app_open_tg_link', () => {
                // callback
            }, path);
        },
        ShareToStory(media_url, text, story_widget_url, story_widget_name) {
            Telegram.WebApp.shareToStory(media_url, {
                text: text,
                widget_link: {
                    url: story_widget_url,
                    name: story_widget_name
                }
            });
        },
        ShowAlert(message) {
            Telegram.WebApp.showAlert(message, async () => {
                await this._triggerAsync(this.PluginConditions.OnAlertClosed);
            });
        },
        ShowConfirm(message) {
            Telegram.WebApp.showConfirm(message, async (ok) => {
                if (ok) {
                    await this._triggerAsync(this.PluginConditions.OnConfirmOK);
                }
                else {
                    await this._triggerAsync(this.PluginConditions.OnConfirmClosed);
                }
            });
        },
        ShowScanQrPopup(text) {
            Telegram.WebApp.showScanQrPopup({
                text: text
            }, async (data) => {
                this._triggerAsync(this.PluginConditions.OnScanQrPopupResult(data));
            });
        },
        CloseScanQrPopup() { Telegram.WebApp.closeScanQrPopup(); },
        CopyToClipboard(data) {
            const o = document.createElement('textarea');
            o.value = data;
            o.style.left = "-9999px";
            document.body.appendChild(o);
            o.select();
            document.execCommand('copy');
            document.body.removeChild(o);
        },
        GetChatMember(botToken, chatId = '@channelusername', userId) {
            isUserInChannel(botToken, chatId, userId).then(async (isInChannel) => {
                if (isInChannel) {
                    await this._triggerAsync(this.PluginConditions.OnGetChatMemberSuccess);
                }
                else {
                    await this._triggerAsync(this.PluginConditions.OnGetChatMemberError);
                }
            });
        },
        /**
         *
         * @author Cloud Storade
         * @alias cloud-storage
         */
        CloudStorageGetItem(key) {
            Telegram.WebApp.CloudStorage.getItem(key, async (error, value) => {
                if (error !== null) {
                    await this._triggerAsync(this.PluginConditions.OnCloudStorageError(error));
                    await this._triggerAsync(this.PluginConditions.OnCloudStorageItemGetError(key));
                }
                else {
                    //console.log(`I'm trigger!`, `Key:${key}, Value:${value}`);
                    this.cloudStorageValues.push({
                        key: key,
                        value: value
                    });
                    await this._triggerAsync(this.PluginConditions.OnCloudStorageItemGetSuccess(key));
                }
            });
        },
        CloudStorageSetItem(key, value) {
            Telegram.WebApp.CloudStorage.setItem(key, value, async (error, success) => {
                if (error !== null) {
                    await this._triggerAsync(this.PluginConditions.OnCloudStorageError(error));
                    await this._triggerAsync(this.PluginConditions.OnCloudStorageItemSetError(key));
                }
                else if (success) {
                    await this._triggerAsync(this.PluginConditions.OnCloudStorageItemSetSuccess(key));
                }
            });
        },
        CloudStorageRemoveItem(key) {
            Telegram.WebApp.CloudStorage.removeItem(key, async (error, success) => {
                if (error !== null) {
                    await this._triggerAsync(this.PluginConditions.OnCloudStorageError(error));
                    await this._triggerAsync(this.PluginConditions.OnCloudStorageItemRemoveError(key));
                }
                else if (success) {
                    await this._triggerAsync(this.PluginConditions.OnCloudStorageItemRemoveSuccess(key));
                }
            });
        },
        /**
         *
         * @author Invoice
         * @alias invoice
         */
        OpenInvoice(id, url) {
            Telegram.WebApp.openInvoice(url, async (url, status) => {
                switch (status) {
                    case 'cancelled':
                        await this._triggerAsync(this.PluginConditions.OnInvoiceCancelled(id));
                        break;
                    case 'failed':
                        await this._triggerAsync(this.PluginConditions.OnInvoiceFailed(id));
                        break;
                    case 'paid':
                        await this._triggerAsync(this.PluginConditions.OnInvoicePaid(id));
                        break;
                    case 'pending':
                        await this._triggerAsync(this.PluginConditions.OnInvoicePending(id));
                        break;
                }
            });
        },
    };
async function isUserInChannel(botToken, chatId, userId) {
    const url = `https://api.telegram.org/bot${botToken}/getChatMember`;
    const params = new URLSearchParams({
        chat_id: String(chatId),
        user_id: String(userId)
    });
    try {
        const response = await fetch(`${url}?${params.toString()}`);
        const data = await response.json();
        if (data.ok) {
            // Check the user's status in the channel
            const status = data.result.status;
            return status === 'member' || status === 'administrator' || status === 'creator';
        }
        else {
            throw new Error(`Error: ${data.description}`);
        }
    }
    catch (error) {
        console.error('Failed to check user in channel:', error);
        return false;
    }
}
// export {};
