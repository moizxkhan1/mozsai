import { Sx } from '../components/Sx';
import type { ViewModel } from '../types';

export function ProfilePage({ v }: { v: ViewModel }) {
  return (
    <>
      <section
        ref={v.heroRef}
        style={{ background: '#F4F1EC', color: '#1A1917', padding: 'clamp(112px,14vw,200px) clamp(16px,3.5vw,56px) clamp(64px,10vw,192px)' }}
      >
        <Sx
          as="a"
          href="#"
          onClick={v.goTeam}
          style={{ display: 'inline-flex', alignItems: 'center', minHeight: '44px', color: 'inherit', fontSize: '.875rem', fontWeight: 500, textDecoration: 'underline', textDecorationThickness: '2px', textUnderlineOffset: '4px', backgroundImage: 'linear-gradient(currentColor,currentColor)', backgroundRepeat: 'no-repeat', backgroundPosition: '0 50%', backgroundSize: '0 0', transition: 'color 200ms, padding-left 260ms cubic-bezier(.2,.7,.2,1), margin-left 260ms cubic-bezier(.2,.7,.2,1), background-size 260ms cubic-bezier(.2,.7,.2,1)' }}
          hover={{ color: 'var(--accent)', paddingLeft: '16px', marginLeft: '-16px', backgroundSize: '7px 7px' }}
        >Team</Sx>
        <div
          style={{ display: 'flex', flexWrap: 'wrap', columnGap: 'clamp(24px,4vw,64px)', rowGap: '40px', marginTop: '16px', alignItems: 'flex-end' }}
        >
          <div
            role="img"
            aria-label={v.pf?.portrait}
            style={{ flex: '4 1 16rem', maxWidth: '30rem', position: 'relative', aspectRatio: '4 / 5', background: 'var(--ink)', color: '#F4F1EC' }}
          >
            <span
              aria-hidden="true"
              style={{ position: 'absolute', left: '12px', bottom: '10px', right: '12px', fontSize: '.8125rem', fontWeight: 500, lineHeight: 1.35 }}
            >{v.pf?.portrait}</span>
          </div>
          <div
            style={{ flex: '8 1 24rem', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'flex-start' }}
          >
            <span style={{ fontSize: '.875rem', fontWeight: 600, lineHeight: 1.4 }}>{v.pf?.role}</span>
            <h1
              style={{ margin: '0', fontStretch: '68%', fontWeight: 800, textTransform: 'uppercase', fontSize: 'clamp(3.25rem,min(12.5vw,17svh),14rem)', lineHeight: 0.86, letterSpacing: '-.02em', overflowWrap: 'anywhere' }}
            >{v.pf?.name}</h1>
            <p
              style={{ margin: '0', maxWidth: '40ch', fontStretch: '90%', fontWeight: 500, fontSize: 'clamp(1.375rem,2.2vw,2.25rem)', lineHeight: 1.25, letterSpacing: '-.01em' }}
            >{v.pf?.bio0}</p>
            {(v.pf?.bioRest ?? []).map((para: any, $index: number) => (
              <p
                key={$index}
                style={{ margin: '0', maxWidth: '52ch', fontSize: 'clamp(1.0625rem,1.3vw,1.375rem)', lineHeight: 1.45 }}
              >{para?.t}</p>
            ))}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '16px 32px', marginTop: '8px' }}>
              <Sx
                as="a"
                href="#"
                onClick={v.bookCall}
                onMouseEnter={v.bx?.prof?.on}
                onMouseLeave={v.bx?.prof?.off}
                onFocus={v.bx?.prof?.on}
                onBlur={v.bx?.prof?.off}
                style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '12px', height: 'clamp(56px,5vw,64px)', padding: '0 28px', whiteSpace: 'nowrap', backgroundColor: 'var(--accent)', backgroundImage: 'linear-gradient(var(--accent-deep),var(--accent-deep))', backgroundRepeat: 'no-repeat', backgroundPosition: 'left center', backgroundSize: '0% 100%', color: '#F4F1EC', fontWeight: 600, fontSize: '1.0625rem', textDecoration: 'none', transition: 'background-size 450ms cubic-bezier(.65,0,.35,1), gap 200ms' }}
                hover={{ backgroundSize: '100% 100%', gap: '20px' }}
              >
                <span>Book a call with {v.pf?.first}</span>
                <span aria-hidden="true" style={{ fontSize: '1.15em', lineHeight: 1 }}>→</span>
                <span
                  aria-hidden="true"
                  style={{ position: 'absolute', top: '-7px', left: '-7px', width: '12px', height: '12px', borderTop: '2px solid var(--accent)', borderLeft: '2px solid var(--accent)', pointerEvents: 'none', transform: v.bx?.prof?.tl, transition: 'transform 260ms cubic-bezier(.2,.7,.2,1), opacity 200ms' }}
                ></span>
                <span
                  aria-hidden="true"
                  style={{ position: 'absolute', top: '-7px', right: '-7px', width: '12px', height: '12px', borderTop: '2px solid var(--accent)', borderRight: '2px solid var(--accent)', pointerEvents: 'none', transform: v.bx?.prof?.tr, transition: 'transform 260ms cubic-bezier(.2,.7,.2,1), opacity 200ms' }}
                ></span>
                <span
                  aria-hidden="true"
                  style={{ position: 'absolute', bottom: '-7px', left: '-7px', width: '12px', height: '12px', borderBottom: '2px solid var(--accent)', borderLeft: '2px solid var(--accent)', pointerEvents: 'none', opacity: v.bx?.prof?.bo, transform: v.bx?.prof?.bl, transition: 'transform 260ms cubic-bezier(.2,.7,.2,1), opacity 200ms' }}
                ></span>
                <span
                  aria-hidden="true"
                  style={{ position: 'absolute', bottom: '-7px', right: '-7px', width: '12px', height: '12px', borderBottom: '2px solid var(--accent)', borderRight: '2px solid var(--accent)', pointerEvents: 'none', opacity: v.bx?.prof?.bo, transform: v.bx?.prof?.br, transition: 'transform 260ms cubic-bezier(.2,.7,.2,1), opacity 200ms' }}
                ></span>
              </Sx>
              <Sx
                as="a"
                href={v.pf?.mailto}
                style={{ display: 'inline-flex', alignItems: 'center', minHeight: '44px', whiteSpace: 'nowrap', color: 'inherit', fontWeight: 600, textDecoration: 'underline', textDecorationThickness: '2px', textUnderlineOffset: '4px', backgroundImage: 'linear-gradient(currentColor,currentColor)', backgroundRepeat: 'no-repeat', backgroundPosition: '0 50%', backgroundSize: '0 0', transition: 'color 200ms, padding-left 260ms cubic-bezier(.2,.7,.2,1), margin-left 260ms cubic-bezier(.2,.7,.2,1), background-size 260ms cubic-bezier(.2,.7,.2,1)' }}
                hover={{ color: 'var(--accent)', paddingLeft: '16px', marginLeft: '-16px', backgroundSize: '7px 7px' }}
              >{v.pf?.email}</Sx>
              {(v.pf?.links ?? []).map((l: any, $index: number) => (
                <Sx
                  as="a"
                  key={$index}
                  href={l?.href}
                  style={{ display: 'inline-flex', alignItems: 'center', minHeight: '44px', whiteSpace: 'nowrap', color: 'inherit', fontWeight: 600, textDecoration: 'underline', textDecorationThickness: '2px', textUnderlineOffset: '4px', backgroundImage: 'linear-gradient(currentColor,currentColor)', backgroundRepeat: 'no-repeat', backgroundPosition: '0 50%', backgroundSize: '0 0', transition: 'color 200ms, padding-left 260ms cubic-bezier(.2,.7,.2,1), margin-left 260ms cubic-bezier(.2,.7,.2,1), background-size 260ms cubic-bezier(.2,.7,.2,1)' }}
                  hover={{ color: 'var(--accent)', paddingLeft: '16px', marginLeft: '-16px', backgroundSize: '7px 7px' }}
                >{l?.label}</Sx>
              ))}
            </div>
          </div>
        </div>
        <dl
          style={{ margin: 'clamp(56px,7vw,112px) 0 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,14rem),1fr))', gap: '24px clamp(16px,2vw,32px)' }}
        >
          {(v.pf?.facts ?? []).map((g: any, $index: number) => (
            <div
              key={$index}
              style={{ borderTop: '1px solid #1A1917', paddingTop: '12px', display: 'flex', flexDirection: 'column', gap: '6px' }}
            >
              <dt style={{ fontSize: '.875rem', fontWeight: 600, lineHeight: 1.4 }}>{g?.k}</dt>
              <dd style={{ margin: '0', fontSize: '1.0625rem', lineHeight: 1.45 }}>{g?.v}</dd>
            </div>
          ))}
        </dl>
      </section>
      <section
        style={{ background: '#F4F1EC', color: '#1A1917', padding: '0 clamp(16px,3.5vw,56px) clamp(64px,10vw,192px)' }}
      >
        <h2
          style={{ margin: '0', fontStretch: '72%', fontWeight: 750, textTransform: 'uppercase', fontSize: 'clamp(2.5rem,7.5vw,8rem)', lineHeight: 0.9, letterSpacing: '-.015em' }}
        >What I lead</h2>
        <div style={{ marginTop: 'clamp(40px,5vw,80px)', borderBottom: '1px solid #1A1917' }}>
          {(v.pf?.leads ?? []).map((ld: any, $index: number) => (
            <Sx
              as="a"
              key={$index}
              href="#"
              onClick={ld?.go}
              style={{ display: 'flex', flexWrap: 'wrap', columnGap: 'clamp(24px,4vw,64px)', rowGap: '8px', alignItems: 'baseline', padding: 'clamp(20px,2.2vw,32px) 0', borderTop: '1px solid #1A1917', color: '#1A1917', textDecoration: 'none', transition: 'padding-left 260ms cubic-bezier(.2,.7,.2,1), border-color 200ms' }}
              hover={{ paddingLeft: '20px', borderTopColor: 'var(--accent)' }}
            >
              <span
                style={{ flex: '6 1 20rem', minWidth: '0', fontStretch: '85%', fontWeight: 650, fontSize: 'clamp(1.5rem,2.6vw,2.5rem)', lineHeight: 1, letterSpacing: '-.01em' }}
              >{ld?.name}</span>
              <span
                style={{ flex: '5 1 18rem', minWidth: '0', maxWidth: '48ch', fontSize: 'clamp(1rem,1.15vw,1.1875rem)', lineHeight: 1.5 }}
              >{ld?.blurb}</span>
            </Sx>
          ))}
        </div>
      </section>
      <section
        style={{ background: '#F4F1EC', color: '#1A1917', padding: '0 clamp(16px,3.5vw,56px) clamp(64px,10vw,192px)' }}
      >
        <h2
          style={{ margin: '0', fontStretch: '72%', fontWeight: 750, textTransform: 'uppercase', fontSize: 'clamp(2.5rem,7.5vw,8rem)', lineHeight: 0.9, letterSpacing: '-.015em' }}
        >Background</h2>
        <div style={{ marginTop: 'clamp(40px,5vw,80px)', borderBottom: '1px solid #1A1917' }}>
          {(v.pf?.background ?? []).map((bg: any, $index: number) => (
            <div
              key={$index}
              style={{ display: 'flex', flexWrap: 'wrap', columnGap: 'clamp(16px,2vw,32px)', rowGap: '4px', alignItems: 'baseline', padding: '20px 0', borderTop: '1px solid #1A1917' }}
            >
              <span
                style={{ flex: '2 1 9rem', fontSize: '.875rem', fontWeight: 600, lineHeight: 1.4, fontVariantNumeric: 'tabular-nums' }}
              >{bg?.when}</span>
              <span
                style={{ flex: '5 1 14rem', minWidth: '0', fontWeight: 600, fontSize: 'clamp(1.0625rem,1.3vw,1.375rem)', lineHeight: 1.3 }}
              >{bg?.role}</span>
              <span style={{ flex: '5 1 14rem', minWidth: '0', fontSize: 'clamp(1.0625rem,1.3vw,1.375rem)', lineHeight: 1.3 }}>{bg?.where}</span>
            </div>
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
          >Recommendations</h2>
        </div>
        <div style={{ marginTop: 'clamp(48px,6vw,96px)', borderBottom: '1px solid #F4F1EC' }}>
          {(v.pf?.recs ?? []).map((r: any, $index: number) => (
            <figure
              key={$index}
              style={{ margin: '0', display: 'flex', flexWrap: 'wrap', columnGap: 'clamp(24px,4vw,64px)', rowGap: '32px', padding: 'clamp(32px,4vw,56px) 0', borderTop: '1px solid #F4F1EC' }}
            >
              <blockquote
                style={{ flex: '7 1 28rem', minWidth: '0', margin: '0', fontStretch: '85%', fontWeight: 500, fontSize: 'clamp(1.75rem,3.2vw,3.25rem)', lineHeight: 1.05, letterSpacing: '-.015em', textWrap: 'balance' }}
              >“{r?.text}”</blockquote>
              <figcaption style={{ flex: '4 1 16rem', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <span
                    role="img"
                    aria-label={r?.portrait}
                    style={{ flex: 'none', width: '64px', height: '64px', background: 'var(--ink)' }}
                  ></span>
                  <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.4 }}>
                    <span style={{ fontWeight: 600 }}>{r?.name}</span>
                    <span style={{ fontSize: '.875rem' }}>{r?.role}, {r?.company}</span>
                  </span>
                </span>
                <span
                  style={{ display: 'flex', flexDirection: 'column', gap: '6px', borderTop: '1px solid #F4F1EC', paddingTop: '12px' }}
                >
                  <span style={{ fontSize: '.875rem', fontWeight: 600, lineHeight: 1.4 }}>{r?.project}</span>
                  <span style={{ fontSize: '.9375rem', lineHeight: 1.45 }}>{r?.result}</span>
                  <Sx
                    as="a"
                    href="#"
                    onClick={r?.openCase}
                    style={{ alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', minHeight: '44px', whiteSpace: 'nowrap', color: 'inherit', fontWeight: 600, textDecoration: 'underline', textDecorationThickness: '2px', textUnderlineOffset: '4px', backgroundImage: 'linear-gradient(currentColor,currentColor)', backgroundRepeat: 'no-repeat', backgroundPosition: '0 50%', backgroundSize: '0 0', transition: 'color 200ms, padding-left 260ms cubic-bezier(.2,.7,.2,1), margin-left 260ms cubic-bezier(.2,.7,.2,1), background-size 260ms cubic-bezier(.2,.7,.2,1)' }}
                    hover={{ color: 'var(--accent)', paddingLeft: '16px', marginLeft: '-16px', backgroundSize: '7px 7px' }}
                  >See the project</Sx>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
      <section
        style={{ background: '#F4F1EC', color: '#1A1917', padding: 'clamp(64px,10vw,192px) clamp(16px,3.5vw,56px) 0' }}
      >
        <h2
          style={{ margin: '0', fontStretch: '72%', fontWeight: 750, textTransform: 'uppercase', fontSize: 'clamp(2.5rem,7.5vw,8rem)', lineHeight: 0.9, letterSpacing: '-.015em' }}
        >Projects led</h2>
        <div style={{ marginTop: 'clamp(40px,5vw,80px)', borderBottom: '1px solid #1A1917' }}>
          {(v.pf?.projects ?? []).map((pr: any, $index: number) => (
            <Sx
              as="a"
              key={$index}
              href="#"
              onClick={pr?.open}
              style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', columnGap: 'clamp(24px,3vw,48px)', rowGap: '16px', padding: 'clamp(20px,2vw,32px) 0', borderTop: '1px solid #1A1917', color: '#1A1917', textDecoration: 'none' }}
              hover={{ background: 'rgba(0,0,0,.03)' }}
            >
              <span
                role="img"
                aria-label={pr?.media}
                style={{ flex: '3 1 14rem', maxWidth: '24rem', position: 'relative', aspectRatio: '16 / 9', background: '#1A1917', color: '#F4F1EC' }}
              >
                <span
                  aria-hidden="true"
                  style={{ position: 'absolute', left: '12px', bottom: '10px', right: '12px', fontSize: '.8125rem', fontWeight: 500, lineHeight: 1.35 }}
                >{pr?.media}</span>
              </span>
              <span style={{ flex: '5 1 16rem', minWidth: '0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <span
                  style={{ fontStretch: '85%', fontWeight: 650, fontSize: 'clamp(1.75rem,3.2vw,3.25rem)', lineHeight: 0.95, letterSpacing: '-.01em' }}
                >{pr?.name}</span>
                <span
                  style={{ display: 'flex', gap: '16px', fontSize: '.875rem', fontWeight: 500, lineHeight: 1.4, fontVariantNumeric: 'tabular-nums' }}
                >
                  <span>{pr?.discipline}</span>
                  <span>{pr?.year}</span>
                </span>
              </span>
              <span
                style={{ flex: '4 1 16rem', minWidth: '0', maxWidth: '36ch', fontSize: 'clamp(1.0625rem,1.3vw,1.375rem)', lineHeight: 1.45 }}
              >{pr?.result}</span>
            </Sx>
          ))}
        </div>
      </section>
      <section style={{ background: '#F4F1EC', color: '#1A1917', padding: 'clamp(64px,10vw,192px) clamp(16px,3.5vw,56px)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 'clamp(16px,2vw,28px)' }}>
          <h2
            style={{ margin: '0', fontStretch: '72%', fontWeight: 750, textTransform: 'uppercase', fontSize: 'clamp(2.5rem,7.5vw,8rem)', lineHeight: 0.9, letterSpacing: '-.015em' }}
          >From the logbook</h2>
          <Sx
            as="a"
            href="#"
            onClick={v.goLogbook}
            style={{ display: 'inline-flex', alignItems: 'center', minHeight: '44px', whiteSpace: 'nowrap', color: 'inherit', fontWeight: 600, textDecoration: 'underline', textDecorationThickness: '2px', textUnderlineOffset: '4px', backgroundImage: 'linear-gradient(currentColor,currentColor)', backgroundRepeat: 'no-repeat', backgroundPosition: '0 50%', backgroundSize: '0 0', transition: 'color 200ms, padding-left 260ms cubic-bezier(.2,.7,.2,1), margin-left 260ms cubic-bezier(.2,.7,.2,1), background-size 260ms cubic-bezier(.2,.7,.2,1)' }}
            hover={{ color: 'var(--accent)', paddingLeft: '16px', marginLeft: '-16px', backgroundSize: '7px 7px' }}
          >Full logbook</Sx>
        </div>
        <div style={{ marginTop: 'clamp(40px,5vw,80px)', borderBottom: '1px solid #1A1917' }}>
          {(v.pf?.log ?? []).map((e: any, $index: number) => (
            <Sx
              as="div"
              key={$index}
              data-rise="1"
              style={{ display: 'grid', gridTemplateColumns: '7rem minmax(0,1fr)', columnGap: 'clamp(16px,2vw,32px)', padding: '20px 0', borderTop: '1px solid #1A1917', backgroundImage: 'linear-gradient(var(--accent),var(--accent))', backgroundRepeat: 'no-repeat', backgroundPosition: '-8px 28px', backgroundSize: '7px 7px' }}
              hover={{ paddingLeft: '20px', borderTopColor: 'var(--accent)', backgroundPosition: '0 28px' }}
            >
              <span style={{ fontSize: '.875rem', fontWeight: 600, lineHeight: 1.4, fontVariantNumeric: 'tabular-nums' }}>{e?.dateLabel}</span>
              <p style={{ margin: '0', maxWidth: '56ch', fontSize: 'clamp(1.0625rem,1.2vw,1.25rem)', lineHeight: 1.45 }}>{e?.text}</p>
            </Sx>
          ))}
        </div>
      </section>
      <section
        style={{ background: '#F4F1EC', color: '#1A1917', padding: '0 clamp(16px,3.5vw,56px) clamp(64px,10vw,192px)' }}
      >
        <Sx
          as="a"
          href="#"
          onClick={v.pf?.other?.open}
          style={{ display: 'flex', flexWrap: 'wrap', columnGap: '8.333%', rowGap: '12px', alignItems: 'baseline', padding: '32px 0', borderTop: '1px solid #1A1917', borderBottom: '1px solid #1A1917', color: '#1A1917', textDecoration: 'none' }}
          hover={{ color: 'var(--accent)' }}
        >
          <span style={{ flex: '0 0 100%', fontSize: '.875rem', fontWeight: 500, lineHeight: 1.4, color: '#1A1917' }}>The other founder</span>
          <span
            style={{ flex: '5 1 18rem', minWidth: '0', fontStretch: '85%', fontWeight: 650, fontSize: 'clamp(1.75rem,4.2vw,4rem)', lineHeight: 0.95, letterSpacing: '-.01em', transition: 'color 200ms' }}
          >{v.pf?.other?.name}</span>
          <span
            style={{ flex: '6 1 20rem', minWidth: '0', maxWidth: '62ch', fontSize: 'clamp(1.125rem,1.5vw,1.5rem)', lineHeight: 1.45, color: '#1A1917' }}
          >{v.pf?.other?.role}</span>
        </Sx>
      </section>
    </>
  );
}
