import warmer from "lambda-warmer";

warmer({});
warmer({}, {});
warmer.WarmerConfig;

warmer({ log: false }, {});
warmer({ log: true }, {});
warmer({ log: console.log }, {});
warmer({ log: (obj: object) => console.log(obj) }, {});
