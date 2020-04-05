# Cal-ex
This application's architecture is based on the example code used in the following article: [Building Cloud Native applications with AWS Lambda and Functional Programming](https://blog.container-solutions.com/using-functional-programming-when-building-cloud-native-applications-with-aws-lambda).

In this repository you'll find a working REST api developed in [typescript](https://www.typescriptlang.org/) and [fp-ts](https://gcanti.github.io/fp-ts/). You can deploy it locally with [AWS SAM](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/what-is-sam.html) by just doing the following.

```
npm i
npm start
```

You will find the api running at `http://localhost:3000/schedule`.
