![](https://img.shields.io/badge/Microverse-blueviolet)

# Hello-React-Front-End!

> Hello-React-Front-End is an app that connects and requests from an external api a random message in different languages. 

## Built With

- ![](https://img.shields.io/badge/-React-blue)
- ![](https://img.shields.io/badge/-Redux-blueviolet)

## Getting Started

### Prerequisites

- [NVM](https://github.com/nvm-sh/nvm)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable) (Recommended)

To get started, first, clone this project by using the following command:

```
git clone https://github.com/ad9311/hello-react-front-end.git
```

### Installaion

Before launching the application, you will need to run a few commands:</br>

```
yarn install or npm install
```

Then launch the application with:</br>
```
yarn start
```
Or 
```
npm start
```
You will see something like this in your console 👇🏼
```
You can now view hello-react-front-end in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://192.168.0.31:3000

Note that the development build is not optimized.
To create a production build, use yarn build.
```
When using `yarn sart` or `npm start` your browser should automatically open the app, if not, then use one of the two links in the example above.

## API Usage

This app connects to an API that sends back a json format with the following content:
- Language
- Flag unicodes in hex separate with a dash <->. Refer to [Unicode](https://www.unicode.org/emoji/charts/full-emoji-list.html) for the complete list of flag codes.
- Message

So the response by the api should look like this:

```
{
  "language": "English",
  flagCode: "0x1FFFFF-0x1FFFFF",
  "message": "Hello World"
}
```

The intended api used for this application can be found [here](https://github.com/ad9311/hello-rails-back-end)

By the default the API will connect to `localhost:4000/api/v1/greetings` if you wish to change to another api, you can do it in the file `src/api/fetchAPI.js` that is in the root folder.

## Contributing

Contributions, issues and, feature requests are welcome!

You can do it on [issues page](https://github.com/ad9311/hello-react-front-end/issues).

## Show your support

Give a ⭐️ if you like this project!

## Authors

**Ángel Díaz**

- GitHub: [@ad9311](https://github.com/ad9311)
- Twitter: [@adiaz9311](https://twitter.com/adiaz9311)
- LinkedIn: [Ángel Díaz](https://www.linkedin.com/in/ad9311/)

## Show your support

Give a ⭐️ if you like this project!

## 📝 License

![](https://img.shields.io/badge/license-MIT-green)</br>
This project is [MIT](./LICENSE) licensed.
