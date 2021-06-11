const PricePVPC20TD = require("./api/endpoints/PricePVPC2-0TD");
const ApiCall = require("./api/ApiCall");

function pricePVPC20TD(startDate, endDate, token) {
    return new ApiCall(new PricePVPC20TD(startDate, endDate), token);
}

module.exports = {
    _: {
        endpoints: { PricePVPC20TD },
        ApiCall
    },
    pricePVPC20TD
}
