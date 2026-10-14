import type { ViewModel } from '../types';

export function MobileBookBar({ v }: { v: ViewModel }) {
  return (
    <div
      style={{ position: 'fixed', left: '0', right: '0', bottom: '0', zIndex: 45, height: '64px', background: '#F4F1EC', borderTop: '1px solid #1A1917', padding: '8px clamp(16px,3.5vw,56px)', display: 'flex' }}
    >
      <a
        href="#"
        onClick={v.bookCall}
        style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--accent)', color: '#F4F1EC', fontWeight: 600, fontSize: '1.0625rem', textDecoration: 'none' }}
      >Book a call</a>
    </div>
  );
}
