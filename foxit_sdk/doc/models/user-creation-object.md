
# User Creation Object

The generic object of a User

## Structure

`UserCreationObject`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `user` | [`UserCreation`](../../doc/models/user-creation.md) | Required | - |

## Example (as JSON)

```json
{
  "user": {
    "firstName": "eSign",
    "lastName": "Demo",
    "emailId": "esigndemo@foxitsoftware.com",
    "allowAdvancedEmailValidation": true,
    "address": "Miami, Florida",
    "userRole": "admin",
    "department": "DEV",
    "title": "Tech Lead",
    "active": true,
    "loginPassword": "TXxgjjezFLAqnR",
    "sendMailForPasswordReset": true
  }
}
```

