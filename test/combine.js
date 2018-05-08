console.log(
  JSON.stringify(
    Object.assign(
      {},
      require("../langs/ko.json").countries,
      require("../references/i18n_data/ko.json").countries,
      require("../references/i18n-country-translations/ko.json").countries
    ),
    null,
    "  "
  )
);
