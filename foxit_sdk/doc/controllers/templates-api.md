# Templates API

```ts
const templatesAPIController = new TemplatesAPIController(client);
```

## Class Name

`TemplatesAPIController`

## Methods

* [Create Envelope From Template](../../doc/controllers/templates-api.md#create-envelope-from-template)
* [Get a List of All Templates](../../doc/controllers/templates-api.md#get-a-list-of-all-templates)
* [Get Templates by Template Ids](../../doc/controllers/templates-api.md#get-templates-by-template-ids)
* [Create Template From URL](../../doc/controllers/templates-api.md#create-template-from-url)
* [Get Template Details](../../doc/controllers/templates-api.md#get-template-details)


# Create Envelope From Template

Create envelopes using existing templates.

```ts
async createEnvelopeFromTemplate(
  body: BaseEnvelopefromTemplate,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`BaseEnvelopefromTemplate`](../../doc/models/base-envelopefrom-template.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const bodyTemplateIds: number[] = [271591];
const bodyParties: Party[] = [];

const bodyparties0: Party = {
  firstName: 'FIRST_NAME_OF_RECIPIENT_PARTY',
  lastName: 'LAST_NAME_OF_RECIPIENT_PARTY',
  emailId: 'mhashmi@esigngenie.com',
  permission: 'FILL_FIELDS_AND_SIGN',
  sequence: 1,
};
bodyparties0.signerAuthLevel = 'Email Access Code';
bodyparties0.allowNameChange = 'true';
bodyparties0.workflowSequence = 1;
bodyparties0.hostEmailId = 'EMAIL_ID_OF_INPERSON_ADMINISTRATOR';

bodyParties[0] = bodyparties0;

const bodyparties1: Party = {
  firstName: 'FIRST_NAME_OF_RECIPIENT_PARTY',
  lastName: 'LAST_NAME_OF_RECIPIENT_PARTY',
  emailId: 'mishkat.hashmi@yahoo.in',
  permission: 'FILL_FIELDS_AND_SIGN',
  sequence: 2,
};
bodyparties1.signerAuthLevel = 'User-defined Access Code';
bodyparties1.allowNameChange = 'true';
bodyparties1.workflowSequence = 2;
bodyparties1.hostEmailId = 'EMAIL_ID_OF_INPERSON_ADMINISTRATOR';

bodyParties[1] = bodyparties1;

const body: BaseEnvelopefromTemplate = {
  templateIds: bodyTemplateIds,
  parties: bodyParties,
};

try {
  const { result, ...httpResponse } = await templatesAPIController.createEnvelopeFromTemplate(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```


# Get a List of All Templates

You can get a list of all the templates from your Foxit eSign account into your application using the following call.

```ts
async getAListOfAllTemplates(
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
try {
  const { result, ...httpResponse } = await templatesAPIController.getAListOfAllTemplates();
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response

```
{
  "result": "success",
  "total_templates": 9,
  "templatesList": [
    {
      "templateId": 1,
      "templateName": "Subcontractor Agreement Template ",
      "templateDesc": "A custom subcontractor agreement Template desc",
      "templateType": "Subcontracting",
      "templateCreationDate": 1413011470000,
      "templateLastUpdateDate": 1427099812000,
      "editable": true,
      "numberOfParties": 0,
      "companyId": 11,
      "templateCreatedBy": {
        "partyId": 1,
        "firstName": "John",
        "lastName": "Doe",
        "emailId": "johndoe@example.com",
        "address": null,
        "dateCreated": null,
        "companyId": 0,
        "userRole": null,
        "userAddedDate": null,
        "department": null,
        "title": null,
        "active": false,
        "managerId": null
      },
      "templateLastUpdatedBy": {
        "partyId": 1,
        "firstName": "John",
        "lastName": "Doe",
        "emailId": "johndoe@example.com",
        "address": null,
        "dateCreated": null,
        "companyId": 0,
        "userRole": null,
        "userAddedDate": null,
        "department": null,
        "title": null,
        "active": false,
        "managerId": null
      },
      "shareAll": true
    },
    {
      "templateId": 3,
      "templateName": "single party agreement",
      "templateDesc": "sample template  desc 1",
      "templateType": "DEED",
      "templateCreationDate": 1413541233000,
      "templateLastUpdateDate": 1430724568000,
      "editable": true,
      "numberOfParties": 0,
      "companyId": 11,
      "templateCreatedBy": {
        "partyId": 1,
        "firstName": "John",
        "lastName": "Doe",
        "emailId": "johndoe@example.com",
        "address": null,
        "dateCreated": null,
        "companyId": 0,
        "userRole": null,
        "userAddedDate": null,
        "department": null,
        "title": null,
        "active": false,
        "managerId": null
      },
      "templateLastUpdatedBy": {
        "partyId": 1,
        "firstName": "John",
        "lastName": "Doe",
        "emailId": "johndoe@example.com",
        "address": null,
        "dateCreated": null,
        "companyId": 0,
        "userRole": null,
        "userAddedDate": null,
        "department": null,
        "title": null,
        "active": false,
        "managerId": null
      },
      "shareAll": false
    },
    {
      "templateId": 6,
      "templateName": "NDA Template",
      "templateDesc": "A Non Disclosure Agreement Template",
      "templateType": "NDA",
      "templateCreationDate": 1417083942000,
      "templateLastUpdateDate": 1461753204000,
      "editable": true,
      "numberOfParties": 0,
      "companyId": 11,
      "templateCreatedBy": {
        "partyId": 1,
        "firstName": "John",
        "lastName": "Doe",
        "emailId": "johndoe@example.com",
        "address": null,
        "dateCreated": null,
        "companyId": 0,
        "userRole": null,
        "userAddedDate": null,
        "department": null,
        "title": null,
        "active": false,
        "managerId": null
      },
      "templateLastUpdatedBy": {
        "partyId": 1,
        "firstName": "John",
        "lastName": "Doe",
        "emailId": "johndoe@example.com",
        "address": null,
        "dateCreated": null,
        "companyId": 0,
        "userRole": null,
        "userAddedDate": null,
        "department": null,
        "title": null,
        "active": false,
        "managerId": null
      },
      "shareAll": false
    }
  ]
}
```


# Get Templates by Template Ids

You can get a list of all the templates from your Foxit eSign account into your application using the following call.

```ts
async getTemplatesByTemplateIds(
  body: TemplateIdentifiers,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`TemplateIdentifiers`](../../doc/models/template-identifiers.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const bodyTemplateIds: number[] = [226];
const body: TemplateIdentifiers = {
  templateIds: bodyTemplateIds,
};

try {
  const { result, ...httpResponse } = await templatesAPIController.getTemplatesByTemplateIds(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response

```
{
  "result": "success",
  "total_templates": 2,
  "templateIdList": {
    "ID_OF_TEMPLATE_A": {
      "template": {
        "templateId": "ID_OF_TEMPLATE_A",
        "templateName": "Subcontractor Agreement Template ",
        "templateDesc": "A custom subcontractor agreement Template desc",
        "templateType": "Subcontracting",
        "templateCreationDate": 1413011470000,
        "templateLastUpdateDate": 1427099812000,
        "editable": true,
        "numberOfParties": 0,
        "companyId": 11,
        "templateCreatedBy": {
          "partyId": 1,
          "firstName": "John",
          "lastName": "Doe",
          "emailId": "johndoe@example.com",
          "address": null,
          "dateCreated": null,
          "companyId": 0,
          "userRole": null,
          "userAddedDate": null,
          "department": null,
          "title": null,
          "active": false,
          "managerId": null
        },
        "templateLastUpdatedBy": {
          "partyId": 1,
          "firstName": "John",
          "lastName": "Doe",
          "emailId": "johndoe@example.com",
          "address": null,
          "dateCreated": null,
          "companyId": 0,
          "userRole": null,
          "userAddedDate": null,
          "department": null,
          "title": null,
          "active": false,
          "managerId": null
        },
        "shareAll": true
      },
      "allfields": [
        {
          "fieldTagId": 48,
          "contractId": 0,
          "versionId": 0,
          "templateId": 46,
          "companyId": 11,
          "fieldType": "textfield",
          "documentPageNumber": 1,
          "coordinateXRatio": 0.142763,
          "coordinateYRatio": 0.415264,
          "elementWidthRatio": 0.197927,
          "elementHeightRatio": 0.0304487,
          "docFieldId": "48",
          "dependent": false,
          "parentTagId": "",
          "parentTagValueToCompare": "",
          "conditionResult": null,
          "tabOrder": null,
          "textfieldName": "",
          "value": "John",
          "description": "",
          "partyResponsible": 1,
          "required": false,
          "multiLine": false,
          "fontSize": 16,
          "fontFamily": "default",
          "fontColor": "#800080",
          "readOnly": false,
          "systemField": false
        }
      ]
    },
    "ID_OF_TEMPLATE_B": {
      "template": {
        "templateId": "ID_OF_TEMPLATE_B",
        "templateName": "single party agreement",
        "templateDesc": "sample template  desc 1",
        "templateType": "DEED",
        "templateCreationDate": 1413541233000,
        "templateLastUpdateDate": 1430724568000,
        "editable": true,
        "numberOfParties": 0,
        "companyId": 11,
        "templateCreatedBy": {
          "partyId": 1,
          "firstName": "John",
          "lastName": "Doe",
          "emailId": "johndoe@example.com",
          "address": null,
          "dateCreated": null,
          "companyId": 0,
          "userRole": null,
          "userAddedDate": null,
          "department": null,
          "title": null,
          "active": false,
          "managerId": null
        },
        "templateLastUpdatedBy": {
          "partyId": 1,
          "firstName": "John",
          "lastName": "Doe",
          "emailId": "johndoe@example.com",
          "address": null,
          "dateCreated": null,
          "companyId": 0,
          "userRole": null,
          "userAddedDate": null,
          "department": null,
          "title": null,
          "active": false,
          "managerId": null
        },
        "shareAll": false
      },
      "allfields": [
        {
          "fieldTagId": 49,
          "contractId": 0,
          "versionId": 0,
          "templateId": 46,
          "companyId": 11,
          "fieldType": "signfield",
          "documentPageNumber": 1,
          "coordinateXRatio": 0.322042,
          "coordinateYRatio": 0.688126,
          "elementWidthRatio": 0.166667,
          "elementHeightRatio": 0.0198728,
          "docFieldId": "49",
          "dependent": false,
          "parentTagId": "",
          "parentTagValueToCompare": "",
          "conditionResult": null,
          "tabOrder": 1,
          "partyResponsible": 1,
          "signatureId": null
        }
      ]
    }
  }
}
```


# Create Template From URL

Template can be created by uploading a PDF document. To create a template from a PDF file, provide publicly accessible URLs to PDF documents or pass PDF documents as multipart form data with the number of recipient parties, etc.

```ts
async createTemplateFromURL(
  body: URLTemplate,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`URLTemplate`](../../doc/models/url-template.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const bodyParties: TemplateParty[] = [];

const bodyparties0: TemplateParty = {
  permission: 'FILL_FIELDS_AND_SIGN',
  sequence: 1,
  partyRole: 'Manager',
};

bodyParties[0] = bodyparties0;

const bodyparties1: TemplateParty = {
  permission: 'FILL_FIELDS_AND_SIGN',
  sequence: 2,
  partyRole: 'Manager 2',
};

bodyParties[1] = bodyparties1;

const bodyFields: unknown[] = ['{"type":"text","x":348,"y":157,"width":171,"height":28,"pageNumber":1,"documentNumber":1,"hideFieldNameForRecipients":true,"name":"Number(fillable) d0107804-ce35-45e8-8d06-a26d67f0d9bd","tooltip":"First Name","value":"","required":false,"characterLimit":100,"party":1,"fontSize":12,"fontColor":"#000000","options":["None"],"tabOrder":1}', '{"type":"text","x":348,"y":257,"width":171,"height":28,"pageNumber":1,"documentNumber":1,"hideFieldNameForRecipients":true,"name":"Number(fillable) d0107804-ce35-45e8-8d06-a26d67a1e9ee","tooltip":"Last Name","value":"","required":false,"characterLimit":100,"party":1,"fontSize":12,"fontColor":"#000000","options":["None"],"tabOrder":2}', '{"type":"checkbox","x":348,"y":357,"width":13,"height":13,"pageNumber":1,"documentNumber":1,"name":"isBorn","tooltip":"First child?","required":false,"party":1,"group":null,"multicheck":true,"checked":true,"tabOrder":3,"hideCheckboxBorder":true}', '{"type":"date","x":348,"y":457,"width":60,"height":13,"pageNumber":1,"documentNumber":1,"tooltip":"Date this is signed","required":true,"party":1,"name":"exampleDateField","hideFieldNameForRecipients":true,"value":"","dateFormat":"MM-DD-YYYY"}'];
const body: URLTemplate = {
  templateName: 'onboardingmulti_2.pdf',
  templateUrl: 'https://developers.esigngenie.com/uploads/eSignGenieAPISampleDoc.pdf',
  processTextTags: true,
  processAcroFields: true,
  shareAll: false,
  numberOfParties: 2,
  parties: bodyParties,
};
body.inputType = 'url';
body.themeColor = '#42caf4';
body.authorEmail = 'jon.doe@ggmail.com';
body.createEmbeddedTemplateSession = true;
body.fields = bodyFields;

try {
  const { result, ...httpResponse } = await templatesAPIController.createTemplateFromURL(body);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 401 | The error will come when the access_token in the  headers is invalid or expired. | `ApiError` |


# Get Template Details

You can poll our API to get the details of a template in JSON format.

```ts
async getTemplateDetails(
  templateId: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<unknown>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `templateId` | `string` | Query, Required | The ID of the Template for which you would like to obtain parseable details about |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

`unknown`

## Example Usage

```ts
const templateId = 'templateId0';
try {
  const { result, ...httpResponse } = await templatesAPIController.getTemplateDetails(templateId);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch(error) {
  if (error instanceof ApiError) {
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Example Response

```
{
  "result": "success",
  "template": {
    "templateId": 46,
    "templateName": "Copy of eSignGenie Sample",
    "templateDesc": null,
    "templateType": null,
    "templateCreationDate": 1468478204000,
    "templateLastUpdateDate": 1479106113000,
    "editable": false,
    "numberOfParties": 3,
    "companyId": 11,
    "templateCreatedBy": {
      "partyId": 1,
      "firstName": "John",
      "lastName": "Doe",
      "emailId": "johndoe@example.com",
      "address": null,
      "dateCreated": null,
      "companyId": 0,
      "userRole": null,
      "userAddedDate": null,
      "department": null,
      "title": null,
      "active": false,
      "managerId": null
    },
    "templateLastUpdatedBy": {
      "partyId": 52,
      "firstName": "John",
      "lastName": "Doe",
      "emailId": "johndoe@example.com",
      "address": null,
      "dateCreated": null,
      "companyId": 0,
      "userRole": null,
      "userAddedDate": null,
      "department": null,
      "title": null,
      "active": false,
      "managerId": null
    },
    "shareAll": false
  },
  "allfields": [
    {
      "fieldTagId": 48,
      "contractId": 0,
      "versionId": 0,
      "templateId": 46,
      "companyId": 11,
      "fieldType": "textfield",
      "documentPageNumber": 1,
      "coordinateXRatio": 0.142763,
      "coordinateYRatio": 0.415264,
      "elementWidthRatio": 0.197927,
      "elementHeightRatio": 0.0304487,
      "docFieldId": "48",
      "dependent": false,
      "parentTagId": "",
      "parentTagValueToCompare": "",
      "conditionResult": null,
      "tabOrder": null,
      "textfieldName": "",
      "value": "John",
      "description": "",
      "partyResponsible": 1,
      "required": false,
      "multiLine": false,
      "fontSize": 16,
      "fontFamily": "default",
      "fontColor": "#800080",
      "readOnly": false,
      "systemField": false
    },
    {
      "fieldTagId": 49,
      "contractId": 0,
      "versionId": 0,
      "templateId": 46,
      "companyId": 11,
      "fieldType": "signfield",
      "documentPageNumber": 1,
      "coordinateXRatio": 0.322042,
      "coordinateYRatio": 0.688126,
      "elementWidthRatio": 0.166667,
      "elementHeightRatio": 0.0198728,
      "docFieldId": "49",
      "dependent": false,
      "parentTagId": "",
      "parentTagValueToCompare": "",
      "conditionResult": null,
      "tabOrder": 1,
      "partyResponsible": 1,
      "signatureId": null
    },
    {
      "fieldTagId": 51,
      "contractId": 0,
      "versionId": 0,
      "templateId": 46,
      "companyId": 11,
      "fieldType": "datefield",
      "documentPageNumber": 1,
      "coordinateXRatio": 0.53841,
      "coordinateYRatio": 0.424516,
      "elementWidthRatio": 0.166945,
      "elementHeightRatio": 0.016129,
      "docFieldId": "51",
      "dependent": false,
      "parentTagId": "",
      "parentTagValueToCompare": "",
      "conditionResult": null,
      "tabOrder": null,
      "datefieldName": "DOB",
      "value": "",
      "description": "",
      "partyResponsible": 1,
      "required": false,
      "dateFormat": "MMM/DD/YYYY",
      "readOnly": false,
      "systemField": false
    },
    {
      "fieldTagId": 52,
      "contractId": 0,
      "versionId": 0,
      "templateId": 46,
      "companyId": 11,
      "fieldType": "signfield",
      "documentPageNumber": 1,
      "coordinateXRatio": 0.580556,
      "coordinateYRatio": 0.680187,
      "elementWidthRatio": 0.211934,
      "elementHeightRatio": 0.0238474,
      "docFieldId": "52",
      "dependent": false,
      "parentTagId": "",
      "parentTagValueToCompare": "",
      "conditionResult": null,
      "tabOrder": null,
      "partyResponsible": 2,
      "signatureId": null
    },
    {
      "fieldTagId": 59,
      "contractId": 0,
      "versionId": 0,
      "templateId": 46,
      "companyId": 11,
      "fieldType": "checkboxfield",
      "documentPageNumber": 1,
      "coordinateXRatio": 0.445075,
      "coordinateYRatio": 0.569793,
      "elementWidthRatio": 0.0390946,
      "elementHeightRatio": 0.0286169,
      "docFieldId": "14766189127327312",
      "dependent": false,
      "parentTagId": "",
      "parentTagValueToCompare": "",
      "conditionResult": null,
      "tabOrder": 3,
      "cbname": "",
      "description": "",
      "partyResponsible": 2,
      "cbgroup": "",
      "checked": false,
      "oneCbMandatoryInGroup": false
    },
    {
      "fieldTagId": 60,
      "contractId": 0,
      "versionId": 0,
      "templateId": 46,
      "companyId": 11,
      "fieldType": "checkboxfield",
      "documentPageNumber": 1,
      "coordinateXRatio": 0.573675,
      "coordinateYRatio": 0.571383,
      "elementWidthRatio": 0.0390946,
      "elementHeightRatio": 0.027027,
      "docFieldId": "14766189209789773",
      "dependent": false,
      "parentTagId": "",
      "parentTagValueToCompare": "",
      "conditionResult": null,
      "tabOrder": 4,
      "cbname": "",
      "description": "",
      "partyResponsible": 2,
      "cbgroup": "",
      "checked": false,
      "oneCbMandatoryInGroup": false
    },
    {
      "fieldTagId": 61,
      "contractId": 0,
      "versionId": 0,
      "templateId": 46,
      "companyId": 11,
      "fieldType": "signfield",
      "documentPageNumber": 1,
      "coordinateXRatio": 0.132317,
      "coordinateYRatio": 0.826073,
      "elementWidthRatio": 0.205761,
      "elementHeightRatio": 0.0238474,
      "docFieldId": "14770354742332322",
      "dependent": false,
      "parentTagId": "",
      "parentTagValueToCompare": "",
      "conditionResult": null,
      "tabOrder": null,
      "partyResponsible": 3,
      "signatureId": null
    },
    {
      "fieldTagId": 69,
      "contractId": 0,
      "versionId": 0,
      "templateId": 46,
      "companyId": 11,
      "fieldType": "textfield",
      "documentPageNumber": 1,
      "coordinateXRatio": 0.328562,
      "coordinateYRatio": 0.722884,
      "elementWidthRatio": 0.205761,
      "elementHeightRatio": 0.0198728,
      "docFieldId": "14784287893213202",
      "dependent": false,
      "parentTagId": "",
      "parentTagValueToCompare": "",
      "conditionResult": null,
      "tabOrder": null,
      "textfieldName": "Signer Name",
      "value": "",
      "description": "",
      "partyResponsible": 1,
      "required": false,
      "multiLine": false,
      "fontSize": 8,
      "fontFamily": "default",
      "fontColor": "#000000",
      "readOnly": true,
      "systemField": true
    },
    {
      "fieldTagId": 70,
      "contractId": 0,
      "versionId": 0,
      "templateId": 46,
      "companyId": 11,
      "fieldType": "textfield",
      "documentPageNumber": 1,
      "coordinateXRatio": 0.575926,
      "coordinateYRatio": 0.726391,
      "elementWidthRatio": 0.205761,
      "elementHeightRatio": 0.0206677,
      "docFieldId": "1478438292060593",
      "dependent": false,
      "parentTagId": "",
      "parentTagValueToCompare": "",
      "conditionResult": null,
      "tabOrder": null,
      "textfieldName": "Signer Name",
      "value": "",
      "description": "",
      "partyResponsible": 2,
      "required": false,
      "multiLine": false,
      "fontSize": 8,
      "fontFamily": "default",
      "fontColor": "#000000",
      "readOnly": true,
      "systemField": true
    },
    {
      "fieldTagId": 71,
      "contractId": 0,
      "versionId": 0,
      "templateId": 46,
      "companyId": 11,
      "fieldType": "textfield",
      "documentPageNumber": 1,
      "coordinateXRatio": 0.372222,
      "coordinateYRatio": 0.825755,
      "elementWidthRatio": 0.205761,
      "elementHeightRatio": 0.0198728,
      "docFieldId": "147843830200324",
      "dependent": false,
      "parentTagId": "",
      "parentTagValueToCompare": "",
      "conditionResult": null,
      "tabOrder": null,
      "textfieldName": "Signer Name",
      "value": "",
      "description": "",
      "partyResponsible": 3,
      "required": false,
      "multiLine": false,
      "fontSize": 8,
      "fontFamily": "default",
      "fontColor": "#000000",
      "readOnly": true,
      "systemField": true
    },
    {
      "fieldTagId": 72,
      "contractId": 0,
      "versionId": 0,
      "templateId": 46,
      "companyId": 11,
      "fieldType": "datefield",
      "documentPageNumber": 1,
      "coordinateXRatio": 0.325926,
      "coordinateYRatio": 0.758665,
      "elementWidthRatio": 0.205761,
      "elementHeightRatio": 0.0198728,
      "docFieldId": "14784382692222212",
      "dependent": false,
      "parentTagId": "",
      "parentTagValueToCompare": "",
      "conditionResult": null,
      "tabOrder": null,
      "datefieldName": "Date Signed",
      "value": "",
      "description": "",
      "partyResponsible": 1,
      "required": false,
      "dateFormat": "DD/MMMM/YYYY",
      "readOnly": true,
      "systemField": true
    },
    {
      "fieldTagId": 73,
      "contractId": 0,
      "versionId": 0,
      "templateId": 46,
      "companyId": 11,
      "fieldType": "datefield",
      "documentPageNumber": 1,
      "coordinateXRatio": 0.569753,
      "coordinateYRatio": 0.762162,
      "elementWidthRatio": 0.205761,
      "elementHeightRatio": 0.0198728,
      "docFieldId": "14784383126396385",
      "dependent": false,
      "parentTagId": "",
      "parentTagValueToCompare": "",
      "conditionResult": null,
      "tabOrder": null,
      "datefieldName": "Date Signed",
      "value": "",
      "description": "",
      "partyResponsible": 2,
      "required": false,
      "dateFormat": "DD/MMMM/YYYY",
      "readOnly": true,
      "systemField": true
    },
    {
      "fieldTagId": 74,
      "contractId": 0,
      "versionId": 0,
      "templateId": 46,
      "companyId": 11,
      "fieldType": "datefield",
      "documentPageNumber": 1,
      "coordinateXRatio": 0.625309,
      "coordinateYRatio": 0.82496,
      "elementWidthRatio": 0.205761,
      "elementHeightRatio": 0.0206677,
      "docFieldId": "14784383209099086",
      "dependent": false,
      "parentTagId": "",
      "parentTagValueToCompare": "",
      "conditionResult": null,
      "tabOrder": null,
      "datefieldName": "Date Signed",
      "value": "",
      "description": "",
      "partyResponsible": 3,
      "required": false,
      "dateFormat": "DD/MMMM/YYYY",
      "readOnly": true,
      "systemField": true
    },
    {
      "fieldTagId": 77,
      "contractId": 0,
      "versionId": 0,
      "templateId": 46,
      "companyId": 11,
      "fieldType": "attachmentfield",
      "documentPageNumber": 1,
      "coordinateXRatio": 0.465856,
      "coordinateYRatio": 0.16725,
      "elementWidthRatio": 0.0925926,
      "elementHeightRatio": 0.0238474,
      "docFieldId": "14791060033633622",
      "dependent": false,
      "parentTagId": "",
      "parentTagValueToCompare": "",
      "conditionResult": null,
      "tabOrder": null,
      "attachmentfieldName": "DL",
      "attachmentfieldDescription": "Please upload scanned copy of DL",
      "partyResponsible": 1,
      "required": true,
      "attachmentFileId": null
    }
  ]
}
```

