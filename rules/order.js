module.exports = {
    plugins: ["stylelint-order"],
    rules: {
        "order/order": [require("./block-order.js"), { severity: "warning" }],
        "order/properties-order": [require("./properties.js"), { unspecified: "bottom", severity: "warning" }],
    },
};
