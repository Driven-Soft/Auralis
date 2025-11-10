interface IconWrapperProps {
  children: React.ReactNode;
}

const IconWrapper = ({ children }: IconWrapperProps) => {
  return (
    <div className="p-3 rounded-2xl bg-selected dark:bg-dark-selected">
        {children}
    </div>
  )
}

export default IconWrapper