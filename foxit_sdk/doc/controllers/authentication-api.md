# Authentication API

```ts
const authenticationAPIController = new AuthenticationAPIController(client);
```

## Class Name

`AuthenticationAPIController`


# Generate Access Token

Generate your Access Token

:information_source: **Note** This endpoint does not require authentication.

```ts
async generateAccessToken(
  contentType: ContentTypeEnum,
  clientId: string,
  clientSecret: string,
  grantType: GrantTypeEnum,
  scope: ScopeEnum,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contentType` | [`ContentTypeEnum`](../../doc/models/content-type-enum.md) | Header, Required | - |
| `clientId` | `string` | Form, Required | - |
| `clientSecret` | `string` | Form, Required | - |
| `grantType` | [`GrantTypeEnum`](../../doc/models/grant-type-enum.md) | Form, Required | - |
| `scope` | [`ScopeEnum`](../../doc/models/scope-enum.md) | Form, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const contentType = 'application/x-www-form-urlencoded';
const clientId = 'client_id8';
const clientSecret = 'client_secret8';
const grantType = 'client_credentials';
const scope = 'read-write';
try {
  const { result, ...httpResponse } = await authenticationAPIController.generateAccessToken(contentType, clientId, clientSecret, grantType, scope);
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
  "access_token": "ACCESS_TOKEN",
  "token_type": "bearer",
  "expires_in": 31536000
}
```

