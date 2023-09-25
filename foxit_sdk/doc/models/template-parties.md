
# Template Parties

Template's party roles and permission

## Structure

`TemplateParties`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `parties` | [`TemplateParty[]`](../../doc/models/template-party.md) | Required | - |

## Example (as JSON)

```json
{
  "parties": [
    {
      "permission": "FILL_FIELDS_AND_SIGN",
      "sequence": 1,
      "partyRole": "Manager"
    },
    {
      "permission": "FILL_FIELDS_AND_SIGN",
      "sequence": 2,
      "partyRole": "Manager 2"
    }
  ]
}
```

