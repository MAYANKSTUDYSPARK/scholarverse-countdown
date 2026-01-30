interface SVLogoProps {
  className?: string;
}

const SVLogo = ({ className = '' }: SVLogoProps) => {
  return (
    <div className={`flex items-center justify-center rounded-full bg-gradient-to-br from-purple-600 via-blue-500 to-cyan-400 p-1 ${className}`}>
      <div className="flex items-center justify-center w-full h-full rounded-full bg-background">
        <span className="text-2xl md:text-3xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          SV
        </span>
      </div>
    </div>
  );
};

export default SVLogo;
