# YourName Portfolio Platform

A recruiter-first portfolio plus learning hub and utility toolbox built with **Next.js + React + TypeScript + Tailwind CSS**.

The visual system is based on the supplied hybrid mockup: bright professional light mode for recruiter scanning and a deeper navy/indigo/teal dark mode for a more immersive developer feel.

## Included

### Portfolio
- Responsive sticky navigation
- Light / dark theme toggle
- Recruiter-focused hero and CTA hierarchy
- Expertise strip
- About / at-a-glance section
- Skills grouped by capability (no arbitrary percentage bars)
- Experience timeline
- Featured projects
- Achievements
- Testimonials
- Learning + tools callouts
- Contact page and demo contact form
- Resume download placeholder

### Learning Hub
Three starter learning tracks:
- Python for Beginners
- JavaScript Essentials
- Docker Foundations

Each course includes:
- Course overview
- Individual lesson routes
- Code examples
- Practice challenge
- Local browser progress tracking
- End-of-course quiz with explanations and score

### Developer Tools — 6
1. JSON Viewer & Formatter
2. Diff Checker
3. GitHub README Builder
4. Base64 Encoder / Decoder
5. URL Encoder / Decoder
6. UUID Generator

### Calculators — 6
1. EMI Calculator
2. Percentage Calculator
3. Age Calculator
4. Simple Interest Calculator
5. Compound Interest Calculator
6. Discount Calculator

### Nepal Tools — 6
1. BS to AD Converter
2. AD to BS Converter
3. Today's Nepali Date
4. BS Date Difference
5. Nepali Age Calculator
6. Nepali Calendar Viewer

The Nepal date utilities use `@sbmdkl/nepali-date-converter` 2.0.5, a zero-dependency MIT-licensed converter with published support for 1921–2040 AD / 1978–2099 BS. The wrapper in `src/lib/bs-calendar.ts` keeps conversion logic isolated so you can replace the underlying data source later if you need a wider verified range.

## Stack

- Next.js 16.2.11 (App Router)
- React 19.2
- TypeScript
- Tailwind CSS 4.3
- next-themes 0.4.6
- lucide-react 1.27.0
- @sbmdkl/nepali-date-converter 2.0.5

The package versions for Next.js/React/Tailwind were chosen against current official guidance in August 2026. Before a production deployment, run your normal dependency/security audit and update patches if newer security releases exist.

## Start locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Production check:

```bash
npm run typecheck
npm run build
npm start
```

## First files to personalize

### 1. Profile, social links and contact data
Edit:

```text
src/data/site.ts
```

Replace:
- YourName
- email
- phone
- Nepal location if needed
- GitHub
- LinkedIn
- experience
- stats
- projects
- achievements
- testimonials

### 2. Resume
Replace:

```text
public/resume-placeholder.txt
```

with your real PDF, for example:

```text
public/resume.pdf
```

Then change `resumeUrl` in `src/data/site.ts` to `/resume.pdf`.

### 3. Profile photo
The hero intentionally uses a safe placeholder instead of inventing your face. Replace that UI block in:

```text
src/components/home/home-page.tsx
```

with `next/image` and your real image file.

### 4. Projects
Update the `projects` array inside `src/data/site.ts` with real project names, screenshots, stack, role, problem and outcome. Only publish metrics you can support.

## Adding another tool

1. Add its metadata to `src/data/tools.ts`.
2. Create the React client UI in `src/components/tools/tool-workspace.tsx` (or extract it into its own component when the tool becomes large).
3. Add a switch case in `ToolWorkspace`.

Because the tools page is registry-driven, the new tool automatically appears in its category and receives a route at `/tools/<slug>`.

For a bigger codebase, the recommended evolution is:

```text
src/components/tools/
  json-viewer.tsx
  diff-checker.tsx
  readme-builder.tsx
  ...
```

and a typed component registry instead of a switch.

## Adding another course

Add the course, lessons and quiz questions to:

```text
src/data/courses.ts
```

The dynamic routes automatically support:

```text
/learn/<course>
/learn/<course>/<lesson>
/learn/<course>/quiz
```

For an editorial workflow with hundreds of tutorials, move lesson content from TypeScript data to MDX or a CMS while retaining the existing route and UI components.

## Contact form

The included contact form is UI-only. It intentionally does not pretend to send email. Connect it to one of:
- your own Next.js route handler
- Resend
- Formspree
- another verified mail/form provider

## Design reference

`public/design-reference.png` contains the generated hybrid mockup used as a visual reference while continuing development.

## Production checklist

Before publishing:
- Replace all placeholder personal information.
- Replace the resume placeholder.
- Add your real project imagery.
- Connect the contact form.
- Test BS/AD tools across the date range you plan to support (the included package documents 1921–2040 AD / 1978–2099 BS).
- Add analytics only if you want them and configure consent/privacy appropriately.
- Add page-specific metadata and structured data as real content is finalized.
- Run accessibility, mobile and Core Web Vitals testing.
- Run a dependency/security audit before deployment.

