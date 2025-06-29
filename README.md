# DJS02 – 🎙️ PodcastPreview Web Component

## Overview

In this project, I will build a reusable and encapsulated **custom HTML element** that displays a podcast preview. The component follows the **Web Component standard**, using `customElements.define()` and should work independently from the main application logic. This component will enhance modularity, promote reuse, and reduce code duplication across the app.

This component is designed to **accept podcast data via attributes or properties**, display relevant UI elements (such as title, cover image, and genres), and **communicate with the main application** through custom events.

<mypodcast-preview> is a custom Web Component that renders a responsive grid of podcast previews using Shadow DOM. It displays podcast cards and opens detailed modals on interaction using a separate modal component.

## 📦 What Is It?
This component visually displays a list of podcasts as cards in a responsive grid layout. When a card is clicked, it triggers a modal popup (createModal) that shows detailed information about the selected podcast.

It uses:

Web Components (CustomElement)

Shadow DOM (encapsulation)

Modular JS (createModal, header)

CSS grid layout

Dynamic data support (via props and event listeners)


## 🚀 How It Works
Component Structure
<mypodcast-preview>: Main custom element rendering the grid

.card: Each podcast preview card

createModal(): External modal module for displaying full podcast details

header(): Injected page header layout

init(): Initializes the component and binds listeners

When a user clicks a podcast .card, the component uses createModal() to open a detailed modal view of that podcast.

## 🧪 Features
🔍 Click-to-expand modal interface

🎨 Shadow DOM styling

📱 Responsive design (mobile-friendly)

🏷️ Tag system for filtering and categorizing

📦 Easy-to-extend and integrate into larger projects


