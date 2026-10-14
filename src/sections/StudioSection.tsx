import { Sx } from '../components/Sx';
import type { ViewModel } from '../types';

export function StudioSection({ v }: { v: ViewModel }) {
  return (
    <>
      <section
        data-dark="1"
        style={{ background: 'var(--ink-deep)', color: '#F4F1EC', padding: 'clamp(64px,10vw,192px) clamp(16px,3.5vw,56px)' }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 'clamp(16px,2vw,28px)' }}>
          <h2
            style={{ margin: '0', fontStretch: '72%', fontWeight: 750, textTransform: 'uppercase', fontSize: 'clamp(2.5rem,7.5vw,8rem)', lineHeight: 0.9, letterSpacing: '-.015em' }}
          >Meet the founders</h2>
          <p
            style={{ margin: '0', maxWidth: '44ch', fontSize: 'clamp(1.125rem,1.5vw,1.5rem)', lineHeight: 1.4, textWrap: 'pretty' }}
          >One of us leads every project, start to finish, with our team building alongside.</p>
        </div>
        <div
          style={{ display: 'flex', flexWrap: 'wrap', gap: '56px clamp(24px,4vw,64px)', marginTop: 'clamp(48px,6vw,96px)' }}
        >
          {(v.founders ?? []).map((f: any, $index: number) => (
            <article
              key={$index}
              data-rise="1"
              style={{ flex: '1 1 30rem', minWidth: '0', display: 'grid', gridTemplateColumns: v.founderCols, gap: 'clamp(20px,2vw,32px)', alignItems: 'end' }}
            >
              <div
                role="img"
                aria-label={f?.portrait}
                style={{ position: 'relative', aspectRatio: '4 / 5', background: 'var(--ink)', color: '#F4F1EC' }}
              >
                <span
                  aria-hidden="true"
                  style={{ position: 'absolute', left: '12px', bottom: '10px', right: '12px', fontSize: '.8125rem', fontWeight: 500, lineHeight: 1.35 }}
                >{f?.portrait}</span>
              </div>
              <div style={{ minWidth: '0', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '.875rem', fontWeight: 600, lineHeight: 1.4 }}>{f?.role}</span>
                <h3
                  style={{ margin: '8px 0 0', fontStretch: '80%', fontWeight: 700, textTransform: 'uppercase', fontSize: 'clamp(2rem,3.6vw,3.75rem)', lineHeight: 0.92, letterSpacing: '-.01em' }}
                >{f?.name}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '20px' }}>
                  {(f?.bio ?? []).map((para: any, $index: number) => (
                    <p key={$index} style={{ margin: '0', maxWidth: '44ch', fontSize: '1rem', lineHeight: 1.55 }}>{para?.t}</p>
                  ))}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0 24px', marginTop: '12px' }}>
                  <Sx
                    as="a"
                    href={f?.mailto}
                    style={{ display: 'inline-flex', alignItems: 'center', minHeight: '44px', color: 'inherit', fontWeight: 600, textDecoration: 'underline', textDecorationThickness: '2px', textUnderlineOffset: '4px', backgroundImage: 'linear-gradient(currentColor,currentColor)', backgroundRepeat: 'no-repeat', backgroundPosition: '0 50%', backgroundSize: '0 0', transition: 'color 200ms, padding-left 260ms cubic-bezier(.2,.7,.2,1), margin-left 260ms cubic-bezier(.2,.7,.2,1), background-size 260ms cubic-bezier(.2,.7,.2,1)' }}
                    hover={{ color: 'var(--accent)', paddingLeft: '16px', marginLeft: '-16px', backgroundSize: '7px 7px' }}
                  >{f?.email}</Sx>
                  <Sx
                    as="a"
                    href="#"
                    onClick={f?.openProfile}
                    style={{ display: 'inline-flex', alignItems: 'center', minHeight: '44px', whiteSpace: 'nowrap', color: 'inherit', fontWeight: 600, textDecoration: 'underline', textDecorationThickness: '2px', textUnderlineOffset: '4px', backgroundImage: 'linear-gradient(currentColor,currentColor)', backgroundRepeat: 'no-repeat', backgroundPosition: '0 50%', backgroundSize: '0 0', transition: 'color 200ms, padding-left 260ms cubic-bezier(.2,.7,.2,1), margin-left 260ms cubic-bezier(.2,.7,.2,1), background-size 260ms cubic-bezier(.2,.7,.2,1)' }}
                    hover={{ color: 'var(--accent)', paddingLeft: '16px', marginLeft: '-16px', backgroundSize: '7px 7px' }}
                  >{f?.profileLabel}</Sx>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section
        ref={v.procRef}
        style={{ background: '#F4F1EC', color: '#1A1917', padding: 'clamp(64px,10vw,192px) clamp(16px,3.5vw,56px)' }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 'clamp(16px,2vw,28px)' }}>
          <h2
            style={{ margin: '0', fontStretch: '72%', fontWeight: 750, textTransform: 'uppercase', fontSize: 'clamp(2.5rem,7.5vw,8rem)', lineHeight: 0.9, letterSpacing: '-.015em' }}
          >How working with us goes</h2>
        </div>
        {v.isLg ? (
          <div style={{ position: 'relative', marginTop: 'clamp(56px,7vw,112px)' }}>
            <div
              aria-hidden="true"
              style={{ position: 'absolute', left: '0', right: '0', top: '7px', height: '2px', background: 'rgba(0,0,0,.14)' }}
            ></div>
            <div
              aria-hidden="true"
              style={{ position: 'absolute', left: '0', right: '0', top: '7px', height: '2px', background: 'var(--accent)', transformOrigin: 'left center', transform: `scaleX(${v.procLine})`, transition: 'transform 1500ms linear' }}
            ></div>
            <ol
              style={{ position: 'relative', listStyle: 'none', margin: '0', padding: '0', display: 'grid', gridTemplateColumns: 'repeat(5,minmax(0,1fr))', columnGap: 'clamp(16px,2vw,32px)' }}
            >
              {(v.steps ?? []).map((st: any, $index: number) => (
                <li key={$index} style={{ minWidth: '0', display: 'flex', flexDirection: 'column' }}>
                  <span
                    aria-hidden="true"
                    style={{ width: '16px', height: '16px', boxShadow: `inset 0 0 0 2px ${st?.ring}`, background: st?.dot, transform: `scale(${st?.dotScale})`, transition: `background-color 200ms ${st?.delay}, transform 300ms cubic-bezier(.2,.7,.2,1) ${st?.delay}` }}
                  ></span>
                  <div
                    style={{ display: 'flex', flexDirection: 'column', opacity: st?.op, transform: `translateY(${st?.ty})`, transition: `opacity 500ms ${st?.tDelay}, transform 500ms cubic-bezier(.2,.7,.2,1) ${st?.tDelay}` }}
                  >
                    <h3
                      style={{ margin: '32px 0 0', whiteSpace: 'nowrap', fontStretch: '80%', fontWeight: 700, textTransform: 'uppercase', fontSize: 'clamp(1.5rem,2.3vw,2.75rem)', lineHeight: 1, letterSpacing: '-.01em', fontVariantNumeric: 'tabular-nums' }}
                    >{st?.when}</h3>
                    <p
                      style={{ margin: '20px 0 0', maxWidth: '22ch', fontSize: 'clamp(1.0625rem,1.2vw,1.25rem)', fontWeight: 600, lineHeight: 1.3 }}
                    >{st?.a}</p>
                    <p style={{ margin: '10px 0 0', maxWidth: '26ch', fontSize: '.9375rem', lineHeight: 1.45 }}>{st?.b}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        ) : null}
        {v.isSm ? (
          <div style={{ position: 'relative', marginTop: '48px', paddingLeft: '40px' }}>
            <div
              aria-hidden="true"
              style={{ position: 'absolute', left: '7px', top: '10px', bottom: '10px', width: '2px', background: 'rgba(0,0,0,.14)' }}
            ></div>
            <div
              aria-hidden="true"
              style={{ position: 'absolute', left: '7px', top: '10px', bottom: '10px', width: '2px', background: 'var(--accent)', transformOrigin: 'center top', transform: `scaleY(${v.procLine})`, transition: 'transform 1500ms linear' }}
            ></div>
            <ol
              style={{ listStyle: 'none', margin: '0', padding: '0', display: 'flex', flexDirection: 'column', gap: '40px' }}
            >
              {(v.steps ?? []).map((st: any, $index: number) => (
                <li
                  key={$index}
                  style={{ position: 'relative', display: 'flex', flexDirection: 'column', opacity: st?.op, transform: `translateY(${st?.ty})`, transition: `opacity 500ms ${st?.tDelay}, transform 500ms cubic-bezier(.2,.7,.2,1) ${st?.tDelay}` }}
                >
                  <span
                    aria-hidden="true"
                    style={{ position: 'absolute', left: '-40px', top: '6px', width: '16px', height: '16px', boxShadow: `inset 0 0 0 2px ${st?.ring}`, background: st?.dot, transition: `background-color 200ms ${st?.delay}` }}
                  ></span>
                  <h3
                    style={{ margin: '0', fontStretch: '80%', fontWeight: 700, textTransform: 'uppercase', fontSize: '1.75rem', lineHeight: 1, letterSpacing: '-.01em', fontVariantNumeric: 'tabular-nums' }}
                  >{st?.when}</h3>
                  <p style={{ margin: '12px 0 0', fontSize: '1.125rem', fontWeight: 600, lineHeight: 1.3 }}>{st?.a}</p>
                  <p style={{ margin: '6px 0 0', fontSize: '.9375rem', lineHeight: 1.45 }}>{st?.b}</p>
                </li>
              ))}
            </ol>
          </div>
        ) : null}
        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,16rem),1fr))', gap: '0 clamp(24px,4vw,64px)', marginTop: 'clamp(56px,7vw,112px)', opacity: v.procFactsOp, transition: 'opacity 700ms 1500ms' }}
        >
          {(v.facts ?? []).map((fx: any, $index: number) => (
            <div
              key={$index}
              style={{ borderTop: '1px solid #1A1917', padding: '20px 0 12px', display: 'flex', flexDirection: 'column', gap: '8px' }}
            >
              <span
                style={{ fontStretch: '80%', fontWeight: 700, textTransform: 'uppercase', fontSize: 'clamp(1.75rem,2.6vw,2.75rem)', lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}
              >{fx?.big}</span>
              <span style={{ fontSize: '.9375rem', lineHeight: 1.45 }}>{fx?.small}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
