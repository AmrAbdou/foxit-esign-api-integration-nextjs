
# Account Creation Object

The parameters used to create an account as a partner

## Structure

`AccountCreationObject`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `clientId` | `string` | Required | The API `client_id` key which can be found in the API menu under the Settings Tab |
| `clientSecret` | `string` | Required | The API `client_secret` key which can be found in the API menu under the Settings Tab |
| `company` | [`AccountCreationCompanyObject`](../../doc/models/account-creation-company-object.md) | Required | - |
| `user` | [`AccountCreationUserObject`](../../doc/models/account-creation-user-object.md) | Required | - |
| `planName` | [`PlanNamesEnum`](../../doc/models/plan-names-enum.md) | Required | - |
| `accountType` | `string` | Required | Use partner-pay for partner managed type of accounts<br>**Default**: `'partner-pay'` |
| `partnerCode` | `string` | Required | Enter the unique partner code assigned to the partner to link this account with the specified partner |

## Example (as JSON)

```json
{
  "client_id": "123456789012345678901234567890",
  "client_secret": "123456789012345678901234567890",
  "company": {
    "companyName": "Wayne Tech",
    "companyAddress": "LA, US"
  },
  "user": {
    "firstName": "Bruce",
    "lastName": "Wayne",
    "emailId": "esigndemo@foxitsoftware.com",
    "loginPassword": "Welcome@123!"
  },
  "planName": "Professional",
  "accountType": "partner-pay",
  "partner_code": "WAYNE_TECH"
}
```

