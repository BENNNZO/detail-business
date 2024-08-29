import Image from "next/image"
import Estimate from "./Estimate"

export default function Hero() {
    return (
        <section className="h-screen grid place-items-center" id="home">
            <Estimate />
            <Image 
                className="h-full w-full asbolute"
                src="/images/hero.jpg"
                layout="fill"
                objectFit="cover"
                quality={100}
                // placeholder="blur"
                priority
            />
            <div className="absolute bottom-0 left-0 w-full h-52 bg-gradient-to-t from-zinc-950 to-transparent"></div>
            <img src="/images/down-arrow.png" alt="scroll down to see more" className="absolute bottom-8 left-1/2 -translate-x-1/2 invert opacity-10 w-6 animate-pulse" />
        </section>
    )
}