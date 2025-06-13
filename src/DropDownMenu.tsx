import './DropDownMenu.css';

export default function DropDownMenu(props) {
	const handleToggle = (e) => {
		e.preventDefault();
		const target = document.getElementById('drop-down-container');
		console.log(target);
		if (target?.classList.contains('hidden')) {
			target?.classList.remove('hidden');
		} else {
			target?.classList.add('hidden');
		}
	};

	return (
		<>
			<button
				id='drop-down-toggle'
				className='btn toggle-btn'
				onClick={handleToggle}
			>
				{props.toggleLabel}
			</button>
			<div id='drop-down-container' className='hidden'>
				{props.buttons.map((button) => {
					return (
						<button
							id={`${button.label}-btn`}
							className='drop-down-btn'
							onClick={button.onClick}
						>
							{button.label}
						</button>
					);
				})}
			</div>
		</>
	);
}
