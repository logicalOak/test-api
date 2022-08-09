import Home from './components/Home';

const Root = () => (
	<>
		<div className='flex flex-col bg-slate-100 min-h-screen dark:bg-secondary'>
			{/* Content */}
			<main className='container mx-auto px-3 pb-12 flex-grow pt-[20px]'>
				<Home />
			</main>
		</div>
	</>
);

export default Root;
