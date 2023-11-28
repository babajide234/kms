
const Buttons = ({children, type, variant}) => {

  const variantClass = ` 
    flex items-center justify-center 
    ${
        variant === 'accent' && 'bg-gray-100 text-red-500 hover:bg-gray-300'||
        variant === 'primary' && 'bg-red-800 text-white hover:bg-gray-300'
    }
    ${
        type === 'icon' && ' w-11 h-11 rounded-full text-2xl' ||
        type === 'md' && ' w-[10rem] h-11 rounded-md text-xl' 
    }
    `;

  return (
    <button className={variantClass}>{children}</button>
  )
}

export default Buttons