import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="bg-black h-screen flex items-center justify-center">
      <SignIn></SignIn>
    </main>
  );
}
