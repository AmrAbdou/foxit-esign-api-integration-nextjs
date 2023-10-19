export default function Home() {

  /*
  * Render the Page
  */
  return (
    <main className="bg-neutral-900 flex min-h-screen flex-col items-center justify-between p-10">
    <div className="w-4/5 bg-lime-950 p-20">
      <h1 className="text-4xl border-b-2 font-bold py-5 mb-10">eSign Demo</h1>
        <div className="flex justify-center items-center p-10">
          <div className="space-x-8">
              <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-40 text-center" href="/manager">Manager Access</a>
              <a className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg w-40 text-center" href="/employee">Employee Access</a>
              
          </div>
        </div>
    </div>
    </main>
  );
}
