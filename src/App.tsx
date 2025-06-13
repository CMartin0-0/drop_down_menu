import './App.css';
import DropDownMenu from './DropDownMenu';

function App() {
	const buttonsArr = [
		{
			label: 'Home',
			onClick: null,
		},
		{
			label: 'About',
			onClick: null,
		},
		{
			label: 'Contact',
			onClick: null,
		},
	];

	return (
		<>
			<DropDownMenu buttons={buttonsArr} toggleLabel={'Toggle'} />
		</>
	);
}

export default App;
