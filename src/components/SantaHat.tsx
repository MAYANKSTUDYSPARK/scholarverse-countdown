interface SantaHatProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const SantaHat = ({ className = '', size = 'md' }: SantaHatProps) => {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
  };

  return (
    <svg
      viewBox="0 0 100 100"
      className={`${sizeClasses[size]} ${className} santa-hat`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Hat base (red part) */}
      <path
        d="M10 75 Q15 40 50 25 Q85 40 90 75 L10 75"
        fill="hsl(0, 72%, 51%)"
        stroke="hsl(0, 72%, 40%)"
        strokeWidth="2"
      />
      {/* White fur trim */}
      <ellipse cx="50" cy="78" rx="45" ry="10" fill="white" />
      <ellipse cx="50" cy="78" rx="45" ry="8" fill="#f5f5f5" />
      {/* Hat tip curl */}
      <path
        d="M50 25 Q70 15 75 30 Q78 40 70 45"
        fill="hsl(0, 72%, 51%)"
        stroke="hsl(0, 72%, 40%)"
        strokeWidth="2"
      />
      {/* White pom-pom */}
      <circle cx="72" cy="42" r="12" fill="white" />
      <circle cx="72" cy="42" r="10" fill="#f8f8f8" />
      {/* Highlights */}
      <path
        d="M25 55 Q35 45 45 50"
        stroke="hsl(0, 72%, 60%)"
        strokeWidth="3"
        fill="none"
        opacity="0.5"
      />
    </svg>
  );
};

export default SantaHat;
