"use client"
import { signIn, signOut, useSession } from "next-auth/react"
const Home = () => {
  const { data, status } = useSession()
  if (status === "authenticated") {
    return <>
    <button onClick={e=>signOut()}>Logout</button>
    <h1><pre>{JSON.stringify(data)}</pre></h1>
    <h1>{data.user?.name}</h1>
    <h1>{data.user?.email}</h1>
   <img src={data.user?.image as string} alt={data.user?.name as string} />
   
    </>
  }
  return <>
    <button className=" bg-blue-600 p-3 text-slate-50 rounded-md" onClick={e => signIn("google")}>Login with google</button>
  </>
}

export default Home