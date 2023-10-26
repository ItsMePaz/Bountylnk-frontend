import Image from "next/image";

import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const handleGoToLogin = () => {
    router.push("/login");
  };

  const handleGoToRegister = () => {
    router.push("/register");
  };
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <div>Landing Page</div>
      <button onClick={handleGoToLogin}>Go to Login</button>
      <button onClick={handleGoToRegister}>Go to Register</button>
    </main>
  );
}
