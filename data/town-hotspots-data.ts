import type { TownHotspotData } from '../types';

export const preGeneratedHotspotData: TownHotspotData[] = [
  // NAIROBI
  {
    townName: "Kayole",
    countyName: "Nairobi",
    severity: 9,
    description: "High rates of armed robberies, carjackings, and gang-related violence.",
    latitude: -1.2803,
    longitude: 36.9221,
    crimeStatistics: [{ type: "Armed Robbery", value: "Frequent" }, { type: "Gang Activity", value: "High" }, { type: "Mugging", value: "Very Common" }],
    historicalTrend: "Crime rates have remained stubbornly high despite police operations."
  },
  {
    townName: "Eastleigh",
    countyName: "Nairobi",
    severity: 8,
    description: "Known for muggings, business robberies, and occasional terror-related threats.",
    latitude: -1.2750,
    longitude: 36.8500,
    crimeStatistics: [{ type: "Mugging", value: "Daily" }, { type: "Business Robbery", value: "Common" }, { type: "Terror Threats", value: "Elevated" }],
    historicalTrend: "Security situation is volatile and linked to regional instability."
  },
  {
    townName: "Kibera",
    countyName: "Nairobi",
    severity: 8,
    description: "High poverty levels contribute to rampant petty crime, muggings, and political violence.",
    latitude: -1.3125,
    longitude: 36.7875,
    crimeStatistics: [{ type: "Petty Crime", value: "Endemic" }, { type: "Assault", value: "Common" }, { type: "Political Violence", value: "Periodic" }],
    historicalTrend: "Persistent insecurity linked to socio-economic challenges."
  },
  // MOMBASA
  {
    townName: "Kisauni",
    countyName: "Mombasa",
    severity: 8,
    description: "Hub for juvenile gangs (wakali kwanza), drug trafficking, and violent robberies.",
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
  // RIFT VALLEY
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
    townName: "Eldoret CBD",
    countyName: "Uasin Gishu",
    severity: 6,
    description: "Experiences high levels of organized crime, including vehicle theft and bank fraud.",
    latitude: 0.5143,
    longitude: 35.2698,
    crimeStatistics: [{ type: "Vehicle Theft", value: "Increasing" }, { type: "Financial Crime", value: "High" }, { type: "Mugging", value: "Common" }],
    historicalTrend: "Urban crime has been on the rise as the town grows."
  },
  {
    townName: "Nakuru West",
    countyName: "Nakuru",
    severity: 7,
    description: "Areas like Kaptembwa and Rhonda are known for organized gangs and violent robberies.",
    latitude: -0.3031,
    longitude: 36.0800,
    crimeStatistics: [{ type: "Organized Gangs", value: "Active" }, { type: "Violent Robbery", value: "Frequent" }, { type: "Assault", value: "Common" }],
    historicalTrend: "Gang activity has been a persistent security challenge for years."
  },
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
  // NORTH EASTERN
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
    townName: "Wajir",
    countyName: "Wajir",
    severity: 8,
    description: "Faces threats from terrorism, inter-clan conflicts, and arms smuggling.",
    latitude: 1.7471,
    longitude: 40.0583,
    crimeStatistics: [{ type: "Terrorism", value: "Elevated Risk" }, { type: "Clan Conflicts", value: "Periodic" }, { type: "Arms Smuggling", value: "High" }],
    historicalTrend: "A combination of factors makes the security environment complex and challenging."
  },
  // EASTERN
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
  // CENTRAL
  {
    townName: "Nyeri Town",
    countyName: "Nyeri",
    severity: 5,
    description: "Relatively safe but experiences organized crime syndicates and Mungiki-like activity.",
    latitude: -0.4222,
    longitude: 36.9500,
    crimeStatistics: [{ type: "Organized Crime", value: "Monitored" }, { type: "Robbery", value: "Occasional" }, { type: "Extortion", value: "Low" }],
    historicalTrend: "Security is generally stable but underlying criminal networks exist."
  },
  // WESTERN
  {
    townName: "Bungoma",
    countyName: "Bungoma",
    severity: 6,
    description: "Experiences issues with cross-border smuggling and has politically instigated violence.",
    latitude: 0.5625,
    longitude: 34.5625,
    crimeStatistics: [{ type: "Smuggling", value: "Common" }, { type: "Political Violence", value: "Periodic" }, { type: "Theft", value: "Frequent" }],
    historicalTrend: "Security situation often deteriorates around election cycles."
  },
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
  // COAST
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
  // Additional Towns for Coverage
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
    townName: "Kericho",
    countyName: "Kericho",
    severity: 4,
    description: "Generally calm but has issues with tea plantation-related disputes and petty crime.",
    latitude: -0.3692,
    longitude: 35.2839,
    crimeStatistics: [{ type: "Labor Disputes", value: "Occasional" }, { type: "Petty Theft", value: "Common" }, { type: "Road Accidents", value: "High" }],
    historicalTrend: "Security is stable, with occasional flare-ups related to the tea industry."
  },
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
  {
    townName: "Kabarnet",
    countyName: "Baringo",
    severity: 8,
    description: "Surrounding valleys are banditry hotspots, with frequent attacks on villages and travelers.",
    latitude: 0.4931,
    longitude: 35.7431,
    crimeStatistics: [{ type: "Banditry", value: "Widespread" }, { type: "Cattle Raids", value: "Frequent" }, { type: "Road Ambush", value: "High Risk" }],
    historicalTrend: "Insecurity in the Kerio Valley has been a long-standing national problem."
  },
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
    townName: "Wote",
    countyName: "Makueni",
    severity: 4,
    description: "Relatively peaceful, but with rising cases of petty crime and domestic disputes.",
    latitude: -1.7833,
    longitude: 37.6333,
    crimeStatistics: [{ type: "Petty Theft", value: "Increasing" }, { type: "Domestic Violence", value: "High" }, { type: "Illicit Brewing", value: "Common" }],
    historicalTrend: "General security is good, but social crimes are a concern."
  },
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
    townName: "Iten",
    countyName: "Elgeyo-Marakwet",
    severity: 7,
    description: "While famous for athletes, the surrounding Kerio Valley is plagued by deadly banditry.",
    latitude: 0.6722,
    longitude: 35.5083,
    crimeStatistics: [{ type: "Banditry", value: "High Risk (Valley)" }, { type: "Cattle Rustling", value: "Frequent" }, { type: "Athlete Attacks", value: "Rare but high-profile" }],
    historicalTrend: "The contrast between the peaceful town and violent valleys is stark."
  }
]
