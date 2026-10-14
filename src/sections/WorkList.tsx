import { Sx } from '../components/Sx';
import type { ViewModel } from '../types';

export function WorkList({ v }: { v: ViewModel }) {
  return (
    <section
      ref={v.listRef}
      style={{ background: '#F4F1EC', color: '#1A1917', padding: `${v.listPadTop} clamp(16px,3.5vw,56px) clamp(64px,10vw,192px)` }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 'clamp(16px,2vw,28px)' }}>
        {v.isHome ? (
          <>
            <h2
              style={{ margin: '0', fontStretch: '72%', fontWeight: 750, textTransform: 'uppercase', fontSize: 'clamp(2.5rem,7.5vw,8rem)', lineHeight: 0.9, letterSpacing: '-.015em' }}
            >More of our work</h2>
            <Sx
              as="a"
              href="#"
              onClick={v.goWork}
              style={{ display: 'inline-flex', alignItems: 'center', minHeight: '44px', whiteSpace: 'nowrap', color: '#1A1917', fontWeight: 500, textDecoration: 'underline', textDecorationThickness: '2px', textUnderlineOffset: '4px', backgroundImage: 'linear-gradient(currentColor,currentColor)', backgroundRepeat: 'no-repeat', backgroundPosition: '0 50%', backgroundSize: '0 0', transition: 'color 200ms, padding-left 260ms cubic-bezier(.2,.7,.2,1), margin-left 260ms cubic-bezier(.2,.7,.2,1), background-size 260ms cubic-bezier(.2,.7,.2,1)' }}
              hover={{ color: 'var(--accent)', paddingLeft: '16px', marginLeft: '-16px', backgroundSize: '7px 7px' }}
            >See all projects</Sx>
          </>
        ) : null}
        {v.isWorkIndex ? (
          <h1
            style={{ margin: '0', fontStretch: '68%', fontWeight: 800, textTransform: 'uppercase', fontSize: 'clamp(3.25rem,min(12.5vw,17svh),14rem)', lineHeight: 0.86, letterSpacing: '-.02em' }}
          >Work</h1>
        ) : null}
      </div>
      {v.showWorkFilters ? (
        <div
          role="group"
          aria-label="Filter projects"
          style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '4px 32px', marginTop: 'clamp(24px,3vw,40px)' }}
        >
          {(v.filters ?? []).map((fl: any, $index: number) => (
            <Sx
              as="button"
              key={$index}
              type="button"
              aria-pressed={fl?.pressed}
              onClick={fl?.pick}
              style={{ display: 'inline-flex', alignItems: 'baseline', minHeight: '44px', padding: `0 0 0 ${fl?.pad}`, border: '0', borderRadius: '0', backgroundColor: 'transparent', backgroundImage: 'linear-gradient(var(--accent),var(--accent))', backgroundRepeat: 'no-repeat', backgroundPosition: '0 52%', backgroundSize: fl?.sq, color: fl?.fg, fontWeight: 600, fontSize: 'clamp(1.0625rem,1.3vw,1.25rem)', whiteSpace: 'nowrap', cursor: 'pointer', transition: 'color 200ms, padding-left 260ms cubic-bezier(.2,.7,.2,1), background-size 260ms cubic-bezier(.2,.7,.2,1)' }}
              hover={{ color: '#1A1917', paddingLeft: '16px', backgroundSize: '7px 7px' }}
            >
              <span>{fl?.label}</span>
              <span
                style={{ marginLeft: '6px', fontSize: '.75rem', fontWeight: 500, fontVariantNumeric: 'tabular-nums', transform: 'translateY(-.5em)' }}
              >{fl?.count}</span>
            </Sx>
          ))}
        </div>
      ) : null}
      <div style={{ marginTop: 'clamp(32px,4vw,64px)', borderBottom: '1px solid #1A1917' }}>
        {v.rowWide ? (
          <>
            {(v.rows ?? []).map((r: any, $index: number) => (
              <Sx
                as="a"
                key={$index}
                href="#"
                onClick={r?.open}
                style={{ display: 'grid', gridTemplateColumns: 'repeat(12,minmax(0,1fr))', columnGap: 'clamp(12px,1.6vw,24px)', alignItems: 'center', padding: 'clamp(20px,2vw,32px) 0', borderTop: '1px solid #1A1917', color: '#1A1917', textDecoration: 'none' }}
                hover={{ background: 'rgba(0,0,0,.03)' }}
              >
                <span
                  role="img"
                  aria-label={r?.media}
                  style={{ gridColumn: '1 / span 3', position: 'relative', aspectRatio: '16 / 9', background: '#1A1917', color: '#F4F1EC' }}
                >
                  <span
                    aria-hidden="true"
                    style={{ position: 'absolute', left: '12px', bottom: '10px', right: '12px', fontSize: '.8125rem', fontWeight: 500, lineHeight: 1.35 }}
                  >{r?.media}</span>
                </span>
                <span
                  style={{ gridColumn: '4 / span 5', display: 'flex', flexDirection: 'column', gap: '12px', paddingLeft: 'clamp(8px,1vw,16px)' }}
                >
                  <span
                    style={{ fontStretch: '85%', fontWeight: 650, fontSize: 'clamp(1.75rem,3.2vw,3.25rem)', lineHeight: 0.95, letterSpacing: '-.01em' }}
                  >{r?.name}</span>
                  <span
                    style={{ display: 'flex', gap: '16px', fontSize: '.875rem', fontWeight: 500, lineHeight: 1.4, fontVariantNumeric: 'tabular-nums' }}
                  >
                    <span>{r?.discipline}</span>
                    <span>{r?.year}</span>
                  </span>
                </span>
                <span
                  style={{ gridColumn: '9 / span 4', maxWidth: '36ch', fontSize: 'clamp(1.0625rem,1.3vw,1.375rem)', lineHeight: 1.45 }}
                >{r?.result}</span>
              </Sx>
            ))}
          </>
        ) : null}
        {v.rowNarrow ? (
          <>
            {(v.rows ?? []).map((r: any, $index: number) => (
              <a
                key={$index}
                href="#"
                onClick={r?.open}
                style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '24px 0 28px', borderTop: '1px solid #1A1917', color: '#1A1917', textDecoration: 'none' }}
              >
                <span
                  role="img"
                  aria-label={r?.media}
                  style={{ position: 'relative', display: 'block', aspectRatio: '16 / 9', background: '#1A1917', color: '#F4F1EC' }}
                >
                  <span
                    aria-hidden="true"
                    style={{ position: 'absolute', left: '12px', bottom: '12px', right: '12px', fontSize: '.875rem', fontWeight: 500, lineHeight: 1.4 }}
                  >{r?.media}</span>
                </span>
                <span
                  style={{ marginTop: '8px', fontStretch: '85%', fontWeight: 650, fontSize: 'clamp(1.75rem,4.2vw,4rem)', lineHeight: 0.95, letterSpacing: '-.01em' }}
                >{r?.name}</span>
                <span style={{ fontSize: 'clamp(1.125rem,1.5vw,1.5rem)', lineHeight: 1.45 }}>{r?.result}</span>
                <span
                  style={{ display: 'flex', gap: '16px', fontSize: '.875rem', fontWeight: 500, lineHeight: 1.4, fontVariantNumeric: 'tabular-nums' }}
                >
                  <span>{r?.discipline}</span>
                  <span>{r?.year}</span>
                </span>
              </a>
            ))}
          </>
        ) : null}
      </div>
    </section>
  );
}
