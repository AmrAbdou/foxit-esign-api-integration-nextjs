
# User Update Object

The generic object for Updating a User

## Structure

`UserUpdateObject`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `user` | [`UserUpdate`](../../doc/models/user-update.md) | Required | - |

## Example (as JSON)

```json
{
  "user": {
    "partyId": "54",
    "firstName": "eSign",
    "lastName": "Demo",
    "address": "Miami, Florida",
    "userRole": "super_admin",
    "department": "DEV",
    "title": "Tech Lead",
    "active": false
  }
}
```

