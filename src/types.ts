import type { CSSProperties } from 'react';

export type ServiceKey = 'games' | 'ai' | 'web';
export type Palette = 'rust' | 'forest' | 'navy' | 'graphite';

export interface AppProps {
  featuredCount?: number;
  showRecommendations?: boolean;
  recCount?: number;
  showFaq?: boolean;
  defaultService?: ServiceKey;
  showWorkFilters?: boolean;
  palette?: Palette;
}

export interface ContactForm { name: string; email: string; building: string; kind: string; budget: string }

export interface AppState {
  page: string;
  service: string | null;
  caseId: string | null;
  profileId: string | null;
  filter: string;
  form: ContactForm;
  errors: Record<string, string | null>;
  sent: boolean;
  w: number | null;
  canHover: boolean;
  reduced: boolean;
  pastHero: boolean;
  contactVisible: boolean;
  menuOpen: boolean;
  openFaq: number;
  hoverId: string | null;
  hb: string | null;
  navHover: any;
  navPos: Record<string, [number, number]> | null;
  tabHover: any;
  tabPos: Record<string, [number, number]> | null;
  wipe: string;
  delays: number[];
  procIn?: boolean;
  logoIn?: boolean;
  logoAi?: boolean;
  logoHover?: boolean;
  marqPaused?: boolean;
  bandHover?: string | null;
  benchHover?: number | null;
}

/** Flat values and handlers the App computes each render and hands to every section. */
export type ViewModel = Record<string, any>;

export interface Link { label: string; href: string }
export interface Founder {
  id: string; name: string; first: string; role: string; email: string; portrait: string; based: string;
  links: Link[]; background: { when: string; role: string; where: string }[]; short: string[]; long: string[];
}
export interface LogEntry { date: string; who: string; text: string }
export interface Figure { fig: string; text: string }
export interface Project {
  id: string; name: string; svc: ServiceKey; discipline: string; year: string; ratio: string; media: string; result: string;
  client: string; built: string; team: string; duration: string; problem: string; builtText: string; changed: string;
  figures: Figure[]; gallery: string[];
}
export interface Service {
  name: string; tab: string; cta: string; example: string; headline: string; lead: string;
  leadName: string; leadRole: string; leadPortrait: string; quote: string;
  deliverables: { title: string; body: string }[]; figures: Figure[]; tools: string;
  bandBlurb: string; bandTools: string; bandLink: string;
}
export interface Step { when: string; a: string; b: string }
export interface FaqItem { q: string; a: string }
export interface Rec { id: string; project: string; about: string; name: string; role: string; company: string; portrait: string; text: string }
export interface Client { name: string; s: CSSProperties; src?: string }
export interface TeamExtra { focus: string; tools: string }
export interface BenchMember { name: string; role: string; note: string; portrait: string }
export interface Role { title: string; body: string; type: string; where: string }
export interface Perk { title: string; body: string }
export interface Filter { key: string; label: string }
export interface Budget { v: string; label: string }
