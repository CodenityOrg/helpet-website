import Link from 'next/link'
import cn from 'classnames'

type Variant = 'default' | 'active'
interface ButtonI extends React.ComponentProps<'button'> {
  variant?: Variant,
  href?: string,
  target?: string,
  label?: string
}

const defaultClassNames = `
  border-none
  py-[10px] px-[15px]
  text-[1em]
  font-bold
`;

const Button: React.FC<ButtonI> = (props) => {
  const variants = {
    default: 'bg-primary hover:bg-[#039603] text-white',
    active: 'bg-white hover:bg-[#d3d2d2] text-[#21b16a]'
  };

  const bgColor = variants[props.variant || 'default'];

  const ButtonView = () => (
    <button
      {...props}
      className={cn(defaultClassNames, bgColor, props.className)}>
      {props.children}
    </button>
  )

  return (
    props.href? (
      <Link href={props.href} target={props.target} title={props.label}>
          <ButtonView />
      </Link>
    ) : (
      <ButtonView />
    )
  )
}


export default Button
