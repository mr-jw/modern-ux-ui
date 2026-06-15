import { useEffect, useState } from "react"

export default function Hero() {
    const[mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // effect with an event listener that it's going to subscribe to.
    // event listener will track mouse movement. 
    useEffect(() => {
        function handleMouseMove(e) {
            setMousePosition({ x: e.clientX, y: e.clientY });
            //console.log(e.clientX, e.clientY);
        }

        // add event listener. 'mousemove' is the event name in browser.
        window.addEventListener("mousemove", handleMouseMove);

        // must remove event listener here, otherwise component may 
        // unmount without removal cause memory leaks.
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
      <section className="relative min-h-screen flex items-center justify-center pt-6 sm:pt-20 px-4 sm:px-6 lg:px-6 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`,
          }}
        />

        <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"/>
        <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"/>
      </section>
    );
}