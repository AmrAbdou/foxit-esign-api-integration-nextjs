
# Base Folder

A folder meant to be used when sending URLs

## Structure

`BaseFolder`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `folderName` | `string` | Required | Name of the document(s) folder |
| `parties` | [`Party[]`](../../doc/models/party.md) | Required | - |
| `fields` | `unknown[]` | Required | - |
| `sendNow` | `boolean \| undefined` | Optional | Use this field to send the folder to the recipient parties. Each party will then receive a unique link in their email to sign the document. The invitation mail and subject in this case will be the same as the default invitation mail setup in your account.<br>**Default**: `true` |
| `createEmbeddedSigningSession` | `string` | Required | **Default**: `'true'` |
| `createEmbeddedSigningSessionForAllParties` | `string` | Required | **Default**: `'true'` |

## Example (as JSON)

```json
{
  "folderName": "onboardingmulti_2.pdf",
  "parties": [
    {
      "firstName": "Signer",
      "lastName": "1",
      "emailId": "jorgeluceda+101@gmail.com",
      "permission": "FILL_FIELDS_AND_SIGN",
      "sequence": 1,
      "allowNameChange": "false"
    }
  ],
  "fields": [
    {
      "type": "text",
      "x": 348,
      "y": 157,
      "width": 171,
      "height": 28,
      "pageNumber": 1,
      "documentNumber": 1,
      "hideFieldNameForRecipients": true,
      "name": "Number(fillable) d0107804-ce35-45e8-8d06-a26d67f0d9bd",
      "tooltip": "First Name",
      "value": "",
      "required": false,
      "characterLimit": 100,
      "party": 1,
      "fontSize": 12,
      "fontColor": "#000000",
      "options": [
        "None"
      ],
      "tabOrder": 1
    },
    {
      "type": "text",
      "x": 348,
      "y": 257,
      "width": 171,
      "height": 28,
      "pageNumber": 1,
      "documentNumber": 1,
      "hideFieldNameForRecipients": true,
      "name": "Number(fillable) d0107804-ce35-45e8-8d06-a26d67a1e9ee",
      "tooltip": "Last Name",
      "value": "",
      "required": false,
      "characterLimit": 100,
      "party": 1,
      "fontSize": 12,
      "fontColor": "#000000",
      "options": [
        "None"
      ],
      "tabOrder": 2
    },
    {
      "type": "checkbox",
      "x": 348,
      "y": 357,
      "width": 13,
      "height": 13,
      "pageNumber": 1,
      "documentNumber": 1,
      "name": "isBorn",
      "tooltip": "First child?",
      "required": false,
      "party": 1,
      "group": null,
      "multicheck": true,
      "checked": true,
      "tabOrder": 3,
      "hideCheckboxBorder": true
    },
    {
      "type": "date",
      "x": 348,
      "y": 457,
      "width": 60,
      "height": 13,
      "pageNumber": 1,
      "documentNumber": 1,
      "tooltip": "Date this is signed",
      "required": true,
      "party": 1,
      "name": "exampleDateField",
      "hideFieldNameForRecipients": true,
      "value": "",
      "dateFormat": "MM-DD-YYYY"
    }
  ],
  "sendNow": true,
  "createEmbeddedSigningSession": "true",
  "createEmbeddedSigningSessionForAllParties": "true"
}
```

