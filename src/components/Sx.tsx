import { forwardRef, useState, type CSSProperties, type ElementType } from 'react';

type SxProps = {
  as?: ElementType;
  style?: CSSProperties;
  hover?: CSSProperties;
  focus?: CSSProperties;
  active?: CSSProperties;
  [key: string]: any;
};

/** Any element with hover / focus / active style overrides layered over its inline style. */
export const Sx = forwardRef<any, SxProps>(function Sx(
  { as: Tag = 'div', style, hover, focus, active, onMouseEnter, onMouseLeave, onFocus, onBlur, onMouseDown, onMouseUp, ...rest },
  ref,
) {
  const [h, setH] = useState(false);
  const [f, setF] = useState(false);
  const [a, setA] = useState(false);
  const merged: CSSProperties = { ...style, ...(h ? hover : null), ...(f ? focus : null), ...(a ? active : null) };
  return (
    <Tag
      ref={ref}
      {...rest}
      style={merged}
      onMouseEnter={(e: any) => { setH(true); onMouseEnter?.(e); }}
      onMouseLeave={(e: any) => { setH(false); setA(false); onMouseLeave?.(e); }}
      onFocus={(e: any) => { setF(true); onFocus?.(e); }}
      onBlur={(e: any) => { setF(false); onBlur?.(e); }}
      onMouseDown={(e: any) => { setA(true); onMouseDown?.(e); }}
      onMouseUp={(e: any) => { setA(false); onMouseUp?.(e); }}
    />
  );
});
