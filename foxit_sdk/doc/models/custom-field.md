
# Custom Field

Use the custom fields as per requirements. Maximum of two custom fields can be passed to Foxit eSign via API that are stored at the folder level. Webhook response includes these custom field.

## Structure

`CustomField`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | Name of the custom field |
| `value` | `string \| undefined` | Optional | Value of the custom field |

## Example (as JSON)

```json
{
  "name": null,
  "value": null
}
```

