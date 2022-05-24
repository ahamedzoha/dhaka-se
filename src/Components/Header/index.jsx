import Input from "../Forms/Input"
import { GiTwoCoins } from "react-icons/gi"

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center m-14 space-y-8">
      <h1 className="text-3xl md:text-5xl font-bold flex space-x-3">
        <span>Dhaka Stock Exchange </span>{" "}
        <GiTwoCoins className="text-8xl md:text-5xl" />
      </h1>
      <Input type="text" placeholder="Search your company" />
    </header>
  )
}

export default Header
