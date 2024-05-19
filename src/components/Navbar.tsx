/* Hooks */
import { useContext } from "react";

/* Components */
import { TrackContext } from "../context/context";

import IconTCAvax from "../assets/icons/IconTCAvax";
import IconClose from "../assets/icons/IconClose";
import IconProvider from "../assets/icons/IconProvider";
import IconUser from "../assets/icons/IconUser";

function Navbar() {
    const context = useContext(TrackContext);

    const classBtnAside = context.navUserBtn1 ? 'text-white' : 'w-full rounded-l-none rounded-r-xl focus:shadow-[2px_0px_10px_0px_#b2b2b2] focus-within:outline-1 focus-within:outline';
    const classBtnAside2 = context.navUserBtn2 ? 'text-white' : 'w-full rounded-l-none rounded-r-xl focus:shadow-[2px_0px_10px_0px_#b2b2b2] focus-within:outline-1 focus-within:outline';

    return (
        <aside className={`fixed grid grid-flow-row h-screen w-[276px] p-5 rounded-r-xl bg-black`} style={{gridTemplateRows: '80px 1fr', background: "linear-gradient(180deg, #460408 0%, #CE3C3D 100%)"}}>
            <h1 className="flex justify-center items-center gap-2.5 pb-7 px-0 -ml-3 font-bold">
                <IconTCAvax />
                <span className="text-[32px]">
                    TC - AVAX
                </span>
            </h1>

            <nav className="flex flex-col justify-between">
                <ul className="flex flex-col gap-1.5">
                    <li>
                        <button 
                        onClick={() => {
                            context?.setNavUserBtn1(true);
                            context?.setNavUserBtn2(false);
                            console.log(context?.navUserBtn1);
                        }}
                        className={`w-full flex gap-4 focus-within:outline-white ${classBtnAside}`} type="button">
                            <IconProvider />
                            <span>Provider</span>
                        </button>
                    </li>
                    <li>
                        <button 
                        onClick={() => {
                            context?.setNavUserBtn1(false);
                            context?.setNavUserBtn2(true);
                            console.log(context?.navUserBtn1);
                        }}
                        className={`w-full flex gap-4 focus-within:outline-white ${classBtnAside2}`} type="button">
                            <IconUser />
                            <span>User</span>
                        </button>
                    </li>
                </ul>

                <button className="flex gap-4 w-5/6 rounded-l-none rounded-r-xl focus:shadow-[2px_0px_10px_0px_#b2b2b2] focus-within:outline-1 focus-within:outline focus-within:outline-white" type="button">
                    <IconClose />
                    <span>Sign Out</span>
                </button>
            </nav>
        </aside>
    )
}

export default Navbar;