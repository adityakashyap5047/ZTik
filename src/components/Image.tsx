"use client"

import { IKImage } from "imagekitio-next"
const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

type ImageType = {
    path: string;
    w?: number;
    h?: number;
    alt: string;
    className?: string;
    tr?: boolean;
}

function Image({path, w, h, alt, className, tr}: ImageType) {
  return (
    <IKImage 
        urlEndpoint={urlEndpoint} 
        path={path}
        alt={alt} 
        className={className}
        {...(tr 
            ? {transformation: [{width: `${w}`, height: `${h}`}]} 
            : {width: w, height: h})
        }
    />
  )
}

export default Image