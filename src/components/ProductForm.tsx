/* Components */
import { useContext } from "react";
import { TrackContext } from "../context/context";

function ProductForm() {
    const inputStyles = "w-72 py-2 px-3 border border-gray-500 rounded-[12px] font-medium";
    const context = useContext(TrackContext);

    return (
        <>
            <div className="w-full flex flex-col items-center p-5 font-bold">
                <header className="flex w-full gap-10 justify-between px-8 mt-3.5 mb-8">
                    <h1 className="text-[40px]">
                        Send your product
                    </h1>
                    <div className="flex gap-3">
                        <button 
                        onClick={() => {
                            context?.setNavDashBtn1(true);
                            context?.setNavDashBtn2(false);
                        }}
                        className="hover:border-black hover:border border-black border" type="button">
                            ℹ️ Product Info
                        </button>
                        <button 
                        onClick={() => {
                            context?.setNavDashBtn2(true);
                            context?.setNavDashBtn1(false);
                        }}
                        className="hover:border-black hover:border border-black border" type="button">
                            🗺️ Preview Location
                        </button>
                    </div>
                </header>

                <hr className="shadow-[0px_0px_1px_0px_#cdcdcd]" />
                
                {
                    context.navDashBtn1 ? (
                        <form className="mt-6 mb-6">
                            <div className="grid grid-cols-2 grid-rows-4 gap-x-4 gap-y-3 w-max mx-auto">
                                <label>
                                    <p className="mb-1">
                                        Product Name:
                                    </p>
                                    <input type="text" name="name" placeholder="Mesa PC" className={inputStyles} />
                                </label>
                                <label>
                                    <p className="mb-1">
                                        Product Price:
                                    </p>
                                    <input type="number" name="price" placeholder="$100" className={inputStyles} />
                                </label>
                                <label>
                                    <p className="mb-1">
                                        Create Date:
                                    </p>
                                    <input type="date" name="date" className={inputStyles} />
                                </label>
                                <label>
                                    <p className="mb-1">
                                        Delivery Date:
                                    </p>
                                    <input type="date" name="delivery" className={inputStyles} />
                                </label>
                                <label>
                                    <p className="mb-1">
                                        Product Code:
                                    </p>
                                    <input type="text" name="code" placeholder="123ed" className={inputStyles} />
                                </label>
                                <label>
                                    <p className="mb-1">
                                        Phone Number:
                                    </p>
                                    <input type="tel" name="phone" placeholder="+57 321 123 456" className={inputStyles} />
                                </label>
                                <label>
                                    <p className="mb-1">
                                        Delivery Status:
                                    </p>
                                    <input type="text" name="1" placeholder="Current state" className={inputStyles} />
                                </label>
                                <label>
                                    <p className="mb-1">
                                        Wallet User:
                                    </p>
                                    <input type="text" name="status" placeholder="0x4358c4455175b370E04b35D2c132993980294C62" className={inputStyles} />
                                </label>
                            </div>

                            <button className="block my-5 mx-auto hover:border-black hover:border border-black border" type="button">Submit</button>

                            <hr className="shadow-[0px_0px_1px_0px_#cdcdcd]" />
                        </form>        
                    ) : context.navDashBtn2 ? (
                        <div className="flex flex-col gap-5 items-center pt-7">
                            <h2 className="text-[36px]">Preview Location</h2>
                            <div>
                                <img src="" alt="" />
                            </div>
                        </div>
                    ) : null
                }
            </div>
        </>
    )
}

export default ProductForm;