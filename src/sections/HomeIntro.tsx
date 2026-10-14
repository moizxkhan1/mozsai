import { Sx } from '../components/Sx';
import type { ViewModel } from '../types';

export function HomeIntro({ v }: { v: ViewModel }) {
  return (
    <>
      <section
        ref={v.heroRef}
        style={{ background: '#F4F1EC', color: '#1A1917', padding: 'clamp(112px,14vw,200px) clamp(16px,3.5vw,56px) clamp(64px,8vw,128px)' }}
      >
        {v.heroTitle}
        <div
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '32px 48px', marginTop: 'clamp(48px,6vw,96px)', paddingTop: 'clamp(28px,3vw,40px)', borderTop: '1px solid #1A1917' }}
        >
          <p style={{ margin: '0', maxWidth: '34ch', fontSize: 'clamp(1.125rem,1.5vw,1.5rem)', lineHeight: 1.45 }}>We take projects from first call to launch, and stay on after.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '20px 48px' }}>
            <Sx
              as="a"
              href="#"
              onClick={v.bookCall}
              onMouseEnter={v.bx?.hero?.on}
              onMouseLeave={v.bx?.hero?.off}
              onFocus={v.bx?.hero?.on}
              onBlur={v.bx?.hero?.off}
              style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '12px', height: 'clamp(56px,5vw,64px)', padding: '0 28px', whiteSpace: 'nowrap', backgroundColor: 'var(--accent)', backgroundImage: 'linear-gradient(var(--accent-deep),var(--accent-deep))', backgroundRepeat: 'no-repeat', backgroundPosition: 'left center', backgroundSize: '0% 100%', color: '#F4F1EC', fontWeight: 600, fontSize: '1.0625rem', textDecoration: 'none', transition: 'background-size 450ms cubic-bezier(.65,0,.35,1), gap 200ms' }}
              hover={{ backgroundSize: '100% 100%', gap: '20px' }}
            >Book a free 30-minute call<span aria-hidden="true" style={{ fontSize: '1.15em', lineHeight: 1 }}>→</span><span
                aria-hidden="true"
                style={{ position: 'absolute', top: '-7px', left: '-7px', width: '12px', height: '12px', borderTop: '2px solid var(--accent)', borderLeft: '2px solid var(--accent)', pointerEvents: 'none', transform: v.bx?.hero?.tl, transition: 'transform 260ms cubic-bezier(.2,.7,.2,1), opacity 200ms' }}
              ></span><span
                aria-hidden="true"
                style={{ position: 'absolute', top: '-7px', right: '-7px', width: '12px', height: '12px', borderTop: '2px solid var(--accent)', borderRight: '2px solid var(--accent)', pointerEvents: 'none', transform: v.bx?.hero?.tr, transition: 'transform 260ms cubic-bezier(.2,.7,.2,1), opacity 200ms' }}
              ></span><span
                aria-hidden="true"
                style={{ position: 'absolute', bottom: '-7px', left: '-7px', width: '12px', height: '12px', borderBottom: '2px solid var(--accent)', borderLeft: '2px solid var(--accent)', pointerEvents: 'none', opacity: v.bx?.hero?.bo, transform: v.bx?.hero?.bl, transition: 'transform 260ms cubic-bezier(.2,.7,.2,1), opacity 200ms' }}
              ></span><span
                aria-hidden="true"
                style={{ position: 'absolute', bottom: '-7px', right: '-7px', width: '12px', height: '12px', borderBottom: '2px solid var(--accent)', borderRight: '2px solid var(--accent)', pointerEvents: 'none', opacity: v.bx?.hero?.bo, transform: v.bx?.hero?.br, transition: 'transform 260ms cubic-bezier(.2,.7,.2,1), opacity 200ms' }}
              ></span></Sx>
            <Sx
              as="a"
              href="#"
              onClick={v.toShipped}
              style={{ display: 'inline-flex', alignItems: 'center', minHeight: '44px', whiteSpace: 'nowrap', color: 'inherit', fontWeight: 500, textDecoration: 'underline', textDecorationThickness: '2px', textUnderlineOffset: '4px', backgroundImage: 'linear-gradient(currentColor,currentColor)', backgroundRepeat: 'no-repeat', backgroundPosition: '0 50%', backgroundSize: '0 0', transition: 'color 200ms, padding-left 260ms cubic-bezier(.2,.7,.2,1), margin-left 260ms cubic-bezier(.2,.7,.2,1), background-size 260ms cubic-bezier(.2,.7,.2,1)' }}
              hover={{ color: 'var(--accent)', paddingLeft: '16px', marginLeft: '-16px', backgroundSize: '7px 7px' }}
            >See our work</Sx>
          </div>
        </div>
      </section>
      <section
        data-dark="1"
        role="img"
        aria-label="Studio reel: a 20 to 30 second cut of project captures"
        style={{ position: 'relative', background: '#1A1917', color: '#F4F1EC', aspectRatio: v.bleedRatio }}
      >
        <span
          aria-hidden="true"
          style={{ position: 'absolute', left: 'clamp(16px,3.5vw,56px)', bottom: 'clamp(16px,2.5vw,40px)', fontSize: '.875rem', fontWeight: 500, lineHeight: 1.4 }}
        >Studio reel, a 20 to 30 second cut of project captures</span>
      </section>
      <section aria-label="Clients" style={{ background: '#F4F1EC', color: '#1A1917', padding: 'clamp(32px,4vw,56px) 0' }}>
        <div
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'baseline', gap: '8px 32px', padding: '0 clamp(16px,3.5vw,56px) clamp(20px,2.4vw,32px)' }}
        >
          <p style={{ margin: '0', fontSize: '.875rem', fontWeight: 600, lineHeight: 1.4 }}>Teams we've built for</p>
        </div>
        <div style={{ borderTop: '1px solid #1A1917', borderBottom: '1px solid #1A1917' }}>{v.clientMarquee}</div>
      </section>
      {v.showRecs ? (
        <section
          data-dark="1"
          aria-labelledby="recs-h"
          style={{ background: 'var(--ink-deep)', color: '#F4F1EC', padding: 'clamp(64px,10vw,192px) clamp(16px,3.5vw,56px)' }}
        >
          <h2
            id="recs-h"
            style={{ margin: '0', fontStretch: '72%', fontWeight: 750, textTransform: 'uppercase', fontSize: 'clamp(2.5rem,7.5vw,8rem)', lineHeight: 0.9, letterSpacing: '-.015em' }}
          >What our clients say</h2>
          <figure
            style={{ margin: 'clamp(48px,6vw,96px) 0 0', display: 'flex', flexWrap: 'wrap', columnGap: 'clamp(24px,4vw,64px)', rowGap: '40px', paddingTop: 'clamp(28px,3vw,48px)', borderTop: '1px solid #F4F1EC' }}
          >
            <div
              style={{ flex: '7 1 28rem', minWidth: '0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '40px' }}
            >
              <blockquote
                data-reveal="1"
                style={{ margin: '0', fontStretch: '85%', fontWeight: 500, fontSize: 'clamp(2rem,4.4vw,4.75rem)', lineHeight: 1, letterSpacing: '-.015em', textWrap: 'balance' }}
              >“{v.recFeat?.text}”</blockquote>
              <figcaption style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span
                  role="img"
                  aria-label={v.recFeat?.portrait}
                  style={{ flex: 'none', width: '64px', height: '64px', background: 'var(--ink)' }}
                ></span>
                <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.4 }}>
                  <span style={{ fontWeight: 600 }}>{v.recFeat?.name}</span>
                  <span style={{ fontSize: '.875rem' }}>{v.recFeat?.role}, {v.recFeat?.company}</span>
                </span>
              </figcaption>
            </div>
            <div
              style={{ flex: '5 1 20rem', minWidth: '0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '32px', background: '#2A2724', padding: 'clamp(24px,2.6vw,40px)' }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <span style={{ fontSize: '.875rem', fontWeight: 600, lineHeight: 1.4 }}>What we built for them</span>
                <span
                  style={{ fontStretch: '80%', fontWeight: 700, textTransform: 'uppercase', fontSize: 'clamp(1.75rem,3vw,3.25rem)', lineHeight: 0.95, letterSpacing: '-.01em' }}
                >{v.recFeat?.project}</span>
              </div>
              <div
                style={{ display: 'flex', flexDirection: 'column', gap: '6px', borderTop: '1px solid #F4F1EC', paddingTop: '12px' }}
              >
                <span
                  style={{ fontStretch: '80%', fontWeight: 700, textTransform: 'uppercase', fontSize: 'clamp(1.375rem,2vw,2.25rem)', lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}
                >{v.recFeat?.fig}</span>
                <span style={{ fontSize: '.875rem', lineHeight: 1.4 }}>{v.recFeat?.figText}</span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0 24px' }}>
                <Sx
                  as="a"
                  href="#"
                  onClick={v.recFeat?.openCase}
                  style={{ display: 'inline-flex', alignItems: 'center', minHeight: '44px', whiteSpace: 'nowrap', color: 'inherit', fontWeight: 600, textDecoration: 'underline', textDecorationThickness: '2px', textUnderlineOffset: '4px', backgroundImage: 'linear-gradient(currentColor,currentColor)', backgroundRepeat: 'no-repeat', backgroundPosition: '0 50%', backgroundSize: '0 0', transition: 'color 200ms, padding-left 260ms cubic-bezier(.2,.7,.2,1), margin-left 260ms cubic-bezier(.2,.7,.2,1), background-size 260ms cubic-bezier(.2,.7,.2,1)' }}
                  hover={{ color: 'var(--accent)', paddingLeft: '16px', marginLeft: '-16px', backgroundSize: '7px 7px' }}
                >See the project</Sx>
                <Sx
                  as="a"
                  href="#"
                  onClick={v.recFeat?.openProfile}
                  style={{ display: 'inline-flex', alignItems: 'center', minHeight: '44px', whiteSpace: 'nowrap', color: 'inherit', fontWeight: 600, textDecoration: 'underline', textDecorationThickness: '2px', textUnderlineOffset: '4px', backgroundImage: 'linear-gradient(currentColor,currentColor)', backgroundRepeat: 'no-repeat', backgroundPosition: '0 50%', backgroundSize: '0 0', transition: 'color 200ms, padding-left 260ms cubic-bezier(.2,.7,.2,1), margin-left 260ms cubic-bezier(.2,.7,.2,1), background-size 260ms cubic-bezier(.2,.7,.2,1)' }}
                  hover={{ color: 'var(--accent)', paddingLeft: '16px', marginLeft: '-16px', backgroundSize: '7px 7px' }}
                >{v.recFeat?.forName}'s profile</Sx>
              </div>
            </div>
          </figure>
          <div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,20rem),1fr))', gap: '56px clamp(24px,3vw,48px)', marginTop: 'clamp(56px,7vw,112px)' }}
          >
            {(v.recRest ?? []).map((r: any, $index: number) => (
              <figure
                key={$index}
                style={{ margin: '0', display: 'flex', flexDirection: 'column', gap: '24px', borderTop: '1px solid #F4F1EC', paddingTop: '20px' }}
              >
                <span
                  style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 16px', fontSize: '.875rem', fontWeight: 600, lineHeight: 1.4, fontVariantNumeric: 'tabular-nums' }}
                >
                  <span>{r?.project}</span>
                  <span style={{ fontWeight: 400 }}>{r?.fig}</span>
                </span>
                <blockquote
                  style={{ margin: '0', fontStretch: '90%', fontWeight: 500, fontSize: 'clamp(1.375rem,1.8vw,1.875rem)', lineHeight: 1.2, letterSpacing: '-.01em' }}
                >“{r?.text}”</blockquote>
                <figcaption style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <span
                      role="img"
                      aria-label={r?.portrait}
                      style={{ flex: 'none', width: '48px', height: '48px', background: 'var(--ink)' }}
                    ></span>
                    <span style={{ display: 'flex', flexDirection: 'column', fontSize: '.875rem', lineHeight: 1.4 }}>
                      <span style={{ fontWeight: 600, fontSize: '1rem' }}>{r?.name}</span>
                      <span>{r?.role}, {r?.company}</span>
                    </span>
                  </span>
                  <span style={{ display: 'flex', flexWrap: 'wrap', gap: '0 20px', fontSize: '.9375rem' }}>
                    <Sx
                      as="a"
                      href="#"
                      onClick={r?.openCase}
                      style={{ display: 'inline-flex', alignItems: 'center', minHeight: '44px', whiteSpace: 'nowrap', color: 'inherit', fontWeight: 600, textDecoration: 'underline', textDecorationThickness: '2px', textUnderlineOffset: '4px', backgroundImage: 'linear-gradient(currentColor,currentColor)', backgroundRepeat: 'no-repeat', backgroundPosition: '0 50%', backgroundSize: '0 0', transition: 'color 200ms, padding-left 260ms cubic-bezier(.2,.7,.2,1), margin-left 260ms cubic-bezier(.2,.7,.2,1), background-size 260ms cubic-bezier(.2,.7,.2,1)' }}
                      hover={{ color: 'var(--accent)', paddingLeft: '16px', marginLeft: '-16px', backgroundSize: '7px 7px' }}
                    >See the project</Sx>
                    <Sx
                      as="a"
                      href="#"
                      onClick={r?.openProfile}
                      style={{ display: 'inline-flex', alignItems: 'center', minHeight: '44px', whiteSpace: 'nowrap', color: 'inherit', fontWeight: 600, textDecoration: 'underline', textDecorationThickness: '2px', textUnderlineOffset: '4px', backgroundImage: 'linear-gradient(currentColor,currentColor)', backgroundRepeat: 'no-repeat', backgroundPosition: '0 50%', backgroundSize: '0 0', transition: 'color 200ms, padding-left 260ms cubic-bezier(.2,.7,.2,1), margin-left 260ms cubic-bezier(.2,.7,.2,1), background-size 260ms cubic-bezier(.2,.7,.2,1)' }}
                      hover={{ color: 'var(--accent)', paddingLeft: '16px', marginLeft: '-16px', backgroundSize: '7px 7px' }}
                    >{r?.forName}'s profile</Sx>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      ) : null}
      <section
        ref={v.workRef}
        style={{ background: '#F4F1EC', color: '#1A1917', padding: 'clamp(64px,10vw,192px) clamp(16px,3.5vw,56px) 0' }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 'clamp(16px,2vw,28px)' }}>
          <h2
            style={{ margin: '0', fontStretch: '72%', fontWeight: 750, textTransform: 'uppercase', fontSize: 'clamp(2.5rem,7.5vw,8rem)', lineHeight: 0.9, letterSpacing: '-.015em' }}
          >Two projects in detail</h2>
        </div>
        <div
          style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(64px,8vw,128px)', marginTop: 'clamp(48px,6vw,96px)' }}
        >
          {(v.caseStudies ?? []).map((c: any, $index: number) => (
            <article
              key={$index}
              style={{ display: 'flex', flexWrap: 'wrap', flexDirection: c?.dir, columnGap: 'clamp(24px,4vw,64px)', rowGap: '28px', alignItems: 'stretch' }}
            >
              <a
                href="#"
                onClick={c?.open}
                role="img"
                aria-label={c?.media}
                style={{ flex: '7 1 28rem', minWidth: '0', alignSelf: 'flex-start', position: 'relative', display: 'block', aspectRatio: '16 / 9', background: '#1A1917', color: '#F4F1EC' }}
              >
                <span
                  aria-hidden="true"
                  style={{ position: 'absolute', left: '16px', bottom: '14px', right: '16px', fontSize: '.8125rem', fontWeight: 500, lineHeight: 1.35 }}
                >{c?.media}</span>
              </a>
              <div
                style={{ flex: '5 1 22rem', minWidth: '0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '32px' }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <span
                    style={{ display: 'flex', flexWrap: 'wrap', gap: '4px 16px', fontSize: '.875rem', fontWeight: 600, lineHeight: 1.4, fontVariantNumeric: 'tabular-nums' }}
                  >
                    <span>{c?.discipline}</span>
                    <span>{c?.year}</span>
                    <span style={{ fontWeight: 400 }}>{c?.client}</span>
                  </span>
                  <h3
                    style={{ margin: '0', fontStretch: '80%', fontWeight: 700, textTransform: 'uppercase', fontSize: 'clamp(2rem,3.6vw,3.75rem)', lineHeight: 0.92, letterSpacing: '-.01em' }}
                  >{c?.name}</h3>
                  <p style={{ margin: '0', maxWidth: '40ch', fontSize: 'clamp(1.0625rem,1.3vw,1.375rem)', lineHeight: 1.45 }}>{c?.result}</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
                  <div
                    style={{ alignSelf: 'stretch', display: 'grid', gridTemplateColumns: 'repeat(2,minmax(0,1fr))', gap: '20px' }}
                  >
                    {(c?.figures ?? []).map((g: any, $index: number) => (
                      <div
                        key={$index}
                        style={{ borderTop: '1px solid #1A1917', paddingTop: '12px', display: 'flex', flexDirection: 'column', gap: '6px' }}
                      >
                        <span
                          style={{ fontStretch: '80%', fontWeight: 700, textTransform: 'uppercase', fontSize: 'clamp(1.375rem,2vw,2.25rem)', lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}
                        >{g?.fig}</span>
                        <span style={{ fontSize: '.875rem', lineHeight: 1.4 }}>{g?.text}</span>
                      </div>
                    ))}
                  </div>
                  <Sx
                    as="a"
                    href="#"
                    onClick={c?.open}
                    style={{ display: 'inline-flex', alignItems: 'center', minHeight: '44px', whiteSpace: 'nowrap', color: 'inherit', fontWeight: 600, textDecoration: 'underline', textDecorationThickness: '2px', textUnderlineOffset: '4px', backgroundImage: 'linear-gradient(currentColor,currentColor)', backgroundRepeat: 'no-repeat', backgroundPosition: '0 50%', backgroundSize: '0 0', transition: 'color 200ms, padding-left 260ms cubic-bezier(.2,.7,.2,1), margin-left 260ms cubic-bezier(.2,.7,.2,1), background-size 260ms cubic-bezier(.2,.7,.2,1)' }}
                    hover={{ color: 'var(--accent)', paddingLeft: '16px', marginLeft: '-16px', backgroundSize: '7px 7px' }}
                  >Read the case study</Sx>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
