import { Sx } from '../components/Sx';
import type { ViewModel } from '../types';

export function MobileMenu({ v }: { v: ViewModel }) {
  return (
    <div
      data-dark="1"
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      aria-hidden={v.menuHidden}
      style={{ position: 'fixed', inset: '0', zIndex: 60, background: 'var(--ink)', color: '#F4F1EC', display: 'flex', flexDirection: 'column', padding: '0 clamp(16px,3.5vw,56px) 24px', overflowY: 'auto', clipPath: v.menuClip, visibility: v.menuVis, transition: `clip-path ${v.menuDur} cubic-bezier(.65,0,.35,1), visibility 0s linear ${v.menuVd}` }}
    >
      <div style={{ flex: 'none', height: '64px', display: 'flex', alignItems: 'center' }}>
        <a
          href="#"
          onClick={v.goHome}
          onMouseEnter={v.logo?.on}
          onMouseLeave={v.logo?.off}
          onFocus={v.logo?.on}
          onBlur={v.logo?.off}
          style={{ display: 'inline-flex', alignItems: 'center', minHeight: '44px', fontStretch: '125%', fontWeight: 800, fontSize: '1.375rem', textDecoration: 'none', color: 'inherit' }}
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
          onClick={v.closeMenu}
          style={{ marginLeft: 'auto', minHeight: '44px', minWidth: '44px', padding: '0 4px', background: 'none', border: '0', color: 'inherit', fontWeight: 600, fontSize: '1.0625rem', cursor: 'pointer' }}
        >Close</button>
      </div>
      <nav aria-label="Main" style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '40px' }}>
        {(v.menuNav ?? []).map((n: any, $index: number) => (
          <a
            key={$index}
            href="#"
            onClick={n?.go}
            style={{ display: 'block', overflow: 'hidden', color: 'inherit', textDecoration: 'none', fontStretch: '72%', fontWeight: 750, textTransform: 'uppercase', fontSize: 'clamp(2.5rem,7.5vw,8rem)', lineHeight: 1.1, letterSpacing: '-.015em' }}
          >
            <span
              style={{ display: 'block', transform: `translateY(${n?.ty})`, transition: `transform 520ms cubic-bezier(.2,.7,.2,1) ${n?.d}` }}
            >{n?.label}</span>
          </a>
        ))}
      </nav>
      <div
        style={{ display: 'flex', flexDirection: 'column', marginTop: '40px', opacity: v.menuFadeOp, transform: `translateY(${v.menuFadeY})`, transition: `opacity 400ms ${v.menuFadeD}, transform 520ms cubic-bezier(.2,.7,.2,1) ${v.menuFadeD}` }}
      >
        {(v.founders ?? []).map((f: any, $index: number) => (
          <a
            key={$index}
            href={f?.mailto}
            style={{ display: 'inline-flex', alignItems: 'center', minHeight: '44px', alignSelf: 'flex-start', color: 'inherit', fontWeight: 500, textDecoration: 'underline', textDecorationThickness: '2px', textUnderlineOffset: '4px' }}
          >{f?.email}</a>
        ))}
      </div>
      <div
        style={{ marginTop: 'auto', paddingTop: '40px', opacity: v.menuFadeOp, transform: `translateY(${v.menuFadeY})`, transition: `opacity 400ms ${v.menuFadeD}, transform 520ms cubic-bezier(.2,.7,.2,1) ${v.menuFadeD}` }}
      >
        <Sx
          as="a"
          href="#"
          onClick={v.bookCall}
          onMouseEnter={v.bx?.menu?.on}
          onMouseLeave={v.bx?.menu?.off}
          onFocus={v.bx?.menu?.on}
          onBlur={v.bx?.menu?.off}
          style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', height: '56px', padding: '0 28px', whiteSpace: 'nowrap', backgroundColor: 'var(--accent)', backgroundImage: 'linear-gradient(var(--accent-deep),var(--accent-deep))', backgroundRepeat: 'no-repeat', backgroundPosition: 'left center', backgroundSize: '0% 100%', color: '#F4F1EC', fontWeight: 600, fontSize: '1.0625rem', textDecoration: 'none', transition: 'background-size 450ms cubic-bezier(.65,0,.35,1), gap 200ms' }}
          hover={{ backgroundSize: '100% 100%', gap: '20px' }}
        >Book a call<span aria-hidden="true" style={{ fontSize: '1.15em', lineHeight: 1 }}>→</span><span
            aria-hidden="true"
            style={{ position: 'absolute', top: '-7px', left: '-7px', width: '12px', height: '12px', borderTop: '2px solid var(--accent)', borderLeft: '2px solid var(--accent)', pointerEvents: 'none', transform: v.bx?.menu?.tl, transition: 'transform 260ms cubic-bezier(.2,.7,.2,1), opacity 200ms' }}
          ></span><span
            aria-hidden="true"
            style={{ position: 'absolute', top: '-7px', right: '-7px', width: '12px', height: '12px', borderTop: '2px solid var(--accent)', borderRight: '2px solid var(--accent)', pointerEvents: 'none', transform: v.bx?.menu?.tr, transition: 'transform 260ms cubic-bezier(.2,.7,.2,1), opacity 200ms' }}
          ></span><span
            aria-hidden="true"
            style={{ position: 'absolute', bottom: '-7px', left: '-7px', width: '12px', height: '12px', borderBottom: '2px solid var(--accent)', borderLeft: '2px solid var(--accent)', pointerEvents: 'none', opacity: v.bx?.menu?.bo, transform: v.bx?.menu?.bl, transition: 'transform 260ms cubic-bezier(.2,.7,.2,1), opacity 200ms' }}
          ></span><span
            aria-hidden="true"
            style={{ position: 'absolute', bottom: '-7px', right: '-7px', width: '12px', height: '12px', borderBottom: '2px solid var(--accent)', borderRight: '2px solid var(--accent)', pointerEvents: 'none', opacity: v.bx?.menu?.bo, transform: v.bx?.menu?.br, transition: 'transform 260ms cubic-bezier(.2,.7,.2,1), opacity 200ms' }}
          ></span></Sx>
      </div>
    </div>
  );
}
