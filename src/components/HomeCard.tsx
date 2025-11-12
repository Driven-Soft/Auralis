import React from "react";
import CardWrapper from "./CardWrapper";

interface UserCardProps {
  icon?: React.ReactNode;
  iconClassName?: string;
  title: string;
  texto: string;
}

const UserCard = ({ title, texto, icon, iconClassName }: UserCardProps) => {
  let sizedIcon: React.ReactNode = null;
  if (React.isValidElement(icon)) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const el = icon as React.ReactElement<any>;
    sizedIcon = React.cloneElement(el, { ...(el.props || {}), size: 32 });
  }

  return (
    <CardWrapper className="flex-col gap-1 w-full hover:scale-102 cursor-pointer transition-transform">
      <div>
        {sizedIcon && (
          <div className={`flex justify-center ${iconClassName ?? ""}`}>
            {sizedIcon}
          </div>
        )}
      </div>
      <div className="text-center items-center">
        <p className="text-texto-primary text-lg dark:text-texto-secondary">{title}</p>
        <p className="text-gray-500 dark:text-gray-400">{texto}</p>
      </div>
    </CardWrapper>
  );
};

export default UserCard;
