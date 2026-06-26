import { useEffect, useState } from 'react'
import {
  ArrowRight,
  Bell,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  FileText,
  Layers3,
  Plus,
  Search,
  Settings2,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Textarea } from '@/components/ui/textarea'
import heroImg from './assets/hero.png'
import itpsLogo from './assets/itps-horizontal-default.svg'
import sinapseLogo from './assets/sinapse-logo.webp'
import './App.css'

type SlideInfo = {
  title: string
  tone?: string
  description?: string
  items?: string[]
}

const slideBlocks: SlideInfo[] = [
  {
    title: 'Problema',
    tone: 'text-red-600',
    description:
      'Hoje, sem um design system consolidado, cada produto tende a resolver botões, formulários, cores, estados, textos e padrões de layout de um jeito diferente. Isso gera inconsistência visual, retrabalho e mais risco de acessibilidade.',
  },
  {
    title: 'O que é o projeto',
    tone: 'text-orange-600',
    description:
      'O Sinapse Design System é a fonte da verdade para identidade visual, tokens de cores, variações de componentes, padrões de interface, exemplos de uso e documentação para times técnicos e não técnicos.',
  },
  {
    title: 'O que já existe',
    tone: 'text-emerald-700',
    items: [
      'Site de documentação',
      'Catálogo de componentes',
      'Tokens de cores e classes CSS em @itps/styles',
      'Variações Sinapse de componentes de bibliotecas consolidadas',
      'Exemplos para diferentes tecnologias',
    ],
  },
]

const slideOutcomes: SlideInfo[] = [
  {
    title: 'Onde ainda não estamos',
    description:
      'Ainda não é uma plataforma completamente industrializada. O pacote ainda não está publicado para consumo externo, alguns fluxos de contribuição precisam ser ajustados e ainda precisamos alinhar versão, release, CI e governança.',
  },
  {
    title: 'Evolução',
    items: [
      'Fase 1: distribuir @itps/styles de forma confiável',
      'Fase 2: adotar em produtos reais com pilotos',
      'Fase 3: ampliar para modelos, blocos e diretrizes',
    ],
  },
]

const setupCards: SlideInfo[] = [
  {
    title: 'Copiar a base',
    description:
      'Comece pelo CSS, pelos utilitários e pelo primeiro componente. O objetivo é validar rápido antes de escalar.',
    items: ['index.css', 'lib/utils.ts', 'button.tsx'],
  },
  {
    title: 'Conectar os tokens',
    description:
      'Os tokens de cor e as variáveis CSS viram a fonte da verdade para identidade, estados e superfícies.',
    items: ['OKLCH', 'light/dark', '@itps/styles'],
  },
  {
    title: 'Adaptar por biblioteca',
    description:
      'Usamos bibliotecas de componentes como base e criamos variações Sinapse sem mudar o contrato visual.',
    items: ['shadcn/ui', 'shadcn-vue', 'Preline', 'HTML'],
  },
]

const guideCards: SlideInfo[] = [
  {
    title: 'React',
    description: 'shadcn/ui -> tokens Sinapse -> variação do botão',
  },
  {
    title: 'Next.js',
    description: 'shadcn/ui -> tokens Sinapse -> variação do botão',
  },
  {
    title: 'Vue 3',
    description: 'shadcn-vue -> tokens Sinapse -> variação do botão',
  },
  {
    title: 'Nuxt 4',
    description: 'shadcn-vue -> tokens Sinapse -> variação do botão',
  },
  {
    title: 'Astro',
    description: 'HTML + Tailwind -> tokens Sinapse -> primeiro componente',
  },
  {
    title: 'HTML + Preline',
    description: 'Preline -> tokens Sinapse -> variação do modal',
  },
]

const tokenCards: SlideInfo[] = [
  {
    title: 'Cores semânticas',
    description:
      'Nomes de uso, não de aparência: background, foreground, primary, border e ring.',
  },
  {
    title: 'Temas claros e escuros',
    description:
      'O mesmo componente respeita contexto, contraste e legibilidade em ambos os modos.',
  },
  {
    title: 'CSS público',
    description:
      'O pacote leva tokens de cor e base visual para produtos diferentes sem prender a um framework.',
  },
]

const deliverySteps = [
  'Versão estável de @itps/styles',
  'Pilotos em produtos reais',
  'Governança de contribuição',
  'Templates, blocos e diretrizes',
]

const componentGroups: SlideInfo[] = [
  {
    title: 'Ações e navegação',
    items: ['Button', 'Link', 'Tabs', 'Breadcrumb'],
  },
  {
    title: 'Formulários',
    items: ['Input', 'Select', 'Checkbox', 'Field'],
  },
  {
    title: 'Feedback',
    items: ['Alert', 'Toast', 'Progress', 'Badge'],
  },
  {
    title: 'Sobreposições e dados',
    items: ['Dialog', 'Popover', 'Table', 'Card'],
  },
]

const focusItems = [
  {
    id: 'briefing',
    title: 'Revisar briefing',
    area: 'Produto',
    checked: true,
  },
  {
    id: 'financeiro',
    title: 'Conferir orçamento',
    area: 'Financeiro',
    checked: false,
  },
  {
    id: 'clientes',
    title: 'Responder clientes',
    area: 'Suporte',
    checked: false,
  },
]

const metricBars = [
  { label: 'Seg', value: 54 },
  { label: 'Ter', value: 72 },
  { label: 'Qua', value: 48 },
  { label: 'Qui', value: 84 },
  { label: 'Sex', value: 66 },
  { label: 'Sab', value: 38 },
]

const preferenceItems = [
  {
    label: 'Alertas de prioridade',
    description: 'Atualizações importantes no painel.',
    enabled: true,
  },
  {
    label: 'Resumo diário',
    description: 'Um fechamento rápido no fim do dia.',
    enabled: true,
  },
  {
    label: 'Sincronizar equipe',
    description: 'Compartilhar progresso com membros ativos.',
    enabled: false,
  },
]

const formSteps = [
  'Dados principais',
  'Responsáveis',
  'Revisão final',
]

const teamRows = [
  ['Produto', 'Marina Costa', 'Aprovação'],
  ['Operações', 'Rafael Lima', 'Execução'],
  ['Suporte', 'Bianca Torres', 'Acompanhamento'],
]

function App() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>()
  const [activeSlide, setActiveSlide] = useState(0)
  const [slideCount, setSlideCount] = useState(0)

  useEffect(() => {
    if (!carouselApi) return

    const updateCarouselState = () => {
      setSlideCount(carouselApi.scrollSnapList().length)
      setActiveSlide(carouselApi.selectedScrollSnap())
    }

    updateCarouselState()
    carouselApi.on('select', updateCarouselState)
    carouselApi.on('reInit', updateCarouselState)

    return () => {
      carouselApi.off('select', updateCarouselState)
      carouselApi.off('reInit', updateCarouselState)
    }
  }, [carouselApi])

  return (
    <main className="min-h-svh bg-background text-foreground">
      <section className="relative min-h-svh w-full">
        <Carousel
          opts={{ align: 'center', loop: true }}
          setApi={setCarouselApi}
          tabIndex={0}
          aria-label="Apresentação do Design System Sinapse"
          className="mx-auto w-full outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          <CarouselContent className="items-stretch">
            <CarouselItem className="grid min-h-svh place-items-center px-16 py-10 md:px-20 lg:px-24">
              <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-8">
                <div className="flex w-full max-w-3xl flex-col items-center gap-2 text-center">
                  <h1 className="font-heading text-3xl font-semibold leading-tight md:text-5xl">
                    Design System Sinapse
                  </h1>
                  <p className="max-w-2xl text-sm leading-6 text-muted-foreground md:text-base">
                    Uma visão executiva para explicar o problema, o escopo atual
                    e o caminho de evolução do design system.
                  </p>
                </div>

                <div className="grid w-full gap-8 lg:grid-cols-[minmax(340px,1fr)_360px_minmax(340px,1fr)] lg:items-center xl:grid-cols-[minmax(420px,1.05fr)_400px_minmax(420px,1fr)] xl:gap-12">
                  <div className="grid gap-5">
                    {slideBlocks.map((item) => (
                      <Card key={item.title} size="sm">
                        <CardHeader>
                          <CardTitle className={item.tone}>
                            {item.title}
                          </CardTitle>
                          {item.description ? (
                            <CardDescription className="max-w-[54ch] text-sm leading-7">
                              {item.description}
                            </CardDescription>
                          ) : null}
                          {item.items ? (
                            <CardDescription className="max-w-[54ch] text-sm leading-7">
                              <ul className="grid gap-1.5">
                                {item.items.map((entry) => (
                                  <li key={entry}>- {entry}</li>
                                ))}
                              </ul>
                            </CardDescription>
                          ) : null}
                        </CardHeader>
                      </Card>
                    ))}
                  </div>

                  <div className="mx-auto grid w-full max-w-[400px] justify-items-center gap-3">
                    <Card className="w-full border-primary/40 bg-background shadow-sm">
                      <CardContent className="grid grid-cols-[1fr_auto_1fr] items-center gap-5 p-5">
                        <img
                          src={itpsLogo}
                          width="160"
                          height="80"
                          alt="Instituto Todos pela Saúde"
                          className="max-h-14 w-full object-contain"
                        />
                        <img
                          src={heroImg}
                          width="120"
                          height="126"
                          alt=""
                          className="h-28 w-auto"
                        />
                        <img
                          src={sinapseLogo}
                          width="96"
                          height="96"
                          alt="Sinapse"
                          className="max-h-16 w-auto justify-self-end object-contain"
                        />
                      </CardContent>
                    </Card>
                  </div>

                  <div className="grid gap-8">
                    <Card size="sm">
                      <CardHeader>
                        <CardTitle className="text-primary">
                          {slideOutcomes[0].title}
                        </CardTitle>
                        <CardDescription className="max-w-[54ch] text-sm leading-7">
                          {slideOutcomes[0].description}
                        </CardDescription>
                      </CardHeader>
                    </Card>

                    <Card size="sm">
                      <CardHeader>
                        <CardTitle className="text-primary">
                          {slideOutcomes[1].title}
                        </CardTitle>
                        <CardDescription className="max-w-[54ch] text-sm leading-7">
                          <ul className="grid gap-1.5">
                            {slideOutcomes[1].items?.map((entry) => (
                              <li key={entry}>- {entry}</li>
                            ))}
                          </ul>
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </div>
                </div>
              </div>
            </CarouselItem>

            <CarouselItem className="min-h-svh">
              <div className="grid min-h-svh place-items-center px-16 py-12 md:px-20 lg:px-24">
                <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                  <div className="grid gap-6">
                    <Badge variant="outline" className="w-fit">
                      <ClipboardList aria-hidden="true" />
                      Começar
                    </Badge>
                    <div className="grid gap-4">
                      <h2 className="font-heading text-4xl font-semibold leading-tight md:text-6xl">
                        Adoção por cópia controlada.
                      </h2>
                      <p className="max-w-xl text-base leading-7 text-muted-foreground">
                        A documentação começa com um fluxo prático: copie a
                        base, conecte os tokens de cor e valide uma variação de
                        componente na tecnologia do produto.
                      </p>
                    </div>
                    <div className="rounded-lg border bg-muted/40 p-5 font-mono text-sm leading-7">
                      <div className="text-muted-foreground">src/index.css</div>
                      <div>@import "tailwindcss";</div>
                      <div>@import "@itps/styles";</div>
                      <div className="text-muted-foreground">
                        /* primeiro componente Sinapse */
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    {setupCards.map((item) => (
                      <Card key={item.title}>
                        <CardHeader>
                          <CardTitle>{item.title}</CardTitle>
                          <CardDescription className="leading-6">
                            {item.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-wrap gap-2">
                            {item.items?.map((entry) => (
                              <Badge key={entry} variant="secondary">
                                {entry}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </CarouselItem>

            <CarouselItem className="min-h-svh">
              <div className="grid min-h-svh place-items-center px-16 py-12 md:px-20 lg:px-24">
                <div className="mx-auto grid w-full max-w-6xl gap-8">
                  <div className="grid max-w-3xl gap-3">
                    <Badge variant="outline" className="w-fit">
                      <Layers3 aria-hidden="true" />
                      Guias
                    </Badge>
                    <h2 className="font-heading text-4xl font-semibold leading-tight md:text-6xl">
                      Bibliotecas conhecidas com identidade Sinapse.
                    </h2>
                    <p className="text-base leading-7 text-muted-foreground">
                      A proposta não é recriar todos os componentes do zero:
                      usamos bibliotecas consolidadas como base e aplicamos
                      tokens, estados e variações visuais do Sinapse.
                    </p>
                  </div>

                  <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
                    {guideCards.map((item, index) => (
                      <div key={item.title} className="flex gap-4">
                        <Badge
                          variant="secondary"
                          className="mt-0.5 size-9 shrink-0 rounded-full p-0"
                        >
                          {index + 1}
                        </Badge>
                        <div className="grid gap-1">
                          <h3 className="font-heading text-lg font-semibold">
                            {item.title}
                          </h3>
                          <p className="max-w-sm text-sm leading-6 text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CarouselItem>

            <CarouselItem className="min-h-svh">
              <div className="grid min-h-svh place-items-center px-16 py-12 md:px-20 lg:px-24">
                <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                  <div className="grid gap-6">
                    <Badge variant="outline" className="w-fit">
                      <Sparkles aria-hidden="true" />
                      Estilos
                    </Badge>
                    <div className="grid gap-4">
                      <h2 className="font-heading text-4xl font-semibold leading-tight md:text-6xl">
                        Tokens primeiro, componentes depois.
                      </h2>
                      <p className="max-w-xl text-base leading-7 text-muted-foreground">
                        O contrato visual nasce em CSS público: cores
                        semânticas, estados, superfícies e temas que podem ser
                        usados por produtos diferentes.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {['OKLCH', 'claro/escuro', '@itps/styles', 'Tailwind v4'].map(
                        (item) => (
                          <Badge key={item} variant="secondary">
                            {item}
                          </Badge>
                        )
                      )}
                    </div>
                  </div>

                  <div className="grid gap-4">
                    {tokenCards.map((item) => (
                      <Card key={item.title}>
                        <CardHeader>
                          <CardTitle>{item.title}</CardTitle>
                          <CardDescription className="leading-6">
                            {item.description}
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </CarouselItem>

            <CarouselItem className="min-h-svh">
              <div className="grid min-h-svh place-items-center px-16 py-12 md:px-20 lg:px-24">
                <div className="mx-auto grid w-full max-w-6xl gap-8">
                  <div className="grid gap-3 text-center">
                    <Badge variant="outline" className="mx-auto">
                      <ShieldCheck aria-hidden="true" />
                      Componentes e governança
                    </Badge>
                    <h2 className="font-heading text-4xl font-semibold leading-tight md:text-6xl">
                      Uma biblioteca pronta para crescer.
                    </h2>
                    <p className="mx-auto max-w-3xl text-base leading-7 text-muted-foreground">
                      Componentes, fundamentos e etapas de evolução ficam
                      organizados para adoção gradual, revisão e contribuição
                      entre times.
                    </p>
                  </div>

                  <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
                    <div className="grid gap-4 md:grid-cols-2">
                      {componentGroups.map((item) => (
                        <Card key={item.title}>
                          <CardHeader>
                            <CardTitle>{item.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="grid gap-2 text-sm text-muted-foreground">
                              {item.items?.map((entry) => (
                                <li
                                  key={entry}
                                  className="flex items-center gap-2"
                                >
                                  <ArrowRight
                                    className="size-3.5 text-primary"
                                    aria-hidden="true"
                                  />
                                  <span>{entry}</span>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    <Card>
                      <CardHeader>
                        <CardTitle>Próximas entregas</CardTitle>
                        <CardDescription>
                          O caminho de evolução deixa claro o que precisa sair
                          do piloto e virar operação.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="grid gap-3">
                          {deliverySteps.map((step) => (
                            <li key={step} className="flex items-center gap-3">
                              <CheckCircle2
                                className="size-4 text-primary"
                                aria-hidden="true"
                              />
                              <span className="text-sm">{step}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="left-4 top-1/2 bottom-auto z-10 my-0 size-9 -translate-y-1/2 md:left-8 lg:left-10" />
          <CarouselNext className="right-4 top-1/2 bottom-auto z-10 my-0 size-9 -translate-y-1/2 md:right-8 lg:right-10" />
          {slideCount > 0 ? (
            <nav
              aria-label="Selecionar slide"
              className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2"
            >
              {Array.from({ length: slideCount }).map((_, index) => {
                const isActive = activeSlide === index

                return (
                  <button
                    key={index}
                    type="button"
                    aria-current={isActive ? 'true' : undefined}
                    aria-label={`Ir para o slide ${index + 1}`}
                    className={`h-2.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                      isActive
                        ? 'w-7 bg-primary'
                        : 'w-2.5 bg-muted-foreground/35 hover:bg-muted-foreground/60'
                    }`}
                    onClick={() => carouselApi?.scrollTo(index)}
                  />
                )
              })}
            </nav>
          ) : null}
        </Carousel>
      </section>

      <section className="border-t bg-muted/30 px-5 py-12 md:px-8 lg:px-10">
        <div className="mx-auto grid w-full max-w-6xl gap-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl space-y-3">
              <Badge variant="outline">
                <Sparkles aria-hidden="true" />
                Central de operação
              </Badge>
              <h2 className="font-heading text-2xl font-semibold leading-tight md:text-3xl">
                Blocos prontos para acompanhar o trabalho.
              </h2>
              <p className="max-w-xl text-sm leading-6 text-muted-foreground">
                Prioridades, metas, alertas e indicadores em uma composição
                densa, responsiva e alinhada ao visual do shadcn/ui.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button type="button" variant="outline">
                <Settings2 data-icon="inline-start" />
                Ajustes
              </Button>
              <Button type="button">
                <Plus data-icon="inline-start" />
                Novo fluxo
              </Button>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="grid gap-4">
              <Card>
                <CardHeader>
                  <CardTitle>Ação rápida</CardTitle>
                  <CardDescription>
                    Entrada, busca e tarefas em um único bloco.
                  </CardDescription>
                  <CardAction>
                    <Badge variant="default">Ativo</Badge>
                  </CardAction>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2" data-slot="button-group">
                    <Button type="button" size="sm">
                      <Plus data-icon="inline-start" />
                      Nova nota
                    </Button>
                    <Button type="button" size="sm" variant="secondary">
                      <CalendarDays data-icon="inline-start" />
                      Evento
                    </Button>
                    <Button type="button" size="sm" variant="outline">
                      <FileText data-icon="inline-start" />
                      Arquivo
                    </Button>
                  </div>

                  <div className="relative">
                    <Search
                      className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
                      aria-hidden="true"
                    />
                    <Input
                      type="search"
                      placeholder="Buscar no espaço de trabalho"
                      aria-label="Buscar no espaço de trabalho"
                      className="h-10 pl-9"
                    />
                  </div>

                  <div className="grid gap-2">
                    {focusItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-3 rounded-lg border bg-background px-3 py-2"
                      >
                        <Checkbox
                          id={`focus-${item.id}`}
                          defaultChecked={item.checked}
                        />
                        <label
                          htmlFor={`focus-${item.id}`}
                          className="grid min-w-0 flex-1 cursor-pointer gap-0.5"
                        >
                          <span className="truncate text-sm font-medium">
                            {item.title}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {item.area}
                          </span>
                        </label>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="grid gap-4 sm:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CalendarDays className="size-4" aria-hidden="true" />
                      Preparação da semana
                    </CardTitle>
                    <CardDescription>
                      Etapas principais antes da próxima revisão.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {[
                      'Agenda alinhada',
                      'Prioridades revisadas',
                      'Próxima ação definida',
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-sm"
                      >
                        <CheckCircle2
                          className="size-4 text-primary"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </div>
                    ))}
                    <Button type="button" variant="outline" className="w-full">
                      Abrir checklist
                      <ArrowRight data-icon="inline-end" />
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Bell className="size-4" aria-hidden="true" />
                      Alertas
                    </CardTitle>
                    <CardDescription>
                      Preferências principais do espaço de trabalho.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-3">
                    {preferenceItems.map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center justify-between gap-3"
                      >
                        <div className="min-w-0">
                          <div className="truncate text-sm font-medium">
                            {item.label}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {item.description}
                          </div>
                        </div>
                        <Switch
                          defaultChecked={item.enabled}
                          aria-label={item.label}
                        />
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="grid gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="size-4" aria-hidden="true" />
                    Indicadores
                  </CardTitle>
                  <CardDescription>
                    Movimento recente dos fluxos ativos.
                  </CardDescription>
                  <CardAction>
                    <Badge variant="secondary">+12%</Badge>
                  </CardAction>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="grid grid-cols-3 gap-3">
                    <div className="rounded-lg border bg-background p-3">
                      <div className="text-2xl font-semibold">24</div>
                      <div className="text-xs text-muted-foreground">
                        Tarefas abertas
                      </div>
                    </div>
                    <div className="rounded-lg border bg-background p-3">
                      <div className="text-2xl font-semibold">8</div>
                      <div className="text-xs text-muted-foreground">
                        Reuniões
                      </div>
                    </div>
                    <div className="rounded-lg border bg-background p-3">
                      <div className="text-2xl font-semibold">16</div>
                      <div className="text-xs text-muted-foreground">
                        Entregas
                      </div>
                    </div>
                  </div>

                  <div className="flex h-36 items-end gap-2 rounded-lg border bg-background p-3">
                    {metricBars.map((bar) => (
                      <div
                        key={bar.label}
                        className="flex h-full min-w-0 flex-1 flex-col justify-end gap-2"
                      >
                        <div
                          className="min-h-4 rounded-t-md bg-primary/70"
                          style={{ height: `${bar.value}%` }}
                        />
                        <span className="text-center text-xs text-muted-foreground">
                          {bar.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="size-4" aria-hidden="true" />
                    Planejamento
                  </CardTitle>
                  <CardDescription>
                    Próximas atividades compartilhadas.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Table>
                    <TableBody>
                      {[
                        ['Hoje', 'Revisão do roteiro comercial'],
                        ['Amanhã', 'Validação de componentes base'],
                        ['Sexta', 'Fechamento do ciclo semanal'],
                      ].map(([date, title]) => (
                        <TableRow key={title}>
                          <TableCell className="w-16">
                            <Badge
                              variant="secondary"
                              className="h-8 min-w-14 rounded-md px-2"
                            >
                              {date}
                            </Badge>
                          </TableCell>
                          <TableCell className="min-w-0">
                            <div className="truncate font-medium">{title}</div>
                            <div className="text-xs text-muted-foreground">
                              Espaço de trabalho principal
                            </div>
                          </TableCell>
                          <TableCell className="w-8 text-right">
                            <Button type="button" size="icon-sm" variant="ghost">
                              <ArrowRight aria-hidden="true" />
                              <span className="sr-only">Abrir atividade</span>
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t px-5 py-12 md:px-8 lg:px-10">
        <div className="mx-auto grid w-full max-w-6xl gap-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl space-y-3">
              <Badge variant="outline">
                <ClipboardList aria-hidden="true" />
                Entrada completa
              </Badge>
              <h2 className="font-heading text-2xl font-semibold leading-tight md:text-3xl">
                Formulário para abrir um novo fluxo.
              </h2>
              <p className="max-w-xl text-sm leading-6 text-muted-foreground">
                Campos, seletores, abas e diálogo de revisão em uma composição
                pronta para evoluir para envio real.
              </p>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button type="button" variant="outline">
                  <ShieldCheck data-icon="inline-start" />
                  Ver política
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Política de abertura</DialogTitle>
                  <DialogDescription>
                    Novos fluxos precisam de objetivo, responsável e critério
                    de conclusão antes de entrar no painel principal.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-3 text-sm">
                  {formSteps.map((step) => (
                    <div key={step} className="flex items-center gap-2">
                      <CheckCircle2
                        className="size-4 text-primary"
                        aria-hidden="true"
                      />
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button type="button">Entendi</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Layers3 className="size-4" aria-hidden="true" />
                  Nova solicitação
                </CardTitle>
                <CardDescription>
                  Preencha os dados essenciais e revise antes de registrar.
                </CardDescription>
                <CardAction>
                  <Badge variant="secondary">Rascunho</Badge>
                </CardAction>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="solicitacao">
                  <TabsList className="grid w-full grid-cols-3 sm:w-fit">
                    <TabsTrigger value="solicitacao">Solicitação</TabsTrigger>
                    <TabsTrigger value="equipe">Equipe</TabsTrigger>
                    <TabsTrigger value="permissoes">Permissões</TabsTrigger>
                  </TabsList>

                  <TabsContent value="solicitacao">
                    <form className="grid gap-5">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="grid gap-2">
                          <Label htmlFor="flow-name">Nome do fluxo</Label>
                          <Input
                            id="flow-name"
                            placeholder="Ex: Revisão comercial"
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="flow-owner">Responsável</Label>
                          <Input
                            id="flow-owner"
                            placeholder="Nome do responsável"
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="flow-type">Tipo</Label>
                          <Select defaultValue="processo">
                            <SelectTrigger id="flow-type">
                              <SelectValue placeholder="Selecione o tipo" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="processo">Processo</SelectItem>
                              <SelectItem value="campanha">Campanha</SelectItem>
                              <SelectItem value="suporte">Suporte</SelectItem>
                              <SelectItem value="produto">Produto</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="flow-priority">Prioridade</Label>
                          <Select defaultValue="media">
                            <SelectTrigger id="flow-priority">
                              <SelectValue placeholder="Selecione" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="baixa">Baixa</SelectItem>
                              <SelectItem value="media">Média</SelectItem>
                              <SelectItem value="alta">Alta</SelectItem>
                              <SelectItem value="critica">Crítica</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid gap-2">
                        <Label htmlFor="flow-context">Contexto</Label>
                        <Textarea
                          id="flow-context"
                          placeholder="Descreva o objetivo, o impacto esperado e as dependências principais."
                        />
                      </div>

                      <div className="grid gap-3 rounded-lg border p-3">
                        <div className="flex items-start gap-3">
                          <Checkbox id="notify-team" defaultChecked />
                          <div className="grid gap-1">
                            <Label htmlFor="notify-team">
                              Notificar equipe envolvida
                            </Label>
                            <p className="text-xs text-muted-foreground">
                              Envia um resumo para os responsáveis definidos.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Checkbox id="create-review" />
                          <div className="grid gap-1">
                            <Label htmlFor="create-review">
                              Criar etapa de revisão
                            </Label>
                            <p className="text-xs text-muted-foreground">
                              Adiciona uma validação antes da conclusão.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
                        <Button type="button" variant="outline">
                          Salvar rascunho
                        </Button>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button type="button">
                              Revisar envio
                              <ArrowRight data-icon="inline-end" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Revisar solicitação</DialogTitle>
                              <DialogDescription>
                                Confira os principais campos antes de registrar
                                o fluxo no espaço de trabalho.
                              </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-3 text-sm">
                              <div className="flex justify-between gap-4">
                                <span className="text-muted-foreground">
                                  Tipo
                                </span>
                                <span className="font-medium">Processo</span>
                              </div>
                              <div className="flex justify-between gap-4">
                                <span className="text-muted-foreground">
                                  Prioridade
                                </span>
                                <span className="font-medium">Média</span>
                              </div>
                              <div className="flex justify-between gap-4">
                                <span className="text-muted-foreground">
                                  Status
                                </span>
                                <Badge variant="secondary">Rascunho</Badge>
                              </div>
                            </div>
                            <DialogFooter>
                              <DialogClose asChild>
                                <Button type="button" variant="outline">
                                  Voltar
                                </Button>
                              </DialogClose>
                              <DialogClose asChild>
                                <Button type="button">Registrar fluxo</Button>
                              </DialogClose>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </form>
                  </TabsContent>

                  <TabsContent value="equipe">
                    <Table>
                      <TableBody>
                        {teamRows.map(([area, owner, role]) => (
                          <TableRow key={area}>
                            <TableCell>
                              <div className="font-medium">{area}</div>
                              <div className="text-xs text-muted-foreground">
                                {owner}
                              </div>
                            </TableCell>
                            <TableCell className="text-right">
                              <Badge variant="outline">{role}</Badge>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TabsContent>

                  <TabsContent value="permissoes">
                    <div className="grid gap-4">
                      {[
                        ['Acesso interno', 'Disponível para membros do time'],
                        ['Comentários', 'Permite discussões no fluxo'],
                        ['Histórico', 'Mantém registro das alterações'],
                      ].map(([label, description], index) => (
                        <div
                          key={label}
                          className="flex items-center justify-between gap-4 rounded-lg border p-3"
                        >
                          <div className="grid gap-1">
                            <div className="text-sm font-medium">{label}</div>
                            <div className="text-xs text-muted-foreground">
                              {description}
                            </div>
                          </div>
                          <Switch
                            defaultChecked={index !== 1}
                            aria-label={label}
                          />
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Resumo operacional</CardTitle>
                <CardDescription>
                  Componentes interativos combinados no fluxo.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="grid gap-3">
                  {formSteps.map((step, index) => (
                    <div
                      key={step}
                      className="flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">{index + 1}</Badge>
                        <span className="text-sm font-medium">{step}</span>
                      </div>
                      <CheckCircle2
                        className="size-4 text-primary"
                        aria-hidden="true"
                      />
                    </div>
                  ))}
                </div>
                <div className="rounded-lg border p-3">
                  <div className="mb-2 text-sm font-medium">
                    Revisão automática
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm text-muted-foreground">
                      Validar campos obrigatórios antes do registro.
                    </p>
                    <Switch defaultChecked aria-label="Revisão automática" />
                  </div>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button type="button" variant="outline" className="w-full">
                      Abrir diálogo de exemplo
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Diálogo interativo</DialogTitle>
                      <DialogDescription>
                        Este modal usa o primitivo Dialog e pode receber
                        confirmações, avisos ou revisões do formulário.
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                      <DialogClose asChild>
                        <Button type="button">Fechar</Button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
