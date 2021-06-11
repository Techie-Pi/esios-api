const Endpoint = require("../Endpoint")

/*
Endpoint Description:
api.esios.ree.es/indicators/1001 # Undocumented endpoint?
?start_date=date # Date in ISO 8601 format
&end_date=date # Date in ISO 8601 format
&geo_agg=!!! # Unknown
&time_trunc=hour # Time period?
&time_agg= # Unknown
&locale=es # Used for some strings sent, doesn't matter
 */

class PricePVPC20TD extends Endpoint {
    constructor(startDate, endDate) {
        const url = "https://api.esios.ree.es/indicators/1001";
        const params = {
            start_date: startDate.toISOString(),
            end_date: endDate.toISOString()
        }
        super(url, params);
    }
}

module.exports = PricePVPC20TD;
