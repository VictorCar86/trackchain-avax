import Navbar from "../components/Navbar";
import { ReactNode } from "react";

function Dashboard({ children }: { children: ReactNode }) {
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
