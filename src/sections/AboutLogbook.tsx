import { Sx } from '../components/Sx';
import type { ViewModel } from '../types';

export function AboutLogbook({ v }: { v: ViewModel }) {
  return (
    <section
      ref={v.logRef}
      style={{ background: '#F4F1EC', color: '#1A1917', padding: 'clamp(64px,10vw,192px) clamp(16px,3.5vw,56px)' }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 'clamp(16px,2vw,28px)' }}>
        <h2
          style={{ margin: '0', fontStretch: '72%', fontWeight: 750, textTransform: 'uppercase', fontSize: 'clamp(2.5rem,7.5vw,8rem)', lineHeight: 0.9, letterSpacing: '-.015em' }}
        >Logbook</h2>
        <p
          style={{ margin: '0', maxWidth: '44ch', fontSize: 'clamp(1.125rem,1.5vw,1.5rem)', lineHeight: 1.4, textWrap: 'pretty' }}
        >Updated weekly by whoever did the work.</p>
      </div>
      <div
        style={{ marginTop: 'clamp(48px,6vw,96px)', display: 'flex', flexDirection: 'column', gap: 'clamp(48px,6vw,88px)' }}
      >
        {(v.months ?? []).map((m: any, $index: number) => (
          <div
            key={$index}
            style={{ display: 'flex', flexWrap: 'wrap', columnGap: 'clamp(24px,4vw,64px)', rowGap: '16px', alignItems: 'flex-start' }}
          >
            <div
              style={{ flex: '4 1 14rem', minWidth: '0', position: v.faqPos, top: '120px', display: 'flex', flexDirection: 'column', gap: '6px' }}
            >
              <h3
                data-reveal="1"
                style={{ margin: '0', fontStretch: '80%', fontWeight: 700, textTransform: 'uppercase', fontSize: 'clamp(1.5rem,2.4vw,2.5rem)', lineHeight: 1, letterSpacing: '-.01em' }}
              >{m?.label}</h3>
              <span style={{ fontSize: '.875rem', lineHeight: 1.4 }}>{m?.count}</span>
            </div>
            <div style={{ flex: '8 1 28rem', minWidth: '0', borderBottom: '1px solid #1A1917' }}>
              {(m?.entries ?? []).map((e: any, $index: number) => (
                <Sx
                  as="div"
                  key={$index}
                  data-rise="1"
                  style={{ display: 'grid', gridTemplateColumns: '7rem minmax(0,1fr)', columnGap: 'clamp(16px,2vw,32px)', padding: '20px 0', borderTop: '1px solid #1A1917', backgroundImage: 'linear-gradient(var(--accent),var(--accent))', backgroundRepeat: 'no-repeat', backgroundPosition: '-8px 28px', backgroundSize: '7px 7px' }}
                  hover={{ paddingLeft: '20px', borderTopColor: 'var(--accent)', backgroundPosition: '0 28px' }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', fontSize: '.875rem', lineHeight: 1.4 }}>
                    <span style={{ fontWeight: 600, fontVariantNumeric: 'tabular-nums' }}>{e?.dateLabel}</span>
                    <span>{e?.who}</span>
                  </div>
                  <p style={{ margin: '0', maxWidth: '56ch', fontSize: 'clamp(1.0625rem,1.2vw,1.25rem)', lineHeight: 1.45 }}>{e?.text}</p>
                </Sx>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
