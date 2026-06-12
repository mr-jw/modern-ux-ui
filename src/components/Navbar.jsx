export default function Navbar() {
    return <nav className="fixed top-0 w-full z-500 transition-all duration-300 bg-green-950/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
                <div>
                    <img 
                        src="/logo.png" 
                        alt="CodeFlow" 
                        className="w-6 h-6 sm:w-8 sm:h-8"
                    />
                </div>

                <span>
                    <span className="text-white">Code</span>
                    <span className="text-blue-400">Flow</span>
                </span>
            </div>
        </div>
    </nav>
}