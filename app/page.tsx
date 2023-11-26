

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



    const url = `https://nshn.ir/maps/place/${35.84647388697808},${50.95969676971436}`
    window.open(url)

    // const data  = {url: `https://www.waze.com/ul?ll=${[130,5545,57.547788]}&navigate=yes`, text: "text", title: 'title'} ;
    // // const shareData = {
    // //   url: item,
    // // };

    
    // // window.open(wazeUrl, '_blank');

    // try {
    //   await navigator.share(data);
    // }
    // catch(e) {
    //   console.log('share error', e);
    // }
  }
  return(
    <>
        <h1>Hello, Next.js! changed th title</h1>
        <button onClick={click}>click</button>
    </>

  )
}
