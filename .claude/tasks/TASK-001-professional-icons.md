# TASK-001: Substituir Emojis por Ícones Profissionais

## Objetivo
Transformar a identidade visual do site substituindo emojis por ícones profissionais SVG, alinhando com o design do PDF de referência.

## Status: 🔨 IN PROGRESS (Sessão 1/2)

---

## ANÁLISE COMPARATIVA

### Screenshot Atual
- Emojis coloridos e infantis (📐🏗️💡🚰🧯📦)
- Valores com emojis (💡⭐🎯)
- Visual inconsistente e pouco profissional

### PDF Referência
- Ícones line art monocromáticos em branco
- Estilo minimalista e clean
- Círculos com bordas finas douradas

---

## PLANO DE IMPLEMENTAÇÃO

### FASE 1: Setup de Ícones (ESTA SESSÃO)
- [x] Análise do screenshot vs PDF
- [x] Identificação dos ícones necessários
- [ ] Instalação do lucide-react
- [ ] Migração dos dados de serviços
- [ ] Migração dos dados de valores
- [ ] Atualização dos componentes

### FASE 2: Refinamento Visual (PRÓXIMA SESSÃO)
- [ ] Ajustar bordas dos círculos (4px → 2px)
- [ ] Remover gradients internos
- [ ] Otimizar tamanhos e espaçamentos
- [ ] Testes de responsividade

---

## ÍCONES MAPEADOS

### Serviços (6 ícones)
| Emoji Atual | Lucide Icon | Descrição |
|-------------|-------------|-----------|
| 📐 | `Ruler` ou `Triangle` | Projetos Arquitetônicos |
| 🏗️ | `Building2` + `HardHat` | Projetos Estruturais |
| 💡 | `Lightbulb` ou `Zap` | Projeto Elétrico |
| 🚰 | `Droplets` ou `Pipette` | Projetos Hidrossanitários |
| 🧯 | `Flame` ou `Shield` | Combate a Incêndio |
| 📦 | `Box` ou `Boxes` | Renderizações 3D |

### Valores (3 ícones)
| Emoji Atual | Lucide Icon | Descrição |
|-------------|-------------|-----------|
| 💡 | `Lightbulb` | Inovação |
| ⭐ | `Star` | Excelência |
| 🎯 | `Target` | Profissionalismo |

---

## ARQUIVOS A MODIFICAR

### 1. Dados
- `/src/entities/service/model/services-data.ts`
- `/src/entities/value/model/values-data.ts`

### 2. Tipos
- `/src/entities/service/model/types.ts`
- `/src/entities/value/model/types.ts`

### 3. Componentes
- `/src/entities/service/ui/service-card.tsx`
- `/src/entities/value/ui/value-badge.tsx`

---

## AÇÕES MANUAIS RECOMENDADAS

### 1. Instalar Lucide React
```bash
npm install lucide-react
```

### 2. Validar TypeScript (após implementação)
```bash
npx tsc --noEmit
```

### 3. Validar Arquitetura FSD (após implementação)
```bash
npx steiger src
```

---

## MELHORIAS PENDENTES (Próximas Sessões)

### P1 - ALTO
1. **Refinar círculos dos valores**
   - Reduzir border-4 → border-2
   - Remover gradient `bg-gradient-to-br from-[#FFD700]/20 to-transparent`
   - Usar `bg-black` sólido

2. **Ajustar tamanhos de ícones**
   - Serviços: Padronizar em 48px (md:56px)
   - Valores: Padronizar em 40px (md:48px)

### P2 - NORMAL
3. **Otimizar espaçamentos**
   - Gap entre serviços: 6 → 8
   - Padding dos cards: Revisar

4. **Animações sutis**
   - Hover nos ícones de serviços
   - Transições suaves

---

## CRITÉRIOS DE ACEITAÇÃO

### Fase 1 (Esta Sessão)
- [ ] Lucide-react instalado
- [ ] Todos os emojis substituídos por componentes Lucide
- [ ] Ícones renderizando corretamente
- [ ] TypeScript sem erros
- [ ] Cores ajustadas (branco/dourado)

### Fase 2 (Próxima Sessão)
- [ ] Bordas refinadas (2px)
- [ ] Sem gradients internos
- [ ] Espaçamentos otimizados
- [ ] Visual alinhado com PDF de referência

---

## NOTAS TÉCNICAS

### Estratégia de Tipos
```typescript
// ANTES
interface Service {
  icon: string; // emoji
}

// DEPOIS
interface Service {
  icon: LucideIcon; // componente React
}
```

### Renderização
```tsx
// ANTES
<div className="text-5xl">{service.icon}</div>

// DEPOIS
<service.icon className="w-12 h-12 text-white" strokeWidth={1.5} />
```

---

## ESTIMATIVA
- Tempo total: 2 sessões
- Tokens estimados: 60k-80k
- Complexidade: Média

## PRIORIDADE
**P0 - CRÍTICO** (Maior impacto visual)
