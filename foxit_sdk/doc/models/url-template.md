
# URL Template

Create a template by uploading a PDF document using URL or Base64. To create a template from a PDF file, either provide publicly accessible URLs to PDF documents or pass PDF documents as multipart form data with the number of recipient parties, etc.

## Structure

`URLTemplate`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `templateName` | `string` | Required | Name of the template |
| `templateUrl` | `string` | Required | URL to PDF document for template creation. It should be publicly accessible while creating the template. |
| `inputType` | `string \| undefined` | Optional | Value can be either url or base64.<br>**Default**: `'url'` |
| `processTextTags` | `boolean` | Required | This field is used to determine whether Foxit eSign should parse the documents for Text Tags to convert them into Foxit eSign fields.<br>**Default**: `true` |
| `processAcroFields` | `boolean` | Required | This field is used to determine whether Foxit eSign should parse the documents for AcroFields to convert them into Foxit eSign fields. |
| `shareAll` | `boolean` | Required | Share this template with all users in your account.<br>**Default**: `false` |
| `numberOfParties` | `number` | Required | Add number of parties in the template. The values of this parameter should be less than 20. |
| `themeColor` | `string \| undefined` | Optional | Enter a css value for a color to change the theme of createEmbeddedTemplateSession . |
| `authorEmail` | `string \| undefined` | Optional | Enter email of another user in an account which will be used as the author for this template. |
| `createEmbeddedTemplateSession` | `boolean \| undefined` | Optional | If set as true, an embedded template session to directly open the Foxit eSign template preparing view. Dragging and dropping various fields on the template will be available.<br>**Default**: `false` |
| `redirectURL` | `string \| undefined` | Optional | If createEmbeddedTemplateSession is true, the absolute URL can be entered for the landing page on any website/application, which the user will be redirected to after clicking "save and close" in the embedded template view. |
| `hideSendTemplate` | `boolean \| undefined` | Optional | If true, it will hide the Send button in an embedded template view.<br>**Default**: `false` |
| `fixRecipientParties` | `boolean \| undefined` | Optional | If true, then in the embedded template view cannot change the parties for the envelope which are already added.<br>**Default**: `false` |
| `fields` | `unknown[] \| undefined` | Optional | A list of different fields to be added to the template. |
| `parties` | [`TemplateParty[]`](../../doc/models/template-party.md) | Required | A list of parties to be adding in the template. Every entry must contain sequence field. |
| `hideMoreAction` | `boolean \| undefined` | Optional | If true, it will hide "More Actions" button in template session.<br>**Default**: `false` |
| `hideShareWithAll` | `boolean \| undefined` | Optional | If true, it will hide "Share with All" option in template session.<br>**Default**: `false` |
| `hideAddParty` | `boolean \| undefined` | Optional | If true, it will hide all add party's options in an embedded template session.<br>**Default**: `false` |
| `hideMeButton` | `boolean \| undefined` | Optional | If true, it will hide the "Me" button on Recipient Parties in an embedded template session.<br>**Default**: `false` |
| `hideOthersButton` | `boolean \| undefined` | Optional | If true, it will hide the "Others" button on Recipient Parties in an embedded template session.<br>**Default**: `false` |
| `hideExistingContactSelectOption` | `boolean \| undefined` | Optional | If true, it will hide the "Find and Add Existing Contact" input box on Recipient Parties in an embedded template session. |
| `hideFieldNameForRecipients` | `boolean \| undefined` | Optional | Hide field names for Recipients for Data Entry Fields and Advanced Fields.(Except Radio button, Checkbox, Image and Hyperlink).<br>**Default**: `false` |
| `hideCheckboxBorder` | `boolean \| undefined` | Optional | Borders of Checkbox will be hidden in the executed documents.<br>**Default**: `false` |

## Example (as JSON)

```json
{
  "templateName": "onboardingmulti_2.pdf",
  "inputType": "url",
  "templateUrl": "https://developers.esigngenie.com/uploads/eSignGenieAPISampleDoc.pdf",
  "processTextTags": true,
  "processAcroFields": true,
  "numberOfParties": 2,
  "themeColor": "#42caf4",
  "shareAll": false,
  "authorEmail": "jon.doe@ggmail.com",
  "createEmbeddedTemplateSession": true,
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

