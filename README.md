# esios-api
An API wrapper for api.esios.ree.es

## Features
- 🧊 Simple. Just simple
- 📚 Documented. It's simple, although there are docs
- 🗽 Open Source. MIT License, as simple as the library

## Getting started
Install the library with
```npm install @techiepi/esios-api```
You're done! Now you can use the library like in the example below
```js
const apiCall = esios.pricePVPC20TD(new Date(Date.now() - 1000), new Date(), token);

console.log(await apiCall.execute()); // Raw API object
```

## API Docs
Because the API has quite unuseful docs, one of our objectives is to create an unofficial API docs.
The work is being made at [docs/api](docs/api).

While we work on the API documentation, you can check the [FAQs](qa.md)

## Build
You can run
```npm run build```
to build the library

## License
This project is licensed under the [MIT license](LICENSE)
