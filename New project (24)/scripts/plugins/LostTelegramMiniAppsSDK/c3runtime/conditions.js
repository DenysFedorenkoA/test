const C3 = globalThis.C3;
const Config = {"SupportsWorkerMode":false,"CanBeBundled":false,"IsSingleGlobal":true,"ObjectName":"TelegramMiniApps","AddonId":"LostTelegramMiniAppsSDK","Type":"plugin","Category":"platform-specific","AddonName":"Telegram MiniApps SDK for Construct 3","AddonDescription":"Providing convenient access to the Telegram Mini Apps API.","Version":"5.1.0.0","Author":"lostinmind.","WebsiteURL":"https://t.me/tg_c3addons","DocsURL":"https://lost-2.gitbook.io/telegram-mini-apps-sdk-for-construct-3","Icon":{"FileName":"miniapps.svg","Type":"image/svg+xml"},"Scripts":[{"FileName":"telegram-web-app-7.10.js","Type":"external-dom-script"}]};
C3.Plugins[Config.AddonId].Cnds = {
  onBackButtonClicked: function onBackButtonClicked() {
    return true;
  },
  isBackButtonVisible: function isBackButtonVisible() {
    return this.WebApp.BackButton.isVisible;
  },
  onBMAuthenticatedSuccessfully: function onBMAuthenticatedSuccessfully() {
    return true;
  },
  onBMAuthenticateError: function onBMAuthenticateError() {
    return true;
  },
  onBMAccessGranted: function onBMAccessGranted() {
    return true;
  },
  onBMAccessDeclined: function onBMAccessDeclined() {
    return true;
  },
  onBMInited: function onBMInited() {
    return true;
  },
  onBiometricTokenUpdated: function onBiometricTokenUpdated(itemIndex) {
    var items = ['notPassed', 'passed'];
    return items[itemIndex];
  },
  onBMUpdated: function onBMUpdated() {
    return true;
  },
  isCurrentBiometricType: function isCurrentBiometricType(biomtricTypeIndex) {
    var types = ['finger', 'face', 'unknown'];
    var biometricType = types[biomtricTypeIndex];
    return biometricType === this.WebApp.BiometricManager.biometricType;
  },
  isBMAccessGranted: function isBMAccessGranted() {
    return this.WebApp.BiometricManager.isAccessGranted;
  },
  isBMAccessRequested: function isBMAccessRequested() {
    return this.WebApp.BiometricManager.isAccessRequested;
  },
  isBiometricTokenSaved: function isBiometricTokenSaved() {
    return this.WebApp.BiometricManager.isBiometricTokenSaved;
  },
  isBMInited: function isBMInited() {
    return this.WebApp.BiometricManager.isInited;
  },
  onGetChatMember: function onGetChatMember(statusIndex) {
    var chatMemberStatuses = ['creator', 'administrator', 'member', 'restricted', 'left', 'kicked'];
    return chatMemberStatuses[statusIndex];
  },
  onGetChatMemberError: function onGetChatMemberError() {
    return true;
  },
  onItemsRemoved: function onItemsRemoved(tag) {
    return tag;
  },
  onItemsRemoveError: function onItemsRemoveError(tag) {
    return tag;
  },
  onItemSetError: function onItemSetError(key) {
    return key;
  },
  onItemSet: function onItemSet(key) {
    return key;
  },
  onCloudStorageLoaded: function onCloudStorageLoaded() {
    return true;
  },
  onAlertClosed: function onAlertClosed() {
    return true;
  },
  onConfirmClosed: function onConfirmClosed(pressedButtonIndex) {
    var items = ['ok', 'cancel'];
    return items[pressedButtonIndex];
  },
  onWriteAccessAllowed: function onWriteAccessAllowed() {
    return true;
  },
  onWriteAccessCancelled: function onWriteAccessCancelled() {
    return true;
  },
  onContactRequestSent: function onContactRequestSent() {
    return true;
  },
  onContactRequestCancelled: function onContactRequestCancelled() {
    return true;
  },
  onQrTextRecieved: function onQrTextRecieved() {
    return true;
  },
  onScanQrPopupClosed: function onScanQrPopupClosed() {
    return true;
  },
  onPopupClosed: function onPopupClosed() {
    return true;
  },
  onPopupClosedWithSpecificButtonId: function onPopupClosedWithSpecificButtonId(buttonId) {
    return buttonId;
  },
  onMainButtonClicked: function onMainButtonClicked() {
    return true;
  },
  isMainButtonButtonActive: function isMainButtonButtonActive() {
    return this.WebApp.MainButton.isActive;
  },
  isMainButtonProgressVisible: function isMainButtonProgressVisible() {
    return this.WebApp.MainButton.isProgressVisible;
  },
  isMainButtonButtonVisible: function isMainButtonButtonVisible() {
    return this.WebApp.MainButton.isVisible;
  },
  onInvoiceError: function onInvoiceError() {
    return true;
  },
  onInvoiceStatus: function onInvoiceStatus(id, statusIndex) {
    var statuses = ['pending', 'paid', 'cancelled', 'failed'];
    var status = statuses[statusIndex];
    return id && status;
  },
  onSecondaryButtonClicked: function onSecondaryButtonClicked() {
    return true;
  },
  isSecondaryButtonActive: function isSecondaryButtonActive() {
    return this.WebApp.SecondaryButton.isActive;
  },
  isSecondaryButtonProgressVisible: function isSecondaryButtonProgressVisible() {
    return this.WebApp.SecondaryButton.isProgressVisible;
  },
  isSecondaryButtonVisible: function isSecondaryButtonVisible() {
    return this.WebApp.SecondaryButton.isVisible;
  },
  onSettingsButtonClicked: function onSettingsButtonClicked() {
    return true;
  },
  isSettingsButtonVisible: function isSettingsButtonVisible() {
    return this.WebApp.SettingsButton.isVisible;
  },
  onThemeChanged: function onThemeChanged() {
    return true;
  },
  onViewportChanged: function onViewportChanged(stateStableIndex) {
    var items = ["false", "true"];
    return items[stateStableIndex];
  }
};
