"use client"

import { IKImage } from "imagekitio-next";

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

function page() {
  return (
    <div>
      <IKImage urlEndpoint={urlEndpoint} path="/ztik/post.jpeg" width={600} height={600} alt="test post" />
    </div>
    
  )
}

export default page