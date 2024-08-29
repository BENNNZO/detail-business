export default function Nav() {
    return (
        <nav className="backdrop-blur-xl z-30 backdrop-brightness-50 fixed md:top-0 bottom-0 left-0 w-full h-16 py-2 flex flex-row justify-between items-center px-6 border-t md:border-b border-white/10">
            <a href="#home" className="h-full">
                <img 
                    src="/images/logo-text-white.png"
                    className="drop-shadow-md h-full"
                    alt="logo click to scroll to top"
                />
            </a>
            <ul className="flex flex-row gap-6 text-white">
                <li>
                    <a href="#gallary" className="hover:-top-0.5 top-0 relative border-b border-transparent hover:border-white duration-75">
                        Gallary
                    </a>
                </li>
                <li>
                    <a href="#about-me" className="hover:-top-0.5 top-0 relative border-b border-transparent hover:border-white duration-75">
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    )
}