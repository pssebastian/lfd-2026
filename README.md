# Local for a Day (Version 2) — San Miguel Congregation

🌐 **Live Deployment**: [https://pssebastian.github.io/lfd-2026/](https://pssebastian.github.io/lfd-2026/)

Mobile-first web companion designed for visiting international delegates participating in **"Local for a Day" (LFD)** during the **2026 International Convention** hosted by the **San Miguel & Mercado Congregations** in Hagonoy, Bulacan, Philippines.

### Quick Access Credentials:
- **Delegates Passcode**: `WYEYGLMLR4PX`
- **Volunteers Passcode**: `ic2026-lfd-smcv` (select name from roster of 26 volunteers)

---

## 🌟 Pages & Architecture

1. **Welcome & Gateway (`index.html`)**
   - Seamless, vertically centered canvas.
   - Typographic hierarchy for *"Become a Local for a Day with San Miguel Congregation"*.
   - Interactive role selection (**Visiting Delegate** vs. **Congregation Volunteer**).
   - Group passcode verification (`WYEYGLMLR4PX`).

2. **Delegate Companion Portal (`delegate.html`)**
   - **Hero Section**: High-contrast midnight emerald canvas with golden amber script *"Maligayang Pagdating"* and heartfelt gratitude sub-heading.
   - **Original Vertical Timeline**: Clean, mobile-first cards with the golden/emerald connector line and numbered nodes (1 to 15), exact times, durations, venue locations, and delegate experience descriptions (no volunteer names or speculative terms).
   - **Save to Phone (.ics)**: Downloads a native `.ics` calendar bundle for Apple Calendar, Google Calendar, or Outlook, plus a direct button linking to the dedicated Program Sheet.
   - **Delegates Guestbook**: Dedicated section where visiting delegates can write their name, home congregation & country, and share their warm thoughts.

3. **Dedicated Event Program Sheet (`program.html`)**
   - Dedicated page featuring **only the event program timeline** formatted after the professional convention program reference template.
   - Top program banner with *"LOCAL FOR A DAY Program"* and floating badge (`14 NOV 2026 · 07:15 AM – 08:45 PM`).
   - Two-column responsive magazine layout: Left sidebar for Date, Venue, Audience, and Group Passcode; Right table for all activity rows.
   - **Export Controls**:
     - **Save Schedule as Image (PNG)**: 2x retina image capture using `html2canvas`.
     - **Save Schedule as PDF**: Native A4 document generator using `jsPDF`.
     - **Print**: Styled print layout matching screen display.

4. **Volunteer Companion Portal (`volunteer.html`)**
   - **Auth Gateway**: Username & Password modal on `index.html`.
     - "Username": Alphabetical selector with all 26 congregation volunteers.
     - "Password": Secure volunteer passcode (`ic2026-lfd-smcv`).
   - **Personalized Header**: Dynamic welcome greeting with color-coded role tags (Department Leads, Transport/Drivers, Hospitality/Merienda, Ministry Partners, Guest Care).
   - **General Responsibilities**: Comprehensive cards per role detailing key responsibilities in Filipino/Taglish.
   - **Personalized Activity Timeline**: Chronological activities with scheduled times, assignment-specific notes (e.g. ministry partners), and venue/reminders.
   - **Congregation Master Schedule**: Built-in 20-step master timeline reference for all volunteers.
   - **Quick Actions**: Pocket schedule printing (`window.print()`) and quick profile switching.

---

## 🎨 Color System & Accessibility
- **Primary Deep Emerald (`#0E4D45` / `#051A17`)**: High-contrast canvas (16+:1 ratio).
- **Sunlit Amber Accent (`#F59E0B` / `#D97706`)**: Warm Filipino golden badges and CTAs.
- **Anti-Glare Linen Canvas (`#FAF9F5`)**: Optimized for outdoor tropical sunlight.
- **Touch Targets**: 48px minimum touch targets across all mobile interactions.
