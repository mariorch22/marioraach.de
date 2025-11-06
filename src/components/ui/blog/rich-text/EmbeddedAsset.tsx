import Image from 'next/image';

interface EmbeddedAssetProps {
  imageUrl: string;
  alt?: string;
}

const EmbeddedAsset = ({ imageUrl, alt = 'Post image' }: EmbeddedAssetProps) => (
  <figure className="my-8 text-center">
    <Image
      src={imageUrl}
      alt={alt}
      width={1000}
      height={1000}
      className="max-w-full rounded-lg shadow-md mx-auto"
    />
  </figure>
);

export default EmbeddedAsset;