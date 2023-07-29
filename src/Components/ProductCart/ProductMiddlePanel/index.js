import badgeColors from '@material-tailwind/react/theme/components/badge/badgeColors';
import React from 'react';
import ReactImageMagnify from 'react-image-magnify';


export default function index() {
  const magnifyImage = 'images/brand-5.jpg';

  return (
    <div className='w-[30%]  py-2 px-4 bg-white'>
     
     <div className=''>
     <ReactImageMagnify {...{
    smallImage: {
        alt: 'Wristwatch by Ted Baker London',
        isFluidWidth: true,
        src: magnifyImage,
        width: 120,
        height: 160
    },
    largeImage: {
        src: magnifyImage,
        width: 1200,
        height: 1800
    },
     enlargedImagePosition: "over",
       lensStyle:{ backgroundColor:'rgba(0,0,0.4)'}
}} />
     </div>
   
    </div>
  )
}
