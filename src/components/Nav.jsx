export default function Nav() {
    return (
        <nav className="backdrop-blur-lg backdrop-brightness-75 fixed top-0 left-0 z-10 w-full h-16 py-2 flex flex-row justify-between items-center px-6 border-b border-white/10">
            <img 
                src="/images/logo-text-white.png"
                className="drop-shadow-md h-full"
                alt="logo click to scroll to top"
            />
            <ul className="flex flex-row gap-6 text-white">
                <li>
                    <a href="#about-me" className="hover:-top-0.5 top-0 relative border-b border-transparent hover:border-white duration-75">
                        About Me
                    </a>
                </li>
                <li>
                    <a href="#contact" className="hover:-top-0.5 top-0 relative border-b border-transparent hover:border-white duration-75">
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    )
}