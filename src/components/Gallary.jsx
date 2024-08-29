"use client"

import React, { useEffect, useRef } from 'react';

export default function Gallery() {
    const imageGroups = [
        [
            "/images/gallary/acura_1.jpeg",
            "/images/gallary/acura_2.jpeg",
            "/images/gallary/acura_3.jpeg",
            "/images/gallary/acura_4.jpeg",
        ],
        [
            "/images/gallary/challenger_1.jpeg",
            "/images/gallary/challenger_2.jpeg",
            "/images/gallary/challenger_3.jpeg",
        ],
        [
            "/images/gallary/lexus_1.jpeg",
            "/images/gallary/lexus_2.jpeg",
            "/images/gallary/lexus_3.jpeg",
            "/images/gallary/lexus_4.jpeg",
            "/images/gallary/lexus_5.jpeg",
            "/images/gallary/lexus_6.jpeg",
            "/images/gallary/lexus_7.jpeg",
            "/images/gallary/lexus_8.jpeg",
        ],
    ];

    return (
        <section className="z-20 text-white relative" id='gallary'>
            <div className='w-12 md:w-56 h-full bg-gradient-to-r from-zinc-950 to-transparent z-10 absolute top-0 left-0'></div>
            <div className='w-12 md:w-56 h-full bg-gradient-to-l from-zinc-950 to-transparent z-10 absolute top-0 right-0'></div>
            <div className="flex flex-col gap-4 py-4">
                {imageGroups.map((group, index) => (
                    <ImageScroller key={index} images={group} left={index % 2 === 0 ? true : false} />
                ))}
            </div>
        </section>
    );
}

function ImageScroller({ images, left }) {
    const scrollerRef = useRef(null);

    useEffect(() => {
        const scroller = scrollerRef.current;
        const imageWidth = scroller.firstChild.offsetWidth + 16;
        const totalWidth = imageWidth * images.length;

        scroller.style.width = `${totalWidth * 2}px`;
        scroller.style.setProperty('--scroll-width', `${totalWidth}px`);
        scroller.style.setProperty('--animation-duration', `${totalWidth / 25}s`);
    }, [images]);

    return (
        <div className="overflow-hidden relative w-full">
            <div
                className={`flex space-x-4 ${left ? 'animate-scroll-left' : 'animate-scroll-right'}`}
                ref={scrollerRef}
            >
                {images.concat(images).map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`image-${index}`}
                        className="aspect-video h-24 md:h-44 object-cover rounded-[3px] shadow-md"
                    />
                ))}
                {images.concat(images).map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`image-${index}`}
                        className="aspect-video h-24 md:h-44 object-cover rounded-[3px] shadow-md"
                    />
                ))}
                {images.concat(images).map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`image-${index}`}
                        className="aspect-video h-24 md:h-44 object-cover rounded-[3px] shadow-md"
                    />
                ))}
            </div>
        </div>
    );
}
