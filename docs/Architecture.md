# Architecture

## Overview
This project is structured as a modern Next.js application focused on a premium, polished product experience. The architecture emphasizes a clear separation between routing, presentation, shared UI primitives, and supporting utilities.

## Architectural Principles
- Keep route entry points simple and focused.
- Place reusable UI in shared component layers.
- Centralize supporting logic in dedicated utility modules.
- Preserve a clean boundary between product experience and implementation details.

## Application Structure
- The app directory contains route-level entry points and layout composition.
- The components directory contains reusable UI primitives and feature-level sections.
- The lib directory holds shared utilities, constants, and motion helpers.
- Supporting folders such as docs, prompts, scripts, and public provide project-wide scaffolding and assets.

## Recommended Practices
- Prefer composition over deeply nested conditionals.
- Keep route-specific logic localized when possible.
- Reuse design-system primitives instead of duplicating similar UI.
- Maintain consistency across sections and states.

## Technical Direction
The system should remain easy to evolve as the product grows. Architectural changes should improve clarity, maintainability, and scalability without introducing unnecessary abstraction.
