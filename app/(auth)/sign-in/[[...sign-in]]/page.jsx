import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return (

<div className="mx-auto max-w-screen-xl mt-4 px-4 py-8 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-lg flex flex-col gap-8 justify-center items-center">
    <h1 className="text-center text-2xl font-bold text-neutral-800 sm:text-3xl">Sign In</h1>

    <SignIn path="/sign-in" />
  </div>
</div>
  ) ;
}