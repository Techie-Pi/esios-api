# Documentation
> Related to the (raw) API documentation

## Is there any official documentation for the e·sios API?

Yes, kinda. Although there is an [official documentation](https://api.esios.ree.es/) it isn't quite self-explanatory,
with some endpoint descriptions like ``"Getting a specific indicator filtering values by a date range and geo_ids, grouped by 
geo_id and month, using avg aggregation for geo and sum for time without time_trunc"``
The approach I am following with this API wrapper is to reverse engineer the [e·sios website](https://www.esios.ree.es/)
(not the API).

## How is the basic request to the API
According to the docs:
```http request
GET /endpoint HTTP/1.1
Accept: application/json; application/vnd.esios-api-v1+json
Content-Type: application/json
Host: api.esios.ree.es
Authorization: Token token="token"
Cookie: 

queries=options&and=that
```

# Tokens
> How to obtain them? What about "public" tokens?

## How to obtain personal access tokens?

As stated on the [e·sios documentation](https://api.esios.ree.es/), to obtain a personal token you should email the
REE team with the subject "Personal access token".

## What do you mean with "public" tokens?

At the [e·sios analysis website](https://www.esios.ree.es/es/analisis/1001) (not API) the token
"request_your_personal_token_sending_email_to_[[censored]]" is used.
Although as the token itself states, you _should_ request a personal token.

There is also one token used in the [e·sios documentation](https://api.esios.ree.es/) for the examples.

## Is there any problem if I use the "public" token?

The token is exposed to everyone, even without account, if you can't use any personal access token for some reason,
it is better to use this "public" token instead of using Puppeteer or some similar technique.
The only problem is that the token may be revoked at any time without any notice and thus breaking every project
relying on it. They may adopt some "rotating tokens" or something like that, if something like that is implemented,
I will update this file with some basic instructions.
