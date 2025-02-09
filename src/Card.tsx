import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

interface CardContentProps {
  children: ReactNode;
}

export const Card = ({ children, className = "" }: CardProps) => {
  return (
    <div
      className={`bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-lg ${className}`}
    >
      {children}
    </div>
  );
};

export const CardContent = ({ children }: CardContentProps) => {
  return <div className="mt-2 text-green-200">{children}</div>;
};
