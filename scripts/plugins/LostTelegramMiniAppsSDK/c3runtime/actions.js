const ADDON_ID = "LostTelegramMiniAppsSDK";
const C3 = globalThis.C3;
C3.Plugins[ADDON_ID].Acts = {
  startAccelerometer: function startAccelerometer(refresh_rate) {
    this.WebApp.Accelerometer.start({
      refresh_rate
    }, (started)=>{
      if (started) {
        this._trigger(this.PluginConditions.onAccelerometerStarted);
      }
    });
  },
  stopAccelerometer: function stopAccelerometer() {
    this.WebApp.Accelerometer.stop((stopped)=>{
      if (stopped) {
        this._trigger(this.PluginConditions.onAccelerometerStopped);
      }
    });
  },
  showHideBackButton: function showHideBackButton(itemIndex) {
    const states = [
      'show',
      'hide'
    ];
    const state = states[itemIndex];
    switch(state){
      case states[0]:
        this.WebApp.BackButton.show();
        break;
      case states[1]:
        this.WebApp.BackButton.hide();
        break;
    }
  },
  autheticateBM: function autheticateBM(reason) {
    if (this.WebApp.BiometricManager.isInited) {
      this.WebApp.BiometricManager.authenticate({
        reason
      }, (authenticatedSuccessfully)=>{
        if (authenticatedSuccessfully) {
          this._trigger(this.PluginConditions.onBMAuthenticatedSuccessfully);
        }
        this._trigger(this.PluginConditions.onBMAuthenticateError);
      });
    }
  },
  initBM: function initBM() {
    this.WebApp.BiometricManager.init(()=>this._trigger(this.PluginConditions.onBMInited));
  },
  openBMSettings: function openBMSettings() {
    if (this.WebApp.BiometricManager.isInited) this.WebApp.BiometricManager.openSettings();
  },
  requestAccessBM: function requestAccessBM(reason) {
    if (this.WebApp.BiometricManager.isInited) {
      this.WebApp.BiometricManager.requestAccess({
        reason
      }, (accessGranted)=>{
        if (accessGranted) {
          this._trigger(this.PluginConditions.onBMAccessGranted);
        }
        this._trigger(this.PluginConditions.onBMAccessDeclined);
      });
    }
  },
  updateBiometricToken: function updateBiometricToken(token) {
    if (this.WebApp.BiometricManager.isInited) {
      this.WebApp.BiometricManager.updateBiometricToken(token, (tokenPassed)=>{
        const items = [
          'notPassed',
          'passed'
        ];
        const result = items[Number(tokenPassed)];
        this._trigger(this.PluginConditions.onBiometricTokenUpdated(result));
      });
    }
  },
  getChatMember: function getChatMember(botAPIToken, chatId, userId) {
    this._getChatMember(botAPIToken, chatId, userId);
  },
  setItem: function setItem(key, value) {
    this.WebApp.CloudStorage.setItem(key, value, (error, valueStored)=>{
      if (!error) {
        this._loadCloudStorage();
        this._trigger(this.PluginConditions.onItemSet(key));
      }
      this._trigger(this.PluginConditions.onItemSetError(key));
    });
  },
  removeItems: function removeItems(tag, itemsList) {
    const items = itemsList.split(",");
    this.WebApp.CloudStorage.removeItems(items, (error, valuesRemoved)=>{
      if (!error) {
        this._loadCloudStorage();
        this._trigger(this.PluginConditions.onItemsRemoved(tag));
      }
      this._trigger(this.PluginConditions.onItemsRemoveError(tag));
    });
  },
  startDeviceOrientation: function startDeviceOrientation(refresh_rate, need_absolute) {
    this.WebApp.DeviceOrientation.start({
      refresh_rate,
      need_absolute
    }, (started)=>{
      if (started) {
        this._trigger(this.PluginConditions.onDeviceOrientationStarted);
      }
    });
  },
  stopDeviceOrientation: function stopDeviceOrientation() {
    this.WebApp.DeviceOrientation.stop((stopped)=>{
      if (stopped) {
        this._trigger(this.PluginConditions.onDeviceOrientationStopped);
      }
    });
  },
  startGyroscope: function startGyroscope(refresh_rate) {
    this.WebApp.Gyroscope.start({
      refresh_rate
    }, (started)=>{
      if (started) {
        this._trigger(this.PluginConditions.onGyroscopeStarted);
      }
    });
  },
  stopGyroscope: function stopGyroscope() {
    this.WebApp.Gyroscope.stop((stopped)=>{
      if (stopped) {
        this._trigger(this.PluginConditions.onGyroscopeStopped);
      }
    });
  },
  impactOccured: function impactOccured(itemIndex) {
    const styles = [
      `light`,
      `medium`,
      `heavy`,
      `rigid`,
      `soft`
    ];
    const style = styles[itemIndex];
    this.WebApp.HapticFeedback.impactOccurred(style);
  },
  notificationOccurred: function notificationOccurred(itemIndex) {
    const types = [
      `error`,
      `success`,
      `warning`
    ];
    const type = types[itemIndex];
    this.WebApp.HapticFeedback.notificationOccurred(type);
  },
  selectionChanged: function selectionChanged() {
    this.WebApp.HapticFeedback.selectionChanged();
  },
  initLocationManager: function initLocationManager() {
    this.WebApp.LocationManager.init((inited)=>{
      if (inited) {
        this._trigger(this.PluginConditions.onLocationManagerInited);
      }
    });
  },
  getLocation: function getLocation() {
    this.WebApp.LocationManager.getLocation((accessGranted)=>{
      if (accessGranted) {
        this.data.locationInfo = accessGranted;
        this._trigger(this.PluginConditions.onLocationAccessGranted);
      } else {
        this.data.locationInfo = null;
        this._trigger(this.PluginConditions.onLocationAccessDenied);
      }
    });
  },
  requestFullscreen: function requestFullscreen() {
    this.WebApp.requestFullscreen();
  },
  exitFullscreen: function exitFullscreen() {
    this.WebApp.exitFullscreen();
  },
  lockOrientation: function lockOrientation() {
    this.WebApp.lockOrientation();
  },
  unlockOrientation: function unlockOrientation() {
    this.WebApp.unlockOrientation();
  },
  addToHomeScreen: function addToHomeScreen() {
    this.WebApp.addToHomeScreen();
  },
  closeMiniApp: function closeMiniApp() {
    this.WebApp.close();
  },
  expandMiniApp: function expandMiniApp() {
    this.WebApp.expand();
  },
  readyMiniApp: function readyMiniApp() {
    this.WebApp.ready();
  },
  setClosingConfirmationEnabled: function setClosingConfirmationEnabled(itemIndex) {
    const items = [
      'disable',
      'enable'
    ];
    const state = items[itemIndex];
    switch(state){
      case items[0]:
        this.WebApp.disableClosingConfirmation();
        break;
      case items[1]:
        this.WebApp.enableClosingConfirmation();
        break;
    }
  },
  setVerticalSwipesEnabled: function setVerticalSwipesEnabled(itemIndex) {
    const items = [
      'disable',
      'enable'
    ];
    const state = items[itemIndex];
    switch(state){
      case items[0]:
        this.WebApp.disableVerticalSwipes();
        break;
      case items[1]:
        this.WebApp.enableVerticalSwipes();
        break;
    }
  },
  openLink: function openLink(url, itemIndex) {
    const items = [
      'false',
      'true'
    ];
    const state = items[itemIndex];
    switch(state){
      case 'false':
        this.WebApp.openLink(url, {
          try_instant_view: false
        });
        break;
      case 'true':
        this.WebApp.openLink(url, {
          try_instant_view: true
        });
        break;
    }
  },
  openTelegramLink: function openTelegramLink(url) {
    this.WebApp.openTelegramLink(url);
  },
  requestContact: function requestContact() {
    this.WebApp.requestContact();
  },
  requestWriteAccess: function requestWriteAccess() {
    this.WebApp.requestWriteAccess();
  },
  showScanQrPopup: function showScanQrPopup(text) {
    this.WebApp.showScanQrPopup({
      text
    });
  },
  closeScanQrPopup: function closeScanQrPopup() {
    this.WebApp.closeScanQrPopup();
  },
  sendData: function sendData(data) {
    this.WebApp.sendData(data);
  },
  showAlert: function showAlert(message) {
    this.WebApp.showAlert(message, ()=>this._trigger(this.PluginConditions.onAlertClosed));
  },
  showConfirm: function showConfirm(message) {
    this.WebApp.showConfirm(message, (okPressed)=>{
      if (okPressed) {
        this._trigger(this.PluginConditions.onConfirmClosed(0));
      }
      this._trigger(this.PluginConditions.onConfirmClosed(1));
    });
  },
  addPopupButton: function addPopupButton(id, type, text) {
    if (this.data.popupButtons.length < 3) {
      this.data.popupButtons.push({
        id,
        type,
        text
      });
    }
  },
  showPopup: function showPopup(title, message) {
    const buttons = this.data.popupButtons;
    this.WebApp.showPopup({
      title,
      message,
      buttons
    });
    this.data.popupButtons = [];
  },
  shareToStory: function shareToStory(media_url, text) {
    this.WebApp.shareToStory(media_url, {
      text
    });
  },
  setEmojiStatus: function setEmojiStatus(custom_emoji_id, duration) {
    this.WebApp.setEmojiStatus(custom_emoji_id, {
      duration
    });
  },
  downloadFile: function downloadFile(url, file_name) {
    this.WebApp.downloadFile({
      url,
      file_name
    }, (accepted)=>{
      if (accepted) {
        this._trigger(this.PluginConditions.onDownloadFileRequestAccepted);
      } else {
        this._trigger(this.PluginConditions.onDownloadFileRequestDeclined);
      }
    });
  },
  share: function share(text, url) {
    this.WebApp.openTelegramLink(`https://t.me/share/url?url=${url}&text=${text}`);
  },
  setMainButtonColor: function setMainButtonColor(color) {
    this.WebApp.MainButton.color = color;
  },
  enableDisableMainButton: function enableDisableMainButton(itemIndex) {
    const states = [
      'enable',
      'disable'
    ];
    const state = states[itemIndex];
    switch(state){
      case states[0]:
        this.WebApp.MainButton.enable();
        break;
      case states[1]:
        this.WebApp.MainButton.disable();
        break;
    }
  },
  showHideMainButton: function showHideMainButton(itemIndex) {
    const states = [
      'show',
      'hide'
    ];
    const state = states[itemIndex];
    switch(state){
      case states[0]:
        this.WebApp.MainButton.show();
        break;
      case states[1]:
        this.WebApp.MainButton.hide();
        break;
    }
  },
  showHideMainButtonProgress: function showHideMainButtonProgress(itemIndex, leaveActiveIndex) {
    const statesShow = [
      'show',
      'hide'
    ];
    const stateShow = statesShow[itemIndex];
    const statesLeaveActive = [
      'true',
      'false'
    ];
    const stateLeaveActive = statesLeaveActive[leaveActiveIndex];
    switch(stateShow){
      case statesShow[0]:
        const bool = stateLeaveActive === statesLeaveActive[0] ? true : false;
        this.WebApp.MainButton.showProgress(bool);
        break;
      case statesShow[1]:
        this.WebApp.MainButton.hideProgress();
        break;
    }
  },
  setMainButtonParams: function setMainButtonParams(text, color, text_color, hasShineEffect, isActive, isVisible) {
    this.WebApp.MainButton.setParams({
      text,
      color,
      text_color,
      has_shine_effect: hasShineEffect,
      is_active: isActive,
      is_visible: isVisible
    });
  },
  enableDisableMainButtonShineEffect: function enableDisableMainButtonShineEffect(itemIndex) {
    const states = [
      'enable',
      'disable'
    ];
    const state = states[itemIndex];
    switch(state){
      case states[0]:
        this.WebApp.MainButton.hasShineEffect = true;
        break;
      case states[1]:
        this.WebApp.MainButton.hasShineEffect = false;
        break;
    }
  },
  setMainButtonText: function setMainButtonText(text) {
    this.WebApp.MainButton.text = text;
  },
  setMainButtonTextColor: function setMainButtonTextColor(color) {
    this.WebApp.MainButton.textColor = color;
  },
  openInvoice: function openInvoice(id, url) {
    const addInvoice = ({ id, url, status })=>{
      this.data.invoicesStatus.push({
        id,
        url,
        status
      });
    };
    this.data.currentInvoiceId = id;
    this.WebApp.openInvoice(url, (status)=>{
      addInvoice({
        id,
        url: url,
        status: status
      });
    });
  },
  setSecondaryButtonColor: function setSecondaryButtonColor(color) {
    this.WebApp.SecondaryButton.color = color;
  },
  enableDisableSecondaryButton: function enableDisableSecondaryButton(itemIndex) {
    const states = [
      'enable',
      'disable'
    ];
    const state = states[itemIndex];
    switch(state){
      case states[0]:
        this.WebApp.SecondaryButton.enable();
        break;
      case states[1]:
        this.WebApp.SecondaryButton.disable();
        break;
    }
  },
  showHideSecondaryButton: function showHideSecondaryButton(itemIndex) {
    const states = [
      'show',
      'hide'
    ];
    const state = states[itemIndex];
    switch(state){
      case states[0]:
        this.WebApp.SecondaryButton.show();
        break;
      case states[1]:
        this.WebApp.SecondaryButton.hide();
        break;
    }
  },
  showHideSecondaryButtonProgress: function showHideSecondaryButtonProgress(itemIndex, leaveActiveIndex) {
    const statesShow = [
      'show',
      'hide'
    ];
    const stateShow = statesShow[itemIndex];
    const statesLeaveActive = [
      'true',
      'false'
    ];
    const stateLeaveActive = statesLeaveActive[leaveActiveIndex];
    switch(stateShow){
      case 'show':
        this.WebApp.SecondaryButton.showProgress(stateLeaveActive === 'true' ? true : false);
        break;
      case 'hide':
        this.WebApp.SecondaryButton.hideProgress();
        break;
    }
  },
  setSecondaryButtonParams: function setSecondaryButtonParams(text, color, text_color, hasShineEffect, positionIndex, isActive, isVisible) {
    const positions = [
      'left',
      'right',
      'top',
      'bottom'
    ];
    const position = positions[positionIndex];
    this.WebApp.SecondaryButton.setParams({
      text,
      color,
      text_color,
      has_shine_effect: hasShineEffect,
      position,
      is_active: isActive,
      is_visible: isVisible
    });
  },
  enableDisableSecondaryButtonShineEffect: function enableDisableSecondaryButtonShineEffect(itemIndex) {
    const states = [
      'enable',
      'disable'
    ];
    const state = states[itemIndex];
    switch(state){
      case states[0]:
        this.WebApp.SecondaryButton.hasShineEffect = true;
        break;
      case states[1]:
        this.WebApp.SecondaryButton.hasShineEffect = false;
        break;
    }
  },
  setSecondaryButtonPosition: function setSecondaryButtonPosition(positionIndex) {
    const positions = [
      'left',
      'right',
      'top',
      'bottom'
    ];
    const position = positions[positionIndex];
    this.WebApp.SecondaryButton.position = position;
  },
  setSecondaryButtonText: function setSecondaryButtonText(text) {
    this.WebApp.SecondaryButton.text = text;
  },
  setSecondaryButtonTextColor: function setSecondaryButtonTextColor(color) {
    this.WebApp.SecondaryButton.textColor = color;
  },
  showHideSettingsButton: function showHideSettingsButton(itemIndex) {
    const states = [
      'show',
      'hide'
    ];
    const state = states[itemIndex];
    switch(state){
      case states[0]:
        this.WebApp.SettingsButton.show();
        break;
      case states[1]:
        this.WebApp.SettingsButton.hide();
        break;
    }
  },
  setHeaderColor: function setHeaderColor(color) {
    this.WebApp.setHeaderColor(color);
  },
  setBottomBarColor: function setBottomBarColor(color) {
    this.WebApp.setBottomBarColor(color);
  },
  setBackgroundColor: function setBackgroundColor(color) {
    this.WebApp.setBackgroundColor(color);
  }
};