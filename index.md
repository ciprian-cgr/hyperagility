---
title: HyperAgility
subtitle: A Guide to Sanity in AI-Driven Software Development
---

# Welcome to HyperAgility, here's your guide to sanity

AI is generating code faster than anyone can review it, and that wouldn't be an issue if the code was perfect, but most times it absolutely needs to be reviewed and changes have to be made.

Using ai to build software is like using a slot machine for an IDE. And while there is some control over what is generated, using good prompts, creating the right context, having guardails and strict coding standards in place, I haven't yet met a seasoned developer that can simply trust whatever was generated.

However, there's no denying that things are moving at a pace never seen before and the whole engineering paradigm needs to change. Old practices simply don't work anymore and are just causing friction in the process. Everything we know about building software is based on entire teams grinding away at writing code and now, that grind is completely different and everyone is scrambling trying to figure out what and how to do. We've all been given power tools and now we need to figure out how to use them wirhout hurting ourselves or others.

Why the traditional process fails

Current development processes are built around the idea that writing code takes a long time and costs a lot of money. So we made everything else as efficient as possible to make sure we don't write more code than needed, to write maintiablr code so we don't have to keep rewriting it, building MVPs and POCs to make sure the code is worth writing at all. Agile ceremonies, prioritization meetings, planning ppoker and the annoying t-shirt sizes, all aimed at making the development process predictable and efficient.

But what do you do when the code itself is a commodity? When a feature can be written 6 times in a few minutes? Who needs estimations when every task is arguably size S?

The paradigm shift is here, code is easy to create and we need to a new process around this reality. One might argue that the current process still works, it is built after all for efficiency everywhere else except code generation, and writing code faster should only make things better. Unfortunately the shift brings a whole new flavor of challenges. Developer confidence is at the top of the list. The times of ‘LGTM’ reviews is dead. Small iterative PRs are great for easy reviews, but with AI it feels like we're stifling productivity. On the other hand, the chance that a small code change can lead to a major production incident is constantly looming, we've all seen enough vibe coders complaining that Cursor deleted their entire hard drive or Claude removed their database to fix a schema migration issue.

## A new process

With the current process being turned upside down, we need new ways to deliver software. The reality is that building working, reliable software products has not gotten much easier, but it could be. Right now we are trying hard to push the square peg into the round hole.

So let's adapt to the new velocity. Keep what works and change what doesn't.

### Bring back waterfall

It might feel counterintuitive that the solution to hyperagility is what used to be regarded as the death of efficiency. And I'm not arguing that we need to plan out 6 months in advance, not even close to that. What we do need to take from waterfall design though is the extensive design of features before we start implementing. Basically, measure twice and cut once. And we should use the tools at our disposal to bring new dimensions to our specs. Similar to the Shaping process from DHH reshape book, use the advanced tools at our disposal to define the feature to the maximum extent. The biggest risk of not specific requirements is that Ai will hallucinate something you most likely didn't want.

### Testing in the Age of Hyperagility

Right after COVID, and as AI began taking a more central role in software development, companies started doing something very telling: they massively reduced or entirely removed QA teams from their organizations. The assumption seemed to be that AI would either take over large parts of QA, or that AI-augmented developers would move so fast that a separate QA function would no longer be necessary.

In reality, the opposite has happened.

With AI-generated code, **testing has become more important than ever**. Not testing in the narrow sense of manual UI checks or isolated feature validation, but testing at scale—specifically **regression and integration testing**. The reason is simple: AI dramatically increases the scope and blast radius of changes. A single pull request can now introduce thousands of lines of code, often spread across multiple repositories, touching far more of the system than a comparable change would have in the past.

This shift also exposes another problem: **maintainability**. AI-generated code tends to introduce more complexity and spaghetti over time. Even when the code works, it is often harder to reason about, refactor, or safely modify. As a result, regression testing becomes the primary safety net for successful software delivery.

Unit testing, as traditionally practiced, struggles in this environment. AI-generated unit tests are generally low quality, and chasing coverage metrics with AI typically produces a large volume of tests that slow down CI pipelines without providing meaningful protection. These tests rarely catch real issues and often become noise.

More fundamentally, **unit tests need to be treated as a feature**, not as an automatically generated artifact. Writing good unit tests requires understanding what should be tested, why it matters, and how the test should behave over time. With AI-driven development, code changes so frequently and so broadly that unit tests quickly become outdated, redundant, or brittle—breaking with every minor refactor or PR.

Software is no longer a carefully constructed castle where small, incremental changes preserve long-standing dependencies. It is closer to a house where walls and rooms are constantly being rearranged. Testing strategies must adapt to this reality.

In a hyper-agile development model, testing must move **up the stack**. The emphasis should be on regression and integration tests that validate system behavior rather than internal implementation details. Unit tests still have a place, but they should be used selectively and intentionally.

Anything that can be reliably caught by **compilers, linters, static analyzers, and AI-driven code analysis** should be handled there. In many cases, a strong combination of static checks plus high-level regression and integration testing can replace large portions of traditional unit testing altogether.

In short, hyperagility demands a testing strategy that prioritizes **behavioral correctness at scale**, not brittle correctness at the function level.

### Architecture and Code Organization in Hyperagility

To maximize AI’s ability to understand and modify a system quickly, one approach that works very well is organizing code **by domains**, and ensuring we use **static types** as much as possible (or type hints in languages that aren’t statically typed).

A domain-driven architecture supports the AI engineering model because the AI can rely on the **semantic separation** of the codebase: domains, domain models, and clear boundaries. In practice, this means the AI often only needs to read the specific domain(s) it has to touch, which can significantly reduce context size.

Another key shift is that we sometimes need to **prefer code duplication** over complex reuse. Traditional architecture often optimizes for DRY principles and shared abstractions, but those abstractions create relationships across many code paths and files. For AI-driven development, that can be a net negative: the AI may need to read and reason across multiple files and layers before it can safely make a change.

Fewer cross-cutting relationships and fewer files to load means:

- fewer tool calls to inspect the codebase,
- fewer tokens spent on context,
- less reasoning overhead before producing a solution.

In hyperagility, architecture becomes a discipline of **context optimization**: reducing how much code the AI must “see” to make correct changes, even if that sometimes means accepting controlled duplication instead of complex indirection.

### Code Reviews in Hyperagility

Code reviews are one of the biggest challenges—and pain points—in hyper-agile, AI-driven software development. A large part of this comes down to **developer confidence**. Developers still don’t fully trust AI-generated code, and for good reason: it is often affected by scope creep, unintended security changes, broken code paths, and subtle behavioral regressions.

The problem is scale. Reviewing 200 lines of code is manageable. Reviewing **5,000 lines of AI-generated code** is not. Traditional line-by-line review techniques simply do not work at this volume, which means **code reviews themselves must be re-designed**.

In hyperagility, code reviews need to operate at a **higher level of abstraction**. The first step of a review should be a structured summary that surfaces the most critical aspects of the change:

- Code quality and maintainability concerns
- Data model changes
- Behavioral changes
- Changes to contracts between services, APIs, or interfaces
- Major architectural shifts

These signals need to be visible immediately so the human reviewer can quickly understand what actually changed, before diving into details.

Another critical aspect is **intention versus implementation**. Ideally, a single PR should address a single intention. In practice, hyper-agility often leads to very large PRs because AI can generate an entire feature in one go. While smaller, incremental PRs may seem safer, they can actually **reduce productivity** and introduce new problems for AI-assisted development.

AI works best when it has a stable, complete context. Breaking a feature into many small PRs often means losing that context between steps, forcing additional specifications, guardrails, and re-alignment at every stage. This increases cognitive and operational overhead and can even lead to inconsistent implementations across PRs.

As a result, in hyper-agile workflows it is often more effective to implement an entire feature in a single, larger PR—**as long as** the review process is adapted accordingly.

For this to work, code reviews must focus on **early risk detection**. Any issue introduced by the change—whether related to security, architecture, data integrity, or system behavior—needs to be surfaced as early and as clearly as possible. The goal is not to read every line, but to quickly identify whether the change aligns with the stated intention and whether it introduces unacceptable risk.

In short, code reviews in hyperagility shift from **exhaustive inspection** to **intention-driven, signal-based validation**, keeping a human firmly in the loop while scaling to AI-level output.

### Code Quality and Code Reviews in Hyperagility

In an AI-driven, hyper-agile development environment, **code quality and code reviews become a conscious trade-off rather than an absolute goal**. Traditional notions of code quality—perfect readability, elegant abstractions, or long-term maintainability—do not scale well with the velocity and frequency of AI-generated change. Software today is rarely written to remain untouched for months or years; it is continuously evolving.

This does not mean that code quality no longer matters. Certain standards remain non-negotiable: correctness, adherence to team conventions, use of static types or type hints where required, safety guarantees for mission-critical systems, and compliance with performance or memory constraints when they are relevant. These rules form the baseline.

However, beyond that baseline, code quality must be evaluated pragmatically. If a feature is implemented correctly, follows agreed standards, fulfills its requirements, and passes regression and integration tests, it should generally be considered acceptable—even if the implementation is not “beautiful” by traditional standards. Optimizing excessively for readability or stylistic perfection often slows teams down without delivering proportional value, especially when the code is likely to change again in the near future.

As a result, code reviews should focus less on subjective implementation details and more on **system-level correctness**: ensuring nothing is broken, no unintended behavior is introduced, contracts remain intact, and requirements are met. Deep implementation scrutiny should be reserved for cases where it is clearly justified, rather than applied universally.

---

### Development Process and Pull Requests in Hyperagility

In terms of development process, hyper-agility favors a counterintuitive but effective approach: **build large, complete features first**, then iterate.

Rather than splitting feature development into many small PRs, it is often preferable to implement an entire feature in a single, larger PR using a single, consistent AI context. This ensures that the initial implementation closely follows the original specifications, intent, and architectural guidelines. AI performs best when it can reason over a complete problem with stable context; breaking work into many small steps increases the risk of context loss and inconsistent decisions over time.

Once the main feature is implemented, refinements, fixes, and improvements can be addressed through smaller, incremental commits. This preserves velocity while still allowing for correction and optimization.

Trying to build features exclusively through small, incremental PRs often leads to **context rot**: each step requires re-establishing intent, constraints, and design decisions, increasing overhead and frequently resulting in worse overall implementations. In hyper-agile environments, it is often better to accept an imperfect initial implementation and improve it iteratively than to fragment development and lose coherence.

In short, the hyper-agile development process optimizes for **context continuity first, refinement second**—a reversal of many traditional best practices, driven by the realities of AI-assisted software development.

### Working in Teams in Hyperagility

While the use of AI in software engineering has become increasingly common, most development tools and workflows are still poorly adapted to **team-based AI-assisted development**. Many AI app builders and coding tools are optimized for individual productivity, not for coordinated work across multiple engineers. As a result, introducing AI into team environments often creates new forms of friction rather than eliminating them.

One major challenge is **asymmetric velocity**. Different team members achieve very different speeds depending on how effectively they use AI tools, which can lead to imbalance and coordination issues. Accountability also becomes more diffuse—AI can easily be blamed for mistakes, making it harder to reason about ownership and responsibility.

Another growing problem is **merge conflicts**. Because AI can generate large volumes of code quickly, the scale of changes per PR increases significantly. Working in parallel becomes especially difficult: even with well-decoupled architectures, multiple features will inevitably touch the same files. Traditional parallelization strategies struggle under this load.

To address this, AI itself should be used as part of the solution. One powerful approach is **merge conflict prediction during feature shaping and PR creation**. When a new PR is opened, an AI system can analyze other open PRs, identify overlapping files, domains, or behavioral changes, and provide an early overview of how those changes might interact. Even better, it can propose concrete mitigation strategies before conflicts occur, rather than reacting after the fact.

Beyond parallel work, **clear coding standards and guardrails are essential**. Uniformity is difficult to achieve when prompts, temperatures, models, and agents vary across team members. Without strong constraints, codebases quickly lose cohesion. This is where well-defined feature specifications, project-level guardrails, and up-to-date documentation become critical, supported by an improved change review and merge conflict resolution process.

Feature shaping should also be a **team activity**, not an individual one. Borrowing from approaches like *Shape Up*, doing more work upfront—aligning on intent, scope, risks, and interactions—pays off significantly later. In a high-velocity environment, understanding how one feature affects another reduces friction and improves collaboration across the team.

In practice, making AI work well in teams requires:

- Clear and shared feature specifications
- Strong guardrails and coding standards
- Advanced PR review and merge conflict resolution workflows
- Continuous communication during feature creation

Finally, maintaining a **shared library of prompts** for common tasks can greatly improve consistency. Even though the same prompt and context may still produce slightly different results across runs or models, shared prompts remain one of the best ways to ensure cohesive and consistent output across a team.

Hyperagility at scale is not just a tooling problem—it is a coordination problem. Solving it requires rethinking how teams plan, review, and collaborate around AI-generated code.

### Feature Flags in Hyperagility

Building a major feature used to take weeks, sometimes even months. During that time, engineering teams would gradually get familiar with the feature as it evolved. They would observe its behavior, test happy and unhappy paths, and develop an intuitive understanding of how it fit into the system. That time dimension was critical—it created a natural feedback loop that allowed confidence to build alongside the implementation.

One of the main reasons developer confidence is lower in AI-driven development—and one of the biggest things that actually hurts velocity—is, somewhat paradoxically, **velocity itself**. Features can now be built in hours or days. Combined with past experiences of AI-generated code introducing subtle issues, the lack of elapsed time since a feature’s creation does not inspire confidence, and for good reason. Even if the code is sound and all tests pass, complex systems need time and exposure to reveal edge cases, usability problems, and unintended behaviors.

This is where **feature flags become essential**.

In a hyper-agile environment, you should not release a newly built, lightly exercised feature to your entire user base immediately. Even with thorough integration and regression testing and strong upfront planning, things can—and will—go wrong. More importantly, there is no feedback more valuable than observing real users interact with the feature.

Because features are ready so quickly, it is likely that nobody—developers included—has spent significant time actually using them before release. There will almost always be small issues, rough edges, or optimization opportunities that only become obvious through real usage.

Ideally, teams would practice restraint: dog-food features internally, give engineers, product managers, and account managers time to live with the change, and delay full release. In reality, that is often difficult. Feature flags provide the next best option: **controlled exposure**.

By releasing features behind flags to a limited audience, teams can observe behavior in the wild, gather feedback, monitor metrics, and iterate safely—without betting the entire system or user base on a brand-new change. In hyperagility, feature flags are not a nice-to-have; they are a core mechanism for restoring confidence, enabling learning, and making extreme velocity sustainable.

### Eliminating Vagueness (Intent Fidelity Reframed)

One of the biggest challenges in AI-assisted software development is not intent itself, but **vagueness**. When requirements, specifications, or instructions are unclear or underspecified, AI systems will naturally attempt to fill in the gaps. This often manifests as “creativity”: adding functionality that was not requested, making assumptions about behavior, or even building features that were never intended—or that cannot realistically be supported.

This is not a flaw in AI; it is a predictable outcome of how generative systems work. When given an incomplete problem definition, the model will complete it. The larger the ambiguity surface, the more room there is for hallucination, scope expansion, and unintended behavior.

It is important to distinguish this from creativity used deliberately. There is real value in allowing AI to explore solution spaces, suggest alternatives, or propose new approaches—but that exploration must happen in a **controlled phase**, before code generation begins. Creativity belongs in feature shaping, design exploration, and problem definition, not during implementation.

Once implementation starts, the goal shifts from exploration to **predictability**.

To achieve that, vagueness must be aggressively eliminated from the development process. This means being explicit not only about *what* needs to be built, but also:

- how it should be built,
- what constraints apply,
- what is explicitly out of scope,
- and what trade-offs are acceptable.

With human developers, vagueness is often manageable. Humans apply critical thinking, notice when something drifts beyond scope, and operate at a relatively low output scale. If a human starts going in the wrong direction, the damage is limited and visible early.

AI operates very differently. It can generate massive amounts of code at high speed, which means that even small ambiguities can quickly expand into large, deeply embedded changes. Vagueness effectively creates an **attack surface** in the development process—a space where anything can happen. If left unchecked, the model will hallucinate into that space by design.

Eliminating vagueness is therefore a core requirement for reliable AI-driven development. It is not about micromanaging the model or restricting its capabilities; it is about constraining the problem space so that the output is **deterministic, reviewable, and aligned with expectations**.

In hyperagility, clarity is not overhead—it is a safety mechanism.

### New Metrics for an AI-Driven Development Process

The industry has struggled to measure developer productivity for decades, and AI has made that problem significantly harder. Traditional metrics like velocity at least provided a rough signal of progress, and while velocity still matters to some extent, it is no longer sufficient on its own. When code generation becomes cheap and fast, **speed stops being the bottleneck**—and therefore stops being the most meaningful signal.

In a hyper-agile, AI-assisted environment, metrics need to shift from *how fast code is produced* to *how reliably value is delivered*.

Teams should still optimize for performance, but performance now needs to be evaluated through a different lens. One of the most important new dimensions to measure is **how effectively AI generates features**. This includes questions such as:

- How many iterations are required before a feature reaches an acceptable state?
- How often does a feature need to be partially or fully regenerated?
- How many bugs, regressions, or code smells are introduced per PR?
- How frequently do AI-generated changes trigger follow-up fixes?

These metrics act as a proxy for **confidence and stability**. A system where features are generated quickly but require constant rework is not actually efficient—it is simply fast at producing noise.

Prompts and specifications themselves also become **first-class artifacts** that need to be measured and improved. Just as teams refactor code, they should regularly evaluate:

- which prompts consistently produce high-quality output,
- which ones lead to excessive iteration or scope drift,
- and how changes in prompts, models, or guardrails affect downstream outcomes.

Over time, this allows teams to optimize not just the code, but the **inputs to the code generation process**.

In this model, success is no longer defined by how quickly code is written, but by how smoothly it moves from specification to production with minimal friction, rework, and risk. The most valuable teams will not be those that generate the most code, but those that achieve the highest **signal-to-noise ratio** in AI-assisted development.

In short, hyperagility demands metrics that reward **predictability, confidence, and learning**, not just raw speed.

### Requirements Gathering in an AI-Native World

Lately, it feels like everyone is a coder. And while it can be incredibly frustrating to see a CEO or a sales lead vibe-code a barely functional app that suddenly becomes the new top priority, this shift can also be leveraged to enormous advantage—if handled correctly.

The reality is that software is never built in a vacuum. Software only has value when it has users, and the people closest to those users are very often **not** the ones writing the production code. Historically, requirements have been filtered through layers of translation: sales to product, product to engineering, engineering back to product, and so on. That bridge between technical and non-technical roles has traditionally been a source of frustration, misunderstandings, missed expectations, delayed releases, embarrassment for client-facing teams, and burnout for developers.

Sales teams, in particular, are famously good at selling things that do not yet exist—and then asking engineering to make them real. Most teams have lived through the same scenario countless times: rushing a proof of concept or half-baked feature just so it can be demoed to a potential customer. “It doesn’t need to be perfect, they just need to see how it works.”

AI fundamentally changes this dynamic.

Instead of resisting non-technical stakeholders building apps, teams should **encourage and enable it**. Rather than having sales or business teams present wireframes, slides, or incomplete designs—which they will do anyway—they should be trained to use AI tools to generate **working proof-of-concept applications** that demonstrate how customer needs could be fulfilled.

These applications should be treated strictly as **napkin designs**. They are not canonical implementations, reference architectures, or production-ready code. They are communication artifacts—far more expressive than wireframes, and far more concrete than written descriptions.

Of course, these inputs must still go through a proper feature shaping and specification process. But a working demo can serve as an exceptionally strong handoff between sales, product, and engineering. It anchors discussions in observable behavior rather than abstract descriptions, and it dramatically reduces ambiguity around what is being requested.

In an AI-native development process, requirements gathering is no longer just about writing better tickets or clearer documents. It is about **raising the fidelity of intent before implementation begins**. Allowing non-technical stakeholders to express requirements through executable prototypes shortens feedback loops, improves alignment, and ultimately leads to better software—built faster, with less friction.

Used correctly, AI turns requirements gathering from a translation problem into a collaboration advantage.