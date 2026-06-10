// ── REAL FIFA WORLD CUP 2026 MATCH CATALOGUE & CATEGORY BASELINE PRICES ──
const matches = [
  {
    id: "wc_m1",
    stage: 'group',
    label: 'Group A — Opening Match 🇲🇽',
    team1: '🇲🇽', name1: 'Mexico',
    team2: '🇿🇦', name2: 'South Africa',
    date: 'June 11, 2026', time: '5:00 PM ET',
    venue: 'Estadio Azteca, Mexico City',
    avail: 'limited',
    prices: { vip: 1200, cat1: 650, cat2: 450, cat3: 220 }
  },
  {
    id: "wc_m2",
    stage: 'group',
    label: 'Group D — Opening Match 🇺🇸',
    team1: '🇺🇸', name1: 'USA',
    team2: '🇵🇾', name2: 'Paraguay',
    date: 'June 12, 2026', time: '2:00 PM ET',
    venue: 'SoFi Stadium, Los Angeles',
    avail: 'available',
    prices: { vip: 1400, cat1: 750, cat2: 500, cat3: 260 }
  },
  {
    id: "wc_m3",
    stage: 'group',
    label: 'Group B — Matchday 1',
    team1: '🇨🇦', name1: 'Canada',
    team2: '🇳🇬', name2: 'Nigeria',
    date: 'June 12, 2026', time: '8:00 PM ET',
    venue: "Levi's Stadium, San Francisco",
    avail: 'available',
    prices: { vip: 950, cat1: 480, cat2: 320, cat3: 150 }
  },
  {
    id: "wc_m4",
    stage: 'group',
    label: 'Group E — Matchday 1',
    team1: '🇩🇪', name1: 'Germany',
    team2: '🇸🇦', name2: 'Saudi Arabia',
    date: 'June 13, 2026', time: '3:00 PM ET',
    venue: 'MetLife Stadium, New York/NJ',
    avail: 'available',
    prices: { vip: 900, cat1: 450, cat2: 310, cat3: 140 }
  },
  {
    id: "wc_m5",
    stage: 'group',
    label: 'Group C — Matchday 1',
    team1: '🇪🇸', name1: 'Spain',
    team2: '🇲🇦', name2: 'Morocco',
    date: 'June 13, 2026', time: '6:00 PM CT',
    venue: 'NRG Stadium, Houston',
    avail: 'limited',
    prices: { vip: 1100, cat1: 520, cat2: 360, cat3: 180 }
  },
  {
    id: "wc_m6",
    stage: 'group',
    label: 'Group G — Matchday 1',
    team1: '🇦🇷', name1: 'Argentina',
    team2: '🇦🇹', name2: 'Austria',
    date: 'June 14, 2026', time: '12:00 PM CT',
    venue: 'AT&T Stadium, Dallas',
    avail: 'limited',
    prices: { vip: 1500, cat1: 800, cat2: 550, cat3: 280 }
  },
  {
    id: "wc_m7",
    stage: 'group',
    label: 'Group H — Matchday 1',
    team1: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', name1: 'England',
    team2: '🇰🇷', name2: 'South Korea',
    date: 'June 15, 2026', time: '3:00 PM ET',
    venue: 'Hard Rock Stadium, Miami',
    avail: 'available',
    prices: { vip: 1200, cat1: 600, cat2: 420, cat3: 190 }
  },
  {
    id: "wc_m8",
    stage: 'group',
    label: 'Group F — Matchday 1',
    team1: '🇧🇷', name1: 'Brazil',
    team2: '🇯🇵', name2: 'Japan',
    date: 'June 15, 2026', time: '7:00 PM CT',
    venue: 'Gillette Stadium, Boston',
    avail: 'limited',
    prices: { vip: 1350, cat1: 700, cat2: 480, cat3: 240 }
  },
  {
    id: "wc_m13",
    stage: 'knockout',
    label: 'Round of 32 — Match 73',
    team1: '🏆', name1: 'Winner Group A',
    team2: '🏆', name2: 'Runner-up Group C',
    date: 'June 29, 2026', time: '4:00 PM ET',
    venue: 'Gillette Stadium, Boston',
    avail: 'available',
    prices: { vip: 1800, cat1: 950, cat2: 650, cat3: 350 }
  },
  {
    id: "wc_m14",
    stage: 'knockout',
    label: 'Round of 16 — Match 89',
    team1: '🏆', name1: 'TBD',
    team2: '🏆', name2: 'TBD',
    date: 'July 4, 2026', time: '5:00 PM AST',
    venue: 'Estadio Azteca, Mexico City',
    avail: 'limited',
    prices: { vip: 2200, cat1: 1200, cat2: 800, cat3: 450 }
  },
  {
    id: "wc_m15",
    stage: 'knockout',
    label: 'Quarterfinals — Match 97',
    team1: '🏆', name1: 'TBD',
    team2: '🏆', name2: 'TBD',
    date: 'July 9, 2026', time: '3:00 PM PT',
    venue: 'SoFi Stadium, Los Angeles',
    avail: 'limited',
    prices: { vip: 3500, cat1: 1800, cat2: 1200, cat3: 650 }
  },
  {
    id: "wc_m16",
    stage: 'knockout',
    label: 'Semifinal — Match 101',
    team1: '🏆', name1: 'TBD',
    team2: '🏆', name2: 'TBD',
    date: 'July 14, 2026', time: '7:00 PM CT',
    venue: 'AT&T Stadium, Dallas',
    avail: 'limited',
    prices: { vip: 5000, cat1: 2800, cat2: 1900, cat3: 950 }
  },
  {
    id: "wc_m17",
    stage: 'final',
    label: '🏆 WORLD CUP GRAND FINAL',
    team1: '🌍', name1: 'Finalist 1',
    team2: '🌍', name2: 'Finalist 2',
    date: 'July 19, 2026', time: '4:00 PM ET',
    venue: 'MetLife Stadium, New York/NJ',
    avail: 'limited',
    prices: { vip: 9500, cat1: 5500, cat2: 3800, cat3: 1600 }
  }
];

function formatCatLabel(catKey) {
  if (catKey === 'vip') return '💎 VIP Category';
  if (catKey === 'cat1') return '🎟️ Category 1';
  if (catKey === 'cat2') return '🎟️ Category 2';
  if (catKey === 'cat3') return '🎟️ Category 3';
  return catKey.toUpperCase();
}

function updateLivePriceDisplay(id) {
  const match = matches.find(m => m.id === id);
  if (!match) return;

  const catSelected = document.getElementById(`cat-${id}`).value;
  const qtySelected = parseInt(document.getElementById(`qty-${id}`).value);
  const totalPrice = match.prices[catSelected] * qtySelected;

  document.getElementById(`price-val-${id}`).innerText = `$${totalPrice.toLocaleString()}`;
}

// MODAL MAP FUNCTIONS
function openStadiumMap() {
  document.getElementById('seatingModal').style.display = 'flex';
}
function closeStadiumMap() {
  document.getElementById('seatingModal').style.display = 'none';
}

function renderMatches(filter) {
  const grid = document.getElementById('matchesGrid');
  if(!grid) return;
  
  const filtered = filter === 'all' ? matches : matches.filter(m => m.stage === filter);

  grid.innerHTML = filtered.map((m, index) => {
    const defaultCat = 'cat3'; 
    const defaultQty = 1;
    const initialPrice = m.prices[defaultCat] * defaultQty;

    // Alternating urgency triggers based on card listing numbers
    const urgencyText = (index % 2 === 0) 
      ? `🔥 ${Math.floor(Math.random() * 5) + 3} users currently viewing allocations`
      : `🚨 High demand: Less than ${Math.floor(Math.random() * 4) + 3} standard slots open`;

    return `
    <div class="match-card">
      <div class="match-stage">${m.label}</div>
      
      <div style="font-size: 11px; background: rgba(255, 59, 92, 0.08); color: var(--red); padding: 5px 10px; border-radius: 4px; font-weight: 600; margin-bottom: 12px; display: inline-block; border: 1px solid rgba(255, 59, 92, 0.15);">
        ${urgencyText}
      </div>

      <div class="match-teams">
        <div class="team">
          <div class="team-flag">${m.team1}</div>
          <div class="team-name">${m.name1}</div>
        </div>
        <div class="vs">VS</div>
        <div class="team">
          <div class="team-flag">${m.team2}</div>
          <div class="team-name">${m.name2}</div>
        </div>
      </div>
      
      <div class="match-meta">
        <span>📅 ${m.date}</span>
        <span>⏰ ${m.time}</span>
        <span>📍 ${m.venue}</span>
      </div>

      <div style="text-align: right; margin-bottom: 8px;">
        <span onclick="openStadiumMap()" style="font-size: 11px; color: var(--gold); font-weight: 600; cursor: pointer; text-decoration: underline; background: none; border: none; padding: 0;">
          🗺️ View Layout blueprint
        </span>
      </div>

      <div class="order-selectors-box" style="background: rgba(255,255,255,0.02); padding: 12px; border-radius: 8px; border: 1px solid var(--border); margin-bottom: 18px; display: flex; flex-direction: column; gap: 10px;">
        
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span style="font-size:11px; font-weight:600; color:var(--muted);">SEATING TIER:</span>
          <select id="cat-${m.id}" onchange="updateLivePriceDisplay('${m.id}')" style="background:var(--bg); color:var(--text); border:1px solid var(--border); padding:4px 8px; border-radius:4px; font-size:12px; font-weight:600;">
            <option value="cat3">Category 3 (Upper Bowl)</option>
            <option value="cat2">Category 2 (Mid-Tier)</option>
            <option value="cat1">Category 1 (Lower Bowl)</option>
            <option value="vip">VIP Suite Hospitality</option>
          </select>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span style="font-size:11px; font-weight:600; color:var(--muted);">QUANTITY:</span>
          <select id="qty-${m.id}" onchange="updateLivePriceDisplay('${m.id}')" style="background:var(--bg); color:var(--gold); border:1px solid var(--border); padding:4px 8px; border-radius:4px; font-weight:bold; font-size:12px;">
            <option value="1">1 Ticket</option>
            <option value="2">2 Tickets</option>
            <option value="3">3 Tickets</option>
            <option value="4">4 Tickets</option>
            <option value="5">5 Tickets</option>
          </select>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center;">
          <span style="font-size:11px; font-weight:600; color:var(--muted);">PAYMENT MODE:</span>
          <select id="pay-${m.id}" style="background:var(--bg); color:var(--green); border:1px solid var(--border); padding:4px 8px; border-radius:4px; font-size:12px; font-weight:600;">
            <option value="PayPal">PayPal</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Bank Transfer">Bank Transfer</option>
            <option value="Other">Other Methods</option>
          </select>
        </div>

      </div>

      <div class="match-footer">
        <div>
          <div class="price-from">Total Value</div>
          <div class="price-amount" id="price-val-${m.id}">$${initialPrice.toLocaleString()}</div>
        </div>
        <div style="display:flex;align-items:center;gap:10px;">
          <span class="avail ${m.avail === 'limited' ? 'low' : 'ok'}">
            ${m.avail === 'limited' ? '⚡ Low Stock' : '✅ Available'}
          </span>
          <button class="btn-wa" onclick="executeMatchWhatsAppOrder('${m.id}', '${m.name1} vs ${m.name2}', '${m.date}', '${m.venue}')">
            Order
          </button>
        </div>
      </div>
    </div>
  `;
  }).join('');
}

function executeMatchWhatsAppOrder(id, matchName, date, venue) {
  const match = matches.find(m => m.id === id);
  if (!match) return;

  const selectedCat = document.getElementById(`cat-${id}`).value;
  const selectedQty = parseInt(document.getElementById(`qty-${id}`).value);
  const selectedPay = document.getElementById(`pay-${id}`).value;
  
  const unitPrice = match.prices[selectedCat];
  const grandTotal = unitPrice * selectedQty;
  const categoryLabel = formatCatLabel(selectedCat);

  const targetNumber = '16624785739';
  
  const msg =
    '⚡ *URGENT SECURE TICKET BOOKING REQ*' + '\n' +
    '────────────────────' + '\n' +
    'TXT_ID: WC26-' + Math.floor(Math.random()*90000 + 10000) + '\n' +
    '🎫 *EVENT:* FIFA World Cup 2026' + '\n' +
    '🔥 *MATCH:* ' + matchName + '\n' +
    '📅 *DATE:* ' + date + '\n' +
    '📍 *VENUE:* ' + venue + '\n' +
    '💎 *SEATING SECTOR:* ' + categoryLabel + '\n' +
    '🔢 *PASSES SELECTED:* ' + selectedQty + ' Reserved Seat(s)' + '\n' +
    '💳 *METHOD:* ' + selectedPay + '\n' +
    '💰 *ESTIMATED TOTAL:* $' + grandTotal.toLocaleString() + ' USD' + '\n' +
    '────────────────────' + '\n\n' +
    'Hello, I am processing my order selection via the checkout gate portal. Please review block spaces immediately, confirm availability, and provide payment details so I can secure my tickets.';
    
  window.open('https://wa.me/' + targetNumber + '?text=' + encodeURIComponent(msg), '_blank');
}

document.querySelectorAll('.filter-bar .filter-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    document.querySelectorAll('.filter-bar .filter-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    renderMatches(this.dataset.filter);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  renderMatches('all');
});
