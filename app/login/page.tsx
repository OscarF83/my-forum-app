"use client";

import { actionLogin } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const params = useSearchParams();
  const [message, setMessage] = useState("");
  const [passwdVisible, setPasswdVisible] = useState(false);

  const path = params.get("path");

  const login = async (formData: FormData) => {
    const message = await actionLogin(formData);
    setMessage(message);
  };
  const clearMessage = () => setMessage("");

  return (
    <main className="h-screen flex flex-col justify-center items-center">
      <div className="flex flex-row items-start gap-1">
      <form action={login} className="flex flex-col items-start gap-2 py-2">
        <h1>Login {path && `to ${path}`}</h1>
        <Input
          type="text"
          name="username"
          placeholder="username"
          onChange={clearMessage}
        />
        <Input
          type={passwdVisible ? "text" : "password"}
          name="password"
          placeholder="password"
          onChange={clearMessage}
        />
        <input type="hidden" name="path" value={path || ""} />
        <Button className="bg-stone-600">Login</Button>
        <p className="text-red-500 h-8">{message}</p>
      </form>
      <div className="py-28">
      <Button variant="ghost" onClick={() => setPasswdVisible((x) => !x)}>
        <img
          src="/images/formkithidden.png"
          alt="formkithidden"
          className="w-full h-full object-cover"
        />
      </Button>
      </div>
      </div>
    </main>
  );
}

/*export default function Page() {
  return (
    <Suspense>
      <LoginPage />
    </Suspense>
  );
}*/
