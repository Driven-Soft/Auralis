import type { ReactNode } from "react"
import { useNavigate } from "react-router-dom"
 
interface WrapperProps {
  children: ReactNode;
  className?: string;
  to?: string;
  href?: string;
  onClick?: () => void;
  type?: string;
}

const ButtonWrapper = ({ onClick, children, className = "", to, href }: WrapperProps) => {
  const navigate = useNavigate()

  const handleClick = () => {
    if (to) {
      navigate(to)
    } else if (href) {
      window.open(href, "_blank")
    }

    if (onClick) {
      onClick()
    }
  }
 
  return (
    <div className="flex justify-center">
      <button
        onClick={handleClick}
        className={`
          flex items-center justify-center
          cursor-pointer w-full px-4
          border border-gray-300 dark:border-gray-600
          bg-[#f7fafc] dark:bg-gray-800
          text-texto-primary dark:text-texto-secondary font-semibold py-3 rounded-md text-center
          transition-all duration-200 ease-in-out
          hover:scale-102
          shadow-md
          ${className}
        `}
      >
        {children}
      </button>
    </div>
  )
}
 
export default ButtonWrapper;