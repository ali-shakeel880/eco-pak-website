// Content for keyword-focused service landing pages. Every service described
// here is listed on the existing site (laboratory, consultancy, design &
// treatment pages). Regulatory references are general; confirm current
// requirements with EPA Punjab for each project.

const INDUSTRIES = [
  'Textile & Apparel',
  'Food & Beverage',
  'Pharmaceuticals',
  'Chemicals',
  'Paints & Coatings',
  'Packaging',
  'Animal Feed',
  'Housing & Commercial Projects',
];

export const SERVICE_PAGES = {
  water: {
    path: '/services/water-wastewater-testing',
    eyebrow: 'Environmental Laboratory • Lahore',
    h1: 'Water & Wastewater Testing Laboratory in Lahore',
    intro:
      'Eco Pak Services provides drinking water analysis and industrial wastewater (effluent) testing for factories, housing schemes, commercial buildings and development projects in Lahore and across Punjab. Our team collects samples, analyses them and reports results against the applicable quality standards.',
    sections: [
      {
        heading: 'Water and Wastewater Testing Services',
        items: [
          { title: 'Drinking water analysis', text: 'Testing of tap, borewell, filtration plant and bottled water for physical, chemical and microbiological parameters to check that it is safe to drink.' },
          { title: 'Industrial wastewater & effluent testing', text: 'Sampling and analysis of factory effluent before and after treatment, compared with the effluent discharge limits in your environmental approval.' },
          { title: 'Effluent treatment plant (ETP) performance checks', text: 'Inlet and outlet testing to see whether your treatment plant is removing pollutants as designed, and where it is falling short.' },
          { title: 'Municipal & domestic wastewater analysis', text: 'Testing of sewage and treated water from sewage treatment plants, housing societies and commercial buildings.' },
          { title: 'Process and reuse water', text: 'Analysis of water used in boilers, cooling and processing, and of treated water intended for reuse.' },
          { title: 'Monitoring for approvals and audits', text: 'Testing to support IEE/EIA baselines, environmental monitoring reports, compliance reports and brand or buyer audits.' },
        ],
      },
      {
        heading: 'Common Parameters We Test',
        paragraphs: [
          'Wastewater testing typically covers pH, temperature, BOD5, COD, total suspended solids (TSS), total dissolved solids (TDS), oil and grease, chloride, sulphate, sulphide, phenolic compounds and heavy metals such as chromium, lead, cadmium, copper, nickel and zinc. These are compared with the Punjab Environmental Quality Standards (PEQS) / National Environmental Quality Standards (NEQS) for municipal and liquid industrial effluents.',
          'Drinking water testing typically covers colour, odour, taste, turbidity, pH, total dissolved solids, hardness, chloride, nitrate, fluoride, arsenic and microbiological indicators such as total and faecal coliforms, compared with the applicable drinking water standards.',
        ],
        note: 'The exact parameter list depends on your industry, approval conditions and purpose of testing. Ask us to confirm parameters and methods before sampling.',
      },
      {
        heading: 'How Our Testing Process Works',
        steps: [
          { title: 'Requirement review', text: 'Tell us the purpose (approval, monitoring report, buyer audit or internal check), the number of sampling points and any EPA letter or buyer checklist.' },
          { title: 'Sampling plan and quotation', text: 'We propose parameters, sampling points and a schedule, and share a quotation.' },
          { title: 'Field sampling', text: 'Our team collects samples in suitable containers with preservation and chain-of-custody records, and records on-site readings where needed.' },
          { title: 'Laboratory analysis', text: 'Samples are analysed in our environmental laboratory using standard methods.' },
          { title: 'Report and advice', text: 'You receive a report comparing results with the applicable limits, and we explain any exceedances and possible corrective actions.' },
        ],
      },
      {
        heading: 'Why Test Your Water and Wastewater?',
        paragraphs: [
          'Environmental approvals in Punjab usually include conditions on effluent quality and periodic monitoring. Regular testing shows whether you meet these conditions, provides records for EPA inspections, and helps you detect treatment problems early. Many export buyers also require wastewater test reports as part of their environmental programmes.',
          'Because Eco Pak Services also provides environmental consultancy and wastewater treatment design, test results can be followed by practical advice on treatment improvement and compliance reporting.',
        ],
      },
    ],
    industries: INDUSTRIES,
    related: [
      { label: 'Environmental Laboratory Services', path: '/services/environmental-laboratory' },
      { label: 'Wastewater Treatment Plant (ETP)', path: '/services/wastewater-treatment-plant' },
      { label: 'Air Quality & Stack Emission Testing', path: '/services/air-quality-stack-emission-testing' },
      { label: 'EIA, IEE & Environmental Approval', path: '/services/eia-iee-environmental-approval' },
    ],
    ctaHeading: 'Need water or wastewater tested in Lahore?',
  },

  air: {
    path: '/services/air-quality-stack-emission-testing',
    eyebrow: 'Environmental Laboratory • Air Monitoring',
    h1: 'Air Quality Monitoring & Stack Emission Testing in Pakistan',
    intro:
      'Eco Pak Services monitors ambient air quality, stack emissions, vehicular emissions, noise and workplace conditions for industries and projects in Lahore and across Punjab. Results are reported against the applicable environmental quality standards to support approvals, monitoring reports and compliance.',
    sections: [
      {
        heading: 'Air and Emission Monitoring Services',
        items: [
          { title: 'Ambient air quality monitoring', text: 'Measurement of outdoor air pollutants around industrial sites, construction projects and baseline study areas.' },
          { title: 'Stack emission testing', text: 'Testing of chimneys from boilers, generators, furnaces, kilns and thermal oil heaters for gaseous pollutants and particulate matter.' },
          { title: 'Vehicular emission monitoring', text: 'Measurement of exhaust emissions from vehicles and mobile equipment.' },
          { title: 'Noise and lux monitoring', text: 'Environmental and workplace noise surveys and lighting level measurements.' },
          { title: 'Industrial hygiene (workplace) monitoring', text: 'Assessment of dust, gases, noise and other workplace exposures to support occupational health and safety.' },
          { title: 'Meteorological and odour monitoring', text: 'Weather data and odour observations to support air quality studies and complaints investigation.' },
        ],
      },
      {
        heading: 'Typical Parameters',
        paragraphs: [
          'Ambient air monitoring commonly covers particulate matter (PM10 and PM2.5), sulphur dioxide (SO2), nitrogen oxides (NOx/NO2), carbon monoxide (CO) and ozone (O3), compared with ambient air quality standards.',
          'Stack emission testing commonly covers carbon monoxide, nitrogen oxides, sulphur dioxide, oxygen, carbon dioxide, flue gas temperature, particulate matter and smoke opacity, compared with the gaseous emission standards for industrial sources.',
        ],
        note: 'Parameters and methods depend on the source type, fuel and your approval conditions. Ask us to confirm the scope before monitoring.',
      },
      {
        heading: 'Our Monitoring Process',
        steps: [
          { title: 'Scope definition', text: 'We review your sources (stacks, generators, boilers), site layout and reporting requirement.' },
          { title: 'Monitoring plan', text: 'We agree on locations, parameters, duration and schedule, and confirm safe access to sampling ports.' },
          { title: 'On-site monitoring', text: 'Our field team carries out measurements with calibrated instruments and records operating conditions.' },
          { title: 'Analysis and reporting', text: 'Results are compiled and compared with applicable limits in a clear report.' },
          { title: 'Follow-up', text: 'Where results exceed limits, we discuss causes such as combustion tuning or emission control devices.' },
        ],
      },
      {
        heading: 'Why Air Monitoring Matters in Punjab',
        paragraphs: [
          'Industrial emissions are a significant contributor to air pollution and winter smog in Lahore and other Punjab cities, and the Environmental Protection Agency has increased its focus on industrial emission control. Regular, reliable stack and ambient monitoring helps industries meet approval conditions, demonstrate compliance during inspections and identify efficiency improvements in combustion equipment.',
        ],
      },
    ],
    industries: INDUSTRIES.slice(0, 7),
    related: [
      { label: 'Environmental Laboratory Services', path: '/services/environmental-laboratory' },
      { label: 'Water & Wastewater Testing', path: '/services/water-wastewater-testing' },
      { label: 'EIA, IEE & Environmental Approval', path: '/services/eia-iee-environmental-approval' },
      { label: 'Carbon Footprint Assessment', path: '/services/carbon-footprint' },
    ],
    ctaHeading: 'Book air quality or stack emission monitoring',
  },

  eia: {
    path: '/services/eia-iee-environmental-approval',
    eyebrow: 'Environmental Consultancy • Punjab',
    h1: 'EIA, IEE & Environmental Approval Services in Punjab',
    intro:
      'Eco Pak Services prepares Initial Environmental Examinations (IEE) and Environmental Impact Assessments (EIA) and supports project proponents through the environmental approval process with the Environmental Protection Agency. We are familiar with the legal requirements and procedures for environmental studies under the Environmental Protection Act 1997.',
    sections: [
      {
        heading: 'IEE or EIA: Which Does Your Project Need?',
        paragraphs: [
          'Section 12 of the Environmental Protection Act 1997 (as applicable in Punjab) requires a proponent to file an IEE or EIA with the Environmental Protection Agency and obtain approval before starting construction or operation of a project. The applicable review regulations list project categories that require an IEE and those that require a full EIA, based on project type, size and sensitivity of the location.',
          'An IEE is used where impacts are expected to be limited and manageable. An EIA is required where impacts may be significant, and involves more detailed baseline studies, analysis of alternatives and public consultation.',
        ],
      },
      {
        heading: 'Our Environmental Approval Services',
        items: [
          { title: 'Project screening', text: 'Review of your project to determine whether an IEE or EIA is required under the applicable regulations.' },
          { title: 'Baseline monitoring', text: 'Ambient air, noise, water and wastewater monitoring through our environmental laboratory to establish existing conditions.' },
          { title: 'IEE and EIA report preparation', text: 'Project description, legal framework, baseline, impact assessment, mitigation measures and environmental management and monitoring plan.' },
          { title: 'Submission and follow-up', text: 'Filing with the EPA, responding to review comments and supporting the proponent during the review process.' },
          { title: 'Compliance Status Report (CSR)', text: 'Reporting on fulfilment of approval conditions after environmental approval is granted.' },
          { title: 'Annual compliance reporting & audits', text: 'Annual reports summarising operational environmental performance, and environmental audits for existing facilities.' },
        ],
      },
      {
        heading: 'Typical Approval Process',
        steps: [
          { title: 'Screening and scoping', text: 'Identify the project category, key environmental issues and the study area.' },
          { title: 'Baseline data collection', text: 'Collect physical, biological and socio-economic baseline information, including environmental monitoring.' },
          { title: 'Impact assessment and EMP', text: 'Assess impacts and prepare an environmental management and monitoring plan.' },
          { title: 'Consultation', text: 'Engage stakeholders; for EIAs this includes public consultation as required by the EPA.' },
          { title: 'Submission and review', text: 'Submit the report to the EPA and address review comments until a decision is issued.' },
          { title: 'Post-approval compliance', text: 'Implement approval conditions, monitor and submit compliance reports.' },
        ],
        note: 'Review timelines are set by the regulations and the EPA. Requirements are periodically updated, so we confirm the current procedure for each project.',
      },
    ],
    industries: ['Factories & Industrial Units', 'Housing Schemes', 'Commercial Buildings', 'Infrastructure & Energy Projects'],
    related: [
      { label: 'Environmental Consultancy', path: '/services/environmental-consultancy' },
      { label: 'Air Quality & Stack Emission Testing', path: '/services/air-quality-stack-emission-testing' },
      { label: 'Water & Wastewater Testing', path: '/services/water-wastewater-testing' },
      { label: 'Techno-Legal Services', path: '/services/techno-legal' },
    ],
    ctaHeading: 'Planning a project that needs environmental approval?',
  },

  treatment: {
    path: '/services/wastewater-treatment-plant',
    eyebrow: 'Engineering Solutions • Wastewater Treatment',
    h1: 'Industrial Wastewater Treatment Plants (ETP) in Pakistan',
    intro:
      'Eco Pak Services scientists and engineers design wastewater treatment facilities of different capacities for industries and buildings, including effluent treatment plants (ETP), sewage treatment plants (STP), zero liquid discharge, MBR and sludge management systems. Our in-house laboratory testing supports design and performance verification.',
    sections: [
      {
        heading: 'Wastewater Treatment Solutions',
        items: [
          { title: 'Effluent treatment plants (ETP)', text: 'Physico-chemical and biological treatment systems designed around the characteristics and flow of your industrial wastewater.' },
          { title: 'Sewage treatment plants (STP)', text: 'Treatment of domestic sewage from factories, housing schemes and commercial buildings.' },
          { title: 'Zero liquid discharge (ZLD)', text: 'Systems that recover water for reuse and minimise liquid discharge, for facilities with strict buyer or regulatory requirements.' },
          { title: 'Membrane bioreactor (MBR)', text: 'Biological treatment combined with membrane filtration for high-quality treated effluent and reuse.' },
          { title: 'Sludge management & dewatering', text: 'Thickening, dewatering and disposal options for treatment plant sludge.' },
          { title: 'Upgrades and troubleshooting', text: 'Assessment of existing plants that are not meeting discharge limits, with recommendations for process improvement.' },
        ],
      },
      {
        heading: 'How We Approach a Treatment Project',
        steps: [
          { title: 'Wastewater characterisation', text: 'Sampling and laboratory analysis to understand flow, pollutant load and variability.' },
          { title: 'Treatment objective', text: 'Define the required effluent quality: discharge standards, buyer requirements or reuse.' },
          { title: 'Process design', text: 'Select and size treatment units and prepare the process design.' },
          { title: 'Implementation support', text: 'Support installation and commissioning of the treatment system.' },
          { title: 'Performance verification', text: 'Post-commissioning testing to confirm the plant meets the treatment objective.' },
        ],
      },
      {
        heading: 'Why Combine Testing and Treatment?',
        paragraphs: [
          'A treatment plant can only be designed well if the wastewater has been characterised properly, and it can only be shown to work if the treated effluent is tested. Because Eco Pak Services runs an environmental laboratory alongside its engineering and consultancy services, clients get one team for characterisation, design, compliance testing and reporting to the regulator.',
        ],
      },
    ],
    industries: ['Textile Dyeing & Processing', 'Food & Beverage', 'Pharmaceuticals', 'Chemicals', 'Paints & Coatings', 'Housing Schemes', 'Commercial Buildings'],
    related: [
      { label: 'Design & Treatment Services', path: '/services/design-treatment' },
      { label: 'Water & Wastewater Testing', path: '/services/water-wastewater-testing' },
      { label: 'Environmental Consultancy', path: '/services/environmental-consultancy' },
      { label: 'EIA, IEE & Environmental Approval', path: '/services/eia-iee-environmental-approval' },
    ],
    ctaHeading: 'Need a new treatment plant or an upgrade?',
  },
};
