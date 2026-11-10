type ReiProps = {
  draw?: boolean;
  left?: string;
  right?: string;
  className?: string;
};

/** Aluminium richtlat in doorsnede: vlakke balk met vierkante kopse kanten. */
export default function Rei({ draw = false, left, right, className = "" }: ReiProps) {
  const labelled = Boolean(left || right);
  const end = labelled ? "bg-baksteen" : "bg-[#6e747a]";

  return (
    <div className={`rei h-2.5 ${draw ? "rei-draw" : ""} ${className}`} aria-hidden={labelled ? undefined : true}>
      <span className={`absolute top-0 left-0 h-2.5 w-2 ${end}`} />
      <span className="absolute top-[2px] right-2 left-2 h-1.5 bg-rei" />
      <span className={`absolute top-0 right-0 h-2.5 w-2 ${end}`} />
      {left ? <span className="rei-label left-4">{left}</span> : null}
      {right ? <span className="rei-label right-4">{right}</span> : null}
    </div>
  );
}
