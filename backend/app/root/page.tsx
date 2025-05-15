import Image from "next/image";
import { UserButton } from "@clerk/nextjs";


// export default function Home() {
//   return (
//     <div className="p-4">
//      <UserButton afterSignOutUrl={"/" as string} />

//     </div>>
//   );
// }

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Welcome to My App</h1>
      <p className="text-lg mb-8">This is a simple Next.js app with Clerk authentication.</p>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}