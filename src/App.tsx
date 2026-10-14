import React from 'react';
import { PAL, MON, MONL, HERO, norm, FOUNDERS, LOG, PROJECTS, SERVICES, STEPS, FAQ, RECS, CASE_IDS, CLIENTS, TEAM_EXTRA, BENCH, ROLES, HIRE_STEPS, PERKS, FILTERS, KINDS, BUDGETS } from './data';
import type { AppProps, AppState, ViewModel } from './types';
import { DesktopHeader } from './layout/DesktopHeader';
import { MobileHeader } from './layout/MobileHeader';
import { MobileMenu } from './layout/MobileMenu';
import { HomeIntro } from './sections/HomeIntro';
import { AboutHero } from './sections/AboutHero';
import { ServicePage } from './sections/ServicePage';
import { CaseStudy } from './sections/CaseStudy';
import { WorkList } from './sections/WorkList';
import { HomeServices } from './sections/HomeServices';
import { StudioSection } from './sections/StudioSection';
import { HomeFaq } from './sections/HomeFaq';
import { AboutLogbook } from './sections/AboutLogbook';
import { TeamPage } from './sections/TeamPage';
import { ProfilePage } from './sections/ProfilePage';
import { CareersPage } from './sections/CareersPage';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './layout/Footer';
import { MobileBookBar } from './layout/MobileBookBar';

export default class App extends React.Component<AppProps, AppState> {
  // Instance fields assigned at runtime (_io, _check, timers...)
  [key: string]: any;

  state: AppState = {hb:null, navHover:null, navPos:null, tabHover:null, tabPos:null, page:'home', service:null, caseId:null, profileId:null, filter:'all', hoverId:null, openFaq:-1, menuOpen:false,
    w:null, canHover:true, reduced:false, pastHero:false, contactVisible:false,
    form:{name:'', email:'', building:'', kind:'', budget:''}, errors:{}, sent:false, wipe:'pending', delays:[]};
  titleRef = React.createRef<any>();
  heroRef = React.createRef<any>(); listRef = React.createRef<any>(); contactRef = React.createRef<any>(); logRef = React.createRef<any>(); workRef = React.createRef<any>(); procRef = React.createRef<any>(); navRef = React.createRef<any>(); tabRef = React.createRef<any>();
  get els() { return {hero:this.heroRef.current, list:this.listRef.current, contact:this.contactRef.current, log:this.logRef.current}; }

  hh() { return (this.state.w || 1280) >= 1024 ? 80 : 64; }

  applyPalette() {
    const p = PAL[this.props.palette] || PAL.rust;
    const r = document.documentElement.style;
    r.setProperty('--accent', p[0]); r.setProperty('--accent-deep', p[1]);
  }

  componentDidMount() {
    this.applyPalette();
    const mq = q => (window.matchMedia ? window.matchMedia(q).matches : false);
    const reduced = mq('(prefers-reduced-motion: reduce)');
    this.setState({canHover: mq('(hover: hover)'), reduced});
    this._check = () => {
      const s = this.state, hh = this.hh();
      const h = (s.page === 'work' && !s.caseId) ? this.els.list : this.els.hero;
      const c = this.els.contact;
      const pastHero = h ? h.getBoundingClientRect().bottom <= hh : false;
      const pr = this.procRef.current;
      if (!s.procIn && pr && pr.getBoundingClientRect().top < window.innerHeight * 0.7) this.setState({procIn:true});
      const contactVisible = c ? c.getBoundingClientRect().top < window.innerHeight - 80 : false;
      if (pastHero !== s.pastHero || contactVisible !== s.contactVisible) this.setState({pastHero, contactVisible});
    };
    this._measure = () => {
      const w = document.documentElement.clientWidth || window.innerWidth || 0;
      if (w < 200 || w === this.state.w) return;
      this.setState({w, menuOpen: w >= 1024 ? false : this.state.menuOpen}, this._check);
    };
    window.addEventListener('scroll', this._check, {passive:true});
    window.addEventListener('resize', this._measure, {passive:true});
    this._measure(); this._check();
    this.startWipe(reduced);
    if (!reduced) { this._li = setTimeout(() => this.setState({logoIn:true}), 120); this._la = setTimeout(() => this.setState({logoAi:true}), 700); } else this.setState({logoIn:true, logoAi:true});
    this.setupReveal();
    this.measureNav(); this.measureTabs();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { this.measureNav(); this.measureTabs(); });
  }

  measureNav() {
    const el = this.navRef.current;
    if (!el) return;
    const pos: Record<string, [number, number]> = {};
    el.querySelectorAll<HTMLElement>('[data-nav]').forEach(a => { pos[a.dataset.nav] = [a.offsetLeft, a.offsetWidth]; });
    if (JSON.stringify(pos) !== JSON.stringify(this.state.navPos)) this.setState({navPos:pos});
  }

  measureTabs() {
    const el = this.tabRef.current;
    if (!el) return;
    const pos: Record<string, [number, number]> = {};
    el.querySelectorAll<HTMLElement>('[data-tab]').forEach(b => { pos[b.dataset.tab] = [b.offsetLeft, b.offsetWidth]; });
    if (JSON.stringify(pos) !== JSON.stringify(this.state.tabPos)) this.setState({tabPos:pos});
  }

  setupReveal() {
    if (this.state.reduced || typeof IntersectionObserver === 'undefined') return;
    if (!this._io) this._io = new IntersectionObserver(es => es.forEach(en => {
      if (!en.isIntersecting) return;
      const el = en.target as HTMLElement;
      if (el.dataset.figrow) { const [fig, lab] = el.children as any; el.style.backgroundSize = '100% 1px'; if (fig) { fig.style.clipPath = 'inset(-0.2em -0.1em -0.3em -0.1em)'; fig.style.transform = 'none'; } if (lab) { lab.style.opacity = '1'; lab.style.transform = 'none'; } } else if (el.dataset.rise) { el.style.opacity = '1'; el.style.transform = 'none'; } else { el.style.clipPath = 'inset(-0.2em -0.1em -0.3em -0.1em)'; el.style.transform = 'none'; }
      this._io.unobserve(el);
    }), {rootMargin:'0px 0px -12% 0px'});
    document.querySelectorAll<HTMLElement>('[data-figrow]').forEach(el => {
      if (el.dataset.rv) return;
      el.dataset.rv = '1';
      const sibs = Array.from(el.parentElement.querySelectorAll<HTMLElement>(':scope > [data-figrow]'));
      const d = Math.max(0, sibs.indexOf(el)) * 140, ez = 'cubic-bezier(.2,.7,.2,1)';
      const [fig, lab] = el.children as any;
      el.style.backgroundSize = '0% 1px';
      el.style.transition = 'background-size 900ms cubic-bezier(.65,0,.35,1) ' + d + 'ms';
      if (fig) { fig.style.clipPath = 'inset(0 0 100% 0)'; fig.style.transform = 'translateY(0.2em)'; fig.style.transition = 'clip-path 700ms ' + ez + ' ' + (d + 250) + 'ms, transform 700ms ' + ez + ' ' + (d + 250) + 'ms'; }
      if (lab) { lab.style.opacity = '0'; lab.style.transform = 'translateY(8px)'; lab.style.transition = 'opacity 500ms ' + (d + 500) + 'ms, transform 500ms ' + ez + ' ' + (d + 500) + 'ms'; }
      this._io.observe(el);
    });
    document.querySelectorAll<HTMLElement>('[data-rise]').forEach(el => {
      if (el.dataset.rv) return;
      el.dataset.rv = '1';
      const sibs = Array.from(el.parentElement.querySelectorAll<HTMLElement>(':scope > [data-rise]'));
      const d = Math.max(0, sibs.indexOf(el)) * 80;
      el.style.opacity = '0'; el.style.transform = 'translateY(18px)';
      el.style.transition = 'opacity 600ms ' + d + 'ms, transform 600ms cubic-bezier(.2,.7,.2,1) ' + d + 'ms, padding 260ms cubic-bezier(.2,.7,.2,1), border-color 260ms, background-color 200ms, background-size 520ms cubic-bezier(.65,0,.35,1), background-position 260ms cubic-bezier(.2,.7,.2,1)';
      this._io.observe(el);
    });
    document.querySelectorAll<HTMLElement>('main h2, [data-reveal]').forEach(el => {
      if (el.dataset.rv) return;
      el.dataset.rv = '1';
      el.style.clipPath = 'inset(0 0 100% 0)'; el.style.transform = 'translateY(0.18em)';
      el.style.transition = 'clip-path 700ms cubic-bezier(.2,.7,.2,1), transform 700ms cubic-bezier(.2,.7,.2,1)';
      this._io.observe(el);
    });
  }

  componentDidUpdate(pp: AppProps) {
    if (pp.palette !== this.props.palette) this.applyPalette();
    document.body.style.overflow = this.state.menuOpen ? 'hidden' : '';
    if (this._check) this._check();
    this.setupReveal();
    this.measureNav(); this.measureTabs();
  }

  componentWillUnmount() {
    clearTimeout(this._li); clearTimeout(this._la);
    window.removeEventListener('scroll', this._check);
    window.removeEventListener('resize', this._measure);
    clearTimeout(this._wt);
    if (this._io) this._io.disconnect();
  }

  startWipe(reduced) {
    if (reduced || this.state.page !== 'home') { this.setState({wipe:'done'}); return; }
    const go = () => {
      const el = this.titleRef.current;
      if (!el) { this.setState({wipe:'done'}); return; }
      const tops: number[] = [], delays: number[] = [];
      el.querySelectorAll<HTMLElement>('[data-w]').forEach(sp => {
        const t = sp.offsetTop;
        let li = tops.findIndex(x => Math.abs(x - t) < 6);
        if (li < 0) { tops.push(t); li = tops.length - 1; }
        delays.push(li * 70);
      });
      this.setState({wipe:'run', delays});
      this._wt = setTimeout(() => this.setState({wipe:'done'}), 450 + tops.length * 70 + 80);
    };
    const fonts = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
    Promise.race([fonts, new Promise(r => setTimeout(r, 1200))]).then(() => requestAnimationFrame(go));
  }

  clientMarquee() {
    const {reduced, marqPaused} = this.state;
    const h = React.createElement;
    const logo = (c, i, g) => h('span', {key:g + i, 'aria-hidden': g ? 'true' : undefined, style:{flex:'none', display:'flex', alignItems:'center', height:'clamp(72px,8vw,112px)', padding:'0 clamp(28px,3.5vw,56px)', whiteSpace:'nowrap', fontSize:'clamp(1.375rem,2vw,2rem)', lineHeight:1, color:'#1A1917'}},
      c.src ? h('img', {src:c.src, alt:c.name, style:{height:'40%', width:'auto', display:'block'}}) : h('span', {style:c.s}, c.name));
    if (reduced) return h('div', {style:{display:'flex', flexWrap:'wrap', justifyContent:'center'}}, CLIENTS.map((c, i) => logo(c, i, 0)));
    const group = g => h('div', {key:'g' + g, style:{display:'flex', flex:'none'}}, CLIENTS.map((c, i) => logo(c, i, g)));
    return h('div', {role:'list', 'aria-label':'Client logos', onMouseEnter:() => this.setState({marqPaused:true}), onMouseLeave:() => this.setState({marqPaused:false}),
      style:{overflow:'hidden', WebkitMaskImage:'linear-gradient(90deg, transparent, #1A1917 8%, #1A1917 92%, transparent)', maskImage:'linear-gradient(90deg, transparent, #1A1917 8%, #1A1917 92%, transparent)'}},
      h('div', {style:{display:'flex', width:'max-content', animation:'mozsMarquee 45s linear infinite', animationPlayState: marqPaused ? 'paused' : 'running'}}, [group(0), group(1)]));
  }

  heroTitle() {
    const {wipe, delays} = this.state;
    const words = HERO.split(' ');
    const kids: React.ReactNode[] = [];
    words.forEach((w, i) => {
      const st: React.CSSProperties = {display:'inline-block'};
      if (wipe === 'pending') st.clipPath = 'inset(0 0 100% 0)';
      else if (wipe === 'run') st.animation = 'mozsWipe 450ms cubic-bezier(.2,.7,.2,1) ' + (delays[i] || 0) + 'ms both';
      kids.push(React.createElement('span', {key:i, 'data-w':'1', style:st}, w));
      if (i < words.length - 1) kids.push(' ');
    });
    return React.createElement('h1', {ref:this.titleRef, style:{margin:0, fontStretch:'68%', fontWeight:800,
      fontSize:'clamp(3rem, min(9vw, 15svh), 11rem)', lineHeight:0.88, textTransform:'uppercase', letterSpacing:'-0.02em'}}, kids);
  }

  scrollToEl(el, offset) {
    if (!el) return;
    window.scrollTo({top: el.getBoundingClientRect().top + window.scrollY - (offset || 0), behavior: this.state.reduced ? 'auto' : 'smooth'});
  }

  go(page, extra) {
    return (e) => {
      if (e && e.preventDefault) e.preventDefault();
      this.setState(Object.assign({page, caseId:null, profileId:null, procIn:false, menuOpen:false, hoverId:null, openFaq:-1, pastHero:false, contactVisible:false}, extra || {}), () => {
        window.scrollTo(0, 0);
        requestAnimationFrame(this._check);
      });
    };
  }

  renderVals() {
    const v: ViewModel = this._rv();
    const o = v._menuO, red = this.state.reduced;
    v.menuNav = (v.nav || []).map((n, i) => ({...n, ty: o ? '0' : '110%', d: o && !red ? (200 + i * 55) + 'ms' : '0ms'}));
    return v;
  }

  _rv(): ViewModel {
    const s = this.state, p = this.props;
    const w = s.w || 1280;
    const isLg = w >= 1024;
    const page = s.page;
    const isHome = page === 'home', isServices = page === 'services', isAbout = page === 'about', isWork = page === 'work', isTeam = page === 'team', isCareers = page === 'careers', isProfile = page === 'profile';
    const isCase = isWork && !!s.caseId, isWorkIndex = isWork && !s.caseId;
    const hasContact = isHome || isServices || isAbout || isTeam || isProfile;
    const featuredCount = Math.max(1, p.featuredCount ?? 4);
    const svcKey = norm(s.service || p.defaultService || 'ai');
    const svc = SERVICES[svcKey] || SERVICES.ai;

    const topField = isCase ? 'ink' : 'paper';
    const heroHasPrimary = isHome || isServices;
    const headerDark = !s.pastHero && topField !== 'paper' && !s.menuOpen;
    const showHdrBtn = (s.pastHero || !heroHasPrimary) && !s.contactVisible;

    const openCase = id => this.go('work', {caseId:id});
    const bookCall = (e) => {
      if (e && e.preventDefault) e.preventDefault();
      const run = () => this.scrollToEl(this.els.contact, 0);
      if (hasContact) this.setState({menuOpen:false}, run);
      else this.setState({page:'home', caseId:null, menuOpen:false}, () => requestAnimationFrame(run));
    };

    const filtered = PROJECTS.filter(pr => s.filter === 'all' || pr.svc === s.filter);
    const listProjects = isHome ? filtered.filter(x => !CASE_IDS.includes(x.id)).slice(0, featuredCount) : filtered;
    const listed = new Set(listProjects.map(x => x.id).concat(isHome ? CASE_IDS : []));
    const rows = listProjects.map(pr => ({
      name:pr.name, result:pr.result, discipline:pr.discipline, year:pr.year, media:pr.media,
      open:openCase(pr.id), enter:() => { if (this.state.hoverId !== pr.id) this.setState({hoverId:pr.id}); },
      thumbOpacity:(!s.canHover || s.hoverId === pr.id) ? 1 : 0
    }));

    const bands = ['games','ai','web'].map(k => {
      const sv = SERVICES[k];
      const pr = PROJECTS.find(x => x.svc === k && !listed.has(x.id));
      return {name:sv.name, blurb:sv.bandBlurb, tools:sv.bandTools, linkLabel:sv.bandLink,
        media: pr ? pr.media : sv.name + ' capture',
        ratio: pr ? pr.ratio : '16 / 9', go:this.go('services', {service:k}),
        enter:() => { if (this.state.bandHover !== k) this.setState({bandHover:k}); }, leave:() => { if (this.state.bandHover === k) this.setState({bandHover:null}); },
        lc: s.bandHover === k ? 'var(--accent)' : 'inherit', ax: s.bandHover === k ? '6px' : '0'};
    });

    const fmt = d => { const [y, m, dd] = d.split('-').map(Number); return dd + ' ' + MON[m - 1]; };
    const logItems = LOG.map(e => ({...e, dateLabel:fmt(e.date)}));
    const months: any[] = [];
    LOG.forEach((e, i) => {
      const [y, m] = e.date.split('-').map(Number);
      const label = MONL[m - 1] + ' ' + y;
      let g: any = months.find(x => x.label === label);
      if (!g) { g = {label, entries:[]}; months.push(g); }
      g.entries.push(logItems[i]);
      g.count = g.entries.length + (g.entries.length === 1 ? ' entry' : ' entries');
    });

    const openProfile = id => this.go('profile', {profileId:id});
    const recsFor = id => RECS.filter(r => r.about === id);
    const profileLabel = f => { const n = recsFor(f.id).length; return 'Profile and ' + n + (n === 1 ? ' recommendation' : ' recommendations'); };
    const mapRec = r => { const pr = PROJECTS.find(x => x.id === r.project) || PROJECTS[0]; const fo = FOUNDERS.find(x => x.id === r.about) || FOUNDERS[0];
      return {...r, project:pr.name, result:pr.result, fig:pr.figures[0].fig, figText:pr.figures[0].text, forName:fo.first, openCase:openCase(pr.id), openProfile:openProfile(fo.id)}; };
    const founders = FOUNDERS.map(f => ({name:f.name, role:f.role, email:f.email, mailto:'mailto:' + f.email, portrait:f.portrait,
      bio:(isAbout ? f.long : f.short).map(t => ({t})), openProfile:openProfile(f.id), profileLabel:profileLabel(f)}));
    const pfF = FOUNDERS.find(x => x.id === s.profileId) || FOUNDERS[0];
    const pfProjects = PROJECTS.filter(pr => pr.team.includes(pfF.first));
    const pfRecs = recsFor(pfF.id).map(mapRec);
    const pfOther = FOUNDERS.find(x => x.id !== pfF.id) || pfF;
    const pf = {name:pfF.name, first:pfF.first, role:pfF.role, email:pfF.email, mailto:'mailto:' + pfF.email, portrait:pfF.portrait,
      bio0:pfF.long[0], bioRest:pfF.long.slice(1).map(t => ({t})),
      facts:[{k:'Based in', v:pfF.based},{k:'Usually working on', v:TEAM_EXTRA[pfF.id].focus},{k:'Tools', v:TEAM_EXTRA[pfF.id].tools}],
      links:pfF.links,
      leads:Object.keys(SERVICES).filter(k => SERVICES[k].leadName === pfF.name).map(k => ({name:SERVICES[k].name, blurb:SERVICES[k].bandBlurb, go:this.go('services', {service:k})})),
      background:pfF.background,
      other:{name:pfOther.name, role:pfOther.role, open:openProfile(pfOther.id)},
      recs:pfRecs,
      projects:pfProjects.map(pr => ({name:pr.name, result:pr.result, discipline:pr.discipline, year:pr.year, media:pr.media, open:openCase(pr.id)})),
      log:logItems.filter(e => e.who === pfF.first)};
    const svcR = RECS.find(r => PROJECTS.find(x => x.id === r.project)?.svc === svcKey);
    const homeRecs = RECS.slice(0, Math.max(1, Math.min(RECS.length, p.recCount ?? 4))).map(mapRec);

    const cp = PROJECTS.find(x => x.id === s.caseId) || PROJECTS[0];
    const ci = PROJECTS.indexOf(cp);
    const np = PROJECTS[(ci + 1) % PROJECTS.length];
    const cs: any = {name:cp.name, result:cp.result, media:cp.media + ', full capture',
      facts:[{k:'Client', v:cp.client},{k:'Year', v:cp.year},{k:'What we built', v:cp.built},{k:'Team', v:cp.team},{k:'Duration', v:cp.duration}],
      sections:[{h:'The problem', t:cp.problem},{h:'What we built', t:cp.builtText},{h:'What changed', t:cp.changed}],
      figures:cp.figures,
      gallery:cp.gallery.map(c => ({caption:c, ratio:cp.ratio, maxW: cp.ratio === '4 / 5' ? '40rem' : '100%'}))};
    const csRec = RECS.find(r => r.project === cp.id);
    cs.hasRec = !!csRec; cs.rec = csRec ? mapRec(csRec) : {};
    const ex = PROJECTS.find(x => x.id === svc.example) || PROJECTS[0];

    const f = s.form, er = s.errors;
    const setField = k => e => { const v = e.target.value; this.setState(st => ({form:{...st.form, [k]:v}, errors:{...st.errors, [k]:null}})); };


    return {
      isLg, isSm:!isLg, hh:this.hh(),
      isHome, isServices, isAbout, isCase, isWorkIndex, hasContact, isTeam, isCareers, isProfile, pf, goTeam:this.go('team'),
      svcHasRec: !!svcR, svcRec: svcR ? mapRec(svcR) : {},
      showRecs: isHome && (p.showRecommendations ?? true), recFeat: homeRecs[0], recRest: homeRecs.slice(1),
      goCareers:this.go('careers'),
      clientMarquee: isHome ? this.clientMarquee() : null,
      teamFounders: FOUNDERS.map(f => ({openProfile:openProfile(f.id), profileLabel:profileLabel(f), name:f.name, role:f.role, email:f.email, mailto:'mailto:' + f.email, portrait:f.portrait, bio:f.long.map(x => ({t:x})), focus:TEAM_EXTRA[f.id].focus, tools:TEAM_EXTRA[f.id].tools})),
      bench: BENCH.map((b, i) => { const on = s.benchHover === i; return {...b, sc: on ? 1.04 : 1, nc: on ? 'var(--accent)' : 'inherit', enter:() => this.setState({benchHover:i}), leave:() => { if (this.state.benchHover === i) this.setState({benchHover:null}); }}; }), hireSteps:HIRE_STEPS, perks:PERKS,
      roles: ROLES.map(r => ({...r, mailto:'mailto:careers@mozs.ai?subject=' + encodeURIComponent(r.title.replace(/[\[\]]/g, ''))})),
      showList: isHome || isWorkIndex, showShared: isHome || isAbout,
      listPadTop: isWorkIndex ? 'clamp(112px,14vw,200px)' : 'clamp(64px,10vw,192px)',
      bleedRatio: w >= 640 ? '16 / 9' : '4 / 5', founderCols: w >= 640 ? 'minmax(0,5fr) minmax(0,7fr)' : 'minmax(0,1fr)', benchMin: w >= 640 ? '15rem' : '9rem', rowWide: w >= 720, rowNarrow: w < 720,
      hdrBg: (s.pastHero || topField === 'paper') ? 'rgba(244,241,236,.82)' : topField === 'ink' ? 'rgba(0,0,0,.7)' : 'rgba(26,25,23,.85)',
      hdrFg: headerDark ? '#F4F1EC' : '#1A1917',
      hdrDark: headerDark ? '1' : undefined,
      hdrBtnPaper: showHdrBtn && !headerDark, hdrBtnDark: showHdrBtn && headerDark,
      hdrEmailOp: showHdrBtn ? 0 : 1, hdrEmailY: showHdrBtn ? '-18px' : '0', hdrEmailVis: showHdrBtn ? 'hidden' : 'visible', hdrEmailVd: showHdrBtn ? '420ms' : '0s',
      hdrBtnOp: showHdrBtn ? 1 : 0, hdrBtnY: showHdrBtn ? '0' : '18px', hdrBtnVis: showHdrBtn ? 'visible' : 'hidden', hdrBtnVd: showHdrBtn ? '0s' : '420ms',
      menuOpen: s.menuOpen, menuOpenStr: String(s.menuOpen),
      ...(() => { const o = !!s.menuOpen, dur = s.reduced ? '0ms' : '560ms'; return {menuHidden: o ? undefined : 'true', menuClip: o ? 'inset(0 0 0 0)' : 'inset(0 0 100% 0)', menuVis: o ? 'visible' : 'hidden', menuVd: o ? '0s' : dur, menuDur: dur,
        menuFadeOp: o ? 1 : 0, menuFadeY: o ? '0' : '16px', menuFadeD: o && !s.reduced ? '440ms' : '0ms', _menuO: o}; })(),
      openMenu: () => this.setState({menuOpen:true}), closeMenu: () => this.setState({menuOpen:false}),
      showBar: !isLg && s.pastHero && !s.contactVisible && !s.menuOpen,
      footPad: isLg ? '48px' : '112px',
      navRef:this.navRef, navLeave:() => { if (this.state.navHover) this.setState({navHover:null}); },
      ...(() => { const cur = isWork ? 'work' : isServices ? 'services' : isAbout ? 'about' : (isTeam || isProfile) ? 'team' : isCareers ? 'careers' : null;
        const t = s.navHover || cur, ps = (s.navPos || {})[t];
        return {navX: ps ? ps[0] : 0, navW: ps ? ps[1] : 0, navOp: ps ? 1 : 0}; })(),
      nav: [['work','Work',isWork],['services','Services',isServices],['about','About',isAbout],['team','Team',isTeam || isProfile],['careers','Careers',isCareers]].map(([k, label, cur]) => ({
        label, key:k, enter:() => { if (this.state.navHover !== k) this.setState({navHover:k}); }, go:this.go(k), deco: cur ? 'underline' : 'none', current: cur ? 'page' : undefined,
        bg: 'transparent', fg: 'inherit',
        hoverBg: cur ? 'var(--accent-deep)' : (headerDark ? 'rgba(244,241,236,.14)' : 'color-mix(in srgb, var(--accent) 12%, transparent)')})),
      navRule: headerDark ? 'rgba(244,241,236,.35)' : 'rgba(0,0,0,.18)',
      footLinks: [{label:'Work', go:this.go('work')},{label:'Services', go:this.go('services')},{label:'About', go:this.go('about')},{label:'Team', go:this.go('team')},{label:'Careers', go:this.go('careers')},
        {label:'Logbook', go:(e) => { if (e && e.preventDefault) e.preventDefault(); this.setState({page:'about', caseId:null}, () => requestAnimationFrame(() => this.scrollToEl(this.els.log, this.hh()))); }}],
      socials: ['GitHub','LinkedIn','Steam'],
      goHome:this.go('home'),
      logo: Object.assign({on:() => { if (!this.state.logoHover) this.setState({logoHover:true}); }, off:() => { if (this.state.logoHover) this.setState({logoHover:false}); }, ai: (s.logoAi || s.reduced) ? 'var(--accent)' : 'inherit', op: (s.logoIn || s.reduced) ? 1 : 0},
        ...[0,1,2,3,4,5].map(i => ({['y' + i]: !(s.logoIn || s.reduced) ? '.45em' : (s.logoHover && !s.reduced) ? (i > 3 ? '-6px' : '-3px') : '0'}))), goWork:this.go('work'), goServices:this.go('services'),
      goLogbook:(e) => { if (e && e.preventDefault) e.preventDefault(); this.setState({page:'about', caseId:null, menuOpen:false}, () => requestAnimationFrame(() => this.scrollToEl(this.els.log, this.hh()))); },
      toShipped:(e) => { if (e && e.preventDefault) e.preventDefault(); this.scrollToEl(this.workRef.current, this.hh()); }, workRef:this.workRef,
      bookCall, heroRef:this.heroRef, listRef:this.listRef, contactRef:this.contactRef, logRef:this.logRef,
      heroTitle: isHome ? this.heroTitle() : null,
      logTop: logItems.slice(0, 2), months,
      showWorkFilters: p.showWorkFilters ?? true,
      filters: FILTERS.map(fl => ({label:fl.label, pressed:String(s.filter === fl.key),
        fg: s.filter === fl.key ? '#1A1917' : '#6B6760', pad: s.filter === fl.key ? '16px' : '0px', sq: s.filter === fl.key ? '7px 7px' : '0 0', count: String(PROJECTS.filter(pr => fl.key === 'all' || pr.svc === fl.key).length),
        pick:() => this.setState({filter:fl.key, hoverId:null})})),
      rows, rowLeave:() => this.setState({hoverId:null}),
      bands, founders, procRef:this.procRef,
      bx: Object.fromEntries(['hdr1','hdr2','menu','hero','svc','prof','send'].map(k => { const on = s.hb === k; return [k, {
        on:() => { if (this.state.hb !== k) this.setState({hb:k}); }, off:() => { if (this.state.hb === k) this.setState({hb:null}); },
        tl: 'none', tr: 'none', bl: 'none', br: 'none', bo: 1}]; })),
      procLine: (s.reduced || s.procIn) ? 1 : 0, procFactsOp: (s.reduced || s.procIn) ? 1 : 0,
      steps: STEPS.map((st, i) => { const on = s.reduced || s.procIn; return {...st, dot: on ? 'var(--accent)' : 'transparent', ring: on ? 'var(--accent)' : '#1A1917', dotScale: on ? 1 : 0.6, op: on ? 1 : 0, ty: on ? '0' : '12px', delay: (i * 300) + 'ms', tDelay: (i * 300 + 120) + 'ms'}; }), faqPos: isLg ? 'sticky' : 'static',
      caseStudies: CASE_IDS.map((id, i) => { const c = PROJECTS.find(x => x.id === id); return {name:c.name, result:c.result, media:c.media,
        discipline:c.discipline, year:c.year, client:c.client, figures:c.figures.slice(0, 2), dir: i % 2 ? 'row-reverse' : 'row', open:openCase(id)}; }),
      facts:[{big:'14 projects', small:'Shipped since [year]'},{big:'6 weeks', small:'To a first release, on most projects'},{big:'Yours', small:'The code, the accounts and the docs'}],
      showFaq: p.showFaq ?? true,
      faq: FAQ.map((q, i) => { const open = s.openFaq === i; return {q:q.q, a:q.a, expanded:String(open),
        rows: open ? '1fr' : '0fr', vt: open ? 'scaleY(0)' : 'scaleY(1)',
        toggle:() => this.setState({openFaq: open ? -1 : i})}; }),
      svc, svcExample:{name:ex.name, result:ex.result, media:ex.media, open:openCase(ex.id)},
      tabRef:this.tabRef, tabLeave:() => { if (this.state.tabHover) this.setState({tabHover:null}); },
      ...(() => { const ps = (s.tabPos || {})[s.tabHover || svcKey]; return {tabX: ps ? ps[0] : 0, tabW: ps ? ps[1] : 0, tabOp: ps ? 1 : 0}; })(),
      svcTabs: ['games','ai','web'].map(k => ({key:k, enter:() => { if (this.state.tabHover !== k) this.setState({tabHover:k}); }, label:SERVICES[k].tab, selected:String(k === svcKey),
        line: k === svcKey ? 'var(--accent)' : 'transparent', pick:() => this.setState({service:k})})),
      cs, nextCase:{name:np.name, result:np.result, open:openCase(np.id)},
      sent:s.sent, notSent:!s.sent, form:f,
      err:{name:er.name, email:er.email, building:er.building, hasName:!!er.name, hasEmail:!!er.email, hasBuilding:!!er.building,
        nameInvalid:er.name ? 'true' : undefined, emailInvalid:er.email ? 'true' : undefined, buildingInvalid:er.building ? 'true' : undefined},
      setName:setField('name'), setEmail:setField('email'), setBuilding:setField('building'), setBudget:setField('budget'),
      budgetChips: BUDGETS.filter(bo => bo.v).map(bo => { const on = f.budget === bo.v; return {label:bo.label, pressed:String(on), bg: on ? 'var(--accent)' : 'transparent', fg: on ? '#F4F1EC' : '#F4F1EC', border: on ? 'var(--accent)' : 'rgba(244,241,236,.45)', dot: on ? 'currentColor' : 'transparent', pick:() => this.setState(st => ({form:{...st.form, budget: on ? '' : bo.v}}))}; }),
      kinds: KINDS.map(k => { const on = f.kind === k; return {label:k, pressed:String(on), bg: on ? 'var(--accent)' : 'transparent', fg: on ? '#F4F1EC' : '#F4F1EC', border: on ? 'var(--accent)' : 'rgba(244,241,236,.45)', dot: on ? 'currentColor' : 'transparent',
        pick:() => this.setState(st => ({form:{...st.form, kind: on ? '' : k}}))}; }),
      budgets: BUDGETS,
      submit:(e) => {
        if (e && e.preventDefault) e.preventDefault();
        const x = this.state.form, n: Record<string, string> = {};
        if (!x.name.trim()) n.name = 'Tell us your name';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(x.email.trim())) n.email = 'Enter an email we can reply to';
        if (!x.building.trim()) n.building = 'A sentence or two about the project is enough';
        if (Object.keys(n).length) { this.setState({errors:n}); return; }
        this.setState({sent:true, errors:{}});
      }
    };
  }

  render() {
    const v = this.renderVals();
    return (
      <>
        {v.isLg ? <DesktopHeader v={v} /> : null}
        {v.isSm ? <MobileHeader v={v} /> : null}
        {v.isSm ? <MobileMenu v={v} /> : null}
        <main>
          {v.isHome ? <HomeIntro v={v} /> : null}
          {v.isAbout ? <AboutHero v={v} /> : null}
          {v.isServices ? <ServicePage v={v} /> : null}
          {v.isCase ? <CaseStudy v={v} /> : null}
          {v.showList ? <WorkList v={v} /> : null}
          {v.isHome ? <HomeServices v={v} /> : null}
          {v.showShared ? <StudioSection v={v} /> : null}
          {v.isHome ? <HomeFaq v={v} /> : null}
          {v.isAbout ? <AboutLogbook v={v} /> : null}
          {v.isTeam ? <TeamPage v={v} /> : null}
          {v.isProfile ? <ProfilePage v={v} /> : null}
          {v.isCareers ? <CareersPage v={v} /> : null}
          {v.hasContact ? <ContactSection v={v} /> : null}
        </main>
        <Footer v={v} />
        {v.showBar ? <MobileBookBar v={v} /> : null}
      </>
    );
  }
}
