import React, { useState } from "react";
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { abi } from "../utils/constants";

function ProductForm() {
    const inputStyles = "w-72 py-2 px-3 border border-gray-500 rounded-[12px] font-medium";
    const [priceOrder, setOrderPrice] = useState(0);
    const [statusOrder, setOrderStatus] = useState(0);
    const [formData, setFormData] = useState({
        date: null,          // "15/05/2024"
        delivery_date: null, // "20/05/2024"
        product: null,       // "Mesa PC"
        code: null,          // "f4cr3dsed"
        cel_number: null,    // "123456789"
    });
    const { open } = useWeb3Modal();

    /* Methods */

    const formDataUpdate = (key: string, value: string) => {
        setFormData({ ...formData, [key]: value });
    }

    const sendPayload = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!priceOrder && priceOrder <= 0 &&
            !statusOrder && statusOrder < 0 &&
            Object.values(formData).some((value) => !value))
        {
            alert("Warning! Every field is required.");
            return;
        }

        open(); // Open the modal
    }

    return (
        <>
            <div className="p-5 font-bold">
                <header className="flex justify-between px-14 mt-3.5 mb-8">
                    <h1 className="text-[40px]">
                        Send your product
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

                <form className="mt-6 mb-6" onSubmit={sendPayload}>
                    <div className="grid grid-cols-2 grid-rows-4 gap-x-4 gap-y-3 w-max mx-auto">
                        <label>
                            <p className="mb-1">
                                Product Name:
                            </p>
                            <input
                                type="text" name="name"
                                placeholder="No product"
                                className={inputStyles}
                                onInput={(e: React.ChangeEvent<HTMLInputElement>) => formDataUpdate("product", e.target.value)}
                            />
                        </label>
                        <label>
                            <p className="mb-1">
                                Product Price:
                            </p>
                            <input
                                type="number" name="price"
                                placeholder="$ - - -" className={inputStyles}
                                onInput={(e: React.ChangeEvent<HTMLInputElement>) => setOrderPrice(parseInt(e.target.value))}
                            />
                        </label>
                        <label>
                            <p className="mb-1">
                                Create Date:
                            </p>
                            <input
                                type="date" name="date" className={inputStyles}
                                onInput={(e: React.ChangeEvent<HTMLInputElement>) => formDataUpdate("date", e.target.value)}
                            />
                        </label>
                        <label>
                            <p className="mb-1">
                                Delivery Date:
                            </p>
                            <input
                                type="date" name="delivery" className={inputStyles}
                                onInput={(e: React.ChangeEvent<HTMLInputElement>) => formDataUpdate("delivery_date", e.target.value)}
                            />
                        </label>
                        <label>
                            <p className="mb-1">
                                Product Code:
                            </p>
                            <input
                                type="text" name="code" placeholder="TC-XXXX" className={inputStyles}
                                onInput={(e: React.ChangeEvent<HTMLInputElement>) => formDataUpdate("code", e.target.value)}
                            />
                        </label>
                        <label>
                            <p className="mb-1">
                                Phone Number:
                            </p>
                            <input
                                type="tel" name="phone"
                                placeholder="+57 XXX XXX XXXX" className={inputStyles}
                                onInput={(e: React.ChangeEvent<HTMLInputElement>) => formDataUpdate("cel_number", e.target.value)}
                            />
                        </label>
                        <label>
                            <p className="mb-1">
                                Delivery Status:
                            </p>
                            <input
                                type="text" name="status"
                                placeholder="Current state" className={inputStyles}
                                onInput={(e: React.ChangeEvent<HTMLInputElement>) => setOrderStatus(parseInt(e.target.value))}
                            />
                        </label>
                        <label>
                            <p className="mb-1">
                                Wallet User:
                            </p>
                            <input type="text" name="status" placeholder="Number wallet" className={inputStyles} />
                        </label>
                    </div>

                    <button className="block my-5 mx-auto hover:border-black hover:border border-black border" type="submit">Submit</button>

                    <hr className="shadow-[0px_0px_1px_0px_#cdcdcd]" />
                </form>

                {/* <div className="w-min mt-6 mx-auto rounded-2xl bg-gray-200">
                    <QRcode className="h-44 w-44"/>
                </div>
                <p className="mt-2 mb-0 text-center">https://URL</p> */}
            </div>
        </>
    )
}

export default ProductForm;