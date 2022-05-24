import button from "../../assets/card-button.svg"
import { FaArrowDown, FaArrowUp, FaEquals } from "react-icons/fa"

const TickerCard = ({ data }) => {
  const changed = parseFloat(data.prices.changed)

  const textcolor = () => {
    if (changed > 0.0) {
      return "text-up"
    } else if (changed < 0.0) {
      return "text-down"
    } else {
      return "text-equal"
    }
  }

  const backgroundColor = () => {
    if (changed > 0.0) {
      return "bg-up"
    } else if (changed < 0.0) {
      return "bg-down"
    } else {
      return "bg-equal"
    }
  }

  const arrow = () => {
    if (changed > 0.0) {
      return <FaArrowUp size={18} color="#31DB7F" />
    } else if (changed < 0.0) {
      return <FaArrowDown size={18} color="#FF0000" />
    } else {
      return <FaEquals size={18} color="#67CBF5" />
    }
  }

  return (
    <div className="flex justify-between items-start bg-[#F0F0F0] px-8 py-7 rounded-lg drop-shadow-md transition-none md:transition md:hover:scale-110 ">
      <div className="flex flex-col items-start justify-center space-y-1">
        <div className="flex items-baseline space-x-2">
          <h2 className="text-2xl">{data.name}</h2>
          {arrow()}
        </div>
        <p>
          Changed %{" "}
          <span className={textcolor()}>{data.prices.changePercent}</span>
        </p>
        <p className="">
          Changed Amount{" "}
          <span className={textcolor()}>{data.prices.changed}</span>
        </p>
      </div>
      <div className="flex flex-col h-full justify-between items-end">
        <h2 className={`text-2xl ${textcolor()}`}>
          <span className="text-3xl text-black">৳ </span>
          {data.prices.current}
        </h2>
        <img className="cursor-pointer" width={35} src={button} alt="goto" />
      </div>
    </div>
  )
}

export default TickerCard
