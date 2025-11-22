# Claude Code Configuration - ABIT Institutional Site

**Inicializado:** 2025-11-22
**Projeto:** Next.js 15 + React 19 + TypeScript
**Arquitetura:** Feature-Sliced Design (FSD)

---

## Estrutura de Diretórios

```
.claude/
├── commands/          # Symlinks para agentes globais (~/.claude/agents/)
│   ├── fsd-orchestrate.md    # Orquestração de features FSD
│   ├── fsd-design.md         # Análise de designs e screenshots
│   ├── fsd-dev.md            # Desenvolvimento de componentes
│   ├── fsd-test.md           # Testes automatizados
│   ├── fsd-review.md         # Code review e qualidade
│   ├── project-initializer.md # Inicialização de projetos
│   └── skill-architect.md    # Arquitetura de skills
│
├── skills/            # Skills customizadas do projeto
│   └── commit/        # Skill para commits convencionais
│
├── checkpoints/       # Rastreamento de progresso de tarefas
├── task-requests/     # Especificações de features
├── screenshots/       # Referências de design
└── docs/             # Documentação do projeto
    ├── site.pdf      # Especificação do site
    └── screenshots/  # Capturas de tela
```

---

## Agentes Disponíveis

### Agentes FSD (Feature-Sliced Design)

#### /fsd-orchestrate
**Orquestrador Principal de Features**
- Coordena criação de features completas
- Gerencia decomposição em tarefas
- Integra design, desenvolvimento e testes
- Garante conformidade com FSD

#### /fsd-design
**Especialista em Análise de Design**
- Analisa screenshots e especificações
- Identifica componentes e estrutura
- Gera task-requests detalhadas
- Extrai requisitos visuais e funcionais

#### /fsd-dev
**Desenvolvedor FSD**
- Implementa componentes seguindo FSD
- Cria layers: app, pages, widgets, features, entities, shared
- Configura TypeScript e tailwind
- Garante tipagem forte e reutilização

#### /fsd-test
**Especialista em Testes**
- Cria testes unitários com Jest/Vitest
- Testes de integração com Testing Library
- Testes E2E com Playwright
- Cobertura de código e qualidade

#### /fsd-review
**Revisor de Código FSD**
- Valida conformidade arquitetural
- Verifica importações e dependências
- Analisa qualidade e performance
- Sugere melhorias e refatorações

### Agentes Utilitários

#### /project-initializer
**Inicializador de Projetos**
- Configura estrutura .claude/
- Cria symlinks para agentes globais
- Organiza diretórios padrão
- Gera documentação inicial

#### /skill-architect
**Arquiteto de Skills**
- Cria novas skills customizadas
- Gera estrutura SKILL.md
- Configura workflows complexos
- Documenta skills

---

## Skills Disponíveis

### commit
**Commits Convencionais com FSD**
- Analisa mudanças git (status, diff)
- Identifica tipo (feat, fix, docs, refactor, style, perf, test, build, chore)
- Determina scope baseado em FSD (header, hero, services, about, mission, newsletter, footer, shared, entities, features, widgets, config, deps, fsd)
- Cria commits seguindo Conventional Commits
- Adiciona co-autoria do Claude
- Valida código antes de commitar

**Uso:** O skill é invocado automaticamente quando necessário

---

## Quick Start

### 1. Análise de Design
```bash
# Adicionar screenshot à pasta
cp design.png .claude/screenshots/

# Analisar com agente de design
/fsd-design
```

### 2. Criar Feature Completa
```bash
# Orquestrar feature do início ao fim
/fsd-orchestrate

# O agente irá:
# 1. Analisar design/requisitos
# 2. Criar task-request
# 3. Desenvolver componentes
# 4. Criar testes
# 5. Fazer review
```

### 3. Desenvolvimento Manual
```bash
# Implementar componente específico
/fsd-dev

# Criar testes
/fsd-test

# Fazer review
/fsd-review
```

### 4. Commit das Mudanças
```bash
# O skill commit será invocado automaticamente
# quando você solicitar um commit
```

---

## Fluxo de Trabalho Recomendado

### Para Nova Feature

1. **Design** → Adicione screenshots em `.claude/screenshots/`
2. **Análise** → Use `/fsd-design` para gerar task-request
3. **Orquestração** → Use `/fsd-orchestrate` para implementação completa
4. **Review** → Automático via orquestrador ou manual com `/fsd-review`
5. **Commit** → Solicitae commit (skill invocado automaticamente)

### Para Bug Fix

1. **Desenvolvimento** → Use `/fsd-dev` para correção
2. **Testes** → Use `/fsd-test` para validação
3. **Review** → Use `/fsd-review` para verificação
4. **Commit** → Solicite commit (skill invocado automaticamente)

### Para Refatoração

1. **Review** → Use `/fsd-review` para identificar problemas
2. **Desenvolvimento** → Use `/fsd-dev` para refatorar
3. **Testes** → Use `/fsd-test` para garantir funcionamento
4. **Commit** → Solicite commit (skill invocado automaticamente)

---

## Arquitetura FSD

O projeto segue Feature-Sliced Design com a seguinte estrutura de layers:

```
src/
├── app/              # Configuração da aplicação (providers, routers, globals)
├── pages/            # Páginas/rotas (compositions de widgets)
├── widgets/          # Grandes blocos de UI (seções completas)
├── features/         # Funcionalidades com lógica de negócio
├── entities/         # Entidades de negócio (models, api)
├── shared/           # Código compartilhado (ui, lib, api, config)
```

**Regras de Importação:**
- Layers inferiores não podem importar layers superiores
- Mesmo layer não pode importar entre slices
- Shared pode ser importado por todos

---

## Documentação

### Global (Compartilhada)
- **Agentes:** `~/.claude/agents/`
- **Templates:** `~/.claude/templates/`

### Local (Específica do Projeto)
- **Task Requests:** `.claude/task-requests/`
- **Checkpoints:** `.claude/checkpoints/`
- **Screenshots:** `.claude/screenshots/`
- **Docs:** `.claude/docs/`

---

## Configuração Git

Adicione ao `.gitignore`:

```gitignore
# Claude Code - Contexto Local (não versionado)
.claude/checkpoints/
.claude/screenshots/
.claude/task-requests/
.claude.backup/

# Claude Code - Estrutura (versionada)
# .claude/commands/     # Symlinks (versionados)
# .claude/README.md     # Documentação (versionada)
# .claude/docs/         # Docs do projeto (versionada)
# .claude/skills/       # Skills customizadas (versionadas)
```

---

## Verificação da Instalação

Execute para verificar que tudo está configurado:

```bash
# Verificar symlinks
ls -la .claude/commands/

# Verificar agentes globais
ls -la ~/.claude/agents/

# Verificar estrutura
tree .claude -L 2
```

---

## Suporte

Para problemas ou dúvidas sobre:
- **FSD:** Consulte https://feature-sliced.design
- **Claude Code:** Consulte a documentação oficial
- **Agentes:** Verifique os arquivos em `~/.claude/agents/`

---

**Última atualização:** 2025-11-22
**Versão:** 1.0.0
