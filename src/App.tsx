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
  Send,
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
import './App.css'

const highlights = [
  {
    title: 'Ideias conectadas',
    description: 'Agrupe notas, tarefas e decisoes em uma unica trilha.',
  },
  {
    title: 'Ritmo de execucao',
    description: 'Transforme contexto solto em proximas acoes claras.',
  },
  {
    title: 'Base reutilizavel',
    description: 'Mantenha aprendizados importantes sempre acessiveis.',
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
    title: 'Conferir orcamento',
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
    description: 'Atualizacoes importantes no painel.',
    enabled: true,
  },
  {
    label: 'Resumo diario',
    description: 'Um fechamento rapido no fim do dia.',
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
  'Responsaveis',
  'Revisao final',
]

const teamRows = [
  ['Produto', 'Marina Costa', 'Aprovacao'],
  ['Operacoes', 'Rafael Lima', 'Execucao'],
  ['Suporte', 'Bianca Torres', 'Acompanhamento'],
]

function App() {
  return (
    <main className="min-h-svh bg-background text-foreground">
      <section className="mx-auto grid min-h-svh w-full max-w-6xl gap-10 px-5 py-6 md:grid-cols-[1.04fr_0.96fr] md:items-center md:px-8 lg:px-10">
        <div className="flex flex-col gap-8">
          <div className="max-w-2xl space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-sm text-muted-foreground">
              <Sparkles className="size-4" aria-hidden="true" />
              Workspace pronto para evoluir
            </div>
            <h1 className="font-heading text-4xl font-semibold leading-tight tracking-normal text-balance md:text-5xl">
              Organize ideias e transforme contexto em acao.
            </h1>
            <p className="max-w-xl text-base leading-7 text-muted-foreground">
              Uma pagina inicial limpa para capturar prioridades, consultar
              sinais importantes e comecar a montar sua interface com shadcn/ui.
            </p>
          </div>

          <div className="flex max-w-xl flex-col gap-3 sm:flex-row">
            <Input
              type="email"
              placeholder="seu-email@empresa.com"
              aria-label="Email"
              className="h-10"
            />
            <Button type="button" size="lg" className="h-10 sm:w-40">
              Entrar
              <ArrowRight data-icon="inline-end" className="size-4" />
            </Button>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {highlights.map((item) => (
              <Card key={item.title} size="sm">
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          <Card className="relative min-h-[360px] justify-between">
            <CardHeader>
              <CardDescription>Painel principal</CardDescription>
              <CardTitle className="text-2xl">Prioridades da semana</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="flex justify-center py-4">
                <img
                  src={heroImg}
                  width="170"
                  height="179"
                  alt=""
                  className="h-44 w-auto"
                />
              </div>
              <div className="grid gap-3">
                {['Mapear fluxo inicial', 'Criar componentes base', 'Validar experiencia'].map(
                  (task) => (
                    <div
                      key={task}
                      className="flex items-center gap-3 rounded-lg border bg-background px-3 py-2 text-sm"
                    >
                      <CheckCircle2
                        className="size-4 text-primary"
                        aria-hidden="true"
                      />
                      <span>{task}</span>
                    </div>
                  )
                )}
              </div>
            </CardContent>
          </Card>

          <Card size="sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Send className="size-4" aria-hidden="true" />
                Proxima acao
              </CardTitle>
              <CardDescription>
                Adicionar mais componentes conforme a interface crescer.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      <section className="border-t bg-muted/30 px-5 py-12 md:px-8 lg:px-10">
        <div className="mx-auto grid w-full max-w-6xl gap-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl space-y-3">
              <Badge variant="outline">
                <Sparkles aria-hidden="true" />
                Central de operacao
              </Badge>
              <h2 className="font-heading text-2xl font-semibold leading-tight md:text-3xl">
                Blocos prontos para acompanhar o trabalho.
              </h2>
              <p className="max-w-xl text-sm leading-6 text-muted-foreground">
                Prioridades, metas, alertas e indicadores em uma composicao
                densa, responsiva e alinhada ao visual shadcn/ui.
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
                  <CardTitle>Acao rapida</CardTitle>
                  <CardDescription>
                    Entrada, busca e tarefas em um unico bloco.
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
                      placeholder="Buscar no workspace"
                      aria-label="Buscar no workspace"
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
                      Preparacao da semana
                    </CardTitle>
                    <CardDescription>
                      Etapas principais antes da proxima revisao.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {[
                      'Agenda alinhada',
                      'Prioridades revisadas',
                      'Proxima acao definida',
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
                      Preferencias principais do workspace.
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
                        Reunioes
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
                    Proximas atividades compartilhadas.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Table>
                    <TableBody>
                      {[
                        ['Hoje', 'Revisao do roteiro comercial'],
                        ['Amanha', 'Validacao de componentes base'],
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
                              Workspace principal
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
                Intake completo
              </Badge>
              <h2 className="font-heading text-2xl font-semibold leading-tight md:text-3xl">
                Formulario para abrir um novo fluxo.
              </h2>
              <p className="max-w-xl text-sm leading-6 text-muted-foreground">
                Campos, seletores, abas e dialog de revisao em uma composicao
                pronta para evoluir para envio real.
              </p>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button type="button" variant="outline">
                  <ShieldCheck data-icon="inline-start" />
                  Ver politica
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Politica de abertura</DialogTitle>
                  <DialogDescription>
                    Novos fluxos precisam de objetivo, responsavel e criterio
                    de conclusao antes de entrar no painel principal.
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
                  Nova solicitacao
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
                    <TabsTrigger value="solicitacao">Solicitacao</TabsTrigger>
                    <TabsTrigger value="equipe">Equipe</TabsTrigger>
                    <TabsTrigger value="permissoes">Permissoes</TabsTrigger>
                  </TabsList>

                  <TabsContent value="solicitacao">
                    <form className="grid gap-5">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="grid gap-2">
                          <Label htmlFor="flow-name">Nome do fluxo</Label>
                          <Input
                            id="flow-name"
                            placeholder="Ex: Revisao comercial"
                          />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="flow-owner">Responsavel</Label>
                          <Input
                            id="flow-owner"
                            placeholder="Nome do responsavel"
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
                              <SelectItem value="media">Media</SelectItem>
                              <SelectItem value="alta">Alta</SelectItem>
                              <SelectItem value="critica">Critica</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid gap-2">
                        <Label htmlFor="flow-context">Contexto</Label>
                        <Textarea
                          id="flow-context"
                          placeholder="Descreva objetivo, impacto esperado e dependencias principais."
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
                              Envia um resumo para os responsaveis definidos.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Checkbox id="create-review" />
                          <div className="grid gap-1">
                            <Label htmlFor="create-review">
                              Criar etapa de revisao
                            </Label>
                            <p className="text-xs text-muted-foreground">
                              Adiciona uma validacao antes da conclusao.
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
                              <DialogTitle>Revisar solicitacao</DialogTitle>
                              <DialogDescription>
                                Confira os principais campos antes de registrar
                                o fluxo no workspace.
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
                                <span className="font-medium">Media</span>
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
                        ['Acesso interno', 'Disponivel para membros do time'],
                        ['Comentarios', 'Permite discussoes no fluxo'],
                        ['Historico', 'Mantem registro das alteracoes'],
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
                    Revisao automatica
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm text-muted-foreground">
                      Validar campos obrigatorios antes do registro.
                    </p>
                    <Switch defaultChecked aria-label="Revisao automatica" />
                  </div>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button type="button" variant="outline" className="w-full">
                      Abrir dialog de exemplo
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Dialog interativo</DialogTitle>
                      <DialogDescription>
                        Este modal usa o primitive Dialog e pode receber
                        confirmacoes, avisos ou revisoes do formulario.
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
