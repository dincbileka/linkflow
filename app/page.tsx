export const runtime = 'edge';

import Link from 'next/link';
import { ExternalLink, Link2, ShoppingBag, Zap, Globe, BarChart3 } from 'lucide-react';

export default function Home() {
  return (
    <div style={s.page}>
      {/* Background */}
      <div style={s.bgGradient} />
      <div style={s.orb1} />
      <div style={s.orb2} />
      <div style={s.orb3} />

      {/* ── Navbar ── */}
      <nav style={s.nav}>
        <span style={s.logo}>
          <span style={s.logoIcon}>⚡</span>
          <span style={s.logoText}>LinkFlow</span>
        </span>
        <a href="/demo" style={s.navDemo}>Demo →</a>
      </nav>

      {/* ── Hero ── */}
      <section style={s.hero}>
        <div style={s.badge}>
          <span style={s.badgeDot} />
          Yeni · Link&apos;in-bio platformu
        </div>

        <h1 style={s.h1}>
          Tüm bağlantıların,<br />
          <span style={s.gradient}>tek bir sayfada.</span>
        </h1>

        <p style={s.heroSub}>
          Sosyal medya profillerini, linklerini ve ürünlerini tek bir şık
          sayfada topla. Dakikalar içinde yayına gir.
        </p>

        <div style={s.heroBtns}>
          <Link href="/demo" style={s.btnPrimary}>
            Demo&apos;yu Gör
          </Link>
          <a
            href="https://github.com/dincbileka/linkflow"
            target="_blank"
            rel="noopener noreferrer"
            style={s.btnSecondary}
          >
            GitHub <ExternalLink size={14} style={{ marginLeft: 4 }} />
          </a>
        </div>

        {/* Mockup */}
        <div style={s.mockupWrapper}>
          <div style={s.mockup}>
            <div style={s.mockupBar}>
              <span style={s.dot} />
              <span style={{ ...s.dot, background: '#f59e0b' }} />
              <span style={{ ...s.dot, background: '#10b981' }} />
              <span style={s.mockupUrl}>linkflow.dev/senin-adin</span>
            </div>
            <div style={s.mockupContent}>
              <div style={s.mockupAvatar} />
              <div style={s.mockupName} />
              <div style={s.mockupBio} />
              {['Instagram', 'YouTube', 'Web Sitem'].map((t) => (
                <div key={t} style={s.mockupLink}>
                  <span style={s.mockupLinkDot} />
                  <span style={s.mockupLinkText}>{t}</span>
                </div>
              ))}
              <div style={s.mockupSection}>ÜRÜNLER</div>
              {['E-Kitap · ₺149', 'Kurs · ₺499'].map((t) => (
                <div key={t} style={s.mockupProduct}>
                  <div style={s.mockupProductImg} />
                  <span style={s.mockupProductText}>{t}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={s.mockupGlow} />
        </div>
      </section>

      {/* ── Features ── */}
      <section style={s.features}>
        <h2 style={s.h2}>Neden LinkFlow?</h2>
        <div style={s.featureGrid}>
          {[
            { icon: <Link2 size={22} />, title: 'Sınırsız Link', desc: 'Sosyal medya, blog, portfolio — istediğin kadar link ekle.' },
            { icon: <ShoppingBag size={22} />, title: 'Ürün Vitrini', desc: 'Dijital ve fiziksel ürünlerini kartlar halinde sergile.' },
            { icon: <Zap size={22} />, title: 'Ultra Hızlı', desc: 'Cloudflare Edge üzerinde çalışır, global olarak hızlı.' },
            { icon: <Globe size={22} />, title: 'Özel Domain', desc: 'Kendi alan adınla kullan, tamamen senin.' },
            { icon: <BarChart3 size={22} />, title: 'Analitik', desc: 'Hangi linklerin daha fazla tıklandığını takip et.' },
            { icon: <ExternalLink size={22} />, title: 'Kolay Paylaşım', desc: 'linkflow.dev/kullanıcıadın — tek link, her şey.' },
          ].map((f) => (
            <div key={f.title} style={s.featureCard} className="feat-card">
              <div style={s.featureIcon}>{f.icon}</div>
              <h3 style={s.featureTitle}>{f.title}</h3>
              <p style={s.featureDesc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={s.cta}>
        <div style={s.ctaCard}>
          <div style={s.ctaGlow} />
          <h2 style={s.ctaTitle}>Hemen başla</h2>
          <p style={s.ctaSub}>
            Profilini oluştur, linklerini ekle, dünyayla paylaş.
          </p>
          <Link href="/demo" style={s.btnPrimary}>
            Demo Profili Gör →
          </Link>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={s.footer}>
        <span style={s.footerLogo}>⚡ LinkFlow</span>
        <span style={s.footerCopy}>© 2026 — Tüm hakları saklıdır.</span>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Inter', sans-serif; }
        .feat-card { transition: transform 0.2s ease, box-shadow 0.2s ease !important; }
        .feat-card:hover { transform: translateY(-4px) !important; box-shadow: 0 12px 40px rgba(139,92,246,0.25) !important; }
      `}</style>
    </div>
  );
}

const s: Record<string, React.CSSProperties> = {
  page: {
    minHeight: '100vh',
    background: '#080814',
    color: '#fff',
    fontFamily: 'Inter, sans-serif',
    position: 'relative',
    overflow: 'hidden',
  },
  bgGradient: {
    position: 'fixed', inset: 0,
    background: 'radial-gradient(ellipse at 20% 0%, #1a0533 0%, #080814 55%)',
    zIndex: 0,
  },
  orb1: {
    position: 'fixed', top: '-15%', left: '-5%',
    width: '55vw', height: '55vw', borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)',
    zIndex: 0, pointerEvents: 'none',
  },
  orb2: {
    position: 'fixed', bottom: '-20%', right: '-10%',
    width: '50vw', height: '50vw', borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(236,72,153,0.12) 0%, transparent 70%)',
    zIndex: 0, pointerEvents: 'none',
  },
  orb3: {
    position: 'fixed', top: '40%', right: '10%',
    width: '30vw', height: '30vw', borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)',
    zIndex: 0, pointerEvents: 'none',
  },

  // Nav
  nav: {
    position: 'relative', zIndex: 10,
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '20px 32px',
    borderBottom: '1px solid rgba(255,255,255,0.05)',
    backdropFilter: 'blur(12px)',
  },
  logo: { display: 'flex', alignItems: 'center', gap: 8 },
  logoIcon: { fontSize: 22 },
  logoText: { fontSize: 20, fontWeight: 700, letterSpacing: '-0.5px' },
  navDemo: {
    padding: '8px 18px', borderRadius: 10,
    background: 'rgba(255,255,255,0.07)',
    border: '1px solid rgba(255,255,255,0.1)',
    color: '#fff', textDecoration: 'none', fontSize: 14, fontWeight: 500,
  },

  // Hero
  hero: {
    position: 'relative', zIndex: 1,
    display: 'flex', flexDirection: 'column', alignItems: 'center',
    textAlign: 'center', padding: '80px 24px 40px',
  },
  badge: {
    display: 'inline-flex', alignItems: 'center', gap: 8,
    padding: '6px 16px', borderRadius: 999,
    background: 'rgba(139,92,246,0.15)',
    border: '1px solid rgba(139,92,246,0.3)',
    fontSize: 13, color: '#c4b5fd', fontWeight: 500, marginBottom: 28,
  },
  badgeDot: {
    width: 7, height: 7, borderRadius: '50%',
    background: '#a78bfa', display: 'inline-block',
    boxShadow: '0 0 8px #a78bfa',
  },
  h1: {
    fontSize: 'clamp(36px, 6vw, 68px)',
    fontWeight: 800, lineHeight: 1.1,
    letterSpacing: '-2px', marginBottom: 20,
  },
  gradient: {
    background: 'linear-gradient(135deg, #a78bfa 0%, #ec4899 100%)',
    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
  },
  heroSub: {
    fontSize: 'clamp(16px, 2vw, 19px)',
    color: 'rgba(255,255,255,0.55)', maxWidth: 500, lineHeight: 1.6, marginBottom: 36,
  },
  heroBtns: { display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 64 },
  btnPrimary: {
    display: 'inline-flex', alignItems: 'center',
    padding: '13px 28px', borderRadius: 12,
    background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
    color: '#fff', fontWeight: 600, fontSize: 15, textDecoration: 'none',
    boxShadow: '0 4px 24px rgba(124,58,237,0.4)',
  },
  btnSecondary: {
    display: 'inline-flex', alignItems: 'center',
    padding: '13px 28px', borderRadius: 12,
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(255,255,255,0.12)',
    color: '#fff', fontWeight: 500, fontSize: 15, textDecoration: 'none',
  },

  // Mockup
  mockupWrapper: { position: 'relative', width: '100%', maxWidth: 340 },
  mockup: {
    width: '100%', borderRadius: 20,
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)',
    backdropFilter: 'blur(20px)', overflow: 'hidden',
  },
  mockupBar: {
    display: 'flex', alignItems: 'center', gap: 6, padding: '12px 16px',
    borderBottom: '1px solid rgba(255,255,255,0.06)',
  },
  dot: { width: 10, height: 10, borderRadius: '50%', background: '#ef4444' },
  mockupUrl: {
    flex: 1, textAlign: 'center', fontSize: 11,
    color: 'rgba(255,255,255,0.3)', marginLeft: 8,
  },
  mockupContent: { padding: '20px 16px', display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' },
  mockupAvatar: { width: 52, height: 52, borderRadius: '50%', background: 'linear-gradient(135deg,#7c3aed,#ec4899)' },
  mockupName: { width: 100, height: 10, borderRadius: 6, background: 'rgba(255,255,255,0.2)' },
  mockupBio: { width: 150, height: 8, borderRadius: 6, background: 'rgba(255,255,255,0.1)', marginBottom: 4 },
  mockupLink: {
    width: '100%', display: 'flex', alignItems: 'center', gap: 10,
    padding: '10px 14px', borderRadius: 10,
    background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)',
  },
  mockupLinkDot: { width: 8, height: 8, borderRadius: '50%', background: '#a78bfa', flexShrink: 0 },
  mockupLinkText: { fontSize: 12, color: 'rgba(255,255,255,0.7)', fontWeight: 500 },
  mockupSection: { fontSize: 10, color: 'rgba(255,255,255,0.3)', letterSpacing: 1, alignSelf: 'flex-start', marginTop: 4 },
  mockupProduct: {
    width: '100%', display: 'flex', alignItems: 'center', gap: 10,
    padding: '10px 14px', borderRadius: 10,
    background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)',
  },
  mockupProductImg: { width: 32, height: 32, borderRadius: 6, background: 'rgba(139,92,246,0.2)', flexShrink: 0 },
  mockupProductText: { fontSize: 12, color: 'rgba(255,255,255,0.6)', fontWeight: 500 },
  mockupGlow: {
    position: 'absolute', bottom: -40, left: '50%', transform: 'translateX(-50%)',
    width: '80%', height: 80, borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(124,58,237,0.4) 0%, transparent 70%)',
    filter: 'blur(20px)', zIndex: -1,
  },

  // Features
  features: {
    position: 'relative', zIndex: 1,
    padding: '80px 24px',
    maxWidth: 1000, margin: '0 auto',
  },
  h2: {
    fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700,
    textAlign: 'center', marginBottom: 48, letterSpacing: '-1px',
  },
  featureGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: 16,
  },
  featureCard: {
    padding: '28px 24px', borderRadius: 16,
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
    backdropFilter: 'blur(10px)',
  },
  featureIcon: {
    width: 44, height: 44, borderRadius: 12,
    background: 'rgba(139,92,246,0.15)',
    border: '1px solid rgba(139,92,246,0.25)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    color: '#a78bfa', marginBottom: 16,
  },
  featureTitle: { fontSize: 16, fontWeight: 600, marginBottom: 8 },
  featureDesc: { fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 },

  // CTA
  cta: {
    position: 'relative', zIndex: 1,
    padding: '40px 24px 80px',
    display: 'flex', justifyContent: 'center',
  },
  ctaCard: {
    position: 'relative',
    width: '100%', maxWidth: 600,
    padding: '56px 40px', borderRadius: 24, textAlign: 'center',
    background: 'rgba(124,58,237,0.1)',
    border: '1px solid rgba(139,92,246,0.25)',
    backdropFilter: 'blur(20px)',
    overflow: 'hidden',
  },
  ctaGlow: {
    position: 'absolute', top: -60, left: '50%', transform: 'translateX(-50%)',
    width: '70%', height: 120,
    background: 'radial-gradient(circle, rgba(124,58,237,0.5) 0%, transparent 70%)',
    filter: 'blur(30px)', zIndex: 0,
  },
  ctaTitle: { fontSize: 32, fontWeight: 700, marginBottom: 12, position: 'relative', zIndex: 1 },
  ctaSub: { color: 'rgba(255,255,255,0.55)', marginBottom: 28, fontSize: 16, position: 'relative', zIndex: 1 },

  // Footer
  footer: {
    position: 'relative', zIndex: 1,
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    flexWrap: 'wrap', gap: 8,
    padding: '20px 32px',
    borderTop: '1px solid rgba(255,255,255,0.06)',
  },
  footerLogo: { fontWeight: 700, fontSize: 15 },
  footerCopy: { fontSize: 13, color: 'rgba(255,255,255,0.3)' },
};
