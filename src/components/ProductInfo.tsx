import IconArrow from "../assets/icons/IconArrow";
import IconBox from "../assets/icons/IconBox";
import IconCheck from "../assets/icons/IconCheck";
import IconTruck from "../assets/icons/IconTruck";

function ProductInfo() {
    const currentOrderState = 1;

    return (
        <>
            <div className="p-5 font-bold">
                <header className="flex justify-between px-14 mt-3.5 mb-8">
                    <h1 className="text-[40px]">
                        Check your product
                    </h1>
                    <div className="flex gap-3">
                        <button className="hover:border-black hover:border border-black border" type="button">
                            ℹ️ Product Info
                        </button>
                        <button className="hover:border-black hover:border border-black border" type="button">
                            🗺️ Preview Location
                        </button>
                    </div>
                </header>

                <hr className="shadow-[0px_0px_1px_0px_#cdcdcd]" />

                <form className="grid grid-cols-2 grid-rows-4 gap-x-4 gap-y-3 w-max mt-6 mx-auto mb-6">
                    <label>
                        <p className="mb-1">
                            Product Name:
                        </p>
                        <p className="h-[42px] w-[288px] pt-[11px] pl-2.5 border-b-2 border-gray-500 text-gray-500 italic">
                            Lorem ipsum dolor sit amet
                        </p>
                    </label>
                    <label>
                        <p className="mb-1">
                            Product Price:
                        </p>
                        <p className="h-[42px] w-[288px] pt-[11px] pl-2.5 border-b-2 border-gray-500 text-gray-500 italic">
                            Lorem ipsum dolor sit amet
                        </p>
                    </label>
                    <label>
                        <p className="mb-1">
                            Create Date:
                        </p>
                        <p className="h-[42px] w-[288px] pt-[11px] pl-2.5 border-b-2 border-gray-500 text-gray-500 italic">
                            XX / XX / XXXX
                        </p>
                    </label>
                    <label>
                        <p className="mb-1">
                            Delivery Date:
                        </p>
                        <p className="h-[42px] w-[288px] pt-[11px] pl-2.5 border-b-2 border-gray-500 text-gray-500 italic">
                            XX / XX / XXXX
                        </p>
                    </label>
                    <label>
                        <p className="mb-1">
                            Product Code:
                        </p>
                        <p className="h-[42px] w-[288px] pt-[11px] pl-2.5 border-b-2 border-gray-500 text-gray-500 italic">
                            TC-XXXX
                        </p>
                    </label>
                    <label>
                        <p className="mb-1">
                            Phone Number:
                        </p>
                        <p className="h-[42px] w-[288px] pt-[11px] pl-2.5 border-b-2 border-gray-500 text-gray-500 italic">
                            +57 XXX XXX XXXX
                        </p>
                    </label>
                    <label>
                        <p className="mb-1">
                            Delivery Status:
                        </p>
                        <p className="h-[42px] w-[288px] pt-[11px] pl-2.5 border-b-2 border-gray-500 text-gray-500 italic">
                            Current state
                        </p>
                    </label>
                    <label>
                        <p className="mb-1">
                            Wallet User:
                        </p>
                        <p className="h-[42px] w-[288px] pt-[11px] pl-2.5 border-b-2 border-gray-500 text-gray-500 italic">
                            Number wallet
                        </p>
                    </label>
                </form>

                <hr className="shadow-[0px_0px_1px_0px_#cdcdcd]" />

                <h2 className="my-3 text-[28px] text-center">
                    Order Progress
                </h2>

                <ul className="flex gap-9 w-min mx-auto">
                    <li className="relative">
                        <div className={`grid place-content-center h-28 w-28 border-2 border-black rounded-full`}>
                            <span>
                                Preparing
                            </span>
                            <IconBox className="w-7 h-7 mx-auto" />
                        </div>
                        <IconArrow className={`absolute top-0 scale-[0.45] translate-x-[74px] ${currentOrderState < 1 ? 'opacity-25' : undefined}`} />
                    </li>
                    <li className="relative">
                        <div className={`grid place-content-center h-28 w-28 border-2 border-black rounded-full ${currentOrderState < 1 ? 'opacity-25' : undefined}`}>
                            <span>
                                Transporting
                            </span>
                            <IconTruck className="w-7 h-7 mx-auto" />
                        </div>
                        <IconArrow className={`absolute top-0 scale-[0.45] translate-x-[74px] ${currentOrderState < 2 ? 'opacity-25' : undefined}`} />
                    </li>
                    <li>
                        <div className={`grid place-content-center h-28 w-28 border-2 border-black rounded-full ${currentOrderState < 2 ? 'opacity-25' : undefined}`}>
                            <span>
                                Delivered
                            </span>
                            <IconCheck className="w-7 h-7 mx-auto" />
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default ProductInfo;