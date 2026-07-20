// Refinement 3 & 7: SVG Flow Diagrams & Executive Business Impact Metrics
const caseStudiesData = {
    'pm-copilot': {
        title: 'PM Copilot',
        subtitle: 'AI Operating System for Enterprise Project Delivery',
        tag: 'VENTURE | B2B SaaS',
        metrics: [
            { value: '40%', label: 'Admin Overhead Reduced' },
            { value: '7', label: 'Copilot Modules' },
            { value: '100+', label: 'PM Workflows Automated' },
            { value: '$5B', label: 'Addressable Market' }
        ],
        impacts: [
            'Automates 40% of routine PM administrative tasks',
            'Predicts program delivery risks prior to milestone delays',
            'Generates continuous C-suite status reporting artifacts',
            'Frees senior project leaders to focus on team leadership'
        ],
        svgCurrent: `
            <svg class="w-full h-16 text-slate-400" viewBox="0 0 600 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="110" height="40" rx="6" fill="#1E293B" stroke="#334155"/>
                <text x="65" y="34" fill="#94A3B8" font-size="10" font-family="monospace" text-anchor="middle">Jira / Excel Logs</text>
                <path d="M125 30H155" stroke="#EF4444" stroke-width="2" stroke-dasharray="4 4"/>
                <rect x="160" y="10" width="110" height="40" rx="6" fill="#1E293B" stroke="#334155"/>
                <text x="215" y="34" fill="#94A3B8" font-size="10" font-family="monospace" text-anchor="middle">Manual Slides</text>
                <path d="M275 30H305" stroke="#EF4444" stroke-width="2" stroke-dasharray="4 4"/>
                <rect x="310" y="10" width="110" height="40" rx="6" fill="#1E293B" stroke="#334155"/>
                <text x="365" y="34" fill="#94A3B8" font-size="10" font-family="monospace" text-anchor="middle">Late Risk Alerts</text>
                <path d="M425 30H455" stroke="#EF4444" stroke-width="2" stroke-dasharray="4 4"/>
                <rect x="460" y="10" width="120" height="40" rx="6" fill="#451A1A" stroke="#991B1B"/>
                <text x="520" y="34" fill="#FCA5A5" font-size="10" font-family="monospace" text-anchor="middle">PM Burnout / Delays</text>
            </svg>
        `,
        svgFuture: `
            <svg class="w-full h-16 text-slate-300" viewBox="0 0 600 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="110" height="40" rx="6" fill="#1E293B" stroke="#F59E0B"/>
                <text x="65" y="34" fill="#FBBF24" font-size="10" font-family="monospace" text-anchor="middle">Context AI Parsing</text>
                <path d="M125 30H155" stroke="#10B981" stroke-width="2"/>
                <rect x="160" y="10" width="110" height="40" rx="6" fill="#1E293B" stroke="#10B981"/>
                <text x="215" y="34" fill="#34D399" font-size="10" font-family="monospace" text-anchor="middle">Predictive Alerts</text>
                <path d="M275 30H305" stroke="#10B981" stroke-width="2"/>
                <rect x="310" y="10" width="110" height="40" rx="6" fill="#1E293B" stroke="#10B981"/>
                <text x="365" y="34" fill="#34D399" font-size="10" font-family="monospace" text-anchor="middle">Auto Executive Docs</text>
                <path d="M425 30H455" stroke="#10B981" stroke-width="2"/>
                <rect x="460" y="10" width="120" height="40" rx="6" fill="#064E3B" stroke="#059669"/>
                <text x="520" y="34" fill="#6EE7B7" font-size="10" font-family="monospace" text-anchor="middle">Predictable Delivery</text>
            </svg>
        `,
        archFlow: ['Jira / Slack / Teams', 'Context Parsing AI Core', 'Delivery Intelligence Engine', 'Executive Dashboard'],
        problem: 'Project Managers spend nearly 40% of their working hours on status reporting, documentation, and coordination.',
        capabilities: ['AI Meeting Summarizer & Action Items', 'Delivery Intelligence Engine', 'Predictive Risk Recovery Alerts', 'Automated Executive Status Generator'],
        bizModel: 'Per-Seat SaaS • Enterprise Licensing • Usage Tiers'
    },
    'society-os': {
        title: 'Society OS',
        subtitle: 'WhatsApp-First Governance Platform for Housing Societies',
        tag: 'VENTURE | PropTech / GovTech',
        metrics: [
            { value: '100K+', label: 'Target Societies' },
            { value: '80%', label: 'Target Retention' },
            { value: '0', label: 'App Installs Needed' },
            { value: '100%', label: 'Audit Readiness' }
        ],
        impacts: [
            'Zero learning curve for non-technical community volunteers',
            'Eradicates annual financial audit panic and lost receipt logs',
            'Provides real-time UPI ledger reconciliation via simple chats',
            'Ensures legal and operational continuity during committee handovers'
        ],
        svgCurrent: `
            <svg class="w-full h-16 text-slate-400" viewBox="0 0 600 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="110" height="40" rx="6" fill="#1E293B" stroke="#334155"/>
                <text x="65" y="34" fill="#94A3B8" font-size="10" font-family="monospace" text-anchor="middle">Paper Registers</text>
                <path d="M125 30H155" stroke="#EF4444" stroke-width="2" stroke-dasharray="4 4"/>
                <rect x="160" y="10" width="110" height="40" rx="6" fill="#1E293B" stroke="#334155"/>
                <text x="215" y="34" fill="#94A3B8" font-size="10" font-family="monospace" text-anchor="middle">WhatsApp Group Chaos</text>
                <path d="M275 30H305" stroke="#EF4444" stroke-width="2" stroke-dasharray="4 4"/>
                <rect x="310" y="10" width="120" height="40" rx="6" fill="#451A1A" stroke="#991B1B"/>
                <text x="370" y="34" fill="#FCA5A5" font-size="10" font-family="monospace" text-anchor="middle">Annual Audit Panic</text>
            </svg>
        `,
        svgFuture: `
            <svg class="w-full h-16 text-slate-300" viewBox="0 0 600 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="110" height="40" rx="6" fill="#1E293B" stroke="#F59E0B"/>
                <text x="65" y="34" fill="#FBBF24" font-size="10" font-family="monospace" text-anchor="middle">WhatsApp Log</text>
                <path d="M125 30H155" stroke="#10B981" stroke-width="2"/>
                <rect x="160" y="10" width="110" height="40" rx="6" fill="#1E293B" stroke="#10B981"/>
                <text x="215" y="34" fill="#34D399" font-size="10" font-family="monospace" text-anchor="middle">NLP Intent Engine</text>
                <path d="M275 30H305" stroke="#10B981" stroke-width="2"/>
                <rect x="310" y="10" width="120" height="40" rx="6" fill="#064E3B" stroke="#059669"/>
                <text x="370" y="34" fill="#6EE7B7" font-size="10" font-family="monospace" text-anchor="middle">Continuous Audit Log</text>
            </svg>
        `,
        archFlow: ['WhatsApp User Interface', 'AI NLP Intent Parser', 'Finance & Reconciliation Core', 'Committee & Auditor View'],
        problem: 'Cooperative Housing Societies are run by untrained volunteer treasurers, creating disputes and audit failures.',
        capabilities: ['WhatsApp Interface (Zero App Install)', 'AI-powered Receipt & Expense Parsing', 'Automated Financial Ledger', 'Committee Handover Records'],
        bizModel: 'Society Monthly Subscription • Auditor Marketplace'
    },
    'campus-os': {
        title: 'Campus OS',
        subtitle: 'Digital Operating Platform for Educational Institutions',
        tag: 'PLATFORM | EdTech',
        metrics: [
            { value: '5000+', label: 'Target Institutions' },
            { value: '15+', label: 'Core Operational Modules' },
            { value: '100%', label: 'Compliance Ready' },
            { value: 'Continuous', label: 'System Evolution' }
        ],
        impacts: [
            'Replaces fragmented point solutions with an evolving core',
            'Automates fee collections and student records handling',
            'Maintains continuous real-time NAAC / NBA accreditation logs',
            'Reduces administrative overhead for teaching faculty'
        ],
        svgCurrent: `<svg class="w-full h-12 text-slate-500" viewBox="0 0 400 40"><rect x="5" y="5" width="390" height="30" fill="#1E293B" stroke="#334155" rx="4"/><text x="200" y="23" fill="#94A3B8" font-size="10" font-family="monospace" text-anchor="middle">Fragmented Point Software • Manual Audits</text></svg>`,
        svgFuture: `<svg class="w-full h-12 text-emerald-400" viewBox="0 0 400 40"><rect x="5" y="5" width="390" height="30" fill="#064E3B" stroke="#059669" rx="4"/><text x="200" y="23" fill="#6EE7B7" font-size="10" font-family="monospace" text-anchor="middle">Campus OS • Unified Intelligence • Automated NAAC Logs</text></svg>`,
        archFlow: ['Admissions CRM & SIS', 'Campus Operations Core', 'AI Governance Copilots', 'Compliance Analytics Hub'],
        problem: 'Educational institutions run on fragmented software that becomes obsolete every few years.',
        capabilities: ['15+ Core Academic & Admin Modules', 'Automated Fee & Payment Reconciliation', 'NAAC / NBA Accreditation AI Tracker', 'Parent & Student Portals'],
        bizModel: 'Annual B2B SaaS Subscription • Implementation Support'
    },
    'ai-blueprint': {
        title: 'AI Real Estate Transformation',
        subtitle: 'Enterprise AI Blueprint for Real Estate Developers',
        tag: 'ADVISORY | PropTech',
        metrics: [
            { value: '5-10%', label: 'Cost Leakage Reduced' },
            { value: '12', label: 'Business Functions Mapped' },
            { value: '69', label: 'Capabilities Evaluated' },
            { value: '5', label: 'Transformation Phases' }
        ],
        impacts: [
            'Eliminates 5-10% construction budget leakages',
            'Provides real-time site visual intelligence to executive leaders',
            'Automates multi-project RERA regulatory compliance',
            'Stabilizes developer cash flows through predictive models'
        ],
        svgCurrent: `<svg class="w-full h-12 text-slate-500" viewBox="0 0 400 40"><rect x="5" y="5" width="390" height="30" fill="#1E293B" stroke="#334155" rx="4"/><text x="200" y="23" fill="#94A3B8" font-size="10" font-family="monospace" text-anchor="middle">Manual Progress Tracking • Unexpected Overruns</text></svg>`,
        svgFuture: `<svg class="w-full h-12 text-emerald-400" viewBox="0 0 400 40"><rect x="5" y="5" width="390" height="30" fill="#064E3B" stroke="#059669" rx="4"/><text x="200" y="23" fill="#6EE7B7" font-size="10" font-family="monospace" text-anchor="middle">Visual AI Progress Monitoring • Continuous RERA Tracking</text></svg>`,
        archFlow: ['Site IoT & Cameras', 'Enterprise ERP Systems', 'AI Operational Analytics Core', 'Executive Command Center'],
        problem: 'Builders experience 5-10% cost leakage due to fragmented tracking across project construction phases.',
        capabilities: ['End-to-End Construction Mapping', 'Predictive Cash Flow Intelligence', 'Continuous RERA Compliance', 'Site Visual AI Monitoring'],
        bizModel: 'Strategic Advisory • Enterprise Transformation Blueprint'
    },
    'citizen-platform': {
        title: 'Digital Citizen Engagement Platform',
        subtitle: 'Enterprise SaaS Platform for Municipal Governments',
        tag: 'ADVISORY | GovTech',
        metrics: [
            { value: '10+', label: 'Digital Engagement Tools' },
            { value: '15+', label: 'Platform Modules' },
            { value: 'WCAG 2.2', label: 'Accessibility Standard' },
            { value: 'Cloud', label: 'Native Architecture' }
        ],
        impacts: [
            'Reaches underrepresented citizen groups via accessible digital channels',
            'Provides WCAG 2.2 compliant engagement tooling',
            'Transforms unstructured policy feedback into structured GIS maps',
            'Improves citizen trust through transparent municipal operations'
        ],
        svgCurrent: `<svg class="w-full h-12 text-slate-500" viewBox="0 0 400 40"><rect x="5" y="5" width="390" height="30" fill="#1E293B" stroke="#334155" rx="4"/><text x="200" y="23" fill="#94A3B8" font-size="10" font-family="monospace" text-anchor="middle">Sparse In-Person Consultation Meetings • Manual Logs</text></svg>`,
        svgFuture: `<svg class="w-full h-12 text-emerald-400" viewBox="0 0 400 40"><rect x="5" y="5" width="390" height="30" fill="#064E3B" stroke="#059669" rx="4"/><text x="200" y="23" fill="#6EE7B7" font-size="10" font-family="monospace" text-anchor="middle">WCAG 2.2 Accessible Digital Engagement Hub • GIS Analytics</text></svg>`,
        archFlow: ['Citizen Web Portal', 'Surveys & GIS Mapping Engine', 'Analytics Analytics Core', 'Administrative Dashboard'],
        problem: 'Municipalities struggle to achieve representative citizen participation using traditional consultation channels.',
        capabilities: ['WCAG 2.2 AA Accessible Portal', 'Interactive Polls, Surveys & GIS Mapping', 'Policy Sentiment Analytics', 'Secure Government Cloud Architecture'],
        bizModel: 'Enterprise Government SaaS • Managed Support'
    }
};