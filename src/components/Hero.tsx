import React from "react";

interface HeroProps {
  icon?: React.ReactNode;
  title: string;
  text: string;
  className?: string;
  iconClassName?: string;
}

const Hero = ({ icon, title, text, className, iconClassName }: HeroProps) => {
  let sizedIcon: React.ReactNode = null;
  if (React.isValidElement(icon)) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const el = icon as React.ReactElement<any>;
    sizedIcon = React.cloneElement(el, { ...(el.props || {}), size: 48 });
  }

  return (
    <div
      className={`flex flex-col items-center text-center p-4 ${className ?? ""}`}
    >
      {sizedIcon && (
        <div className={`mt-2 mb-4 sm:my-10 p-4 rounded-2xl ${iconClassName ?? ""}`}>
          {sizedIcon}
        </div>
      )}
      <h2 className="text-3xl sm:text-5xl pb-5 text-texto-primary font-bold dark:text-texto-secondary">{title}</h2>
      <p className="text-xl font-normal text-gray-500 dark:text-gray-400">{text}</p>
    </div>
  );
};

export default Hero;