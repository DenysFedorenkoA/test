function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
const Config = {"SupportsWorkerMode":false,"CanBeBundled":false,"IsSingleGlobal":true,"ObjectName":"TelegramMiniApps","AddonId":"LostTelegramMiniAppsSDK","Type":"plugin","Category":"platform-specific","AddonName":"Telegram MiniApps SDK for Construct 3","AddonDescription":"Providing convenient access to the Telegram Mini Apps API.","Version":"5.1.0.0","Author":"lostinmind.","WebsiteURL":"https://t.me/tg_c3addons","DocsURL":"https://lost-2.gitbook.io/telegram-mini-apps-sdk-for-construct-3","Icon":{"FileName":"miniapps.svg","Type":"image/svg+xml"},"Scripts":[{"FileName":"telegram-web-app-7.10.js","Type":"external-dom-script"}]}
var C3 = globalThis.C3;
var ButtonPositions = ['left', 'right', 'top', 'bottom'];
class LostInstance extends globalThis.ISDKInstanceBase {
  constructor() {
    super({
      domComponentId: Config.AddonId
    });
    this.WebView = Telegram.WebView;
    this.WebApp = Telegram.WebApp;
    this.PluginConditions = C3.Plugins[Config.AddonId].Cnds;
    this.data = {
      invoicesStatus: [],
      biometricToken: '',
      qrTextReceived: '',
      cloudStorage: null,
      phoneNumberShared: false,
      requestWriteAccess: {
        accessGranted: false
      },
      showConfirm: {
        okPressed: false
      },
      showPopup: {
        id: ''
      },
      lastChatMemberUserStatus: ''
    };
    this.expandOnStart = void 0;
    this.readyOnStart = void 0;
    this.enableVerticalSwipes = void 0;
    this.enableClosingConfirmation = void 0;
    this.backgroundColor = void 0;
    this.headerColor = void 0;
    this.bottomBarColor = void 0;
    this.isMainButtonActive = void 0;
    this.isMainButtonVisible = void 0;
    this.mainButtonColor = void 0;
    this.mainButtonText = void 0;
    this.mainButtonTextColor = void 0;
    this.isMainButtonHasShineEffect = void 0;
    this.isSecondaryButtonActive = void 0;
    this.isSecondaryButtonVisible = void 0;
    this.secondaryButtonColor = void 0;
    this.secondaryButtonText = void 0;
    this.secondaryButtonTextColor = void 0;
    this.isSecondaryButtonHasShineEffect = void 0;
    this.secondaryButtonPosition = void 0;
    var properties = this._getInitProperties();
    (() => {
      this.expandOnStart = properties[0];
      this.readyOnStart = properties[1];
      if (this.readyOnStart) this.WebApp.ready();
      this.enableVerticalSwipes = properties[2];
      this.enableClosingConfirmation = properties[3];
      //@ts-ignore
      this.backgroundColor = properties[4];
      //@ts-ignore
      this.headerColor = properties[5];
      //@ts-ignore
      this.bottomBarColor = properties[6];

      /**
       * Main Button
       */
      this.isMainButtonActive = properties[7];
      this.isMainButtonVisible = properties[8];
      //@ts-ignore
      this.mainButtonColor = properties[9];
      this.mainButtonText = properties[10];
      //@ts-ignore
      this.mainButtonTextColor = properties[11];
      this.isMainButtonHasShineEffect = properties[12];

      /**
       * Secondary Button
       */
      this.isSecondaryButtonActive = properties[13];
      this.isSecondaryButtonVisible = properties[14];
      //@ts-ignore
      this.secondaryButtonColor = properties[15];
      this.secondaryButtonText = properties[16];
      //@ts-ignore
      this.secondaryButtonTextColor = properties[17];
      this.isSecondaryButtonHasShineEffect = properties[18];
      this.secondaryButtonPosition = ButtonPositions[properties[19]];
    })();
    this.setup();
  }
  _release() {
    super._release();
  }
  _getTelegramUser() {
    var user = this.WebApp.initDataUnsafe.user;
    return user ? user : null;
  }
  _isInTelegram() {
    var user = this._getTelegramUser();
    return user === null ? false : true;
  }
  _getChatMember(botAPIToken, chatId, userId) {
    var _this = this;
    return _asyncToGenerator(function* () {
      var url = "https://api.telegram.org/bot".concat(botAPIToken, "/getChatMember");
      var params = new URLSearchParams({
        chat_id: String(chatId),
        user_id: String(userId)
      });
      try {
        var response = yield fetch("".concat(url, "?").concat(params.toString()));
        var data = yield response.json();
        if (data.ok) {
          var chatMemberStatuses = ['creator', 'administrator', 'member', 'restricted', 'left', 'kicked'];
          // Check the user's status in the channel
          var status = data.result.status;
          _this.data.lastChatMemberUserStatus = status;
          var statusIndex = chatMemberStatuses.indexOf(status);
          if (statusIndex !== -1) {
            _this._trigger(_this.PluginConditions.onGetChatMember(statusIndex));
          }
        } else {
          _this._trigger(_this.PluginConditions.onGetChatMemberError);
        }
      } catch (error) {
        _this._trigger(_this.PluginConditions.onGetChatMemberError);
      }
    })();
  }
  _loadCloudStorage() {
    if (this._isInTelegram()) {
      this.WebApp.CloudStorage.getKeys((error, keys) => {
        if (!error) {
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
    this.WebApp.onEvent('viewportChanged', _ref => {
      var {
        isStateStable
      } = _ref;
      return this._trigger(this.PluginConditions.onViewportChanged(isStateStable));
    });
    this.WebApp.onEvent('popupClosed', _ref2 => {
      var {
        button_id
      } = _ref2;
      if (button_id === null) this._trigger(this.PluginConditions.onPopupClosed);
    });
    this.WebApp.onEvent('qrTextReceived', _ref3 => {
      var {
        data
      } = _ref3;
      this.data.qrTextReceived = data;
      if (data !== '') this._trigger(this.PluginConditions.onQrTextRecieved);
    });
    this.WebApp.onEvent('scanQrPopupClosed', () => this._trigger(this.PluginConditions.onScanQrPopupClosed));
    this.WebApp.onEvent('writeAccessRequested', status => {
      if (status === 'allowed') this._trigger(this.PluginConditions.onWriteAccessAllowed);
      if (status === 'cancelled') this._trigger(this.PluginConditions.onWriteAccessCancelled);
    });
    this.WebApp.onEvent('contactRequested', status => {
      if (status === 'sent') this._trigger(this.PluginConditions.onContactRequestSent);
      if (status === 'cancelled') this._trigger(this.PluginConditions.onContactRequestCancelled);
    });

    /**
     * Biometric Manager
     */
    this.WebApp.onEvent('biometricManagerUpdated', () => {
      this._trigger(this.PluginConditions.onBMUpdated);
    });
    this.WebApp.onEvent('biometricAuthRequested', params => {
      if (params.isAuthenticated) {
        this.data.biometricToken = params.biometricToken ? params.biometricToken : '';
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
  }
  setup() {
    this.addEventHandlers();
    this._loadCloudStorage();
    if (this.expandOnStart) this.WebApp.expand();
    if (this.enableVerticalSwipes) {
      this.WebApp.enableVerticalSwipes();
    }
    this.WebApp.disableVerticalSwipes();
    if (this.enableClosingConfirmation) {
      this.WebApp.enableClosingConfirmation();
    }
    this.WebApp.disableClosingConfirmation();
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
    var clampedRgb = rgb.map(x => Math.max(0, Math.min(1, x)));

    // Преобразуем значения в диапазоне от 0 до 255 и форматируем в шестнадцатеричный вид
    var hexColor = '#' + clampedRgb.map(x => Math.round(x * 255) // Умножаем на 255 и округляем
    .toString(16).padStart(2, '0')) // Преобразуем в шестнадцатеричный формат
    .join('');
    return hexColor.toUpperCase(); // Возвращаем в верхнем регистре
  }
}
;
C3.Plugins[Config.AddonId].Instance = LostInstance;