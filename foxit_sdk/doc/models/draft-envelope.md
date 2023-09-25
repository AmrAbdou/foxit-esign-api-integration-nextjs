
# Draft Envelope

An Envelope meant to be used when sending documents via URLs

## Structure

`DraftEnvelope`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `folderId` | `number` | Required | Envelope Id that has been saved in the draft with documents. |
| `folderName` | `string` | Required | Name of the document(s) folder |
| `parties` | [`Party[]`](../../doc/models/party.md) | Required | List of recipient parties can be added in the draft. Every entry must contain firstName, lastName, emailId, permission and sequence fields. |
| `signInSequence` | `boolean \| undefined` | Optional | This field is used to determine whether recipients will sign the envelope documents in a sequence. If false, then all the recipients receive invitation email simultaneously. When true, then each recipient receives invitation email successively after previous recipient completes the required task, like signing the documents or filling fields, etc.<br>**Default**: `false` |
| `inPersonEnable` | `boolean \| undefined` | Optional | This field is used to initiate the in-person signing process which can be easily completed on any device in a matter of minutes and avoids email based signatures where required. If false, then all the recipients receive the invitation email simultaneously. When true, then in-person administrator receives an invitation email to initiate the signing process for the signer.<br>**Default**: `false` |
| `fields` | `unknown[] \| undefined` | Optional | - |
| `sendNow` | `boolean \| undefined` | Optional | Use this field to send the folder to the recipient parties. Each party will then receive a unique link in their email to sign the document. The invitation mail and subject in this case will be the same as the default invitation mail setup in your account.<br>**Default**: `true` |
| `createEmbeddedSigningSession` | `boolean \| undefined` | Optional | Signing session token will be generated without sending out emails to the recipients.<br>**Default**: `false` |
| `embeddedSignersEmailIds` | `string[] \| undefined` | Optional | An array of email ids of recipients for whom an embedded signing session needs to be created. The email ids from the recipient parties added in the parties list. |
| `customField1` | [`CustomField \| undefined`](../../doc/models/custom-field.md) | Optional | Maximum of two custom fields can be passed to Foxit eSign via API that are stored at the folder level. Webhook response includes these custom field. |
| `signSuccessUrl` | `string \| undefined` | Optional | Enter the absolute URL for the signers who will be redirected to after successfully signing in embedded signing view. |
| `signDeclineUrl` | `string \| undefined` | Optional | Enter the absolute URL for the signers who will be redirected to if declines to sign in embedded signing view. |
| `signLaterUrl` | `string \| undefined` | Optional | Enter the absolute URL for the signers who will be redirected to if chooses to sign later in embedded signing view. |
| `signErrorUrl` | `string \| undefined` | Optional | Enter the absolute URL for the signers who will be redirected to if error comes during signing the document in embedded signing view. |
| `allowSendNowAndEmbeddedSigningSession` | `boolean \| undefined` | Optional | If set as true, Foxit eSign will send unique signing link to each recipient. This is ONLY applicable when parameters sendNow and createEmbeddedSigningSession is true.<br>**Default**: `false` |
| `allowAdvancedEmailValidation` | `boolean \| undefined` | Optional | Validate the email address of the parties when set as true.<br>**Default**: `false` |
| `signSuccessUrlAllParties` | `boolean \| undefined` | Optional | If set as true, signer will be redirected to URL provided in the signSuccessUrl after successfully signing. This is only applicable when the sendNow is true.<br>**Default**: `false` |
| `emailTemplateId` | `number \| undefined` | Optional | Pass the email template Id to send the email templates other than default email templates. |
| `signerInstructionId` | `number \| undefined` | Optional | Pass the instruction Id to send signer instructions other than the default signer instructions |
| `confirmationInstructionId` | `number \| undefined` | Optional | Pass the confirmation instruction id to send confirmation instructions other than the default confirmation instructions. |
| `themeColor` | `string \| undefined` | Optional | Enter the CSS value to set the theme color. |
| `sessionExpire` | `boolean \| undefined` | Optional | Set as true to initiate the expire of the embedded signing session.<br>**Default**: `false` |
| `expiry` | `number \| undefined` | Optional | Required if sessionExpire is true. Enter duration in milliseconds of the expiry on the embedded signing session. |
| `senderEmail` | `string \| undefined` | Optional | enter email of another user in your account which will be used for sending this document(s) folder to the recipient parties. |
| `createExecutedFolder` | `boolean \| undefined` | Optional | If true, Envelope automatically executed with existing party.<br>**Default**: `false` |
| `hideFieldNameForRecipients` | `boolean \| undefined` | Optional | Hide field names for Recipients for Data Entry Fields and Advanced Fields. (Except Radio button, Checkbox, Image and Hyperlink).<br>**Default**: `false` |
| `hideCheckboxBorder` | `boolean \| undefined` | Optional | Borders of Checkbox will be hidden in the executed documents.<br>**Default**: `false` |
| `hideDeclineToSign` | `boolean \| undefined` | Optional | If true, it will hide the option of "Decline to Sign" for the signer.<br>**Default**: `false` |
| `hideMoreAction` | `boolean \| undefined` | Optional | If true, it will hide "More Actions" button in sending/signing session. In case of "Send Now": true, it will not hide anything.<br>**Default**: `false` |
| `hideNextRequiredFieldbtn` | `boolean \| undefined` | Optional | **Default**: `false` |

## Example (as JSON)

```json
{
  "folderId": 2520579,
  "folderName": "Example Documents",
  "parties": [
    {
      "firstName": "John",
      "lastName": "Doe",
      "emailId": "john.doe@example.com",
      "permission": "FILL_FIELDS_AND_SIGN",
      "sequence": 1
    }
  ]
}
```

