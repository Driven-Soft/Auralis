interface LabelWrapperProps {
    children: React.ReactNode;
}

const LabelWrapper = ({ children }: LabelWrapperProps) => {
  return (
    <label className="text-sm font-medium my-2 text-texto-primary dark:text-texto-secondary">{children}</label>
  )
}

export default LabelWrapper