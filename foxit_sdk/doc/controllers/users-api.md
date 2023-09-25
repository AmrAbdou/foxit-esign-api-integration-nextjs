# Users API

```ts
const usersAPIController = new UsersAPIController(client);
```

## Class Name

`UsersAPIController`

## Methods

* [Create User](../../doc/controllers/users-api.md#create-user)
* [Update User](../../doc/controllers/users-api.md#update-user)
* [Delete User](../../doc/controllers/users-api.md#delete-user)
* [List All Users](../../doc/controllers/users-api.md#list-all-users)


# Create User

This endpoint allows you to create a User in any account by using the API.

```ts
async createUser(
  userCreationObject: UserCreationObject,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userCreationObject` | [`UserCreationObject`](../../doc/models/user-creation-object.md) | Body, Required | object to create users |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const userCreationObjectUser: UserCreation = {
  firstName: 'eSign',
  lastName: 'Demo',
  emailId: 'esigndemo@foxitsoftware.com',
  userRole: 'admin',
  active: true,
  sendMailForPasswordReset: true,
};
userCreationObjectUser.allowAdvancedEmailValidation = true;
userCreationObjectUser.address = 'Miami, Florida';
userCreationObjectUser.department = 'DEV';
userCreationObjectUser.title = 'Tech Lead';
userCreationObjectUser.loginPassword = 'TXxgjjezFLAqnR';

const userCreationObject: UserCreationObject = {
  user: userCreationObjectUser,
};

try {
  const { result, ...httpResponse } = await usersAPIController.createUser(userCreationObject);
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
  "message": "new user successfully added",
  "user": {
    "partyId": 54,
    "firstName": "eSign",
    "lastName": "Demo",
    "emailId": "esigndemo@foxitsoftware.com",
    "address": "Miami, Florida",
    "dateCreated": null,
    "companyId": 32567,
    "userRole": "Admin",
    "userAddedDate": null,
    "department": "DEV",
    "title": "Tech Lead",
    "active": true,
    "requestLocale": "auto"
  }
}
```


# Update User

This endpoint allows you to update the User's profile parameters using the API.

```ts
async updateUser(
  userUpdateObject: UserUpdateObject,
  requestOptions?: RequestOptions
): Promise<ApiResponse<void>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userUpdateObject` | [`UserUpdateObject`](../../doc/models/user-update-object.md) | Body, Required | object to update a user |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`void`

## Example Usage

```ts
const userUpdateObjectUser: UserUpdate = {
  partyId: '54',
  firstName: 'eSign',
  lastName: 'Demo',
  userRole: 'super_admin',
  active: false,
};
userUpdateObjectUser.address = 'Miami, Florida';
userUpdateObjectUser.department = 'DEV';
userUpdateObjectUser.title = 'Tech Lead';

const userUpdateObject: UserUpdateObject = {
  user: userUpdateObjectUser,
};

try {
  const { result, ...httpResponse } = await usersAPIController.updateUser(userUpdateObject);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Delete User

This endpoint allows you to delete a user via API.

```ts
async deleteUser(
  userId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `userId` | `string` | Query, Required | Party Id for that user |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const userId = '54';
try {
  const { result, ...httpResponse } = await usersAPIController.deleteUser(userId);
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
  "message": "user 54 deleted successfully"
}
```


# List All Users

This endpoint allows you to list all of the users under a specific account via API.

```ts
async listAllUsers(
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
  const { result, ...httpResponse } = await usersAPIController.listAllUsers();
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
  "usersList": [
    {
      "partyId": 54,
      "firstName": "Steve",
      "lastName": "Rogers",
      "emailId": "abc@gmail.com",
      "address": "New Delhi, India",
      "dateCreated": 1492662823000,
      "companyId": 32567,
      "userRole": "Admin",
      "userAddedDate": 1504778908000,
      "department": "DEV",
      "title": "Tech Lead",
      "active": true,
      "requestLocale": "auto",
      "managerId": null
    },
    {
      "partyId": 123,
      "firstName": "Sandra",
      "lastName": "Smith",
      "emailId": "san_smith@esigngenie.com",
      "address": "East Delhi, India",
      "dateCreated": 1492662823000,
      "companyId": 32567,
      "userRole": "Super-Administrator",
      "userAddedDate": 1504779092000,
      "department": "Testing",
      "title": "Test Lead",
      "active": true,
      "requestLocale": "auto",
      "managerId": null
    },
    {
      "partyId": 456,
      "firstName": "Amanda",
      "lastName": "Williams",
      "emailId": "williams_ama@esigngenie.com",
      "address": "",
      "dateCreated": 1492662824000,
      "companyId": 32567,
      "userRole": "super_admin",
      "userAddedDate": 1504777539000,
      "department": null,
      "title": null,
      "active": true,
      "requestLocale": "auto",
      "managerId": null
    },
    {
      "partyId": 789,
      "firstName": "Hannah",
      "lastName": "Pitt",
      "emailId": "pitthannah@esigngenie.com",
      "address": null,
      "dateCreated": 1492662824000,
      "companyId": 32567,
      "userRole": "super_admin",
      "userAddedDate": 1504785081000,
      "department": "",
      "title": "",
      "active": true,
      "requestLocale": "auto",
      "managerId": null
    }
  ],
  "allActiveUsers": 4,
  "allInactiveUsers": 0
}
```

