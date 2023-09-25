
# Session Generation

## Structure

`SessionGeneration`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `folderId` | `number` | Required | Folder id you want to use to regenerate the expired folder embedded signing token for this folder. You can determine the folder id from the folder URL. |
| `emailId` | `string` | Required | Recipient email id you want to use to regenerate the expired folder embedded signing token for this folder. |
| `partyId` | `string \| undefined` | Optional | Recipient party id you want to use to regenerate the expired folder embedded signing token for this folder. |
| `sessionExpire` | `string \| undefined` | Optional | Use this field to initiate the expiration of the embedded signing session.<br>**Default**: `'false'` |
| `expiry` | `string \| undefined` | Optional | Use this field to enter the time duration in milliseconds of the expiry on the embedded signing session. *Note*: required if `sessionExpire` is `true` |

## Example (as JSON)

```json
{
  "folderId": 104,
  "emailId": "emailId0",
  "partyId": null,
  "sessionExpire": null,
  "expiry": null
}
```

