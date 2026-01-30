interface PWLogoProps {
  className?: string;
}

const PWLogo = ({ className = '' }: PWLogoProps) => {
  return (
    <div className={`flex items-center justify-center rounded-full bg-white p-1 ${className}`}>
      <span className="text-xl md:text-2xl font-black text-cyan-500">
        PW
      </span>
    </div>
  );
};

export default PWLogo;
