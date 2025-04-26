import FormLogin from "../components/FormLogin";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
 
      <div className="hidden md:block md:w-3/4 bg-gray-100">
        {/* <Image src={financeSvg} alt="Finanças" layout="fill" objectFit="cover" /> */}
      </div>
 
      <div className="w-full md:w-1/2 bg-white p-6 md:p-12 flex items-center justify-center">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold mb-6">Login</h1>
          <div className="bg-slate-300 p-7 rounded-lg shadow">
            <FormLogin />
          </div>
        </div>
      </div>
    </div>
  );
}
