/**
 * Local for a Day (Version 2)
 * San Miguel & Mercado Congregation · 2026 International Convention
 * Client Application Logic
 */

const PASSWORDS = {
  DELEGATE: "WYEYGLMLR4PX"
};

// Activity Itinerary Tailored for Visiting Delegates
const ACTIVITIES = [
  {
    id: 1,
    time: "7:15 AM – 7:30 AM",
    programTime: "07:15 AM",
    startTime: "20261114T071500",
    endTime: "20261114T073000",
    duration: "15 mins",
    title: "Morning Assembly & Van Boarding",
    programTitle: "MORNING ASSEMBLY & VAN BOARDING",
    location: "Okada Manila Main Lobby",
    description: "Meet your host brothers and sisters at the Okada Manila lobby for a warm morning reception, headcount, and comfortable private van boarding."
  },
  {
    id: 2,
    time: "7:30 AM – 9:45 AM",
    programTime: "07:30 AM",
    startTime: "20261114T073000",
    endTime: "20261114T094500",
    duration: "2 hrs 15 mins",
    title: "Scenic Travel to Bulacan",
    programTitle: "SCENIC TRAVEL TO BULACAN",
    location: "En Route to Hagonoy, Bulacan",
    description: "Relax in your chartered air-conditioned van with complimentary morning travel snacks, bottled water, and a pleasant orientation briefing as we journey north."
  },
  {
    id: 3,
    time: "9:45 AM – 10:00 AM",
    programTime: "09:45 AM",
    startTime: "20261114T094500",
    endTime: "20261114T100000",
    duration: "15 mins",
    title: "Welcome & Refreshments",
    programTitle: "WELCOME & REFRESHMENTS",
    location: "San Miguel & Mercado Kingdom Hall",
    description: "Step into the Kingdom Hall to a joyful welcome from the congregation family, enjoy cool tropical refreshments, and take a brief rest before the morning activity."
  },
  {
    id: 4,
    time: "10:00 AM – 11:30 AM",
    programTime: "10:00 AM",
    startTime: "20261114T100000",
    endTime: "20261114T113000",
    duration: "1 hr 30 mins",
    title: "Morning Field Ministry",
    programTitle: "MORNING FIELD MINISTRY",
    location: "Hagonoy Local Territory",
    description: "Join local publishers in the field ministry, participating in cart witnessing, friendly return visits, and sharing the good news with the welcoming local community."
  },
  {
    id: 5,
    time: "11:30 AM – 12:00 PM",
    programTime: "11:30 AM",
    startTime: "20261114T113000",
    endTime: "20261114T120000",
    duration: "30 mins",
    title: "Traditional Tricycle Ride to Lunch",
    programTitle: "TRADITIONAL TRICYCLE RIDE TO LUNCH",
    location: "En Route to Zoleta's Residence",
    description: "Experience an authentic, memorable ride in the Philippines' iconic motorized tricycles through the charming neighborhood streets of Hagonoy."
  },
  {
    id: 6,
    time: "12:00 PM – 1:00 PM",
    programTime: "12:00 PM",
    startTime: "20261114T120000",
    endTime: "20261114T130000",
    duration: "1 hr",
    title: "Home-Cooked Filipino Lunch & Association",
    programTitle: "HOME-COOKED FILIPINO LUNCH & ASSOCIATION",
    location: "Zoleta's Residence",
    description: "Delight in a hearty, authentic home-cooked Filipino meal prepared with love, and enjoy warm, uplifting association with local families."
  },
  {
    id: 7,
    time: "1:00 PM – 1:30 PM",
    programTime: "01:00 PM",
    startTime: "20261114T130000",
    endTime: "20261114T133000",
    duration: "30 mins",
    title: "Transfer to Gathering Home",
    programTitle: "TRANSFER TO GATHERING HOME",
    location: "En Route to Soco's Residence",
    description: "Relaxed tricycle transfer to our afternoon gathering location. Parasols and cold drinking water will be provided for your comfort."
  },
  {
    id: 8,
    time: "1:30 PM – 2:30 PM",
    programTime: "01:30 PM",
    startTime: "20261114T133000",
    endTime: "20261114T143000",
    duration: "1 hr",
    title: "Cultural Fellowship & Light Activities",
    programTitle: "CULTURAL FELLOWSHIP & LIGHT ACTIVITIES",
    location: "Soco's Residence",
    description: "Unwind in a cozy home setting with lighthearted fellowship, cultural sharing, and joyful moments together."
  },
  {
    id: 9,
    time: "2:30 PM – 3:15 PM",
    programTime: "02:30 PM",
    startTime: "20261114T143000",
    endTime: "20261114T151500",
    duration: "45 mins",
    title: "Traditional Afternoon Merienda",
    programTitle: "TRADITIONAL AFTERNOON MERIENDA",
    location: "Soco's Residence",
    description: "Savor traditional Filipino afternoon delicacies and native treats paired with refreshing tropical drinks and friendly conversation."
  },
  {
    id: 10,
    time: "3:15 PM – 5:00 PM",
    programTime: "03:15 PM",
    startTime: "20261114T151500",
    endTime: "20261114T170000",
    duration: "1 hr 45 mins",
    title: "Afternoon Community Ministry",
    programTitle: "AFTERNOON COMMUNITY MINISTRY",
    location: "Nearby Safe Community Territory",
    description: "Share uplifting spiritual thoughts and scriptures with receptive residents in a peaceful, welcoming neighborhood."
  },
  {
    id: 11,
    time: "5:00 PM – 5:15 PM",
    programTime: "05:00 PM",
    startTime: "20261114T170000",
    endTime: "20261114T171500",
    duration: "15 mins",
    title: "Transfer to Dinner Venue",
    programTitle: "TRANSFER TO DINNER VENUE",
    location: "En Route to Early Dinner",
    description: "A short, comfortable transfer with rest and water breaks to prepare for our evening dinner gathering."
  },
  {
    id: 12,
    time: "5:15 PM – 6:00 PM",
    programTime: "05:15 PM",
    startTime: "20261114T171500",
    endTime: "20261114T180000",
    duration: "45 mins",
    title: "Early Dinner & Evening Association",
    programTitle: "EARLY DINNER & EVENING ASSOCIATION",
    location: "Venue Near Kingdom Hall",
    description: "Share a delicious evening meal, reminisce on the day's highlights, and celebrate the unforgettable bond of Christian brotherhood."
  },
  {
    id: 13,
    time: "6:00 PM – 6:45 PM",
    programTime: "06:00 PM",
    startTime: "20261114T180000",
    endTime: "20261114T184500",
    duration: "45 mins",
    title: "Farewell & Souvenir Presentation",
    programTitle: "FAREWELL & SOUVENIR PRESENTATION",
    location: "San Miguel & Mercado Kingdom Hall",
    description: "Receive handcrafted mementos and special tokens of love from the congregation, take group photographs, and bid fond goodbyes."
  },
  {
    id: 14,
    time: "6:45 PM – 8:45 PM",
    programTime: "06:45 PM",
    startTime: "20261114T184500",
    endTime: "20261114T204500",
    duration: "2 hrs",
    title: "Evening Return Journey to Manila",
    programTitle: "EVENING RETURN JOURNEY TO MANILA",
    location: "En Route to Okada Manila",
    description: "Rest comfortably in your chartered van as we travel back to Manila with joyful hearts and cherished memories."
  },
  {
    id: 15,
    time: "8:45 PM",
    programTime: "08:45 PM",
    startTime: "20261114T204500",
    endTime: "20261114T210000",
    duration: "Arrival",
    title: "Safe Return at Okada Manila",
    programTitle: "SAFE RETURN AT OKADA MANILA",
    location: "Okada Manila Main Lobby",
    description: "Safe arrival at your hotel lobby. May Jehovah continue to richly bless your convention stay!"
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
                ${act.time}
              </span>
            </div>
            
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">
              <i data-lucide="hourglass" class="w-3.5 h-3.5 text-slate-500"></i>
              Duration: ${act.duration}
            </span>
          </div>

          <!-- Activity Title -->
          <h3 class="text-lg md:text-xl font-bold text-slate-900 mb-2 leading-snug">
            ${act.title}
          </h3>

          <!-- Location -->
          <div class="flex items-start gap-2 text-sm font-semibold text-emerald-800 bg-emerald-50/80 px-3 py-1.5 rounded-lg mb-3">
            <i data-lucide="map-pin" class="w-4 h-4 text-emerald-700 flex-shrink-0 mt-0.5"></i>
            <span>${act.location}</span>
          </div>

          <!-- Delegate Experience Description -->
          <p class="text-slate-600 text-sm md:text-base leading-relaxed">
            ${act.description}
          </p>
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
    icsLines.push(`DESCRIPTION:${act.description} (Duration: ${act.duration})`);
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
            ${act.programTime}
          </span>
          <span class="block text-[11px] text-slate-500 font-medium">
            ${act.duration === 'Arrival' ? 'Destination' : act.duration}
          </span>
        </div>

        <!-- Right Column: Title, Description & Location -->
        <div class="flex-1 min-w-0">
          <h4 class="font-bold text-slate-900 text-sm sm:text-base uppercase tracking-wide mb-1 leading-snug">
            ${act.programTitle}
          </h4>

          <p class="text-slate-600 text-xs sm:text-sm leading-relaxed mb-2">
            ${act.description}
          </p>

          <div class="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-emerald-900 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
            <i data-lucide="map-pin" class="w-3.5 h-3.5 text-emerald-700 flex-shrink-0"></i>
            <span>${act.location}</span>
          </div>
        </div>

      </div>
    `;
  }).join('');

  if (window.lucide) {
    window.lucide.createIcons();
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
  }

  // If Lucide icons are available
  if (window.lucide) {
    window.lucide.createIcons();
  }
});
