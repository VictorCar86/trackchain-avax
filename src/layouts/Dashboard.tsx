import Navbar from "../components/Navbar";
import { useContext } from "react";
import { TrackContext } from "../context/context";
import ProductInfo from "../components/ProductInfo";
import ProductForm from "../components/ProductForm";

function Dashboard() {
    const context = useContext(TrackContext);
    return (
        <>
            <section>
                <div className="relative">
                    <Navbar />
                </div>
                <div className="pl-[276px] text-black">
                    {context?.navUserBtn1 ?  <ProductForm /> : <ProductInfo />}
                </div>
            </section>
        </>
    )
}

export default Dashboard;
