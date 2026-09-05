<div align="center">

# 🏎️ AegisTrack AI
### *Evidence-Fusion & Explainable AI for Track-Limit Stewarding*

> **“AI doesn't make the penalty decision. It makes the evidence impossible to miss.”**

[![Live Demo](https://img.shields.io/badge/LIVE_DEMO-00C7B7?style=for-the-badge&logo=render&logoColor=white)](https://aegistrack-ai.onrender.com/)
[![Prototype](https://img.shields.io/badge/STATUS-FRONTEND_PROTOTYPE-F59E0B?style=for-the-badge)](https://github.com/)

[🌐 **Open Live Application**](https://aegistrack-ai.onrender.com/) • [🎯 Problem & Solution](#-at-a-glance) • [⚡ Core Features](#-core-innovations) • [🚦 Demo Flow](#-hackathon-demo-flow)

---

</div>

## 🌐 Live Application
👉 **Demo URL:** [https://aegistrack-ai.onrender.com/](https://aegistrack-ai.onrender.com/)  
*(Optimized for desktop and mobile Race Control review workflows)*

---

## ⚡ At a Glance

| Challenge (Current Stewarding) | AegisTrack AI Solution |
|---|---|
| **Black-box yes/no flags:** Fails regulatory scrutiny. | **Full evidence lineage:** Shows multi-sensor metrics. |
| **Edge ambiguity:** Motion blur, curb shadows, rain spray. | **Uncertainty detection:** Flags low confidence automatically. |
| **Sensor dissonance:** GPS vs visual timing conflicts. | **Conflict alerts:** Highlights disagreements for human review. |
| **Alert fatigue:** Hundreds of minor corner clips per race. | **Priority scoring:** Puts high-impact events first. |

---

## 🧠 System Architecture

```text
  [ Cameras ]   [ Telemetry ]   [ Track Geometry ]   [ Car GPS ]
        │              │                 │                │
        └──────────────┴────────┬────────┴────────────────┘
                                ▼
                   ┌─────────────────────────┐
                   │  Evidence Fusion Engine │
                   └────────────┬────────────┘
                                ▼
         ┌──────────────────────┴──────────────────────┐
         ▼                                             ▼
┌──────────────────┐                         ┌───────────────────┐
│ Uncertainty Flag │ (Low Confidence)        │  "Show Me Why"    │ (High Confidence)
│   51% Review     │                         │   94% Verified    │
└────────┬─────────┘                         └─────────┬─────────┘
         │                                             │
         └──────────────────────┬──────────────────────┘
                                ▼
                  ┌───────────────────────────┐
                  │   Human Steward Decision  │
                  │ [ Confirm / Reject / Note]│
                  └───────────────────────────┘
