import Main from "./Component/main"
import Header  from "./Component/header"
import Sidebar from "./Component/sidebar"
export default function App(){
  return(
    <div className="w-full min-h-screen bg-gray-800 p-2 ">
      <Header />
      <div className="flex">
    <Sidebar />
    <Main />
      </div>
    </div>
  )
}