
# Webhook Events

## Structure

`WebhookEvents`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `folderSent` | `boolean \| undefined` | Optional | When a document folder is sent via web and webhook channel set as “Account” level, Foxit eSign calls your webhook URL with this event information.<br>**Default**: `false` |
| `folderViewed` | `boolean \| undefined` | Optional | When party open this document folder via email or embeddedSession URL, Foxit eSign calls your Webhook with this event information.<br>**Default**: `false` |
| `folderSigned` | `boolean \| undefined` | Optional | When party signs this document folder, Foxit eSign calls your Webhook with this event information.<br>**Default**: `false` |
| `folderCancelled` | `boolean \| undefined` | Optional | When party canceled this document folder than Foxit eSign calls your Webhook with this event information.<br>**Default**: `false` |
| `folderExecuted` | `boolean \| undefined` | Optional | When all party signed this document folder, Foxit eSign calls your Webhook with this event information.<br>**Default**: `false` |
| `folderDeleted` | `boolean \| undefined` | Optional | When party canceled this document folder, Foxit eSign calls your Webhook with this event information.<br>**Default**: `false` |

## Example (as JSON)

```json
{
  "folder_sent": null,
  "folder_viewed": null,
  "folder_signed": null,
  "folder_cancelled": null,
  "folder_executed": null,
  "folder_deleted": null
}
```

