/* Hooks */
import { useState } from "react";

import IconArrow from "../assets/icons/IconArrow";
import IconBox from "../assets/icons/IconBox";
import IconCheck from "../assets/icons/IconCheck";
import IconTruck from "../assets/icons/IconTruck";

function ProductInfo() {
    const [statusNumber, setStatusNumber] = useState(0);

    function handleClick(){
        setStatusNumber(statusNumber + 1);

        if(statusNumber === 3){
            alert('Thank you for your purchase!, your product arrived at home');
        }
    }

    const classActive = 'grid place-content-center h-28 w-28 border-2 border-black rounded-full';

    return (
        <>
            <div className="w-full flex flex-col items-center p-5 font-bold">
                <header className="flex w-full gap-10 justify-between px-8 mt-3.5 mb-8">
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
                        <p className="h-[42px] w-[288px] pt-[11px] pl-2.5 border-b-2 border-gray-500 text-gray-500 font-sans">
                            Mesa PC
                        </p>
                    </label>
                    <label>
                        <p className="mb-1">
                            Product Price:
                        </p>
                        <p className="h-[42px] w-[288px] pt-[11px] pl-2.5 border-b-2 border-gray-500 text-gray-500 font-sans">
                            $100
                        </p>
                    </label>
                    <label>
                        <p className="mb-1">
                            Create Date:
                        </p>
                        <p className="h-[42px] w-[288px] pt-[11px] pl-2.5 border-b-2 border-gray-500 text-gray-500 font-sans">
                            19 / 05 / 2024
                        </p>
                    </label>
                    <label>
                        <p className="mb-1">
                            Delivery Date:
                        </p>
                        <p className="h-[42px] w-[288px] pt-[11px] pl-2.5 border-b-2 border-gray-500 text-gray-500 font-sans">
                            21 / 05 / 2024
                        </p>
                    </label>
                    <label>
                        <p className="mb-1">
                            Product Code:
                        </p>
                        <p className="h-[42px] w-[288px] pt-[11px] pl-2.5 border-b-2 border-gray-500 text-gray-500 font-sans">
                            123ed
                        </p>
                    </label>
                    <label>
                        <p className="mb-1">
                            Phone Number:
                        </p>
                        <p className="h-[42px] w-[288px] pt-[11px] pl-2.5 border-b-2 border-gray-500 text-gray-500 font-sans">
                            +57 +57 321 123 456
                        </p>
                    </label>
                    <label>
                        <p className="mb-1">
                            Delivery Status:
                        </p>
                        <p className="h-[42px] w-[288px] pt-[11px] pl-2.5 border-b-2 border-gray-500 text-gray-500 font-sans">
                            1
                        </p>
                    </label>
                    <label>
                        <p className="mb-1">
                            Wallet User:
                        </p>
                        <p className="h-[42px] w-[288px] overflow-x-hidden pt-[11px] pl-2.5 border-b-2 border-gray-500 text-gray-500 font-sans">
                            0x4358c4455175b370E04b35D2c132993980294C62
                        </p>
                    </label>
                    <label>
                        <button 
                        type="button"
                        onClick={() => {
                            handleClick();
                        }}
                        className="relative left-[150px] top-2 h-[42px] w-[288px] pt-[11px] pl-2.5 border-b-2 border-gray-500 text-gray-500 font-sans">Change product state</button>
                    </label>
                </form>

                <hr className="shadow-[0px_0px_1px_0px_#cdcdcd]" />

                <h2 className="my-3 text-[28px] text-center">
                    Order Progress
                </h2>

                <ul className="flex gap-9 w-min mx-auto">
                    <li className="relative">
                        <div className={`${statusNumber === 0 ? classActive : 'opacity-25 border-black'} grid place-content-center h-28 w-28 border-2 rounded-full`}>
                            <span>
                                Preparing
                            </span>
                            <IconBox className="w-7 h-7 mx-auto" />
                        </div>
                        <IconArrow className={`absolute top-0 scale-[0.45] translate-x-[74px] ${statusNumber === 0 ? 'opacity-25' : undefined}`} />
                    </li>
                    <li className="relative">
                        <div className={`${statusNumber === 1 ? classActive : 'opacity-25 border-black'} grid place-content-center h-28 w-28 border-2 rounded-full`}>
                            <span>
                                Transporting
                            </span>
                            <IconTruck className="w-7 h-7 mx-auto" />
                        </div>
                        <IconArrow className={`absolute top-0 scale-[0.45] translate-x-[74px] ${statusNumber === 1 ? 'opacity-25' : undefined}`} />
                    </li>
                    <li>
                        <div className={`${statusNumber === 2 ? classActive : 'opacity-25 border-black'} grid place-content-center h-28 w-28 border-2 rounded-full`}>
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