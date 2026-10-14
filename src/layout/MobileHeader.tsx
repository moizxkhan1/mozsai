import type { ViewModel } from '../types';

export function MobileHeader({ v }: { v: ViewModel }) {
  return (
    <header
      data-dark={v.hdrDark}
      style={{ position: 'fixed', top: '0', left: '0', right: '0', zIndex: 50, height: '64px', display: 'flex', alignItems: 'center', padding: '0 clamp(16px,3.5vw,56px)', background: v.hdrBg, color: v.hdrFg, WebkitBackdropFilter: 'blur(16px) saturate(1.2)', backdropFilter: 'blur(16px) saturate(1.2)', transition: 'background-color 120ms,color 120ms' }}
    >
      <a
        href="#"
        onClick={v.goHome}
        onMouseEnter={v.logo?.on}
        onMouseLeave={v.logo?.off}
        onFocus={v.logo?.on}
        onBlur={v.logo?.off}
        aria-label="MOZSAI home"
        style={{ display: 'inline-flex', alignItems: 'center', minHeight: '44px', fontStretch: '125%', fontWeight: 800, fontSize: '1.375rem', letterSpacing: '-.01em', textDecoration: 'none', color: 'inherit' }}
      >
        <span
          style={{ display: 'inline-block', opacity: v.logo?.op, transform: `translateY(${v.logo?.y0})`, transition: 'transform 320ms cubic-bezier(.2,.7,.2,1) 0ms, color 400ms 0ms, opacity 320ms 0ms' }}
        >M</span>
        <span
          style={{ display: 'inline-block', opacity: v.logo?.op, transform: `translateY(${v.logo?.y1})`, transition: 'transform 320ms cubic-bezier(.2,.7,.2,1) 35ms, color 400ms 35ms, opacity 320ms 35ms' }}
        >O</span>
        <span
          style={{ display: 'inline-block', opacity: v.logo?.op, transform: `translateY(${v.logo?.y2})`, transition: 'transform 320ms cubic-bezier(.2,.7,.2,1) 70ms, color 400ms 70ms, opacity 320ms 70ms' }}
        >Z</span>
        <span
          style={{ display: 'inline-block', opacity: v.logo?.op, transform: `translateY(${v.logo?.y3})`, transition: 'transform 320ms cubic-bezier(.2,.7,.2,1) 105ms, color 400ms 105ms, opacity 320ms 105ms' }}
        >S</span>
        <span
          style={{ display: 'inline-block', opacity: v.logo?.op, transform: `translateY(${v.logo?.y4})`, color: v.logo?.ai, transition: 'transform 320ms cubic-bezier(.2,.7,.2,1) 140ms, color 400ms 140ms, opacity 320ms 140ms' }}
        >A</span>
        <span
          style={{ display: 'inline-block', opacity: v.logo?.op, transform: `translateY(${v.logo?.y5})`, color: v.logo?.ai, transition: 'transform 320ms cubic-bezier(.2,.7,.2,1) 175ms, color 400ms 175ms, opacity 320ms 175ms' }}
        >I</span>
      </a>
      <button
        type="button"
        onClick={v.openMenu}
        aria-expanded={v.menuOpenStr}
        style={{ marginLeft: 'auto', minHeight: '44px', minWidth: '44px', padding: '0 4px', background: 'none', border: '0', color: 'inherit', fontWeight: 600, fontSize: '1.0625rem', cursor: 'pointer' }}
      >Menu</button>
    </header>
  );
}
