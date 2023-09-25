
# Account Creation User Object

The user object leveraged when providing details about the main user of a new account.

## Structure

`AccountCreationUserObject`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `firstName` | `string` | Required | First name of the account user |
| `lastName` | `string` | Required | Last name of account user |
| `emailId` | `string` | Required | Email address of account user |
| `loginPassword` | `string` | Required | The initial password for this user, it can be combination of Uppercase/Lowercase letters, numbers and special characters |

## Example (as JSON)

```json
{
  "firstName": "eSign",
  "lastName": "Demo",
  "emailId": "esigndemo@foxitsoftware.com",
  "loginPassword": "Welcome@123!"
}
```

