export function Conversation({img, name}) {
  return (
    <div className="flex flex-row flex-start gap-3 items-center">
      <img src={img} alt="avatar" className="rounded-full "/>
      <h1 className="font-bold text-xl text-white">{name}</h1>
    </div>

  )
}