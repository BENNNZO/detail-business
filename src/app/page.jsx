import Nav from "@/components/Nav"
import Hero from "@/components/Hero"
import AboutMe from "@/components/AboutMe"
import Gallary from "@/components/Gallary"

export default function Home() {
	return (
		<main className="bg-zinc-950">
			<Nav />
			<Hero />
			<Gallary />
			<AboutMe />
		</main>
	)
}