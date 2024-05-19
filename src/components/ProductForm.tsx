import QRcode from "../assets/images/QRcode";

function ProductForm() {
    const inputStyles = "w-72 py-2 px-3 border border-gray-500 rounded-[12px] font-medium";
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

                <form className="grid grid-cols-2 grid-rows-4 gap-x-4 gap-y-3 w-max mt-6 mx-auto mb-6">
                    <label>
                        <p className="mb-1">
                            Product Name:
                        </p>
                        <input type="text" name="name" placeholder="No product" className={inputStyles} />
                    </label>
                    <label>
                        <p className="mb-1">
                            Product Price:
                        </p>
                        <input type="number" name="price" placeholder="$ - - -" className={inputStyles} />
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
                        <input type="text" name="code" placeholder="TC-XXXX" className={inputStyles} />
                    </label>
                    <label>
                        <p className="mb-1">
                            Phone Number:
                        </p>
                        <input type="tel" name="phone" placeholder="+57 XXX XXX XXXX" className={inputStyles} />
                    </label>
                    <label>
                        <p className="mb-1">
                            Delivery Status:
                        </p>
                        <input type="text" name="status" placeholder="Current state" className={inputStyles} />
                    </label>
                    <label>
                        <p className="mb-1">
                            Wallet User:
                        </p>
                        <input type="text" name="status" placeholder="Number wallet" className={inputStyles} />
                    </label>
                </form>

                <hr className="shadow-[0px_0px_1px_0px_#cdcdcd]" />

                {/* <div className="w-min mt-6 mx-auto rounded-2xl bg-gray-200">
                    <QRcode className="h-44 w-44"/>
                </div>
                <p className="mt-2 mb-0 text-center">https://URL</p> */}
            </div>
        </>
    )
}

export default ProductForm;