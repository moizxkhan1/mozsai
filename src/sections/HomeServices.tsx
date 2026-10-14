import { Sx } from '../components/Sx';
import type { ViewModel } from '../types';

export function HomeServices({ v }: { v: ViewModel }) {
  return (
    <section
      style={{ background: '#F4F1EC', color: '#1A1917', padding: '0 clamp(16px,3.5vw,56px) clamp(64px,10vw,192px)' }}
    >
      <h2
        style={{ margin: '0', fontStretch: '72%', fontWeight: 750, textTransform: 'uppercase', fontSize: 'clamp(2.5rem,7.5vw,8rem)', lineHeight: 0.9, letterSpacing: '-.015em' }}
      >What we build</h2>
      <div
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,18rem),1fr))', gap: '0 clamp(24px,3vw,48px)', marginTop: 'clamp(40px,5vw,80px)' }}
      >
        {(v.bands ?? []).map((b: any, $index: number) => (
          <Sx
            as="a"
            key={$index}
            href="#"
            onClick={b?.go}
            onMouseEnter={b?.enter}
            onMouseLeave={b?.leave}
            onFocus={b?.enter}
            onBlur={b?.leave}
            data-rise="1"
            style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '26px 0 32px', backgroundImage: 'linear-gradient(var(--accent),var(--accent)),linear-gradient(#1A1917,#1A1917)', backgroundRepeat: 'no-repeat', backgroundPosition: '0 0,0 0', backgroundSize: '0% 2px,100% 2px', color: '#1A1917', textDecoration: 'none' }}
            hover={{ backgroundSize: '100% 2px,100% 2px' }}
          >
            <h3
              style={{ margin: '0', fontStretch: '80%', fontWeight: 700, textTransform: 'uppercase', fontSize: 'clamp(1.75rem,2.8vw,3rem)', lineHeight: 0.95, letterSpacing: '-.01em' }}
            >{b?.name}</h3>
            <p style={{ margin: '0', maxWidth: '32ch', fontSize: 'clamp(1.0625rem,1.2vw,1.25rem)', lineHeight: 1.45 }}>{b?.blurb}</p>
            <span
              style={{ marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: '10px', minHeight: '44px', fontWeight: 600, color: b?.lc, transition: 'color 200ms' }}
            >
              <span style={{ textDecoration: 'underline', textDecorationThickness: '2px', textUnderlineOffset: '4px' }}>{b?.linkLabel}</span>
              <span
                aria-hidden="true"
                style={{ display: 'inline-block', transform: `translateX(${b?.ax})`, transition: 'transform 300ms cubic-bezier(.2,.7,.2,1)' }}
              >→</span>
            </span>
          </Sx>
        ))}
      </div>
    </section>
  );
}
