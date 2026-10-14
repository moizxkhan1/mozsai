import { Sx } from '../components/Sx';
import type { ViewModel } from '../types';

export function ContactSection({ v }: { v: ViewModel }) {
  return (
    <section
      ref={v.contactRef}
      id="contact"
      data-dark="1"
      style={{ background: 'var(--ink)', color: '#F4F1EC', padding: 'clamp(64px,10vw,192px) clamp(16px,3.5vw,56px)' }}
    >
      <div
        style={{ display: 'flex', flexWrap: 'wrap', columnGap: 'clamp(32px,6vw,112px)', rowGap: '64px', alignItems: 'flex-start' }}
      >
        <div style={{ flex: '5 1 22rem', minWidth: '0', display: 'flex', flexDirection: 'column' }}>
          <h2
            style={{ margin: '0', fontStretch: '68%', fontWeight: 800, textTransform: 'uppercase', fontSize: 'clamp(3rem,6.5vw,7.5rem)', lineHeight: 0.88, letterSpacing: '-.02em' }}
          >Tell us what you're building</h2>
          <p
            style={{ margin: '24px 0 0', maxWidth: '36ch', fontSize: 'clamp(1.0625rem,1.3vw,1.375rem)', lineHeight: 1.45 }}
          >One of us will reply within a working day.</p>
          <div style={{ marginTop: 'clamp(40px,5vw,72px)' }}>
            <p style={{ margin: '0 0 4px', fontSize: '.875rem', fontWeight: 600, lineHeight: 1.4 }}>Prefer email?</p>
            {(v.founders ?? []).map((f: any, $index: number) => (
              <div
                key={$index}
                style={{ display: 'grid', gridTemplateColumns: '56px minmax(0,1fr)', columnGap: '16px', alignItems: 'center', padding: '16px 0', borderTop: '1px solid #F4F1EC' }}
              >
                <div role="img" aria-label={f?.portrait} style={{ width: '56px', height: '56px', background: 'var(--ink-deep)' }}></div>
                <div style={{ minWidth: '0', display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontWeight: 600, lineHeight: 1.3 }}>{f?.name}, <span style={{ fontWeight: 400 }}>{f?.role}</span></span>
                  <Sx
                    as="a"
                    href={f?.mailto}
                    style={{ alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', minHeight: '32px', color: 'inherit', fontWeight: 500, textDecoration: 'underline', textDecorationThickness: '2px', textUnderlineOffset: '4px', overflowWrap: 'anywhere', backgroundImage: 'linear-gradient(currentColor,currentColor)', backgroundRepeat: 'no-repeat', backgroundPosition: '0 50%', backgroundSize: '0 0', transition: 'color 200ms, padding-left 260ms cubic-bezier(.2,.7,.2,1), margin-left 260ms cubic-bezier(.2,.7,.2,1), background-size 260ms cubic-bezier(.2,.7,.2,1)' }}
                    hover={{ color: 'var(--accent)', paddingLeft: '16px', marginLeft: '-16px', backgroundSize: '7px 7px' }}
                  >{f?.email}</Sx>
                </div>
              </div>
            ))}
            <div style={{ borderTop: '1px solid #F4F1EC', paddingTop: '12px' }}>
              <Sx
                as="a"
                href="#"
                style={{ display: 'inline-flex', alignItems: 'center', minHeight: '44px', whiteSpace: 'nowrap', color: 'inherit', fontWeight: 600, textDecoration: 'underline', textDecorationThickness: '2px', textUnderlineOffset: '4px', backgroundImage: 'linear-gradient(currentColor,currentColor)', backgroundRepeat: 'no-repeat', backgroundPosition: '0 50%', backgroundSize: '0 0', transition: 'color 200ms, padding-left 260ms cubic-bezier(.2,.7,.2,1), margin-left 260ms cubic-bezier(.2,.7,.2,1), background-size 260ms cubic-bezier(.2,.7,.2,1)' }}
                hover={{ color: 'var(--accent)', paddingLeft: '16px', marginLeft: '-16px', backgroundSize: '7px 7px' }}
              >Book a 30-minute call</Sx>
            </div>
          </div>
        </div>
        <div style={{ flex: '7 1 28rem', minWidth: '0' }}>
          {v.sent ? (
            <p
              role="status"
              style={{ margin: '0', fontStretch: '80%', fontWeight: 700, textTransform: 'uppercase', fontSize: 'clamp(2rem,3.6vw,3.75rem)', lineHeight: 0.95, letterSpacing: '-.01em' }}
            >Thanks, got it. One of us will reply within a working day.</p>
          ) : null}
          {v.notSent ? (
            <form onSubmit={v.submit} noValidate={true} style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
              <div
                style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,14rem),1fr))', gap: '36px 32px' }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <label htmlFor="f-name" style={{ fontSize: '.8125rem', fontWeight: 600, lineHeight: 1.4, letterSpacing: '.01em' }}>Name</label>
                  <Sx
                    as="input"
                    id="f-name"
                    name="name"
                    autoComplete="name"
                    placeholder="Your name"
                    value={v.form?.name}
                    onChange={v.setName}
                    aria-invalid={v.err?.nameInvalid}
                    aria-describedby="e-name"
                    style={{ width: '100%', height: '52px', padding: '0', border: '0', borderBottom: '1px solid rgba(244,241,236,.45)', borderRadius: '0', background: 'transparent', color: '#F4F1EC', fontSize: 'clamp(1.125rem,1.3vw,1.3125rem)', outline: 'none', transition: 'border-color 150ms,box-shadow 150ms' }}
                    focus={{ borderBottomColor: '#F4F1EC', boxShadow: 'inset 0 -1px 0 #F4F1EC' }}
                  />
                  {v.err?.hasName ? (
                    <p
                      id="e-name"
                      style={{ margin: '0', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '.8125rem', fontWeight: 600, marginTop: '8px' }}
                    ><span aria-hidden="true" style={{ width: '6px', height: '6px', background: '#F4F1EC' }}></span>{v.err?.name}</p>
                  ) : null}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <label htmlFor="f-email" style={{ fontSize: '.8125rem', fontWeight: 600, lineHeight: 1.4, letterSpacing: '.01em' }}>Email</label>
                  <Sx
                    as="input"
                    id="f-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    placeholder="you@company.com"
                    value={v.form?.email}
                    onChange={v.setEmail}
                    aria-invalid={v.err?.emailInvalid}
                    aria-describedby="e-email"
                    style={{ width: '100%', height: '52px', padding: '0', border: '0', borderBottom: '1px solid rgba(244,241,236,.45)', borderRadius: '0', background: 'transparent', color: '#F4F1EC', fontSize: 'clamp(1.125rem,1.3vw,1.3125rem)', outline: 'none', transition: 'border-color 150ms,box-shadow 150ms' }}
                    focus={{ borderBottomColor: '#F4F1EC', boxShadow: 'inset 0 -1px 0 #F4F1EC' }}
                  />
                  {v.err?.hasEmail ? (
                    <p
                      id="e-email"
                      style={{ margin: '0', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '.8125rem', fontWeight: 600, marginTop: '8px' }}
                    ><span aria-hidden="true" style={{ width: '6px', height: '6px', background: '#F4F1EC' }}></span>{v.err?.email}</p>
                  ) : null}
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <label
                  htmlFor="f-building"
                  style={{ fontSize: '.8125rem', fontWeight: 600, lineHeight: 1.4, letterSpacing: '.01em' }}
                >What are you building?</label>
                <Sx
                  as="textarea"
                  id="f-building"
                  name="building"
                  rows={3}
                  placeholder="The project, the deadline, and what exists already"
                  value={v.form?.building}
                  onChange={v.setBuilding}
                  aria-invalid={v.err?.buildingInvalid}
                  aria-describedby="e-building"
                  style={{ width: '100%', border: '0', borderBottom: '1px solid rgba(244,241,236,.45)', borderRadius: '0', background: 'transparent', color: '#F4F1EC', fontSize: 'clamp(1.125rem,1.3vw,1.3125rem)', outline: 'none', transition: 'border-color 150ms,box-shadow 150ms', height: 'auto', minHeight: '104px', padding: '14px 0', lineHeight: 1.5, resize: 'vertical' }}
                  focus={{ borderBottomColor: '#F4F1EC', boxShadow: 'inset 0 -1px 0 #F4F1EC' }}
                ></Sx>
                {v.err?.hasBuilding ? (
                  <p
                    id="e-building"
                    style={{ margin: '0', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '.8125rem', fontWeight: 600, marginTop: '8px' }}
                  ><span aria-hidden="true" style={{ width: '6px', height: '6px', background: '#F4F1EC' }}></span>{v.err?.building}</p>
                ) : null}
              </div>
              <fieldset style={{ margin: '0', padding: '0', border: '0', minWidth: '0' }}>
                <legend
                  style={{ padding: '0', marginBottom: '12px', fontSize: '.8125rem', fontWeight: 600, lineHeight: 1.4, letterSpacing: '.01em' }}
                >What kind of project?</legend>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(9rem,1fr))', gap: '8px' }}>
                  {(v.kinds ?? []).map((k: any, $index: number) => (
                    <Sx
                      as="button"
                      key={$index}
                      type="button"
                      aria-pressed={k?.pressed}
                      onClick={k?.pick}
                      style={{ display: 'flex', alignItems: 'center', gap: '12px', width: '100%', height: '48px', padding: '0 16px', border: `1px solid ${k?.border}`, borderRadius: '0', background: k?.bg, color: k?.fg, fontWeight: 500, fontSize: '.9375rem', whiteSpace: 'nowrap', textAlign: 'left', cursor: 'pointer', transition: 'background-color 150ms,color 150ms,border-color 150ms' }}
                      hover={{ borderColor: '#F4F1EC' }}
                    ><span
                        aria-hidden="true"
                        style={{ flex: 'none', width: '10px', height: '10px', border: '1.5px solid currentColor', background: k?.dot }}
                      ></span>{k?.label}</Sx>
                  ))}
                </div>
              </fieldset>
              <fieldset style={{ margin: '0', padding: '0', border: '0', minWidth: '0' }}>
                <legend
                  style={{ padding: '0', marginBottom: '12px', fontSize: '.8125rem', fontWeight: 600, lineHeight: 1.4, letterSpacing: '.01em' }}
                >Rough budget</legend>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(9rem,1fr))', gap: '8px' }}>
                  {(v.budgetChips ?? []).map((bo: any, $index: number) => (
                    <Sx
                      as="button"
                      key={$index}
                      type="button"
                      aria-pressed={bo?.pressed}
                      onClick={bo?.pick}
                      style={{ display: 'flex', alignItems: 'center', gap: '12px', width: '100%', height: '48px', padding: '0 16px', border: `1px solid ${bo?.border}`, borderRadius: '0', background: bo?.bg, color: bo?.fg, fontWeight: 500, fontSize: '.9375rem', whiteSpace: 'nowrap', textAlign: 'left', cursor: 'pointer', transition: 'background-color 150ms,color 150ms,border-color 150ms' }}
                      hover={{ borderColor: '#F4F1EC' }}
                    ><span
                        aria-hidden="true"
                        style={{ flex: 'none', width: '10px', height: '10px', border: '1.5px solid currentColor', background: bo?.dot }}
                      ></span>{bo?.label}</Sx>
                  ))}
                </div>
              </fieldset>
              <div
                style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '20px', paddingTop: '28px', borderTop: '1px solid rgba(244,241,236,.45)' }}
              >
                <span style={{ fontSize: '.875rem', lineHeight: 1.4 }}>Goes straight to Saihaj and Moiz.</span>
                <Sx
                  as="button"
                  type="submit"
                  onMouseEnter={v.bx?.send?.on}
                  onMouseLeave={v.bx?.send?.off}
                  onFocus={v.bx?.send?.on}
                  onBlur={v.bx?.send?.off}
                  style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'space-between', gap: '28px', minWidth: '12rem', height: '60px', padding: '0 24px 0 28px', whiteSpace: 'nowrap', border: '0', borderRadius: '0', backgroundColor: 'var(--accent)', backgroundImage: 'linear-gradient(var(--accent-deep),var(--accent-deep))', backgroundRepeat: 'no-repeat', backgroundPosition: 'left center', backgroundSize: '0% 100%', color: '#F4F1EC', fontWeight: 600, fontSize: '1.0625rem', cursor: 'pointer', transition: 'background-size 450ms cubic-bezier(.65,0,.35,1), gap 200ms' }}
                  hover={{ backgroundSize: '100% 100%', gap: '40px' }}
                >Send message<span aria-hidden="true" style={{ fontSize: '1.25rem', lineHeight: 1 }}>→</span><span
                    aria-hidden="true"
                    style={{ position: 'absolute', top: '-7px', left: '-7px', width: '12px', height: '12px', borderTop: '2px solid var(--accent)', borderLeft: '2px solid var(--accent)', pointerEvents: 'none', transform: v.bx?.send?.tl, transition: 'transform 260ms cubic-bezier(.2,.7,.2,1), opacity 200ms' }}
                  ></span><span
                    aria-hidden="true"
                    style={{ position: 'absolute', top: '-7px', right: '-7px', width: '12px', height: '12px', borderTop: '2px solid var(--accent)', borderRight: '2px solid var(--accent)', pointerEvents: 'none', transform: v.bx?.send?.tr, transition: 'transform 260ms cubic-bezier(.2,.7,.2,1), opacity 200ms' }}
                  ></span><span
                    aria-hidden="true"
                    style={{ position: 'absolute', bottom: '-7px', left: '-7px', width: '12px', height: '12px', borderBottom: '2px solid var(--accent)', borderLeft: '2px solid var(--accent)', pointerEvents: 'none', opacity: v.bx?.send?.bo, transform: v.bx?.send?.bl, transition: 'transform 260ms cubic-bezier(.2,.7,.2,1), opacity 200ms' }}
                  ></span><span
                    aria-hidden="true"
                    style={{ position: 'absolute', bottom: '-7px', right: '-7px', width: '12px', height: '12px', borderBottom: '2px solid var(--accent)', borderRight: '2px solid var(--accent)', pointerEvents: 'none', opacity: v.bx?.send?.bo, transform: v.bx?.send?.br, transition: 'transform 260ms cubic-bezier(.2,.7,.2,1), opacity 200ms' }}
                  ></span></Sx>
              </div>
            </form>
          ) : null}
        </div>
      </div>
    </section>
  );
}
