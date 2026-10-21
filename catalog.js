/* -------------------- Farhan Fades — shared data -------------------- */

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
  { id:"textured", name:"Textured Crop",    img:"https://picsum.photos/seed/farhan-crop/600/750",    desc:"Low-maintenance, high-impact. Works with almost any hair type." },
  { id:"pompadour",name:"Pompadour",        img:"https://picsum.photos/seed/farhan-pomp/600/750",    desc:"Volume on top, tight sides. A classic that still turns heads." },
  { id:"fade",     name:"Skin Fade",        img:"https://picsum.photos/seed/farhan-fade/600/750",    desc:"Sharp, clean, grows out well. Ask for low, mid or high." },
  { id:"undercut", name:"Undercut",         img:"https://picsum.photos/seed/farhan-under/600/750",   desc:"Disconnected length on top with clipper-shaved sides." },
  { id:"slick",    name:"Slick Back",       img:"https://picsum.photos/seed/farhan-slick/600/750",   desc:"Business in the front, party never. Holds with a matte paste." },
  { id:"quiff",    name:"Messy Quiff",      img:"https://picsum.photos/seed/farhan-quiff/600/750",   desc:"Lived-in height, effortless-looking — actually takes 4 minutes." },
  { id:"sidepart", name:"Side Part",        img:"https://picsum.photos/seed/farhan-part/600/750",    desc:"A hard or soft part with a gentleman's finish. Wedding favourite." },
  { id:"buzz",     name:"Buzz Cut",         img:"https://picsum.photos/seed/farhan-buzz/600/750",    desc:"Zero effort, maximum summer. Ask for a skin fade version." },
  { id:"curly",    name:"Curly Top",        img:"https://picsum.photos/seed/farhan-curly/600/750",   desc:"We cut curls dry, shape by shape — never a number guard." },
];

const BARBERS = [
  { id:"marcus", name:"Farhan",        role:"Master Barber & founder",  img:"https://picsum.photos/seed/farhan-marcus/400/400", speciality:"Fades, scissor work and making nervous first-timers relax." },
  { id:"elliot", name:"Elliot Byrne",  role:"Senior Barber · 9 yrs",   img:"https://picsum.photos/seed/farhan-elliot/400/400", speciality:"Beard architecture, hot towel shaves and classic side parts." },
  { id:"niall",  name:"Niall Duffy",   role:"Barber · 4 yrs",          img:"https://picsum.photos/seed/farhan-niall/400/400",  speciality:"Textured crops, curly hair and the fastest fade in the shop." },
];

/* Real customer reviews — public sources (reviewbritain / localitybiz) */
const REVIEWS = [
  { text:"Perfect haircut every time — I love the way he uses the trimmer. The face looks refreshed every time!", who:"Manish" },
  { text:"Top quality barber, great customer service. Best in Limerick, would recommend.", who:"Brían" },
  { text:"Always coming out of there looking fresh, very reliable. Would highly recommend.", who:"James" },
  { text:"Very nice and easy to deal with — he knows the customer's haircut without asking.", who:"Jack" },
  { text:"Nice haircuts all the time. Highly recommend it — best barber in Limerick.", who:"Kyle" },
  { text:"Amazing barber, friendly and welcoming and professional at every level. Top notch.", who:"Verified customer" },
];

const FAQS = [
  { q:"Do you take walk-ins?", a:"Yes — walk-ins are always welcome. Booking online just means you skip the wait; there's no surcharge either way." },
  { q:"How long does a cut take?", a:"A classic cut runs about 30 minutes, a skin fade 45, and a cut plus beard around an hour. Your booking shows the estimated time." },
  { q:"Do I need to pay a deposit?", a:"No deposit needed. You pay in the shop after your cut — we take cash and card." },
  { q:"What's your cancellation policy?", a:"Plans change — just give us at least 2 hours' notice and we'll rebook you free. No-shows and same-day cancellations may be charged 50%." },
  { q:"Can I bring my child?", a:"Of course. Kids' cuts are €18 and our barbers are used to wriggly customers. Under-12s get the same care, smaller chairs." },
  { q:"Where can I park?", a:"There's street parking on Roches Street and the multi-storey on nearby Upper Cecil Street, a two-minute walk away." },
  { q:"Do you cut all hair types?", a:"Yes — from straight and wavy to tight curls and afro hair. If you're unsure, book a consultation and we'll talk it through first." },
  { q:"Can I pay by card or contactless?", a:"Cash, card and contactless are all accepted. Gift vouchers can be redeemed against any service." },
];

const VOUCHERS = [
  { value:25, label:"A fresh cut",        desc:"One classic cut or kids' cut." },
  { value:42, label:"Cut + beard",        desc:"The full works — cut and beard sculpt." },
  { value:60, label:"Gentleman's bundle", desc:"Two cuts, or one cut plus a hot towel shave." },
  { value:100,label:"The big one",        desc:"Four cuts, or spoil someone for months." },
];

const GALLERY = [
  { img:"https://picsum.photos/seed/farhan-g1/600/600", alt:"Skin fade with textured top" },
  { img:"https://picsum.photos/seed/farhan-g2/600/600", alt:"Classic scissor cut" },
  { img:"https://picsum.photos/seed/farhan-g3/600/600", alt:"Beard sculpt and line-up" },
  { img:"https://picsum.photos/seed/farhan-g4/600/600", alt:"Pompadour with taper" },
  { img:"https://picsum.photos/seed/farhan-g5/600/600", alt:"Buzz cut with skin fade sides" },
  { img:"https://picsum.photos/seed/farhan-g6/600/600", alt:"Curly top shape-up" },
  { img:"https://picsum.photos/seed/farhan-g7/600/600", alt:"Side part and hot towel finish" },
  { img:"https://picsum.photos/seed/farhan-g8/600/600", alt:"Textured crop with fringe" },
];

/* Real opening hours — public listing: findglocal (53 Roches St, Limerick) */
const HOURS = [
  { day:"Monday",    open:["09:00","19:00"] },
  { day:"Tuesday",   open:["09:00","19:00"] },
  { day:"Wednesday", open:["09:00","19:00"] },
  { day:"Thursday",  open:["09:00","19:00"] },
  { day:"Friday",    open:["09:00","19:00"] },
  { day:"Saturday",  open:["09:00","19:00"] },
  { day:"Sunday",    open:["10:30","19:00"] },
];

/* Verified public business details (Limerick Fades) */
const SHOP = {
  name:"Farhan Fades",
  tradingAs:"Limerick Fades",
  street:"53 Roches St, Prior's-Land",
  city:"Limerick",
  eircode:"V94 XP83",
  country:"Ireland",
  phone:"+353 83 312 6955",
  phoneTel:"+353833126955",
  phoneOld:"+353 83 146 9595",
  rating:4.6,
  reviews:126,
  facebook:"https://www.facebook.com/akhtarbarber",
  maps:"https://maps.google.com/?q=53+Roches+St,+Limerick,+V94+XP83",
};

const money = n => `€${n}`;
const svc = id => SERVICES.find(s => s.id === id);
const styleById = id => STYLES.find(s => s.id === id);
const barberById = id => BARBERS.find(b => b.id === id);

/* -------------------- booking storage (localStorage) -------------------- */
const BOOK_KEY = "farhan.bookings";

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

function findBookingByRef(ref) {
  const r = String(ref || "").trim().toUpperCase();
  return loadBookings().find(b => b.ref === r) || null;
}

function cancelBooking(ref) {
  const all = loadBookings();
  const i = all.findIndex(b => b.ref === String(ref || "").trim().toUpperCase());
  if (i === -1) return false;
  all.splice(i, 1);
  localStorage.setItem(BOOK_KEY, JSON.stringify(all));
  return true;
}

function upcomingBookings() {
  const today = new Date().toISOString().slice(0, 10);
  return loadBookings()
    .filter(b => b.date >= today)
    .sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time));
}

/* Generate time slots for a given date (open 7 days — see HOURS) */
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
