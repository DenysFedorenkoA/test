const ADDON_ID = "LostTelegramMiniAppsSDK";
const C3 = globalThis.C3;
C3.Plugins[ADDON_ID].Exps = {
  AccelerometerX: function AccelerometerX() {
    return this.WebApp.Accelerometer.x || 0;
  },
  AccelerometerY: function AccelerometerY() {
    return this.WebApp.Accelerometer.y || 0;
  },
  AccelerometerZ: function AccelerometerZ() {
    return this.WebApp.Accelerometer.z || 0;
  },
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
      const value = this.data.cloudStorage[key];
      return value || '';
    }
    return '';
  },
  ContentSafeAreaInsetTop: function ContentSafeAreaInsetTop() {
    return this.WebApp.contentSafeAreaInset.top;
  },
  ContentSafeAreaInsetBottom: function ContentSafeAreaInsetBottom() {
    return this.WebApp.contentSafeAreaInset.bottom;
  },
  ContentSafeAreaInsetLeft: function ContentSafeAreaInsetLeft() {
    return this.WebApp.contentSafeAreaInset.left;
  },
  ContentSafeAreaInsetRight: function ContentSafeAreaInsetRight() {
    return this.WebApp.contentSafeAreaInset.right;
  },
  DeviceOrientationAlpha: function DeviceOrientationAlpha() {
    return this.WebApp.DeviceOrientation.alpha || 0;
  },
  DeviceOrientationBeta: function DeviceOrientationBeta() {
    return this.WebApp.DeviceOrientation.beta || 0;
  },
  DeviceOrientationGamma: function DeviceOrientationGamma() {
    return this.WebApp.DeviceOrientation.gamma || 0;
  },
  GyroscopeX: function GyroscopeX() {
    return this.WebApp.Gyroscope.x || 0;
  },
  GyroscopeY: function GyroscopeY() {
    return this.WebApp.Gyroscope.y || 0;
  },
  GyroscopeZ: function GyroscopeZ() {
    return this.WebApp.Gyroscope.z || 0;
  },
  LocationLatitude: function LocationLatitude() {
    const { locationInfo } = this.data;
    if (locationInfo) {
      return locationInfo.latitude;
    } else {
      return -1;
    }
  },
  LocationLongitude: function LocationLongitude() {
    const { locationInfo } = this.data;
    if (locationInfo) {
      return locationInfo.longitude;
    } else {
      return -1;
    }
  },
  LocationAltitude: function LocationAltitude() {
    const { locationInfo } = this.data;
    if (locationInfo) {
      return locationInfo.altitude || -1;
    } else {
      return -1;
    }
  },
  LocationCourse: function LocationCourse() {
    const { locationInfo } = this.data;
    if (locationInfo) {
      return locationInfo.course || -1;
    } else {
      return -1;
    }
  },
  LocationSpeed: function LocationSpeed() {
    const { locationInfo } = this.data;
    if (locationInfo) {
      return locationInfo.speed || -1;
    } else {
      return -1;
    }
  },
  LocationHorizontalAccuracy: function LocationHorizontalAccuracy() {
    const { locationInfo } = this.data;
    if (locationInfo) {
      return locationInfo.horizontal_accuracy || -1;
    } else {
      return -1;
    }
  },
  LocationVerticalAccuracy: function LocationVerticalAccuracy() {
    const { locationInfo } = this.data;
    if (locationInfo) {
      return locationInfo.vertical_accuracy || -1;
    } else {
      return -1;
    }
  },
  LocationCourseAccuracy: function LocationCourseAccuracy() {
    const { locationInfo } = this.data;
    if (locationInfo) {
      return locationInfo.course_accuracy || -1;
    } else {
      return -1;
    }
  },
  LocationSpeedAccuracy: function LocationSpeedAccuracy() {
    const { locationInfo } = this.data;
    if (locationInfo) {
      return locationInfo.speed_accuracy || -1;
    } else {
      return -1;
    }
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
    const invoices = this.data.invoicesStatus.filter((i)=>i.id === id);
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
    const invoices = this.data.invoicesStatus.filter((i)=>i.id === id);
    if (invoices.length > 0) {
      if (invoices.length > 1) {
        return invoices[invoices.length - 1].url;
      } else {
        return invoices[0].url;
      }
    }
    return '';
  },
  SafeAreaInsetTop: function SafeAreaInsetTop() {
    return this.WebApp.safeAreaInset.top;
  },
  SafeAreaInsetBottom: function SafeAreaInsetBottom() {
    return this.WebApp.safeAreaInset.bottom;
  },
  SafeAreaInsetLeft: function SafeAreaInsetLeft() {
    return this.WebApp.safeAreaInset.left;
  },
  SafeAreaInsetRight: function SafeAreaInsetRight() {
    return this.WebApp.safeAreaInset.right;
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
    const user = this._getTelegramUser();
    if (user !== null) return user.id;
    return -1;
  },
  UserFirstName: function UserFirstName() {
    const user = this._getTelegramUser();
    if (user !== null) {
      const firstName = user.first_name;
      return firstName;
    }
    return 'none';
  },
  UserLastName: function UserLastName() {
    const user = this._getTelegramUser();
    if (user !== null) {
      const lastName = user.last_name;
      if (lastName) return lastName;
    }
    return 'none';
  },
  UserUsername: function UserUsername() {
    const user = this._getTelegramUser();
    if (user !== null) {
      const username = user.username;
      if (username) return username;
    }
    return 'none';
  },
  UserLanguageCode: function UserLanguageCode() {
    const user = this._getTelegramUser();
    if (user !== null) {
      const langCode = user.language_code;
      if (langCode) return langCode;
    }
    return 'none';
  },
  UserPremium: function UserPremium() {
    const user = this._getTelegramUser();
    if (user !== null) {
      const isPremium = user.is_premium;
      if (isPremium) return 1;
    }
    return 0;
  },
  UserPhotoUrl: function UserPhotoUrl() {
    const user = this._getTelegramUser();
    if (user !== null) {
      const photoUrl = user.photo_url;
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
  IsActive: function IsActive() {
    return Number(this.WebApp.isActive);
  },
  IsFullscreen: function IsFullscreen() {
    return Number(this.WebApp.isFullscreen);
  },
  IsOrientationLocked: function IsOrientationLocked() {
    return Number(this.WebApp.isOrientationLocked);
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