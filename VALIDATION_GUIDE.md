# Guia de Validação - Site ABIT

## Checklist de Validação

### 1. Validação TypeScript
Execute para verificar erros de tipo:
```bash
npx tsc --noEmit
```

**Expectativa:** Zero erros. O projeto usa `strict: true`.

---

### 2. Validação FSD (Steiger)
Execute para verificar violações de arquitetura:
```bash
npm run lint
```

Este comando executa:
- ESLint (lint de código)
- Steiger (lint de arquitetura FSD)

**Expectativa:** Zero violações de importação entre camadas.

---

### 3. Build de Produção
Execute para verificar se o build compila:
```bash
npm run build
```

**Expectativa:** Build bem-sucedido sem erros.

---

### 4. Desenvolvimento Local
Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

Acesse: http://localhost:3000

**Checklist Visual:**
- [ ] Header fixo no topo com logo ABIT
- [ ] Menu desktop (visível em telas grandes)
- [ ] Menu mobile hambúrguer (visível em telas pequenas)
- [ ] Hero section com título "NOSSO SONHO É REALIZAR O SEU!"
- [ ] Botão WhatsApp flutuante (canto inferior direito)
- [ ] Seção SERVIÇOS com 6 cards em grid
- [ ] 5 badges de processo (REGULARIZAÇÃO, EXECUÇÃO, etc.)
- [ ] Seção SOBRE NÓS com 3 valores circulares
- [ ] Seção MISSÃO com 3 cards
- [ ] Seção Newsletter com formulário funcional
- [ ] Footer com 4 colunas de informações
- [ ] Scroll suave ao clicar em links do menu

---

### 5. Teste de Responsividade

#### Mobile (< 768px):
- [ ] Menu hambúrguer aparece
- [ ] Cards de serviços em 1 coluna
- [ ] Valores em coluna única
- [ ] Pilares de missão em coluna única
- [ ] Footer em coluna única

#### Tablet (768px - 1024px):
- [ ] Cards de serviços em 2 colunas
- [ ] Valores em linha
- [ ] Pilares de missão em 2 colunas

#### Desktop (> 1024px):
- [ ] Menu desktop visível
- [ ] Cards de serviços em 3 colunas
- [ ] Pilares de missão em 3 colunas
- [ ] Footer em 4 colunas

**Como testar:**
1. Abra DevTools (F12)
2. Ative modo responsivo (Ctrl+Shift+M)
3. Teste nos breakpoints: 375px, 768px, 1024px, 1440px

---

### 6. Funcionalidades Interativas

#### Newsletter Form:
1. Digite um e-mail inválido (sem @)
2. Clique em "INSCREVER"
3. **Expectativa:** Mensagem de erro vermelha

4. Digite um e-mail válido
5. Clique em "INSCREVER"
6. **Expectativa:** Mensagem de sucesso amarela + campo limpo

#### Menu Mobile:
1. Redimensione para < 768px
2. Clique no hambúrguer
3. **Expectativa:** Menu abre da direita
4. Clique em um link
5. **Expectativa:** Menu fecha + scroll suave

#### Links de Navegação:
1. Clique em "SERVIÇOS" no header
2. **Expectativa:** Scroll suave até seção de serviços
3. Teste todos os links: INÍCIO, NÓS, SERVIÇOS, MISSÃO, CONTATO

#### Botão WhatsApp:
1. Clique no botão verde flutuante
2. **Expectativa:** Abre WhatsApp em nova aba

---

### 7. Verificação de Acessibilidade

```bash
# Instale Lighthouse (se não tiver)
npm install -g lighthouse

# Execute auditoria
lighthouse http://localhost:3000 --view
```

**Metas:**
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 90
- SEO: > 90

---

### 8. Verificação de Arquitetura FSD

#### Regras de Importação:
Execute o grep para verificar importações proibidas:

```bash
# Shared não pode importar outras camadas
grep -r "from ['\"]@/\(entities\|features\|widgets\)" src/shared/
# Expectativa: Sem resultados

# Entities não pode importar features/widgets
grep -r "from ['\"]@/\(features\|widgets\)" src/entities/
# Expectativa: Sem resultados

# Features não pode importar widgets
grep -r "from ['\"]@/widgets" src/features/
# Expectativa: Sem resultados
```

#### Public API Pattern:
Todos os imports devem usar Public API:

```bash
# Verificar violações de Public API
grep -r "from ['\"]@/.*/.*/.*['\"]" src/
# Expectativa: Sem resultados (exceto app/)
```

---

## Resolução de Problemas Comuns

### Erro: "Cannot find module '@/...'"
**Solução:** Verifique tsconfig.json tem paths configurado:
```json
"paths": {
  "@/*": ["./src/*"]
}
```

### Erro: Tailwind classes não aplicadas
**Solução:** Verifique postcss.config.mjs:
```js
plugins: ["@tailwindcss/postcss"]
```

### Erro: Steiger não encontrado
**Solução:** Reinstale dependências:
```bash
npm install
```

### Build falha com "Module not found"
**Solução:** Limpe cache e rebuilde:
```bash
rm -rf .next node_modules
npm install
npm run build
```

---

## Status Esperado

Após todas as validações:
- ✅ TypeScript: 0 erros
- ✅ FSD (Steiger): 0 violações
- ✅ Build: Sucesso
- ✅ Dev server: Funcional
- ✅ Responsividade: 100% mobile-first
- ✅ Interatividade: Formulário + menu funcionais
- ✅ Acessibilidade: Lighthouse > 90
- ✅ Arquitetura: 100% FSD-compliant

---

## Próximos Passos (Opcionais)

1. **Imagens Reais:** Substituir emojis por ícones SVG ou imagens
2. **API Backend:** Integrar formulário newsletter com serviço real
3. **Analytics:** Adicionar Google Analytics / Plausible
4. **i18n:** Suporte multi-idioma (PT/EN)
5. **Blog:** Adicionar seção de artigos (nova page em FSD)
6. **Portfólio:** Adicionar galeria de projetos realizados
7. **Testes:** Vitest + Testing Library para componentes
8. **Storybook:** Documentação visual de componentes
