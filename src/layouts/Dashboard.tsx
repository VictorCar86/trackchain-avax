import Navbar from "../components/Navbar";
import { ReactNode } from "react";

function Dashboard({ children }: { children: ReactNode }) {
    const productDemo = {
        "date": "15/05/2024",
        "delivery_date": "20/05/2024",
        "product": "Mesa PC",
        "code": "123ed",
        "cel_number": "123456789"
    }

    const json = JSON.stringify(productDemo);
    console.log(json);

    return (
        <>
            <section>
                <div className="relative">
                    <Navbar />
                </div>
                <div className="pl-[276px] text-black">
                    { children }
                </div>
            </section>
        </>
    )
}

export default Dashboard;
