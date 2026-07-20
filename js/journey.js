const journeyData = [
    {
        id: 'acc-today',
        era: 'Today',
        title: 'Venture Builder & Strategic Advisor',
        projects: 'PM Copilot AI Engine, Society OS MVP, Real Estate Enterprise AI Transformation Blueprint.',
        achievements: 'Designed multi-tenant platform architecture serving 100K+ housing communities.',
        lessons: 'Operational adoption defines technology success; start with user workflows, not tech stacks.',
        skills: 'GenAI Architecture, SaaS Monetization, Venture Capital Advisory.'
    },
    {
        id: 'acc-2020',
        era: '2020',
        title: 'Strategy & Enterprise Transformation',
        projects: 'Municipal Digital Citizen Engagement Engine, Corporate Transformation Roadmaps.',
        achievements: 'Delivered WCAG 2.2 compliant engagement architectures for government clients.',
        lessons: 'Enterprise alignment requires commercial clarity at the C-suite level before execution begins.',
        skills: 'Operating Model Design, Enterprise Strategy, GovTech Compliance.'
    },
    {
        id: 'acc-2015',
        era: '2015',
        title: 'Business Operations Leadership',
        projects: 'Global Software Delivery Programs, Multi-million Dollar Portfolio Governance.',
        achievements: 'Managed $36M+ contract portfolios while directing cross-functional delivery units of 100+ members.',
        lessons: 'Predictive risk recovery is far more cost-effective than post-escalation program fixes.',
        skills: 'P&L Management, Global Team Leadership, Risk Recovery.'
    }
];
// Leadership Era Detailed Dataset
const journeyEraDetails = {
    'today': {
        role: 'Venture Builder & Strategic Advisor',
        period: 'Today',
        tag: 'ACTIVE PHASE',
        focus: 'Creating scalable business solutions, incubating AI-driven platforms, and advising executive leadership teams on operational transformation.',
        highlights: [
            'Incubating proprietary platforms: PM Copilot, Society OS, and Campus OS',
            'Structuring B2B SaaS monetization strategies and multi-tenant architectures',
            'Partnering with founders and enterprises to validate market opportunities'
        ],
        philosophy: 'Technology is an enabler. Business outcomes are the objective.',
        lesson: 'Operational adoption defines technology success; start with user workflows, not tech stacks.'
    },
    '2020': {
        role: 'Strategy & Enterprise Transformation',
        period: '2020',
        tag: 'STRATEGY PHASE',
        focus: 'Identified enterprise transformation opportunities, designed modern digital operating models, and mapped multi-year technology roadmaps.',
        highlights: [
            'Architected AI Transformation Blueprint for real estate developers',
            'Designed WCAG 2.2 compliant Digital Citizen Engagement platform for municipalities',
            'Re-engineered organizational workflows to remove legacy system bottlenecks'
        ],
        philosophy: 'Better businesses start with better questions.',
        lesson: 'Enterprise alignment requires commercial clarity at the C-suite level before execution begins.'
    },
    '2015': {
        role: 'Business Operations Leadership',
        period: '2015',
        tag: 'OPERATIONS PHASE',
        focus: 'Managed large delivery portfolios, commercial operations, P&L units, and organizational growth strategies.',
        highlights: [
            'Managed $36M+ contract portfolios across international programs',
            'Directed cross-functional delivery units of 100+ professionals',
            'Established delivery governance models ensuring high margin retention and CSAT'
        ],
        philosophy: 'Solving meaningful business problems over pure technology delivery.',
        lesson: 'Predictive risk recovery is far more cost-effective than post-escalation program fixes.'
    },
    '2010': {
        role: 'Enterprise Delivery Leadership',
        period: '2010',
        tag: 'LEADERSHIP PHASE',
        focus: 'Led cross-functional teams, complex enterprise programs, operations, and customer success initiatives.',
        highlights: [
            'Led enterprise software deployment across BFSI and Telecom domains',
            'Managed client executive stakeholder relationships and program risks',
            'Implemented PMO governance frameworks that increased project delivery speed'
        ],
        philosophy: 'Leadership is about empowering teams to execute with clarity.',
        lesson: 'Rigorous program governance prevents margin slippage in complex enterprise deals.'
    },
    '2006': {
        role: 'Consultant',
        period: '2006',
        tag: 'CONSULTING PHASE',
        focus: 'Solved client operational challenges through technology enablement, structured delivery, and hands-on execution.',
        highlights: [
            'Delivered custom enterprise application implementations',
            'Bridged technical development teams with client business leadership',
            'Optimized software delivery pipelines for enterprise software tools'
        ],
        philosophy: 'Bridging the gap between software execution and client expectations.',
        lesson: 'Direct client communication early in the lifecycle prevents delivery misalignments.'
    },
    '2001': {
        role: 'Early Career Foundations',
        period: '2001',
        tag: 'FOUNDATION PHASE',
        focus: 'Built deep, hands-on domain experience across technology infrastructure, customer support, and operational automation.',
        highlights: [
            'Engineered infrastructure and network automation tools',
            'Handled frontline operations and complex technical customer support',
            'Mastered fundamental software development and systems engineering'
        ],
        philosophy: 'Strong operational foundations make great strategic leaders.',
        lesson: 'Deep technical grounding builds the credibility necessary to lead large transformations.'
    }
};

// Switcher Function
function switchJourneyEra(key) {
    document.querySelectorAll('.jnode-btn').forEach(b => b.classList.remove('apple-tab-active'));
    const btn = document.getElementById(`jnode-${key}`);
    if (btn) btn.classList.add('apple-tab-active');

    const item = journeyEraDetails[key];
    document.getElementById('journey-detail-display').innerHTML = `
        <div class="space-y-3 my-auto">
            <!-- Header Row -->
            <div class="flex justify-between items-start border-b border-slate-800/80 pb-2">
                <div>
                    <span class="px-2 py-0.5 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[9px] font-bold font-mono uppercase rounded">${item.tag} • ${item.period}</span>
                    <h3 class="text-xl font-extrabold text-white mt-1">${item.role}</h3>
                </div>
                <div class="text-right hidden sm:block">
                    <span class="text-[10px] text-slate-500 font-mono uppercase block">Focus Scope</span>
                    <span class="text-xs text-amber-400 font-semibold font-mono">${item.period} Era</span>
                </div>
            </div>

            <!-- Role Scope -->
            <div>
                <h4 class="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Executive Focus</h4>
                <p class="text-xs text-slate-300 leading-relaxed font-sans">${item.focus}</p>
            </div>

            <!-- Highlights -->
            <div class="p-3 bg-slate-900/60 border border-slate-800/80 rounded-xl space-y-1.5">
                <h4 class="text-[10px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1">
                    <i data-lucide="check-circle" class="w-3.5 h-3.5"></i> Core Accomplishments & Scope
                </h4>
                <ul class="text-[11px] text-slate-300 space-y-1 pl-1">
                    ${item.highlights.map(h => `<li class="flex items-start gap-1.5"><span class="text-amber-500 font-bold">•</span> ${h}</li>`).join('')}
                </ul>
            </div>

            <!-- Strategic Takeaway & Philosophy -->
            <div class="grid sm:grid-cols-2 gap-2 pt-1 text-xs">
                <div class="p-2.5 bg-slate-950/80 border border-slate-800 rounded-xl">
                    <span class="text-[9px] font-bold uppercase tracking-wider text-slate-500 block mb-0.5">Core Philosophy</span>
                    <p class="text-[11px] font-semibold text-white">"${item.philosophy}"</p>
                </div>
                <div class="p-2.5 bg-emerald-500/5 border border-emerald-500/20 rounded-xl">
                    <span class="text-[9px] font-bold uppercase tracking-wider text-emerald-400 block mb-0.5">Key Business Lesson</span>
                    <p class="text-[11px] text-slate-300">${item.lesson}</p>
                </div>
            </div>
        </div>
    `;
    lucide.createIcons();
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', () => {
    switchJourneyEra('today');
});