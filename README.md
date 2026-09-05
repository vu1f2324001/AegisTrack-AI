

# 🏎️ AegisTrack AI

### *Evidence-Fusion & Explainable AI for Track-Limit Stewarding*

> **“AI doesn't make the penalty decision. It makes the evidence impossible to miss.”**

[![Live Demo](https://img.shields.io/badge/LIVE_DEMO-Render-00C7B7?style=for-the-badge&logo=render&logoColor=white)](https://aegistrack-ai.onrender.com/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646C9A?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Status](https://img.shields.io/badge/STATUS-FRONTEND_PROTOTYPE-F59E0B?style=for-the-badge)](https://github.com/)

[🌐 Live Application](#-live-application) • [⚡ At a Glance](#-at-a-glance) • [🧠 System Architecture](#-system-architecture) • [🚀 Core Features](#-core-features) • [🔍 Why Show Me Why](#-why-show-me-why) • [🎬 Demo Flow](#-hackathon-demo-flow) • [🛠️ Tech Stack](#️-tech-stack)

---

</div>

## 🌐 Live Application

👉 **Interactive Prototype:** [https://aegistrack-ai.onrender.com/](https://aegistrack-ai.onrender.com/)  
*Optimized for desktop and mobile Race Control review workflows. Powered by client-side mock fixtures.*

---

## 📌 Executive Overview

In competitive motorsport, a single race session generates hundreds of potential track-limit boundary events. Current review processes place extreme cognitive strain on human stewards, who must rapidly sift through fragmented broadcast feeds, low-frequency telemetry, and positional streams to verify minor infractions.

Standard computer vision approaches focus on binary classification: `Violation = YES / NO`. In regulatory environments, black-box classification fails because stewards cannot issue penalties without verifiable, auditable facts. 

**AegisTrack AI** is an intelligent decision-support copilot designed to bridge this gap. Instead of issuing autonomous penalties, AegisTrack gathers multi-modal telemetry—video, wheel contact patches, GPS, track geometry, and context—and fuses them into an **explainable, uncertainty-aware evidence package**. The platform highlights sensor conflicts, quantifies confidence, and surfaces the critical evidence so human stewards can adjudicate decisively.

---

## ⚡ At a Glance

| Regulatory Challenge | Traditional Automated Vision | AegisTrack AI Approach |
|---|---|---|
| **Black-box decisions** | Opaque classification score | **Explainable "Show Me Why" audit package** |
| **Edge ambiguity** | Hallucinates or misses boundaries | **Explicit uncertainty awareness (e.g., 51% Human Review)** |
| **Sensor dissonance** | Averages contradictory inputs | **Evidence conflict detection & escalation flags** |
| **Alert fatigue** | Chronological flood of minor clips | **Incident Priority Scoring (IPS) for rapid triage** |
| **Measurement accuracy** | Vehicle-center approximations | **Individual 4-wheel contact patch & multi-frame calipers** |
| **Regulatory oversight** | Autonomous penalty attempts | **Human-in-the-Loop copilot with auditable sign-off** |

---

## 🧠 System Architecture

```mermaid
%%{init: {'theme': 'dark', 'themeVariables': { 'darkMode': true, 'primaryColor': '#1e293b', 'primaryTextColor': '#f8fafc', 'primaryBorderColor': '#38bdf8', 'lineColor': '#00C7B7', 'secondaryColor': '#0f172a', 'tertiaryColor': '#020617'}}}%%
flowchart TD
    subgraph SENSORS [" 📡 MULTI-MODAL DATA INGESTION "]
        direction LR
        S1["🎥 Broadcast Feeds"]
        S2["🏎️ Wheel Contacts"]
        S3["🗺️ CAD Geometry"]
        S4["📍 Telemetry / GPS"]
    end

    SENSORS --> ENGINE

    subgraph ENGINE [" ⚙️ AEGIS REASONING & FUSION CORE (Planned) "]
        direction TB
        E1["🔄 Multi-Source Evidence Fusion"]
        E2["⚖️ Bayesian Confidence Engine"]
        E3["⚠️ Sensor Conflict Detector"]
        E4["🧩 'Show Me Why' Explainability"]
        
        E1 --> E2
        E1 --> E3
        E2 & E3 --> E4
    end

    ENGINE --> QUEUE["📊 Dynamic Incident Priority Queue (IPS)"]

    subgraph COPILOT [" 🖥️ STEWARD COPILOT DESK (Active Prototype) "]
        direction TB
        UI1["🔍 Synchronized Frame-Scrubber Replay"]
        UI2["📋 Auditable Evidence Verification Checklist"]
    end

    QUEUE --> COPILOT

    subgraph DECISION [" 👤 HUMAN-IN-THE-LOOP ADJUDICATION "]
        direction LR
        D1["✅ Confirm Breach"]
        D2["❌ Dismiss"]
        D3["📝 Log for Inquiry"]
    end

    COPILOT ==> DECISION

    classDef sensorStyle fill:#0f172a,stroke:#38bdf8,stroke-width:1.5px,color:#e2e8f0;
    classDef engineStyle fill:#1e293b,stroke:#00C7B7,stroke-width:2px,color:#ffffff;
    classDef activeStyle fill:#134e4a,stroke:#2dd4bf,stroke-width:2.5px,color:#f0fdfa;
    classDef humanStyle fill:#312e81,stroke:#818cf8,stroke-width:2px,color:#e0e7ff;

    class S1,S2,S3,S4 sensorStyle;
    class E1,E2,E3,E4,QUEUE engineStyle;
    class UI1,UI2 activeStyle;
    class D1,D2,D3 humanStyle;
