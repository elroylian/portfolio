import { useState, useEffect } from 'react';
import './App.css'
import { cn } from "@/lib/utils";
import AnimatedGridPattern from './components/magicui/animated-grid-pattern';
import Footer from './components/self/Footer';

function App() {
	// Use useEffect to hide "Hi" after a certain duration
	useEffect(() => {
	}, []);

	return (
		<>
			<div>
				<AnimatedGridPattern numSquares={100} width={40} height={40} x={-1} y={-1} maxOpacity={0.5} duration={4} repeatDelay={0.5} className={cn(
					"[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
					"skew-y-12",
				)} />
				<div className="title-banner">
					<p className="title-sub pt-5 text-left text-md dark:text-white">Aspiring Full Stack Developer</p>
					<p className="title pt-5 text-left text-8xl dark:text-white">Elroy Lian</p>
				</div>
				<div>


					<a href="https://twitter.com/elroylian">
						<i className="fa-brands fa-x-twitter"></i>
					</a>
					<button>
						<i className="fa-brands fa-github"></i>
					</button>
				</div>
			</div>
			<Footer/>
		</>
	)
}

export default App
