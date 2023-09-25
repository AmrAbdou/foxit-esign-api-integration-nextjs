
# User Creation

The parameters used to create a user

## Structure

`UserCreation`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `firstName` | `string` | Required | First name of the account user |
| `lastName` | `string` | Required | Last name of account user |
| `emailId` | `string` | Required | Email address of account user |
| `userRole` | [`UserRolesEnum`](../../doc/models/user-roles-enum.md) | Required | - |
| `active` | `boolean` | Required | Choose whether to activate this account immediately on creation<br>**Default**: `true` |
| `sendMailForPasswordReset` | `boolean` | Required | Choose whether to send the user an email to reset his password upon user creation<br>**Default**: `true` |
| `allowAdvancedEmailValidation` | `boolean \| undefined` | Optional | Choose whether to validate the user's email address when creating this account<br>**Default**: `false` |
| `address` | `string \| undefined` | Optional | The location of this account user |
| `department` | `string \| undefined` | Optional | Department of the user |
| `title` | `string \| undefined` | Optional | Designation/Title of account user |
| `managerId` | `string \| undefined` | Optional | The ID of one of the Admins or Super-Admins from your account, which will act as manager for this user |
| `loginPassword` | `string \| undefined` | Optional | The initial  password for this user, it can be combination of Uppercase/Lowercase letters, numbers and special characters |

## Example (as JSON)

```json
{
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
```

