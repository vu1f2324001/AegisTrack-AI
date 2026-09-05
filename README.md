<div align="center">

# AegisTrack AI

### *Evidence-Fusion & Explainable AI for Track-Limit Stewarding*

**From Detection to Decision-Ready Evidence.**

[![Live Demo](https://img.shields.io/badge/Demo-Live%20Prototype-00C7B7?style=for-the-badge&logo=render&logoColor=white)](https://aegistrack-ai.onrender.com/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646C9A?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Project Status](https://img.shields.io/badge/Status-Frontend%20Prototype-F59E0B?style=for-the-badge)](https://github.com/)

<br />

> **“AI doesn't make the penalty decision. It makes the evidence impossible to miss.”**

<br />

[Explore Live Prototype](https://aegistrack-ai.onrender.com/) • [Key Features](#-key-features) • [Architecture](#-architecture) • [Demo Flow](#-demo-flow) • [Installation](#-installation)

---

</div>

## 🌐 Live Prototype

The live frontend application prototype is deployed and accessible at:  
👉 **[https://aegistrack-ai.onrender.com/](https://aegistrack-ai.onrender.com/)**

---

## 📌 Overview

**AegisTrack AI** is an intelligent decision-support copilot designed for motorsport race control and stewarding operations. Modern Grand Prix and competitive endurance events routinely produce hundreds of potential boundary violations per session, placing immense cognitive strain on human stewards who must review fragmented camera feeds, telemetry logs, and sensor arrays under intense time pressure.

AegisTrack addresses this operational bottleneck by pivoting away from binary black-box classification. Instead of producing an isolated `Violation = YES / NO`, the platform unifies computer vision telemetry, wheel-level tracking, geometric modeling, and temporal validation into a comprehensive, explainable evidence package. Human officials retain full adjudicative authority, equipped with clear confidence metrics, visible sensor corroboration, and explicit uncertainty indicators.

> **Project Classification:** Independent hackathon prototype demonstrating human-in-the-loop decision-support UX and multi-modal evidence fusion architecture.

---

## 🛑 The Operational Challenge

Modern circuit racing demands millimeter-level precision along track boundaries. During a single race weekend, hundreds of thousands of individual vehicle corner exits must be monitored. Human review workflows face steep operational limits:

* **Beyond Detection:** The operational question is rarely just *"did a car cross the white line?"* Adjudication requires establishing which individual wheel crossed, the maximum excursion distance (in centimeters), and the temporal duration outside the track limits.
* **Environmental & Sensor Ambiguity:** Trackside cameras suffer from rolling shutter artifacts, motion blur at 250+ km/h, glare, rain spray, and occlusion caused by curbs or adjacent competitors.
* **Conflicting Evidence Streams:** Visual broadcast feeds frequently disagree with telemetry approximations or low-frequency GPS traces, forcing manual frame-by-frame verification.
* **Context Blindness:** A standard detector treats a forced avoidance maneuver during wheel-to-wheel combat identically to deliberate corner-cutting on an empty circuit.
* **Review Fatigue:** Reviewing low-confidence, borderline events indiscriminately depletes cognitive bandwidth needed for decisive sporting penalties.

### Why Black-Box Classifiers Fail in Stewarding
A closed-source neural network that outputs a bare confidence score (e.g., `Violation: 89%`) is fundamentally unusable in regulatory environments. Stewards cannot penalize a championship competitor based on an uninterpretable probability distribution. Any assistive technology must articulate *why* an event was flagged, quantify its own uncertainty, and isolate every supporting piece of data for public and regulatory scrutiny.

---

## 💡 The Solution

AegisTrack functions as an **Evidence-Fusion + Explainable + Uncertainty-Aware + Human-in-the-Loop Steward Copilot**.

```text
Race Video + Wheel Position + Vehicle Position + Telemetry + Track Geometry + Temporal Evidence + Race Context
                                          │
                                          ▼
                                   EVIDENCE FUSION
                                          │
                                          ▼
                                  CONFIDENCE ENGINE
                                          │
                                          ▼
                                  CONFLICT DETECTION
                                          │
                                          ▼
                                 EXPLAINABLE ANALYSIS
                                          │
                                          ▼
                                  INCIDENT PRIORITY
                                          │
                                          ▼
                                   STEWARD COPILOT
                                          │
                                          ▼
                                   HUMAN DECISION

