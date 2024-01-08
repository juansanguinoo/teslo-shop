import { montserrat } from "@/config/font";
import { LoginForm } from "./ui/LoginForm";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen pt-32 sm:pt-52">
      <h1 className={`${montserrat.className} text-4xl mb-5`}>Ingresar</h1>

      <LoginForm />
    </div>
  );
}
