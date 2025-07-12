import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';

function Carousel ({children}) {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="overflow-hidden min-h-[350px] mb-0 " ref={emblaRef}>
      <div className="flex flex-grow min-h-[350px]">
        <div className="flex-[0_0_100%] min-w-0 p-4 bg-slate-800 text-stone-200 text-center">
          {children[0]}
        </div>
        <div className="flex-[0_0_100%] min-w-0 p-4 bg-slate-800 text-stone-200 text-center">
          {children[1]}
        </div>
        <div className="flex-[0_0_100%] min-w-0 p-4 bg-slate-800 text-white text-center">
          {children[2]}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
