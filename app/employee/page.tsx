import {
  ApiError,
  Client,
  EnvelopeFieldsUpdate,
  EnvelopesAPIController,
} from '../../foxit_sdk/src/index.ts'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default function Employee() {

  /*
  * Add Receivng Party Name Form Submit Handler
  */
  async function addReceivngPartyName (data:formSubmission) {
    "use server"
    const partyName = data.get("receivngPartyName")?.valueOf()

    // Intitiante the API Client Using Foxit SDK
    const client = new Client({
      timeout: 0,
      environment: 'US Server',
      accessToken: process.env.FOXIT_ACCESS_TOKEN
    });
    
    // Get the Envelope ID from the Cookies
    let signingEnvelopeId = cookies().get('foxitNewEnvelopeId')?.value

    const envelopesAPIController = new EnvelopesAPIController(client);
    const body: EnvelopeFieldsUpdate = {
      folderId: signingEnvelopeId,
      fields: {
        "Receiving Party": partyName
      }
    };

    try {
      const { result, ...httpResponse } = await envelopesAPIController.updateEnvelopeFields(body);
      console.log('result:')
      console.log(result)
    } catch(error) {
      if (error instanceof ApiError) {
        const errors = error.result;
        console.log('errors:')
        console.log(errors)
      }
    }
    // Refresh Page
    redirect('http://localhost:3000/employee/', 'replace')
  }

  /*
  * Add Contract Date Form Submit Handler
  */
  async function addContractDate (data:formSubmission) {
    "use server"
    const contractDate = data.get("contractDate")?.valueOf()

    // Intitiante the API Client Using Foxit SDK
    const client = new Client({
      timeout: 0,
      environment: 'US Server',
      accessToken: process.env.FOXIT_ACCESS_TOKEN
    })
    
    // Get the Envelope ID from the Cookies
    let signingEnvelopeId = cookies().get('foxitNewEnvelopeId')?.value

    const envelopesAPIController = new EnvelopesAPIController(client);
    const body: EnvelopeFieldsUpdate = {
      folderId: signingEnvelopeId,
      fields: {
        "Contract date": contractDate
      }
    }

    try {
      const { result, ...httpResponse } = await envelopesAPIController.updateEnvelopeFields(body)
      console.log('result:')
      console.log(result)
    } catch(error) {
      if (error instanceof ApiError) {
        const errors = error.result
        console.log('errors:')
        console.log(errors)
      }
    }
    // Refresh Page
    redirect('http://localhost:3000/employee/', 'replace')
  }

  // Get the Embedded Signing Session Link from the Cookies
  let EmbeddedSigningLink = cookies().get('foxitEmbeddedSigningLink2')?.value

  /*
  * Render the Page
  */
  return (
    <main className="bg-neutral-900 flex min-h-screen flex-col items-center justify-between p-20">
    <div className="w-4/5 bg-lime-950 p-10">
      <a className="underline underline-offset-1" href="/">-- Home</a>
      <h1 className="text-4xl border-b-2 font-bold py-5 mb-4">Employee Actions</h1>
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
            <form action={addReceivngPartyName} className=" flex flex-col gap-2">
            <input
              type="text"
              name="receivngPartyName"
              className="w-full p-2 border rounded-l-md bg-slate-300 text-teal-900"
              placeholder="Add Receiving Party Name..."
            />
            <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-r-md mb-8">
              Add Receiving Party Name
           </button>
           </form>

           <form action={addContractDate} className=" flex flex-col gap-2">
           <input
              type="text"
              name="contractDate"
              className="w-full p-2 border rounded-l-md bg-slate-300 text-teal-900"
              placeholder="Add Contract Date (MM/DD/YYYY)..."
            />
            <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-r-md">
              Add Contract Date
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
