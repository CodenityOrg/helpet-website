
interface ButtonI extends React.ComponentProps<'button'> {

}

const Button: React.FC<ButtonI> = (props) => (
	<button 
		className={`
			bg-[#009900] 
			hover:bg-[#039603] 
			border-none 
			py-[10px] px-[15px]
					text-white 
			text-[1em]
		`}>
		{props.children}
	</button>
)


export default Button