import Image from "next/image"
const CustomImage = ({
  src,
  alt,
  className,
  ...props
}: {
  src: string
  alt: string
  className?: string
  props?: any[]
}) => {
  return (
    <div className={`${className} relative`}>
      <Image
        src={src}
        alt={alt}
        className={className}
        {...props}
        layout="fill"
        objectFit="cover"
      />
    </div>
  )
}

export default CustomImage
