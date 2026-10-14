import { Sx } from '../components/Sx';
import type { ViewModel } from '../types';

export function CareersPage({ v }: { v: ViewModel }) {
  return (
    <>
      <section
        ref={v.heroRef}
        style={{ background: '#F4F1EC', color: '#1A1917', padding: 'clamp(112px,14vw,200px) clamp(16px,3.5vw,56px) clamp(64px,10vw,192px)' }}
      >
        <h1
          style={{ margin: '0', fontStretch: '68%', fontWeight: 800, textTransform: 'uppercase', fontSize: 'clamp(3.25rem,min(12.5vw,17svh),14rem)', lineHeight: 0.86, letterSpacing: '-.02em' }}
        >Work with us</h1>
        <p
          style={{ margin: 'clamp(32px,4vw,56px) 0 0', maxWidth: '40ch', fontStretch: '90%', fontWeight: 500, fontSize: 'clamp(1.375rem,2.2vw,2.25rem)', lineHeight: 1.25, letterSpacing: '-.01em' }}
        >We hire people who like finishing things.</p>
      </section>
      <section
        style={{ background: '#F4F1EC', color: '#1A1917', padding: '0 clamp(16px,3.5vw,56px) clamp(64px,10vw,192px)' }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 'clamp(16px,2vw,28px)' }}>
          <h2
            style={{ margin: '0', fontStretch: '72%', fontWeight: 750, textTransform: 'uppercase', fontSize: 'clamp(2.5rem,7.5vw,8rem)', lineHeight: 0.9, letterSpacing: '-.015em' }}
          >Open roles</h2>
          <p
            style={{ margin: '0', maxWidth: '44ch', fontSize: 'clamp(1.125rem,1.5vw,1.5rem)', lineHeight: 1.4, textWrap: 'pretty' }}
          >All remote.</p>
        </div>
        <div style={{ marginTop: 'clamp(40px,5vw,80px)', borderBottom: '1px solid #1A1917' }}>
          {(v.roles ?? []).map((r: any, $index: number) => (
            <Sx
              as="a"
              key={$index}
              href={r?.mailto}
              style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', columnGap: 'clamp(24px,4vw,64px)', rowGap: '12px', padding: 'clamp(24px,2.6vw,36px) 0', borderTop: '1px solid #1A1917', color: '#1A1917', textDecoration: 'none' }}
              hover={{ background: 'rgba(0,0,0,.03)' }}
            >
              <span style={{ flex: '6 1 20rem', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <span
                  style={{ fontStretch: '80%', fontWeight: 700, textTransform: 'uppercase', fontSize: 'clamp(1.75rem,3vw,3.25rem)', lineHeight: 0.95, letterSpacing: '-.01em' }}
                >{r?.title}</span>
                <span style={{ maxWidth: '52ch', fontSize: '1rem', lineHeight: 1.5 }}>{r?.body}</span>
              </span>
              <span
                style={{ flex: '3 1 12rem', display: 'flex', flexDirection: 'column', fontSize: '.875rem', fontWeight: 500, lineHeight: 1.5 }}
              >
                <span>{r?.type}</span>
                <span>{r?.where}</span>
              </span>
              <span
                style={{ flex: '0 0 auto', display: 'inline-flex', alignItems: 'center', gap: '12px', minHeight: '44px', whiteSpace: 'nowrap', fontWeight: 600 }}
              >
                <span style={{ textDecoration: 'underline', textDecorationThickness: '2px', textUnderlineOffset: '4px' }}>Apply by email</span>
                <span aria-hidden="true">→</span>
              </span>
            </Sx>
          ))}
        </div>
      </section>
      <section
        data-dark="1"
        style={{ background: 'var(--ink)', color: '#F4F1EC', padding: 'clamp(64px,10vw,192px) clamp(16px,3.5vw,56px)' }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 'clamp(16px,2vw,28px)' }}>
          <h2
            style={{ margin: '0', fontStretch: '72%', fontWeight: 750, textTransform: 'uppercase', fontSize: 'clamp(2.5rem,7.5vw,8rem)', lineHeight: 0.9, letterSpacing: '-.015em' }}
          >How we hire</h2>
          <p
            style={{ margin: '0', maxWidth: '44ch', fontSize: 'clamp(1.125rem,1.5vw,1.5rem)', lineHeight: 1.4, textWrap: 'pretty' }}
          >Four steps, all with the founders.</p>
        </div>
        <ol
          style={{ listStyle: 'none', margin: 'clamp(48px,6vw,96px) 0 0', padding: '0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,14rem),1fr))', gap: '40px clamp(16px,2vw,32px)' }}
        >
          {(v.hireSteps ?? []).map((st: any, $index: number) => (
            <li
              key={$index}
              style={{ display: 'flex', flexDirection: 'column', borderTop: '2px solid #F4F1EC', paddingTop: '20px' }}
            >
              <h3
                style={{ margin: '0', fontStretch: '80%', fontWeight: 700, textTransform: 'uppercase', lineHeight: 0.95, letterSpacing: '-.01em', fontSize: 'clamp(1.5rem,2.3vw,2.5rem)' }}
              >{st?.when}</h3>
              <p style={{ margin: '16px 0 0', fontSize: 'clamp(1.0625rem,1.2vw,1.25rem)', fontWeight: 600, lineHeight: 1.3 }}>{st?.a}</p>
              <p style={{ margin: '8px 0 0', maxWidth: '28ch', fontSize: '.9375rem', lineHeight: 1.45 }}>{st?.b}</p>
            </li>
          ))}
        </ol>
      </section>
      <section style={{ background: '#F4F1EC', color: '#1A1917', padding: 'clamp(64px,10vw,192px) clamp(16px,3.5vw,56px)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 'clamp(16px,2vw,28px)' }}>
          <h2
            style={{ margin: '0', fontStretch: '72%', fontWeight: 750, textTransform: 'uppercase', fontSize: 'clamp(2.5rem,7.5vw,8rem)', lineHeight: 0.9, letterSpacing: '-.015em' }}
          >What to expect</h2>
        </div>
        <div style={{ marginTop: 'clamp(40px,5vw,80px)', borderBottom: '1px solid #1A1917' }}>
          {(v.perks ?? []).map((pk: any, $index: number) => (
            <Sx
              as="div"
              key={$index}
              data-rise="1"
              style={{ display: 'flex', flexWrap: 'wrap', columnGap: 'clamp(24px,4vw,64px)', rowGap: '8px', alignItems: 'baseline', padding: 'clamp(20px,2.2vw,32px) 0', borderTop: '1px solid #1A1917' }}
              hover={{ paddingLeft: '20px', borderTopColor: 'var(--accent)' }}
            >
              <h3
                style={{ flex: '6 1 20rem', minWidth: '0', margin: '0', fontStretch: '85%', fontWeight: 650, fontSize: 'clamp(1.5rem,2.6vw,2.5rem)', lineHeight: 1, letterSpacing: '-.01em' }}
              >{pk?.title}</h3>
              <p
                style={{ flex: '5 1 18rem', minWidth: '0', margin: '0', maxWidth: '48ch', fontSize: 'clamp(1rem,1.15vw,1.1875rem)', lineHeight: 1.5 }}
              >{pk?.body}</p>
            </Sx>
          ))}
        </div>
      </section>
      <section
        data-dark="1"
        style={{ background: 'var(--ink-deep)', color: '#F4F1EC', padding: 'clamp(64px,10vw,192px) clamp(16px,3.5vw,56px)' }}
      >
        <h2
          style={{ margin: '0', fontStretch: '72%', fontWeight: 750, textTransform: 'uppercase', fontSize: 'clamp(2.5rem,7.5vw,8rem)', lineHeight: 0.9, letterSpacing: '-.015em', maxWidth: '14ch' }}
        >No role that fits? Send us your work anyway</h2>
        <div
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '24px', marginTop: 'clamp(32px,4vw,56px)' }}
        >
          <p style={{ margin: '0', maxWidth: '40ch', fontSize: 'clamp(1.0625rem,1.3vw,1.375rem)', lineHeight: 1.45 }}>Send a link to something you built. We reply to everyone.</p>
          <Sx
            as="a"
            href="mailto:careers@mozs.ai"
            style={{ display: 'inline-flex', alignItems: 'center', minHeight: '44px', color: 'inherit', fontStretch: '85%', fontWeight: 600, fontSize: 'clamp(1.5rem,3vw,3rem)', lineHeight: 1.1, textDecoration: 'underline', textDecorationThickness: '2px', textUnderlineOffset: '8px', backgroundImage: 'linear-gradient(currentColor,currentColor)', backgroundRepeat: 'no-repeat', backgroundPosition: '0 50%', backgroundSize: '0 0', transition: 'color 200ms, padding-left 260ms cubic-bezier(.2,.7,.2,1), margin-left 260ms cubic-bezier(.2,.7,.2,1), background-size 260ms cubic-bezier(.2,.7,.2,1)' }}
            hover={{ color: 'var(--accent)', paddingLeft: '16px', marginLeft: '-16px', backgroundSize: '7px 7px' }}
          >careers@mozs.ai</Sx>
        </div>
      </section>
    </>
  );
}
