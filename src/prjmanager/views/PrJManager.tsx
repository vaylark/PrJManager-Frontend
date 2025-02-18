import Panel from "../components/Panel"
import { Nav } from "../components/Nav"
import { ReactNode } from "react";

interface PanelProps {
  children: ReactNode;
}

const PrJManager = ({ children } : PanelProps) => {


  return (
    <div className="bg-gray-100 h-screen flex flex-col">
      {/* Panel del Dashboard */}

      <Nav/>


      <Panel children={ children }/>


    </div>
  )



}

export default PrJManager
