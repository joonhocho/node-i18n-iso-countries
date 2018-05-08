console.log(
  JSON.stringify(
    Object.assign(
      {},
      require("./langs/ko.json").countries,
      require("./langs/i18n_data/ko.json").countries,
      require("./langs/i18n-country-translations/ko.json").countries
    ),
    null,
    "  "
  )
);
