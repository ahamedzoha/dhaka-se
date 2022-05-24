import { FaSearch } from "react-icons/fa"

const Input = (props) => {
  return (
    <div className="flex items-center relative">
      <input className="border-2 rounded-lg px-5 py-3 pr-14" {...props} />
      <div className="relative -left-10">
        <FaSearch />
      </div>
    </div>
  )
}

export default Input
