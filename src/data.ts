import type { Founder, LogEntry, Project, Service, Step, FaqItem, Rec, Client, TeamExtra, BenchMember, Role, Perk, Filter, Budget } from './types';

export const PAL: Record<string, [string, string]> = {rust:['#A84A24','#8A3B1C'], forest:['#2F5D46','#234836'], navy:['#2B4470','#1F3456'], graphite:['#3A3835','#262421']};
export const MON: string[] = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
export const MONL: string[] = ['January','February','March','April','May','June','July','August','September','October','November','December'];
export const HERO: string = "We build games and AI systems";
export const norm = (v: string): string => (v === 'game' ? 'games' : v);

export const FOUNDERS: Founder[] = [
  {id:'a', name:'Saihaj Shhabaz', first:'Saihaj', role:'Games and engines', email:'saihaj@mozs.ai', portrait:'Portrait of Saihaj Shhabaz, 4:5',
   based:'[City, timezone]', links:[{label:'LinkedIn', href:'#'},{label:'GitHub', href:'#'}],
   background:[{when:'[Year] to now', role:'Co-founder', where:'MOZSAI'},{when:'[Year] to [Year]', role:'[Role]', where:'[Studio or company]'},{when:'[Year] to [Year]', role:'[Role]', where:'[Studio or company]'}],
   short:["I've spent [n] years in Unity and Unreal. Most of my work is getting a game from fun prototype to a build that passes store review."],
   long:["I've spent [n] years in Unity and Unreal. Most of my work is getting a game from fun prototype to a build that passes store review.", "[One more sentence: past studios or titles.]"]},
  {id:'b', name:'Moiz Khan', first:'Moiz', role:'Web and AI', email:'moiz@mozs.ai', portrait:'Portrait of Moiz Khan, 4:5',
   based:'[City, timezone]', links:[{label:'LinkedIn', href:'#'},{label:'GitHub', href:'#'}],
   background:[{when:'[Year] to now', role:'Co-founder', where:'MOZSAI'},{when:'[Year] to [Year]', role:'[Role]', where:'[Company]'},{when:'[Year] to [Year]', role:'[Role]', where:'[Company]'}],
   short:["I build the AI agents and apps, and hook them up to the tools you already use. If something I built breaks, you'll hear it from me first."],
   long:["I build the AI agents and apps, and hook them up to the tools you already use. If something I built breaks, you'll hear it from me first.", "[One more sentence: where you worked before MOZSAI.]"]}
];

// Update weekly. Newest first.
export const LOG: LogEntry[] = [
  {date:'2026-09-28', who:'Saihaj', text:'Ashen Vale 1.2 is live on Steam. Fixed the save bug on Steam Deck.'},
  {date:'2026-09-22', who:'Moiz', text:'The logistics agent booked its 1,000th load without anyone touching it.'},
  {date:'2026-09-15', who:'Saihaj', text:'Started a vertical slice for a tower-defence prototype. Twelve days to demo.'},
  {date:'2026-09-03', who:'Moiz', text:'Moved the field service app to a new sync queue. Conflicts dropped to [n] a week.'},
  {date:'2026-08-26', who:'Saihaj', text:'Controller remapping landed in Ashen Vale. It took longer than the whole save rewrite.'},
  {date:'2026-08-12', who:'Moiz', text:"Handed the studio site over. Their producer shipped two page edits the same afternoon."}
];

export const PROJECTS: Project[] = [
  {id:'p1', name:'Ashen Vale', svc:'games', discipline:'Game', year:'2026', ratio:'16 / 9', media:'Ashen Vale gameplay, 40 seconds',
   result:'Went from 22fps to a locked 60 and launched on the announced date.',
   client:'[Indie studio name]', built:'Engineering from prototype to Steam release', team:'Saihaj', duration:'4 months',
   problem:'A 22fps prototype, a corrupting save system and a Steam date four months out.',
   builtText:'Rebuilt streaming and saves, cut draw calls by two thirds, added controllers and Steam.',
   changed:'Launched on the announced date at a locked 60fps.',
   figures:[{fig:'22 to 60fps', text:'Frame rate at launch'},{fig:'4 months', text:'Prototype to Steam release'}],
   gallery:['Ashen Vale, streaming a forest biome with no load screen','Ashen Vale save and load on Steam Deck']},
  {id:'p2', name:'Freight booking agent', svc:'ai', discipline:'AI', year:'2026', ratio:'3 / 2', media:'Load-booking agent dashboard, screen capture',
   result:'Loads now get booked minutes after a carrier replies, with nobody touching them.',
   client:'[Logistics broker]', built:'Multi-agent email triage and booking', team:'Moiz', duration:'6 weeks to the first live run',
   problem:'Four coordinators spent every morning copying carrier rates into a spreadsheet.',
   builtText:'A supervisor agent triages mail and hands booking to specialist agents, with approval over a set amount.',
   changed:'Loads book minutes after a carrier replies. Coordinators handle exceptions.',
   figures:[{fig:'Hours to minutes', text:'Time to book a load'},{fig:'4 mornings a week', text:'Coordinator time returned'},{fig:'1,000 loads', text:'Booked unattended'}],
   gallery:['Agent run log with the approval step','Carrier email classified and routed']},
  {id:'p3', name:'Field service app', svc:'web', discipline:'Mobile', year:'2025', ratio:'4 / 5', media:'Technician app, job sheet screen',
   result:'Technicians file job sheets on site, so nobody re-types them in the evening.',
   client:'[Regional service company]', built:'Offline-first technician app and dispatch dashboard', team:'Moiz', duration:'[n] months',
   problem:'No signal on site, so every earlier app had failed.',
   builtText:'An offline-first React Native app with safe sync, plus a dispatch dashboard.',
   changed:'Job sheets arrive complete. No more evening re-typing.',
   figures:[{fig:'0 re-typing shifts', text:'Evening re-typing after rollout'}],
   gallery:['Technician app, offline job sheet','Dispatch dashboard, day view']},
  {id:'p4', name:'Tower arcade prototype', svc:'games', discipline:'Game', year:'2025', ratio:'16 / 9', media:'Tower arcade vertical slice, 30 seconds',
   result:'Playable in twelve days, and it helped close the funding round.',
   client:'[Studio name]', built:'Single-level vertical slice', team:'Saihaj', duration:'12 days',
   problem:'Twelve days to a playable build, with art still changing.',
   builtText:'One level with the core loop, running on a laptop with no setup.',
   changed:'Investors played it in the meeting. The round closed.',
   figures:[{fig:'12 days', text:'Kickoff to playable slice'}],
   gallery:['Tower arcade core loop','Tower arcade build running on a laptop']},
  {id:'p5', name:'Support triage automation', svc:'ai', discipline:'AI', year:'2025', ratio:'3 / 2', media:'Support triage queue, screen capture',
   result:'First replies go out in [minutes] instead of [hours].',
   client:'[SaaS company]', built:'Ticket classification, drafting and routing', team:'Moiz', duration:'[n] weeks',
   problem:'Two thirds of tickets were the same few questions.',
   builtText:'Tagging, drafting and routing, with anything uncertain sent to a person.',
   changed:'Repetitive tickets clear themselves.',
   figures:[{fig:'[x]% faster', text:'Median first response'}],
   gallery:['Triage queue with drafted replies','Escalation rules editor']},
  {id:'p6', name:'Studio marketing site', svc:'web', discipline:'Web', year:'2025', ratio:'16 / 9', media:'Studio site, desktop and mobile',
   result:'The site loads in under a second on mobile, down from about eight.',
   client:'[Game studio]', built:'Static site with an editable content layer', team:'Saihaj and Moiz', duration:'[n] weeks',
   problem:'An eight-second mobile load, and every copy change went through an agency.',
   builtText:'A static site with a content layer the producer edits.',
   changed:'Same-day edits, no developer tickets.',
   figures:[{fig:'Under 1 second', text:'Mobile load time'},{fig:'0 developer tickets', text:'Since handover'}],
   gallery:['Studio site home page, desktop','Studio site game page, mobile']}
];

export const SERVICES: Record<string, Service> = {
  games:{name:'Games', tab:'Games', cta:'Book a call about games', example:'p1',
    headline:'Games, prototype to store',
    lead:'Unity and Unreal, through the part most projects stall on.',
    leadName:'Saihaj Shhabaz', leadRole:'Leads game projects', leadPortrait:'Portrait of Saihaj Shhabaz',
    quote:"Most games arrive 70% done. The last 30% is the job.",
    deliverables:[
      {title:'Vertical slices', body:'A playable build in weeks, ready to pitch.'},
      {title:'Full production builds', body:'Systems, pipeline and tooling.'},
      {title:'Porting and platform work', body:'Console and mobile, through certification.'},
      {title:'Performance passes', body:'Frame time, load times, input feel.'},
      {title:'Rescue projects', body:'Half-built games, finished and shipped.'},
      {title:'Post-launch patches', body:'Fixes and updates after release.'}],
    figures:[
      {fig:'12 days', text:'Kickoff to playable slice'},
      {fig:'22 to 60fps', text:'Frame rate at launch'},
      {fig:'4 months', text:'Prototype to Steam release'}],
    tools:'Unity, Unreal, C#, C++, HLSL, Steamworks and the console SDKs. [Founders to confirm]',
    bandBlurb:'From a playable prototype to a build that passes store review: performance, saves, controllers and certification.',
    bandTools:'Unity, Unreal, C#, C++. [Founders to confirm]', bandLink:'More on games'},
  ai:{name:'AI agents and automation', tab:'AI', cta:'Book a call about AI', example:'p2',
    headline:'AI agents in production',
    lead:'One daily process, run by an agent, with a person approving what matters.',
    leadName:'Moiz Khan', leadRole:'Leads AI projects', leadPortrait:'Portrait of Moiz Khan',
    quote:"You don't need a chatbot. You need one tedious process gone.",
    deliverables:[
      {title:'Email triage agents', body:'Inbox sorted before anyone opens it.'},
      {title:'Document extraction pipelines', body:'Documents into clean data.'},
      {title:'Internal tools with an approval step', body:'The agent drafts, a person approves.'},
      {title:'Multi-agent systems', body:'Specialist agents, full audit trail.'},
      {title:'Evaluation and monitoring', body:'Know when quality drifts.'}],
    figures:[
      {fig:'6 weeks', text:'First call to live agent'},
      {fig:'Hours to minutes', text:'Time to book a freight load'},
      {fig:'4 mornings a week', text:'Coordinator time returned'}],
    tools:'Claude, Python, TypeScript, Temporal and Postgres, running on your own AWS or Fly.io account. [Founders to confirm]',
    bandBlurb:'An agent that takes over one job your team does by hand every day, and checks with a person before anything expensive.',
    bandTools:'Claude, Python, TypeScript, Temporal, Postgres. [Founders to confirm]', bandLink:'More on AI agents'},
  web:{name:'Web and mobile', tab:'Web and mobile', cta:'Book a call about web or mobile', example:'p3',
    headline:'Web and mobile your team can run',
    lead:'Apps, dashboards and sites on a stack any developer knows.',
    leadName:'Moiz Khan', leadRole:'Leads web and mobile projects', leadPortrait:'Portrait of Moiz Khan',
    quote:"If you need us to change the copy, we built it wrong.",
    deliverables:[
      {title:'Web applications', body:'Dashboards, tools and portals.'},
      {title:'iOS and Android apps', body:'One React Native codebase, offline-ready.'},
      {title:'Marketing and studio sites', body:'Fast sites your team edits.'},
      {title:'Backends and APIs', body:'Services and integrations behind the UI.'},
      {title:'Rebuilds and migrations', body:'Off the old stack, without downtime.'}],
    figures:[
      {fig:'Under 1 second', text:'Mobile load time'},
      {fig:'0 developer tickets', text:'Since handover'}],
    tools:'Next.js, React, React Native, TypeScript, Postgres and Sanity, deployed on Vercel, Fly.io or Cloudflare. [Founders to confirm]',
    bandBlurb:'Web apps, dashboards and mobile apps, built with tools your next developer will already know.',
    bandTools:'Next.js, React Native, TypeScript, Postgres. [Founders to confirm]', bandLink:'More on web and mobile'}
};

export const STEPS: Step[] = [
  {when:'Week 0', a:'A 30-minute call', b:"Free. Tell us what you're building."},
  {when:'Week 1', a:'A written plan', b:'Scope, price and date. Nothing starts until you sign.'},
  {when:'Weeks 2–6', a:'A new build every week', b:"You test it and tell us what's off."},
  {when:'Launch', a:'We ship it', b:'Then hand over the code and the accounts.'},
  {when:'+3 months', a:'We stick around', b:'Bug fixes and tuning are included.'}
];

export const FAQ: FaqItem[] = [
  {q:'How much does a project cost?', a:'[Founders: add a typical range.] You get a fixed price in writing in the first week, before you commit to anything.'},
  {q:'Who actually works on my project?', a:"One of the founders leads it, with engineers from our team doing the build. You'll always know who's on it."},
  {q:'Who owns the code?', a:'You do, from day one. It lives in your repo, on your accounts.'},
  {q:'Where are you, and when are you online?', a:"[Founders: where you're based and the hours you overlap with clients.]"},
  {q:'Can you pick up a project someone else started?', a:"Yes, it's a lot of what we do. We start with a short paid code review so we both know what we're taking on."},
  {q:'Will you sign an NDA?', a:'Yes. Send it over before the first call.'},
  {q:'What happens after launch?', a:'We fix bugs and tune things for three months at no extra cost. After that you can keep us on, or hand the code to anyone.'}
];

// Placeholder copy: replace with real, attributed client recommendations. First entry is featured on the home page.
export const RECS: Rec[] = [
  {id:'r2', project:'p2', about:'b', name:'[Client name]', role:'Head of operations', company:'[Logistics broker]', portrait:'Portrait of the logistics client',
   text:"Our coordinators used to spend their mornings copying rates into spreadsheets. Now the agent books the loads and they just deal with the odd ones."},
  {id:'r1', project:'p1', about:'a', name:'[Client name]', role:'Co-founder', company:'[Indie studio name]', portrait:'Portrait of the studio co-founder',
   text:"We'd been stuck at 22fps for months. Saihaj got us to 60 in a few weeks, and we launched on the day we'd announced."},
  {id:'r3', project:'p3', about:'b', name:'[Client name]', role:'Operations manager', company:'[Regional service company]', portrait:'Portrait of the field service client',
   text:"Two agencies had a go at this app before us, and it never worked without signal. This one does."},
  {id:'r4', project:'p4', about:'a', name:'[Client name]', role:'Creative director', company:'[Studio name]', portrait:'Portrait of the creative director',
   text:"Twelve days after kickoff, our investors were playing the build in the meeting."},
  {id:'r5', project:'p6', about:'a', name:'[Client name]', role:'Producer', company:'[Game studio]', portrait:'Portrait of the producer',
   text:"I can update the site myself now. I haven't had to ask a developer for anything since."}
];

export const CASE_IDS: string[] = ['p1','p2'];
// Replace with real client logos: add src:'logos/name.svg' to show an image instead of the wordmark.
export const CLIENTS: Client[] = [
  {name:'[Indie studio]', s:{fontStretch:'125%', fontWeight:800}},
  {name:'[Logistics broker]', s:{fontStretch:'70%', fontWeight:700, textTransform:'uppercase', letterSpacing:'.04em'}},
  {name:'[Regional service co.]', s:{fontStretch:'100%', fontWeight:400, fontStyle:'italic'}},
  {name:'[SaaS company]', s:{fontStretch:'110%', fontWeight:600, letterSpacing:'-.03em'}},
  {name:'[Game studio]', s:{fontStretch:'62%', fontWeight:900, textTransform:'uppercase'}},
  {name:'[Publisher]', s:{fontStretch:'90%', fontWeight:300, textTransform:'uppercase', letterSpacing:'.18em'}},
  {name:'[Fintech startup]', s:{fontStretch:'100%', fontWeight:700}},
  {name:'[Agency]', s:{fontStretch:'80%', fontWeight:500, fontStyle:'italic', letterSpacing:'-.02em'}}
];
export const TEAM_EXTRA: Record<string, TeamExtra> = {
  a:{focus:'Game engineering, performance and platform work', tools:'Unity, Unreal, C#, C++, HLSL. [Confirm]'},
  b:{focus:'AI agents, automations, web and mobile products', tools:'Claude, Python, TypeScript, Next.js, React Native. [Confirm]'}
};
export const BENCH: BenchMember[] = [
  {name:'[Name]', role:'3D environment artist', note:'World art and visual passes.', portrait:'Portrait of the 3D artist'},
  {name:'[Name]', role:'Sound designer', note:'Audio in Wwise or FMOD.', portrait:'Portrait of the sound designer'},
  {name:'[Name]', role:'QA lead', note:'Test plans and certification.', portrait:'Portrait of the QA lead'},
  {name:'[Name]', role:'Product designer', note:'Interface and flow design.', portrait:'Portrait of the product designer'}
];
export const ROLES: Role[] = [
  {title:'[Unity gameplay engineer]', body:'Gameplay systems on a live Steam title.', type:'Contract, [3 to 6 months]', where:'Remote, [time zone overlap]'},
  {title:'[3D environment artist]', body:'World art for a survival game.', type:'Contract, per project', where:'Remote'},
  {title:'[Full-stack TypeScript developer]', body:'Dashboards and integrations. Next.js and Postgres.', type:'Contract, [part time]', where:'Remote, [time zone overlap]'}
];
export const HIRE_STEPS: Step[] = [
  {when:'Send work', a:'Something you built', b:'A link, repo or build.'},
  {when:'Call', a:'30 minutes', b:'With both founders.'},
  {when:'Paid task', a:'Real project work', b:'Paid at your rate.'},
  {when:'Answer', a:'Yes or no, with reasons', b:'[Within a week.]'}
];
export const PERKS: Perk[] = [
  {title:'Remote, with overlap', body:'[n] hours of weekday overlap. Nothing more.'},
  {title:'Direct line to the founders', body:'Same-day feedback.'},
  {title:'Your name on the work', body:'Credited, with client approval.'},
  {title:'Paid on time', body:'[Payment terms to confirm.]'}
];
export const FILTERS: Filter[] = [{key:'all',label:'All'},{key:'games',label:'Games'},{key:'ai',label:'AI'},{key:'web',label:'Web and mobile'}];
export const KINDS: string[] = ['Game','AI','Web or mobile','Not sure'];
export const BUDGETS: Budget[] = [{v:'',label:'Choose a range'},{v:'lt15',label:'Under $15k'},{v:'15-40',label:'$15k to $40k'},{v:'40-100',label:'$40k to $100k'},{v:'gt100',label:'Over $100k'},{v:'unsure',label:'Not sure yet'}];
