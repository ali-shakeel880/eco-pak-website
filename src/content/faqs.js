// FAQ library. Answers are deliberately factual and avoid unverified claims
// (no fixed turnaround times, prices or certification scopes). Each set is
// rendered visibly on its page and mirrored in FAQPage JSON-LD.

import { SITE } from '../seo/site.js';

export const FAQS = {
  home: [
    {
      q: 'What is Eco Pak Services?',
      a: 'Eco Pak Services is a Lahore-based environmental services company established in 2015. It provides environmental laboratory testing (air, stack emission, noise, water and wastewater), environmental consultancy for IEE/EIA studies and environmental approvals, compliance reporting, wastewater treatment design, carbon footprint assessment and techno-legal environmental support for industries in Pakistan.',
    },
    {
      q: 'Where is Eco Pak Services located?',
      a: 'Eco Pak Services has its head office in Lahore, Punjab, Pakistan, and works with industrial and commercial clients in other cities as well. Contact the team by phone, WhatsApp or the contact form to confirm service availability at your site.',
    },
    {
      q: 'Which industries does Eco Pak Services work with?',
      a: 'Clients include textile, food and beverage, consumer goods, paints and coatings, packaging, animal feed and other manufacturing industries, as well as commercial and development projects that need environmental approvals or monitoring.',
    },
    {
      q: 'How can I request a quotation?',
      a: 'Send the site location, the type of service you need (for example wastewater testing, stack emission monitoring or an IEE/EIA), the number of sampling points and any EPA requirement letter you have received. You can call +92 300 1050996, message on WhatsApp, email info@ecopakservices.com or use the contact form.',
    },
  ],

  laboratory: [
    {
      q: 'What are environmental testing services?',
      a: 'Environmental testing is the sampling and laboratory analysis of air, emissions, water, wastewater, noise and workplace conditions to measure pollutants and compare them with legal limits such as the Punjab Environmental Quality Standards (PEQS) and National Environmental Quality Standards (NEQS). Industries use the results for environmental approvals, monitoring reports and to check that their treatment systems work.',
    },
    {
      q: 'Why is environmental testing important for industries?',
      a: 'Environmental approvals in Pakistan usually come with conditions that require periodic monitoring of effluent, emissions and ambient conditions. Testing shows whether a facility meets the applicable standards, gives evidence for EPA inspections and buyer audits, and helps identify problems in treatment plants or combustion equipment before they become violations.',
    },
    {
      q: 'What types of environmental tests does Eco Pak Services offer?',
      a: 'The Eco Pak Services laboratory offers ambient air and odour monitoring, stack emission monitoring, vehicular emission monitoring, meteorological monitoring, noise and lux monitoring, drinking water analysis, wastewater analysis and industrial hygiene (workplace) monitoring. Contact the lab to confirm the exact parameters and methods for your requirement.',
    },
    {
      q: 'How do I choose an environmental testing laboratory in Pakistan?',
      a: 'Check that the laboratory is certified by the relevant Environmental Protection Agency for the parameters you need, ask for its current certificate and scope, confirm that it does its own field sampling with calibrated equipment, and ask how results are reported against PEQS/NEQS limits. Experience with your industry and the ability to explain non-compliant results are also important.',
    },
    {
      q: 'How long does environmental testing take?',
      a: 'It depends on the parameters. Some field measurements such as noise or stack gas readings are recorded on site, while laboratory tests such as BOD need a fixed incubation period before results are available. Ask for a schedule when you request a quotation so it fits your reporting deadline.',
    },
  ],

  water: [
    {
      q: 'What is the difference between water testing and wastewater testing?',
      a: 'Water testing checks whether water is fit for a use such as drinking or process water, comparing it with drinking water standards. Wastewater testing analyses effluent discharged from a factory, building or treatment plant to check that pollutants such as COD, BOD, suspended solids, oil and grease and heavy metals are within the effluent discharge limits.',
    },
    {
      q: 'What parameters are checked in drinking water testing?',
      a: 'Typical drinking water analysis covers physical parameters (colour, taste, odour, turbidity, pH), dissolved solids and hardness, chemical parameters such as chloride, nitrate, fluoride and arsenic, and microbiological indicators such as total and faecal coliforms. The exact list depends on the purpose of testing and the standard you need to meet.',
    },
    {
      q: 'What is wastewater quality testing?',
      a: 'Wastewater quality testing is the collection of effluent samples and their analysis for parameters listed in the effluent standards, for example pH, temperature, BOD5, COD, total suspended solids, total dissolved solids, oil and grease, phenolics, sulphides and heavy metals, so that results can be compared with the applicable discharge limits.',
    },
    {
      q: 'Why is wastewater testing important for factories?',
      a: 'Untreated or poorly treated effluent pollutes drains, rivers and groundwater. Factories need test results to show compliance with effluent standards and approval conditions, to support environmental monitoring reports, to meet brand and buyer requirements, and to check that their effluent treatment plant is performing as designed.',
    },
    {
      q: 'How often should industries test their wastewater?',
      a: 'Frequency is normally set by the conditions of the environmental approval, EPA directions and buyer programmes, and can be monthly, quarterly or as specified. Many facilities also test more often for internal process control. Check your approval letter or ask Eco Pak Services to review your monitoring obligations.',
    },
  ],

  air: [
    {
      q: 'What is ambient air quality monitoring?',
      a: 'Ambient air quality monitoring measures pollutant concentrations in the outdoor air around a site, such as particulate matter (PM10, PM2.5), sulphur dioxide, nitrogen oxides, carbon monoxide and ozone, and compares them with ambient air quality standards. It is often required in IEE/EIA baseline studies and in approval conditions.',
    },
    {
      q: 'What is stack emission testing?',
      a: 'Stack emission testing measures gases and particulate matter released from chimneys of boilers, generators, furnaces and other combustion or process equipment. Typical parameters include carbon monoxide, nitrogen oxides, sulphur dioxide, oxygen, carbon dioxide, particulate matter and smoke opacity, which are compared with the gaseous emission standards.',
    },
    {
      q: 'Why do industries need air quality monitoring?',
      a: 'Air emissions from industry contribute to smog and health problems, especially in Lahore and other Punjab cities. Monitoring is needed to meet emission standards and approval conditions, to check combustion efficiency and emission control devices, and to protect workers and nearby communities.',
    },
    {
      q: 'What is workplace air quality testing?',
      a: 'Workplace (industrial hygiene) monitoring measures conditions that affect workers inside a facility, such as dust, gases and vapours, noise, lighting levels and heat. The results help employers assess occupational health risks and decide on controls such as ventilation or personal protective equipment.',
    },
  ],

  consultancy: [
    {
      q: 'What is environmental consultancy?',
      a: 'Environmental consultancy helps projects and industries understand and meet environmental law. It includes preparing IEE and EIA reports, obtaining environmental approvals, environmental audits, compliance reports, waste management plans, and advice on treatment systems and monitoring.',
    },
    {
      q: 'What is an Initial Environmental Examination (IEE)?',
      a: 'An IEE is a preliminary environmental study for projects whose impacts are expected to be limited and manageable. It describes the project and its surroundings, identifies likely impacts and sets out mitigation and monitoring measures. It is submitted to the Environmental Protection Agency for review and approval before construction or operation begins.',
    },
    {
      q: 'What is an Environmental Impact Assessment (EIA)?',
      a: 'An EIA is a detailed study required for projects likely to cause significant environmental effects. It includes baseline surveys, impact prediction, analysis of alternatives, public consultation, an environmental management plan and monitoring requirements, and is reviewed by the EPA before approval is granted.',
    },
    {
      q: 'How can a factory obtain environmental approval in Punjab?',
      a: 'Under Section 12 of the Environmental Protection Act 1997 (as applicable in Punjab), a project proponent must file an IEE or EIA with the Environmental Protection Agency and obtain approval before construction or operation. The usual steps are screening the project category, preparing the IEE/EIA with baseline monitoring, submitting it to EPA Punjab, responding to review comments, and then complying with the approval conditions. Eco Pak Services can guide you through each step.',
    },
    {
      q: 'What is environmental compliance?',
      a: 'Environmental compliance means meeting all legal and approval requirements that apply to your operations: discharge and emission standards, monitoring and reporting obligations, waste management rules and any conditions in your environmental approval. Compliance status reports and annual compliance reports document this to the regulator.',
    },
    {
      q: 'Why do businesses need environmental consultants?',
      a: 'Environmental regulations, approval procedures and reporting formats are technical. A consultant helps identify which requirements apply, prepares studies to the expected standard, coordinates monitoring, and reduces the risk of delays, notices or penalties.',
    },
  ],

  treatment: [
    {
      q: 'What is an Effluent Treatment Plant (ETP)?',
      a: 'An ETP treats industrial wastewater so that it meets discharge standards or can be reused. Depending on the industry it may include screening, equalisation, chemical treatment, biological treatment, clarification, filtration and sludge handling.',
    },
    {
      q: 'What is a Sewage Treatment Plant (STP)?',
      a: 'An STP treats domestic sewage from housing schemes, commercial buildings or factory colonies, mainly removing organic matter, solids and pathogens, usually through biological treatment followed by settling and disinfection.',
    },
    {
      q: 'How does an industrial wastewater treatment plant work?',
      a: 'Wastewater is first screened and equalised to even out flow and strength, then treated chemically and/or biologically to remove pollutants, separated in clarifiers or membranes, and polished if reuse is required. Sludge produced is thickened and dewatered for safe disposal. Design depends on wastewater characteristics, flow and the required effluent quality.',
    },
    {
      q: 'How can factories improve wastewater treatment?',
      a: 'Start with testing to understand influent and effluent quality, then check whether the plant is sized for current flow, whether chemical dosing and aeration are controlled, and whether sludge is removed regularly. Water audits, segregation of strong waste streams and process upgrades such as MBR can improve performance and enable reuse.',
    },
  ],

  sustainability: [
    {
      q: 'What is carbon footprint assessment?',
      a: 'A carbon footprint assessment quantifies the greenhouse gas emissions caused by an organisation, product or activity and expresses them in tonnes of carbon dioxide equivalent (CO2e). It identifies the main emission sources so that reduction measures can be prioritised.',
    },
    {
      q: 'What is greenhouse gas accounting?',
      a: 'Greenhouse gas accounting is the systematic measurement and reporting of emissions, usually split into Scope 1 (direct emissions such as fuel burned on site), Scope 2 (purchased electricity) and Scope 3 (other value-chain emissions), following recognised methods such as the GHG Protocol.',
    },
    {
      q: 'How can businesses improve environmental sustainability?',
      a: 'Measure first: energy, water, waste and emissions. Then reduce through energy efficiency, water reuse, better treatment and waste segregation, set targets, and report progress. Environmental testing and audits provide the data needed to track improvement.',
    },
  ],

  about: [
    {
      q: 'What does Eco Pak Services do?',
      a: 'Eco Pak Services provides environmental laboratory testing, environmental consultancy (IEE, EIA, approvals, audits and compliance reports), wastewater treatment design, carbon footprint assessment and techno-legal environmental services to industries and projects in Pakistan.',
    },
    {
      q: 'When was Eco Pak Services established?',
      a: 'The Eco Pak Services group was established in 2015. The Eco Pak Services Research Institute is a separate research arm established in 2025 under Section 42 for research and development in sustainability.',
    },
    {
      q: 'Does Eco Pak Services operate across Pakistan?',
      a: 'Eco Pak Services is headquartered in Lahore and serves clients in Lahore and other cities. Contact the team to confirm availability for sampling or site work at your location.',
    },
    {
      q: 'What makes Eco Pak Services different?',
      a: 'Eco Pak Services combines an environmental laboratory, environmental consultancy, treatment engineering and techno-legal support in one company, so a client can get testing, approvals, treatment solutions and compliance reporting from a single team.',
    },
    {
      q: 'How can I contact Eco Pak Services?',
      a: `Call ${SITE.phones[0].display} or ${SITE.phones[1].display}, message on WhatsApp, email ${SITE.email}, or use the contact form on ecopakservices.com.`,
    },
  ],
};
