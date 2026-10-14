import type { ViewModel } from '../types';

export function AboutHero({ v }: { v: ViewModel }) {
  return (
    <section
      ref={v.heroRef}
      style={{ background: '#F4F1EC', color: '#1A1917', padding: 'clamp(112px,14vw,200px) clamp(16px,3.5vw,56px) clamp(64px,10vw,192px)' }}
    >
      <h1
        style={{ margin: '0', fontStretch: '68%', fontWeight: 800, textTransform: 'uppercase', fontSize: 'clamp(3.25rem,min(12.5vw,17svh),14rem)', lineHeight: 0.86, letterSpacing: '-.02em' }}
      >About MOZS<span style={{ color: 'var(--accent)' }}>AI</span></h1>
      <p
        style={{ margin: 'clamp(32px,4vw,64px) 0 0', maxWidth: '62ch', fontSize: 'clamp(1.125rem,1.5vw,1.5rem)', lineHeight: 1.45 }}
      >Saihaj was getting stuck games over the line to launch. Moiz was building agents and apps for teams still doing everything by hand. We kept sending clients to each other, so we made it one studio. We keep it small on purpose: one of us leads every project, and you always know who to call.</p>
    </section>
  );
}
