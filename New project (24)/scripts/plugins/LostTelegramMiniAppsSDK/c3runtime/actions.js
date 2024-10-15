const C3 = globalThis.C3;
const Config = {"SupportsWorkerMode":false,"CanBeBundled":false,"IsSingleGlobal":true,"ObjectName":"TelegramMiniApps","AddonId":"LostTelegramMiniAppsSDK","Type":"plugin","Category":"platform-specific","AddonName":"Telegram MiniApps SDK for Construct 3","AddonDescription":"Providing convenient access to the Telegram Mini Apps API.","Version":"5.1.0.0","Author":"lostinmind.","WebsiteURL":"https://t.me/tg_c3addons","DocsURL":"https://lost-2.gitbook.io/telegram-mini-apps-sdk-for-construct-3","Icon":{"FileName":"miniapps.svg","Type":"image/svg+xml"},"Scripts":[{"FileName":"telegram-web-app-7.10.js","Type":"external-dom-script"}]};
C3.Plugins[Config.AddonId].Acts = {
  showHideBackButton: function showHideBackButton(itemIndex) {
    var states = ['show', 'hide'];
    var state = states[itemIndex];
    switch (state) {
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
      }, authenticatedSuccessfully => {
        if (authenticatedSuccessfully) {
          this._trigger(this.PluginConditions.onBMAuthenticatedSuccessfully);
        }
        this._trigger(this.PluginConditions.onBMAuthenticateError);
      });
    }
  },
  initBM: function initBM() {
    this.WebApp.BiometricManager.init(() => this._trigger(this.PluginConditions.onBMInited));
  },
  openBMSettings: function openBMSettings() {
    if (this.WebApp.BiometricManager.isInited) this.WebApp.BiometricManager.openSettings();
  },
  requestAccessBM: function requestAccessBM(reason) {
    if (this.WebApp.BiometricManager.isInited) {
      this.WebApp.BiometricManager.requestAccess({
        reason
      }, accessGranted => {
        if (accessGranted) {
          this._trigger(this.PluginConditions.onBMAccessGranted);
        }
        this._trigger(this.PluginConditions.onBMAccessDeclined);
      });
    }
  },
  updateBiometricToken: function updateBiometricToken(token) {
    if (this.WebApp.BiometricManager.isInited) {
      this.WebApp.BiometricManager.updateBiometricToken(token, tokenPassed => {
        var items = ['notPassed', 'passed'];
        var result = items[Number(tokenPassed)];
        this._trigger(this.PluginConditions.onBiometricTokenUpdated(result));
      });
    }
  },
  getChatMember: function getChatMember(botAPIToken, chatId, userId) {
    this._getChatMember(botAPIToken, chatId, userId);
  },
  setItem: function setItem(key, value) {
    this.WebApp.CloudStorage.setItem(key, value, (error, valueStored) => {
      if (!error) {
        this._loadCloudStorage();
        this._trigger(this.PluginConditions.onItemSet(key));
      }
      this._trigger(this.PluginConditions.onItemSetError(key));
    });
  },
  removeItems: function removeItems(tag, itemsList) {
    var items = itemsList.split(",");
    this.WebApp.CloudStorage.removeItems(items, (error, valuesRemoved) => {
      if (!error) {
        this._loadCloudStorage();
        this._trigger(this.PluginConditions.onItemsRemoved(tag));
      }
      this._trigger(this.PluginConditions.onItemsRemoveError(tag));
    });
  },
  impactOccured: function impactOccured(itemIndex) {
    var styles = ["light", "medium", "heavy", "rigid", "soft"];
    var style = styles[itemIndex];
    this.WebApp.HapticFeedback.impactOccurred(style);
  },
  notificationOccurred: function notificationOccurred(itemIndex) {
    var types = ["error", "success", "warning"];
    var type = types[itemIndex];
    this.WebApp.HapticFeedback.notificationOccurred(type);
  },
  selectionChanged: function selectionChanged() {
    this.WebApp.HapticFeedback.selectionChanged();
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
    var items = ['disable', 'enable'];
    var state = items[itemIndex];
    switch (state) {
      case items[0]:
        this.WebApp.disableClosingConfirmation();
        break;
      case items[1]:
        this.WebApp.enableClosingConfirmation();
        break;
    }
  },
  setVerticalSwipesEnabled: function setVerticalSwipesEnabled(itemIndex) {
    var items = ['disable', 'enable'];
    var state = items[itemIndex];
    switch (state) {
      case items[0]:
        this.WebApp.disableVerticalSwipes();
        break;
      case items[1]:
        this.WebApp.enableVerticalSwipes();
        break;
    }
  },
  openLink: function openLink(url, itemIndex) {
    var items = ['false', 'true'];
    var state = items[itemIndex];
    switch (state) {
      case items[0]:
        this.WebApp.openLink(url, {
          try_instant_view: false
        });
        break;
      case items[1]:
        this.WebApp.openLink(url, {
          try_instant_view: true
        });
        break;
      default:
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
    this.WebApp.showAlert(message, () => this._trigger(this.PluginConditions.onAlertClosed));
  },
  showConfirm: function showConfirm(message) {
    this.WebApp.showConfirm(message, okPressed => {
      if (okPressed) {
        this._trigger(this.PluginConditions.onConfirmClosed(0));
      }
      this._trigger(this.PluginConditions.onConfirmClosed(1));
    });
  },
  showPopup: function showPopup(title, message, firstButtonId, firstButtonTypeIndex, firstButtonText, useSecondButton, secondButtonId, secondButtonTypeIndex, secondButtonText, useThirdButton, thirdButtonId, thirdButtonTypeIndex, thirdButtonText) {
    var buttons = [];
    var buttonTypes = ['default', 'ok', 'close', 'cancel', 'destructive'];
    var firstButtonType = buttonTypes[firstButtonTypeIndex];
    var secondButtonType = buttonTypes[secondButtonTypeIndex];
    var thirdButtonType = buttonTypes[thirdButtonTypeIndex];
    var firstButton = {};
    var secondButton = {};
    var thirdButton = {};
    if (firstButtonType === 'ok' || firstButtonType === 'close' || firstButtonType === 'cancel') {
      if (firstButtonId !== '') firstButton.id = firstButtonId;
      firstButton.type = firstButtonType;
    } else if (firstButtonType === 'default' || firstButtonType === 'destructive') {
      var button = firstButton;
      button.id = firstButtonId;
      button.type = firstButtonType;
      button.text = firstButtonText;
      firstButton = button;
    }
    if (secondButtonType === 'ok' || secondButtonType === 'close' || secondButtonType === 'cancel') {
      if (secondButtonId !== '') secondButton.id = secondButtonId;
      secondButton.type = secondButtonType;
    } else if (secondButtonType === 'default' || secondButtonType === 'destructive') {
      var _button = secondButton;
      _button.id = secondButtonId;
      _button.type = secondButtonType;
      _button.text = secondButtonText;
      secondButton = _button;
    }
    if (thirdButtonType === 'ok' || thirdButtonType === 'close' || thirdButtonType === 'cancel') {
      if (thirdButtonId !== '') thirdButton.id = thirdButtonId;
      thirdButton.type = thirdButtonType;
    } else if (thirdButtonType === 'default' || thirdButtonType === 'destructive') {
      var _button2 = thirdButton;
      _button2.id = thirdButtonId;
      _button2.type = thirdButtonType;
      _button2.text = thirdButtonText;
      thirdButton = _button2;
    }
    buttons.push(firstButton);
    if (Boolean(useSecondButton)) buttons.push(secondButton);
    if (Boolean(useThirdButton === 1)) buttons.push(thirdButton);
    this.WebApp.showPopup({
      title,
      message,
      buttons
    }, id => this._trigger(this.PluginConditions.onPopupClosedWithSpecificButtonId(id)));
  },
  shareToStory: function shareToStory(media_url, text) {
    this.WebApp.shareToStory(media_url, {
      text
    });
  },
  share: function share(text, url) {
    this.WebApp.openTelegramLink("https://t.me/share/url?url=".concat(url, "&text=").concat(text));
  },
  setMainButtonColor: function setMainButtonColor(color) {
    this.WebApp.MainButton.color = color;
  },
  enableDisableMainButton: function enableDisableMainButton(itemIndex) {
    var states = ['enable', 'disable'];
    var state = states[itemIndex];
    switch (state) {
      case states[0]:
        this.WebApp.MainButton.enable();
        break;
      case states[1]:
        this.WebApp.MainButton.disable();
        break;
    }
  },
  showHideMainButton: function showHideMainButton(itemIndex) {
    var states = ['show', 'hide'];
    var state = states[itemIndex];
    switch (state) {
      case states[0]:
        this.WebApp.MainButton.show();
        break;
      case states[1]:
        this.WebApp.MainButton.hide();
        break;
    }
  },
  showHideMainButtonProgress: function showHideMainButtonProgress(itemIndex, leaveActiveIndex) {
    var statesShow = ['show', 'hide'];
    var stateShow = statesShow[itemIndex];
    var statesLeaveActive = ['true', 'false'];
    var stateLeaveActive = statesLeaveActive[leaveActiveIndex];
    switch (stateShow) {
      case statesShow[0]:
        var bool = stateLeaveActive === statesLeaveActive[0] ? true : false;
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
      has_shine_effect: Boolean(hasShineEffect),
      is_active: Boolean(isActive),
      is_visible: Boolean(isVisible)
    });
  },
  enableDisableMainButtonShineEffect: function enableDisableMainButtonShineEffect(itemIndex) {
    var states = ['enable', 'disable'];
    var state = states[itemIndex];
    switch (state) {
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
    this.WebApp.openInvoice(url, params => {
      var addInvoice = _ref => {
        var {
          id,
          url,
          status
        } = _ref;
        this.data.invoicesStatus.push({
          id,
          url,
          status
        });
      };
      switch (params.status) {
        case 'pending':
          addInvoice({
            id,
            url: params.url,
            status: params.status
          });
          this._trigger(this.PluginConditions.onInvoiceStatus(id, 0));
          break;
        case 'paid':
          addInvoice({
            id,
            url: params.url,
            status: params.status
          });
          this._trigger(this.PluginConditions.onInvoiceStatus(id, 1));
          break;
        case 'cancelled':
          addInvoice({
            id,
            url: params.url,
            status: params.status
          });
          this._trigger(this.PluginConditions.onInvoiceStatus(id, 2));
          break;
        case 'failed':
          addInvoice({
            id,
            url: params.url,
            status: params.status
          });
          this._trigger(this.PluginConditions.onInvoiceStatus(id, 3));
        default:
          this._trigger(this.PluginConditions.onInvoiceError);
          break;
      }
    });
  },
  setSecondaryButtonColor: function setSecondaryButtonColor(color) {
    this.WebApp.SecondaryButton.color = color;
  },
  enableDisableSecondaryButton: function enableDisableSecondaryButton(itemIndex) {
    var states = ['enable', 'disable'];
    var state = states[itemIndex];
    switch (state) {
      case states[0]:
        this.WebApp.SecondaryButton.enable();
        break;
      case states[1]:
        this.WebApp.SecondaryButton.disable();
        break;
    }
  },
  showHideSecondaryButton: function showHideSecondaryButton(itemIndex) {
    var states = ['show', 'hide'];
    var state = states[itemIndex];
    switch (state) {
      case states[0]:
        this.WebApp.SecondaryButton.show();
        break;
      case states[1]:
        this.WebApp.SecondaryButton.hide();
        break;
    }
  },
  showHideSecondaryButtonProgress: function showHideSecondaryButtonProgress(itemIndex, leaveActiveIndex) {
    var statesShow = ['show', 'hide'];
    var stateShow = statesShow[itemIndex];
    var statesLeaveActive = ['true', 'false'];
    var stateLeaveActive = statesLeaveActive[leaveActiveIndex];
    switch (stateShow) {
      case statesShow[0]:
        var bool = stateLeaveActive === statesLeaveActive[0] ? true : false;
        this.WebApp.SecondaryButton.showProgress(bool);
        break;
      case statesShow[1]:
        this.WebApp.SecondaryButton.hideProgress();
        break;
    }
  },
  setSecondaryButtonParams: function setSecondaryButtonParams(text, color, text_color, hasShineEffect, positionIndex, isActive, isVisible) {
    var positions = ['left', 'right', 'top', 'bottom'];
    var position = positions[positionIndex];
    this.WebApp.SecondaryButton.setParams({
      text,
      color,
      text_color,
      has_shine_effect: Boolean(hasShineEffect),
      position,
      is_active: Boolean(isActive),
      is_visible: Boolean(isVisible)
    });
  },
  enableDisableSecondaryButtonShineEffect: function enableDisableSecondaryButtonShineEffect(itemIndex) {
    var states = ['enable', 'disable'];
    var state = states[itemIndex];
    switch (state) {
      case states[0]:
        this.WebApp.SecondaryButton.hasShineEffect = true;
        break;
      case states[1]:
        this.WebApp.SecondaryButton.hasShineEffect = false;
        break;
    }
  },
  setSecondaryButtonPosition: function setSecondaryButtonPosition(positionIndex) {
    var positions = ['left', 'right', 'top', 'bottom'];
    var position = positions[positionIndex];
    this.WebApp.SecondaryButton.position = position;
  },
  setSecondaryButtonText: function setSecondaryButtonText(text) {
    this.WebApp.SecondaryButton.text = text;
  },
  setSecondaryButtonTextColor: function setSecondaryButtonTextColor(color) {
    this.WebApp.SecondaryButton.textColor = color;
  },
  showHideSettingsButton: function showHideSettingsButton(itemIndex) {
    var states = ['show', 'hide'];
    var state = states[itemIndex];
    switch (state) {
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
