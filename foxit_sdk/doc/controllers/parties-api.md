# Parties API

```ts
const partiesAPIController = new PartiesAPIController(client);
```

## Class Name

`PartiesAPIController`

## Methods

* [Create Email Group](../../doc/controllers/parties-api.md#create-email-group)
* [Get Email Group Details](../../doc/controllers/parties-api.md#get-email-group-details)


# Create Email Group

To create a new email group via API, please make a call to parties/createEmailGroup with the following parameters.

You can only pass up to 20 party details.

```ts
async createEmailGroup(
  body: unknown,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | `unknown` | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const body = '{"emailGroupName":"Email_Group_Name","emailGroupDescription":"Email_Group_Description","allowAdvancedEmailValidation":true,"parties":[{"firstName":"Sandra","lastName":"Smith","emailId":"san_smith@esigngenie.com"},{"firstName":"Hannah","lastName":"Pitt","emailId":"pitthannah@esigngenie.com"}]}';
try {
  const { result, ...httpResponse } = await partiesAPIController.createEmailGroup(body);
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
  "message": "new email group successfully added",
  "emailGroup": {
    "groupId": 230,
    "groupName": "Email_Group_Name",
    "groupDesc": "Email_Group_Description",
    "dateCreated": 1561549235000,
    "companyId": 11,
    "parties": [
      {
        "firstName": "Sandra",
        "lastName": "Smith",
        "emailId": "san_smith@esigngenie.com"
      },
      {
        "firstName": "Hannah",
        "lastName": "Pitt",
        "emailId": "pitthannah@esigngenie.com"
      }
    ]
  }
}
```


# Get Email Group Details

You can pool our API to get email group information.

You can pass this request with no parameters to get the details of all of the email groups in your account.

```ts
async getEmailGroupDetails(
  body: EmailGroupIdentifiers,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`EmailGroupIdentifiers`](../../doc/models/email-group-identifiers.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const bodyEmailGroupNames: string[] = ['Email_Group_1', 'Email_Group_2'];
const body: EmailGroupIdentifiers = {
  emailGroupNames: bodyEmailGroupNames,
};

try {
  const { result, ...httpResponse } = await partiesAPIController.getEmailGroupDetails(body);
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
  "allEmailGroups": [
    {
      "groupId": 1,
      "groupName": "Email_Group_1",
      "groupDesc": "",
      "dateCreated": 1512677389000,
      "companyId": 11,
      "parties": [
        {
          "firstName": "Amanda",
          "lastName": "Williams",
          "emailId": "williams_ama@esigngenie.com"
        },
        {
          "firstName": "Hannah",
          "lastName": "Pitt",
          "emailId": "pitthannah@esigngenie.com"
        },
        ".."
      ]
    },
    {
      "groupId": 176,
      "groupName": "Email_Group_2",
      "groupDesc": "Email_Group_Description",
      "dateCreated": 1425120364000,
      "companyId": 11,
      "parties": [
        {
          "firstName": "Sandra",
          "lastName": "Smith",
          "emailId": "san_smith@esigngenie.com"
        },
        {
          "firstName": "Bruce",
          "lastName": "Wayne",
          "emailId": "bruce.wayne_as@esigngenie.com"
        },
        {
          "firstName": "Amanda",
          "lastName": "Williams",
          "emailId": "williams_ama@esigngenie.com"
        }
      ]
    }
  ]
}
```

