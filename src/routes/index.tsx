import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Scale, Landmark, Building2, Trophy, Briefcase, FileText, Tractor, Shield,
  Phone, Mail, MapPin, MessageCircle, Check, ArrowRight, Star,
  ChevronLeft, ChevronRight,
} from "lucide-react";
import heroImg from "@/assets/hero-paulino.png";
import drImg from "@/assets/dr-paulino.png";
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
          <a href="#top" className="font-display text-xl tracking-wide">
            <span className="text-gradient-teal">Paulino</span>
            <span className="text-foreground/80"> Advocacia</span>
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
              <span className="text-gradient-teal">5.000 clientes</span>{" "}
              com excelência
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Na hora de defender seus direitos, experiência, estratégia e confiança fazem toda a diferença.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a href={WHATSAPP} target="_blank" rel="noopener" className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-teal-gradient text-primary-foreground font-semibold tracking-wide shadow-glow hover:scale-[1.03] transition">
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

      {/* DEPOIMENTOS */}
      <DepoimentosSection />


      {/* CTA FINAL */}
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
          <a href={WHATSAPP} target="_blank" rel="noopener" className="inline-flex items-center gap-3 px-8 py-5 rounded-full bg-teal-gradient text-primary-foreground font-semibold text-lg shadow-glow hover:scale-[1.03] transition">
            <MessageCircle size={22} />
            Falar no WhatsApp
            <ArrowRight size={20} />
          </a>
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
