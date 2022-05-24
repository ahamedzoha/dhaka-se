import useSWR from "swr"
import TickerCard from "../TickerCard"
const Main = () => {
  const URI = `https://api.azazahamed.com/api/stocks`
  const { data, error } = useSWR(URI)

  return (
    <main className="bg-slate-300  ">
      <div className="px-12 py-10">
        {!data && !error && <div>Loading...</div>}
        {error && <div>Error!</div>}
        {data && (
          <div className="grid grid-cols-3 gap-4">
            {data.data.map((info, index) => (
              <TickerCard key={index} data={info} />
            ))}
            {/* {data.data.forEach((info, index) => (
              <TickerCard key={index} data={info} />
            ))} */}
          </div>
        )}
      </div>
    </main>
  )
}

export default Main
