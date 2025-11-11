import CardWrapper from "./CardWrapper";
import IconWrapper from "./IconWrapper";

interface SobreCardProps {
  icon: React.ReactNode;
  title: string;
  text: string;
  className?: string;
}

const SobreCard = ({ icon, title, text, className }: SobreCardProps) => {
  return (
    <CardWrapper className={`w-full hover:scale-101 h-auto ${className}`}>
      <IconWrapper>{icon}</IconWrapper>
      <div className="flex flex-col ml-4">
        <h3 className="text-xl font-medium mb-2 text-texto-primary dark:text-texto-secondary">
          {title}
        </h3>
        <p className="font-normal text-gray-500 dark:text-gray-400">{text}</p>
      </div>
    </CardWrapper>
  );
};

export default SobreCard;
