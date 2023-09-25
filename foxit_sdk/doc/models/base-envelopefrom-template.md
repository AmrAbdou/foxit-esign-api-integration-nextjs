
# Base Envelopefrom Template

## Structure

`BaseEnvelopefromTemplate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `folderName` | `string \| undefined` | Optional | If this value is not provided, then the document(s) folder name is kept same as the template(s) name(s). |
| `templateIds` | `number[]` | Required | - |
| `fields` | `unknown[] \| undefined` | Optional | - |
| `allowAdvancedEmailValidation` | `boolean \| undefined` | Optional | - |
| `parties` | [`Party[]`](../../doc/models/party.md) | Required | - |
| `folderPassword` | `string \| undefined` | Optional | - |
| `signInSequence` | `boolean \| undefined` | Optional | - |
| `inPersonEnable` | `boolean \| undefined` | Optional | - |
| `sendNow` | `boolean \| undefined` | Optional | - |
| `signSuccessUrlAllParties` | `boolean \| undefined` | Optional | - |
| `createEmbeddedSendingSession` | `boolean \| undefined` | Optional | - |
| `fixRecipientParties` | `boolean \| undefined` | Optional | - |
| `fixDocuments` | `boolean \| undefined` | Optional | - |
| `sendSuccessUrl` | `string \| undefined` | Optional | - |
| `sendErrorUrl` | `string \| undefined` | Optional | - |
| `hideSignerSelectOption` | `boolean \| undefined` | Optional | - |
| `hideSignerActions` | `boolean \| undefined` | Optional | - |
| `hideSenderName` | `boolean \| undefined` | Optional | - |
| `hideSendButton` | `boolean \| undefined` | Optional | - |
| `hideFolderName` | `boolean \| undefined` | Optional | - |
| `hideDocumentsName` | `boolean \| undefined` | Optional | - |
| `hideAddMeButton` | `boolean \| undefined` | Optional | - |
| `hideAddNewButton` | `boolean \| undefined` | Optional | - |
| `hideAddGroupButton` | `boolean \| undefined` | Optional | - |
| `createEmbeddedSigningSession` | `boolean \| undefined` | Optional | - |
| `createEmbeddedSigningSessionForAllParties` | `boolean \| undefined` | Optional | - |
| `embeddedSignersEmailIds` | `string[] \| undefined` | Optional | - |
| `signSuccessUrl` | `string \| undefined` | Optional | - |
| `signDeclineUrl` | `string \| undefined` | Optional | - |
| `signLaterUrl` | `string \| undefined` | Optional | - |
| `signErrorUrl` | `string \| undefined` | Optional | - |
| `hideNextRequiredFieldBtn` | `boolean \| undefined` | Optional | - |
| `themeColor` | `string \| undefined` | Optional | - |
| `hideDeclineToSign` | `boolean \| undefined` | Optional | - |
| `hideMoreAction` | `boolean \| undefined` | Optional | - |
| `hideAddPartiesOption` | `boolean \| undefined` | Optional | - |
| `sessionExpire` | `boolean \| undefined` | Optional | - |
| `expiry` | `number \| undefined` | Optional | - |
| `senderEmail` | `string \| undefined` | Optional | - |
| `allowSendNowAndEmbeddedSigningSession` | `boolean \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "templateIds": [
    271591
  ],
  "parties": [
    {
      "firstName": "FIRST_NAME_OF_RECIPIENT_PARTY",
      "lastName": "LAST_NAME_OF_RECIPIENT_PARTY",
      "emailId": "mhashmi@esigngenie.com",
      "permission": "FILL_FIELDS_AND_SIGN",
      "workflowSequence": 1,
      "sequence": 1,
      "hostEmailId": "EMAIL_ID_OF_INPERSON_ADMINISTRATOR",
      "allowNameChange": "true",
      "signerAuthLevel": "Email Access Code"
    },
    {
      "firstName": "FIRST_NAME_OF_RECIPIENT_PARTY",
      "lastName": "LAST_NAME_OF_RECIPIENT_PARTY",
      "emailId": "mishkat.hashmi@yahoo.in",
      "permission": "FILL_FIELDS_AND_SIGN",
      "workflowSequence": 2,
      "sequence": 2,
      "hostEmailId": "EMAIL_ID_OF_INPERSON_ADMINISTRATOR",
      "allowNameChange": "true",
      "signerAuthLevel": "User-defined Access Code"
    }
  ]
}
```

