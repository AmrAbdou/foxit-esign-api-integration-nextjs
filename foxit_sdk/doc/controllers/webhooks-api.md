# Webhooks API

```ts
const webhooksAPIController = new WebhooksAPIController(client);
```

## Class Name

`WebhooksAPIController`

## Methods

* [Get Webhook Channel Details](../../doc/controllers/webhooks-api.md#get-webhook-channel-details)
* [List All Webhook Channels](../../doc/controllers/webhooks-api.md#list-all-webhook-channels)
* [Update Webhook Channel](../../doc/controllers/webhooks-api.md#update-webhook-channel)
* [Reactivate Webhook Channel](../../doc/controllers/webhooks-api.md#reactivate-webhook-channel)
* [Deactivate Webhook Channel](../../doc/controllers/webhooks-api.md#deactivate-webhook-channel)
* [Delete Webhook Channel](../../doc/controllers/webhooks-api.md#delete-webhook-channel)
* [Create Webhook Channel](../../doc/controllers/webhooks-api.md#create-webhook-channel)


# Get Webhook Channel Details

You can poll our API to get information about a specific Webhook channel.

```ts
async getWebhookChannelDetails(
  channelId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `channelId` | `string` | Query, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const channelId = '1';
try {
  const { result, ...httpResponse } = await webhooksAPIController.getWebhookChannelDetails(channelId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response

```
{
  "result": "success",
  "channel": {
    "channelId": 1,
    "companyId": 86,
    "channelName": "abc",
    "webhookUrl": "https://abc.com/xyz",
    "webhookSecret": "xyz",
    "dateCreated": 1575530182000,
    "webhookLevel": "API App",
    "dateUpdated": 1580359286000,
    "status": "active",
    "eventsSubscribedMap": {
      "folder_sent": true,
      "folder_viewed": true,
      "folder_signed": true,
      "folder_cancelled": true,
      "folder_executed": true,
      "folder_deleted": true
    }
  }
}
```


# List All Webhook Channels

To get a list of all the webhook channels in the account, use the following call.

```ts
async listAllWebhookChannels(
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await webhooksAPIController.listAllWebhookChannels();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response

```
{
  "result": "success",
  "total_channel": 3,
  "templatesList": [
    {
      "channelId": 6,
      "companyId": 86,
      "channelName": "channal6",
      "webhookUrl": "https://abc.com/xyz",
      "webhookSecret": "secret6",
      "dateCreated": 1580377929000,
      "webhookLevel": "Account",
      "dateUpdated": 1580377929000,
      "status": "active",
      "eventsSubscribedMap": {
        "folder_sent": true,
        "folder_viewed": true,
        "folder_signed": false,
        "folder_cancelled": true,
        "folder_executed": true,
        "folder_deleted": true
      }
    },
    {
      "channelId": 5,
      "companyId": 86,
      "channelName": "channal5",
      "webhookUrl": "https://qser.com/xyz",
      "webhookSecret": "secret5",
      "dateCreated": 1575970053000,
      "webhookLevel": "Account",
      "dateUpdated": 1576054860000,
      "status": "deactive",
      "eventsSubscribedMap": {
        "folder_sent": true,
        "folder_viewed": true,
        "folder_signed": false,
        "folder_cancelled": true,
        "folder_executed": true,
        "folder_deleted": true
      }
    },
    {
      "channelId": 1,
      "companyId": 86,
      "channelName": "channal1",
      "webhookUrl": "https://aser.com/xyz",
      "webhookSecret": "secret1",
      "dateCreated": 1575530182000,
      "webhookLevel": "API App",
      "dateUpdated": 1580359286000,
      "status": "active",
      "eventsSubscribedMap": {
        "folder_sent": true,
        "folder_viewed": true,
        "folder_signed": true,
        "folder_cancelled": true,
        "folder_executed": true,
        "folder_deleted": true
      }
    }
  ]
}
```


# Update Webhook Channel

To create a new channel via API, please make a call to /webhook/updatewebhookchannel with the following parameters.

```ts
async updateWebhookChannel(
  body: WebhookUpdate,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`WebhookUpdate`](../../doc/models/webhook-update.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const bodyEvents: WebhookEvents = {};
bodyEvents.folderSent = true;
bodyEvents.folderViewed = true;
bodyEvents.folderSigned = true;
bodyEvents.folderCancelled = true;
bodyEvents.folderExecuted = true;
bodyEvents.folderDeleted = true;

const body: WebhookUpdate = {
  channelId: '1',
  channelName: 'updateName',
  webhookUrl: 'https://abc.com/xyz',
  events: bodyEvents,
};
body.webhookSecret = 'updatesecret';
body.webhookLevel = 'Account';

try {
  const { result, ...httpResponse } = await webhooksAPIController.updateWebhookChannel(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response

```
{
  "result": "success",
  "message": "channel successfully updated",
  "channel": {
    "channelId": 1,
    "companyId": 86,
    "channelName": "updateName",
    "webhookUrl": "https://abc.com/xyz",
    "webhookSecret": "updatesecret",
    "dateCreated": 1575530182000,
    "webhookLevel": "Account",
    "dateUpdated": 1580447800000,
    "status": "active",
    "eventsSubscribedMap": {
      "folder_sent": true,
      "folder_cancelled": true,
      "folder_viewed": true,
      "folder_deleted": true,
      "folder_executed": true,
      "folder_signed": true
    }
  }
}
```


# Reactivate Webhook Channel

To create a new channel via API, please make a call to /webhook/updatewebhookchannel with the following parameters.

```ts
async reactivateWebhookChannel(
  channelId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `channelId` | `string` | Query, Required | Your Channel ID received when creating the webhook. Can also be found in the Foxit eSIgn Settings page. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const channelId = 'channelId4';
try {
  const { result, ...httpResponse } = await webhooksAPIController.reactivateWebhookChannel(channelId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response

```
{
  "result": "success",
  "templatesList": "channel successfully activated"
}
```


# Deactivate Webhook Channel

This endpoint will deactivate your Webhook Channel.

**Note:** To reactivate an channel via API, please make a call to /webhook/channelreactivate

```ts
async deactivateWebhookChannel(
  channelId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `channelId` | `string` | Query, Required | Your Channel ID received when creating the webhook. Can also be found in the Foxit eSIgn Settings page. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const channelId = 'channelId4';
try {
  const { result, ...httpResponse } = await webhooksAPIController.deactivateWebhookChannel(channelId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response

```
{
  "result": "success",
  "templatesList": "channel successfully deactivated"
}
```


# Delete Webhook Channel

To delete a webhook channel via API, please make a call to this endpoint with the following parameters.

```ts
async deleteWebhookChannel(
  channelIds: WebhookIdentifiers[],
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `channelIds` | [`WebhookIdentifiers[]`](../../doc/models/webhook-identifiers.md) | Body, Required | Your Channel ID received when creating the webhook. Can also be found in the Foxit eSIgn Settings page. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const channelIds: WebhookIdentifiers[] = [];

const channelIds0ChannelIds: number[] = [192];
const channelIds0: WebhookIdentifiers = {
  channelIds: channelIds0ChannelIds,
};

channelIds[0] = channelIds0;

try {
  const { result, ...httpResponse } = await webhooksAPIController.deleteWebhookChannel(channelIds);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response

```
{
  "result": "success",
  "webhook channels deleted successfully": [
    2,
    3
  ]
}
```


# Create Webhook Channel

```ts
async createWebhookChannel(
  body: WebhookCreation,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`WebhookCreation`](../../doc/models/webhook-creation.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const bodyEvents: WebhookEvents = {};

const body: WebhookCreation = {
  channelName: 'abc',
  webhookUrl: 'https://abc.com/xyz',
  webhookLevel: 'Account',
  events: bodyEvents,
};

try {
  const { result, ...httpResponse } = await webhooksAPIController.createWebhookChannel(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response

```
{
  "result": "success",
  "webhookChannel": {
    "channelId": 6,
    "companyId": 86,
    "channelName": "abc",
    "webhookUrl": "https://abc.com/xyz",
    "webhookSecret": "xyz",
    "dateCreated": null,
    "webhookLevel": "Account",
    "dateUpdated": null,
    "status": "active",
    "eventsSubscribedMap": {
      "folder_sent": true,
      "folder_cancelled": true,
      "folder_viewed": true,
      "folder_deleted": true,
      "folder_executed": true,
      "folder_signed": false
    }
  },
  "message": "channel successfully created"
}
```

