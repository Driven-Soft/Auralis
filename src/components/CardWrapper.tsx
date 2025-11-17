interface CardWrapperProps {
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const CardWrapper = ({ children, className, onClick }: CardWrapperProps) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center justify-self-center rounded-lg border border-gray-200
         dark:border-gray-700 bg-background-secondary dark:bg-dark-background-secondary
         shadow-md py-6 px-4 hover:shadow-lg transition-all duration-200 ease-in-out  ${className}`}
    >
      {children}
    </div>
  );
};

export default CardWrapper;
