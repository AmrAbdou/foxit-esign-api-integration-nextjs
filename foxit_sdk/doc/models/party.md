
# Party

A list of recipient parties you're sending the folder to. Every entry must contain firstName, lastName, emailId, permission and sequence fields.

## Structure

`Party`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `firstName` | `string` | Required | The first name of the recipient |
| `lastName` | `string` | Required | The last name of the recipient |
| `emailId` | `string` | Required | The email name of the recipient |
| `permission` | [`PermissionsEnum`](../../doc/models/permissions-enum.md) | Required | - |
| `sequence` | `number` | Required | Use this field to assign a sequence number to a recipient in the list of recipient parties. Use unique sequence numbers for each party starting with 1 like 1,2,3,4.... If a single person appears multiple times in the signing workflow, please assign a different sequence each time the recipient is repeated. |
| `signerAuthLevel` | [`SignerAuthLevelsEnum \| undefined`](../../doc/models/signer-auth-levels-enum.md) | Optional | The level of authentication that a signer will leverage for verification purposes |
| `isPlaceholder` | `boolean \| undefined` | Optional | Use this field to initiate the party is a placeholder. Note: 1. firstName, lastName, emailId parameter's value must be blank of this party. 2. To add the placeholder, one recipient must be requred with 'PARTY_ASSIGNER' permission.<br>**Default**: `false` |
| `partyRole` | `string \| undefined` | Optional | Use this field to assign a role of placeholder. |
| `allowNameChange` | `string \| undefined` | Optional | Value can be either true or false Use this parameter for allowing signer to update first and last name before completing the signing process.<br>**Default**: `'false'` |
| `partyIsEmailGroup` | `string \| undefined` | Optional | Use this parameter when creating a party as bulk. **Note:** Please make sure the "Update Name Change"option is enabled from company settings.<br>**Default**: `'false'` |
| `workflowSequence` | `number \| undefined` | Optional | **Default**: `1` |
| `hostEmailId` | `string \| undefined` | Optional | Email address of In-Person Administrator |

## Example (as JSON)

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "emailId": "john.doe@example.com",
  "permission": "FILL_FIELDS_AND_SIGN",
  "sequence": 1
}
```

