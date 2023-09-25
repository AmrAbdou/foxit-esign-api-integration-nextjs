
# Report

The optional filters that a report may leverage

## Structure

`Report`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `status` | [`EnvelopeStatusEnum`](../../doc/models/envelope-status-enum.md) | Required | Download data by the folder status. Status parameter can have any of the following values: EXECUTED,SHARED,DRAFT, PARTIALLY SIGNED, CANCELLED, EXPIRED and DELETED. |
| `creationDateFrom` | `string` | Required | Start of the Creation Date range. Accepted format: YYYY-MM-DD.<br>**Constraints**: *Pattern*: `^\d{4}\-(0[1-9]\|1[012])\-(0[1-9]\|[12][0-9]\|3[01])$` |
| `creationDateTo` | `string` | Required | End of the Creation Date range. Accepted format: YYYY-MM-DD.<br>**Constraints**: *Pattern*: `^\d{4}\-(0[1-9]\|1[012])\-(0[1-9]\|[12][0-9]\|3[01])$` |
| `folderName` | `string \| undefined` | Optional | Any folder which contains this string. |
| `includeFields` | `string \| undefined` | Optional | Including folder fields in report.<br>**Default**: `'false'` |
| `authorEmail` | `string \| undefined` | Optional | Author email in report. |
| `signerEmail` | `string \| undefined` | Optional | Signer email in report. |

## Example (as JSON)

```json
{
  "status": "EXECUTED",
  "creationDateFrom": "2022-01-01",
  "creationDateTo": "2022-04-01"
}
```

