
import { NewsUpdate, Receipt, NavLink } from './types.ts';

export const DONATE_URL = "https://donate.stripe.com/dRmbJ15smgSZ1ri7aR93y09";
export const LOGO_URL = "https://i.ibb.co/G11m4SQ/save-rojava-logo-1.png";

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'Who Are We', href: '#who-are-we' },
  { name: 'News & Updates', href: '#news' },
  { name: 'Transparency', href: '#transparency' },
];

export const NEWS_UPDATES: NewsUpdate[] = [
  {
    id: 'news-1',
    date: 'Jan 2026',
    title: 'Assault on Aleppo\'s Kurdish Neighborhoods',
    content: 'Syrian government forces have launched a coordinated assault on the Kurdish-majority neighborhoods of Sheikh Maqsoud and Ashrafieh in Aleppo. This offensive includes heavy shelling and a tightening blockade.',
    severity: 'urgent'
  },
  {
    id: 'news-2',
    date: 'Jan 2026',
    title: 'ISIS Escapes Following Army Assault',
    content: 'Recent offensives by the Syrian Army have led to a dangerous security vacuum in several regions. Reports indicate that multiple ISIS members have successfully escaped from detention facilities.',
    severity: 'urgent'
  },
  {
    id: 'news-3',
    date: 'Jan 2026',
    title: 'Regional Instability and Civilian Toll',
    content: 'As the conflict intensifies across northern Syria, the humanitarian toll continues to rise. The Save Rojava project is monitoring the situation closely.',
    severity: 'info'
  }
];

export const RECEIPTS: Receipt[] = [
  {
    id: 'TX-ROJ-001',
    weekRange: 'Jan 01 - Jan 07, 2026',
    amount: '$0.00',
    date: '2026-01-08',
    status: 'Completed',
    proofUrl: '#'
  }
];
