
# Envelope Fields Update

## Structure

`EnvelopeFieldsUpdate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `folderId` | `number` | Required | - |
| `customField1` | [`CustomField \| undefined`](../../doc/models/custom-field.md) | Optional | - |
| `customField2` | [`CustomField \| undefined`](../../doc/models/custom-field.md) | Optional | - |
| `fields` | `unknown` | Required | - |

## Example (as JSON)

```json
{
  "folderId": null,
  "fields": {
    "FIELD1_NAME": "VALUE",
    "FIELD2_NAME": "VALUE"
  }
}
```

