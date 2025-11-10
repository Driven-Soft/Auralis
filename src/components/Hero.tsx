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
      className={`flex flex-col items-center p-4 ${className ?? ""}`}
    >
      {sizedIcon && (
        <div className={`my-10 p-4 rounded-2xl ${iconClassName ?? ""}`}>
          {sizedIcon}
        </div>
      )}
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-center">{text}</p>
    </div>
  );
};

export default Hero;
