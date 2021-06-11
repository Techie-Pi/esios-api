const axios = require("axios");

class ApiCall {
    authorizationToken;
    endpointInstance;

    constructor(endpointInstance, authorizationToken) {
        this.endpointInstance = endpointInstance;
        this.authorizationToken = authorizationToken;
    }

    async execute() {
        const config = {
            headers: {
                "Accept": "application/json; application/vnd.esios-api-v1+json",
                "Content-Type": "application/json",
                "Authorization": `Token token="${this.authorizationToken}"`
            }
        }
        // The e·sios API only supports get requests
        const response = await axios.get(this.endpointInstance.url, config);

        switch(response.status) {
            case 200: break;
            default: throw new Error(response.status.toString());
        }

        return response.data;
    }
}

module.exports = ApiCall;
