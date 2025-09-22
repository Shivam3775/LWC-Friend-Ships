# Lightning Web Components Specialist – LWC Friend Ships App

**Trailhead Superbadge Project**

---

## Table of Contents

- [Project Title](#project-title)  
- [Description](#description)  
- [Motivation](#motivation)  
- [Tech Stack & Tools](#tech-stack--tools)  
- [Architecture & High‑Level Design](#architecture--high‑level-design)  
- [Features / Implementation](#features--implementation)  
- [What’s Not Included / Limitations](#whats-not-included--limitations)  
- [Setup / Installation](#setup--installation)  
- [Usage / Demo](#usage--demo)  
- [Testing](#testing)  
- [Known Issues](#known-issues)  
- [Future Improvements](#future-improvements)  
- [Project Structure](#project-structure)  
- [License](#license)  
- [Author / Contact](#author--contact)  
- [Acknowledgments](#acknowledgments)  

---

## Project Title

**LWC Friend Ships** – Lightning Web Components Specialist App

---

## Description

This project implements the *Lightning Web Components Specialist* superbadge requirements from Salesforce Trailhead.  

It is an app called **Friend Ships** that allows users to **search/list boats**, filter by type or location, view boat details, add reviews, show ratings, and more, all using Lightning Web Components, SLDS, Apex, Lightning Data Service, and Lightning Message Service.  

---

## Motivation

- To demonstrate mastery of LWC features as defined by Trailhead: using SLDS, converting Visualforce to LWC, component communication, use of Lightning Data Service, external JS, etc. :contentReference[oaicite:0]{index=0}  
- To build a real‑like app (“HowWeRoll” / FriendsShips) to show how various components interact (search, map, reviews).  
- To prepare for certification and for real project readiness.

---

## Tech Stack & Tools

- Salesforce DX / Salesforce CLI  
- Trailhead Playground / Developer Edition Org  
- Lightning Web Components (LWC)  
- Apex for data services  
- Lightning Message Service for cross‑component communication :contentReference[oaicite:1]{index=1}  
- Lightning Data Service for CRUD operations  
- SLDS for UI styling  
- External JavaScript / static resources (rating widget)  
- VS Code as development IDE  

---

## Architecture & High‑Level Design

- The app uses a Lightning App and Lightning Page named *Friend Ships* :contentReference[oaicite:2]{index=2}  
- The main page has multiple tabs: *Gallery*, *Boats Near Me*, *Boat Editor* etc. :contentReference[oaicite:3]{index=3}  
- Components communicate via custom events and via Lightning Message Service (BoatMessageChannel) :contentReference[oaicite:4]{index=4}  
- Apex service class (`BoatDataService`) provides methods for search, filter, and related boats.  
- Use of wired Apex & LDS for retrieving and updating records.  
- UI components: boat‑tile, boat‑search form, boat‑search results, boat map, reviews, rating, detail tabs, etc.  

---

## Features / Implementation

Below are the key features implemented to satisfy the superbadge requirements:

| Feature | Implementation Highlights |
|---|---|
| Search Boats by Boat Type | `boatSearchForm` component with lightning‑combobox, dispatch custom event, pass `boatTypeId` to search results component. |
| Gallery of Boats | Responsive grid of `boatTile` components; shows image, name, owner, price. |
| Boats Near Me | Uses geolocation of current user; filters boats based on location. |
| Boat Editor | Table where multiple boats can be edited at once. |
| Boat Reviews / Rating | Form to submit review: uses `fiveStarRating` component, review list display, read‑only mode, etc. |
| Boat Details / Tabs | Details tab, Reviews tab, similar boats component, map showing boat's location, etc. |
| Component Communication | Events & Lightning Message Channel for selected boat, updating various child components. |
| External JS / Static Resource | Rating stars handled by external JS library or static resources. |
| SLDS Styling & Accessibility | UI built with SLDS classes; attention to responsive layout; alternative text etc. |
| Apex & Lightning Data Service | Data fetched via Apex service for some parts; others via LDS. |

---

## What’s Not Included / Limitations

- Some UI polish or custom labels not implemented (if that’s your case).  
- Offline behavior or caching not fully handled.  
- Error boundary cases (network issues) may not all be covered.  
- Some performance optimizations could be improved (e.g. for large data sets).  

---

## Setup / Installation

1. Clone the repository:  
   ```bash
   git clone https://github.com/<your‑username>/<repo‑name>.git
   cd <repo‑name>


# Salesforce DX Project: Next Steps

Now that you’ve created a Salesforce DX project, what’s next? Here are some documentation resources to get you started.

## How Do You Plan to Deploy Your Changes?

Do you want to deploy a set of changes, or create a self-contained application? Choose a [development model](https://developer.salesforce.com/tools/vscode/en/user-guide/development-models).

## Configure Your Salesforce DX Project

The `sfdx-project.json` file contains useful configuration information for your project. See [Salesforce DX Project Configuration](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_ws_config.htm) in the _Salesforce DX Developer Guide_ for details about this file.

## Read All About It

- [Salesforce Extensions Documentation](https://developer.salesforce.com/tools/vscode/)
- [Salesforce CLI Setup Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_intro.htm)
- [Salesforce DX Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro.htm)
- [Salesforce CLI Command Reference](https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference.htm)
