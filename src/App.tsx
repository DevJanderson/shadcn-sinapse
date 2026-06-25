import {
  ArrowRight,
  CheckCircle2,
  Send,
  Sparkles,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
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
    </main>
  )
}

export default App
