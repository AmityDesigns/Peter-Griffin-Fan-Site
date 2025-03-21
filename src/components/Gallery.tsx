'use client';

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Gallery = () => {
  const images = [
    {
      src: "/images/peter-griffin-1.png",
      alt: "Peter Griffin standing",
      caption: "Classic Peter"
    },
    {
      src: "/images/peter-griffin-2.png",
      alt: "Peter Griffin full body",
      caption: "Peter in his iconic outfit"
    },
    {
      src: "/images/peter-griffin-3.jpg",
      alt: "Peter Griffin excited",
      caption: "Peter being excited"
    },
    {
      src: "/images/griffin-family.png",
      alt: "The Griffin Family",
      caption: "Peter with his family"
    }
  ];

  return (
    <section id="gallery" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-family-guy text-blue-400">
          Peter Griffin Gallery
        </h2>

        <div className="carousel-container max-w-3xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-2">
                    <div className="relative aspect-video overflow-hidden rounded-xl bg-gray-800 border border-gray-700">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        priority={index === 0}
                        className="object-contain"
                      />
                    </div>
                    <p className="text-center mt-3 text-gray-300">{image.caption}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800 hover:bg-gray-700 border-gray-700" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-800 hover:bg-gray-700 border-gray-700" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
