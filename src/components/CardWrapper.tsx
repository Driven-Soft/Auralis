interface CardWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const CardWrapper = ({ children, className }: CardWrapperProps) => {
  return (
    <div
      className={`flex items-center justify-self-center rounded-lg border border-gray-200
         dark:border-gray-700 bg-background-secondary dark:bg-dark-background-secondary
         shadow-md p-6 hover:shadow-lg hover:scale-101 transition-all duration-200 ease-in-out  ${className}`}
    >
      {children}
    </div>
  );
};

export default CardWrapper;
