import { useEffect } from 'react';
import './App.css';
import TypingAnimation from './components/magicui/typing-animation';
import { Dock, DockIcon } from './components/magicui/dock';
import Footer from './components/self/Footer';


function App() {
	// Use useEffect to hide "Hi" after a certain duration
	useEffect(() => {
	}, []);

	return (
		<>

			<div className="dark:bg-dark-mode-gray flex flex-col min-h-screen animated-gradient">
				{/* Main content including the grid pattern and header */}

				<header className="title-banner p-8 md:p-8">
					<p className="title-sub text-left text-xl dark:text-white">Aspiring Full Stack Developer</p>
					{/* <p className="title pt-5 text-left text-8xl dark:text-white">Elroy Lian</p> */}
					<TypingAnimation
						className="title text-8xl font-bold text-black text-8xl dark:text-white"
						text="Elroy Lian"
					/>
					<blockquote>
						<p className="title-sub pt-5 selection:bg-fuchsia-300 selection:text-fuchsia-900 text-left text-sm w-2/3 text-justify text-wrap dark:text-white">
							I am a self-driven individual who is always keen on learning new concepts to help build better software systems. I enjoy working with people and collaborating as a team to accomplish tasks to the best of my ability, while also being capable of working independently when needed.
						</p>
					</blockquote>
				</header>

				{/* Flex-grow section to ensure the footer stays at the bottom */}
				<main className="flex-grow p-8">
				
				</main>


				{/* Footer at the bottom */}
				<Footer />
			</div>
		</>
	);
}

export default App;
