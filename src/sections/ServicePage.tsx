import { Sx } from '../components/Sx';
import type { ViewModel } from '../types';

export function ServicePage({ v }: { v: ViewModel }) {
  return (
    <>
      <section
        ref={v.heroRef}
        style={{ background: '#F4F1EC', color: '#1A1917', padding: 'clamp(112px,14vw,200px) clamp(16px,3.5vw,56px) clamp(64px,8vw,128px)' }}
      >
        <Sx
          as="a"
          href="#"
          onClick={v.goServices}
          style={{ display: 'inline-flex', alignItems: 'center', minHeight: '44px', color: 'inherit', fontSize: '.875rem', fontWeight: 500, textDecoration: 'underline', textDecorationThickness: '2px', textUnderlineOffset: '4px', backgroundImage: 'linear-gradient(currentColor,currentColor)', backgroundRepeat: 'no-repeat', backgroundPosition: '0 50%', backgroundSize: '0 0', transition: 'color 200ms, padding-left 260ms cubic-bezier(.2,.7,.2,1), margin-left 260ms cubic-bezier(.2,.7,.2,1), background-size 260ms cubic-bezier(.2,.7,.2,1)' }}
          hover={{ color: 'var(--accent)', paddingLeft: '16px', marginLeft: '-16px', backgroundSize: '7px 7px' }}
        >Services</Sx>
        <h1
          style={{ margin: '16px 0 0', fontStretch: '68%', fontWeight: 800, textTransform: 'uppercase', fontSize: 'clamp(3.25rem,min(12.5vw,17svh),14rem)', lineHeight: 0.86, letterSpacing: '-.02em' }}
        >{v.svc?.headline}</h1>
        <p
          style={{ margin: 'clamp(32px,4vw,56px) 0 0', maxWidth: '62ch', fontSize: 'clamp(1.125rem,1.5vw,1.5rem)', lineHeight: 1.45 }}
        >{v.svc?.lead}</p>
        <div style={{ display: 'flex', marginTop: '32px' }}>
          <Sx
            as="a"
            href="#"
            onClick={v.bookCall}
            onMouseEnter={v.bx?.svc?.on}
            onMouseLeave={v.bx?.svc?.off}
            onFocus={v.bx?.svc?.on}
            onBlur={v.bx?.svc?.off}
            style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '12px', height: 'clamp(56px,5vw,64px)', padding: '0 28px', whiteSpace: 'nowrap', backgroundColor: 'var(--accent)', backgroundImage: 'linear-gradient(var(--accent-deep),var(--accent-deep))', backgroundRepeat: 'no-repeat', backgroundPosition: 'left center', backgroundSize: '0% 100%', color: '#F4F1EC', fontWeight: 600, fontSize: '1.0625rem', textDecoration: 'none', transition: 'background-size 450ms cubic-bezier(.65,0,.35,1), gap 200ms' }}
            hover={{ backgroundSize: '100% 100%', gap: '20px' }}
          >Book a call<span aria-hidden="true" style={{ fontSize: '1.15em', lineHeight: 1 }}>→</span><span
              aria-hidden="true"
              style={{ position: 'absolute', top: '-7px', left: '-7px', width: '12px', height: '12px', borderTop: '2px solid var(--accent)', borderLeft: '2px solid var(--accent)', pointerEvents: 'none', transform: v.bx?.svc?.tl, transition: 'transform 260ms cubic-bezier(.2,.7,.2,1), opacity 200ms' }}
            ></span><span
              aria-hidden="true"
              style={{ position: 'absolute', top: '-7px', right: '-7px', width: '12px', height: '12px', borderTop: '2px solid var(--accent)', borderRight: '2px solid var(--accent)', pointerEvents: 'none', transform: v.bx?.svc?.tr, transition: 'transform 260ms cubic-bezier(.2,.7,.2,1), opacity 200ms' }}
            ></span><span
              aria-hidden="true"
              style={{ position: 'absolute', bottom: '-7px', left: '-7px', width: '12px', height: '12px', borderBottom: '2px solid var(--accent)', borderLeft: '2px solid var(--accent)', pointerEvents: 'none', opacity: v.bx?.svc?.bo, transform: v.bx?.svc?.bl, transition: 'transform 260ms cubic-bezier(.2,.7,.2,1), opacity 200ms' }}
            ></span><span
              aria-hidden="true"
              style={{ position: 'absolute', bottom: '-7px', right: '-7px', width: '12px', height: '12px', borderBottom: '2px solid var(--accent)', borderRight: '2px solid var(--accent)', pointerEvents: 'none', opacity: v.bx?.svc?.bo, transform: v.bx?.svc?.br, transition: 'transform 260ms cubic-bezier(.2,.7,.2,1), opacity 200ms' }}
            ></span></Sx>
        </div>
      </section>
      <div
        ref={v.tabRef}
        onMouseLeave={v.tabLeave}
        role="tablist"
        aria-label="Service"
        style={{ position: 'sticky', top: `${v.hh}px`, zIndex: 40, background: '#F4F1EC', color: '#1A1917', display: 'flex', gap: '8px', padding: '0 clamp(16px,3.5vw,56px) 0 calc(clamp(16px,3.5vw,56px) - 16px)', overflowX: 'auto', borderBottom: '1px solid rgba(0,0,0,.12)' }}
      >
        {(v.svcTabs ?? []).map((t: any, $index: number) => (
          <Sx
            as="button"
            key={$index}
            type="button"
            role="tab"
            data-tab={t?.key}
            onMouseEnter={t?.enter}
            onFocus={t?.enter}
            onBlur={v.tabLeave}
            aria-selected={t?.selected}
            onClick={t?.pick}
            style={{ flex: 'none', minHeight: '56px', padding: '0 16px', background: 'none', border: '0', color: '#1A1917', fontWeight: 600, fontSize: '1.0625rem', cursor: 'pointer', whiteSpace: 'nowrap' }}
            hover={{ color: 'var(--accent)' }}
          >{t?.label}</Sx>
        ))}
        <span
          aria-hidden="true"
          style={{ position: 'absolute', top: '8px', height: '40px', left: `${v.tabX}px`, width: `${v.tabW}px`, opacity: v.tabOp, pointerEvents: 'none', transition: 'left 340ms cubic-bezier(.2,.7,.2,1), width 340ms cubic-bezier(.2,.7,.2,1), opacity 200ms' }}
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
      </div>
      <section style={{ padding: 'clamp(64px,10vw,192px) clamp(16px,3.5vw,56px)' }}>
        <h2
          style={{ margin: '0', fontStretch: '72%', fontWeight: 750, textTransform: 'uppercase', fontSize: 'clamp(2.5rem,7.5vw,8rem)', lineHeight: 0.9, letterSpacing: '-.015em' }}
        >What we build</h2>
        <div style={{ marginTop: 'clamp(40px,5vw,80px)', borderBottom: '1px solid #1A1917' }}>
          {(v.svc?.deliverables ?? []).map((d: any, $index: number) => (
            <Sx
              as="div"
              key={$index}
              data-rise="1"
              style={{ display: 'flex', flexWrap: 'wrap', columnGap: 'clamp(24px,4vw,64px)', rowGap: '8px', alignItems: 'baseline', padding: 'clamp(20px,2.2vw,32px) 0', borderTop: '1px solid #1A1917' }}
              hover={{ paddingLeft: '20px', borderTopColor: 'var(--accent)' }}
            >
              <h3
                style={{ flex: '6 1 20rem', minWidth: '0', margin: '0', fontStretch: '85%', fontWeight: 650, fontSize: 'clamp(1.5rem,2.6vw,2.5rem)', lineHeight: 1, letterSpacing: '-.01em' }}
              >{d?.title}</h3>
              <p
                style={{ flex: '5 1 18rem', minWidth: '0', margin: '0', maxWidth: '48ch', fontSize: 'clamp(1rem,1.15vw,1.1875rem)', lineHeight: 1.5 }}
              >{d?.body}</p>
            </Sx>
          ))}
        </div>
      </section>
      <section style={{ padding: '0 clamp(16px,3.5vw,56px) clamp(64px,10vw,192px)' }}>
        <h2
          style={{ margin: '0', fontStretch: '72%', fontWeight: 750, textTransform: 'uppercase', fontSize: 'clamp(2.5rem,7.5vw,8rem)', lineHeight: 0.9, letterSpacing: '-.015em' }}
        >In practice</h2>
        <div
          style={{ marginTop: 'clamp(40px,5vw,80px)', display: 'flex', flexDirection: 'column', borderBottom: '1px solid #1A1917' }}
        >
          {(v.svc?.figures ?? []).map((g: any, $index: number) => (
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
      <section style={{ padding: '0 0 clamp(64px,10vw,192px)' }}>
        <div
          role="img"
          aria-label={v.svcExample?.media}
          style={{ position: 'relative', background: '#1A1917', color: '#F4F1EC', aspectRatio: v.bleedRatio }}
        >
          <span
            aria-hidden="true"
            style={{ position: 'absolute', left: 'clamp(16px,3.5vw,56px)', bottom: 'clamp(16px,2.5vw,40px)', fontSize: '.875rem', fontWeight: 500, lineHeight: 1.4 }}
          >{v.svcExample?.media}</span>
        </div>
        <div
          style={{ padding: 'clamp(24px,3vw,48px) clamp(16px,3.5vw,56px) 0', display: 'flex', flexWrap: 'wrap', columnGap: '8.333%', rowGap: '16px', alignItems: 'flex-end' }}
        >
          <p
            style={{ flex: '7 1 24rem', minWidth: '0', margin: '0', fontStretch: '85%', fontWeight: 650, fontSize: 'clamp(1.75rem,4.2vw,4rem)', lineHeight: 0.95, letterSpacing: '-.01em' }}
          >{v.svcExample?.result}</p>
          <Sx
            as="a"
            href="#"
            onClick={v.svcExample?.open}
            style={{ display: 'inline-flex', alignItems: 'center', minHeight: '44px', whiteSpace: 'nowrap', color: '#1A1917', fontWeight: 500, textDecoration: 'underline', textDecorationThickness: '2px', textUnderlineOffset: '4px', backgroundImage: 'linear-gradient(currentColor,currentColor)', backgroundRepeat: 'no-repeat', backgroundPosition: '0 50%', backgroundSize: '0 0', transition: 'color 200ms, padding-left 260ms cubic-bezier(.2,.7,.2,1), margin-left 260ms cubic-bezier(.2,.7,.2,1), background-size 260ms cubic-bezier(.2,.7,.2,1)' }}
            hover={{ color: 'var(--accent)', paddingLeft: '16px', marginLeft: '-16px', backgroundSize: '7px 7px' }}
          >
            <span>Read the {v.svcExample?.name} case study</span>
          </Sx>
        </div>
      </section>
      {v.svcHasRec ? (
        <section style={{ padding: '0 clamp(16px,3.5vw,56px) clamp(64px,10vw,192px)' }}>
          <figure style={{ margin: '0', borderTop: '1px solid #1A1917', paddingTop: '20px' }}>
            <span style={{ display: 'block', fontSize: '.875rem', fontWeight: 600, lineHeight: 1.4 }}>Client recommendation</span>
            <blockquote
              style={{ margin: 'clamp(24px,3vw,40px) 0 0', maxWidth: '24ch', fontStretch: '85%', fontWeight: 500, fontSize: 'clamp(2rem,4.4vw,4.75rem)', lineHeight: 1, letterSpacing: '-.015em', textWrap: 'balance' }}
            >“{v.svcRec?.text}”</blockquote>
            <figcaption
              style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '16px 32px', marginTop: 'clamp(32px,4vw,56px)' }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span
                  role="img"
                  aria-label={v.svcRec?.portrait}
                  style={{ flex: 'none', width: '64px', height: '64px', background: 'var(--ink)' }}
                ></span>
                <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.4 }}>
                  <span style={{ fontWeight: 600 }}>{v.svcRec?.name}</span>
                  <span style={{ fontSize: '.875rem' }}>{v.svcRec?.role}, {v.svcRec?.company}</span>
                </span>
              </span>
              <Sx
                as="a"
                href="#"
                onClick={v.svcRec?.openCase}
                style={{ display: 'inline-flex', alignItems: 'center', minHeight: '44px', whiteSpace: 'nowrap', color: 'inherit', fontWeight: 600, textDecoration: 'underline', textDecorationThickness: '2px', textUnderlineOffset: '4px', backgroundImage: 'linear-gradient(currentColor,currentColor)', backgroundRepeat: 'no-repeat', backgroundPosition: '0 50%', backgroundSize: '0 0', transition: 'color 200ms, padding-left 260ms cubic-bezier(.2,.7,.2,1), margin-left 260ms cubic-bezier(.2,.7,.2,1), background-size 260ms cubic-bezier(.2,.7,.2,1)' }}
                hover={{ color: 'var(--accent)', paddingLeft: '16px', marginLeft: '-16px', backgroundSize: '7px 7px' }}
              >See the project</Sx>
            </figcaption>
          </figure>
        </section>
      ) : null}
      <section style={{ padding: '0 clamp(16px,3.5vw,56px) clamp(64px,10vw,192px)' }}>
        <blockquote style={{ margin: '0' }}>
          <p
            style={{ margin: '0', maxWidth: '22ch', fontStretch: '85%', fontWeight: 500, fontSize: 'clamp(2rem,5vw,5.5rem)', lineHeight: 1, letterSpacing: '-.015em', textWrap: 'balance' }}
          >{v.svc?.quote}</p>
          <footer style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: 'clamp(32px,4vw,56px)' }}>
            <div
              role="img"
              aria-label={v.svc?.leadPortrait}
              style={{ flex: 'none', width: '64px', height: '64px', background: 'var(--ink)' }}
            ></div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontWeight: 600 }}>{v.svc?.leadName}</span>
              <span style={{ fontSize: '.875rem', lineHeight: 1.4 }}>{v.svc?.leadRole}</span>
            </div>
          </footer>
        </blockquote>
      </section>
      <section
        style={{ padding: '0 clamp(16px,3.5vw,56px) clamp(64px,10vw,192px)', display: 'flex', flexWrap: 'wrap', columnGap: '8.333%', rowGap: '16px', alignItems: 'baseline' }}
      >
        <h2
          style={{ flex: '6 1 20rem', minWidth: '0', margin: '0', fontStretch: '85%', fontWeight: 650, fontSize: 'clamp(1.75rem,4.2vw,4rem)', lineHeight: 0.95, letterSpacing: '-.01em' }}
        >Tools</h2>
        <p
          style={{ flex: '5 1 18rem', minWidth: '0', margin: '0', maxWidth: '62ch', fontSize: 'clamp(1.125rem,1.5vw,1.5rem)', lineHeight: 1.45 }}
        >{v.svc?.tools}</p>
      </section>
    </>
  );
}
