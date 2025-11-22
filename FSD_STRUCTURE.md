# Arquitetura FSD - ABIT Site

## Estrutura do Projeto

```
src/
├── shared/              # Camada compartilhada (base)
│   ├── config/         # Configurações e constantes
│   │   ├── site.ts    # Dados do site
│   │   └── design-tokens.ts  # Design system tokens
│   ├── lib/           # Utilitários
│   │   └── cn.ts      # Função className helper
│   └── ui/            # Componentes UI reutilizáveis
│       ├── button/
│       ├── input/
│       ├── card/
│       ├── container/
│       ├── section/
│       └── section-title/
│
├── entities/           # Entidades de negócio
│   ├── service/       # Entidade: Serviço
│   │   ├── model/     # Tipos e dados
│   │   └── ui/        # ServiceCard
│   ├── value/         # Entidade: Valor da empresa
│   │   ├── model/
│   │   └── ui/        # ValueBadge
│   ├── mission/       # Entidade: Pilar de missão
│   │   ├── model/
│   │   └── ui/        # MissionCard
│   └── process-badge/ # Entidade: Badge de processo
│       ├── model/
│       └── ui/        # Badge
│
├── features/          # Funcionalidades interativas
│   ├── newsletter-form/    # Feature: Formulário newsletter
│   │   └── ui/
│   └── mobile-menu/        # Feature: Menu mobile
│       └── ui/
│
└── widgets/           # Widgets (composições)
    ├── header/        # Cabeçalho com navegação
    ├── hero/          # Seção hero principal
    ├── services-section/    # Seção de serviços
    ├── about-section/       # Seção sobre nós
    ├── mission-section/     # Seção missão
    ├── newsletter-section/  # Seção newsletter
    └── footer/              # Rodapé

app/                   # Next.js App Router
├── layout.tsx        # Layout raiz
├── page.tsx          # Página home (compõe widgets)
└── globals.css       # Estilos globais
```

## Regras de Importação FSD

### Hierarquia de Camadas (bottom-up):
```
shared → entities → features → widgets → app
```

### Regras:
1. **shared** - não importa nada (base)
2. **entities** - importa apenas shared
3. **features** - importa entities + shared
4. **widgets** - importa features + entities + shared
5. **app** - importa widgets + features + entities + shared

### Public API Pattern
Cada slice/segment expõe apenas um `index.ts` público:
```typescript
// ✅ CORRETO
import { ServiceCard } from "@/entities/service";

// ❌ ERRADO
import { ServiceCard } from "@/entities/service/ui/service-card";
```

## Componentes por Camada

### Shared (7 componentes UI)
- `Button` - Botão primário/secundário
- `Input` - Campo de entrada
- `Card` - Card com hover effect
- `Container` - Container responsivo (max-width 1280px)
- `Section` - Seção com padding vertical
- `SectionTitle` - Título de seção amarelo

### Entities (4 entidades)
1. **service** - Serviços da empresa (6 cards)
2. **value** - Valores da empresa (3 badges circulares)
3. **mission** - Pilares de missão (3 cards)
4. **process-badge** - Badges de processo (5 badges)

### Features (2 features)
1. **newsletter-form** - Formulário com validação
2. **mobile-menu** - Menu hambúrguer animado

### Widgets (7 widgets)
1. **header** - Menu fixo com logo + nav desktop/mobile
2. **hero** - Hero section fullscreen com CTA
3. **services-section** - Grid 3x2 de serviços + badges
4. **about-section** - Intro + 3 valores + filosofia
5. **mission-section** - Grid 3 pilares de missão
6. **newsletter-section** - Newsletter com form
7. **footer** - 4 colunas + copyright

## Responsividade

### Breakpoints Tailwind:
- **mobile**: base (< 768px)
- **tablet**: md (768px+)
- **desktop**: lg (1024px+)
- **wide**: xl (1280px+)

### Mobile First:
Todos os componentes seguem estratégia mobile-first:
```tsx
// Base: mobile
className="text-sm px-4 py-2"

// Tablet+
className="md:text-base md:px-6 md:py-3"

// Desktop+
className="lg:text-lg"
```

## Design System

### Cores:
```css
--color-primary: #FFD700 (Amarelo/Dourado)
--color-background: #000000 (Preto)
--color-background-light: #1A1A1A (Cinza escuro)
--color-text: #FFFFFF (Branco)
--color-text-muted: #CCCCCC (Cinza claro)
```

### Espaçamentos:
- **Section padding**: py-12 (mobile), py-20 (desktop)
- **Container max-width**: 1280px
- **Container padding**: px-4 (mobile), px-8 (desktop)

## TypeScript Strict

Todo o código segue:
- ✅ `strict: true`
- ✅ Zero `any` types
- ✅ Interfaces explícitas para props
- ✅ Type-safe em data files

## Comandos de Validação

```bash
# Validação TypeScript
npx tsc --noEmit

# Validação FSD (steiger)
npm run lint

# Desenvolvimento
npm run dev

# Build de produção
npm run build
```
