/* -------------------- Oakwood Barbers — shared data -------------------- */

const SERVICES = [
  { id:"classic",   name:"Classic Cut",      price:25, mins:30, desc:"Scissor or clipper cut, finished with a hot towel neck clean-up." },
  { id:"fade",      name:"Skin Fade",        price:32, mins:45, desc:"Bald-to-blade fade with your choice of top length and styling." },
  { id:"crop",      name:"Textured Crop",    price:30, mins:40, desc:"Razor-textured French crop with a soft fringe and tapered sides." },
  { id:"beard",     name:"Beard Sculpt",     price:18, mins:20, desc:"Shape, line-up and oil. Straight-razor edges on request." },
  { id:"cutbeard",  name:"Cut + Beard",      price:42, mins:55, desc:"Any haircut paired with a full beard sculpt. Our best value." },
  { id:"shave",     name:"Hot Towel Shave",  price:28, mins:30, desc:"Traditional wet shave — hot towels, badger brush, cold finish." },
  { id:"kids",      name:"Kids Cut (U12)",   price:18, mins:25, desc:"Patience included at no extra charge. Same chair, smaller human." },
  { id:"buzz",      name:"Buzz Cut",         price:18, mins:15, desc:"One guard all over, or ask for a number on top with faded sides." },
];

const STYLES = [
  { id:"textured", name:"Textured Crop",    img:"https://picsum.photos/seed/oak-crop/600/750",    desc:"Low-maintenance, high-impact. Works with almost any hair type." },
  { id:"pompadour",name:"Pompadour",        img:"https://picsum.photos/seed/oak-pomp/600/750",    desc:"Volume on top, tight sides. A classic that still turns heads." },
  { id:"fade",     name:"Skin Fade",        img:"https://picsum.photos/seed/oak-fade/600/750",    desc:"Sharp, clean, grows out well. Ask for low, mid or high." },
  { id:"undercut", name:"Undercut",         img:"https://picsum.photos/seed/oak-under/600/750",   desc:"Disconnected length on top with clipper-shaved sides." },
  { id:"slick",    name:"Slick Back",       img:"https://picsum.photos/seed/oak-slick/600/750",   desc:"Business in the front, party never. Holds with a matte paste." },
  { id:"quiff",    name:"Messy Quiff",      img:"https://picsum.photos/seed/oak-quiff/600/750",   desc:"Lived-in height, effortless-looking — actually takes 4 minutes." },
  { id:"sidepart", name:"Side Part",        img:"https://picsum.photos/seed/oak-part/600/750",    desc:"A hard or soft part with a gentleman's finish. Wedding favourite." },
  { id:"buzz",     name:"Buzz Cut",         img:"https://picsum.photos/seed/oak-buzz/600/750",    desc:"Zero effort, maximum summer. Ask for a skin fade version." },
  { id:"curly",    name:"Curly Top",        img:"https://picsum.photos/seed/oak-curly/600/750",   desc:"We cut curls dry, shape by shape — never a number guard." },
];

const BARBERS = [
  { id:"marcus", name:"Marcus Quinn",  role:"Master Barber · 14 yrs",  img:"https://picsum.photos/seed/oak-marcus/400/400", speciality:"Fades, scissor work and making nervous first-timers relax." },
  { id:"elliot", name:"Elliot Byrne",  role:"Senior Barber · 9 yrs",   img:"https://picsum.photos/seed/oak-elliot/400/400", speciality:"Beard architecture, hot towel shaves and classic side parts." },
  { id:"niall",  name:"Niall Duffy",   role:"Barber · 4 yrs",          img:"https://picsum.photos/seed/oak-niall/400/400",  speciality:"Textured crops, curly hair and the fastest fade in the shop." },
];

const HOURS = [
  { day:"Monday",    open:null },
  { day:"Tuesday",   open:["09:00","18:00"] },
  { day:"Wednesday", open:["09:00","19:00"] },
  { day:"Thursday",  open:["09:00","20:00"] },
  { day:"Friday",    open:["09:00","20:00"] },
  { day:"Saturday",  open:["08:30","17:00"] },
  { day:"Sunday",    open:null },
];

const money = n => `$${n}`;
const svc = id => SERVICES.find(s => s.id === id);
const styleById = id => STYLES.find(s => s.id === id);
const barberById = id => BARBERS.find(b => b.id === id);

/* -------------------- booking storage (localStorage) -------------------- */
const BOOK_KEY = "oakwood.bookings";

function loadBookings() {
  try { return JSON.parse(localStorage.getItem(BOOK_KEY)) || []; }
  catch { return []; }
}

function saveBooking(b) {
  const all = loadBookings();
  all.push(b);
  localStorage.setItem(BOOK_KEY, JSON.stringify(all));
  return b;
}

function slotTaken(dateStr, timeStr, barberId) {
  return loadBookings().some(b =>
    b.date === dateStr && b.time === timeStr &&
    (barberId === "any" || b.barber === "any" || b.barber === barberId)
  );
}

/* Generate time slots for a given date (Tue–Sat opening hours) */
function slotsFor(dateStr) {
  const d = new Date(dateStr + "T12:00:00");
  const day = d.getDay(); // 0=Sun … 6=Sat
  const hours = HOURS[day === 0 ? 0 : day === 6 ? 6 : day];
  if (!hours || !hours.open) return [];
  const [oh, om] = hours.open[0].split(":").map(Number);
  const [ch, cm] = hours.open[1].split(":").map(Number);
  const out = [];
  for (let m = oh * 60 + om; m + 30 <= ch * 60 + cm; m += 30) {
    out.push(`${String(Math.floor(m / 60)).padStart(2, "0")}:${String(m % 60).padStart(2, "0")}`);
  }
  return out;
}
