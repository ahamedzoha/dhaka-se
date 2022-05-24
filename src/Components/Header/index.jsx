import Input from "../Forms/Input"

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center m-14 space-y-8">
      <h1 className="text-5xl font-semibold">Welcome To React DSE</h1>
      <Input type="text" placeholder="Search your company" />
    </header>
  )
}

export default Header
