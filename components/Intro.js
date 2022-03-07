import Image from './Image'

export default function Intro({ title, description, imageSrc }) {
  return (
    <div className="mt-16 mb-16 grid gap-8 text-center sm:mt-24 sm:mb-24">
      <div className="">
        <Image src={imageSrc} width="200" height="200" className="rounded-full"></Image>
      </div>
      <h2 className="text-2xl text-cyan-500">{title}</h2>
      <h3 className="m-auto w-2/3 text-center">{description}</h3>
      <div className="">
        <span className="inline-block h-8 w-8 rotate-45 border-r-2 border-b-2"></span>
      </div>
    </div>
  )
}
