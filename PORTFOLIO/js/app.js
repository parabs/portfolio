// Application Switcher Engine & Dynamic UI Controller

function switchSolTab(key) {
    document.querySelectorAll('.sol-tab-btn').forEach(b => b.classList.remove('apple-tab-active'));
    const btn = document.getElementById(`sol-btn-${key}`);
    if (btn) btn.classList.add('apple-tab-active');

    const item = solutionsData[key];
    document.getElementById('sol-content-container').innerHTML = `
        <div class="grid lg:grid-cols-12 gap-8 items-start">
            <div class="lg:col-span-4 bg-slate-900/80 p-6 rounded-xl border border-slate-800 space-y-4">
                <span class="text-[10px] font-bold text-amber-500 uppercase font-mono tracking-wider">01. The Problem</span>
                <h4 class="text-xl font-bold text-white">${item.title}</h4>
                <div class="space-y-3 text-xs text-slate-400">
                    <div>
                        <strong class="text-slate-200 block mb-1">Business Challenge:</strong>
                        <p>${item.challenge}</p>
                    </div>
                    <div class="pt-2 border-t border-slate-800/80">
                        <strong class="text-red-400 block mb-1">Current Reality:</strong>
                        <p>${item.reality}</p>
                    </div>
                </div>
            </div>

            <div class="lg:col-span-8 space-y-6">
                <div>
                    <span class="text-[10px] font-bold text-amber-500 uppercase font-mono tracking-wider">02. Strategic Intervention</span>
                    <h5 class="text-lg font-bold text-white mt-1">Approach & Execution</h5>
                    <p class="text-xs text-slate-300 mt-2 leading-relaxed">${item.approach}</p>
                </div>

                <div class="grid md:grid-cols-2 gap-4 pt-2">
                    <div class="p-4 bg-slate-900/60 rounded-xl border border-slate-800 space-y-2">
                        <h6 class="text-xs font-bold text-amber-500 uppercase">Key Deliverables</h6>
                        <ul class="text-xs text-slate-300 space-y-1.5">
                            ${item.deliverables.map(d => `<li class="flex items-center gap-2"><i data-lucide="check" class="w-3.5 h-3.5 text-amber-500"></i> ${d}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="p-4 bg-slate-900/60 rounded-xl border border-slate-800 space-y-2">
                        <h6 class="text-xs font-bold text-emerald-400 uppercase">Business Outcome</h6>
                        <p class="text-xs text-slate-300 leading-relaxed">${item.outcomes}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    lucide.createIcons();
}

function switchCaseTab(key) {
    document.querySelectorAll('.case-tab-btn').forEach(b => b.classList.remove('apple-tab-active'));
    const btn = document.getElementById(`case-btn-${key}`);
    if (btn) btn.classList.add('apple-tab-active');

    const cs = caseStudiesData[key];
    document.getElementById('case-study-display').innerHTML = `
        <div class="space-y-2.5">
            
            <!-- Row 1: Title Info (Left) + 4 Metric Boxes (Right) -->
            <div class="grid lg:grid-cols-12 gap-3 items-center border-b border-slate-800/80 pb-2.5">
                <div class="lg:col-span-5 space-y-0.5">
                    <span class="px-2 py-0.5 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[9px] font-bold uppercase tracking-wider rounded">${cs.tag}</span>
                    <h3 class="text-2xl font-extrabold text-white leading-tight mt-0.5">${cs.title}</h3>
                    <p class="text-[11px] text-slate-400 font-mono">${cs.subtitle}</p>
                </div>
                
                <div class="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-2">
                    ${cs.metrics.map(m => `
                        <div class="p-1.5 bg-slate-900/90 border border-slate-800/80 rounded-xl text-center">
                            <div class="text-base font-extrabold text-amber-500">${m.value}</div>
                            <div class="text-[8px] uppercase font-semibold text-slate-400 mt-0.5">${m.label}</div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <!-- Row 2: Transformation Diagram Section -->
            <div class="space-y-1">
                <span class="text-[9px] font-bold text-amber-500 uppercase tracking-wider block">Transformation Diagram</span>
                <div class="grid md:grid-cols-12 gap-2.5 text-xs">
                    
                    <!-- Current Friction State Box -->
                    <div class="md:col-span-5 p-2 bg-slate-900/40 border border-slate-800/80 rounded-xl">
                        <span class="text-[9px] font-bold text-red-400 uppercase tracking-wider block mb-1">Current Friction State</span>
                        <div class="flex items-center justify-between gap-1 text-[10px] font-mono text-slate-400">
                            <span class="px-2 py-1 bg-slate-950 rounded border border-slate-800">Jira / Excel Logs</span>
                            <span class="text-red-500 font-bold">---</span>
                            <span class="px-2 py-1 bg-slate-950 rounded border border-slate-800">Manual Slides</span>
                            <span class="text-red-500 font-bold">---</span>
                            <span class="px-2 py-1 bg-slate-950 rounded border border-slate-800">Late Risk Alerts</span>
                            <span class="text-red-500 font-bold">---</span>
                            <span class="px-1.5 py-1 bg-red-950/40 text-red-300 rounded border border-red-800/50 text-center">PM Burnout / Delays</span>
                        </div>
                    </div>
                    
                    <!-- Target Solution Architecture Box -->
                    <div class="md:col-span-7 p-2 bg-slate-900/60 border border-slate-800/80 rounded-xl">
                        <span class="text-[9px] font-bold text-emerald-400 uppercase tracking-wider block mb-1">Target Solution Architecture</span>
                        <div class="flex items-center justify-between gap-1 text-[10px] font-mono text-emerald-400">
                            <span class="px-2 py-1 bg-slate-950 rounded border border-amber-500/40 text-amber-300">Context AI Parsing</span>
                            <span class="text-emerald-500 font-bold">—</span>
                            <span class="px-2 py-1 bg-slate-950 rounded border border-slate-800">Predictive Alerts</span>
                            <span class="text-emerald-500 font-bold">—</span>
                            <span class="px-2 py-1 bg-slate-950 rounded border border-slate-800">Auto Executive Docs</span>
                            <span class="text-emerald-500 font-bold">—</span>
                            <span class="px-2 py-1 bg-emerald-950/40 text-emerald-300 rounded border border-emerald-800/50">Predictable Delivery</span>
                        </div>
                    </div>

                </div>
            </div>

            <!-- Row 3: Platform Architecture Components (Full Box and Arrow Chain Restored) -->
            <div class="space-y-1">
                <span class="text-[9px] font-bold text-white uppercase tracking-wider block">Platform Architecture Components</span>
                <div class="p-2 bg-slate-950/80 border border-slate-800 rounded-xl">
                    <div class="flex items-center justify-between gap-2 font-mono text-[10px] text-amber-400 text-center">
                        ${cs.archFlow.map((node, idx) => `
                            <div class="px-3 py-1 bg-slate-900 rounded border border-slate-800/80 flex-1 truncate" title="${node}">${node}</div>
                            ${idx < cs.archFlow.length - 1 ? '<span class="text-slate-600 font-bold">→</span>' : ''}
                        `).join('')}
                    </div>
                </div>
            </div>

            <!-- Row 4: Problem Scope + Commercial Model (Left) & Business Impact Box (Right) -->
            <div class="grid md:grid-cols-12 gap-3 items-center pt-0.5">
                <div class="md:col-span-7 space-y-1">
                    <h4 class="text-[9px] font-bold uppercase tracking-wider text-slate-400">The Problem Scope</h4>
                    <p class="text-[11px] text-slate-300 leading-relaxed">${cs.problem}</p>
                    <div class="pt-1 text-[10px]">
                        <span class="font-bold text-slate-500 uppercase tracking-wider block mb-0.5">Commercial Model</span>
                        <span class="font-medium text-amber-400">${cs.bizModel}</span>
                    </div>
                </div>

                <div class="md:col-span-5 bg-emerald-500/5 border border-emerald-500/20 p-2.5 rounded-xl space-y-1">
                    <h4 class="text-[9px] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1">
                        <i data-lucide="trending-up" class="w-3 h-3"></i> Business Impact
                    </h4>
                    <ul class="text-[10px] text-slate-300 space-y-0.5">
                        ${cs.impacts.map(imp => `<li class="flex items-start gap-1.5"><span class="text-emerald-400 font-bold">✓</span> ${imp}</li>`).join('')}
                    </ul>
                </div>
            </div>

        </div>
    `;
    lucide.createIcons();
}

function switchIndTab(key) {
    document.querySelectorAll('.ind-tab-btn').forEach(b => b.classList.remove('apple-tab-active'));
    const btn = document.getElementById(`ind-btn-${key}`);
    if (btn) btn.classList.add('apple-tab-active');

    const item = industriesData[key];
    document.getElementById('ind-content-container').innerHTML = `
        <div class="space-y-6">
            <div class="border-b border-slate-800 pb-4">
                <h4 class="text-2xl font-bold text-white">${item.title}</h4>
                <p class="text-xs text-slate-400 mt-1 leading-relaxed">${item.overview}</p>
            </div>

            <div class="grid md:grid-cols-4 gap-6">
                <div class="p-4 bg-slate-900/60 rounded-xl border border-slate-800 space-y-2">
                    <h5 class="text-xs font-bold uppercase text-amber-500">Common Challenges</h5>
                    <ul class="text-xs text-slate-300 space-y-1">
                        ${item.challenges.map(c => `<li>• ${c}</li>`).join('')}
                    </ul>
                </div>

                <div class="p-4 bg-slate-900/60 rounded-xl border border-slate-800 space-y-2">
                    <h5 class="text-xs font-bold uppercase text-white">Representative Engagements</h5>
                    <ul class="text-xs text-slate-300 space-y-1">
                        ${item.engagements.map(e => `<li>• ${e}</li>`).join('')}
                    </ul>
                </div>

                <div class="p-4 bg-slate-900/60 rounded-xl border border-slate-800 space-y-2">
                    <h5 class="text-xs font-bold uppercase text-amber-400">Business Capabilities</h5>
                    <ul class="text-xs text-slate-300 space-y-1">
                        ${item.capabilities.map(cap => `<li>• ${cap}</li>`).join('')}
                    </ul>
                </div>

                <div class="p-4 bg-slate-900/60 rounded-xl border border-slate-800 space-y-2">
                    <h5 class="text-xs font-bold uppercase text-emerald-400">Key Outcomes</h5>
                    <p class="text-xs text-slate-300">${item.outcomes}</p>
                </div>
            </div>
        </div>
    `;
}

function switchCapTab(key) {
    document.querySelectorAll('.cap-tab-btn').forEach(b => b.classList.remove('apple-tab-active'));
    const btn = document.getElementById(`cap-btn-${key}`);
    if (btn) btn.classList.add('apple-tab-active');

    const cap = capabilitiesData[key];
    document.getElementById('cap-content-container').innerHTML = `
        <div class="space-y-6">
            <h4 class="text-2xl font-bold text-white border-b border-slate-800 pb-4">${cap.title}</h4>
            
            <div class="grid md:grid-cols-3 gap-6">
                <div class="p-5 bg-slate-900/60 rounded-xl border border-slate-800 space-y-3">
                    <h5 class="text-xs font-bold uppercase text-amber-500">Typical Engagements</h5>
                    <ul class="text-xs text-slate-300 space-y-2">
                        ${cap.engagements.map(e => `<li class="flex items-center gap-2"><i data-lucide="check-circle" class="w-3.5 h-3.5 text-amber-500"></i> ${e}</li>`).join('')}
                    </ul>
                </div>

                <div class="p-5 bg-slate-900/60 rounded-xl border border-slate-800 space-y-3">
                    <h5 class="text-xs font-bold uppercase text-white">Target Industries</h5>
                    <div class="flex flex-wrap gap-1.5">
                        ${cap.industries.map(i => `<span class="px-2 py-1 bg-slate-800 rounded text-[11px] text-slate-300 font-medium">${i}</span>`).join('')}
                    </div>
                </div>

                <div class="p-5 bg-slate-900/60 rounded-xl border border-slate-800 space-y-3">
                    <h5 class="text-xs font-bold uppercase text-emerald-400">Core Deliverables</h5>
                    <ul class="text-xs text-slate-300 space-y-2">
                        ${cap.deliverables.map(d => `<li class="flex items-center gap-2"><i data-lucide="file-text" class="w-3.5 h-3.5 text-emerald-400"></i> ${d}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>
    `;
    lucide.createIcons();
}

// Global Collaboration Dataset
window.collabData = {
    'collab-exec': {
        title: 'Executive Leadership (Interim CEO / COO / VP Delivery)',
        idealFor: 'Mid-sized tech enterprises or growth-stage organizations needing hands-on operational leadership to scale delivery and P&L governance.',
        deliverables: ['Target Operating Model (TOM) Deployment', 'Portfolio P&L & Delivery Governance', 'C-Suite Operational Alignment'],
        fit: 'Full-time / High-Impact Interim Executive'
    },
    'collab-advisory': {
        title: 'Strategic Consulting & Advisory',
        idealFor: 'Enterprise leadership teams seeking actionable AI transformation roadmaps, legacy platform modernizations, or process automation blueprints.',
        deliverables: ['Enterprise AI Transformation Blueprint', 'Platform Modernization Specs (PRDs)', 'Process Reengineering Plan'],
        fit: 'Project-Based / Strategic Advisory'
    },
    'collab-fractional': {
        title: 'Fractional Executive Leadership',
        idealFor: 'Growing enterprises requiring senior strategic oversight, PMO recovery, and product monetization guidance without full-time C-suite overhead.',
        deliverables: ['Quarterly Growth & Execution Planning', 'Automated PMO System Deployment', 'B2B SaaS Monetization Review'],
        fit: 'Retainer-Based / Monthly Engagement'
    },
    'collab-startup': {
        title: 'Startup Advisor & Entrepreneur in Residence (EIR)',
        idealFor: 'Founders, venture studios, and early-stage SaaS platforms validating market demand and executing rapid MVP platform architecture.',
        deliverables: ['Commercial Go-To-Market Validation', 'MVP Scope & Technical Architecture', 'Venture Unit Economics Blueprint'],
        fit: 'Advisor / Venture Equity Partner'
    }
};

// Global Tab Switching Handler
function switchCollabTab(key) {
    // 1. Remove active state from all buttons
    document.querySelectorAll('.collab-tab-btn').forEach(b => {
        b.classList.remove('apple-tab-active');
        b.classList.add('text-slate-400');
    });

    // 2. Set active state on clicked button
    const activeBtn = document.getElementById(`collab-btn-${key}`);
    if (activeBtn) {
        activeBtn.classList.add('apple-tab-active');
        activeBtn.classList.remove('text-slate-400');
    }

    // 3. Render content into container
    const item = window.collabData[key];
    const container = document.getElementById('collab-content-container');
    
    if (container && item) {
        container.innerHTML = `
            <div class="grid md:grid-cols-12 gap-3 items-center text-xs py-1">
                <div class="md:col-span-7 space-y-1.5">
                    <div class="flex items-center gap-2">
                        <span class="px-2 py-0.5 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[9px] font-bold font-mono uppercase rounded">${item.fit}</span>
                    </div>
                    <h4 class="text-base font-extrabold text-white mt-1">${item.title}</h4>
                    <p class="text-[11px] text-slate-300 leading-relaxed font-sans">${item.idealFor}</p>
                </div>
                <div class="md:col-span-5 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800 space-y-1">
                    <span class="text-[9px] font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1">
                        <i data-lucide="check-circle" class="w-3 h-3 text-amber-400"></i> Key Deliverables
                    </span>
                    <ul class="text-[10px] text-slate-300 space-y-1">
                        ${item.deliverables.map(d => `<li class="flex items-start gap-1"><span class="text-amber-500 font-bold">•</span> ${d}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }
}

// Copy to Clipboard Utility
function copyToClipboard(text, badgeId) {
    navigator.clipboard.writeText(text).then(() => {
        const badge = document.getElementById(badgeId);
        if (badge) {
            badge.classList.remove('hidden');
            setTimeout(() => badge.classList.add('hidden'), 2000);
        }
    });
}

// Initial Load Trigger
document.addEventListener('DOMContentLoaded', () => {
    switchCollabTab('collab-exec');
});

// Click to Copy Helper Function
function copyToClipboard(text, badgeId) {
    navigator.clipboard.writeText(text).then(() => {
        const badge = document.getElementById(badgeId);
        if (badge) {
            badge.classList.remove('hidden');
            setTimeout(() => badge.classList.add('hidden'), 2000);
        }
    });
}

// Global Load Trigger
window.addEventListener('DOMContentLoaded', () => {
    switchCollabTab('collab-exec');
});

function renderJourneyAccordions() {
    const container = document.getElementById('journey-accordion-container');
    if (!container) return;

    container.innerHTML = journeyData.map(j => `
        <div class="apple-glass rounded-xl border border-slate-800 overflow-hidden">
            <button onclick="toggleAccordion('${j.id}')" class="w-full p-5 flex items-center justify-between text-left hover:bg-slate-800/30 transition-all">
                <div>
                    <span class="text-xs font-mono text-amber-500 uppercase font-bold">${j.era}</span>
                    <h4 class="text-lg font-bold text-white">${j.title}</h4>
                </div>
                <i id="icon-${j.id}" data-lucide="chevron-down" class="w-5 h-5 text-slate-400 transition-transform"></i>
            </button>
            <div id="${j.id}" class="hidden p-6 pt-0 border-t border-slate-800/50 text-xs text-slate-400 space-y-4">
                <div class="grid md:grid-cols-2 gap-4">
                    <div>
                        <strong class="text-white block mb-1">Key Projects:</strong>
                        <p>${j.projects}</p>
                    </div>
                    <div>
                        <strong class="text-white block mb-1">Key Achievements:</strong>
                        <p>${j.achievements}</p>
                    </div>
                </div>
                <div class="grid md:grid-cols-2 gap-4 border-t border-slate-800/60 pt-3">
                    <div>
                        <strong class="text-amber-400 block mb-1">Business Lessons Learned:</strong>
                        <p>${j.lessons}</p>
                    </div>
                    <div>
                        <strong class="text-amber-400 block mb-1">Acquired Skills:</strong>
                        <p>${j.skills}</p>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

function toggleAccordion(id) {
    const el = document.getElementById(id);
    const icon = document.getElementById(`icon-${id}`);
    if (el.classList.contains('hidden')) {
        el.classList.remove('hidden');
        if (icon) icon.style.transform = 'rotate(180deg)';
    } else {
        el.classList.add('hidden');
        if (icon) icon.style.transform = 'rotate(0deg)';
    }
}

// Global Initialization
window.addEventListener('DOMContentLoaded', () => {
    switchSolTab('enterprise-trans');
    switchCaseTab('pm-copilot');
    switchIndTab('bfsi');
    switchCapTab('cap-strategy');
    switchCollabTab('collab-exec');
    renderJourneyAccordions();
});

// Executive Perspectives Article Data
const insightArticles = {
    'ai-strategy': {
        category: 'AI Strategy & Execution',
        title: 'Why 80% of Enterprise AI Pilots Fail to Reach Production',
        subtitle: 'Shifting focus from model selection to operational workflow integration.',
        content: `
            <p class="text-xs text-slate-300 leading-relaxed">Most enterprises treat AI implementations as pure technology projects. They test models in isolated sandboxes, achieve promising accuracy metrics, and then hit an execution wall when attempting enterprise rollout.</p>
            
            <h5 class="text-xs font-bold text-amber-400 uppercase tracking-wider mt-3">The Root Bottlenecks</h5>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                <li><strong>Tool-First Thinking:</strong> Choosing models (e.g., GPT, Claude, Llama) before defining the specific business problem.</li>
                <li><strong>Context Isolation:</strong> AI tools lack connection to live enterprise data stores (Jira, SAP, Salesforce).</li>
                <li><strong>Workflow Friction:</strong> Expecting users to leave their primary operational tools to use standalone AI chat interfaces.</li>
            </ul>

            <h5 class="text-xs font-bold text-emerald-400 uppercase tracking-wider mt-3">The Strategic Remedy</h5>
            <p class="text-xs text-slate-300 leading-relaxed">Embed AI directly into existing operational touchpoints as automated copilots. By anchoring AI directly inside daily business workflows, organizations eliminate adoption friction and capture measurable ROI within 90 days.</p>
        `
    },
    'transformations': {
        category: 'Enterprise Transformation',
        title: 'Moving from Point Software Projects to Evolving Platforms',
        subtitle: 'Preventing software obsolescence through continuous architecture design.',
        content: `
            <p class="text-xs text-slate-300 leading-relaxed">Traditional enterprise software investments follow a 5-year cycle: heavy custom development, three years of operational friction, and eventual complete replacement. This cycle stems from building software as one-off projects rather than multi-tenant platforms.</p>
            
            <h5 class="text-xs font-bold text-amber-400 uppercase tracking-wider mt-3">Key Platform Principles</h5>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                <li><strong>Modular Architecture:</strong> Decouple front-end user experience from core business logic layers.</li>
                <li><strong>API-First Integration:</strong> Ensure all capability modules communicate via standardized micro-APIs.</li>
                <li><strong>Continuous Evolution:</strong> Upgrade individual capabilities without re-architecting the entire system.</li>
            </ul>

            <h5 class="text-xs font-bold text-emerald-400 uppercase tracking-wider mt-3">Business Value</h5>
            <p class="text-xs text-slate-300 leading-relaxed">Adopting platform thinking turns software from a depreciating operational cost into a long-term strategic asset that scales with organizational growth.</p>
        `
    },
    'pmo-governance': {
        category: 'PMO & Delivery Governance',
        title: 'Eliminating the 40% Admin Burden in Enterprise PMOs',
        subtitle: 'Reclaiming senior delivery focus through context-aware governance automation.',
        content: `
            <p class="text-xs text-slate-300 leading-relaxed">Senior Project Managers routinely spend 15 to 20 hours per week manually aggregating data from Jira, Excel, and Slack to build weekly executive status slides. This administrative overhead diverts focus away from proactive risk mitigation.</p>
            
            <h5 class="text-xs font-bold text-amber-400 uppercase tracking-wider mt-3">Automated Governance Pipeline</h5>
            <ul class="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                <li><strong>Context Ingestion:</strong> Automatically parse commit logs, ticket updates, and meeting summaries.</li>
                <li><strong>Predictive Risk Alerts:</strong> Identify milestone bottlenecks 2-3 weeks before schedule breach.</li>
                <li><strong>Artifact Generation:</strong> Auto-generate executive dashboards and stakeholder reports.</li>
            </ul>

            <h5 class="text-xs font-bold text-emerald-400 uppercase tracking-wider mt-3">Business Outcome</h5>
            <p class="text-xs text-slate-300 leading-relaxed">Reduces administrative effort by 40%, improves delivery predictability, and protects program margins.</p>
        `
    }
};

// Modal Trigger Functions
function openInsightModal(key) {
    const article = insightArticles[key];
    if (!article) return;

    document.getElementById('modal-content').innerHTML = `
        <div class="space-y-3">
            <span class="px-2 py-0.5 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] font-bold font-mono uppercase rounded">${article.category}</span>
            <h3 class="text-xl font-extrabold text-white pr-6">${article.title}</h3>
            <p class="text-xs text-slate-400 font-mono border-b border-slate-800 pb-3">${article.subtitle}</p>
            <div class="pt-2 space-y-3">
                ${article.content}
            </div>
            <div class="pt-4 border-t border-slate-800 flex justify-end">
                <button onclick="closeInsightModal()" class="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-4 py-1.5 rounded-lg text-xs transition-all">
                    Close Article
                </button>
            </div>
        </div>
    `;
    
    document.getElementById('insight-modal').classList.remove('hidden');
    lucide.createIcons();
}

function closeInsightModal() {
    document.getElementById('insight-modal').classList.add('hidden');
}