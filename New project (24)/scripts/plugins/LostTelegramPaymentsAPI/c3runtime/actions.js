const C3 = globalThis.C3;
const Config = {"SupportsWorkerMode":true,"MinConstructVersion":"","IsSingleGlobal":false,"IsDeprecated":false,"CanBeBundled":false,"ObjectName":"TelegramPaymentsAPI","AddonId":"LostTelegramPaymentsAPI","Type":"plugin","Category":"platform-specific","AddonName":"Telegram Payments API for Construct 3","AddonDescription":"Implements Telegram Payments API into your project.","Version":"1.0.0.0","Author":"lostinmind.","WebsiteURL":"https://t.me/tg_c3addons","DocsURL":"https://t.me/tg_c3addons","Icon":{"FileName":"api_payment.svg","Type":"image/svg+xml"}};
C3.Plugins[Config.AddonId].Acts = {
  sendInvoice: function sendInvoice(chat_id, title, description, payload, provider_token, currencyIndex, pricesDictionary, photo_url, photo_size, photo_width, photo_height, need_name, need_phone_number, need_email, need_shipping_address, send_phone_number_to_provider, send_email_to_provider, is_flexible, disable_notification, protect_content) {
    var CURRENCIES = ['XTR', 'AED', 'AFN', 'ALL', 'AMD', 'ARS', 'AUD', 'AZN', 'BAM', 'BDT', 'BGN', 'BHD', 'BND', 'BOB', 'BRL', 'BYN', 'CAD', 'CHF', 'CLP', 'CNY', 'COP', 'CRC', 'CZK', 'DKK', 'DOP', 'DZD', 'EGP', 'ETB', 'EUR', 'GBP', 'GEL', 'GHS', 'GTQ', 'HKD', 'HNL', 'HRK', 'HUF', 'IDR', 'ILS', 'INR', 'IQD', 'IRR', 'ISK', 'JMD', 'JOD', 'JPY', 'KES', 'KGS', 'KRW', 'KZT', 'LBP', 'LKR', 'MAD', 'MDL', 'MMK', 'MNT', 'MOP', 'MUR', 'MVR', 'MXN', 'MYR', 'MZN', 'NGN', 'NIO', 'NOK', 'NPR', 'NZD', 'PAB', 'PEN', 'PHP', 'PKR', 'PLN', 'PYG', 'QAR', 'RON', 'RSD', 'RUB', 'SAR', 'SEK', 'SGD', 'SYP', 'THB', 'TJS', 'TRY', 'TTD', 'TWD', 'TZS', 'UAH', 'UGX', 'USD', 'UYU', 'UZS', 'VEF', 'VND', 'YER', 'ZAR'];
    var currency = CURRENCIES[currencyIndex];
    var Dictionary = pricesDictionary.getFirstInstance();
    var prices = [];
    if (Dictionary !== null) {
      var LabeledPricesMap = Dictionary.getDataMap();
      LabeledPricesMap.forEach((value, key) => {
        prices.push({
          label: key,
          amount: Number(value)
        });
      });
    }
    this.sendInvoice({
      chat_id,
      title,
      description,
      payload,
      provider_token,
      currency,
      prices,
      photo_url,
      photo_size,
      photo_width,
      photo_height,
      need_name,
      need_phone_number,
      need_email,
      need_shipping_address,
      send_phone_number_to_provider,
      send_email_to_provider,
      is_flexible,
      disable_notification,
      protect_content
    }).then(data => {
      // console.log('Result of send invoice: Message', data)
      this._trigger(this.PluginConditions.onSendInvoiceSuccess);
    }).catch(error => {
      this._trigger(this.PluginConditions.onSendInvoiceError);
      console.error(error);
    });
  },
  createInvoiceLink: function createInvoiceLink(title, description, payload, provider_token, currencyIndex, pricesDictionary, photo_url, photo_size, photo_width, photo_height, need_name, need_phone_number, need_email, need_shipping_address, send_phone_number_to_provider, send_email_to_provider, is_flexible, disable_notification, protect_content) {
    var CURRENCIES = ['XTR', 'AED', 'AFN', 'ALL', 'AMD', 'ARS', 'AUD', 'AZN', 'BAM', 'BDT', 'BGN', 'BHD', 'BND', 'BOB', 'BRL', 'BYN', 'CAD', 'CHF', 'CLP', 'CNY', 'COP', 'CRC', 'CZK', 'DKK', 'DOP', 'DZD', 'EGP', 'ETB', 'EUR', 'GBP', 'GEL', 'GHS', 'GTQ', 'HKD', 'HNL', 'HRK', 'HUF', 'IDR', 'ILS', 'INR', 'IQD', 'IRR', 'ISK', 'JMD', 'JOD', 'JPY', 'KES', 'KGS', 'KRW', 'KZT', 'LBP', 'LKR', 'MAD', 'MDL', 'MMK', 'MNT', 'MOP', 'MUR', 'MVR', 'MXN', 'MYR', 'MZN', 'NGN', 'NIO', 'NOK', 'NPR', 'NZD', 'PAB', 'PEN', 'PHP', 'PKR', 'PLN', 'PYG', 'QAR', 'RON', 'RSD', 'RUB', 'SAR', 'SEK', 'SGD', 'SYP', 'THB', 'TJS', 'TRY', 'TTD', 'TWD', 'TZS', 'UAH', 'UGX', 'USD', 'UYU', 'UZS', 'VEF', 'VND', 'YER', 'ZAR'];
    var currency = CURRENCIES[currencyIndex];
    var Dictionary = pricesDictionary.getFirstInstance();
    var prices = [];
    if (Dictionary !== null) {
      var LabeledPricesMap = Dictionary.getDataMap();
      LabeledPricesMap.forEach((value, key) => {
        prices.push({
          label: key,
          amount: Number(value)
        });
      });
    }
    this.createInvoiceLink({
      title,
      description,
      payload,
      provider_token,
      currency,
      prices,
      photo_url,
      photo_size,
      photo_width,
      photo_height,
      need_name,
      need_phone_number,
      need_email,
      need_shipping_address,
      send_phone_number_to_provider,
      send_email_to_provider,
      is_flexible,
      disable_notification,
      protect_content
    }).then(inoviceLink => {
      this.lastCreatedInvoiceLink = inoviceLink;
      this._trigger(this.PluginConditions.onCreateInvoiceLinkSuccess);
    }).catch(error => {
      this._trigger(this.PluginConditions.onCreateInvoiceLinkError);
      console.error(error);
    });
  },
  getStarTransactions: function getStarTransactions(offset, limit) {
    var options = {
      offset: offset > 0 ? offset : undefined,
      limit: limit > 0 ? limit : undefined
    };
    this.getStarTransactions(options).then(data => {
      // console.log('Result of getStarTransactions: ', data)
      this.lastGotStarTransactions = data;
      this._trigger(this.PluginConditions.onGetStarTransactionsSuccess);
    }).catch(error => {
      this._trigger(this.PluginConditions.onGetStarTransactionsError);
      console.error(error);
    });
  },
  refundStarPayment: function refundStarPayment(user_id, telegram_payment_charge_id) {
    this.refundStarPayment({
      user_id,
      telegram_payment_charge_id
    }).then(data => {
      // console.log('Result of refund star payment: ', data)
      if (data) {
        this._trigger(this.PluginConditions.onRefundStarPaymentSuccess);
      }
      this._trigger(this.PluginConditions.onRefundStarPaymentError);
    }).catch(error => {
      console.error(error);
      this._trigger(this.PluginConditions.onRefundStarPaymentError);
    });
  }
};
