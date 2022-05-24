import button from "../../assets/card-button.svg"
import { FaArrowDown, FaArrowUp } from "react-icons/fa"

const TickerCard = ({ data }) => {
  const status = data.change > 0 ? "up" : "down" || (data === 0 && "equal")
  return (
    <div className="flex justify-between items-start bg-[#F0F0F0] px-4 py-3 rounded-lg drop-shadow-md">
      <div className="flex flex-col items-start justify-center space-y-1">
        <div className="flex items-baseline space-x-2">
          <h2 className="text-2xl">{data.name}</h2>
          <FaArrowDown size={18} />
        </div>
        <p>Changed % {data.prices.changePercent}</p>
        <p>Changed Amount {data.prices.changed}</p>
      </div>
      <div className="flex flex-col h-full justify-between items-end">
        <h2 className="text-2xl">
          <span className="text-3xl">৳ </span>
          {data.prices.current}
        </h2>
        <img className="cursor-pointer" src={button} alt="goto" />
      </div>
    </div>
  )
}

export default TickerCard
