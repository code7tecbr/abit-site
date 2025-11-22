# Limpeza de Arquivos Legados

## Arquivos Desnecessários

Os seguintes arquivos/diretórios são LEGADOS do template inicial e podem ser **removidos com segurança**:

### 1. src/pages/ (REMOVER)
```bash
rm -rf /home/wisley7l/codigos/code7/abit-site/src/pages/
```

**Motivo:** O projeto usa App Router (`/app`), não Pages Router.
O diretório `src/pages/home` contém um componente antigo não utilizado.

### 2. src/app/ (REMOVER)
```bash
rm -rf /home/wisley7l/codigos/code7/abit-site/src/app/
```

**Motivo:** O diretório correto é `/app` (raiz do projeto).
O arquivo `src/app/style/globals.css` é duplicado (existe `/app/globals.css`).

---

## Comando de Limpeza Completo

Execute este comando para remover todos os arquivos legados:

```bash
cd /home/wisley7l/codigos/code7/abit-site
rm -rf src/pages src/app
```

**Após a limpeza, a estrutura ficará:**
```
abit-site/
├── app/                    # Next.js App Router (CORRETO)
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── src/                    # FSD Architecture (CORRETO)
│   ├── entities/
│   ├── features/
│   ├── shared/
│   └── widgets/
├── node_modules/
├── public/
├── .steiger/
├── package.json
└── tsconfig.json
```

---

## Verificação Pós-Limpeza

Após remover os arquivos legados, execute:

```bash
# 1. Verificar TypeScript
npx tsc --noEmit

# 2. Verificar Build
npm run build

# 3. Iniciar dev server
npm run dev
```

**Expectativa:** Tudo deve funcionar perfeitamente sem os arquivos legados.

---

## Nota Importante

NÃO remova:
- ❌ `/app` (raiz) - Este é o App Router do Next.js
- ❌ `/src/entities`, `/src/features`, `/src/shared`, `/src/widgets` - Arquitetura FSD

REMOVA apenas:
- ✅ `/src/pages` - Legacy Pages Router
- ✅ `/src/app` - Duplicata desnecessária
