import Image from 'next/image'
import React from 'react'

function ImageUpload() {
  return (
    <div className='flex flex-row'>
      <Image
        alt="Property image"
        src={'https://picsum.photos/200'}
        width={200}
        height={200}
      />
      <Image
        alt="Property image"
        src={'https://picsum.photos/200'}
        width={200}
        height={200}
      />
      <Image
        alt="Property image"
        src={'https://picsum.photos/200'}
        width={200}
        height={200}
      />
    </div>
  )
}

export default ImageUpload
