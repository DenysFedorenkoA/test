const ADDON_ID = "LostTelegramMiniAppsSDK";
const C3 = globalThis.C3;
C3.Plugins[ADDON_ID].Cnds = {
  onAccelerometerStarted: function onAccelerometerStarted() {
    return true;
  },
  onAccelerometerStopped: function onAccelerometerStopped() {
    return true;
  },
  isAccelerometerStarted: function isAccelerometerStarted() {
    return this.WebApp.Accelerometer.isStarted;
  },
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
    const items = [
      'notPassed',
      'passed'
    ];
    return items[itemIndex];
  },
  onBMUpdated: function onBMUpdated() {
    return true;
  },
  isCurrentBiometricType: function isCurrentBiometricType(biomtricTypeIndex) {
    const types = [
      'finger',
      'face',
      'unknown'
    ];
    const biometricType = types[biomtricTypeIndex];
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
  onGetChatMember: function onGetChatMember() {
    return true;
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
  onDeviceOrientationStarted: function onDeviceOrientationStarted() {
    return true;
  },
  onDeviceOrientationStopped: function onDeviceOrientationStopped() {
    return true;
  },
  isDeviceOrientationStarted: function isDeviceOrientationStarted() {
    return this.WebApp.DeviceOrientation.isStarted;
  },
  isDeviceOrientationAbsolute: function isDeviceOrientationAbsolute() {
    return this.WebApp.DeviceOrientation.absolute;
  },
  onGyroscopeStarted: function onGyroscopeStarted() {
    return true;
  },
  onGyroscopeStopped: function onGyroscopeStopped() {
    return true;
  },
  isGyroscopeStarted: function isGyroscopeStarted() {
    return this.WebApp.Gyroscope.isStarted;
  },
  onLocationAccessGranted: function onLocationAccessGranted() {
    return true;
  },
  onLocationAccessDenied: function onLocationAccessDenied() {
    return true;
  },
  onLocationManagerInited: function onLocationManagerInited() {
    return true;
  },
  isLocationManagerInited: function isLocationManagerInited() {
    return this.WebApp.LocationManager.isInited;
  },
  isLocationAvailable: function isLocationAvailable() {
    return this.WebApp.LocationManager.isLocationAvailable;
  },
  isLocationManagerAccessRequested: function isLocationManagerAccessRequested() {
    return this.WebApp.LocationManager.isAccessRequested;
  },
  isLocationManagerAccessGranted: function isLocationManagerAccessGranted() {
    return this.WebApp.LocationManager.isAccessGranted;
  },
  onAddedToHomeScreen: function onAddedToHomeScreen() {
    return true;
  },
  onDownloadFileRequestAccepted: function onDownloadFileRequestAccepted() {
    return true;
  },
  onDownloadFileRequestDeclined: function onDownloadFileRequestDeclined() {
    return true;
  },
  onAlertClosed: function onAlertClosed() {
    return true;
  },
  onConfirmClosed: function onConfirmClosed(pressedButtonIndex) {
    const items = [
      'ok',
      'cancel'
    ];
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
  isActive: function isActive() {
    return this.WebApp.isActive;
  },
  isFullscreen: function isFullscreen() {
    return this.WebApp.isFullscreen;
  },
  isOrientationLocked: function isOrientationLocked() {
    return this.WebApp.isOrientationLocked;
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
  onInvoiceStatus: function onInvoiceStatus() {
    return false;
  },
  onInvoicePending: function onInvoicePending() {
    return true;
  },
  onInvoicePaid: function onInvoicePaid() {
    return true;
  },
  onInvoiceCancelled: function onInvoiceCancelled() {
    return true;
  },
  onInvoiceFailed: function onInvoiceFailed() {
    return true;
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
    const items = [
      `false`,
      `true`
    ];
    return items[stateStableIndex] === 'true' ? true : false;
  }
};