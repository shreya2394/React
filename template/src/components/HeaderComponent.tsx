

function HeaderComponent() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-sky-900 p-4 z-50">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <div className="text-white font-bold text-2xl">My App</div>
                    <ul className="flex space-x-4">
                        <li>
                            <a href="#" className="text-white text-lg">Home</a>
                        </li>
                        <li>
                            <a href="#" className="text-white text-lg">About</a>
                        </li>
                        <li>
                            <a href="#" className="text-white text-lg">Services</a>
                        </li>
                        <li>
                            <a href="#" className="text-white text-lg">More</a>
                        </li>
                        <li>
                            <a href="#" className="text-white text-lg">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default HeaderComponent;
