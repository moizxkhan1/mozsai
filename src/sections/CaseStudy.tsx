import { Sx } from '../components/Sx';
import type { ViewModel } from '../types';

export function CaseStudy({ v }: { v: ViewModel }) {
  return (
    <>
      <div
        ref={v.heroRef}
        data-dark="1"
        role="img"
        aria-label={v.cs?.media}
        style={{ position: 'relative', background: '#1A1917', color: '#F4F1EC', aspectRatio: v.bleedRatio }}
      >
        <span
          aria-hidden="true"
          style={{ position: 'absolute', left: 'clamp(16px,3.5vw,56px)', bottom: 'clamp(16px,2.5vw,40px)', fontSize: '.875rem', fontWeight: 500, lineHeight: 1.4 }}
        >{v.cs?.media}</span>
      </div>
      <section style={{ padding: 'clamp(64px,10vw,192px) clamp(16px,3.5vw,56px)' }}>
        <h1
          style={{ margin: '0', fontStretch: '72%', fontWeight: 750, textTransform: 'uppercase', fontSize: 'clamp(2.5rem,7.5vw,8rem)', lineHeight: 0.9, letterSpacing: '-.015em' }}
        >{v.cs?.name}</h1>
        <p
          style={{ margin: 'clamp(24px,3vw,40px) 0 0', fontStretch: '85%', fontWeight: 650, fontSize: 'clamp(1.75rem,4.2vw,4rem)', lineHeight: 0.95, letterSpacing: '-.01em' }}
        >{v.cs?.result}</p>
        <dl
          style={{ margin: 'clamp(48px,6vw,96px) 0 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,22rem),1fr))', gap: '24px clamp(12px,1.6vw,24px)' }}
        >
          {(v.cs?.facts ?? []).map((f: any, $index: number) => (
            <div key={$index}>
              <dt style={{ fontSize: '.875rem', fontWeight: 500, lineHeight: 1.4 }}>{f?.k}</dt>
              <dd
                style={{ margin: '4px 0 0', fontSize: 'clamp(1.125rem,1.5vw,1.5rem)', lineHeight: 1.45, fontVariantNumeric: 'tabular-nums' }}
              >{f?.v}</dd>
            </div>
          ))}
        </dl>
      </section>
      <section
        style={{ padding: '0 clamp(16px,3.5vw,56px) clamp(64px,10vw,192px)', display: 'flex', flexDirection: 'column', gap: 'clamp(48px,6vw,96px)' }}
      >
        {(v.cs?.sections ?? []).map((sec: any, $index: number) => (
          <div
            key={$index}
            style={{ display: 'flex', flexWrap: 'wrap', columnGap: '8.333%', rowGap: '16px', alignItems: 'baseline' }}
          >
            <h2
              style={{ flex: '5 1 16rem', minWidth: '0', margin: '0', fontStretch: '85%', fontWeight: 650, fontSize: 'clamp(1.75rem,4.2vw,4rem)', lineHeight: 0.95, letterSpacing: '-.01em' }}
            >{sec?.h}</h2>
            <p style={{ flex: '6 1 24rem', minWidth: '0', margin: '0', maxWidth: '62ch' }}>{sec?.t}</p>
          </div>
        ))}
      </section>
      <section
        style={{ padding: '0 clamp(16px,3.5vw,56px) clamp(64px,10vw,192px)', display: 'flex', flexDirection: 'column' }}
      >
        <div style={{ borderBottom: '1px solid #1A1917' }}>
          {(v.cs?.figures ?? []).map((g: any, $index: number) => (
            <div
              key={$index}
              data-figrow="1"
              style={{ display: 'flex', flexWrap: 'wrap', columnGap: 'clamp(24px,4vw,64px)', rowGap: '8px', alignItems: 'baseline', padding: 'clamp(24px,2.6vw,40px) 0', backgroundImage: 'linear-gradient(#1A1917,#1A1917)', backgroundRepeat: 'no-repeat', backgroundPosition: '0 0', backgroundSize: '100% 1px' }}
            >
              <p
                style={{ flex: '6 1 20rem', minWidth: '0', margin: '0', fontStretch: '72%', fontWeight: 750, textTransform: 'uppercase', fontSize: 'clamp(2.25rem,4.8vw,5rem)', lineHeight: 0.92, letterSpacing: '-.015em', fontVariantNumeric: 'tabular-nums' }}
              >{g?.fig}</p>
              <p
                style={{ flex: '5 1 18rem', minWidth: '0', margin: '0', maxWidth: '44ch', fontSize: 'clamp(1.0625rem,1.3vw,1.375rem)', lineHeight: 1.45 }}
              >{g?.text}</p>
            </div>
          ))}
        </div>
      </section>
      {v.cs?.hasRec ? (
        <section style={{ padding: '0 clamp(16px,3.5vw,56px) clamp(64px,10vw,192px)' }}>
          <figure style={{ margin: '0', borderTop: '1px solid #1A1917', paddingTop: '20px' }}>
            <span style={{ display: 'block', fontSize: '.875rem', fontWeight: 600, lineHeight: 1.4 }}>Recommendation</span>
            <blockquote
              style={{ margin: 'clamp(24px,3vw,40px) 0 0', maxWidth: '24ch', fontStretch: '85%', fontWeight: 500, fontSize: 'clamp(2rem,4.4vw,4.75rem)', lineHeight: 1, letterSpacing: '-.015em', textWrap: 'balance' }}
            >“{v.cs?.rec?.text}”</blockquote>
            <figcaption
              style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '16px 32px', marginTop: 'clamp(32px,4vw,56px)' }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span
                  role="img"
                  aria-label={v.cs?.rec?.portrait}
                  style={{ flex: 'none', width: '64px', height: '64px', background: 'var(--ink)' }}
                ></span>
                <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.4 }}>
                  <span style={{ fontWeight: 600 }}>{v.cs?.rec?.name}</span>
                  <span style={{ fontSize: '.875rem' }}>{v.cs?.rec?.role}, {v.cs?.rec?.company}</span>
                </span>
              </span>
              <Sx
                as="a"
                href="#"
                onClick={v.cs?.rec?.openProfile}
                style={{ display: 'inline-flex', alignItems: 'center', minHeight: '44px', whiteSpace: 'nowrap', color: 'inherit', fontWeight: 600, textDecoration: 'underline', textDecorationThickness: '2px', textUnderlineOffset: '4px', backgroundImage: 'linear-gradient(currentColor,currentColor)', backgroundRepeat: 'no-repeat', backgroundPosition: '0 50%', backgroundSize: '0 0', transition: 'color 200ms, padding-left 260ms cubic-bezier(.2,.7,.2,1), margin-left 260ms cubic-bezier(.2,.7,.2,1), background-size 260ms cubic-bezier(.2,.7,.2,1)' }}
                hover={{ color: 'var(--accent)', paddingLeft: '16px', marginLeft: '-16px', backgroundSize: '7px 7px' }}
              >{v.cs?.rec?.forName}'s profile</Sx>
            </figcaption>
          </figure>
        </section>
      ) : null}
      <section
        style={{ padding: '0 clamp(16px,3.5vw,56px) clamp(64px,10vw,192px)', display: 'flex', flexDirection: 'column', gap: 'clamp(48px,6vw,96px)' }}
      >
        {(v.cs?.gallery ?? []).map((gi: any, $index: number) => (
          <figure key={$index} style={{ margin: '0', width: '100%', maxWidth: gi?.maxW }}>
            <div role="img" aria-label={gi?.caption} style={{ background: '#1A1917', aspectRatio: gi?.ratio }}></div>
            <figcaption style={{ marginTop: '12px', fontSize: '.875rem', fontWeight: 500, lineHeight: 1.4 }}>{gi?.caption}</figcaption>
          </figure>
        ))}
      </section>
      <section style={{ padding: '0 clamp(16px,3.5vw,56px) clamp(64px,10vw,192px)' }}>
        <a
          href="#"
          onClick={v.nextCase?.open}
          style={{ display: 'flex', flexWrap: 'wrap', columnGap: '8.333%', rowGap: '12px', alignItems: 'baseline', padding: '32px 0', borderTop: '1px solid #1A1917', borderBottom: '1px solid #1A1917', color: '#1A1917', textDecoration: 'none' }}
        >
          <span style={{ flex: '0 0 100%', fontSize: '.875rem', fontWeight: 500, lineHeight: 1.4 }}>Next project</span>
          <span
            style={{ flex: '5 1 18rem', minWidth: '0', fontStretch: '85%', fontWeight: 650, fontSize: 'clamp(1.75rem,4.2vw,4rem)', lineHeight: 0.95, letterSpacing: '-.01em' }}
          >{v.nextCase?.name}</span>
          <span
            style={{ flex: '6 1 20rem', minWidth: '0', maxWidth: '62ch', fontSize: 'clamp(1.125rem,1.5vw,1.5rem)', lineHeight: 1.45 }}
          >{v.nextCase?.result}</span>
        </a>
      </section>
    </>
  );
}
