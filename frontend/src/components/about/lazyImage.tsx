import React from 'react';

interface LazyImageProps {
    src: string;
    width: number;
    height: number;
    alt: string;
    className?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, width, height, alt, className = "" }) => {
    return <img src={src} width={width} height={height} alt={alt} className={className} loading="lazy" />;
};

export default LazyImage;
