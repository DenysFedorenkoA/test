const C3 = globalThis.C3;
const Config = {"SupportsWorkerMode":true,"MinConstructVersion":"","IsSingleGlobal":false,"IsDeprecated":false,"CanBeBundled":false,"ObjectName":"TelegramPaymentsAPI","AddonId":"LostTelegramPaymentsAPI","Type":"plugin","Category":"platform-specific","AddonName":"Telegram Payments API for Construct 3","AddonDescription":"Implements Telegram Payments API into your project.","Version":"1.0.0.0","Author":"lostinmind.","WebsiteURL":"https://t.me/tg_c3addons","DocsURL":"https://t.me/tg_c3addons","Icon":{"FileName":"api_payment.svg","Type":"image/svg+xml"}};
C3.Plugins[Config.AddonId].Exps = {
  BotId: function BotId() {
    var _this$botInfo;
    return ((_this$botInfo = this.botInfo) === null || _this$botInfo === void 0 ? void 0 : _this$botInfo.id) || -1;
  },
  BotFirstName: function BotFirstName() {
    var _this$botInfo2;
    return ((_this$botInfo2 = this.botInfo) === null || _this$botInfo2 === void 0 ? void 0 : _this$botInfo2.first_name) || 'none';
  },
  BotLastName: function BotLastName() {
    var _this$botInfo3;
    return ((_this$botInfo3 = this.botInfo) === null || _this$botInfo3 === void 0 ? void 0 : _this$botInfo3.last_name) || 'none';
  },
  BotUsername: function BotUsername() {
    var _this$botInfo4;
    return ((_this$botInfo4 = this.botInfo) === null || _this$botInfo4 === void 0 ? void 0 : _this$botInfo4.username) || 'none';
  },
  BotLanguageCode: function BotLanguageCode() {
    var _this$botInfo5;
    return ((_this$botInfo5 = this.botInfo) === null || _this$botInfo5 === void 0 ? void 0 : _this$botInfo5.language_code) || 'none';
  },
  GetLastInvoiceLink: function GetLastInvoiceLink() {
    return this.lastCreatedInvoiceLink;
  },
  GetStarTransactionsJSON: function GetStarTransactionsJSON() {
    var TransactionsJSON = JSON.stringify(this.lastGotStarTransactions.transactions);
    return TransactionsJSON;
  }
};
