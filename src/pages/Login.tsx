/* Components */
import { WalletComponent } from "./components/WalletComponent";

/* Images and Icons */
import IconCore from "../assets/icons/IconCore";

function Login() {
    

    return (
        <>
            <section className="grid place-content-center h-screen w-full" style={{background: "linear-gradient(180deg, #E84142 10%, #A80001 40%, #09090B 90%)"}}>
                <article className="w-[450px] mx-auto text-center font-bold">
                    <h1 className="mb-6">
                        TC - AVAX
                    </h1>

                    <p className="mb-6">
                        Welcome to TrackChain, the application that revolutionizes the tracking of products you have purchased. Leveraging blockchain technology, TrackChain offers you a transparent, secure and real-time tracking experience.
                    </p>

                    <form action="#" method="post" onSubmit={(event) => event.preventDefault()}>
                        <div className="flex justify-center items-center gap-5 w-full">
                            <div className="h-[3px] w-[21%] rounded-md bg-black"></div>
                            <span>Sign up with your core wallet</span>
                            <div className="h-[3px] w-[21%] rounded-md bg-black"></div>
                        </div>

                        <div className="flex flex-col gap-2.5 w-min mt-4 mx-auto">
                            <button className="bg-black" type="submit">
                                <IconCore />
                            </button>
                            <WalletComponent />
                        </div>
                    </form>
                </article>
            </section>
        </>
    )
}

export default Login;