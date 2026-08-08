const caseStudiesData = {
    'pm-copilot': {
        title: 'PM Copilot',
        subtitle: 'AI Operating System for Enterprise Project Delivery',
        whyIBuiltIt: 'After 25+ years leading enterprise delivery, I repeatedly saw project managers spend nearly 40% of their time on status reporting, meetings, risk tracking, and documentation. Enterprise AI can automate this administrative work, allowing PMs to focus on delivery, decisions, and leadership.',
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
        problem: 'Project Managers spend nearly 40% of their working hours on status reporting, documentation, and coordination.',
        problemList: [
            'PMs spend 40% of time on admin, not strategy',
            'Risk identified too late to act',
            'Fragmented tools with no unified intelligence'
        ],
        whyNow: [
            'Modern LLMs understand enterprise project context',
            'AI can generate summaries at scale',
            'Automation can schedule meetings and action items',
            'Enterprises are AI-ready'
        ],
        currentReality: [
            'Manual status updates weekly',
            'Fragmented tools (Jira, Excel, Slides)',
            'Risk identified too late',
            'Excessive coordination overhead',
            '40% administrative overhead burden'
        ],
        capabilities: [
            'AI Meeting Summaries & Action Items',
            'Delivery Intelligence Engine',
            'Predictive Risk Detection',
            'Automated Action Items',
            'Executive Status Reporting'
        ],
        futureState: [
            'PMs lead delivery—not administration',
            'Real-time executive visibility',
            'Risks predicted before escalation',
            'AI-generated governance artifacts',
            '40% reduction in administrative effort'
        ],
        whyWin: [
            'Built by enterprise delivery practitioners',
            'Context-aware AI for enterprise delivery',
            'Integrates with existing PM tools',
            'Low deployment friction',
            'Enterprise subscription model'
        ],
        bizModel: 'Per-Seat SaaS • Enterprise Licensing • AI Usage Tiers'
    },
    'society-os': {
        title: 'Society OS',
        subtitle: 'WhatsApp-First Governance Platform for Housing Societies',
         tag: 'VENTURE | PropTech / GovTech',
         whyIBuiltIt: 'Cooperative housing societies rely on untrained volunteer treasurers dealing with lost paper receipts and complex audits. I built Society OS on WhatsApp so management committees get automated financial ledgers and audit trails without forcing anyone to install an app.',
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
        problem: 'Cooperative Housing Societies are run by untrained volunteer treasurers, creating disputes and audit failures.',
        problemList: [
            'Untrained volunteer treasurers handle complex finances',
            'Disputed expense receipts and lost accounting paper trails',
            'High friction and resistance to downloading standalone native apps'
        ],
        whyNow: [
            'WhatsApp Business API supports rich conversational UI',
            'UPI payment adoption is ubiquitous across all user demographics',
            'LLM NLP intent parsing easily extracts financial entities from chat text'
        ],
        currentReality: [
            'Manual paper ledgers and fragmented WhatsApp groups',
            'Cash & UPI collection matching requires days of manual effort',
            'Annual audit panic due to missing financial documents'
        ],
        capabilities: [
            'WhatsApp Conversational Interface (Zero App Install)',
            'AI-Powered Receipt, Invoice & Expense OCR Parsing',
            'Automated Double-Entry Financial Ledger',
            'Instant UPI Reconciliation & Payment Receipts',
            'Committee Handover & Continuous Audit Logs'
        ],
        futureState: [
            '100% continuous audit readiness year-round',
            'Instant friction-free maintenance dues collection via WhatsApp',
            'Transparent digital record keeping during committee handovers',
            'Zero technical barrier for elderly residents or volunteers'
        ],
        whyWin: [
            'Zero app installation barrier leverages ubiquitous WhatsApp habit',
            'Tailored specifically to cooperative society legal bylaws',
            'First-mover advantage in hyper-local residential fintech'
        ],
        bizModel: 'Society Monthly Subscription • Auditor Marketplace'
    },
    'campus-os': {
        title: 'Campus OS',
        subtitle: 'Digital Operating Platform for Educational Institutions',
        tag: 'PLATFORM | EdTech',
        whyIBuiltIt: 'Higher education institutions replace point software every few years, creating data silos and administrative burdens during accreditation. Campus OS was built as an evolving operating platform that keeps data unified and accreditation logs audit-ready.',
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
        problem: 'Educational institutions run on fragmented software that becomes obsolete every few years, creating compliance chaos.',
        problemList: [
            'Data silos between admissions, fee processing, and academics',
            'Faculty spend hours on manual accreditation paperwork',
            'Legacy point software becomes outdated every 3–5 years'
        ],
        whyNow: [
            'National accreditation bodies require continuous digital data logs',
            'Cloud-native ERPs allow modular feature upgrades without full rewrites',
            'Institutions are actively replacing rigid legacy software layers'
        ],
        currentReality: [
            'Disconnected spreadsheets and legacy desktop software',
            'Faculty distracted from teaching during accreditation inspection cycles',
            'Manual fee collection tracking and delayed reconciliation'
        ],
        capabilities: [
            '15+ Integrated Academic, Admin & Finance Modules',
            'Automated Fee Collection & Multi-Gateway Reconciliation',
            'NAAC / NBA Accreditation AI Compliance Engine',
            'Unified Student, Parent & Faculty Digital Portals',
            'Predictive Student Retention Analytics'
        ],
        futureState: [
            'Real-time NAAC / NBA audit score tracking',
            'Unified student lifecycle data from admission to alumni',
            'Automated academic administrative workflows for faculty'
        ],
        whyWin: [
            'Built as an evolving modular platform, eliminating software obsolescence',
            'Pre-configured compliance templates for accreditation standards',
            'Low total cost of ownership compared to legacy ERP monoliths'
        ],
        bizModel: 'Annual B2B SaaS Subscription • Implementation Support'
    },
    'ai-blueprint': {
        title: 'AI Real Estate Transformation',
        subtitle: 'Enterprise AI Blueprint for Real Estate Developers',
        whyIBuiltIt: 'Real estate developers face 5-10% budget leakage due to delayed site progress tracking and manual RERA reporting. I designed this AI transformation blueprint to give C-suite leaders real-time visual site intelligence and predictive cash flow control.',
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
        problem: 'Builders experience 5-10% cost leakage due to fragmented tracking across project construction phases.',
        problemList: [
            'Lack of real-time site visibility leads to material waste and delay',
            'Cost leakage across procurement, labor, and sub-contractors',
            'Complex RERA compliance reporting managed across manual spreadsheets'
        ],
        whyNow: [
            'Computer vision & AI site cameras enable remote construction tracking',
            'Predictive financial models can stabilize volatile cash flows',
            'Tightened regulatory oversight demands instant compliance data'
        ],
        currentReality: [
            'Delayed weekly/monthly physical site status reports',
            'Unforeseen budget overruns identified after capital is spent',
            'Fragmented communication between site engineers and executives'
        ],
        capabilities: [
            'End-to-End Construction Lifecycle Capability Mapping',
            'Predictive Cash Flow & Materials Intelligence',
            'Automated RERA Compliance Tracker',
            'Computer Vision Site Monitoring & Safety AI',
            'Executive Transformation Roadmap & Vendor Matrix'
        ],
        futureState: [
            'Real-time C-suite dashboard of multi-site construction progress',
            'Early warning alerts for material waste and budget deviations',
            'Automated regulatory filing workflows'
        ],
        whyWin: [
            'Grounded in 25+ years of enterprise transformation experience',
            'Actionable 69-point capability maturity assessment framework',
            'Vendor-neutral strategic advisory tailored to developer scale'
        ],
        bizModel: 'Strategic Advisory • Enterprise Transformation Blueprint'
    },
    'citizen-platform': {
        title: 'Digital Citizen Engagement Platform',
        subtitle: 'Enterprise SaaS Platform for Municipal Governments',
        whyIBuiltIt: 'Traditional municipal consultations rely on low-turnout town halls and unstructured paper feedback, leaving cities without representative community input. I engineered this digital engagement SaaS platform to give local governments inclusive, WCAG-compliant tools to gather structured resident feedback and drive data-backed civic decisions.',
        tag: 'ADVISORY | GovTech',
        metrics: [
            { value: '10+', label: 'Digital Engagement Tools' },
            { value: '15+', label: 'Platform Modules' },
            { value: 'WCAG 2.2', label: 'Accessibility Standard' },
            { value: 'Cloud', label: 'Native Architecture' }
        ],
        impacts: [
            'Reaches underrepresented citizen groups via accessible digital channels',
            'Provides WCAG 2.2 AA compliant engagement tooling',
            'Transforms unstructured policy feedback into structured GIS insights',
            'Improves citizen trust through transparent municipal operations'
        ],
        problem: 'Municipalities struggle to achieve representative citizen participation using traditional, analog consultation channels.',
        problemList: [
            'In-person town halls reach only a fraction of the population',
            'Unstructured feedback from public surveys is difficult to analyze',
            'Non-accessible government portals exclude citizens with disabilities'
        ],
        whyNow: [
            'Governments mandate strict WCAG 2.2 accessibility standards',
            'Cloud-native SaaS allows quick deployment across municipal councils',
            'NLP tools can aggregate thousands of public policy comments instantly'
        ],
        currentReality: [
            'Manual collation of paper forms and public hearing notes',
            'Low engagement rates among young and working demographics',
            'Opaque feedback loops reduce public trust in civic projects'
        ],
        capabilities: [
            'WCAG 2.2 AA Accessible Citizen Web & Mobile Portal',
            'Interactive Surveys, Budget Allocators & GIS Mapping',
            'NLP Sentiment & Topic Analysis for Public Policy Feedback',
            'Automated Executive Reports for City Councils',
            'Secure Government-Grade Cloud Architecture'
        ],
        futureState: [
            'High-volume, representative digital civic participation',
            'Instant spatial GIS visualization of community feedback',
            'Transparent, verifiable public decision-making processes'
        ],
        whyWin: [
            'Built specifically for strict municipal compliance and WCAG accessibility',
            'Scalable SaaS deployment model for local and regional councils',
            'Integrated sentiment analysis turns noise into clear policy insights'
        ],
        bizModel: 'Enterprise Government SaaS • Managed Support'
    }
};