const C3 = globalThis.C3;
const Config = {"SupportsWorkerMode":true,"MinConstructVersion":"","IsSingleGlobal":false,"IsDeprecated":false,"CanBeBundled":false,"ObjectName":"TelegramPaymentsAPI","AddonId":"LostTelegramPaymentsAPI","Type":"plugin","Category":"platform-specific","AddonName":"Telegram Payments API for Construct 3","AddonDescription":"Implements Telegram Payments API into your project.","Version":"1.0.0.0","Author":"lostinmind.","WebsiteURL":"https://t.me/tg_c3addons","DocsURL":"https://t.me/tg_c3addons","Icon":{"FileName":"api_payment.svg","Type":"image/svg+xml"}};
C3.Plugins[Config.AddonId].Cnds = {
  onSendInvoiceError: function onSendInvoiceError() {
    return true;
  },
  onSendInvoiceSuccess: function onSendInvoiceSuccess() {
    return true;
  },
  onCreateInvoiceLinkError: function onCreateInvoiceLinkError() {
    return true;
  },
  onCreateInvoiceLinkSuccess: function onCreateInvoiceLinkSuccess() {
    return true;
  },
  onGetStarTransactionsSuccess: function onGetStarTransactionsSuccess() {
    return true;
  },
  onGetStarTransactionsError: function onGetStarTransactionsError() {
    return true;
  },
  onRefundStarPaymentSuccess: function onRefundStarPaymentSuccess() {
    return true;
  },
  onRefundStarPaymentError: function onRefundStarPaymentError() {
    return true;
  }
};