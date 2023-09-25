import {
  ApiError,
  BaseEnvelopefromTemplate,
  Client,
  Party,
  TemplatesAPIController,
} from '../../foxit_sdk/src/index.ts'
import { cookies } from 'next/headers'

export default function Admin() {
  
  // Create Contract Form Handler
  async function createEnvelope (data:formSubmission) {
    "use server"

    //Get the Entered Template ID
    const ProvidedTemplateID = data.get("templateId")?.valueOf()

    // Intitiante the API Client Using Foxit SDK
    const client = new Client({
      timeout: 0,
      environment: 'US Server',
      accessToken: process.env.FOXIT_ACCESS_TOKEN
    });

    // Build the Request Body
    const templatesAPIController = new TemplatesAPIController(client);
    const bodyTemplateIds: number[] = [ProvidedTemplateID];
    const bodyParties: Party[] = [];

    const bodyparties0: Party = {
      firstName: 'The',
      lastName: 'Manager',
      emailId: 'email@website.com',
      permission: 'FILL_FIELDS_AND_SIGN',
      sequence: 1,
    };
    bodyparties0.allowNameChange = 'true';
    bodyparties0.workflowSequence = 1;
    bodyparties0.hostEmailId = 'EMAIL_ID_OF_INPERSON_ADMINISTRATOR';

    bodyParties[0] = bodyparties0;

    const bodyparties1: Party = {
      firstName: 'John',
      lastName: 'Doe',
      emailId: 'email@website.com',
      permission: 'FILL_FIELDS_AND_SIGN',
      sequence: 2,
    };
    bodyparties1.allowNameChange = 'true';
    bodyparties1.workflowSequence = 2;

    bodyParties[1] = bodyparties1;

    const body: BaseEnvelopefromTemplate = {
      templateIds: bodyTemplateIds,
      parties: bodyParties,
      sendNow:true,
      sendSuccessUrl:"http://localhost:3000",
      sendErrorUrl:"http://localhost:3000",
      createEmbeddedSigningSession:true,
      createEmbeddedSigningSessionForAllParties:true,
      allowSendNowAndEmbeddedSigningSession:true,
      embeddedSignersEmailIds:["email@website.com.","email@website.com"]
    };


    // Execute the API Request
    try {
      const { result, ...httpResponse } = await templatesAPIController.createEnvelopeFromTemplate(body);
      const { statusCode, headers } = httpResponse;

      console.log('headers:')
      console.log(headers)
      console.log('result:')
      console.log(result)

      // Save Envelope Data As Cookies
      cookies().set('foxitNewEnvelopeId', result.folder.envelopeId)
      cookies().set('foxitEmbeddedSigningLink1', result.embeddedSigningSessions[0].embeddedSessionURL)
      cookies().set('foxitEmbeddedSigningLink2', result.embeddedSigningSessions[1].embeddedSessionURL)

    } catch(error) {
      if (error instanceof ApiError) {
        const errors = error.result;
        const { statusCode, headers } = error;
        console.log('error: ')
        console.log(errors)
      }
    }
  }


  // Get the Manager's Embedded Signing Link
  let EmbeddedSigningLink = cookies().get('foxitEmbeddedSigningLink1')?.value

  // Render the Page
  return (
    <main className="bg-neutral-900 flex min-h-screen flex-col items-center justify-between p-10">
    <div className="w-4/5 bg-lime-950 p-10">
      <a className="underline underline-offset-1" href="/">-- Home</a>
      <h1 className="text-4xl border-b-2 font-bold py-5 mb-4">Manager Actions</h1>
      <div className="flex p-4">
        <div className="w-1/4 p-4 content-center flex-col">
          <h2 className="text-2xl font-bold mb-4">John Doe</h2>
          <img
            src="https://placehold.co/150x150"
            alt="Admin Image"
            className="w-full rounded-full"
          />
        </div>

        <div className="w-1/4 p-4"></div>

        <div className="w-2/4 p-4">
          <div className="flex-col">
            <form action={createEnvelope}>
            <input
             type="text"
             name="templateId"
              className="w-full p-2 border rounded-l-md bg-slate-300 text-teal-900"
              placeholder="Enter the NDA Template ID..."
            />
            <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-r-md mb-8">
              Send NDA
           </button>
           </form>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center p-10 m-t-5">
        <iframe 
          className="w-full"
          height="500"
          src={EmbeddedSigningLink}>
        </iframe>
      </div>
    </div>
    </main>
  );
}
