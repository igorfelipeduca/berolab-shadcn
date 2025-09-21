# BeroLab Shadcn

Nesse repositório será criado um tema de Shadcn reutilizável com os componentes da BeroLab.

## Motivação

A motivação por traz desse projeto é documentar os componentes e criar um design system mais reutilizável e modular, tendo como o principal propósito desse projeto _remover complexidade desnecessária_ do design system atual.

## Como criar um componente

Para criar componentes, a estrutura base de um arquivo deve ser:

```tsx
type ComponentProps = {
  // props do componente
};

export default function Component({ ...props }: ComponentProps) {
  return <span>component</span>;
}
```

O exemplo acima descreve exatamente tudo o que precisamos para criar um componente.

> O uso de `props` ao invés de passar as props individuais é para simplificar o código e remover DRY. Uma vez que abstraímos todas as propriedades do tipo `ComponentProps` com um spread operator `props`, podemos usar `props.prop` ao invés de adicionar `prop` à definição do componente. Essa é uma decisão que traz como resultado uma diminuição significativa no tamanho dos arquivos dos componentes.

### Como criar um componente com variantes

Para criar um componente com variantes, vamos fazer uso da biblioteca `class-variance-authority`, que é padrão do shadcn. O snippet abaixo foi retirado do componente `src/components/ui/button.tsx`:

```tsx
const buttonVariants = cva(
  "rounded-xl transition-colors duration-150 ease-linear flex items-center justify-center text-md cursor-pointer uppercase font-bold active:opacity-70 tracking-wider",
  {
    variants: {
      variant: {
        default:
          "bg-transparent border-2 border-zinc-200 text-white hover:bg-zinc-200/10",
        destructive:
          "border-2 border-destructive text-destructive hover:bg-destructive/10",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        dracula: "border-2 border-dracula text-dracula hover:bg-dracula/10",
      },
      size: {
        default: "h-9 p-6 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
```

### Como transformar Shadcn em BeroCN

Para conseguir instalar um componente do Shadcn nessa codebase e transformá-lo em um componente do nosso próprio design system, devem ser seguidos os seguintes passos: <br />

1. Encontrar o componente no shadcn e rodar o script de install usando bun. Exemplo:

```bash
bunx shadcn@latest add button
```

2. Após o componente ser instalado, ele poderá ser encontrado em `src/components/ui`;
3. Com o componente instalado, você poderá perceber que logo no topo do arquivo ele terá uma configuração de cva, assim como o snippet do botão acima. Após identiifcar quais são as atuais variantes do componente, você deve então comparar o componente cru do shadcn com a forma como usamos o componente na Berolab. No exemplo do botão, eu abri a homepage e observei quais tipos de botão temos por lá;
4. Após navegar pela BeroLab e identificar diferentes tipos de botões, eu defini as seguintes variantes: default, destructive, dracula, muted e secondary;
5. Com todas as variantes definidas, eu escrevi as classes de cada uma. No caso do botão, eu decidi deixar a maioria das configurações de `size` do próprio shadcn, por que achei que elas já faziam sentido para esse componente;
6. Depois de finalizar o componente, eu o listei na homepage usando o componente `ComponentShowcase`. A homepage desse projeto vai servir como uma demonstração dos componentes que formos construindo com o tempo. Peguei inspiração para esse estilo de página do próprio [shadcn](https://ui.shadcn.com/). Vai ficar bem bonito quando formos incrementando a página com mais componentes.

---

### Dicas extras

1. Use o inspecionar elemento do browser para ler as classes de tailwind que estão sendo usadas na BeroLab e entender como os componentes são estilizados lá antes de transcrever para esse novo design sistem. É muito importante não copiar elas literalmente. A intenção do novo projeto é melhorar os designs já existentes, não copiar tudo de lá e colar aqui.
2. Use o shadcn como guia para organização de código dos componentes. Todo código escrito lá na biblioteca é de autíssimo nível, e é muito importante almejarmos uma qualidade tão alta quanto.
