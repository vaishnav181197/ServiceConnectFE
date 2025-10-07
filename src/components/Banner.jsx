import React, { useState } from 'react'
const images = [
    "https://picsum.photos/id/1015/800/400",
    "https://picsum.photos/id/1016/800/400",
    "https://picsum.photos/id/1018/800/400",
];

function Banner() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };
    return (
        <>
            <div className="relative w-full max-w-xxl mt-3 mx-auto">
                {/* Image */}
                <div className="overflow-hidden rounded-2xl relative">
                    <img
                        src={images[currentIndex]}
                        alt="carousel"
                        className="w-full h-64 object-cover transition duration-500"
                    />

                    {/* Indicators over image */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`transition-all duration-300 ${index === currentIndex
                                    ? "w-6 h-2 rounded-full bg-white"
                                    : "w-2 h-2 rounded-full bg-white/60"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner