# Huddle — App Specification

## Overview

**Product:** Huddle
**Type:** Mobile application (iOS & Android)
**Tech stack:** React Native / Expo
**Category:** Lifestyle / Relationships
**Status:** In development — Free tier live, Premium tier planned

Huddle is a shared relationship space for couples that drives daily emotional connection through guided prompts, collaborative tools, and gamified engagement. The app pairs two users into a private couple space where everything — from conversations to planning — happens together.

---

## Problem Statement

Couples in committed relationships often struggle to maintain consistent, meaningful day-to-day connection. Existing tools are either too clinical (therapy-oriented), too heavy (journaling apps with high commitment), or not purpose-built for two people. There's no lightweight, daily-use app that combines emotional check-ins with practical shared utilities in a single experience.

## Solution

Huddle provides a single shared space with:
- **Guided daily rituals** that take minutes, not hours
- **Collaborative planning tools** (lists, calendar, wishlist) that replace scattered notes and texts
- **Playful engagement mechanics** (streaks, quests, mascot) that reward consistency without pressure

---

## Target Users

- Couples in dating or committed relationships looking for better daily connection
- Mobile-first users (18–35) comfortable with chat, reminders, and lightweight routines
- People who want guided structure but dislike "heavy" relationship or therapy-style apps

---

## Core Features

### 1. Daily Questions (Today's Ritual)
The central daily engagement loop. Each day, the app presents a conversation prompt to both partners.

- Both partners answer independently
- Answers are revealed simultaneously once both have responded
- Tabs for pending questions, answer history, and photo gallery
- Topic-based bonus questions (e.g., "Debates", "Future Dreams") for variety
- Configurable notifications and reminders

### 2. Weekly Quests
A shared photo challenge that refreshes each week.

- New creative prompt every week (e.g., "Sunset selfie together", "Your favorite cozy spot")
- Both partners submit a photo
- Reveal flow similar to daily questions
- Complete archive of past quests for memory browsing

### 3. Shared Chat
A private messaging channel built exclusively for the couple.

- Text messaging with image and sticker support
- Sticker favorites for quick expression
- Image sharing and reactions
- No group chats, no external contacts — a distraction-free space

### 4. Shared Canvas (Duo Doodle)
A collaborative drawing canvas for real-time creative expression.

- Both partners can draw simultaneously
- Freeform drawing tools
- Saves drawings as shared memories

### 5. Wishlist
Gift and experience tracking for both partners.

- Separate categories: "Mine", "Theirs", "Both"
- Link previews for items with URLs
- Gift reservation system (mark items without spoiling the surprise)

### 6. Shared Lists
Collaborative lists for any purpose — groceries, date ideas, travel plans.

- Pre-built templates for common list types
- Random picker for decision-making ("Where should we eat?")
- Real-time sync between both partners

### 7. Couple Calendar
A shared event and planning system.

- Create and manage shared events
- Recurrence rules and reminders
- "For who" tagging (me, them, both)
- Syncs both partners into one timeline

### 8. Gallery
A photo memory space dedicated to the couple.

- Upload and organize couple photos
- Browse memories by date
- Connected to quest and question photo history

### 9. Relationship Journey
A stats and progress dashboard for the relationship.

- Time together counter (from relationship date entered during onboarding)
- Daily streak tracker
- Total quests completed
- Total memories saved
- Milestone celebrations (7-day, 30-day, 100-day streaks)

---

## Engagement & Retention Layer

### Penguin Mascot
A customizable pixel-art penguin that serves as the app's personality.

- Selected during onboarding
- Multiple GIF variants for different states and celebrations
- Visual presence across the app (home screen, milestones, empty states)

### Streak System
Daily engagement tracking that rewards consistency.

- Increments when both partners complete the daily ritual
- Milestone celebrations at key intervals
- Visual indicator on the home dashboard

### Topic Packs
Optional themed question sets beyond the daily default.

- Categories like "Debates", "Future Dreams", "Throwbacks"
- Up to 3 extra questions per day from selected topics
- Expandable system for future content drops

---

## User Flows

### Onboarding
1. Sign up / log in (email or social auth)
2. Enter display name
3. Choose penguin mascot variant
4. Enter age and relationship start date
5. Upload profile photo
6. Generate or enter partner invite code
7. Share invite code with partner
8. Partner accepts — couple space is created

### Daily Use Loop
1. Open app → home dashboard shows Today's Ritual status
2. Answer the daily question
3. Wait for partner → reveal answers together
4. (Optional) Complete weekly quest, chat, manage lists/calendar/wishlist
5. Streak increments when both partners engage

### Home Dashboard
The main screen surfaces:
- Today's Ritual status and CTA
- Weekly Quest status
- Quick-access tiles for Chat, Quest, Lists, Canvas
- Topic-based extra questions section
- "Gentle utilities when you need them" section for secondary tools

---

## Visual Design System

### Theme: "Dusk" (default)
| Token | Value |
|---|---|
| Background | `#110F1A` |
| Card surface | `#1C1926` |
| Primary text | `#F0EBE3` |
| Muted text | `#847E94` |
| Accent (warm) | `#E09060` |
| Accent background | `rgba(224, 144, 96, 0.12)` |
| Border | `rgba(240, 235, 227, 0.06)` |
| Success | `#4ABA7A` |
| Danger | `#E05858` |
| Warning | `#E0A040` |
| Info | `#6A9FE0` |

### Typography
- **Display / Headlines:** Lora (serif, editorial warmth)
- **Body / UI:** Plus Jakarta Sans (sans-serif, clean modern)

### Design Language
- Dark-first UI with warm accent tones
- Rounded cards with soft contrast surfaces
- Glow-style accent chips and badges
- Pixel-art penguin mascot as core personality element
- Emotionally warm, never clinical

---

## Technical Architecture

| Layer | Technology |
|---|---|
| Framework | React Native (Expo) |
| Platforms | iOS, Android |
| Navigation | File-based or stack navigation (Expo Router) |
| State management | React state + context (or Zustand/Jotai) |
| Real-time sync | WebSocket or real-time database for chat, canvas, lists |
| Backend | Server functions / API layer |
| Auth | Email + social login |
| Notifications | Push notifications for daily reminders, partner activity |
| Storage | Cloud storage for images, drawings, gallery |
| Marketing site | TanStack Start (React), Tailwind CSS, deployed on Vercel / Cloudflare |

---

## Monetization

### Huddle Free (current)
All core features included at no cost:
- Daily questions, weekly quests, chat
- All shared tools (lists, calendar, wishlist, canvas, gallery)
- Streak tracking and penguin mascot
- Relationship journey stats

### Huddle Premium (planned)
- Unlimited question history
- Premium quest themes
- Advanced streak rewards
- Priority support
- Additional features TBD
- Pricing TBD — waitlist active for launch interest

---

## Privacy & Trust

- All data stays between the two paired partners
- Data export supported via support request
- Account and data deletion supported via support request
- Support contact: `support@huddle.app`
- Privacy policy and terms of service hosted on the marketing website

---

## Key Metrics (planned)

- **DAU / MAU ratio** — daily engagement stickiness
- **Streak length distribution** — retention depth
- **Questions answered per couple per week** — ritual adoption
- **Quest completion rate** — weekly engagement
- **Feature adoption breadth** — how many tools each couple uses
- **Pairing completion rate** — onboarding funnel conversion
- **Premium waitlist signups** — monetization interest signal

---

## Summary for Resume

> **Huddle** — A cross-platform mobile app (React Native / Expo) for couples to build daily connection through guided prompts, shared planning tools, and gamified engagement. Features include daily conversation rituals with simultaneous reveal, weekly photo quests, real-time collaborative canvas, private chat with sticker support, shared lists/calendar/wishlist, and a streak-driven retention system with customizable mascot. Dark-themed UI with warm accent design system. Free tier live with premium tier planned.
