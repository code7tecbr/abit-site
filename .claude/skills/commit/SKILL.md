---
name: commit
description: Use this skill when the user wants to create a git commit, mentions 'commit', 'commitar', 'fazer commit', 'create commit', or after completing a feature/fix. Analyzes git changes (git status, git diff), identifies commit type (feat, fix, docs, refactor, style, perf, test, build, chore), determines scope based on FSD architecture (header, hero, services, about, mission, newsletter, footer, shared, entities, features, widgets, config, deps, fsd), and creates commits following Conventional Commits standard with proper formatting and Claude co-authorship. Automatically validates code before committing and suggests atomic commits when multiple unrelated changes detected.
---

# Commit Skill

**Create well-structured git commits following Conventional Commits standard with FSD-aware scoping and automatic validation.**

## Quick Summary

This skill automates the creation of semantic git commits for the ABIT project. It analyzes your changes using `git status` and `git diff`, identifies the appropriate commit type and scope based on Feature-Sliced Design architecture, validates code quality, and generates properly formatted commit messages with Claude co-authorship following Conventional Commits standard.

Perfect for maintaining a clean, meaningful git history that clearly communicates what changed and why.

## When to Use

**✅ Use this skill when:**
- User says: "Vou fazer commit dessas mudanças"
- User says: "Can you commit this?"
- User says: "Preciso commitar o código"
- User says: "Create a commit for these changes"
- User says: "Commit the hero section"
- After implementing a feature and user asks to finalize
- When code changes are ready and validated
- User mentions conventional commits or semantic commits

**❌ Don't use when:**
- No changes have been made (`git status` shows clean)
- User is asking about commit concepts (informational only)
- Changes contain errors or failed validation
- User wants to amend previous commits (different workflow)

## Core Concepts

### Conventional Commits Format

```
<type>(<scope>): <short description>

<optional body>

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
```

### Commit Types

| Type | Purpose | Example |
|------|---------|---------|
| `feat` | New feature | Adding newsletter subscription |
| `fix` | Bug fix | Correcting email validation |
| `docs` | Documentation | Updating README |
| `style` | Code formatting | Prettier/ESLint fixes |
| `refactor` | Code restructuring | Extracting reusable component |
| `perf` | Performance improvement | Optimizing image loading |
| `test` | Adding/updating tests | Unit tests for service card |
| `build` | Build system changes | Updating dependencies |
| `chore` | Maintenance tasks | Config updates, tooling |

### FSD-Based Scopes

**Widget-level scopes** (most common):
- `header` - Site header/navigation
- `hero` - Hero section with CTA
- `services` - Services showcase section
- `about` - About company section
- `mission` - Mission/values section
- `newsletter` - Newsletter subscription
- `footer` - Site footer

**Layer-level scopes**:
- `shared` - Shared UI components, utilities
- `entities` - Business entities (service, project)
- `features` - User features
- `widgets` - Widget layer changes

**Infrastructure scopes**:
- `config` - Configuration files
- `deps` - Dependencies
- `fsd` - FSD architecture changes

## Practical Examples

### Example 1: New Feature - Hero Section

**Scenario:** Just implemented responsive hero section with CTA button

**Analysis:**
```bash
# Files changed:
# src/widgets/hero/ui/hero.tsx
# src/widgets/hero/index.ts
```

**Commit:**
```bash
git add src/widgets/hero/

git commit -m "$(cat <<'EOF'
feat(hero): add responsive hero section with CTA

- Implement fullscreen hero with background image
- Add mobile-first responsive design (Tailwind breakpoints)
- Include call-to-action button linking to contact
- Optimize for Core Web Vitals (LCP)
- Follow FSD public API pattern

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
EOF
)"
```

**Verification:**
```bash
git log -1 --stat
```

### Example 2: Bug Fix - Footer Email

**Scenario:** Fixed incorrect email address in footer contact info

**Analysis:**
```bash
# Files changed:
# src/widgets/footer/ui/footer.tsx
```

**Commit:**
```bash
git add src/widgets/footer/

git commit -m "$(cat <<'EOF'
fix(footer): correct contact email address

Update contact email from old@domain.com to contato@abit.eng.br

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
EOF
)"
```

### Example 3: Refactoring - Extract Component

**Scenario:** Extracted ServiceCard from widgets to entities layer for reusability

**Analysis:**
```bash
# Files changed:
# src/entities/service/ui/service-card.tsx (new)
# src/entities/service/index.ts (new)
# src/widgets/services-section/ui/services-section.tsx (modified)
```

**Commit:**
```bash
git add src/entities/service/ src/widgets/services-section/

git commit -m "$(cat <<'EOF'
refactor(entities): extract service card to reusable component

- Move ServiceCard from widgets to entities layer
- Add proper TypeScript interfaces (Service type)
- Follow FSD public API pattern (index.ts barrel export)
- Update services-section widget to import from entities
- Maintain mobile-first responsive design

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
EOF
)"
```

### Example 4: Chore - Update Dependencies

**Scenario:** Updated Next.js and React to latest versions

**Analysis:**
```bash
# Files changed:
# package.json
# package-lock.json
```

**Commit:**
```bash
git add package.json package-lock.json

git commit -m "$(cat <<'EOF'
build(deps): update Next.js to 15.0.3 and React to 19.0.0

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
EOF
)"
```

### Example 5: Documentation

**Scenario:** Added FSD architecture documentation

**Analysis:**
```bash
# Files changed:
# .claude/docs/FSD_GUIDE.md (new)
```

**Commit:**
```bash
git add .claude/docs/FSD_GUIDE.md

git commit -m "$(cat <<'EOF'
docs(fsd): add Feature-Sliced Design architecture guide

- Document FSD layers and their responsibilities
- Include practical examples from ABIT project
- Add Steiger linter configuration guide

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
EOF
)"
```

## Best Practices

### ✅ Do

**Atomic Commits:**
```bash
# Good: One logical change per commit
git add src/widgets/hero/
git commit -m "feat(hero): add responsive hero section"

git add src/widgets/footer/
git commit -m "feat(footer): add contact information section"
```

**Validate Before Committing:**
```bash
# Run TypeScript check
npx tsc --noEmit

# Run linter
npm run lint

# Then commit
git add src/widgets/services-section/
git commit -m "feat(services): add services showcase grid"
```

**Clear, Descriptive Messages:**
```bash
# Good: Explains what and why
git commit -m "$(cat <<'EOF'
fix(newsletter): prevent duplicate email subscriptions

Add email uniqueness validation in submission handler
to prevent users from subscribing multiple times.

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
EOF
)"
```

**Use Body for Context:**
```bash
# Good: Body explains implementation details
git commit -m "$(cat <<'EOF'
perf(hero): optimize background image loading

- Use next/image with priority flag
- Add blur placeholder for LCP improvement
- Lazy load non-critical images
- Results in 40% faster LCP score

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
EOF
)"
```

### ❌ Don't

**Vague Messages:**
```bash
# Bad: No context
git commit -m "updates"
git commit -m "fix stuff"
git commit -m "WIP"
```

**Missing Scope:**
```bash
# Bad: No scope when changes are specific
git commit -m "feat: new stuff"
git commit -m "fix: bug"

# Good: Include relevant scope
git commit -m "feat(hero): add call-to-action button"
git commit -m "fix(footer): correct social media links"
```

**Multiple Unrelated Changes:**
```bash
# Bad: Mixing unrelated changes
git add src/widgets/hero/ src/widgets/footer/ src/widgets/services-section/
git commit -m "feat: multiple changes"

# Good: Separate commits
git add src/widgets/hero/
git commit -m "feat(hero): add responsive hero section"

git add src/widgets/footer/
git commit -m "feat(footer): add contact section"

git add src/widgets/services-section/
git commit -m "feat(services): add services grid"
```

**Committing Broken Code:**
```bash
# Bad: Committing without validation
git commit -m "feat(hero): new section" # TypeScript errors present!

# Good: Validate first
npx tsc --noEmit
npm run lint
# Fix all errors, then commit
git commit -m "feat(hero): add responsive hero section"
```

**Wrong Type Selection:**
```bash
# Bad: Using feat for bug fix
git commit -m "feat(footer): fix email typo"

# Good: Use correct type
git commit -m "fix(footer): correct contact email address"
```

## Common Mistakes

### Mistake 1: Committing Everything Together

**Problem:**
```bash
git add .
git commit -m "feat: updates"
```

**Why It's Wrong:** Loses granular history, hard to review/revert, violates atomic commit principle

**Solution:**
```bash
# Review what changed
git status
git diff

# Commit related changes separately
git add src/widgets/hero/
git commit -m "feat(hero): add hero section"

git add src/widgets/services-section/
git commit -m "feat(services): add services grid"
```

### Mistake 2: No Validation Before Commit

**Problem:**
```bash
git add src/widgets/newsletter-section/
git commit -m "feat(newsletter): add subscription form"
# Later: TypeScript errors in CI!
```

**Why It's Wrong:** Breaks the build, wastes CI time, forces fix commits

**Solution:**
```bash
# Always validate first
npx tsc --noEmit
npm run lint

# Fix any errors
# Then commit
git add src/widgets/newsletter-section/
git commit -m "feat(newsletter): add email subscription form"
```

### Mistake 3: Generic Commit Messages

**Problem:**
```bash
git commit -m "update components"
git commit -m "fix bug"
```

**Why It's Wrong:** No context for reviewers or future developers, impossible to search history

**Solution:**
```bash
git commit -m "$(cat <<'EOF'
refactor(shared): extract button component variants

- Move button styles to shared/ui layer
- Add variant props (primary, secondary, outline)
- Implement mobile-first responsive sizing
- Use Tailwind CSS 4 modern pseudo-class stacking

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
EOF
)"
```

### Mistake 4: Wrong Scope Selection

**Problem:**
```bash
# Changed src/widgets/hero/ui/hero.tsx
git commit -m "feat(shared): add new section"
```

**Why It's Wrong:** Scope doesn't match file location, misleads readers

**Solution:**
```bash
# Match scope to actual change location
git commit -m "feat(hero): add responsive hero section with CTA"
```

### Mistake 5: Forgetting Co-Authorship

**Problem:**
```bash
git commit -m "feat(hero): add hero section"
# Missing Claude co-authorship
```

**Why It's Wrong:** Doesn't track Claude's contribution, inconsistent with project standard

**Solution:**
```bash
git commit -m "$(cat <<'EOF'
feat(hero): add responsive hero section

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
EOF
)"
```

## Troubleshooting

### Problem: Too Many Unrelated Changes

**Symptom:**
```bash
git status
# Shows:
# modified: src/widgets/hero/ui/hero.tsx
# modified: src/widgets/footer/ui/footer.tsx
# modified: src/widgets/services-section/ui/services.tsx
# modified: src/shared/ui/button/button.tsx
```

**Diagnosis:** Multiple features/fixes worked on simultaneously

**Solution:** Create separate atomic commits
```bash
# Commit hero changes
git add src/widgets/hero/
git commit -m "feat(hero): add responsive hero section"

# Commit footer changes
git add src/widgets/footer/
git commit -m "fix(footer): correct contact email"

# Commit services changes
git add src/widgets/services-section/
git commit -m "feat(services): add services grid layout"

# Commit shared component changes
git add src/shared/ui/button/
git commit -m "refactor(shared): extract button component variants"
```

### Problem: Don't Know Which Commit Type to Use

**Symptom:** Confusion between `feat`, `fix`, `refactor`, `chore`

**Diagnosis Guide:**
- Does it add NEW functionality users will see? → `feat`
- Does it fix incorrect behavior? → `fix`
- Does it improve code structure without changing behavior? → `refactor`
- Is it formatting, comments, or whitespace only? → `style`
- Is it tests, dependencies, or tooling? → `test`, `build`, or `chore`

**Example Decision Tree:**
```
Added newsletter subscription form → feat(newsletter)
Fixed newsletter email validation bug → fix(newsletter)
Extracted newsletter input to shared component → refactor(shared)
Reformatted newsletter code with Prettier → style(newsletter)
Added tests for newsletter validation → test(newsletter)
Updated newsletter dependencies → build(deps)
```

### Problem: TypeScript Errors After Commit

**Symptom:**
```bash
# After committing
npm run build
# ERROR: Type 'string' is not assignable to type 'number'
```

**Prevention:**
```bash
# ALWAYS run before committing
npx tsc --noEmit

# If errors found, fix them first
# Then commit
```

**Recovery:**
```bash
# Option 1: Amend the last commit (if not pushed)
# Fix the errors
git add .
git commit --amend --no-edit

# Option 2: Create a fix commit (if already pushed)
git add .
git commit -m "fix(hero): resolve TypeScript type errors"
```

### Problem: Steiger (FSD Linter) Violations

**Symptom:**
```bash
npm run lint
# Error: Cross-layer import violation
# src/shared/ui/button imported from src/entities/service
```

**Solution:**
```bash
# Fix the FSD violation first
# Remove incorrect import
# Follow proper import hierarchy: shared → entities → features → widgets

# Then commit the fix
git add .
git commit -m "$(cat <<'EOF'
fix(shared): resolve FSD cross-layer import violation

Remove incorrect import from entities layer.
Import shared components only from appropriate layers.

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
EOF
)"
```

### Problem: Commit Message Too Long

**Symptom:** Commit description exceeds 72 characters (common Git convention)

**Solution:** Use body for details
```bash
# Bad: Long subject line
git commit -m "feat(hero): add responsive hero section with background image, CTA button, mobile-first design, and Core Web Vitals optimization"

# Good: Short subject + detailed body
git commit -m "$(cat <<'EOF'
feat(hero): add responsive hero section with CTA

- Implement fullscreen hero with background image
- Add mobile-first responsive design (Tailwind breakpoints)
- Include call-to-action button
- Optimize for Core Web Vitals (LCP < 2.5s)

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
EOF
)"
```

## Integration

### Related Skills/Agents

**Complements:**
- **fsd-dev** - After implementing features, use commit skill to finalize
- **fsd-review** - Review code before committing ensures quality
- **fsd-test** - Run tests before committing to catch issues

**Workflow Integration:**
```bash
# 1. Develop feature (fsd-dev agent)
# 2. Review changes (fsd-review agent)
# 3. Run tests (fsd-test agent or manual)
# 4. Validate code
npx tsc --noEmit && npm run lint

# 5. Commit changes (this skill)
git add src/widgets/hero/
git commit -m "feat(hero): add responsive hero section"

# 6. Push to remote
git push origin feature/hero-section
```

### Pre-Commit Checklist

Before using this skill, ensure:
- [ ] TypeScript compilation passes (`npx tsc --noEmit`)
- [ ] ESLint passes (`npm run lint`)
- [ ] Steiger FSD linting passes (if configured)
- [ ] Changes are logically grouped (atomic commits)
- [ ] No unrelated files staged
- [ ] No sensitive data (API keys, credentials)

## Quick Reference

### Common Commands

```bash
# Check what changed
git status
git diff

# Check recent commit style
git log -1

# Validate before committing
npx tsc --noEmit
npm run lint

# Stage specific files
git add <file-or-directory>

# Commit with heredoc (recommended)
git commit -m "$(cat <<'EOF'
<type>(<scope>): <description>

<body>

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>
EOF
)"

# Verify commit
git log -1 --stat
```

### Quick Type Selection

| Change Description | Type |
|-------------------|------|
| New hero section | `feat(hero)` |
| Fix footer email | `fix(footer)` |
| Extract shared button | `refactor(shared)` |
| Prettier formatting | `style` |
| Add unit tests | `test` |
| Update Next.js version | `build(deps)` |
| Update README | `docs` |
| Config file changes | `chore(config)` |

### Quick Scope Selection

| File Path | Scope |
|-----------|-------|
| `src/widgets/hero/` | `hero` |
| `src/widgets/footer/` | `footer` |
| `src/widgets/services-section/` | `services` |
| `src/widgets/about-section/` | `about` |
| `src/widgets/mission-section/` | `mission` |
| `src/widgets/newsletter-section/` | `newsletter` |
| `src/entities/service/` | `entities` |
| `src/shared/ui/` | `shared` |
| `src/features/` | `features` |
| `.claude/`, `tsconfig.json` | `config` |
| `package.json` | `deps` |

## References

- [Conventional Commits Specification](https://www.conventionalcommits.org/)
- [Feature-Sliced Design](https://feature-sliced.design/)
- [Git Commit Best Practices](https://git-scm.com/book/en/v2/Distributed-Git-Contributing-to-a-Project)
