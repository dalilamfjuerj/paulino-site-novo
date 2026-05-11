import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Scale, Landmark, Building2, Trophy, Briefcase, FileText, Tractor, Shield,
  Phone, Mail, MapPin, MessageCircle, Check, ArrowRight, Star,
  ChevronLeft, ChevronRight, Facebook, Instagram, Linkedin,
} from "lucide-react";
import heroImg from "@/assets/hero-paulino.png";
import drImg from "@/assets/dr-paulino.png";
import paulinoLogo from "@/assets/paulino-logo.png";
import brasilMap from "@/assets/brasil-map.png";
import dep1 from "@/assets/depoimentos/d1.png";
import dep3 from "@/assets/depoimentos/d3.png";
import dep4 from "@/assets/depoimentos/d4.png";
import dep5 from "@/assets/depoimentos/d5.png";
import dep6 from "@/assets/depoimentos/d6.png";
import dep7 from "@/assets/depoimentos/d7.png";
import dep8 from "@/assets/depoimentos/d8.png";
import dep8b from "@/assets/depoimentos/d8b.png";
import dep9 from "@/assets/depoimentos/d9.png";
import dep10 from "@/assets/depoimentos/d10.png";

const depoimentos = [
  { src: dep1, name: "Anderson Fernandes" },
  { src: dep3, name: "Rosinei da Silva" },
  { src: dep4, name: "Sra. Alessandra" },
  { src: dep5, name: "Ivonete" },
  { src: dep6, name: "Kauã" },
  { src: dep7, name: "Ronald" },
  { src: dep8, name: "Natan" },
  { src: dep8b, name: "Raimundo" },
  { src: dep9, name: "Kionne Teixeira" },
  { src: dep10, name: "Adriana" },
];

import parceiroSeven from "@/assets/parceiros/seven.png";
import parceiroBitribut from "@/assets/parceiros/bitribut.png";
import parceiroEfagro from "@/assets/parceiros/efagro.png";
import parceiroHub from "@/assets/parceiros/hub-botafogo.png";

const parceiros = [
  { src: parceiroHub, name: "Hub Botafogo" },
  { src: parceiroEfagro, name: "EFAGRO" },
  { src: parceiroBitribut, name: "Bitribut" },
  { src: parceiroSeven, name: "Seven Ambiental" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Paulino Advocacia — Excelência jurídica há mais de 18 anos" },
      { name: "description", content: "Escritório de advocacia com mais de 18 anos de atuação e 5.000+ clientes atendidos. Direito Previdenciário, Bancário, Tributário, Empresarial e Desportivo." },
    ],
  }),
  component: Index,
});

const WHATSAPP = "https://wa.me/5521970740653";

const areas = [
  { icon: Shield, title: "Previdenciário", desc: "Aposentadorias, revisões, BPC/LOAS, benefícios por incapacidade e planejamento previdenciário." },
  { icon: Landmark, title: "Bancário", desc: "Fraudes bancárias, juros abusivos, renegociação de dívidas, revisão contratual e defesa do consumidor." },
  { icon: FileText, title: "Tributário", desc: "Planejamento tributário, recuperação de créditos e estratégias para redução legal da carga tributária." },
  { icon: Building2, title: "Empresarial", desc: "Assessoria jurídica empresarial, contratos, prevenção de riscos e suporte estratégico." },
  { icon: Trophy, title: "Desportivo", desc: "Assessoria jurídica para atletas, clubes, empresários e contratos esportivos." },
  { icon: Briefcase, title: "Trabalhista", desc: "Defesa de direitos trabalhistas e orientação para empregados e empregadores." },
  { icon: Scale, title: "Administrativo", desc: "Atuação em processos administrativos e demandas do setor público." },
  { icon: Tractor, title: "Ruralista", desc: "Defesa do produtor rural, crédito rural, prorrogação de dívidas, CPR e proteção patrimonial." },
];

const diferenciais = [
  "Atendimento humanizado e estratégico",
  "Equipe altamente qualificada",
  "Mais de 5.000 clientes atendidos",
  "Atuação presencial e online",
  "Compromisso com ética e transparência",
  "Atualização constante nas principais áreas do Direito",
  "Estratégias jurídicas personalizadas para cada caso",
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/60 border-b border-border/40">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <img src={paulinoLogo} alt="Paulino Advocacia" className="h-10 w-auto" />
            <span className="sr-only">Paulino Advocacia</span>
          </a>
          <nav className="hidden md:flex gap-8 text-sm text-muted-foreground">
            <a href="#sobre" className="hover:text-primary transition">Sobre</a>
            <a href="#areas" className="hover:text-primary transition">Áreas</a>
            <a href="#diferencial" className="hover:text-primary transition">Diferenciais</a>
            <a href="#contato" className="hover:text-primary transition">Contato</a>
          </nav>
          <a href={WHATSAPP} target="_blank" rel="noopener" className="hidden sm:inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full bg-teal-gradient text-primary-foreground font-medium hover:shadow-glow transition">
            <MessageCircle size={16} /> Falar agora
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background image full-bleed, centered */}
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Dr. Fernando Paulino"
            className="absolute inset-0 w-full h-full object-cover object-center select-none"
          />
          {/* Dark vignette + teal glow overlays */}
          <div className="absolute inset-0 bg-background/70" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,oklch(0.10_0.025_220/0.7)_80%)]" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur text-primary text-xs uppercase tracking-[0.25em] mb-8">
              <span className="size-1.5 rounded-full bg-primary animate-pulse" />
              Advocacia de Excelência
            </div>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.05] mb-8 text-foreground">
              Conheça o escritório especializado que já atendeu mais de{" "}
              <span className="text-gradient-gold">5.000 clientes</span>{" "}
              com excelência
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Na hora de defender seus direitos, experiência, estratégia e confiança fazem toda a diferença.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a href={WHATSAPP} target="_blank" rel="noopener" className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[image:var(--gradient-gold)] text-gold-foreground font-semibold tracking-wide shadow-elegant hover:scale-[1.03] transition">
                <MessageCircle size={18} />
                Falar com um advogado
                <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> Atendimento presencial e online para todo o Brasil</span>
              <span className="flex items-center gap-2"><Phone size={16} className="text-primary" /> Fale agora com nossa equipe jurídica</span>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-muted-foreground/60 text-xs uppercase tracking-[0.3em]">
          ↓ Role para baixo
        </div>
      </section>

      {/* STATS */}
      <section className="relative border-y border-border/40 bg-card/30">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4">
          {[
            { v: "18+", l: "Anos de atuação" },
            { v: "5.000+", l: "Clientes atendidos" },
            { v: "8", l: "Áreas de atuação" },
            { v: "2", l: "Unidades no RJ" },
          ].map((s) => (
            <div key={s.l} className="p-8 text-center border-r last:border-r-0 border-border/40">
              <div className="font-display text-4xl md:text-5xl text-gradient-teal mb-1">{s.v}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* AUTORIDADE */}
      <section className="py-28 border-t border-border/40">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Autoridade</span>
          <h2 className="font-display text-4xl md:text-6xl mt-4 mb-8">
            Mais de <span className="text-gradient-gold">18 anos</span> de atuação no mercado jurídico
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            <p>Ao longo de quase duas décadas, a Paulino Advocacia já auxiliou milhares de clientes na proteção de seus direitos, construção de estratégias jurídicas e resolução de conflitos com segurança e excelência.</p>
            <p>Nosso compromisso vai além dos processos: buscamos oferecer clareza, direcionamento e tranquilidade em cada atendimento.</p>
            <p>Hoje, o escritório conta com uma equipe preparada para atuar de forma estratégica em demandas de alta complexidade, sempre com ética, atualização constante e dedicação total ao cliente.</p>
          </div>
        </div>
      </section>

      {/* SOBRE DR. FERNANDO */}
      <section id="sobre" className="py-28 bg-card/40 border-y border-border/40">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-6 bg-teal-gradient opacity-20 blur-3xl rounded-full" />
            <img src={drImg} alt="Dr. Fernando Paulino" className="relative w-full max-w-lg mx-auto rounded-2xl shadow-elegant" />
          </motion.div>

          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary">Quem é o Dr.</span>
            <h2 className="font-display text-4xl md:text-5xl mt-4 mb-2">Dr. Fernando Paulino</h2>
            <p className="text-gold font-medium mb-6">Advogado previdenciarista — Presidente da Paulino Advocacia</p>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>Com mais de 18 anos de atuação jurídica, Dr. Fernando é reconhecido pela condução estratégica de casos nas áreas Previdenciária, Bancária, Tributária, Ruralista e Empresarial.</p>
              <p>Atualmente, exerce também o cargo de <span className="text-foreground font-medium">Vice-Presidente da Comissão de Meio Ambiente da OAB/RJ — Campo Grande</span>, reforçando seu compromisso institucional com a advocacia e a sociedade.</p>
              <p>Mantém constante aperfeiçoamento técnico, com especializações em Direito Previdenciário, Tributário e Desportivo.</p>
              <p>Em 2025, concluiu a <span className="text-foreground font-medium">Mentoria de Contratos no Futebol</span>, fortalecendo sua atuação na assessoria jurídica desportiva para atletas, empresários e profissionais do esporte.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ÁREAS */}
      <section id="areas" className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-primary">Áreas de atuação</span>
            <h2 className="font-display text-4xl md:text-5xl mt-4 mb-4">Atuação estratégica nas principais áreas do Direito</h2>
            <p className="text-muted-foreground">Suporte jurídico especializado para pessoas físicas, empresários, produtores rurais e atletas.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {areas.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative p-6 rounded-2xl border border-border bg-card/50 hover:border-primary/60 hover:bg-card transition-all hover:-translate-y-1"
              >
                <div className="size-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-teal-gradient group-hover:border-transparent transition">
                  <a.icon size={22} className="text-primary group-hover:text-primary-foreground transition" />
                </div>
                <h3 className="font-display text-xl mb-2">{a.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIAL */}
      <section id="diferencial" className="py-28 bg-card/40 border-y border-border/40">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary">Diferenciais</span>
            <h2 className="font-display text-4xl md:text-5xl mt-4 mb-6">Por que clientes escolhem a <span className="text-gradient-teal">Paulino Advocacia</span>?</h2>
            <p className="text-muted-foreground">Cada caso é tratado com a atenção, profundidade e estratégia que merece.</p>
          </div>
          <ul className="space-y-4">
            {diferenciais.map((d) => (
              <li key={d} className="flex items-start gap-4 p-4 rounded-xl border border-border bg-background/40 hover:border-primary/50 transition">
                <span className="mt-0.5 size-6 rounded-full bg-teal-gradient flex items-center justify-center shrink-0">
                  <Check size={14} className="text-primary-foreground" strokeWidth={3} />
                </span>
                <span className="text-foreground/90">{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* EQUIPE */}
      <TeamSection />

      {/* DEPOIMENTOS */}
      <DepoimentosSection />


      {/* PARCEIROS */}
      <section id="parceiros" className="py-20 bg-white text-neutral-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.3em] text-neutral-500">Parceiros</span>
            <h2 className="font-display text-3xl md:text-4xl mt-3 text-neutral-900">
              Empresas que <span className="text-gradient-gold">confiam</span> em nosso trabalho
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {parceiros.map((p) => (
              <div
                key={p.name}
                className="group relative h-28 rounded-2xl border border-neutral-200 bg-white hover:border-neutral-400 transition flex items-center justify-center p-6"
              >
                <img
                  src={p.src}
                  alt={p.name}
                  className="max-h-16 max-w-full object-contain opacity-80 group-hover:opacity-100 transition"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero opacity-80" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Próximo passo</span>
          <h2 className="font-display text-4xl md:text-6xl mt-4 mb-6">
            Precisa de <span className="text-gradient-teal">orientação jurídica</span> especializada?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Nossa equipe está pronta para analisar seu caso e apresentar a melhor estratégia jurídica para você.
          </p>

          {/* Social icons */}
          <div className="flex justify-center gap-3 mb-8">
            {[
              { Icon: Facebook, href: "https://facebook.com", label: "Facebook" },
              { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
              { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { Icon: MessageCircle, href: "https://wa.me/5521964523443?text=Oi%2C%20vim%20do%20site%20e%20queria%20mais%20informa%C3%A7%C3%B5es...", label: "WhatsApp" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener"
                aria-label={label}
                className="size-12 rounded-full bg-card/80 border border-border hover:border-primary hover:text-primary hover:bg-card transition flex items-center justify-center"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/5521964523443?text=Oi%2C%20vim%20do%20site%20e%20queria%20mais%20informa%C3%A7%C3%B5es..."
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center gap-3 w-full max-w-md mx-auto px-8 py-5 rounded-xl bg-[#22c55e] hover:bg-[#16a34a] text-white font-semibold text-lg shadow-glow hover:scale-[1.02] transition"
          >
            <MessageCircle size={22} />
            Clique aqui e fale conosco por WhatsApp
          </a>

          {/* Contact list */}
          <ul className="mt-10 space-y-3 text-left max-w-md mx-auto text-foreground/90">
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-primary shrink-0" />
              <span>Fixo — (21) 3156-8582</span>
            </li>
            <li className="flex items-center gap-3">
              <MessageCircle size={18} className="text-primary shrink-0" />
              <span>Previdência — (21) 96452-3443</span>
            </li>
            <li className="flex items-center gap-3">
              <MessageCircle size={18} className="text-primary shrink-0" />
              <span>Outras áreas Jurídicas — (21) 97074-0653</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-primary shrink-0" />
              <span>contato@paulinoadvocacia.com</span>
            </li>
          </ul>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/40 bg-card/40 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="font-display text-2xl mb-4">
              <span className="text-gradient-teal">Paulino</span> Advocacia
            </div>
            <p className="text-sm text-muted-foreground italic">"Compromisso com excelência, integridade e resultados."</p>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4 text-primary">Unidades</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3"><MapPin size={16} className="text-primary shrink-0 mt-0.5" /> Barra da Tijuca — Vogue Square</li>
              <li className="flex gap-3"><MapPin size={16} className="text-primary shrink-0 mt-0.5" /> Campo Grande — Rio de Janeiro</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg mb-4 text-primary">Contato</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-3"><Phone size={16} className="text-primary shrink-0 mt-0.5" /> (21) 3156-8582</li>
              <li className="flex gap-3"><MessageCircle size={16} className="text-primary shrink-0 mt-0.5" /> Previdência: (21) 96452-3443</li>
              <li className="flex gap-3"><MessageCircle size={16} className="text-primary shrink-0 mt-0.5" /> Outras áreas: (21) 97074-0653</li>
              <li className="flex gap-3"><Mail size={16} className="text-primary shrink-0 mt-0.5" /> contato@paulinoadvocacia.com</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-border/40 text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} Paulino Advocacia. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}

function DepoimentosSection() {
  const [index, setIndex] = useState(0);
  const total = depoimentos.length;
  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  // visible cards: previous, current, next
  const visible = [
    depoimentos[(index - 1 + total) % total],
    depoimentos[index],
    depoimentos[(index + 1) % total],
  ];

  return (
    <section className="py-28 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,oklch(0.55_0.13_220/0.15),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT: Map + Title */}
        <div className="text-center lg:text-left">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-4">
            <span className="text-gradient-gold">Depoimentos</span>{" "}
            <span className="text-neutral-900">de quem já passou pelo nosso escritório!</span>
          </h2>
          <div className="relative mt-8">
            <img
              src={brasilMap}
              alt="Mapa do Brasil — atendimento em todo o território nacional"
              className="relative w-full max-w-md mx-auto lg:mx-0 drop-shadow-xl"
            />
            <p className="font-display text-2xl md:text-3xl mt-6 text-center lg:text-left text-neutral-900">
              Atendimentos em <span className="text-gradient-gold">todo Brasil</span>
            </p>
          </div>
        </div>

        {/* RIGHT: Carousel */}
        <div className="relative">
          <div className="flex items-center justify-center gap-4 md:gap-6 min-h-[560px]">
            {visible.map((d, i) => {
              const isCenter = i === 1;
              return (
                <motion.div
                  key={`${d.name}-${index}-${i}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{
                    opacity: isCenter ? 1 : 0.4,
                    scale: isCenter ? 1 : 0.82,
                  }}
                  transition={{ duration: 0.45 }}
                  className={`relative rounded-2xl overflow-hidden border ${
                    isCenter
                      ? "border-neutral-300 shadow-elegant z-10"
                      : "border-neutral-200 hidden sm:block"
                  }`}
                  style={{ width: isCenter ? 280 : 200 }}
                >
                  <img src={d.src} alt={`Depoimento ${d.name}`} className="block w-full h-auto" />
                </motion.div>
              );
            })}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              aria-label="Depoimento anterior"
              className="size-12 rounded-full border border-neutral-300 bg-white hover:border-neutral-900 hover:bg-neutral-100 text-neutral-900 transition flex items-center justify-center"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="text-sm text-neutral-500 tabular-nums">
              <span className="text-neutral-900 font-semibold">{String(index + 1).padStart(2, "0")}</span>
              <span className="mx-2 text-neutral-300">/</span>
              <span>{String(total).padStart(2, "0")}</span>
            </div>
            <button
              onClick={next}
              aria-label="Próximo depoimento"
              className="size-12 rounded-full border border-neutral-300 bg-white hover:border-neutral-900 hover:bg-neutral-100 text-neutral-900 transition flex items-center justify-center"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ========================= EQUIPE =========================
import teamFernando from "@/assets/equipe/fernando.png";
import teamIngrid from "@/assets/equipe/ingrid.png";
import teamSilvia from "@/assets/equipe/silvia.png";
import teamRennan from "@/assets/equipe/rennan.png";

const equipe = [
  {
    name: "Fernando Paulino",
    role: "Presidente do escritório",
    img: teamFernando,
    bio: [
      "Advogado militante na área previdenciária há mais de 18 anos.",
      "Formou-se em Direito na Universidade Veiga de Almeida (UVA) em 2005.",
      "Pós-graduado em Direito Previdenciário (INFOC), de 2016 a julho de 2018.",
      "Militar do Exército Brasileiro pelo período de 2 anos (1994 a 1996).",
      "Curso de Processo Tributário prático específico para Grandes Teses Tributárias, de fevereiro a março de 2020 (IBIJUS).",
      "Curso de aperfeiçoamento em matéria previdenciária no XVI Congresso Brasileiro de Direito Previdenciário em Foz do Iguaçu — PR, pelo IBDP (setembro de 2022).",
      "Cursando Pós-Graduação em Recuperação de Crédito Tributário (IBIJUS).",
    ],
  },
  {
    name: "Ingrid Castelo",
    role: "Coordenadora Administrativa",
    img: teamIngrid,
    bio: [
      "Formada em Engenharia de Produção (Estácio de Sá, desde 2019).",
      "Pós-graduanda em Gestão de Pessoas / Segurança do Trabalho (Faveni).",
    ],
  },
  {
    name: "Silvia Pereira",
    role: "Advogada Internacional",
    img: teamSilvia,
    bio: [
      "Mestre em Direito Internacional (EUA), advogada na Inglaterra e no País de Gales, inscrita na Solicitors Regulation Authority (SRA) e na Law Society — órgãos reguladores dos advogados ingleses.",
      "Habilitada pela Ordem dos Advogados de Portugal e do Brasil.",
      "Com 20 anos de experiência jurídica, atua no Reino Unido, em todo o continente europeu e na América do Sul, com ênfase em Direito Internacional Empresarial e Contratos.",
      "Membro da EAPIL — European Association of Private International Law.",
    ],
  },
  {
    name: "Rennan Lima",
    role: "Advogado",
    img: teamRennan,
    bio: [
      "Graduação em Direito pela Universidade Estácio de Sá (2020).",
      "Especialização em Advocacia Cível pela Fundação Escola Superior do Ministério Público — RS (2023).",
      "Experiência na área de Direito Previdenciário.",
      "Graduação em andamento em Ciências Contábeis pela Universidade Estácio de Sá (UNESA).",
    ],
  },
];

function TeamSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section id="equipe" className="py-28 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Equipe</span>
          <h2 className="font-display text-4xl md:text-5xl mt-4 mb-4">
            Conheça os profissionais que fazem parte da{" "}
            <span className="text-gradient-teal">nossa equipe</span>
          </h2>
          <p className="text-muted-foreground">Clique em um membro para ver a trajetória completa.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {equipe.map((m, i) => {
            const active = openIdx === i;
            return (
              <button
                key={m.name}
                onClick={() => setOpenIdx(active ? null : i)}
                className={`group text-left rounded-2xl p-6 border transition-all ${
                  active
                    ? "border-primary bg-card shadow-glow -translate-y-1"
                    : "border-border bg-card/50 hover:border-primary/50 hover:-translate-y-1"
                }`}
                aria-expanded={active}
              >
                <div className="relative mb-4">
                  <div
                    className={`absolute inset-0 rounded-full blur-2xl transition ${
                      active ? "bg-teal-gradient opacity-40" : "bg-primary/10 opacity-0 group-hover:opacity-30"
                    }`}
                  />
                  <img
                    src={m.img}
                    alt={m.name}
                    className="relative w-32 h-32 mx-auto rounded-full object-cover border-2 border-primary/30"
                  />
                </div>
                <h3 className="font-display text-xl text-center">{m.name}</h3>
                <p className="text-xs uppercase tracking-[0.2em] text-primary text-center mt-1">{m.role}</p>
                <div className="text-center mt-3 text-xs text-muted-foreground">
                  {active ? "− Recolher" : "+ Ver perfil"}
                </div>
              </button>
            );
          })}
        </div>

        <motion.div
          initial={false}
          animate={{ height: openIdx !== null ? "auto" : 0, opacity: openIdx !== null ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="overflow-hidden"
        >
          {openIdx !== null && (
            <div className="rounded-2xl border border-primary/40 bg-card/60 p-8 md:p-10">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={equipe[openIdx].img}
                  alt={equipe[openIdx].name}
                  className="size-16 rounded-full object-cover border border-primary/30"
                />
                <div>
                  <h3 className="font-display text-2xl">{equipe[openIdx].name}</h3>
                  <p className="text-sm text-gold">{equipe[openIdx].role}</p>
                </div>
              </div>
              <ul className="space-y-3 text-muted-foreground leading-relaxed">
                {equipe[openIdx].bio.map((b, j) => (
                  <li key={j} className="flex gap-3">
                    <Check size={16} className="text-primary shrink-0 mt-1" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
