

"use client"

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then((registration) => console.log('scope is: ', registration.scope));
    }
  }, []);

  const click=async ()=>{


  }
  return(
    <>
        <h1>Hello, Next.js! changed th title again</h1>
        <button onClick={click}>click</button>
        <a href="geo:124.028582,-29.201930" target="_blank">Click here for map</a>
    </>

  )
}
