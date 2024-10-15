const C3 = globalThis.C3;
const Config = {"SupportsWorkerMode":false,"CanBeBundled":false,"IsSingleGlobal":true,"ObjectName":"TelegramMiniApps","AddonId":"LostTelegramMiniAppsSDK","Type":"plugin","Category":"platform-specific","AddonName":"Telegram MiniApps SDK for Construct 3","AddonDescription":"Providing convenient access to the Telegram Mini Apps API.","Version":"5.1.0.0","Author":"lostinmind.","WebsiteURL":"https://t.me/tg_c3addons","DocsURL":"https://lost-2.gitbook.io/telegram-mini-apps-sdk-for-construct-3","Icon":{"FileName":"miniapps.svg","Type":"image/svg+xml"},"Scripts":[{"FileName":"telegram-web-app-7.10.js","Type":"external-dom-script"}]};
C3.Plugins[Config.AddonId].Exps = {
  IsBackButtonVisible: function IsBackButtonVisible() {
    return Number(this.WebApp.BackButton.isVisible);
  },
  BiometricType: function BiometricType() {
    return this.WebApp.BiometricManager.biometricType;
  },
  DeviceId: function DeviceId() {
    return this.WebApp.BiometricManager.deviceId;
  },
  IsBMAccessGranted: function IsBMAccessGranted() {
    return Number(this.WebApp.BiometricManager.isAccessGranted);
  },
  IsBMAccessRequested: function IsBMAccessRequested() {
    return Number(this.WebApp.BiometricManager.isAccessRequested);
  },
  IsBiometricAvailable: function IsBiometricAvailable() {
    return Number(this.WebApp.BiometricManager.isBiometricAvailable);
  },
  IsBiometricTokenSaved: function IsBiometricTokenSaved() {
    return Number(this.WebApp.BiometricManager.isBiometricTokenSaved);
  },
  BiometricToken: function BiometricToken() {
    return this.data.biometricToken;
  },
  CloudStorageValue: function CloudStorageValue(key) {
    if (this.data.cloudStorage !== null) {
      var value = this.data.cloudStorage[key];
      return value || "";
    }
    return "";
  },
  MainButtonColor: function MainButtonColor() {
    return this.WebApp.MainButton.color;
  },
  IsMainButtonHasShineEffect: function IsMainButtonHasShineEffect() {
    return Number(this.WebApp.MainButton.hasShineEffect);
  },
  IsMainButtonActive: function IsMainButtonActive() {
    return Number(this.WebApp.MainButton.isActive);
  },
  IsMainButtonProgressVisible: function IsMainButtonProgressVisible() {
    return Number(this.WebApp.MainButton.isProgressVisible);
  },
  IsMainButtonVisible: function IsMainButtonVisible() {
    return Number(this.WebApp.MainButton.isVisible);
  },
  MainButtonText: function MainButtonText() {
    return this.WebApp.MainButton.text;
  },
  MainButtonTextColor: function MainButtonTextColor() {
    return this.WebApp.MainButton.textColor;
  },
  InvoiceStatus: function InvoiceStatus(id) {
    var invoices = this.data.invoicesStatus.filter(i => i.id === id);
    if (invoices.length > 0) {
      if (invoices.length > 1) {
        return invoices[invoices.length - 1].status;
      } else {
        return invoices[0].status;
      }
    }
    return '';
  },
  InvoiceURL: function InvoiceURL(id) {
    var invoices = this.data.invoicesStatus.filter(i => i.id === id);
    if (invoices.length > 0) {
      if (invoices.length > 1) {
        return invoices[invoices.length - 1].url;
      } else {
        return invoices[0].url;
      }
    }
    return '';
  },
  SecondaryButtonColor: function SecondaryButtonColor() {
    return this.WebApp.SecondaryButton.color;
  },
  IsSecondaryButtonHasShineEffect: function IsSecondaryButtonHasShineEffect() {
    return Number(this.WebApp.SecondaryButton.hasShineEffect);
  },
  IsSecondaryButtonActive: function IsSecondaryButtonActive() {
    return Number(this.WebApp.SecondaryButton.isActive);
  },
  IsSecondaryButtonProgressVisible: function IsSecondaryButtonProgressVisible() {
    return Number(this.WebApp.SecondaryButton.isProgressVisible);
  },
  IsSecondaryButtonVisible: function IsSecondaryButtonVisible() {
    return Number(this.WebApp.SecondaryButton.isVisible);
  },
  SecondaryButtonPosition: function SecondaryButtonPosition() {
    return this.WebApp.SecondaryButton.position;
  },
  SecondaryButtonText: function SecondaryButtonText() {
    return this.WebApp.SecondaryButton.text;
  },
  SecondaryButtonTextColor: function SecondaryButtonTextColor() {
    return this.WebApp.SecondaryButton.textColor;
  },
  IsSettingsButtonVisible: function IsSettingsButtonVisible() {
    return Number(this.WebApp.SettingsButton.isVisible);
  },
  BackgroundColor: function BackgroundColor() {
    return String(this.WebApp.backgroundColor);
  },
  BottomBarColor: function BottomBarColor() {
    return this.WebApp.bottomBarColor;
  },
  ColorScheme: function ColorScheme() {
    return this.WebApp.colorScheme;
  },
  HeaderColor: function HeaderColor() {
    return String(this.WebApp.headerColor);
  },
  ThemeParamsJSON: function ThemeParamsJSON() {
    return JSON.stringify(this.WebApp.themeParams);
  },
  UserId: function UserId() {
    var user = this._getTelegramUser();
    if (user !== null) return user.id;
    return -1;
  },
  UserFirstName: function UserFirstName() {
    var user = this._getTelegramUser();
    if (user !== null) {
      var firstName = user.first_name;
      return firstName;
    }
    return 'none';
  },
  UserLastName: function UserLastName() {
    var user = this._getTelegramUser();
    if (user !== null) {
      var lastName = user.last_name;
      if (lastName) return lastName;
    }
    return 'none';
  },
  UserUsername: function UserUsername() {
    var user = this._getTelegramUser();
    if (user !== null) {
      var username = user.username;
      if (username) return username;
    }
    return 'none';
  },
  UserLanguageCode: function UserLanguageCode() {
    var user = this._getTelegramUser();
    if (user !== null) {
      var langCode = user.language_code;
      if (langCode) return langCode;
    }
    return 'none';
  },
  UserPremium: function UserPremium() {
    var user = this._getTelegramUser();
    if (user !== null) {
      var isPremium = user.is_premium;
      if (isPremium) return 1;
    }
    return 0;
  },
  UserPhotoUrl: function UserPhotoUrl() {
    var user = this._getTelegramUser();
    if (user !== null) {
      var photoUrl = user.photo_url;
      if (photoUrl) return photoUrl;
    }
    return "";
  },
  Version: function Version() {
    return this.WebApp.version;
  },
  Platform: function Platform() {
    return this.WebApp.platform;
  },
  ViewportHeight: function ViewportHeight() {
    return this.WebApp.viewportHeight;
  },
  InitData: function InitData() {
    return this.WebApp.initData;
  },
  IsExpanded: function IsExpanded() {
    return Number(this.WebApp.isExpanded);
  },
  IsVerticalSwipesEnabled: function IsVerticalSwipesEnabled() {
    return Number(this.WebApp.isVerticalSwipesEnabled);
  },
  IsClosingConfirmationEnabled: function IsClosingConfirmationEnabled() {
    return Number(this.WebApp.isVerticalSwipesEnabled);
  },
  QrTextData: function QrTextData() {
    return this.data.qrTextReceived;
  }
};
