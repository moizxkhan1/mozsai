import { Sx } from '../components/Sx';
import type { ViewModel } from '../types';

export function Footer({ v }: { v: ViewModel }) {
  return (
    <footer
      data-dark="1"
      style={{ background: 'var(--ink-deep)', color: '#F4F1EC', padding: `48px clamp(16px,3.5vw,56px) ${v.footPad}`, display: 'flex', flexDirection: 'column', gap: '24px', fontSize: '.875rem', lineHeight: 1.4 }}
    >
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px 40px' }}>
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
        {(v.founders ?? []).map((f: any, $index: number) => (
          <Sx
            as="a"
            key={$index}
            href={f?.mailto}
            style={{ display: 'inline-flex', alignItems: 'center', minHeight: '44px', color: 'inherit', fontWeight: 500, textDecoration: 'underline', textDecorationThickness: '2px', textUnderlineOffset: '4px', backgroundImage: 'linear-gradient(currentColor,currentColor)', backgroundRepeat: 'no-repeat', backgroundPosition: '0 50%', backgroundSize: '0 0', transition: 'color 200ms, padding-left 260ms cubic-bezier(.2,.7,.2,1), margin-left 260ms cubic-bezier(.2,.7,.2,1), background-size 260ms cubic-bezier(.2,.7,.2,1)' }}
            hover={{ color: 'var(--accent)', paddingLeft: '16px', marginLeft: '-16px', backgroundSize: '7px 7px' }}
          >{f?.email}</Sx>
        ))}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0 28px' }}>
        {(v.footLinks ?? []).map((l: any, $index: number) => (
          <Sx
            as="a"
            key={$index}
            href="#"
            onClick={l?.go}
            style={{ display: 'inline-flex', alignItems: 'center', minHeight: '44px', color: 'inherit', fontWeight: 500, textDecoration: 'none' }}
            hover={{ textDecoration: 'underline' }}
          >{l?.label}</Sx>
        ))}
        {(v.socials ?? []).map((so: any, $index: number) => (
          <Sx
            as="a"
            key={$index}
            href="#"
            style={{ display: 'inline-flex', alignItems: 'center', minHeight: '44px', color: 'inherit', fontWeight: 500, textDecoration: 'none' }}
            hover={{ textDecoration: 'underline' }}
          >{so}</Sx>
        ))}
        <span style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', minHeight: '44px' }}>© 2026 MOZSAI</span>
      </div>
    </footer>
  );
}
