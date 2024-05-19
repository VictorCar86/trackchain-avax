import Navbar from "../components/Navbar";
import { useContext } from "react";
import { TrackContext } from "../context/context";
import ProductInfo from "../components/ProductInfo";
import ProductForm from "../components/ProductForm";

function Dashboard() {
    const productDemo = {
        "date": "15/05/2024",
        "delivery_date": "20/05/2024",
        "product": "Mesa PC",
        "code": "123ed",
        "cel_number": "123456789"
    }

    const context = useContext(TrackContext);

    const json = JSON.stringify(productDemo);
    console.log(json);

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
