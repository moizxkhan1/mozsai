import { Sx } from '../components/Sx';
import type { ViewModel } from '../types';

export function HomeFaq({ v }: { v: ViewModel }) {
  return (
    <>
      {v.showFaq ? (
        <section style={{ background: '#F4F1EC', color: '#1A1917', padding: 'clamp(64px,10vw,192px) clamp(16px,3.5vw,56px)' }}>
          <div
            style={{ display: 'flex', flexWrap: 'wrap', columnGap: 'clamp(32px,5vw,96px)', rowGap: '40px', alignItems: 'flex-start' }}
          >
            <div
              style={{ flex: '5 1 22rem', minWidth: '0', position: v.faqPos, top: '120px', display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start' }}
            >
              <h2
                style={{ margin: '0', fontStretch: '72%', fontWeight: 750, textTransform: 'uppercase', fontSize: 'clamp(2.5rem,5.5vw,6.5rem)', lineHeight: 0.9, letterSpacing: '-.015em' }}
              >Questions we get</h2>
              <Sx
                as="a"
                href="mailto:hello@mozs.ai"
                style={{ display: 'inline-flex', alignItems: 'center', minHeight: '44px', whiteSpace: 'nowrap', color: 'inherit', fontWeight: 600, textDecoration: 'underline', textDecorationThickness: '2px', textUnderlineOffset: '4px', backgroundImage: 'linear-gradient(currentColor,currentColor)', backgroundRepeat: 'no-repeat', backgroundPosition: '0 50%', backgroundSize: '0 0', transition: 'color 200ms, padding-left 260ms cubic-bezier(.2,.7,.2,1), margin-left 260ms cubic-bezier(.2,.7,.2,1), background-size 260ms cubic-bezier(.2,.7,.2,1)' }}
                hover={{ color: 'var(--accent)', paddingLeft: '16px', marginLeft: '-16px', backgroundSize: '7px 7px' }}
              >hello@mozs.ai</Sx>
            </div>
            <div style={{ flex: '7 1 28rem', minWidth: '0', borderBottom: '1px solid #1A1917' }}>
              {(v.faq ?? []).map((q: any, $index: number) => (
                <div key={$index} style={{ borderTop: '1px solid #1A1917' }}>
                  <h3 style={{ margin: '0' }}>
                    <button
                      type="button"
                      onClick={q?.toggle}
                      aria-expanded={q?.expanded}
                      style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px', padding: 'clamp(20px,2vw,28px) 0', background: 'none', border: '0', color: '#1A1917', textAlign: 'left', cursor: 'pointer', fontWeight: 600, fontSize: 'clamp(1.1875rem,1.6vw,1.625rem)', lineHeight: 1.25 }}
                    >
                      <span>{q?.q}</span>
                      <span aria-hidden="true" style={{ position: 'relative', flex: 'none', width: '20px', height: '20px' }}>
                        <span style={{ position: 'absolute', left: '0', right: '0', top: '9px', height: '2px', background: '#1A1917' }}></span>
                        <span
                          style={{ position: 'absolute', top: '0', bottom: '0', left: '9px', width: '2px', background: '#1A1917', transform: q?.vt, transition: 'transform 200ms' }}
                        ></span>
                      </span>
                    </button>
                  </h3>
                  <div style={{ display: 'grid', gridTemplateRows: q?.rows, transition: 'grid-template-rows 200ms' }}>
                    <div style={{ overflow: 'hidden', minHeight: '0' }}>
                      <p style={{ margin: '0 0 28px', maxWidth: '56ch', paddingRight: '44px' }}>{q?.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
