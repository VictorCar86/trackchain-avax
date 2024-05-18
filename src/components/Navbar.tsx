import IconTCAvax from "../assets/icons/IconTCAvax";
import IconClose from "../assets/icons/IconClose";

function Navbar() {
    return (
        <aside className="h-screen w-[18%] p-5 rounded-r-xl bg-black">
            <h1 className="flex justify-center items-center gap-2.5 py-6 px-0 font-bold">
                <IconTCAvax />
                <span className="text-[28px]">
                    TC - AVAX
                </span>
            </h1>

            <nav>
                <ul>
                    <li></li>
                    <li></li>
                </ul>

                <button className="flex items-center gap-5" type="button">
                    <IconClose />
                    <span className="-mt-0.5">Sign Out</span>
                </button>
            </nav>
        </aside>
    )
}

export default Navbar;