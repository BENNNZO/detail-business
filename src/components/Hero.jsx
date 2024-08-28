import Image from "next/image"
import Estimate from "./Estimate"

export default function Hero() {
    return (
        <section className="h-screen grid place-items-center">
            <Estimate />
            <Image 
                className="h-full w-full asbolute -z-10"
                src="/images/hero.jpg"
                layout="fill"
                objectFit="cover"
                quality={100}
                // placeholder="blur"
                priority
            />
        </section>
    )
}