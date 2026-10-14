import { Sx } from '../components/Sx';
import type { ViewModel } from '../types';

export function TeamPage({ v }: { v: ViewModel }) {
  return (
    <>
      <section
        ref={v.heroRef}
        style={{ background: '#F4F1EC', color: '#1A1917', padding: 'clamp(112px,14vw,200px) clamp(16px,3.5vw,56px) clamp(64px,10vw,192px)' }}
      >
        <h1
          style={{ margin: '0', fontStretch: '68%', fontWeight: 800, textTransform: 'uppercase', fontSize: 'clamp(3.25rem,min(12.5vw,17svh),14rem)', lineHeight: 0.86, letterSpacing: '-.02em' }}
        >The team</h1>
        <p
          style={{ margin: 'clamp(32px,4vw,56px) 0 0', maxWidth: '40ch', fontStretch: '90%', fontWeight: 500, fontSize: 'clamp(1.375rem,2.2vw,2.25rem)', lineHeight: 1.25, letterSpacing: '-.01em' }}
        >The people who'll build your project.</p>
      </section>
      <section
        style={{ background: '#F4F1EC', color: '#1A1917', padding: '0 clamp(16px,3.5vw,56px) clamp(64px,10vw,192px)' }}
      >
        <div style={{ borderBottom: '1px solid #1A1917' }}>
          {(v.teamFounders ?? []).map((f: any, $index: number) => (
            <article
              key={$index}
              data-rise="1"
              style={{ display: 'flex', flexWrap: 'wrap', columnGap: 'clamp(24px,4vw,64px)', rowGap: '28px', padding: 'clamp(32px,4vw,64px) 0', borderTop: '1px solid #1A1917' }}
            >
              <div
                role="img"
                aria-label={f?.portrait}
                style={{ flex: '3 1 14rem', maxWidth: '26rem', position: 'relative', aspectRatio: '4 / 5', background: 'var(--ink)', color: '#F4F1EC' }}
              >
                <span
                  aria-hidden="true"
                  style={{ position: 'absolute', left: '12px', bottom: '10px', right: '12px', fontSize: '.8125rem', fontWeight: 500, lineHeight: 1.35 }}
                >{f?.portrait}</span>
              </div>
              <div style={{ flex: '4 1 16rem', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <span style={{ fontSize: '.875rem', fontWeight: 600, lineHeight: 1.4 }}>{f?.role}</span>
                <h2
                  style={{ margin: '0', fontStretch: '80%', fontWeight: 700, textTransform: 'uppercase', lineHeight: 0.95, letterSpacing: '-.01em', fontSize: 'clamp(2.25rem,4.5vw,4.75rem)' }}
                >{f?.name}</h2>
                <Sx
                  as="a"
                  href={f?.mailto}
                  style={{ alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', minHeight: '44px', whiteSpace: 'nowrap', color: 'inherit', fontWeight: 600, textDecoration: 'underline', textDecorationThickness: '2px', textUnderlineOffset: '4px', backgroundImage: 'linear-gradient(currentColor,currentColor)', backgroundRepeat: 'no-repeat', backgroundPosition: '0 50%', backgroundSize: '0 0', transition: 'color 200ms, padding-left 260ms cubic-bezier(.2,.7,.2,1), margin-left 260ms cubic-bezier(.2,.7,.2,1), background-size 260ms cubic-bezier(.2,.7,.2,1)' }}
                  hover={{ color: 'var(--accent)', paddingLeft: '16px', marginLeft: '-16px', backgroundSize: '7px 7px' }}
                >{f?.email}</Sx>
                <Sx
                  as="a"
                  href="#"
                  onClick={f?.openProfile}
                  style={{ alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', minHeight: '44px', whiteSpace: 'nowrap', color: 'inherit', fontWeight: 600, textDecoration: 'underline', textDecorationThickness: '2px', textUnderlineOffset: '4px', backgroundImage: 'linear-gradient(currentColor,currentColor)', backgroundRepeat: 'no-repeat', backgroundPosition: '0 50%', backgroundSize: '0 0', transition: 'color 200ms, padding-left 260ms cubic-bezier(.2,.7,.2,1), margin-left 260ms cubic-bezier(.2,.7,.2,1), background-size 260ms cubic-bezier(.2,.7,.2,1)' }}
                  hover={{ color: 'var(--accent)', paddingLeft: '16px', marginLeft: '-16px', backgroundSize: '7px 7px' }}
                >{f?.profileLabel}</Sx>
              </div>
              <div style={{ flex: '5 1 20rem', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {(f?.bio ?? []).map((para: any, $index: number) => (
                  <p
                    key={$index}
                    style={{ margin: '0', maxWidth: '52ch', fontSize: 'clamp(1.0625rem,1.3vw,1.375rem)', lineHeight: 1.45 }}
                  >{para?.t}</p>
                ))}
                <dl
                  style={{ margin: '12px 0 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(12rem,1fr))', gap: '16px 24px' }}
                >
                  <div style={{ borderTop: '1px solid #1A1917', paddingTop: '10px' }}>
                    <dt style={{ fontSize: '.8125rem', fontWeight: 600 }}>Usually working on</dt>
                    <dd style={{ margin: '4px 0 0' }}>{f?.focus}</dd>
                  </div>
                  <div style={{ borderTop: '1px solid #1A1917', paddingTop: '10px' }}>
                    <dt style={{ fontSize: '.8125rem', fontWeight: 600 }}>Tools</dt>
                    <dd style={{ margin: '4px 0 0' }}>{f?.tools}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section
        data-dark="1"
        style={{ background: 'var(--ink-deep)', color: '#F4F1EC', padding: 'clamp(64px,10vw,192px) clamp(16px,3.5vw,56px)' }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 'clamp(16px,2vw,28px)' }}>
          <h2
            style={{ margin: '0', fontStretch: '72%', fontWeight: 750, textTransform: 'uppercase', fontSize: 'clamp(2.5rem,7.5vw,8rem)', lineHeight: 0.9, letterSpacing: '-.015em' }}
          >Our team</h2>
          <p
            style={{ margin: '0', maxWidth: '44ch', fontSize: 'clamp(1.125rem,1.5vw,1.5rem)', lineHeight: 1.4, textWrap: 'pretty' }}
          >The engineers, artists and designers who build alongside us.</p>
        </div>
        <div
          style={{ display: 'grid', gridTemplateColumns: `repeat(auto-fill,minmax(min(100%,${v.benchMin}),1fr))`, gap: '48px clamp(16px,2vw,32px)', marginTop: 'clamp(48px,6vw,96px)' }}
        >
          {(v.bench ?? []).map((b: any, $index: number) => (
            <article
              key={$index}
              data-rise="1"
              onMouseEnter={b?.enter}
              onMouseLeave={b?.leave}
              style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}
            >
              <div style={{ overflow: 'hidden', marginBottom: '14px' }}>
                <div
                  role="img"
                  aria-label={b?.portrait}
                  style={{ aspectRatio: '1 / 1', background: 'var(--ink)', transform: `scale(${b?.sc})`, transition: 'transform 800ms cubic-bezier(.2,.7,.2,1)' }}
                ></div>
              </div>
              <span style={{ fontSize: '.875rem', fontWeight: 600, lineHeight: 1.4 }}>{b?.role}</span>
              <h3
                style={{ margin: '0', fontStretch: '80%', fontWeight: 700, textTransform: 'uppercase', fontSize: 'clamp(1.5rem,2vw,2rem)', lineHeight: 1, color: b?.nc, transition: 'color 200ms' }}
              >{b?.name}</h3>
              <p style={{ margin: '6px 0 0', fontSize: '.9375rem', lineHeight: 1.5 }}>{b?.note}</p>
            </article>
          ))}
        </div>
        <div
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px 32px', marginTop: 'clamp(56px,7vw,112px)', paddingTop: '24px', borderTop: '1px solid #F4F1EC' }}
        >
          <p style={{ margin: '0', fontSize: 'clamp(1.0625rem,1.3vw,1.375rem)', lineHeight: 1.45 }}>Want to join them?</p>
          <Sx
            as="a"
            href="#"
            onClick={v.goCareers}
            style={{ display: 'inline-flex', alignItems: 'center', minHeight: '44px', whiteSpace: 'nowrap', color: 'inherit', fontWeight: 600, textDecoration: 'underline', textDecorationThickness: '2px', textUnderlineOffset: '4px', backgroundImage: 'linear-gradient(currentColor,currentColor)', backgroundRepeat: 'no-repeat', backgroundPosition: '0 50%', backgroundSize: '0 0', transition: 'color 200ms, padding-left 260ms cubic-bezier(.2,.7,.2,1), margin-left 260ms cubic-bezier(.2,.7,.2,1), background-size 260ms cubic-bezier(.2,.7,.2,1)' }}
            hover={{ color: 'var(--accent)', paddingLeft: '16px', marginLeft: '-16px', backgroundSize: '7px 7px' }}
          >See careers</Sx>
        </div>
      </section>
    </>
  );
}
