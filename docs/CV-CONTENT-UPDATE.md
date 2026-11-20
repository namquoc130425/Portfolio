# CV-aligned content expansion — 20 November 2026

## Approved scope

The owner's supplied CV and follow-up confirmations supersede unresolved content placeholders in the original specification. Preserve the visual system, Vite/React/TypeScript, single lazy Canvas and animation ownership.

- Complete AI Taster's ten chapters with reader-facing copy.
- Add CarShowRoom and FPT Academy Experience as concise sections in the same document, approximately one desktop screen each with natural mobile height.
- Synchronize project stacks, capabilities, About and internship positioning.
- Keep React basic, TypeScript learning and Tailwind CSS 4 using/learning.
- Publish only city/country; do not copy the CV's residential location or confidential training-project source details.

## Evidence and wording boundaries

- Source: Nguyen_Vuong_Quoc_Nam_CV_Improved.docx supplied by the owner.
- AI Taster: https://github.com/namquoc130425/AITaster_BE
- CarShowRoom: https://github.com/TruongThien197/CarShowRoom
- Inspected AI Taster code: JobPostAiService, GeminiClientService, EmbeddingService, SkillVectorSearchService, ContentManagerService, EscrowStatus, DisputeStatus, ProjectEscrowPayoutService and DisputeService.
- Qdrant retrieves skill candidates. Name Gemini at provider level, without inventing an embedding model identifier.
- The diagram describes logical components, not production server topology.
- Fund holds describe application behavior, not licensed financial custody.
- Contribution ownership follows the CV; code presence alone does not prove authorship.
- Describe contributed tests without claiming they were executed in this portfolio task. Claim no usage, performance or revenue metrics.
- The owner confirms local development and a deployed demo; invent no live URL.
- Timeouts and per-call cost are learning areas and future design priorities, not claimed deployed retry/cost-tracking infrastructure.
- FPT Academy is training with an ongoing confidential project, October–December 2026 (expected), not claimed employment.

## Implementation and acceptance

1. Complete AI Taster data and semantic chapters; remove draft/publication instructions.
2. Add CarShowRoom and Experience; connect both project-index links to real anchors.
3. Synchronize capabilities and navigation; new labels need no additional 3D effects.
4. Verify TypeScript, oxlint, build, keyboard, hashes/history, responsive layouts, reduced motion, console and Canvas resources.

No new dependencies, scenes or animation libraries.

## Verification results

- TypeScript build mode, oxlint and production Vite build pass.
- Browser tested against the production preview, not the unrelated application running on port 5173.
- Viewports: 1920×1080, 1440×900, 1280×720, 768×1024, 430×932 and 375×812; no horizontal overflow or measured content extending beyond the viewport width.
- At 1440×900 both short sections occupy 900px. Smaller screens use natural content height; 1280×720 Experience is about 730px rather than clipping content.
- One H1, ten case-study chapters, no empty links, no broken local anchors and no publication placeholders in rendered content.
- Mobile navigation links have at least 44×44px targets and are not obscured by the reading layer.
- Keyboard Tab/Enter opens Experience with visible focus. CarShowRoom navigation and native Back/Forward restore the expected hash and active navigation.
- Fresh-load/reload anchors align after boot and font layout. Case-study chapter hashes retain Work as the active parent navigation item.
- Mobile reduced-motion content remains readable, boot completes and no Canvas is mounted. Desktop/tablet retain one Canvas; 3D source files are unchanged.
- Production bundle: main JS 120.41 KB gzip (previous 116.95), CSS 6.30 KB (previous 5.86), Canvas 242.99 KB (unchanged). Added size is content, semantic sections and navigation handling.
- Final reduced-motion/mobile console check had no errors or warnings. A Three.js Clock deprecation warning was observed during the desktop/viewport-switch sequence; it originates in the existing R3F/Three dependency stack, which this content update does not alter.
- Backend JUnit/Mockito tests were inspected/described as project evidence, not executed here. No live demo URL or per-call AI price was invented.

Skills consulted: incremental-implementation, git-workflow-and-versioning, react-best-practices, gpt-taste, ui-ux-pro-max, browser-testing-with-devtools, code-review-and-quality. Existing project typography/layout overrides conflicting visual-skill suggestions; accessibility guidance informed touch targets and readable overlays.
