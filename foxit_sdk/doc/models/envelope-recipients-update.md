
# Envelope Recipients Update

## Structure

`EnvelopeRecipientsUpdate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `folderId` | `number` | Required | - |
| `allowAdvancedEmailValidation` | `boolean \| undefined` | Optional | Choose whether to validate the email address of the recipients.<br>**Default**: `false` |
| `parties` | [`Party[]`](../../doc/models/party.md) | Required | - |

## Example (as JSON)

```json
{
  "folderId": null,
  "parties": {
    "firstName": "John",
    "lastName": "Doe",
    "emailId": "john.doe@example.com",
    "permission": "FILL_FIELDS_AND_SIGN",
    "sequence": 1
  }
}
```

