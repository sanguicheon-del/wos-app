# PROJECT_RULES

## Purpose
This document is the constitution of the project. It defines how the codebase must be organized, written, reviewed, and shipped. These rules are mandatory unless a documented exception is approved by the maintainers.

## Core Principles
- Prefer clarity over cleverness.
- Prefer simplicity over premature abstraction.
- Prefer maintainability over local optimization.
- Prefer accessibility, performance, and reliability in every change.
- Prefer explicitness over hidden behavior.
- Do not introduce technical debt without a documented reason.

---

## 1. Folder Structure
The repository must remain predictable, modular, and easy to navigate.

```text
.
├── app/                  # App Router pages, layouts, route-specific entry points
├── components/           # Reusable UI primitives and feature-level components
│   ├── ui/               # Atomic, design-system-level primitives
│   └── sections/         # Page/feature-specific composed sections
├── lib/                  # Shared utilities, helpers, motion presets, constants
├── public/               # Static assets
├── docs/                 # Product, technical, and process documentation
├── prompts/              # Prompt templates and instruction files
├── scripts/              # Build, automation, and maintenance scripts
├── .ai/                  # AI-specific guidance and project context files
├── .github/workflows/    # CI/CD automation
├── package.json          # Project metadata and scripts
├── tsconfig.json         # TypeScript configuration
└── README.md             # Project overview and onboarding
```

### Rules
- Keep route-level logic in app/.
- Keep reusable UI in components/.
- Keep shared logic in lib/.
- Keep environment-specific or deployment automation in .github/workflows/ and scripts/.
- Do not place business logic inside page components unless it is truly route-local.
- Do not add new top-level folders without a clear purpose.

---

## 2. Naming Conventions
Consistency in naming is mandatory.

### Files
- Use lowercase kebab-case for file names: `hero-section.tsx`, `motion-utils.ts`.
- Use `page.tsx` for route entry files.
- Use `layout.tsx` for route layout files.
- Use `loading.tsx`, `error.tsx`, and `not-found.tsx` for route-level special files.
- Use `README.md` for folder documentation when appropriate.

### Components
- Use PascalCase for component names: `HeroSection`, `GlassCard`.
- Use descriptive names that reflect intent, not implementation details.
- Prefer `FeatureSection` over `ThingSection`.

### Functions and Variables
- Use camelCase for variables and functions: `getViewportMetrics`, `isDarkMode`.
- Use UPPER_SNAKE_CASE for constants that are truly immutable: `MAX_WIDTH`, `DEFAULT_THEME`.
- Use boolean names that start with `is`, `has`, `can`, or `should`: `isLoaded`, `hasError`.

### Types and Interfaces
- Use PascalCase for type and interface names: `ThemeMode`, `SectionProps`.
- Use `type` over `interface` for simple object shapes unless extension is required.
- Prefer explicit names such as `HeroSectionProps` over generic names like `Props`.

### CSS and Styling
- Prefer Tailwind utility classes over custom ad-hoc CSS.
- Keep styling logic co-located with the component unless a shared token or utility is justified.
- Avoid inline styles except for exceptional dynamic values.

---

## 3. Component Conventions
All UI components must be production-grade, composable, and predictable.

### Requirements
- Components must be small, focused, and easy to reason about.
- Components must be reusable unless they are intentionally route-specific.
- Each component must have a single clear responsibility.
- Avoid large monolithic components with mixed concerns.
- Prefer composition over inheritance.

### Structure
- Keep components as functional components using TypeScript.
- Keep props typed explicitly.
- Provide sensible defaults for optional props.
- Avoid hidden side effects inside render logic.
- Keep business logic outside presentational rendering where possible.

### Rules
- Do not use `any` unless there is no safe alternative and the exception is documented.
- Do not mutate props or external state directly.
- Do not create components that depend on unstable global state without a clear abstraction.
- Prefer semantic HTML and accessible structure.
- Keep styling tokens and visual primitives consistent with the shared design system.

### Shared UI Primitives
- Place atomic primitives in components/ui/.
- Place composed, section-level UI in components/sections/.
- Reuse primitives rather than duplicating markup patterns.

---

## 4. Animation Rules
Motion must feel premium, purposeful, and restrained.

### Requirements
- Animations must enhance clarity, not distract from it.
- Motion must be subtle, smooth, and intentional.
- Avoid excessive movement, bounce, or over-animation.
- Use motion to guide attention, show transitions, and communicate state.

### Rules
- Prefer short durations: usually 150ms to 400ms for micro-interactions and 500ms to 900ms for larger transitions.
- Prefer easing curves that feel natural and polished.
- Respect reduced-motion preferences.
- Avoid animation on every element by default.
- Do not animate purely for visual flair without a user benefit.

### Implementation Guidance
- Use animation presets from shared utilities where possible.
- Keep animation values consistent across the app.
- Prefer CSS transforms and opacity for performance-sensitive animation.
- Avoid layout-triggering animations where possible.

---

## 5. Accessibility Rules
Accessibility is not optional. Every experience must be usable by everyone.

### Requirements
- All interactive elements must be keyboard accessible.
- All controls must expose clear labels and understandable purpose.
- Semantic HTML must be used whenever possible.
- Color contrast must meet accessible standards.
- Focus states must be visible and obvious.

### Rules
- Do not rely on color alone to convey meaning.
- Provide `alt` text for meaningful images.
- Use ARIA only when semantic HTML is insufficient.
- Ensure heading hierarchy is logical and consistent.
- Ensure forms and interactive components meet expected keyboard behavior.
- Respect `prefers-reduced-motion`.

### Non-Negotiable
- No feature may ship with broken keyboard navigation.
- No feature may ship with inaccessible critical flows.
- No visual treatment may remove or obscure visible focus states.

---

## 6. Performance Rules
Performance is a product requirement, not an afterthought.

### Requirements
- Keep render paths efficient and predictable.
- Avoid unnecessary re-renders.
- Avoid shipping unused code or unused assets.
- Optimize images and media where relevant.

### Rules
- Prefer lightweight components and minimal dependencies.
- Use lazy loading or code splitting for non-critical features when appropriate.
- Avoid expensive operations in render paths.
- Avoid large client-side bundles for content that can remain static.
- Keep the initial experience fast and smooth.

### Performance Checklist
- Does the change increase bundle size meaningfully?
- Does the change introduce expensive work on each render?
- Does the change add unneeded animation or layout thrashing?
- Does the change introduce avoidable network or asset cost?

---

## 7. Design Philosophy
The product experience must feel premium, modern, and intentional.

### Core Aesthetic
- The interface should feel calm, confident, and high-end.
- Visual design must be refined rather than noisy.
- Motion should be elegant, not flashy.
- The experience should feel cohesive across sections and states.

### Rules
- Maintain a consistent spacing system.
- Maintain a consistent typography and hierarchy.
- Maintain a consistent visual language for cards, surfaces, borders, and depth.
- Use restraint in color usage and emphasis.
- Favor polished composition over decoration.

### Design Standard
- Every page should feel purposeful.
- Every section should have clear visual hierarchy.
- Every interaction should feel deliberate.

---

## 8. Code Review Rules
Code review is mandatory and must be constructive, precise, and standards-driven.

### Review Expectations
- Review for correctness, readability, maintainability, and user impact.
- Review for accessibility, performance, and design consistency.
- Review for testability and clarity of intent.
- Flag unclear naming, poor structure, or hidden complexity.

### Review Rules
- Do not approve changes that introduce obvious regressions.
- Do not approve changes without understanding their effect on the user experience.
- Do not approve changes that leave dead code, broken imports, or confusing abstractions.
- Prefer actionable feedback over vague comments.
- Be respectful, specific, and solution-oriented.

---

## 9. Git Workflow
The repository must follow a disciplined and reliable workflow.

### Rules
- Work from a clean branch derived from the latest main branch.
- Keep commits focused and meaningful.
- Avoid mixing unrelated changes in a single commit.
- Rebase or merge carefully to avoid noisy history.
- Do not force-push unless the change is intentional and coordinated.

### Branch Naming
- Use descriptive branch names in lowercase kebab-case.
- Examples:
  - `feature/hero-section`
  - `fix/animation-reduced-motion`
  - `chore/scaffold-docs`

---

## 10. Commit Naming
Commit messages must be concise, informative, and consistent.

### Format
Use the following structure:

```text
<type>(<scope>): <short summary>
```

### Types
- `feat`: new user-facing functionality
- `fix`: bug fix
- `refactor`: structural or code-quality improvement without behavior change
- `docs`: documentation-only changes
- `style`: formatting or visual-only cleanup without behavior change
- `perf`: performance improvements
- `test`: tests or validation-related changes
- `chore`: maintenance, tooling, scaffolding, or infra updates

### Examples
- `feat(hero): add premium landing experience`
- `fix(nav): resolve keyboard focus trap`
- `docs(rules): add project constitution`
- `chore(scaffold): add workflow and docs folders`

---

## 11. Pull Request Checklist
Every pull request must be review-ready.

### Required Checklist
- [ ] The change is scoped and clearly explained.
- [ ] The implementation follows project conventions.
- [ ] The change is accessible.
- [ ] The change is performant and does not introduce obvious regressions.
- [ ] The change is documented where necessary.
- [ ] The change has been verified locally.
- [ ] The PR description includes context, intent, and testing information.

### PR Description Requirements
- Summarize the problem and solution.
- Include relevant screenshots or visual references when appropriate.
- Note any risks or follow-up work.
- Mention tests or verification performed.

---

## 12. Definition of Done
A task is not complete until all of the following are true.

- The work is implemented according to the requirement.
- The code follows naming, structure, and component conventions.
- The change is accessible and keyboard-friendly.
- The change is performant and does not introduce obvious regressions.
- The change is reviewed or is ready for review.
- The change is documented if the behavior or workflow is not self-evident.
- The change has been verified with the relevant build, lint, or test checks.
- The change does not leave the repository in a broken or uncertain state.

---

## 13. Enforcement
These rules are binding for all contributors. Exceptions must be explicit, temporary, and approved. When in doubt, prefer the more maintainable, accessible, and production-safe option.
