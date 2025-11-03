import type { TownHotspotData } from '../types';

export const preGeneratedHotspotData: TownHotspotData[] = [
  // NAIROBI
  {
    townName: "Kayole",
    countyName: "Nairobi",
    severity: 9,
    description: "High rates of armed robberies, carjackings, and organized gang violence.",
    latitude: -1.2803,
    longitude: 36.9221,
    crimeStatistics: [{ type: "Armed Robbery", value: "Frequent" }, { type: "Gang Activity", value: "High" }, { type: "Mugging", value: "Very Common" }],
    historicalTrend: "Crime rates have remained stubbornly high despite frequent police operations."
  },
  {
    townName: "Eastleigh",
    countyName: "Nairobi",
    severity: 8,
    description: "Known for muggings, business robberies, and a hub for contraband goods.",
    latitude: -1.2750,
    longitude: 36.8500,
    crimeStatistics: [{ type: "Mugging", value: "Daily" }, { type: "Business Robbery", value: "Common" }, { type: "Contraband", value: "Prevalent" }],
    historicalTrend: "Security situation is volatile, linked to its bustling commercial activity."
  },
  {
    townName: "Kibera",
    countyName: "Nairobi",
    severity: 8,
    description: "High poverty levels contribute to rampant petty crime, muggings, and political violence.",
    latitude: -1.3125,
    longitude: 36.7875,
    crimeStatistics: [{ type: "Petty Crime", value: "Endemic" }, { type: "Assault", value: "Common" }, { type: "Political Violence", value: "Periodic" }],
    historicalTrend: "Persistent insecurity linked to socio-economic challenges and dense population."
  },
  {
    townName: "Dandora",
    countyName: "Nairobi",
    severity: 9,
    description: "Infamous for violent youth gangs, illegal firearms, and crime around the dumpsite.",
    latitude: -1.2581,
    longitude: 36.9080,
    crimeStatistics: [{ type: "Gang Violence", value: "Extreme" }, { type: "Illegal Firearms", value: "High" }, { type: "Robbery", value: "Frequent" }],
    historicalTrend: "A deeply entrenched gang culture makes it one of Nairobi's most dangerous areas."
  },
  {
    townName: "Mathare",
    countyName: "Nairobi",
    severity: 8,
    description: "Prone to organized crime, illicit brewing, drug abuse, and political tension.",
    latitude: -1.2650,
    longitude: 36.8450,
    crimeStatistics: [{ type: "Organized Crime", value: "High" }, { type: "Drug Abuse", value: "Prevalent" }, { type: "Assault", value: "Common" }],
    historicalTrend: "Socio-economic deprivation fuels a persistent and complex crime problem."
  },
  {
    townName: "CBD",
    countyName: "Nairobi",
    severity: 7,
    description: "High concentration of pickpocketing, snatch-and-grab theft, and confidence scams.",
    latitude: -1.286389,
    longitude: 36.817223,
    crimeStatistics: [{ type: "Pickpocketing", value: "Very High" }, { type: "Phone Snatching", value: "Daily" }, { type: "Confidence Tricks", value: "Common" }],
    historicalTrend: "While major crimes are policed, opportunistic petty crime is rampant."
  },
  {
    townName: "Karen",
    countyName: "Nairobi",
    severity: 6,
    description: "Affluent suburb with a high risk of targeted residential burglaries and carjackings.",
    latitude: -1.3218,
    longitude: 36.7062,
    crimeStatistics: [{ type: "Residential Burglary", value: "High Risk" }, { type: "Carjacking", value: "Occasional" }, { type: "Mugging", value: "Common" }],
    historicalTrend: "Security is heavily reliant on private patrols, but targeted crime remains a persistent threat."
  },
  // MOMBASA
  {
    townName: "Kisauni",
    countyName: "Mombasa",
    severity: 8,
    description: "Hub for juvenile gangs (e.g., 'wakali kwanza'), drug trafficking, and violent robberies.",
    latitude: -4.0167,
    longitude: 39.6833,
    crimeStatistics: [{ type: "Gang Violence", value: "High" }, { type: "Drug Trade", value: "Prevalent" }, { type: "Robbery", value: "Frequent" }],
    historicalTrend: "Youth gang violence remains a major challenge for security forces."
  },
  {
    townName: "Likoni",
    countyName: "Mombasa",
    severity: 7,
    description: "Prone to muggings, especially around the ferry crossing, and has extremist elements.",
    latitude: -4.0833,
    longitude: 39.6500,
    crimeStatistics: [{ type: "Mugging", value: "Common" }, { type: "Extremist Activity", value: "Monitored" }, { type: "Theft", value: "Frequent" }],
    historicalTrend: "Security has improved but risks, particularly around the ferry, persist."
  },
   {
    townName: "Majengo",
    countyName: "Mombasa",
    severity: 7,
    description: "Known for drug abuse hotspots and recruitment by extremist groups.",
    latitude: -4.0535,
    longitude: 39.6631,
    crimeStatistics: [{ type: "Drug Abuse", value: "High" }, { type: "Radicalization", value: "Monitored" }, { type: "Petty Crime", value: "Common" }],
    historicalTrend: "Socio-economic factors make the area vulnerable to crime and extremism."
  },
  // KISUMU
  {
    townName: "Kondele",
    countyName: "Kisumu",
    severity: 7,
    description: "A hotspot for political protests that often turn violent, alongside high rates of street crime.",
    latitude: -0.0833,
    longitude: 34.7667,
    crimeStatistics: [{ type: "Political Unrest", value: "High-Risk" }, { type: "Street Crime", value: "Common" }, { type: "Looting", value: "During Protests" }],
    historicalTrend: "Tension often flares up during election periods, impacting overall security."
  },
  {
    townName: "Nyalenda",
    countyName: "Kisumu",
    severity: 6,
    description: "Informal settlement with high rates of burglary, assault, and illicit brewing.",
    latitude: -0.1153,
    longitude: 34.7536,
    crimeStatistics: [{ type: "Burglary", value: "Frequent" }, { type: "Assault", value: "Common" }, { type: "Illicit Brews", value: "Prevalent" }],
    historicalTrend: "Poverty and lack of infrastructure contribute to rising crime rates."
  },
  // TURKANA
  {
    townName: "Lodwar",
    countyName: "Turkana",
    severity: 8,
    description: "Affected by banditry, cattle rustling, and resource-based conflicts.",
    latitude: 3.1167,
    longitude: 35.6000,
    crimeStatistics: [{ type: "Cattle Rustling", value: "Persistent" }, { type: "Road Banditry", value: "Common" }, { type: "Resource Conflicts", value: "Occasional" }],
    historicalTrend: "Insecurity is deeply rooted in inter-communal competition for resources."
  },
   {
    townName: "Kakuma",
    countyName: "Turkana",
    severity: 7,
    description: "Security is complex due to the large refugee population, with tensions over resources.",
    latitude: 3.7167,
    longitude: 34.6667,
    crimeStatistics: [{ type: "Inter-community Tension", value: "High" }, { type: "Smuggling", value: "Prevalent" }, { type: "Theft", value: "Common" }],
    historicalTrend: "Periodic conflicts between host and refugee communities over scarce resources."
  },
   {
    townName: "Lokichogio",
    countyName: "Turkana",
    severity: 8,
    description: "Border town facing threats of cross-border raids, arms smuggling from South Sudan.",
    latitude: 4.2000,
    longitude: 34.3500,
    crimeStatistics: [{ type: "Arms Smuggling", value: "High" }, { type: "Cross-border Raids", value: "Frequent" }, { type: "Banditry", value: "Common" }],
    historicalTrend: "Instability in South Sudan directly impacts the security of the town."
  },
  // UASIN GISHU
  {
    townName: "Eldoret",
    countyName: "Uasin Gishu",
    severity: 6,
    description: "Experiences high levels of organized crime, including vehicle theft and financial scams.",
    latitude: 0.5143,
    longitude: 35.2698,
    crimeStatistics: [{ type: "Vehicle Theft", value: "Increasing" }, { type: "Financial Crime", value: "High" }, { type: "Mugging", value: "Common" }],
    historicalTrend: "Urban crime has been on the rise as the town grows."
  },
  // NAKURU
  {
    townName: "Nakuru West (Rhonda, Kaptembwa)",
    countyName: "Nakuru",
    severity: 7,
    description: "Areas are known for organized gangs (e.g., 'Confirm') and violent robberies.",
    latitude: -0.3031,
    longitude: 36.0800,
    crimeStatistics: [{ type: "Organized Gangs", value: "Active" }, { type: "Violent Robbery", value: "Frequent" }, { type: "Extortion", value: "Common" }],
    historicalTrend: "Gang activity has been a persistent security challenge for years."
  },
    {
    townName: "Naivasha",
    countyName: "Nakuru",
    severity: 7,
    description: "High incidence of highway robbery on the main road and crime related to the flower farm industry.",
    latitude: -0.7167,
    longitude: 36.4333,
    crimeStatistics: [{ type: "Highway Robbery", value: "High Risk" }, { type: "Labor Disputes", value: "Occasional" }, { type: "Assault", value: "Common" }],
    historicalTrend: "Its transient population and key transport corridor location contribute to crime."
  },
  {
    townName: "Molo",
    countyName: "Nakuru",
    severity: 7,
    description: "Historically a hotspot for ethnic clashes, especially during election periods.",
    latitude: -0.2475,
    longitude: 35.7342,
    crimeStatistics: [{ type: "Ethnic Clashes", value: "High Risk" }, { type: "Land Disputes", value: "Frequent" }, { type: "Cattle Theft", value: "Common" }],
    historicalTrend: "Underlying ethnic tensions make the area politically volatile."
  },
  // KAJIADO
  {
    townName: "Namanga",
    countyName: "Kajiado",
    severity: 6,
    description: "Border town with high instances of cross-border smuggling, human trafficking, and theft.",
    latitude: -2.5444,
    longitude: 36.7825,
    crimeStatistics: [{ type: "Smuggling", value: "Prevalent" }, { type: "Human Trafficking", value: "Monitored" }, { type: "Theft", value: "Common" }],
    historicalTrend: "Porous border contributes to persistent transnational crime."
  },
  {
    townName: "Kitengela",
    countyName: "Kajiado",
    severity: 6,
    description: "Rapidly growing satellite town with high rates of land fraud, burglaries and carjackings.",
    latitude: -1.4833,
    longitude: 36.9667,
    crimeStatistics: [{ type: "Land Fraud", value: "High" }, { type: "Burglary", value: "Frequent" }, { type: "Carjacking", value: "Occasional" }],
    historicalTrend: "Fast-paced, unregulated development has led to a rise in property-related crime."
  },
   {
    townName: "Ngong",
    countyName: "Kajiado",
    severity: 6,
    description: "Experiences frequent break-ins, muggings, and crime spillover from nearby Nairobi.",
    latitude: -1.3625,
    longitude: 36.6558,
    crimeStatistics: [{ type: "Burglary", value: "High" }, { type: "Mugging", value: "Common" }, { type: "Livestock Theft", value: "Occasional" }],
    historicalTrend: "Urbanization has brought increased crime to this formerly quiet town."
  },
  {
    townName: "Ongata Rongai",
    countyName: "Kajiado",
    severity: 7,
    description: "Densely populated satellite town known for severe traffic, frequent muggings, and residential break-ins.",
    latitude: -1.3964,
    longitude: 36.7558,
    crimeStatistics: [{ type: "Mugging", value: "Frequent" }, { type: "Residential Burglary", value: "High" }, { type: "Traffic-related Theft", value: "Common" }],
    historicalTrend: "Rapid population growth has significantly strained infrastructure and security resources."
  },
  // MANDERA
  {
    townName: "Mandera",
    countyName: "Mandera",
    severity: 10,
    description: "Extremely high risk of terror attacks from Al-Shabaab due to its proximity to Somalia.",
    latitude: 3.9372,
    longitude: 41.8559,
    crimeStatistics: [{ type: "Terrorism", value: "Very High Risk" }, { type: "IED Attacks", value: "Frequent" }, { type: "Kidnapping", value: "High Risk" }],
    historicalTrend: "Security situation is highly volatile and unpredictable."
  },
  {
    townName: "El Wak",
    countyName: "Mandera",
    severity: 9,
    description: "Another border town with a high threat of Al-Shabaab infiltration and attacks.",
    latitude: 2.8000,
    longitude: 40.9333,
    crimeStatistics: [{ type: "Terrorism", value: "High Risk" }, { type: "Smuggling", value: "Prevalent" }, { type: "Clan Clashes", value: "Occasional" }],
    historicalTrend: "Frequent attacks target security personnel and communication infrastructure."
  },
  // GARISSA
  {
    townName: "Garissa",
    countyName: "Garissa",
    severity: 9,
    description: "Major target for terrorist attacks and has significant issues with banditry.",
    latitude: -0.4573,
    longitude: 39.6534,
    crimeStatistics: [{ type: "Terrorism", value: "High Risk" }, { type: "Banditry", value: "Common" }, { type: "Smuggling", value: "Prevalent" }],
    historicalTrend: "Despite security presence, the threat of major attacks remains high."
  },
  {
    townName: "Dadaab",
    countyName: "Garissa",
    severity: 8,
    description: "Home to large refugee camps, faces risks of extremist infiltration and resource conflicts.",
    latitude: 0.0833,
    longitude: 40.3167,
    crimeStatistics: [{ type: "Extremist Infiltration", value: "High Risk" }, { type: "Resource Conflict", value: "Common" }, { type: "Kidnapping", value: "Monitored" }],
    historicalTrend: "The vast and complex refugee situation presents unique security challenges."
  },
  // WAJIR
  {
    townName: "Wajir",
    countyName: "Wajir",
    severity: 8,
    description: "Faces threats from terrorism, inter-clan conflicts, and arms smuggling.",
    latitude: 1.7471,
    longitude: 40.0583,
    crimeStatistics: [{ type: "Terrorism", value: "Elevated Risk" }, { type: "Clan Conflicts", value: "Periodic" }, { type: "Arms Smuggling", value: "High" }],
    historicalTrend: "A combination of factors makes the security environment complex and challenging."
  },
  // ISIOLO
  {
    townName: "Isiolo",
    countyName: "Isiolo",
    severity: 7,
    description: "A confluence of banditry, cattle rustling, and is a transit point for illegal arms.",
    latitude: 0.3541,
    longitude: 37.5794,
    crimeStatistics: [{ type: "Banditry", value: "Frequent" }, { type: "Cattle Rustling", value: "Common" }, { type: "Illegal Arms", value: "Transit Hub" }],
    historicalTrend: "Resource conflicts and its strategic location contribute to insecurity."
  },
  // MARSABIT
  {
    townName: "Marsabit",
    countyName: "Marsabit",
    severity: 8,
    description: "Prone to severe and often violent inter-communal clashes over resources.",
    latitude: 2.3333,
    longitude: 37.9833,
    crimeStatistics: [{ type: "Ethnic Clashes", value: "High Risk" }, { type: "Cattle Raids", value: "Frequent" }, { type: "Road Ambush", value: "Occasional" }],
    historicalTrend: "Cycles of violence have been difficult to break despite peace initiatives."
  },
    {
    townName: "Moyale",
    countyName: "Marsabit",
    severity: 8,
    description: "Border town plagued by ethnic conflict and cross-border weapons smuggling.",
    latitude: 3.5269,
    longitude: 39.0583,
    crimeStatistics: [{ type: "Ethnic Conflict", value: "High" }, { type: "Smuggling", value: "Prevalent" }, { type: "Political Instability", value: "Common" }],
    historicalTrend: "Historical tensions between communities often erupt into violent conflict."
  },
  // NYERI
  {
    townName: "Nyeri",
    countyName: "Nyeri",
    severity: 4,
    description: "Relatively safe but experiences organized crime syndicates and Mungiki-like activity.",
    latitude: -0.4222,
    longitude: 36.9500,
    crimeStatistics: [{ type: "Organized Crime", value: "Monitored" }, { type: "Robbery", value: "Occasional" }, { type: "Illicit Brewing", value: "Common" }],
    historicalTrend: "Security is generally stable but underlying criminal networks exist."
  },
  {
    townName: "Karatina",
    countyName: "Nyeri",
    severity: 5,
    description: "Bustling market town known for high rates of pickpocketing and theft of produce.",
    latitude: -0.4833,
    longitude: 37.1167,
    crimeStatistics: [{ type: "Pickpocketing", value: "High" }, { type: "Theft of Produce", value: "Frequent" }, { type: "Trade Disputes", value: "Common" }],
    historicalTrend: "Crime is opportunistic and linked to the high volume of commercial activity."
  },
  // BUNGOMA
  {
    townName: "Bungoma",
    countyName: "Bungoma",
    severity: 6,
    description: "Experiences issues with cross-border smuggling and politically instigated violence.",
    latitude: 0.5625,
    longitude: 34.5625,
    crimeStatistics: [{ type: "Smuggling", value: "Common" }, { type: "Political Violence", value: "Periodic" }, { type: "Theft", value: "Frequent" }],
    historicalTrend: "Security situation often deteriorates around election cycles."
  },
   {
    townName: "Malaba",
    countyName: "Busia",
    severity: 6,
    description: "Major border crossing with high levels of cargo theft and smuggling.",
    latitude: 0.6333,
    longitude: 34.2833,
    crimeStatistics: [{ type: "Cargo Theft", value: "High" }, { type: "Smuggling", value: "Prevalent" }, { type: "Currency Fraud", value: "Common" }],
    historicalTrend: "High volume of trade creates opportunities for organized crime."
  },
  // KAKAMEGA
  {
    townName: "Kakamega",
    countyName: "Kakamega",
    severity: 6,
    description: "Known for high rates of boda boda-related crime and occasional violent protests.",
    latitude: 0.2833,
    longitude: 34.7500,
    crimeStatistics: [{ type: "Boda Boda Crime", value: "High" }, { type: "Protests", value: "Occasional" }, { type: "Burglary", value: "Common" }],
    historicalTrend: "Rapid urbanization has led to an increase in opportunistic crime."
  },
  {
    townName: "Mumias",
    countyName: "Kakamega",
    severity: 6,
    description: "Economic decline from sugar industry collapse fuels petty crime and social unrest.",
    latitude: 0.3333,
    longitude: 34.4833,
    crimeStatistics: [{ type: "Petty Theft", value: "High" }, { type: "Protests/Unrest", value: "Periodic" }, { type: "Cane Poaching", value: "Common" }],
    historicalTrend: "Security has deteriorated with the decline of the local economy."
  },
  // LAMU
  {
    townName: "Lamu Old Town",
    countyName: "Lamu",
    severity: 8,
    description: "High risk of terrorist attacks and kidnappings targeting tourists and locals.",
    latitude: -2.2690,
    longitude: 40.9020,
    crimeStatistics: [{ type: "Terrorism", value: "High Risk" }, { type: "Kidnapping", value: "Elevated Risk" }, { type: "Banditry", value: "In Mainland" }],
    historicalTrend: "Security operations have reduced attacks, but the threat remains significant."
  },
  {
    townName: "Mpeketoni",
    countyName: "Lamu",
    severity: 8,
    description: "Has been the target of large-scale terrorist massacres in the past.",
    latitude: -2.3925,
    longitude: 40.6925,
    crimeStatistics: [{ type: "Terrorism", value: "High Risk" }, { type: "Land Clashes", value: "Frequent" }, { type: "Banditry", value: "Common" }],
    historicalTrend: "The area remains tense with a heavy security presence due to past attacks."
  },
  // TRANS NZOIA
  {
    townName: "Kitale",
    countyName: "Trans Nzoia",
    severity: 6,
    description: "High rates of agricultural-related theft and land disputes that can turn violent.",
    latitude: 1.0167,
    longitude: 35.0000,
    crimeStatistics: [{ type: "Land Disputes", value: "Common" }, { type: "Theft of Produce", value: "Frequent" }, { type: "Robbery", value: "Occasional" }],
    historicalTrend: "Tensions over land remain a key driver of insecurity."
  },
  // SAMBURU
  {
    townName: "Maralal",
    countyName: "Samburu",
    severity: 8,
    description: "Epicenter of cattle rustling, banditry, and inter-communal warfare.",
    latitude: 1.0967,
    longitude: 36.7000,
    crimeStatistics: [{ type: "Cattle Rustling", value: "Endemic" }, { type: "Banditry", value: "High" }, { type: "Communal Clashes", value: "Frequent" }],
    historicalTrend: "The proliferation of illegal firearms has exacerbated traditional conflicts."
  },
   {
    townName: "Baragoi",
    countyName: "Samburu",
    severity: 9,
    description: "Infamous for extreme banditry and ambushes targeting security forces.",
    latitude: 1.7833,
    longitude: 36.7833,
    crimeStatistics: [{ type: "Banditry", value: "Extreme" }, { type: "Police Ambushes", value: "High Risk" }, { type: "Cattle Raids", value: "Constant" }],
    historicalTrend: "One of the most insecure areas in the North Rift, with deep-rooted conflict."
  },
  // KERICHO
  {
    townName: "Kericho",
    countyName: "Kericho",
    severity: 4,
    description: "Generally calm but has issues with tea plantation-related disputes and petty crime.",
    latitude: -0.3692,
    longitude: 35.2839,
    crimeStatistics: [{ type: "Labor Disputes", value: "Occasional" }, { type: "Petty Theft", value: "Common" }, { type: "Road Accidents", value: "High" }],
    historicalTrend: "Security is stable, with occasional flare-ups related to the tea industry."
  },
  // MIGORI
  {
    townName: "Migori",
    countyName: "Migori",
    severity: 7,
    description: "Cross-border smuggling from Tanzania, illegal mining conflicts, and political tension.",
    latitude: -1.0634,
    longitude: 34.4731,
    crimeStatistics: [{ type: "Smuggling", value: "High" }, { type: "Mining Conflicts", value: "Frequent" }, { type: "Political Violence", value: "Periodic" }],
    historicalTrend: "A volatile mix of economic and political grievances drives insecurity."
  },
  // TANA RIVER
  {
    townName: "Hola",
    countyName: "Tana River",
    severity: 7,
    description: "Experiences frequent and violent clashes between pastoralist and farming communities.",
    latitude: -1.4833,
    longitude: 40.0333,
    crimeStatistics: [{ type: "Inter-communal Clashes", value: "High Risk" }, { type: "Resource Conflict", value: "Persistent" }, { type: "Banditry", value: "Occasional" }],
    historicalTrend: "Drought and political incitement often trigger violent conflicts."
  },
  // BARINGO
  {
    townName: "Kabarnet",
    countyName: "Baringo",
    severity: 8,
    description: "The town is safe, but surrounding valleys are banditry hotspots with attacks on villages.",
    latitude: 0.4931,
    longitude: 35.7431,
    crimeStatistics: [{ type: "Banditry (Surrounds)", value: "Widespread" }, { type: "Cattle Raids", value: "Frequent" }, { type: "Road Ambush", value: "High Risk" }],
    historicalTrend: "Insecurity in the Kerio Valley has been a long-standing national problem."
  },
    {
    townName: "Marigat",
    countyName: "Baringo",
    severity: 8,
    description: "Gateway to insecure areas, frequently affected by banditry and cattle rustling spillover.",
    latitude: 0.4667,
    longitude: 36.0000,
    crimeStatistics: [{ type: "Banditry", value: "High" }, { type: "Cattle Rustling", value: "Frequent" }, { type: "Displacement", value: "Common" }],
    historicalTrend: "Often caught in the crossfire of conflicts in the Kerio Valley."
  },
  // MACHAKOS
  {
    townName: "Machakos",
    countyName: "Machakos",
    severity: 5,
    description: "Growing urban center facing challenges with muggings, burglaries, and land grabbing.",
    latitude: -1.5167,
    longitude: 37.2667,
    crimeStatistics: [{ type: "Burglary", value: "Increasing" }, { type: "Mugging", value: "Common" }, { type: "Land Grabbing", value: "High" }],
    historicalTrend: "Proximity to Nairobi has led to an increase in urban crime."
  },
   {
    townName: "Athi River",
    countyName: "Machakos",
    severity: 6,
    description: "Industrial area with high rates of cargo theft, industrial espionage, and violent labor disputes.",
    latitude: -1.4500,
    longitude: 36.9833,
    crimeStatistics: [{ type: "Cargo Hijacking", value: "High" }, { type: "Labor Unrest", value: "Periodic" }, { type: "Mugging", value: "Frequent" }],
    historicalTrend: "Crime is often organized and targets the numerous factories and transport routes."
  },
  // MAKUENI
  {
    townName: "Wote",
    countyName: "Makueni",
    severity: 4,
    description: "Relatively peaceful, but with rising cases of petty crime and domestic disputes.",
    latitude: -1.7833,
    longitude: 37.6333,
    crimeStatistics: [{ type: "Petty Theft", value: "Increasing" }, { type: "Domestic Violence", value: "High" }, { type: "Illicit Brewing", value: "Common" }],
    historicalTrend: "General security is good, but social crimes are a concern."
  },
  // TAITA-TAVETA
  {
    townName: "Voi",
    countyName: "Taita-Taveta",
    severity: 6,
    description: "Major transit point with high rates of cargo theft, highway robberies, and human-wildlife conflict.",
    latitude: -3.3925,
    longitude: 38.5625,
    crimeStatistics: [{ type: "Highway Robbery", value: "Common" }, { type: "Cargo Theft", value: "High" }, { type: "Human-Wildlife Conflict", value: "Frequent" }],
    historicalTrend: "Its location on the Nairobi-Mombasa highway makes it a crime hotspot."
  },
  // KILIFI
  {
    townName: "Malindi",
    countyName: "Kilifi",
    severity: 7,
    description: "Faces threats from organized crime targeting the tourism sector, drug trafficking, and radicalization.",
    latitude: -3.2167,
    longitude: 40.1167,
    crimeStatistics: [{ type: "Drug Trafficking", value: "High" }, { type: "Tourism-related Crime", value: "Common" }, { type: "Extremism", value: "Monitored" }],
    historicalTrend: "A complex security environment with both conventional and extremist threats."
  },
  {
    townName: "Mtwapa",
    countyName: "Kilifi",
    severity: 7,
    description: "Known for its vibrant nightlife but also high rates of commercial sex work, drug abuse, and related crime.",
    latitude: -3.9531,
    longitude: 39.7569,
    crimeStatistics: [{ type: "Drug Abuse", value: "Prevalent" }, { type: "Assault", value: "Common" }, { type: "Theft", value: "Frequent" }],
    historicalTrend: "Crime is often linked to the tourism and entertainment industries."
  },
  // ELGEYO-MARAKWET
  {
    townName: "Iten",
    countyName: "Elgeyo-Marakwet",
    severity: 7,
    description: "While famous for athletes, the surrounding Kerio Valley is plagued by deadly banditry.",
    latitude: 0.6722,
    longitude: 35.5083,
    crimeStatistics: [{ type: "Banditry", value: "High Risk (Valley)" }, { type: "Cattle Rustling", value: "Frequent" }, { type: "Athlete Attacks", value: "Rare but high-profile" }],
    historicalTrend: "The contrast between the peaceful town and violent valleys is stark."
  },
  // KIambu
  {
    townName: "Kiambu",
    countyName: "Kiambu",
    severity: 6,
    description: "High rates of burglary, land fraud, and crime spillover from its proximity to Nairobi.",
    latitude: -1.1714,
    longitude: 36.8333,
    crimeStatistics: [{ type: "Burglary", value: "High" }, { type: "Land Fraud", value: "Common" }, { type: "Mugging", value: "Frequent" }],
    historicalTrend: "Crime has increased with rapid urbanization and rising land values."
  },
  {
    townName: "Ruiru",
    countyName: "Kiambu",
    severity: 7,
    description: "A densely populated Nairobi satellite town with high rates of carjackings, kidnappings, and violent robberies.",
    latitude: -1.1500,
    longitude: 36.9667,
    crimeStatistics: [{ type: "Carjacking", value: "High" }, { type: "Kidnapping for Ransom", value: "Occasional" }, { type: "Mugging", value: "Frequent" }],
    historicalTrend: "Rapid population growth has outpaced security infrastructure, leading to rising crime."
  },
   {
    townName: "Thika",
    countyName: "Kiambu",
    severity: 6,
    description: "Industrial town facing challenges with organized crime, carjackings, and muggings.",
    latitude: -1.0500,
    longitude: 37.0833,
    crimeStatistics: [{ type: "Carjacking", value: "Common" }, { type: "Mugging", value: "Frequent" }, { type: "Industrial Theft", value: "High" }],
    historicalTrend: "Increased urbanization and industrialization have been accompanied by a rise in crime."
  },
  // Meru
  {
    townName: "Maua",
    countyName: "Meru",
    severity: 6,
    description: "The hub of the miraa (khat) trade, which fuels cash-based crime and disputes.",
    latitude: 0.2333,
    longitude: 37.9333,
    crimeStatistics: [{ type: "Cash-in-Transit Heists", value: "Occasional" }, { type: "Trade Disputes", value: "Common" }, { type: "Assault", value: "Frequent" }],
    historicalTrend: "The lucrative miraa trade attracts criminal elements, creating a volatile environment."
  },
  // West Pokot
  {
    townName: "Kapenguria",
    countyName: "West Pokot",
    severity: 8,
    description: "Bordered by conflict zones, the area experiences frequent cattle rustling and bandit attacks.",
    latitude: 1.2333,
    longitude: 35.1167,
    crimeStatistics: [{ type: "Cattle Rustling", value: "Persistent" }, { type: "Banditry", value: "High Risk" }, { type: "Communal Clashes", value: "Frequent" }],
    historicalTrend: "The area is at the epicenter of North Rift violence, though the town itself is more secure."
  },
  // Homa Bay
  {
    townName: "Homa Bay",
    countyName: "Homa Bay",
    severity: 5,
    description: "Experiences high rates of crime related to the fishing industry on Lake Victoria, including piracy.",
    latitude: -0.5250,
    longitude: 34.4583,
    crimeStatistics: [{ type: "Illegal Fishing Disputes", value: "Common" }, { type: "Boat/Engine Theft", value: "Frequent" }, { type: "Smuggling", value: "Occasional" }],
    historicalTrend: "Cross-border maritime crime remains a significant challenge for local authorities."
  },
   // Kwale
  {
    townName: "Ukunda",
    countyName: "Kwale",
    severity: 7,
    description: "Tourist hotspot (Diani Beach) that attracts crime, including beach muggings, burglaries, and drug peddling.",
    latitude: -4.2833,
    longitude: 39.5667,
    crimeStatistics: [{ type: "Tourist-targeted Crime", value: "High" }, { type: "Burglary", value: "Frequent" }, { type: "Drug Dealing", value: "Prevalent" }],
    historicalTrend: "Crime often peaks during the high tourist season."
  },
  // Narok
  {
    townName: "Narok Town",
    countyName: "Narok",
    severity: 6,
    description: "Key issues include human-wildlife conflict, land clashes, and highway robberies on the road to Maasai Mara.",
    latitude: -1.0833,
    longitude: 35.8667,
    crimeStatistics: [{ type: "Human-Wildlife Conflict", value: "Frequent" }, { type: "Land Clashes", value: "Periodic" }, { type: "Highway Robbery", value: "Occasional" }],
    historicalTrend: "Tensions over land and resources are the primary drivers of insecurity."
  },
  // Laikipia
  {
    townName: "Nanyuki",
    countyName: "Laikipia",
    severity: 6,
    description: "Military presence provides stability, but surrounding areas suffer from farm invasions and cattle rustling.",
    latitude: 0.0167,
    longitude: 37.0667,
    crimeStatistics: [{ type: "Farm Invasions", value: "High Risk (Rural)" }, { type: "Cattle Rustling", value: "Common" }, { type: "Theft", value: "Increasing" }],
    historicalTrend: "Conflict between ranchers/farmers and pastoralists is a major security concern."
  },
  {
    townName: "Rumuruti",
    countyName: "Laikipia",
    severity: 7,
    description: "Hotspot for violent farm invasions, political incitement, and cattle rustling.",
    latitude: 0.2667,
    longitude: 36.5333,
    crimeStatistics: [{ type: "Farm Invasions", value: "High" }, { type: "Cattle Rustling", value: "Frequent" }, { type: "Political Incitement", value: "Common" }],
    historicalTrend: "Competition for pasture and water frequently escalates into violent conflict."
  },
  // Murang'a
  {
    townName: "Murang'a",
    countyName: "Murang'a",
    severity: 5,
    description: "Experiences problems with Mungiki-like gangs, illicit brewing, and occasional violent crime.",
    latitude: -0.7167,
    longitude: 37.1500,
    crimeStatistics: [{ type: "Gang Activity", value: "Monitored" }, { type: "Illicit Brewing", value: "High" }, { type: "Assault", value: "Occasional" }],
    historicalTrend: "While major organized crime has reduced, underlying issues persist."
  },
  // Vihiga
  {
    townName: "Mbale",
    countyName: "Vihiga",
    severity: 4,
    description: "Generally peaceful but has seen a rise in opportunistic crimes like burglary and boda boda theft.",
    latitude: 0.0833,
    longitude: 34.7167,
    crimeStatistics: [{ type: "Burglary", value: "Increasing" }, { type: "Boda Boda Theft", value: "Common" }, { type: "Domestic Disputes", value: "High" }],
    historicalTrend: "A relatively low-crime area compared to major urban centers."
  },
  // Busia
  {
    townName: "Busia",
    countyName: "Busia",
    severity: 6,
    description: "Bustling border town with significant smuggling of goods and contraband.",
    latitude: 0.4625,
    longitude: 34.1039,
    crimeStatistics: [{ type: "Smuggling", value: "Very High" }, { type: "Human Trafficking", value: "Monitored" }, { type: "Petty Crime", value: "Frequent" }],
    historicalTrend: "High volume of cross-border activity fuels illicit trade."
  },
  // Siaya
  {
    townName: "Siaya",
    countyName: "Siaya",
    severity: 5,
    description: "Prone to politically motivated violence and crime related to fishing on Lake Kanyaboli.",
    latitude: 0.0667,
    longitude: 34.2833,
    crimeStatistics: [{ type: "Political Tension", value: "High (Periodic)" }, { type: "Fishing Disputes", value: "Common" }, { type: "Theft", value: "Increasing" }],
    historicalTrend: "Security is generally stable outside of election periods."
  },
  // Embu
  {
    townName: "Embu",
    countyName: "Embu",
    severity: 4,
    description: "Relatively safe town; main security issues are petty theft and agricultural produce theft.",
    latitude: -0.5333,
    longitude: 37.4500,
    crimeStatistics: [{ type: "Petty Theft", value: "Common" }, { type: "Agricultural Theft", value: "Frequent" }, { type: "Burglary", value: "Occasional" }],
    historicalTrend: "Crime rates are low and stable, with no major organized threats."
  },
  // Kirinyaga
  {
    townName: "Kerugoya",
    countyName: "Kirinyaga",
    severity: 5,
    description: "Known for issues related to illicit brewing, which contributes to assault and social disorder.",
    latitude: -0.5000,
    longitude: 37.2833,
    crimeStatistics: [{ type: "Illicit Brewing", value: "Endemic" }, { type: "Assault", value: "Common" }, { type: "Land Disputes", value: "Occasional" }],
    historicalTrend: "Efforts to crack down on illicit alcohol have had mixed results."
  },
  // Nyamira
  {
    townName: "Nyamira",
    countyName: "Nyamira",
    severity: 4,
    description: "Low overall crime rates, but land disputes can occasionally become violent.",
    latitude: -0.5667,
    longitude: 34.9333,
    crimeStatistics: [{ type: "Land Disputes", value: "High" }, { type: "Petty Theft", value: "Common" }, { type: "Domestic Violence", value: "Monitored" }],
    historicalTrend: "A generally peaceful county with stable security."
  },
  // Kisii
  {
    townName: "Kisii",
    countyName: "Kisii",
    severity: 5,
    description: "Bustling commercial hub with high rates of boda boda accidents and related crime.",
    latitude: -0.6817,
    longitude: 34.7667,
    crimeStatistics: [{ type: "Boda Boda Crime", value: "High" }, { type: "Mugging", value: "Common" }, { type: "Financial Scams", value: "Increasing" }],
    historicalTrend: "Rapid economic growth has attracted both opportunity and crime."
  },
  // Bomet
  {
    townName: "Bomet",
    countyName: "Bomet",
    severity: 4,
    description: "Generally safe area with primary security concerns being livestock theft and road accidents.",
    latitude: -0.7833,
    longitude: 35.3500,
    crimeStatistics: [{ type: "Livestock Theft", value: "Common" }, { type: "Road Accidents", value: "High" }, { type: "Petty Crime", value: "Low" }],
    historicalTrend: "Stable security environment with no major threats."
  },
  // Nyandarua
  {
    townName: "Ol Kalou",
    countyName: "Nyandarua",
    severity: 4,
    description: "Main security issues revolve around theft of farm produce and livestock.",
    latitude: -0.2667,
    longitude: 36.3833,
    crimeStatistics: [{ type: "Agricultural Theft", value: "Frequent" }, { type: "Livestock Theft", value: "Occasional" }, { type: "Burglary", value: "Low" }],
    historicalTrend: "Crime is mostly non-violent and related to the agricultural economy."
  },
  // Nandi
  {
    townName: "Kapsabet",
    countyName: "Nandi",
    severity: 4,
    description: "Relatively safe, but land disputes and cattle rustling occur at the county borders.",
    latitude: 0.2000,
    longitude: 35.1000,
    crimeStatistics: [{ type: "Land Disputes", value: "Common" }, { type: "Cattle Rustling", value: "Border Areas" }, { type: "Theft", value: "Low" }],
    historicalTrend: "Peaceful core with occasional spillover of conflict from neighboring counties."
  },
  // Tharaka-Nithi
  {
    townName: "Chuka",
    countyName: "Tharaka-Nithi",
    severity: 4,
    description: "A safe town, with the main issue being petty crimes related to the university student population.",
    latitude: -0.3333,
    longitude: 37.6500,
    crimeStatistics: [{ type: "Petty Theft", value: "Common" }, { type: "Illicit Brewing", value: "Monitored" }, { type: "Assault", value: "Low" }],
    historicalTrend: "Security is stable and has not seen significant deterioration."
  },
  // Kitui
  {
    townName: "Kitui",
    countyName: "Kitui",
    severity: 5,
    description: "Faces challenges from resource-based conflicts (water, pasture) and banditry on its borders.",
    latitude: -1.3667,
    longitude: 38.0167,
    crimeStatistics: [{ type: "Resource Conflicts", value: "Common" }, { type: "Banditry", value: "Border Areas" }, { type: "Livestock Theft", value: "Frequent" }],
    historicalTrend: "Drought often exacerbates security issues with neighboring pastoral communities."
  }
]
