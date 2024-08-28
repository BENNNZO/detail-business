import Image from "next/image"

export default function Nav() {
    return (
        <section className="backdrop-blur-lg backdrop-brightness-75 fixed top-0 left-0 z-10 w-full h-16 py-2 flex flex-row justify-between px-2">
            <img 
                src="/images/logo-text.png"
                className="drop-shadow-md"
            />
        </section>
    )
}