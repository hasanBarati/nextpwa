

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
    const data  = {url: "https://neshan.org/maps", text: "text", title: 'title'} ;
    // const shareData = {
    //   url: item,
    // };
    try {
      await navigator.share(data);
    }
    catch(e) {
      console.log('share error', e);
    }
  }
  return(
    <>
        <h1>Hello, Next.js!</h1>
        <button onClick={click}>click</button>
    </>

  )
}
