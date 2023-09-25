
# Party 2

## Structure

`Party2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `firstName` | `string` | Required | - |
| `lastName` | `string` | Required | - |
| `emailId` | `string` | Required | - |
| `permission` | `string` | Required | - |
| `workflowSequence` | `number` | Required | - |
| `sequence` | `number` | Required | - |
| `hostEmailId` | `string` | Required | - |
| `allowNameChange` | `boolean` | Required | - |
| `dialingCode` | `string \| undefined` | Optional | - |
| `signerAuthLevel` | `string` | Required | - |
| `userDefinedAccessCode` | `string \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "firstName": "FIRST_NAME_OF_RECIPIENT_PARTY",
  "lastName": "LAST_NAME_OF_RECIPIENT_PARTY",
  "emailId": "mhashmi@esigngenie.com",
  "permission": "FILL_FIELDS_AND_SIGN",
  "workflowSequence": 1,
  "sequence": 1,
  "hostEmailId": "EMAIL_ID_OF_INPERSON_ADMINISTRATOR",
  "allowNameChange": true,
  "signerAuthLevel": "Email Access Code"
}
```

