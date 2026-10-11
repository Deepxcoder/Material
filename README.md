# 🏛️ Material (Academic Social OS)

> **Material** is a high-fidelity, distraction-free academic operating system engineered to transform fragmented university resources—lecture recordings, lecture slides, research notes, and syllabus schedules—into an intelligent, unified knowledge engine.

Built with **Google Material Design 3 (Material You)** principles, strict visual ergonomics, and privacy-shielded study tools.

---

## ⚡ The Problem

University students and engineering researchers constantly lose momentum jumping across disconnected portals:
* Cluttered YouTube interfaces designed around engagement algorithms rather than educational retention.
* Static, unparsed course materials scattered across portals like Moodle and Google Drive.
* Unfocused group chats lacking structured directives and progress visibility.

**Material** solves this with a centralized, contextual workspace that shields deep work while keeping academic cohorts synchronized.

---

## 🌟 Core Features

### 🛡️ 1. Distraction-Shield Video Engine
* **Isolated Playback Canvas:** Intercepts educational queries (e.g., engineering lectures, code courses) and streams videos inside an isolated player modal without algorithm-driven sidebars, related-video loops, comment sections, or external ads.
* **Focus Mode Gateway:** Strict sandbox routing via `youtube-nocookie.com` embed parameters (`rel=0&modestbranding=1&iv_load_policy=3`) to keep study time locked within the academic workspace.
* **Contextual Data Fetching:** Dynamic search indexing that resolves verified academic resources rather than static placeholder strings.

### 🍱 2. Adaptive Intelligence Feed (Bento Grid)
* **Masonry Architecture:** High-density, balanced F-pattern feed that pairs horizontal research modules with vertical reference cards.
* **Zero-Click Sync:** Background updates from academic data stores trigger transient Material 3 snackbars and seamlessly populate new study modules.
* **Gemini Intelligence Integration:** Automated 3-bullet core summaries and dynamic multiple-choice quiz generators generated on the fly for complex technical documents.

### 🎨 3. Expressive Material 3 Design System
* **M3 Geometry Standards:** 
  * Large Containers & Feed Cards: `28px` border radius
  * Action Buttons & Input Dialogs: `16px` border radius
  * Search Bars & Navigation Controls: `999px` full-pill radius
* **Dual-Type Scale:** 
  * **Roboto Serif:** Display and headline hierarchy for an editorial, academic feel.
  * **Roboto Flex:** Variable font powering high-density data, metadata labels, and AI summaries.
* **Seasonal Surface Theming:** Dynamic color palette driven by environmental themes:
  * 🌧️ **Monsoon (Default):** Deep teal accents with muted, low-glare surface tints.
  * ❄️ **Winter:** Frost-blue accents with high-clarity tonal elevation.
  * ☀️ **Summer:** Warm amber highlights with smooth transition states.

### 👥 4. Subnet Sync & Cohort Architecture
* **Official Directives:** Verified, faculty-managed streams for verified assignments, official research notes, and exam targets.
* **Peer Subnets:** Collaborative, student-led working channels with peer-completion progress indicators.
* **Academic Leaderboards:** Transparent study telemetry tracking contributed files, verified tasks, and study hours.
* **Work / Pause State Controller:** Floating center pill allowing students to broadcast focus states to their study subnet.

---

## 🏗️ System Architecture

```text
┌────────────────────────────────────────────────────────┐
│                   Global Search Pill                   │
│          [ Search Global Repository... (Cmd+K) ]       │
└──────────────────────────┬─────────────────────────────┘
                           │
             ┌─────────────┴─────────────┐
             ▼                           ▼
   [ Academic Materials ]       [ Video Query Stream ]
             │                           │
    (PDFs / Notes / LMS)         (Distraction Shield)
             │                           │
             ▼                           ▼
┌─────────────────────────┐  ┌───────────────────────────┐
│  Gemini AI Summary Pane │  │  Isolated Theater Canvas  │
│  - 3-Bullet Highlights  │  │  - Zero Recommendations   │
│  - Automated MCQ Quiz   │  │  - Clean Embed Pipeline   │
└─────────────────────────┘  └───────────────────────────┘
             │                           │
             └─────────────┬─────────────┘
                           ▼
             ┌───────────────────────────┐
             │   M3 Bento Intelligence   │
             │     Surface Dashboard     │
             └───────────────────────────┘
