
# Template Party

## Structure

`TemplateParty`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `permission` | [`PermissionsEnum`](../../doc/models/permissions-enum.md) | Required | Use this field to assign template permissions to a party. Can be any one of the following values: FILL_FIELDS_AND_SIGN, FILL_FIELDS_ONLY, SIGN_ONLY, VIEW_ONLY |
| `sequence` | `number` | Required | - |
| `partyRole` | `string` | Required | - |

## Example (as JSON)

```json
{
  "permission": "FILL_FIELDS_AND_SIGN",
  "sequence": 1,
  "partyRole": "Manager"
}
```

