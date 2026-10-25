/**
 * Local for a Day (Version 2)
 * San Miguel & Mercado Congregation · 2026 International Convention
 * Client Application Logic
 */

const PASSWORDS = {
  DELEGATE: "LFD2026"
};

// Activity Itinerary Tailored for Visiting Delegates (Synchronized with Official Google Sheet)
const GOOGLE_SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/13H2U8eHSzvVKKZ9jQnbCxHWzhmcfVidZsah-eErR9Jc/export?format=csv";

let ACTIVITIES = [
  {
    id: 1,
    time: "07:15 AM – 09:45 AM",
    programTime: "07:15 AM",
    startTime: "20261114T071500",
    endTime: "20261114T094500",
    duration: "2 hrs 30 mins",
    title: "Van ride: Okada Manila to Kingdom Hall",
    programTitle: "VAN RIDE: OKADA MANILA TO KINGDOM HALL",
    location: "Okada Manila to Kingdom Hall, Bulacan",
    mapLink: "",
    notes: "",
    description: "Comfortable chartered van ride from Okada Manila to San Miguel & Mercado Kingdom Hall in Hagonoy, Bulacan."
  },
  {
    id: 2,
    time: "09:45 AM – 10:00 AM",
    programTime: "09:45 AM",
    startTime: "20261114T094500",
    endTime: "20261114T100000",
    duration: "15 mins",
    title: "Welcome and morning merienda",
    programTitle: "WELCOME AND MORNING MERIENDA",
    location: "Kingdom Hall",
    mapLink: "https://maps.app.goo.gl/uthkPan3vRQFtaiR6",
    notes: "",
    description: "Joyful welcome from the host congregation family and morning merienda at the Kingdom Hall."
  },
  {
    id: 3,
    time: "10:00 AM – 11:30 AM",
    programTime: "10:00 AM",
    startTime: "20261114T100000",
    endTime: "20261114T113000",
    duration: "1 hr 30 mins",
    title: "Morning ministry appointments",
    programTitle: "MORNING MINISTRY APPOINTMENTS",
    location: "San Miguel Local Territory",
    mapLink: "",
    notes: "Return Visit / Bible Study / Cart Witnessing",
    description: "Engage in field ministry appointments alongside local publishers: Return Visits, Bible Studies, and Cart Witnessing."
  },
  {
    id: 4,
    time: "12:00 PM – 01:00 PM",
    programTime: "12:00 PM",
    startTime: "20261114T120000",
    endTime: "20261114T130000",
    duration: "1 hr",
    title: "Filipino lunch & warm association",
    programTitle: "FILIPINO LUNCH & WARM ASSOCIATION",
    location: "Zoleta's Residence",
    mapLink: "https://maps.app.goo.gl/AdF5K3wdmUttRMmC8",
    notes: "",
    description: "Hearty home-cooked Filipino lunch and warm Christian association at Zoleta's Residence."
  },
  {
    id: 5,
    time: "01:00 PM – 02:30 PM",
    programTime: "01:00 PM",
    startTime: "20261114T130000",
    endTime: "20261114T143000",
    duration: "1 hr 30 mins",
    title: "Relax, chat & enjoy everyday local life",
    programTitle: "RELAX, CHAT & ENJOY EVERYDAY LOCAL LIFE",
    location: "Soco's Residence",
    mapLink: "https://maps.app.goo.gl/BLQMkG8z4SbSwr396",
    notes: "",
    description: "Relax, chat, and experience everyday local life together in a welcoming home setting."
  },
  {
    id: 6,
    time: "02:30 PM – 03:00 PM",
    programTime: "02:30 PM",
    startTime: "20261114T143000",
    endTime: "20261114T150000",
    duration: "30 mins",
    title: "Light outing with fun activities",
    programTitle: "LIGHT OUTING WITH FUN ACTIVITIES",
    location: "Soco's Residence",
    mapLink: "https://maps.app.goo.gl/BLQMkG8z4SbSwr396",
    notes: "",
    description: "Light outing with fun activities, cultural fellowship, and uplifting association."
  },
  {
    id: 7,
    time: "03:00 PM – 03:30 PM",
    programTime: "03:00 PM",
    startTime: "20261114T150000",
    endTime: "20261114T153000",
    duration: "30 mins",
    title: "Afternoon merienda & association",
    programTitle: "AFTERNOON MERIENDA & ASSOCIATION",
    location: "Soco's Residence / Gathering Venue",
    mapLink: "",
    notes: "",
    description: "Enjoy traditional Filipino afternoon merienda and refreshing treats with the friends."
  },
  {
    id: 8,
    time: "03:30 PM – 05:00 PM",
    programTime: "03:30 PM",
    startTime: "20261114T153000",
    endTime: "20261114T170000",
    duration: "1 hr 30 mins",
    title: "Flexible afternoon ministry",
    programTitle: "FLEXIBLE AFTERNOON MINISTRY",
    location: "San Miguel Local Territory",
    mapLink: "",
    notes: "Return Visit / Bible Study",
    description: "Flexible afternoon ministry appointments: Return Visits and Bible Studies with local community residents."
  },
  {
    id: 9,
    time: "05:15 PM – 06:00 PM",
    programTime: "05:15 PM",
    startTime: "20261114T171500",
    endTime: "20261114T180000",
    duration: "45 mins",
    title: "Early dinner & farewell",
    programTitle: "EARLY DINNER & FAREWELL",
    location: "Jollibee",
    mapLink: "https://maps.app.goo.gl/fTfmTCoUTLtHpLAaA",
    notes: "With van ride back to Okada Manila.",
    description: "Early dinner and farewell gathering at Jollibee, followed by van ride back to Okada Manila."
  }
];

/* ==========================================================================
   Helper Functions
   ========================================================================== */

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/* Live Philippine Local Time Indicator */
function initClock() {
  const clockEl = document.getElementById('live-clock');
  if (!clockEl) return;
  
  function update() {
    const options = {
      timeZone: 'Asia/Manila',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    };
    const now = new Date();
    const timeStr = new Intl.DateTimeFormat('en-US', options).format(now);
    clockEl.textContent = `${timeStr} PHT`;
  }
  
  update();
  setInterval(update, 1000);
}

/* Offline Detection & Toast */
function initOfflineDetection() {
  const banner = document.getElementById('offline-banner');
  if (!banner) return;
  
  function updateOnlineStatus() {
    if (navigator.onLine) {
      banner.classList.add('hidden');
    } else {
      banner.classList.remove('hidden');
    }
  }
  
  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
  updateOnlineStatus();
}

/* ==========================================================================
   1. First Timeline Render (for delegate.html)
   ========================================================================== */

function renderTimeline() {
  const container = document.getElementById('timeline-container');
  if (!container) return;
  
  container.innerHTML = ACTIVITIES.map((act, index) => {
    return `
      <div class="timeline-node flex gap-4 md:gap-6 items-start pb-8">
        <!-- Node indicator -->
        <div class="flex flex-col items-center flex-shrink-0">
          <div class="w-10 h-10 md:w-12 md:h-12 rounded-full bg-emerald-900 border-4 border-amber-400 text-white flex items-center justify-center font-bold text-sm md:text-base shadow-md">
            ${index + 1}
          </div>
        </div>

        <!-- Card content -->
        <div class="card-clean p-5 md:p-6 w-full relative">
          <!-- Time & Duration Header -->
          <div class="flex flex-wrap items-center justify-between gap-2 mb-2 pb-2 border-b border-slate-100">
            <div class="flex items-center gap-2">
              <span class="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-amber-100 text-amber-900">
                <i data-lucide="clock" class="w-4 h-4"></i>
              </span>
              <span class="font-bold text-emerald-950 text-base md:text-lg tracking-tight">
                ${escapeHtml(act.time)}
              </span>
            </div>
            
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">
              <i data-lucide="hourglass" class="w-3.5 h-3.5 text-slate-500"></i>
              Duration: ${escapeHtml(act.duration)}
            </span>
          </div>

          <!-- Activity Title -->
          <h3 class="text-lg md:text-xl font-bold text-slate-900 mb-2 leading-snug">
            ${escapeHtml(act.title)}
          </h3>

          <!-- Location & Google Maps Link -->
          <div class="flex flex-wrap items-center justify-between gap-2 text-sm font-semibold text-emerald-800 bg-emerald-50/80 px-3 py-1.5 rounded-lg mb-3">
            <div class="flex items-center gap-2 min-w-0">
              <i data-lucide="map-pin" class="w-4 h-4 text-emerald-700 flex-shrink-0"></i>
              <span>${escapeHtml(act.location)}</span>
            </div>
            ${act.mapLink ? `
              <a href="${escapeHtml(act.mapLink)}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-xs text-brand-900 hover:text-brand-950 font-bold underline decoration-brand-700/40 hover:decoration-brand-900 transition-colors ml-auto shrink-0">
                <span>Google Maps</span>
                <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
              </a>
            ` : ''}
          </div>

          <!-- Delegate Experience Description -->
          <p class="text-slate-600 text-sm md:text-base leading-relaxed">
            ${escapeHtml(act.description)}
          </p>

          ${act.notes ? `
            <div class="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-50 border border-amber-200/80 text-amber-900 text-xs font-semibold">
              <i data-lucide="info" class="w-3.5 h-3.5 text-amber-700 flex-shrink-0"></i>
              <span><strong>Note:</strong> ${escapeHtml(act.notes)}</span>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }).join('');
  
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

/* Save to Phone (.ics Calendar Generator for delegate.html) */
function generateICSFile() {
  let icsLines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//San Miguel Congregation//Local for a Day 2026//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "X-WR-CALNAME:Local for a Day - San Miguel Congregation",
    "X-WR-TIMEZONE:Asia/Manila"
  ];

  ACTIVITIES.forEach(act => {
    icsLines.push("BEGIN:VEVENT");
    icsLines.push(`UID:lfd-2026-act-${act.id}@sanmiguel.congregation`);
    icsLines.push(`DTSTAMP:20261114T000000Z`);
    icsLines.push(`DTSTART;TZID=Asia/Manila:${act.startTime}`);
    icsLines.push(`DTEND;TZID=Asia/Manila:${act.endTime}`);
    icsLines.push(`SUMMARY:${act.title}`);
    icsLines.push(`LOCATION:${act.location}`);
    icsLines.push(`DESCRIPTION:${act.description}${act.notes ? ' [Note: ' + act.notes + ']' : ''}${act.mapLink ? ' [Maps: ' + act.mapLink + ']' : ''}`);
    icsLines.push("STATUS:CONFIRMED");
    icsLines.push("END:VEVENT");
  });

  icsLines.push("END:VCALENDAR");

  const icsContent = icsLines.join("\r\n");
  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "Local-for-a-Day-Schedule.ics");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  
  showToast("Schedule downloaded! Open the file to add all activities directly to your phone's calendar.");
}

function initSaveToPhone() {
  const saveBtn = document.getElementById('btn-save-phone');
  if (!saveBtn) return;
  saveBtn.addEventListener('click', (e) => {
    e.preventDefault();
    generateICSFile();
  });
}

/* ==========================================================================
   2. Copied Program Schedule Template (for program.html)
   ========================================================================== */

function renderProgramSchedule() {
  const container = document.getElementById('program-schedule-items');
  if (!container) return;

  container.innerHTML = ACTIVITIES.map((act) => {
    return `
      <div class="program-item p-4 sm:p-5 flex flex-col sm:flex-row gap-2 sm:gap-6 items-start">
        
        <!-- Left Column: Time -->
        <div class="sm:w-36 flex-shrink-0">
          <span class="inline-block font-extrabold text-amber-700 sm:text-slate-900 text-sm sm:text-base tracking-tight font-mono">
            ${escapeHtml(act.programTime)}
          </span>
          <span class="block text-[11px] text-slate-500 font-medium">
            ${escapeHtml(act.duration)}
          </span>
        </div>

        <!-- Right Column: Title, Description & Location -->
        <div class="flex-1 min-w-0">
          <h4 class="font-bold text-slate-900 text-sm sm:text-base uppercase tracking-wide mb-1 leading-snug">
            ${escapeHtml(act.programTitle)}
          </h4>

          <p class="text-slate-600 text-xs sm:text-sm leading-relaxed mb-2">
            ${escapeHtml(act.description)}
          </p>

          <div class="inline-flex flex-wrap items-center gap-2 text-[11px] sm:text-xs font-semibold text-emerald-900 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
            <div class="inline-flex items-center gap-1.5">
              <i data-lucide="map-pin" class="w-3.5 h-3.5 text-emerald-700 flex-shrink-0"></i>
              <span>${escapeHtml(act.location)}</span>
            </div>
            ${act.mapLink ? `
              <a href="${escapeHtml(act.mapLink)}" target="_blank" rel="noopener noreferrer" class="text-brand-900 hover:underline inline-flex items-center gap-0.5 ml-1 font-bold">
                <span>(Maps)</span>
                <i data-lucide="external-link" class="w-3 h-3"></i>
              </a>
            ` : ''}
          </div>

          ${act.notes ? `
            <div class="mt-2 text-[11px] text-amber-900 font-medium flex items-center gap-1.5 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60 inline-flex">
              <i data-lucide="info" class="w-3 h-3 text-amber-700 flex-shrink-0"></i>
              <span><strong>Note:</strong> ${escapeHtml(act.notes)}</span>
            </div>
          ` : ''}
        </div>

      </div>
    `;
  }).join('');

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

/* ==========================================================================
   3. Google Sheet Live Sync Utility (Delegate Schedule)
   ========================================================================== */

function convertTimeToICS(tStr) {
  if (!tStr) return "20261114T070000";
  const match = tStr.trim().match(/(\d{1,2}):(\d{2})\s*(AM|PM)?/i);
  if (!match) return "20261114T070000";
  let hours = parseInt(match[1], 10);
  const minutes = match[2];
  const ampm = (match[3] || '').toUpperCase();
  if (ampm === 'PM' && hours < 12) hours += 12;
  if (ampm === 'AM' && hours === 12) hours = 0;
  const hh = hours.toString().padStart(2, '0');
  return `20261114T${hh}${minutes}00`;
}

function parseGoogleSheetCSV(csvText) {
  const lines = csvText.trim().split(/\r?\n/);
  if (lines.length < 2) return null;
  const items = [];
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    const cols = [];
    let cur = '', inQ = false;
    for (let c = 0; c < line.length; c++) {
      if (line[c] === '"') inQ = !inQ;
      else if (line[c] === ',' && !inQ) { cols.push(cur.trim()); cur = ''; }
      else cur += line[c];
    }
    cols.push(cur.trim());
    
    const timeRaw = cols[0] || '';
    const activityRaw = (cols[1] || '').replace(/^"|"$/g, '').trim();
    const locationRaw = (cols[2] || '').replace(/^"|"$/g, '').trim();
    const mapLinkRaw = (cols[3] || '').replace(/^"|"$/g, '').trim();
    const notesRaw = (cols[4] || '').replace(/^"|"$/g, '').trim();

    if (!timeRaw && !activityRaw) continue;

    const timeParts = timeRaw.split('-').map(t => t.trim());
    const startTimeStr = timeParts[0] || '';
    const endTimeStr = timeParts[1] || '';

    let duration = '';
    if (startTimeStr && endTimeStr) {
      duration = `${startTimeStr} – ${endTimeStr}`;
    }

    items.push({
      id: i,
      time: timeRaw.replace('-', '–'),
      programTime: startTimeStr || timeRaw,
      startTime: convertTimeToICS(startTimeStr),
      endTime: convertTimeToICS(endTimeStr || startTimeStr),
      duration: duration || 'Scheduled',
      title: activityRaw,
      programTitle: activityRaw.toUpperCase(),
      location: locationRaw || (activityRaw.toLowerCase().includes('van ride') ? 'Okada Manila to Kingdom Hall, Bulacan' : 'San Miguel, Hagonoy, Bulacan'),
      mapLink: mapLinkRaw,
      notes: notesRaw,
      description: activityRaw + (notesRaw ? ` (${notesRaw})` : '')
    });
  }
  return items;
}

async function syncActivitiesFromGoogleSheet() {
  if (!navigator.onLine) return;
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);
    const res = await fetch(GOOGLE_SHEET_CSV_URL, { signal: controller.signal, cache: "no-cache" });
    clearTimeout(timeoutId);
    if (!res.ok) return;
    const csvText = await res.text();
    const parsed = parseGoogleSheetCSV(csvText);
    if (parsed && parsed.length > 0) {
      ACTIVITIES = parsed;
      if (document.getElementById('timeline-container')) {
        renderTimeline();
      }
      if (document.getElementById('program-schedule-items')) {
        renderProgramSchedule();
      }
    }
  } catch (err) {
    // Graceful offline fallback to pre-embedded activities
  }
}

/* Save Schedule as Image & PDF for program.html */
async function generateScheduleCanvas() {
  if (document.fonts) {
    try {
      await document.fonts.ready;
    } catch (e) {}
  }

  const programSheet = document.getElementById('program-sheet');
  if (!programSheet || typeof html2canvas === 'undefined') return null;

  return await html2canvas(programSheet, {
    scale: 2, // 2x Retina clarity
    useCORS: true,
    allowTaint: true,
    backgroundColor: '#ffffff',
    logging: false,
    onclone: (clonedDoc) => {
      const clonedSheet = clonedDoc.getElementById('program-sheet');
      if (clonedSheet) {
        clonedSheet.style.width = '1020px';
        clonedSheet.style.maxWidth = '1020px';
        clonedSheet.style.margin = '0 auto';
        clonedSheet.style.borderRadius = '24px';
        clonedSheet.style.overflow = 'hidden';
        clonedSheet.style.boxShadow = 'none';

        const grid = clonedSheet.querySelector('.grid');
        if (grid) {
          grid.style.display = 'grid';
          grid.style.gridTemplateColumns = '320px 1fr';
        }

        const headerFlex = clonedSheet.querySelector('.program-header > div');
        if (headerFlex) {
          headerFlex.style.display = 'flex';
          headerFlex.style.flexDirection = 'row';
          headerFlex.style.justifyContent = 'space-between';
          headerFlex.style.alignItems = 'center';
        }

        clonedSheet.querySelectorAll('svg').forEach(svg => {
          svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        });
      }
    }
  });
}

function initSaveScheduleImage() {
  const saveImageBtn = document.getElementById('btn-save-image');
  const savePdfBtn = document.getElementById('btn-save-pdf');
  const printBtn = document.getElementById('btn-print-schedule');

  // Save Image (PNG)
  if (saveImageBtn) {
    saveImageBtn.addEventListener('click', async (e) => {
      e.preventDefault();

      const originalContent = saveImageBtn.innerHTML;
      saveImageBtn.disabled = true;
      saveImageBtn.innerHTML = `
        <svg class="animate-spin -ml-1 mr-2 h-5 w-5 text-amber-400 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
        </svg>
        <span>Creating Image...</span>
      `;

      try {
        const canvas = await generateScheduleCanvas();
        if (canvas) {
          const imageUri = canvas.toDataURL('image/png');
          const link = document.createElement('a');
          link.download = 'Local-for-a-Day-Schedule.png';
          link.href = imageUri;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          showToast("Schedule image saved! Check your photo gallery or downloads.");
        } else {
          window.print();
        }
      } catch (err) {
        console.error("Image generation error:", err);
        window.print();
      } finally {
        saveImageBtn.disabled = false;
        saveImageBtn.innerHTML = originalContent;
        if (window.lucide) window.lucide.createIcons();
      }
    });
  }

  // Save PDF (jsPDF)
  if (savePdfBtn) {
    savePdfBtn.addEventListener('click', async (e) => {
      e.preventDefault();

      const originalContent = savePdfBtn.innerHTML;
      savePdfBtn.disabled = true;
      savePdfBtn.innerHTML = `
        <svg class="animate-spin -ml-1 mr-2 h-5 w-5 text-slate-950 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
        </svg>
        <span>Creating PDF...</span>
      `;

      try {
        const canvas = await generateScheduleCanvas();
        if (canvas && window.jspdf) {
          const { jsPDF } = window.jspdf;
          const imgData = canvas.toDataURL('image/jpeg', 0.95);

          const pdf = new jsPDF('p', 'mm', 'a4');
          const pageWidth = pdf.internal.pageSize.getWidth();
          const pageHeight = pdf.internal.pageSize.getHeight();

          const margin = 8;
          const contentWidth = pageWidth - (margin * 2);
          const contentHeight = (canvas.height * contentWidth) / canvas.width;

          let heightLeft = contentHeight;
          let position = margin;

          pdf.addImage(imgData, 'JPEG', margin, position, contentWidth, contentHeight);
          heightLeft -= (pageHeight - (margin * 2));

          while (heightLeft > 0) {
            position = heightLeft - contentHeight + margin;
            pdf.addPage();
            pdf.addImage(imgData, 'JPEG', margin, position, contentWidth, contentHeight);
            heightLeft -= (pageHeight - (margin * 2));
          }

          pdf.save('Local-for-a-Day-Schedule.pdf');
          showToast("Schedule PDF saved! Check your downloads.");
        } else {
          window.print();
        }
      } catch (err) {
        console.error("PDF generation error:", err);
        window.print();
      } finally {
        savePdfBtn.disabled = false;
        savePdfBtn.innerHTML = originalContent;
        if (window.lucide) window.lucide.createIcons();
      }
    });
  }

  // Print
  if (printBtn) {
    printBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.print();
    });
  }
}

/* ==========================================================================
   3. Delegates Guestbook Form Logic
   ========================================================================== */

function initGuestbookForm() {
  const form = document.getElementById('guestbook-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('guest-name');
    const congInput = document.getElementById('guest-congregation');
    const messageInput = document.getElementById('guest-message');
    const submitBtn = document.getElementById('guest-submit-btn');
    const successBox = document.getElementById('guestbook-success');

    const name = nameInput.value.trim();
    const congregation = congInput.value.trim();
    const message = messageInput.value.trim();

    if (!name || !congregation || !message) {
      alert("Please fill in your name, home congregation, and message.");
      return;
    }

    const originalBtn = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>Sharing message...</span>`;

    setTimeout(() => {
      try {
        const existing = JSON.parse(localStorage.getItem('lfd_v2_guestbook') || '[]');
        existing.push({
          id: 'entry-' + Date.now(),
          name,
          congregation,
          message,
          date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
        });
        localStorage.setItem('lfd_v2_guestbook', JSON.stringify(existing));
      } catch (err) {}

      form.reset();
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtn;
      if (window.lucide) window.lucide.createIcons();

      if (successBox) {
        successBox.classList.remove('hidden');
        successBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }

      showToast("Thank you for sharing your experience with us!");
    }, 450);
  });
}

/* ==========================================================================
   Toast Notification Utility
   ========================================================================== */

function showToast(message) {
  let toast = document.getElementById('app-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'app-toast';
    toast.className = 'fixed bottom-5 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-full bg-slate-900 text-white text-sm font-medium shadow-xl flex items-center gap-2 border border-slate-700 transition-all duration-300 opacity-0 translate-y-4 pointer-events-none max-w-[90%] text-center';
    document.body.appendChild(toast);
  }
  
  toast.textContent = message;
  toast.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none');
  toast.classList.add('opacity-100', 'translate-y-0');

  setTimeout(() => {
    toast.classList.remove('opacity-100', 'translate-y-0');
    toast.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none');
  }, 3500);
}

/* ==========================================================================
   Authentication & Gateway Protection (3-Day Remember Option)
   ========================================================================== */

const DELEGATE_AUTH_TTL_MS = 3 * 24 * 60 * 60 * 1000; // 3 Days in milliseconds

function checkDelegateAuth() {
  try {
    const isAuth = localStorage.getItem('lfd_v2_auth_delegate') === 'true';
    const expiryStr = localStorage.getItem('lfd_v2_auth_delegate_expiry');
    if (isAuth && expiryStr) {
      const expiry = parseInt(expiryStr, 10);
      if (Date.now() < expiry) {
        return true;
      }
      // Expired after 3 days: clean up
      clearDelegateAuth();
      return false;
    }
  } catch (e) {}

  // Fallback to sessionStorage
  try {
    return sessionStorage.getItem('lfd_v2_auth_delegate') === 'true';
  } catch (e) {
    return false;
  }
}

function setDelegateAuth() {
  const expiry = Date.now() + DELEGATE_AUTH_TTL_MS;
  try {
    localStorage.setItem('lfd_v2_auth_delegate', 'true');
    localStorage.setItem('lfd_v2_auth_delegate_expiry', expiry.toString());
  } catch (e) {}
  try {
    sessionStorage.setItem('lfd_v2_auth_delegate', 'true');
  } catch (e) {}
}

function clearDelegateAuth() {
  try {
    localStorage.removeItem('lfd_v2_auth_delegate');
    localStorage.removeItem('lfd_v2_auth_delegate_expiry');
  } catch (e) {}
  try {
    sessionStorage.removeItem('lfd_v2_auth_delegate');
  } catch (e) {}
}

window.checkDelegateAuth = checkDelegateAuth;
window.setDelegateAuth = setDelegateAuth;
window.clearDelegateAuth = clearDelegateAuth;

function verifyPasscode(inputCode) {
  if (!inputCode) return false;
  return inputCode.trim().toUpperCase() === PASSWORDS.DELEGATE;
}

// Global bootstrap for pages
document.addEventListener('DOMContentLoaded', () => {
  initClock();
  initOfflineDetection();

  // Register service worker for offline support
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js').catch(() => {});
    });
  }

  // Page 1: Delegate Portal (delegate.html)
  if (document.getElementById('timeline-container')) {
    if (!checkDelegateAuth()) {
      const authModal = document.getElementById('auth-gate-modal');
      if (authModal) {
        authModal.classList.remove('hidden');
      } else {
        window.location.href = 'index.html?need_auth=1';
      }
    }
    renderTimeline();
    initSaveToPhone();
    initGuestbookForm();
    syncActivitiesFromGoogleSheet();
  }

  // Page 2: Copied Program Schedule Sheet (program.html)
  if (document.getElementById('program-schedule-items')) {
    if (!checkDelegateAuth()) {
      const authModal = document.getElementById('auth-gate-modal');
      if (authModal) {
        authModal.classList.remove('hidden');
      } else {
        window.location.href = 'index.html?need_auth=1';
      }
    }
    renderProgramSchedule();
    initSaveScheduleImage();
    syncActivitiesFromGoogleSheet();
  }

  // If Lucide icons are available
  if (window.lucide) {
    window.lucide.createIcons();
  }
});
