import { useEffect } from "react";
import dleadsLogo from "./assets/dleads-logo.png";
import moldurarLogo from "./assets/moldurar-logo.png";
import artAmbiente from "./assets/art-ambiente.jpg";
import artAbstract from "./assets/art-abstract.jpg";
import quadroAmbiente from "./assets/quadro-ambiente.webp";
import instagramProfile from "./assets/instagram-profile.png";
import instagramGrid from "./assets/instagram-grid.png";

const navItems = [
  ["#estrategia", "Ver Estratégia"],
  ["#publico", "Entender o Público"],
  ["#investimento", "Visualizar Investimento"],
  ["#criativos", "Plano de Criativos"],
  ["#meta", "Projeção do Primeiro Mês"],
  ["#fechamento", "Próximo Passo"],
];

const heroMetrics = [
  ["R$ 1.200", "Gestão estratégica mensal"],
  ["R$ 700 a R$ 800", "Mídia sugerida no primeiro ciclo"],
  ["Distrito Federal", "Foco regional com recorte premium"],
  ["Até 25%", "Meta inicial estimada de crescimento em vendas"],
];

const objectives = [
  ["Atrair", "Atrair atenção qualificada", "Fazer a Moldurar DF entrar no radar de um público mais aderente ao universo de decoração, arquitetura e estilo de vida sofisticado."],
  ["Gerar", "Gerar leads com intenção", "Transformar atenção em mensagens, cliques e conversas com potencial comercial real, priorizando qualidade sobre volume superficial."],
  ["Fortalecer", "Fortalecer a imagem da marca", "Construir percepção de valor, curadoria e exclusividade para sustentar preços, desejo e reconhecimento regional."],
  ["Crescer", "Crescer com base estratégica", "Criar um primeiro ciclo capaz de gerar aprendizado, validar a direção e abrir espaço para escala futura com mais segurança."],
];

const personas = [
  ["Persona 01", "Homens 25+", "Perfil com afinidade com imóvel, reforma, escritório, presente sofisticado e valorização visual do ambiente."],
  ["Persona 02", "Mulheres 30+", "Público com forte relação com decoração, curadoria da casa, acabamento e decisão estética em ambientes de maior valor agregado."],
  ["Persona 03", "Arquitetura e design", "Interesses em interiores, ambientes sofisticados, imóveis, decoração autoral e lifestyle premium."],
];

const timeline = [
  ["Segunda", "Prospecção forte", "Maior intensidade para descoberta de novos públicos e geração dos primeiros sinais de intenção."],
  ["Terça", "Expansão qualificada", "Continuidade da prospecção com leitura de audiência e reforço dos melhores formatos."],
  ["Quarta", "Reforço de captação", "Último pico da janela principal para consolidar alcance e preparar a retomada."],
  ["Quinta", "Remarketing", "Reimpacto em pessoas que já visualizaram, clicaram ou demonstraram interesse."],
  ["Sexta", "Lembrança de marca", "Manutenção estratégica com foco em permanência e aquecimento da intenção."],
  ["Sábado", "Presença leve", "Entrega moderada para manter presença sem desperdiçar verba."],
  ["Domingo", "Reconexão", "Fechamento da semana com manutenção e observação para reinício da prospecção."],
];

const investmentRows = [
  ["Semana 1", "Validação inicial e calibração", "R$ 140,00"],
  ["Semana 2", "Expansão com base nos primeiros aprendizados", "R$ 175,00"],
  ["Semana 3", "Escala tática dos melhores conjuntos", "R$ 210,00"],
  ["Semana 4", "Maior intensidade sobre o que performou melhor", "R$ 245,00"],
  ["Total sugerido", "Curva mensal dentro da faixa indicada", "R$ 770,00"],
];

const dailyBudget = [
  ["Seg", 9, "prospeccao"],
  ["Ter", 9, "prospeccao"],
  ["Qua", 9, "prospeccao"],
  ["Qui", 5, "remarketing"],
  ["Sex", 5, "remarketing"],
  ["Sab", 4, "remarketing"],
  ["Dom", 4, "remarketing"],
];

const creativeCards = [
  ["Imagem estática premium", "3 peças focadas em sofisticação, ambiente e acabamento."],
  ["Carrosséis", "2 composições com ambientes, antes e depois e narrativa visual."],
  ["Vídeos curtos", "2 vídeos com textura, moldura, detalhe e transformação do espaço."],
  ["Institucional + remarketing", "1 criativo institucional, 1 a 2 criativos de remarketing e 1 peça adaptável a sazonalidade."],
];

const seasonals = [
  ["Datas afetivas", "Dia das Mães, Dia dos Namorados, Natal e Ano Novo com leitura de presente sofisticado e memória afetiva."],
  ["Momentos da casa", "Campanhas ligadas a inauguração, reforma, apartamento novo, renovação do ambiente e valorização do espaço."],
  ["Oportunidades temáticas", "Temas em alta, tendências de decoração, semanas especiais e contextos regionais que reforcem a intenção de compra."],
];

const included = [
  "planejamento da operação e lógica de investimento",
  "configuração e gestão das campanhas em Instagram e Facebook",
  "segmentação de público e ajustes orientados a performance",
  "direção de copy e orientação dos criativos",
  "acompanhamento estratégico e otimizações recorrentes",
];

function SectionHeader({ index, title, subtitle, note }) {
  return (
    <div className="section-header">
      <div>
        <span className="section-tag">{index}</span>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      <aside className="section-note">{note}</aside>
    </div>
  );
}

export default function App() {
  useEffect(() => {
    const nodes = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.14 },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="topbar-inner">
          <div className="brand-wrap">
            <img className="brand-logo dleads" src={dleadsLogo} alt="Logo D'Leads" />
            <div className="brand-copy">
              <strong>Moldurar DF x D'Leads</strong>
              <span>Proposta comercial interativa em Meta Ads</span>
            </div>
          </div>
          <nav className="anchor-nav">
            {navItems.map(([href, label]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="content">
        <section className="hero panel reveal" data-reveal id="hero">
          <div className="hero-copy">
            <span className="eyebrow">Proposta Comercial Premium | 30 dias de operação inicial</span>
            <h1>Moldurar DF com presença digital à altura do valor que entrega.</h1>
            <p className="lead">
              A D&apos;Leads propõe uma operação em Meta Ads para posicionar a Moldurar DF como marca de desejo no Distrito Federal, unindo aquisição, estética e estratégia comercial em uma experiência de proposta que já comunica valor antes do primeiro clique.
            </p>
            <p className="safe-note">
              Toda projeção deste material representa cenário estimado de performance, condicionado à execução correta, qualidade dos criativos, otimizações, resposta do público e atendimento comercial eficiente. Não se trata de garantia absoluta de resultado.
            </p>
            <div className="button-row">
              <a className="btn primary" href="#estrategia">Ver Estratégia</a>
              <a className="btn secondary" href="#publico">Entender o Público</a>
              <a className="btn secondary" href="#investimento">Visualizar Investimento</a>
              <a className="btn secondary" href="#fechamento">Aprovar Proposta</a>
            </div>
            <div className="metric-grid">
              {heroMetrics.map(([value, label]) => (
                <article className="metric-card" key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </article>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <div className="logo-column">
              <div className="logo-card">
                <img className="brand-logo moldurar" src={moldurarLogo} alt="Logo Moldurar DF" />
                <p>Marca com assinatura forte, reconhecível e pronta para uma direção digital premium.</p>
              </div>
              <div className="mini-card dark">
                <span>Captação</span>
                <p>Segunda a quarta com mais força para novos públicos.</p>
              </div>
              <div className="mini-card">
                <span>Remarketing</span>
                <p>Quinta a domingo com reconexão e manutenção inteligente.</p>
              </div>
            </div>
            <div className="frame-collage">
              <figure className="frame large">
                <img src={quadroAmbiente} alt="Quadro decorativo em ambiente sofisticado" />
              </figure>
              <figure className="frame small top">
                <img src={artAbstract} alt="Referência visual de arte colorida e vibrante" />
              </figure>
              <figure className="frame small bottom">
                <img src={artAmbiente} alt="Referência visual premium de obra em ambiente" />
              </figure>
            </div>
          </div>
        </section>

        <section className="panel reveal" data-reveal id="cenario">
          <SectionHeader
            index="02. Cenário e oportunidade"
            title="O mercado responde melhor quando o produto certo aparece para o olhar certo."
            subtitle="Molduras e quadros premium não competem apenas por clique. Competem por contexto, desejo, curadoria e percepção de valor."
            note="Bloco visual inspirado em galeria de arte com sobreposição editorial e leitura comercial."
          />
          <div className="two-col">
            <div className="image-feature">
              <img src={instagramGrid} alt="Grid do Instagram da Moldurar DF" />
            </div>
            <div className="text-card">
              <span className="card-tag">Texto exato da seção</span>
              <p>
                A Moldurar DF atua em uma categoria na qual acabamento, ambiente e sofisticação influenciam diretamente a decisão de compra. Isso pede uma estratégia que não pareça varejo genérico, mas sim uma curadoria visual capaz de elevar percepção de valor e intenção de compra.
              </p>
              <p>
                O papel da D&apos;Leads é transformar mídia em posicionamento. Cada anúncio deve funcionar como uma vitrine de marca, mostrando que o produto não é apenas decorativo, mas parte da construção de um espaço mais sofisticado, desejável e memorável.
              </p>
            </div>
          </div>
        </section>

        <section className="panel reveal" data-reveal id="objetivo">
          <SectionHeader
            index="03. Objetivo da operação"
            title="Quatro movimentos para transformar tráfego em posicionamento e venda."
            subtitle="O primeiro ciclo foi desenhado para validar mercado, gerar aprendizado e abrir espaço para escala com mais segurança."
            note="Grid de cards com leitura rápida e valor comercial claro."
          />
          <div className="grid four">
            {objectives.map(([tag, title, text]) => (
              <article className="content-card" key={title}>
                <span className="card-tag">{tag}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="panel reveal" data-reveal id="estrategia">
          <SectionHeader
            index="04. Estratégia geral"
            title="Prospecção forte, remarketing inteligente e direção estética coerente."
            subtitle="Instagram e Facebook operam como ecossistema de descoberta, maturação e retomada do interesse."
            note="Diagrama de fluxo comercial entre aquisição e reconexão."
          />
          <div className="strategy-flow">
            <article className="flow-card">
              <span className="card-tag">Prospecção</span>
              <h3>Apresentar a marca para novos públicos</h3>
              <p>Segunda, terça e quarta recebem maior intensidade para descoberta, aprendizagem rápida e abertura de audiência qualificada.</p>
            </article>
            <div className="flow-arrow">→</div>
            <article className="flow-card">
              <span className="card-tag">Remarketing</span>
              <h3>Reativar quem já demonstrou interesse</h3>
              <p>Quinta a domingo trabalham lembrança, reconexão e recuperação de oportunidades com mais proximidade do fechamento.</p>
            </article>
          </div>
        </section>

        <section className="panel reveal" data-reveal id="publico">
          <SectionHeader
            index="05. Público-alvo"
            title="Segmentação regional com recorte de afinidade e poder de compra."
            subtitle="A campanha começa focada no Distrito Federal, com recorte inicial em perfis mais aderentes ao universo premium da Moldurar DF."
            note="Perfil real da marca, personas e leitura visual direta para reunião."
          />
          <div className="two-col audience-layout">
            <div className="profile-card">
              <img src={instagramProfile} alt="Perfil do Instagram da Moldurar DF" />
            </div>
            <div className="grid three">
              {personas.map(([tag, title, text]) => (
                <article className="content-card" key={title}>
                  <span className="card-tag">{tag}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="panel reveal" data-reveal id="posicionamento">
          <SectionHeader
            index="06. Posicionamento da comunicação"
            title="Não vender preço. Vender atmosfera, curadoria e exclusividade."
            subtitle="A Moldurar DF deve aparecer como marca que valoriza o ambiente, o acabamento e a sensação de escolha sofisticada."
            note="Manifesto de valor em faixa premium para site e PDF."
          />
          <div className="manifesto">
            <p>
              A comunicação precisa fazer cada peça parecer uma extensão da experiência do produto: premium, bem composta, desejável e memorável. Em vez de competir pelo menor preço, a campanha será guiada por estética, personalização, exclusividade e valorização do ambiente.
            </p>
          </div>
        </section>

        <section className="panel reveal" data-reveal id="logica">
          <SectionHeader
            index="07. Lógica semanal da campanha"
            title="O ritmo da semana acompanha o ritmo da decisão."
            subtitle="Segunda a quarta concentram a prospecção. Quinta a domingo sustentam remarketing e manutenção."
            note="Timeline horizontal com destaque visual nos três dias prioritários."
          />
          <div className="timeline">
            {timeline.map(([day, title, text], index) => (
              <article className={`timeline-card ${index < 3 ? "highlight" : ""}`} key={day}>
                <span className="card-tag">{day}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="panel reveal" data-reveal id="escala">
          <SectionHeader
            index="08. Escala de investimento semanal"
            title="Uma curva crescente para validar, otimizar e ganhar tração com controle."
            subtitle="A distribuição semanal evita concentração prematura da verba e permite crescer a partir do que provar melhor aderência."
            note="Tabela editorial com leitura financeira clara e defensável."
          />
          <div className="two-col">
            <div className="table-card">
              <table>
                <thead>
                  <tr>
                    <th>Semana</th>
                    <th>Objetivo</th>
                    <th>Investimento</th>
                  </tr>
                </thead>
                <tbody>
                  {investmentRows.map(([week, objective, value]) => (
                    <tr key={week}>
                      <td>{week}</td>
                      <td>{objective}</td>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="text-card">
              <span className="card-tag">Racional comercial</span>
              <p>
                A operação começa com validação controlada, cresce com base em leitura real de performance e direciona mais verba para aquilo que demonstrar melhor potencial comercial. O objetivo é combinar método, prudência e ambição.
              </p>
            </div>
          </div>
        </section>

        <section className="panel reveal" data-reveal id="distribuicao">
          <SectionHeader
            index="09. Distribuição de verba por dia"
            title="Segunda a quarta lideram a prospecção. Quinta a domingo sustentam a reconexão."
            subtitle="A verba diária foi organizada para enfatizar descoberta sem perder presença de remarketing."
            note="Gráfico de colunas com peso visual nos três primeiros dias da semana."
          />
          <div className="budget-chart">
            {dailyBudget.map(([day, value, kind]) => (
              <article className="budget-bar" key={day}>
                <strong>R$ {value}</strong>
                <div className={`bar ${kind}`} style={{ height: `${value * 18}px` }} />
                <span>{day}</span>
              </article>
            ))}
          </div>
          <p className="footnote">
            Segunda, terça e quarta são dias de prospecção com maior força. Quinta a domingo trabalham remarketing e manutenção. A distribuição pode ser ajustada conforme o comportamento da campanha.
          </p>
        </section>

        <section className="panel reveal" data-reveal id="criativos">
          <SectionHeader
            index="10. Plano de criativos"
            title="Um portfólio inicial de 8 a 12 peças para testar linguagem, formato e intenção."
            subtitle="A estética da campanha precisa vender ambiente, sofisticação, acabamento e desejo, com leitura visual forte desde o primeiro impacto."
            note="Mosaico de mockups com atmosfera de galeria minimalista e energia visual premium."
          />
          <div className="creative-showcase">
            <article className="creative-main">
              <img src={quadroAmbiente} alt="Quadro em ambiente sofisticado" />
              <div>
                <span className="card-tag">Criativo principal</span>
                <h3>Ambiente decorado com quadro em destaque</h3>
                <p>Peça de abertura para valor percebido, aspiração e contexto de uso.</p>
              </div>
            </article>
            <div className="creative-side">
              {creativeCards.map(([title, text]) => (
                <article className="content-card" key={title}>
                  <span className="card-tag">{title}</span>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="panel reveal" data-reveal id="sazonais">
          <SectionHeader
            index="11. Campanhas sazonais e de oportunidade"
            title="Calendário de ideias para manter a marca conectada ao momento certo."
            subtitle="Além da operação base, a estratégia prevê campanhas temáticas que reforçam intenção de compra sem perder posicionamento."
            note="Gatilhos comerciais, emocionais e contextuais para manter o calendário vivo."
          />
          <div className="grid three">
            {seasonals.map(([title, text]) => (
              <article className="content-card" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="panel reveal" data-reveal id="investimento">
          <SectionHeader
            index="12. Investimento e entregas"
            title="Clareza financeira com entregas estratégicas definidas."
            subtitle="O investimento inicial foi pensado para validar mercado, fortalecer marca e gerar dados acionáveis sem exigir um salto agressivo no início."
            note="Blocos métricos com leitura rápida para reunião, PDF e fechamento."
          />
          <div className="grid three">
            <article className="metric-panel">
              <span className="card-tag">Gestão</span>
              <strong>R$ 1.200,00</strong>
              <p>Planejamento, estruturação, segmentação, direção criativa, monitoramento e otimização recorrente.</p>
            </article>
            <article className="metric-panel">
              <span className="card-tag">Mídia</span>
              <strong>R$ 700,00 a R$ 800,00</strong>
              <p>Faixa de investimento indicada para o primeiro ciclo, com base sugerida em R$ 770,00.</p>
            </article>
            <article className="metric-panel">
              <span className="card-tag">Total estimado</span>
              <strong>R$ 1.900,00 a R$ 2.000,00</strong>
              <p>Entrada comercial pensada para performance, validação e fortalecimento de marca.</p>
            </article>
          </div>
          <div className="two-col included-grid">
            <article className="text-card">
              <span className="card-tag">O que está incluso</span>
              <ul>
                {included.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="text-card">
              <span className="card-tag">Escala futura</span>
              <p>
                Conforme a campanha responda bem, os criativos mostrem aderência e o processo comercial aproveite os leads com eficiência, a verba pode evoluir de maneira proporcional e mais segura nos ciclos seguintes.
              </p>
            </article>
          </div>
        </section>

        <section className="panel reveal" data-reveal id="meta">
          <SectionHeader
            index="13. Meta inicial do primeiro mês"
            title="Projeção comercial do primeiro ciclo, com responsabilidade e direção."
            subtitle="A ambição do projeto é clara, mas a linguagem permanece juridicamente segura."
            note="Cenário estimado, não promessa absoluta."
          />
          <div className="two-col">
            <article className="text-card">
              <span className="card-tag">Texto exato da projeção</span>
              <p>
                A meta inicial de performance é buscar um cenário estimado de crescimento de até 25% em vendas no primeiro ciclo, desde que exista boa resposta do público, processo comercial ativo e atendimento eficiente. Essa leitura deve ser tratada como objetivo comercial, não como garantia absoluta.
              </p>
            </article>
            <article className="text-card">
              <span className="card-tag">Objetivos complementares</span>
              <ul>
                <li>aumento de leads qualificados</li>
                <li>fortalecimento da imagem da marca</li>
                <li>maior presença digital regional</li>
                <li>crescimento de reconhecimento e consideração de compra</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="panel reveal cta-panel" data-reveal id="fechamento">
          <SectionHeader
            index="14. Próximo passo e fechamento"
            title="Uma proposta para fechar com direção, clareza e impacto."
            subtitle="A D'Leads entra para estruturar presença, narrativa comercial e lógica de investimento, não apenas operar anúncios."
            note="CTA final pronto para versão web e exportação em PDF."
          />
          <div className="two-col closing-layout">
            <div className="closing-statement">
              <p className="closing-quote">
                A Moldurar DF já tem produto para ocupar um espaço premium. Agora precisa de uma presença digital à mesma altura.
              </p>
              <p>
                Ao aprovar esta proposta, o próximo passo é alinhar o plano criativo, estruturar as campanhas e iniciar a operação com método, estética e foco em crescimento comercial.
              </p>
              <div className="button-row">
                <a className="btn primary" href="#hero">Aprovar Proposta</a>
                <a className="btn ghost" href="#investimento">Visualizar Investimento</a>
                <a className="btn ghost" href="mailto:contato@dleads.com.br?subject=Proposta%20Moldurar%20DF">Falar com a D&apos;Leads</a>
              </div>
            </div>
            <div className="closing-stack">
              {navItems.map(([href, label]) => (
                <a className="action-link" key={href} href={href}>
                  {label}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
