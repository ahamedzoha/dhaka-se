import Image from "next/future/image"
const CustomImage = ({
  src,
  alt,
  className,
  width,
  ...props
}: {
  src: any
  alt: string
  className?: string
  width?: number
  props?: any[]
}) => {
  //check if url string has svg
  // const isSvg: boolean = src.includes(".svg")

  return (
    <div className={`${className}  relative`}>
      <Image
        src={src}
        alt={alt}
        className={className}
        width={width ?? 1024}
        height={1024}
        {...props}
      />
    </div>
  )
}

export default CustomImage
