import { useState } from "react"

function App() {

  const [color, SetColor] = useState("grey");
  return (
    <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      < div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2">
        <div className="flex flex-wrap ga-3 shadow-lg bg-white px-3 py-2 rounded-sm">
          <button className="px-4 py-3 rounded-xl"
            onClick={()=>{ SetColor("red")}}
            style={{ backgroundColor: "red" }}>Red</button>

          <button className="px-4 py-3 rounded-xl"
           onClick={()=>{ SetColor("green")}}
            style={{ backgroundColor: "green" }}>Green</button>

          <button className="px-4 py-3 rounded-xl"
           onClick={()=>{ SetColor("blue")}}
            style={{ backgroundColor: "blue" }}>Blue</button>
        </div>
      </div>
    </div>
  )
}
export default App