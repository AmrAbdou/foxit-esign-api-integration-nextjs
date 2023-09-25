
# Getting Started with Foxit eSign test

## Introduction

This page will help you configure or install the Foxit eSign APIs and SDKs.  To get an overview of Foxit eSign features, please head over to our [Getting Started](https://developers.foxitesign.foxit.com/v/1_0_0#/rest/guides/getting-started) guide.

### Creating a Developer Account

1. Activate the developer account with Foxit eSign under the API tab in the settings menu. (This menu will only be visible after you have purchased the API service from Foxit eSign.)
2. Fill in the form to obtain your API Key and API Secret under your API settings.

This is how your API information will display:

![Create Developer Account](https://developers.esigngenie.com/images/createdevacc.png)

## Building

### Requirements

The SDK relies on **Node.js** and **npm** (to resolve dependencies). It also requires **Typescript version 3.9+**. You can download and install Node.js and [npm](https://www.npmjs.com/) from [the official Node.js website](https://nodejs.org/en/download/).

> **NOTE:** npm is installed by default when Node.js is installed.

### Verify Successful Installation

Run the following commands in the command prompt or shell of your choice to check if Node.js and npm are successfully installed:

* Node.js: `node --version`

* npm: `npm --version`

![Version Check](https://apidocs.io/illustration/typescript?workspaceFolder=FoxitESignTest&step=versionCheck)

### Install Dependencies

- To resolve all dependencies, go to the **SDK root directory** and run the following command with npm:

```bash
npm install
```

- This will install all dependencies in the **node_modules** folder.

![Resolve Dependencies](https://apidocs.io/illustration/typescript?workspaceFolder=FoxitESignTest&workspaceName=foxit-esign-testlib&step=resolveDependency)

## Installation

The following section explains how to use the generated library in a new project.

### 1. Initialize the Node Project

- Open an IDE/text editor for JavaScript like Visual Studio Code. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

- Click on **File** and select **Open Folder**. Select an empty folder of your project, the folder will become visible in the sidebar on the left.

![Open Folder](https://apidocs.io/illustration/typescript?step=openProject)

- To initialize the Node project, click on **Terminal** and select **New Terminal**. Execute the following command in the terminal:

```bash
npm init --y
```

![Initialize the Node Project](https://apidocs.io/illustration/typescript?step=initializeProject)

### 2. Add Dependencies to the Client Library

- The created project manages its dependencies using its `package.json` file. In order to add a dependency on the *Foxit eSign testLib* client library, double click on the `package.json` file in the bar on the left and add the dependency to the package in it.

![Add FoxitEsignTestlib Dependency](https://apidocs.io/illustration/typescript?workspaceFolder=FoxitESignTest&workspaceName=foxit-esign-testlib&step=importDependency)

- To install the package in the project, run the following command in the terminal:

```bash
npm install
```

![Install FoxitEsignTestlib Dependency](https://apidocs.io/illustration/typescript?step=installDependency)

## Initialize the API Client

**_Note:_** Documentation for the client can be found [here.](doc/client.md)

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| `environment` | Environment | The API environment. <br> **Default: `Environment.USServer`** |
| `timeout` | `number` | Timeout for API calls.<br>*Default*: `0` |
| `httpClientOptions` | `Partial<HttpClientOptions>` | Stable configurable http client options. |
| `unstableHttpClientOptions` | `any` | Unstable configurable http client options. |
| `accessToken` | `string` | The OAuth 2.0 Access Token to use for API requests. |

### HttpClientOptions

| Parameter | Type | Description |
|  --- | --- | --- |
| `timeout` | `number` | Timeout in milliseconds. |
| `httpAgent` | `any` | Custom http agent to be used when performing http requests. |
| `httpsAgent` | `any` | Custom https agent to be used when performing http requests. |
| `retryConfig` | `Partial<RetryConfiguration>` | Configurations to retry requests. |

### RetryConfiguration

| Parameter | Type | Description |
|  --- | --- | --- |
| `maxNumberOfRetries` | `number` | Maximum number of retries. <br> *Default*: `0` |
| `retryOnTimeout` | `boolean` | Whether to retry on request timeout. <br> *Default*: `true` |
| `retryInterval` | `number` | Interval before next retry. Used in calculation of wait time for next request in case of failure. <br> *Default*: `1` |
| `maximumRetryWaitTime` | `number` | Overall wait time for the requests getting retried. <br> *Default*: `0` |
| `backoffFactor` | `number` | Used in calculation of wait time for next request in case of failure. <br> *Default*: `2` |
| `httpStatusCodesToRetry` | `number[]` | Http status codes to retry against. <br> *Default*: `[408, 413, 429, 500, 502, 503, 504, 521, 522, 524]` |
| `httpMethodsToRetry` | `HttpMethod[]` | Http methods to retry against. <br> *Default*: `['GET', 'PUT']` |

The API client can be initialized as follows:

```ts
const client = new Client({
  timeout: 0,
  environment: Environment.USServer,
  accessToken: 'AccessToken',
});
```

## Environments

The SDK can be configured to use a different environment for making API calls. Available environments are:

### Fields

| Name | Description |
|  --- | --- |
| US Server | **Default** Please use this US Region if you are an esteemed US Client. |
| EU Server | Please use this EU Server if you are an esteemed EU Client. |

## Authorization

This API uses `OAuth 2 Bearer token`.

## List of APIs

* [Authentication API](doc/controllers/authentication-api.md)
* [Envelopes API](doc/controllers/envelopes-api.md)
* [Templates API](doc/controllers/templates-api.md)
* [Webhooks API](doc/controllers/webhooks-api.md)
* [Parties API](doc/controllers/parties-api.md)
* [Users API](doc/controllers/users-api.md)
* [Accounts API](doc/controllers/accounts-api.md)
* [Reports API](doc/controllers/reports-api.md)

## Classes Documentation

* [ApiResponse](doc/api-response.md)
* [ApiError](doc/api-error.md)

