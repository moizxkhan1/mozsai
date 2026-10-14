import { Sx } from '../components/Sx';
import type { ViewModel } from '../types';

export function DesktopHeader({ v }: { v: ViewModel }) {
  return (
    <header
      data-dark={v.hdrDark}
      style={{ position: 'fixed', top: '0', left: '0', right: '0', zIndex: 50, height: '80px', display: 'grid', gridTemplateColumns: 'minmax(0,1fr) auto minmax(0,1fr)', alignItems: 'center', gap: 'clamp(24px,3vw,48px)', padding: '0 clamp(16px,3.5vw,56px)', background: v.hdrBg, color: v.hdrFg, WebkitBackdropFilter: 'blur(16px) saturate(1.2)', backdropFilter: 'blur(16px) saturate(1.2)', transition: 'background-color 120ms,color 120ms' }}
    >
      <a
        href="#"
        onClick={v.goHome}
        onMouseEnter={v.logo?.on}
        onMouseLeave={v.logo?.off}
        onFocus={v.logo?.on}
        onBlur={v.logo?.off}
        aria-label="MOZSAI home"
        style={{ justifySelf: 'start', display: 'inline-flex', alignItems: 'center', minHeight: '44px', fontStretch: '125%', fontWeight: 800, fontSize: '1.5rem', letterSpacing: '-.01em', textDecoration: 'none', color: 'inherit' }}
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
      <nav
        ref={v.navRef}
        onMouseLeave={v.navLeave}
        aria-label="Main"
        style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: '2px', padding: '0' }}
      >
        {(v.nav ?? []).map((n: any, $index: number) => (
          <Sx
            as="a"
            key={$index}
            href="#"
            onClick={n?.go}
            data-nav={n?.key}
            onMouseEnter={n?.enter}
            onFocus={n?.enter}
            onBlur={v.navLeave}
            aria-current={n?.current}
            style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', gap: '8px', height: '40px', padding: '0 16px', color: n?.fg, background: n?.bg, fontWeight: 600, fontSize: '.9375rem', letterSpacing: '.005em', textDecoration: 'none', whiteSpace: 'nowrap', transition: 'background-color 150ms,color 150ms' }}
            hover={{ color: 'var(--accent)' }}
          >{n?.label}</Sx>
        ))}
        <span
          aria-hidden="true"
          style={{ position: 'absolute', top: '0', height: '40px', left: `${v.navX}px`, width: `${v.navW}px`, opacity: v.navOp, pointerEvents: 'none', transition: 'left 340ms cubic-bezier(.2,.7,.2,1), width 340ms cubic-bezier(.2,.7,.2,1), opacity 200ms' }}
        >
          <span
            style={{ position: 'absolute', top: '0', left: '0', width: '8px', height: '8px', borderTop: '2px solid var(--accent)', borderLeft: '2px solid var(--accent)' }}
          ></span>
          <span
            style={{ position: 'absolute', top: '0', right: '0', width: '8px', height: '8px', borderTop: '2px solid var(--accent)', borderRight: '2px solid var(--accent)' }}
          ></span>
          <span
            style={{ position: 'absolute', bottom: '0', left: '0', width: '8px', height: '8px', borderBottom: '2px solid var(--accent)', borderLeft: '2px solid var(--accent)' }}
          ></span>
          <span
            style={{ position: 'absolute', bottom: '0', right: '0', width: '8px', height: '8px', borderBottom: '2px solid var(--accent)', borderRight: '2px solid var(--accent)' }}
          ></span>
        </span>
      </nav>
      <div style={{ justifySelf: 'end', display: 'grid', alignItems: 'center', justifyItems: 'end' }}>
        <Sx
          as="a"
          href="mailto:hello@mozs.ai"
          style={{ gridArea: '1 / 1', display: 'inline-flex', alignItems: 'center', minHeight: '44px', color: 'inherit', fontWeight: 500, textDecoration: 'underline', textDecorationThickness: '2px', textUnderlineOffset: '4px', opacity: v.hdrEmailOp, transform: `translateY(${v.hdrEmailY})`, visibility: v.hdrEmailVis, backgroundImage: 'linear-gradient(currentColor,currentColor)', backgroundRepeat: 'no-repeat', backgroundPosition: '0 50%', backgroundSize: '0 0', transition: 'color 200ms, padding-left 260ms cubic-bezier(.2,.7,.2,1), margin-left 260ms cubic-bezier(.2,.7,.2,1), background-size 260ms cubic-bezier(.2,.7,.2,1)' }}
          hover={{ color: 'var(--accent)', paddingLeft: '16px', marginLeft: '-16px', backgroundSize: '7px 7px' }}
        >Email us</Sx>
        <div
          style={{ gridArea: '1 / 1', display: 'flex', opacity: v.hdrBtnOp, transform: `translateY(${v.hdrBtnY})`, visibility: v.hdrBtnVis, transition: `opacity 280ms, transform 420ms cubic-bezier(.2,.7,.2,1), visibility 0s linear ${v.hdrBtnVd}` }}
        >
          <Sx
            as="a"
            href="#"
            onClick={v.bookCall}
            onMouseEnter={v.bx?.hdr1?.on}
            onMouseLeave={v.bx?.hdr1?.off}
            onFocus={v.bx?.hdr1?.on}
            onBlur={v.bx?.hdr1?.off}
            style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '12px', height: '56px', padding: '0 28px', whiteSpace: 'nowrap', backgroundColor: 'var(--accent)', backgroundImage: 'linear-gradient(var(--accent-deep),var(--accent-deep))', backgroundRepeat: 'no-repeat', backgroundPosition: 'left center', backgroundSize: '0% 100%', color: '#F4F1EC', fontWeight: 600, fontSize: '1.0625rem', textDecoration: 'none', transition: 'background-size 450ms cubic-bezier(.65,0,.35,1), gap 200ms' }}
            hover={{ backgroundSize: '100% 100%', gap: '20px' }}
          >Book a call<span aria-hidden="true" style={{ fontSize: '1.15em', lineHeight: 1 }}>→</span><span
              aria-hidden="true"
              style={{ position: 'absolute', top: '-7px', left: '-7px', width: '12px', height: '12px', borderTop: '2px solid var(--accent)', borderLeft: '2px solid var(--accent)', pointerEvents: 'none', transform: v.bx?.hdr1?.tl, transition: 'transform 260ms cubic-bezier(.2,.7,.2,1), opacity 200ms' }}
            ></span><span
              aria-hidden="true"
              style={{ position: 'absolute', top: '-7px', right: '-7px', width: '12px', height: '12px', borderTop: '2px solid var(--accent)', borderRight: '2px solid var(--accent)', pointerEvents: 'none', transform: v.bx?.hdr1?.tr, transition: 'transform 260ms cubic-bezier(.2,.7,.2,1), opacity 200ms' }}
            ></span><span
              aria-hidden="true"
              style={{ position: 'absolute', bottom: '-7px', left: '-7px', width: '12px', height: '12px', borderBottom: '2px solid var(--accent)', borderLeft: '2px solid var(--accent)', pointerEvents: 'none', opacity: v.bx?.hdr1?.bo, transform: v.bx?.hdr1?.bl, transition: 'transform 260ms cubic-bezier(.2,.7,.2,1), opacity 200ms' }}
            ></span><span
              aria-hidden="true"
              style={{ position: 'absolute', bottom: '-7px', right: '-7px', width: '12px', height: '12px', borderBottom: '2px solid var(--accent)', borderRight: '2px solid var(--accent)', pointerEvents: 'none', opacity: v.bx?.hdr1?.bo, transform: v.bx?.hdr1?.br, transition: 'transform 260ms cubic-bezier(.2,.7,.2,1), opacity 200ms' }}
            ></span></Sx>
        </div>
      </div>
    </header>
  );
}
