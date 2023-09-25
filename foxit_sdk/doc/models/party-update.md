
# Party Update

A list of recipient parties you're sending the folder to. Every entry must contain firstName, lastName, emailId, permission and sequence fields.

## Structure

`PartyUpdate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `action` | `string` | Required | Value can be either update or change. *Note:* 'update' value can be used for Draft, Shared, Partially Signed folders. 'change' value can be used only in the Draft status folders.<br>**Constraints**: *Pattern*: `update\|change` |
| `firstName` | `string` | Required | The first name of the recipient |
| `lastName` | `string` | Required | The last name of the recipient |
| `emailId` | `string` | Required | The email name of the recipient |
| `sequence` | `number` | Required | Use this field to assign a sequence number to a recipient in the list of recipient parties. Use unique sequence numbers for each party starting with 1 like 1,2,3,4.... If a single person appears multiple times in the signing workflow, please assign a different sequence each time the recipient is repeated. |

## Example (as JSON)

```json
{
  "action": "update",
  "firstName": "John",
  "lastName": "Doe",
  "emailId": "john.doe@example.com",
  "sequence": 1
}
```

