# Accounts API

```ts
const accountsAPIController = new AccountsAPIController(client);
```

## Class Name

`AccountsAPIController`

## Methods

* [Create New Account](../../doc/controllers/accounts-api.md#create-new-account)
* [Cancel Account](../../doc/controllers/accounts-api.md#cancel-account)
* [Reactivate Account](../../doc/controllers/accounts-api.md#reactivate-account)
* [Change Licenses](../../doc/controllers/accounts-api.md#change-licenses)
* [Change Plan](../../doc/controllers/accounts-api.md#change-plan)


# Create New Account

This endpoint allows you to create a new account as a partner by using the API.

*Note:* instead of providing the `access_token` Authorization header from your partner portal, you will instead provide the `client_id` and `client_secret` as part of the body parameters of this call.

:information_source: **Note** This endpoint does not require authentication.

```ts
async createNewAccount(
  accountCreationobject: AccountCreationObject,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `accountCreationobject` | [`AccountCreationObject`](../../doc/models/account-creation-object.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const accountCreationobjectCompany: AccountCreationCompanyObject = {
  companyName: 'Wayne Tech',
  companyAddress: 'LA, US',
};

const accountCreationobjectUser: AccountCreationUserObject = {
  firstName: 'Bruce',
  lastName: 'Wayne',
  emailId: 'esigndemo@foxitsoftware.com',
  loginPassword: 'Welcome@123!',
};

const accountCreationobject: AccountCreationObject = {
  clientId: '123456789012345678901234567890',
  clientSecret: '123456789012345678901234567890',
  company: accountCreationobjectCompany,
  user: accountCreationobjectUser,
  planName: 'Professional',
  accountType: 'partner-pay',
  partnerCode: 'WAYNE_TECH',
};

try {
  const { result, ...httpResponse } = await accountsAPIController.createNewAccount(accountCreationobject);
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
  "refresh_token": "12345678901234567890123456789012",
  "access_token": "12345678901234567890123456789012",
  "token_type": "bearer",
  "expires_in": 31535999,
  "result": "success",
  "message": "new company registration successfull",
  "company": {
    "companyId": 30,
    "companyName": "Wayne Tech",
    "companyAddress": "LA, US",
    "companyTimeZone": "America/Los_Angeles",
    "companyDateFormat": "MM/DD/YYYY",
    "creationDate": 1504696542000,
    "companyReferer": "test",
    "accountType": "partner-pay",
    "accountStatus": "active",
    "accountOwner": 1147,
    "passwordProtectEnvelopes": false,
    "attachCertificateToDocs": false,
    "defaultSignOption": "TYPE",
    "sendNotificationToOwner": false,
    "sendPDFWithMail": true,
    "defaultFieldNavigation": "ALL",
    "defaultDisplayIndicators": true,
    "allowRecipientsToDelegate": false,
    "allFeatures": [
      "Reports",
      "Digitally Certified Pdf",
      "Upload to Cloud",
      "Attachments"
    ],
    "signatureFont": null,
    "viewOnlyDefaulSignOption": false,
    "customSenderName": null,
    "customSenderEmail": null
  }
}
```


# Cancel Account

This endpoint allows you to cancel a specific account.

`Note:` please provide the `access_token` Authorization header from the account which you are looking to cancel.

```ts
async cancelAccount(
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
  const { result, ...httpResponse } = await accountsAPIController.cancelAccount();
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
  "message": "company 32567 cancelled successfully"
}
```


# Reactivate Account

This endpoint allows you to reactivate a specific account.

`Note:` please provide the `access_token` Authorization header from the account which you are looking to reactivate.

```ts
async reactivateAccount(
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
  const { result, ...httpResponse } = await accountsAPIController.reactivateAccount();
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
  "message": "company 32567 reactivated successfully"
}
```


# Change Licenses

This endpoint allows you to edit the number of licenses available in a a specific account.

`Note:` please provide the `access_token` Authorization header from the account which you are looking to reactivate.

```ts
async changeLicenses(
  newNumberOfLicences: string,
  partnerCode: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `newNumberOfLicences` | `string` | Query, Required | The new required number of licences for the account |
| `partnerCode` | `string` | Query, Required | Enter the unique partner code assigned to the partner to link this account with the specified partner |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const newNumberOfLicences = '20';
const partnerCode = 'partnerCode0';
try {
  const { result, ...httpResponse } = await accountsAPIController.changeLicenses(newNumberOfLicences, partnerCode);
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
  "message": "company 32567 licence number changed to 3"
}
```


# Change Plan

This endpoint allows you to change the plan type for a specific account.

**Note:** please provide the `access_token` Authorization header from the account which you are looking to change the plan type for.

```ts
async changePlan(
  newNumberOfLicenses: string,
  newPlan: PlanNamesEnum,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `newNumberOfLicenses` | `string` | Query, Required | The new required number of licences for the account in the new plan |
| `newPlan` | [`PlanNamesEnum`](../../doc/models/plan-names-enum.md) | Query, Required | Name of plan that you want to subscribe to |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const newNumberOfLicenses = '20';
const newPlan = 'Business Premium';
try {
  const { result, ...httpResponse } = await accountsAPIController.changePlan(newNumberOfLicenses, newPlan);
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
  "message": "company 32567 plan changed to Business Premium"
}
```

