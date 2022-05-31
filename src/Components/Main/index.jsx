import useSWR from "swr"
import TickerCard from "../TickerCard"
const Main = () => {
  const URI = `https://api.azazahamed.com/api/stocks`
  const { data, error } = useSWR(URI, { refreshInterval: 120000 })

  return (
    <main className="bg-[#E5E7EB]  ">
      <div className="px-7 md:px-12 py-10">
        {!data && !error && <div>Loading...</div>}
        {error && <div>Error!</div>}
        {data && (
          <div
            className="
          grid 
          grid-cols-1 
          md:grid-cols-2 
          lg:grid-cols-3 
          xl:grid-cols-4 
          2xl:grid-cols-5 
          gap-12 
          md:gap-8 
          xl:gap-12"
          >
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
