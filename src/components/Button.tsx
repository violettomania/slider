export interface ButtonProps {
  children: React.ReactNode;
  className: string;
  handleClick: () => void;
}

export default function Button({
  children,
  className,
  handleClick,
}: ButtonProps) {
  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
