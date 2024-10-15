function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
const Config = {"SupportsWorkerMode":true,"MinConstructVersion":"","IsSingleGlobal":false,"IsDeprecated":false,"CanBeBundled":false,"ObjectName":"TelegramPaymentsAPI","AddonId":"LostTelegramPaymentsAPI","Type":"plugin","Category":"platform-specific","AddonName":"Telegram Payments API for Construct 3","AddonDescription":"Implements Telegram Payments API into your project.","Version":"1.0.0.0","Author":"lostinmind.","WebsiteURL":"https://t.me/tg_c3addons","DocsURL":"https://t.me/tg_c3addons","Icon":{"FileName":"api_payment.svg","Type":"image/svg+xml"}}
var C3 = globalThis.C3;
class LostInstance extends globalThis.ISDKInstanceBase {
  constructor() {
    super();
    // window.TelegramPaymentsAPI
    this.botInfo = null;
    this.lastGotStarTransactions = {};
    this.lastCreatedInvoiceLink = '';
    /**
     * https://api.telegram.org/bot<token>/METHOD_NAME
     * @example "https://api.telegram.org/bot123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11"
     */
    this.TOKEN = '';
    this.API_URL = '';
    /**
     * Ready to use in this._trigger(this.PluginConditions.{functionName})
     */
    this.PluginConditions = C3.Plugins[Config.AddonId].Cnds;
    this.getBotInfoOnStart = false;
    var properties = this._getInitProperties();
    if (properties) {
      this.getBotInfoOnStart = properties[1];
      this.TOKEN = properties[0];
      this.API_URL = "https://api.telegram.org/bot".concat(this.TOKEN);
      if (this.getBotInfoOnStart) this.getBotInfo();
    }
  }
  _release() {
    super._release();
  }
  getBotInfo() {
    this.getMe().then(bot => {
      this.botInfo = bot;
    }).catch(error => {
      // this._trigger(this.PluginConditions.onCreateInvoiceLinkError);
      console.error(error);
    });
  }
  getMe() {
    var _this = this;
    return _asyncToGenerator(function* () {
      return new Promise((res, rej) => {
        fetch("".concat(_this.API_URL, "/getMe"), {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(response => {
          if (!response.ok) {
            return response.json().then(errorData => {
              rej("Error ".concat(response.status, ": ").concat(errorData.description || response.statusText));
            });
          }
          return response.json().then(data => res(data.result));
        }).catch(error => rej(error.message));
      });
    })();
  }
  sendInvoice(options) {
    var _this2 = this;
    return _asyncToGenerator(function* () {
      return new Promise((res, rej) => {
        fetch("".concat(_this2.API_URL, "/sendInvoice"), {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(options)
        }).then(response => {
          if (!response.ok) {
            return response.json().then(errorData => {
              rej("Error ".concat(response.status, ": ").concat(errorData.description || response.statusText));
            });
          }
          return response.json().then(data => res(data.result));
        }).catch(error => rej(error.message));
      });
    })();
  }
  createInvoiceLink(options) {
    var _this3 = this;
    return _asyncToGenerator(function* () {
      return new Promise((res, rej) => {
        fetch("".concat(_this3.API_URL, "/createInvoiceLink"), {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(options)
        }).then(response => {
          if (!response.ok) {
            return response.json().then(errorData => {
              rej("Error ".concat(response.status, ": ").concat(errorData.description || response.statusText));
            });
          }
          return response.json().then(data => res(data.result));
        }).catch(error => rej(error.message));
      });
    })();
  }
  getStarTransactions(options) {
    var _this4 = this;
    return _asyncToGenerator(function* () {
      return new Promise((res, rej) => {
        fetch("".concat(_this4.API_URL, "/getStarTransactions"), {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(options)
        }).then(response => {
          if (!response.ok) {
            return response.json().then(errorData => {
              rej("Error ".concat(response.status, ": ").concat(errorData.description || response.statusText));
            });
          }
          return response.json().then(data => res(data.result));
        }).catch(error => rej(error.message));
      });
    })();
  }
  refundStarPayment(options) {
    var _this5 = this;
    return _asyncToGenerator(function* () {
      return new Promise((res, rej) => {
        fetch("".concat(_this5.API_URL, "/refundStarPayment"), {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(options)
        }).then(response => {
          if (!response.ok) {
            return response.json().then(errorData => {
              rej("Error ".concat(response.status, ": ").concat(errorData.description || response.statusText));
            });
          }
          return response.json().then(data => res(data.result));
        }).catch(error => rej(error.message));
      });
    })();
  }
}
;
C3.Plugins[Config.AddonId].Instance = LostInstance;