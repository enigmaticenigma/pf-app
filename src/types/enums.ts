const airports = [
  {
    label: "Gatwick Airport [EGKK]",
    value: "egkk",
  },
  { label: "Kitillä Airport [EFKT]", value: "efkt" },
  { label: "Tivat Airport [LYTV]", value: "lytv" },
  { label: "Menorca Airpot [LEMH]", value: "lemh" },
  {
    label: "Gran Canaria Airport [GCLP]",
    value: "gclp",
  },
  {
    label: "Southampton Airport [EGHI]",
    value: "eghi",
  },
  {
    label: "Punta Cana Airport [MDPC]",
    value: "mdpc",
  },
  {
    label: "Arroyo Barril [MDAP]",
    value: "mdab",
  },
] as const

const wakeCategory = [
  {
    label: "L - Light (MTOW <= 7000kg)",
    value: "l",
  },
  { label: "M - Medium (MTOW <= 136000kg)", value: "m" },
  { label: "H - Heavy (MTOW >= 136000kg)", value: "h" },
  { label: "J - Super (ICAO Doc 8643)", value: "j" },
] as const

const flightRules = [
  {
    label: "I - Instrument Flight",
    value: "i",
  },
  {
    label: "V - Visual Flight",
    value: "v",
  },
  {
    label: "Y - IFR/VFR (IFR to VFR)",
    value: "y",
  },
  {
    label: "Z - VFR/IFR (VFR to IFR)",
    value: "z",
  },
] as const

const flightTypes = [
  {
    label: "S - Scheduled Air Service",
    value: "s",
  },
  { label: "N - Non-scheduled Air Service", value: "n" },
  {
    label: "G - General Aviation",
    value: "g",
  },
  {
    label: "M - Military",
    value: "m",
  },
  { label: "X - Other", value: "x" },
] as const

const aircraftTypes = [
  {
    label: "B712 - Boeing 717-200",
    value: "b712",
  },
  {
    label: "B738 - Boeing 737-800",
    value: "b738",
  },
  {
    label: "B752 - Boeing 757-200",
    value: "b752",
  },
  {
    label: "B77W - Boeing 777-300ER",
    value: "b77w",
  },
  {
    label: "B789 - Boeing 787-9 Dreamliner",
    value: "b789",
  },
  {
    label: "BCS3 - Airbus A-220-300",
    value: "bcs3",
  },
  {
    label: "A20N - Airbus A-320neo",
    value: "a20n",
  },
  {
    label: "A333 - Airbus A-330-300",
    value: "a333",
  },
  {
    label: "A359 - Airbus A-350-900 XWB",
    value: "A359",
  },
  {
    label: "SW-4 - Fairchild Swearingen SA-227AC Metro",
    value: "sw-4",
  },
  {
    label: "MD11 - McDonnell Douglas MD-11",
    value: "md11",
  },
  {
    label: "C550 - Cessna 550 Citation 2",
    value: "c550",
  },
  {
    label: "TBM9 - Daher TBM-900",
    value: "tbm9",
  },
  {
    label: "HAWK - Bae Systems Hawk T1",
    value: "hawk",
  },
  {
    label: "EUFI - Eurofighter Typhoon",
    value: "eufi",
  },
  {
    label: "DH8D - Bombadier DHC-8-400 Dash 8",
    value: "bh8d",
  },
  {
    label: "C150 - Cessna C150A",
    value: "c150",
  },
  {
    label: "F100 - Fokker 100",
    value: "f100",
  },
  {
    label: "BE58 - Beechcraft G58 Baron",
    value: "be58",
  },
] as const

const towerPositions = [
  { label: "Center", value: "center" },
  { label: "Ground", value: "ground" },
  { label: "Delivery", value: "delivery" },
  { label: "Approach", value: "approach" },
  { label: "Tower", value: "tower" },
] as const

export {
  airports,
  wakeCategory,
  flightRules,
  flightTypes,
  aircraftTypes,
  towerPositions,
}
