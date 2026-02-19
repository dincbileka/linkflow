export const runtime = 'edge';

import Link from 'next/link';

export default function Home() {
  return (
    <div style={s.page}>

      {/* ── HEADER ── */}
      <header style={s.header}>
        <Link href="/" style={s.logo}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="" width={30} height={30} style={{ borderRadius: 7 }} />
          <span>LinkFlow</span>
        </Link>
        <nav style={s.nav}>
          <Link href="#features" style={s.navLink}>Özellikler</Link>
          <Link href="#how" style={s.navLink}>Nasıl Çalışır</Link>
          <Link href="/demo" style={s.navLink}>Demo</Link>
        </nav>
        <div style={s.navRight}>
          <Link href="/giris" style={s.navLogin}>Giriş Yap</Link>
          <Link href="/kayit" style={s.navSignup}>Üye Ol — Ücretsiz</Link>
        </div>
      </header>

      {/* ── HERO ── */}
      <section style={s.hero}>
        <div style={s.heroLeft}>
          <div style={s.heroBadge}>🚀 Türkiye&apos;nin #1 Creator Platformu</div>

          <h1 style={s.headline}>
            Seni Takip Edenler<br />
            <em style={s.headlineEm}>Müşteriye Dönüşsün.</em>
          </h1>

          <p style={s.heroSub}>
            Linklerini, dijital ürünlerini ve içeriklerini tek bir sayfada topla.
            Takipçilerinden gelir elde etmeye bugün başla.
          </p>

          <div style={s.heroCtas}>
            <Link href="/kayit" style={s.ctaPrimary}>
              Mağazanı Ücretsiz Kur →
            </Link>
            <Link href="/demo" style={s.ctaGhost}>
              Canlı Demo İncele
            </Link>
          </div>

          <div style={s.heroStats}>
            <div style={s.stat}><strong>10K+</strong><span>Aktif Kullanıcı</span></div>
            <div style={s.statDiv} />
            <div style={s.stat}><strong>₺2M+</strong><span>Toplam Gelir</span></div>
            <div style={s.statDiv} />
            <div style={s.stat}><strong>4.9★</strong><span>Puan</span></div>
          </div>
        </div>

        {/* Phone mockup */}
        <div style={s.heroRight}>
          <div style={s.phoneWrap}>
            <div style={s.phone}>
              <div style={s.phoneNotch} />
              <div style={s.phoneScreen}>
                {/* Profile row */}
                <div style={s.pProfileRow}>
                  <div style={s.pAvatar} />
                  <div>
                    <div style={s.pUsername}>Alexandra Silva</div>
                    <div style={s.pBio}>Content Creator · 500K takipçi</div>
                  </div>
                </div>

                {/* Social icons row */}
                <div style={s.pSocialRow}>
                  {['📸', '🎬', '🎵', '💼', '🐦'].map((icon, i) => (
                    <div key={i} style={s.pSocialIcon}>{icon}</div>
                  ))}
                </div>

                {/* Product cards */}
                {[
                  { emoji: '📘', name: 'İçerik Üretici Rehberi', price: '₺149', tag: 'EN ÇOK SATAN', tagColor: '#ef4444' },
                  { emoji: '🎬', name: 'YouTube Master Kursu', price: '₺499', tag: '%50 İNDİRİM', tagColor: '#16a34a' },
                  { emoji: '📅', name: '1:1 Danışmanlık', price: '₺299', tag: '', tagColor: '' },
                ].map((p) => (
                  <div key={p.name} style={s.pCard}>
                    <span style={s.pCardEmoji}>{p.emoji}</span>
                    <div style={s.pCardInfo}>
                      {p.tag && (
                        <span style={{ ...s.pCardTag, background: p.tagColor }}>{p.tag}</span>
                      )}
                      <div style={s.pCardName}>{p.name}</div>
                      <div style={s.pCardPrice}>{p.price}</div>
                    </div>
                    <div style={s.pCardBtn}>Al →</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating notifications */}
            <div style={{ ...s.notif, top: '8%', right: '-90px' }}>
              <span>�️</span>
              <div>
                <div style={s.notifTitle}>Yeni Satış!</div>
                <div style={s.notifSub}>E-Kitap · ₺149</div>
              </div>
            </div>
            <div style={{ ...s.notif, top: '42%', left: '-110px' }}>
              <span>❤️</span>
              <div>
                <div style={s.notifTitle}>Yeni Takipçi</div>
                <div style={s.notifSub}>@kullanici123</div>
              </div>
            </div>
            <div style={{ ...s.notif, bottom: '10%', right: '-94px' }}>
              <span>💰</span>
              <div>
                <div style={s.notifTitle}>Bugünkü Gelir</div>
                <div style={s.notifSub}>₺1.240</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={s.howSection} id="how">
        <p style={s.sectionEyebrow}>Nasıl Çalışır?</p>
        <h2 style={s.sectionTitle}>3 Adımda Mağazanı Kur</h2>
        <div style={s.steps}>
          {[
            { n: '01', title: 'Üye Ol', desc: 'Dakikalar içinde profilini oluştur. Kredi kartı gerekmez.' },
            { n: '02', title: 'İçeriklerini Ekle', desc: 'Linklerini, ürünlerini ve dijital içeriklerini yükle.' },
            { n: '03', title: 'Paylaş & Kazan', desc: 'Tek linki biyografine ekle ve gelir etmeye başla.' },
          ].map((step) => (
            <div key={step.n} style={s.step}>
              <div style={s.stepNum}>{step.n}</div>
              <h3 style={s.stepTitle}>{step.title}</h3>
              <p style={s.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section style={s.featSection} id="features">
        <p style={s.sectionEyebrow}>Özellikler</p>
        <h2 style={s.sectionTitle}>Her Şey Dahil</h2>
        <div style={s.featGrid}>
          {[
            { icon: '🔗', title: 'Sınırsız Link', desc: 'Sosyal medya, web sitesi, podcast — istediğin kadar link.' },
            { icon: '🛍️', title: 'Dijital Mağaza', desc: 'E-kitap, kurs, danışmanlık — hepsini tek yerden sat.' },
            { icon: '📊', title: 'Detaylı Analitik', desc: 'Kim tıkladı, nereden geldi, ne sattı — hepsini gör.' },
            { icon: '⚡', title: 'Ultra Hızlı', desc: 'Cloudflare Edge altyapısı ile küresel olarak hızlı.' },
            { icon: '💳', title: 'Kolay Ödeme', desc: 'Kredi kartı, havale — müşteriler kolayca ödeme yapsın.' },
            { icon: '🎨', title: 'Özelleştirilebilir', desc: 'Renk, font, düzen — sayfanı istediğin gibi tasarla.' },
          ].map((f) => (
            <div key={f.title} style={s.featCard}>
              <div style={s.featIcon}>{f.icon}</div>
              <h3 style={s.featTitle}>{f.title}</h3>
              <p style={s.featDesc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={s.ctaBanner}>
        <h2 style={s.ctaBannerTitle}>Takipçilerini Müşteriye Dönüştür</h2>
        <p style={s.ctaBannerSub}>Bugün üye ol, mağazanı dakikalar içinde kur.</p>
        <Link href="/kayit" style={s.ctaBannerBtn}>
          Ücretsiz Başla →
        </Link>
      </section>

      {/* ── FOOTER ── */}
      <footer style={s.footer}>
        <span style={s.footerLogo}>⚡ LinkFlow</span>
        <div style={s.footerLinks}>
          <Link href="/gizlilik" style={s.footerLink}>Gizlilik</Link>
          <Link href="/kullanim" style={s.footerLink}>Kullanım Şartları</Link>
          <Link href="/iletisim" style={s.footerLink}>İletişim</Link>
        </div>
        <span style={s.footerCopy}>© 2026 LinkFlow</span>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,800;1,900&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Inter', sans-serif; }
        @keyframes floatPhone {
          0%,100% { transform: translateY(0) rotate(-1.5deg); }
          50%      { transform: translateY(-14px) rotate(-1.5deg); }
        }
        .phone-float { animation: floatPhone 5s ease-in-out infinite; }
        a:hover { opacity: 0.85; }
        #features, #how { scroll-margin-top: 70px; }
      `}</style>
    </div>
  );
}

// ── Theme ─────────────────────────────────────────────────────
const PRIMARY = '#6B2D6B';        // koyu mor
const PRIMARY_DARK = '#4A1F4A';
const WHITE = '#fff';
const DARK = '#0f0f0f';
const GRAY = '#6b7280';
const LIGHT_BG = '#fafafa';
const BORDER = '#f0f0f0';

const s: Record<string, React.CSSProperties> = {
  page: { fontFamily: 'Inter, sans-serif', background: WHITE, color: DARK },

  // ── Header
  header: {
    position: 'sticky', top: 0, zIndex: 50,
    display: 'flex', alignItems: 'center', gap: 24,
    padding: '14px 48px',
    background: 'rgba(255,255,255,0.9)',
    borderBottom: `1px solid ${BORDER}`,
    backdropFilter: 'blur(12px)',
  },
  logo: {
    display: 'flex', alignItems: 'center', gap: 10,
    fontSize: 18, fontWeight: 800, color: DARK,
    textDecoration: 'none', letterSpacing: '-0.4px',
  },
  nav: { display: 'flex', gap: 2, flex: 1 },
  navLink: {
    padding: '7px 14px', fontSize: 14, fontWeight: 500,
    color: GRAY, textDecoration: 'none', borderRadius: 8,
  },
  navRight: { display: 'flex', gap: 8, alignItems: 'center' },
  navLogin: {
    padding: '8px 16px', fontSize: 14, fontWeight: 500,
    color: DARK, textDecoration: 'none',
  },
  navSignup: {
    padding: '9px 20px', fontSize: 14, fontWeight: 600,
    color: WHITE, textDecoration: 'none', borderRadius: 8,
    background: PRIMARY,
  },

  // ── Hero
  hero: {
    background: PRIMARY,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    flexWrap: 'wrap', gap: 48,
    padding: '72px 64px 64px',
    minHeight: '88vh',
    position: 'relative', overflow: 'hidden',
  },
  heroLeft: { flex: '1 1 380px', maxWidth: 520, color: WHITE },
  heroBadge: {
    display: 'inline-block',
    padding: '6px 14px', borderRadius: 50,
    background: 'rgba(255,255,255,0.15)',
    fontSize: 13, fontWeight: 600, marginBottom: 22,
  },
  headline: {
    fontSize: 'clamp(38px, 5vw, 66px)',
    fontWeight: 900, lineHeight: 1.07,
    letterSpacing: '-2.5px', marginBottom: 20,
  },
  headlineEm: {
    fontStyle: 'italic',
    textDecoration: 'underline',
    textDecorationColor: 'rgba(255,255,255,0.4)',
    textDecorationThickness: '3px',
    textUnderlineOffset: '6px',
  },
  heroSub: {
    fontSize: 16, lineHeight: 1.7,
    color: 'rgba(255,255,255,0.75)',
    maxWidth: 420, marginBottom: 36,
  },
  heroCtas: { display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center', marginBottom: 36 },
  ctaPrimary: {
    display: 'inline-flex', alignItems: 'center',
    padding: '14px 26px', borderRadius: 50,
    background: WHITE, color: PRIMARY,
    fontWeight: 700, fontSize: 15, textDecoration: 'none',
    boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
  },
  ctaGhost: {
    display: 'inline-flex', alignItems: 'center',
    padding: '14px 22px', borderRadius: 50,
    border: '2px solid rgba(255,255,255,0.4)',
    color: WHITE, fontWeight: 600, fontSize: 15, textDecoration: 'none',
  },
  heroStats: { display: 'flex', alignItems: 'center', gap: 20 },
  stat: {
    display: 'flex', flexDirection: 'column', gap: 2,
    fontSize: 13, color: 'rgba(255,255,255,0.7)',
  },
  statDiv: { width: 1, height: 32, background: 'rgba(255,255,255,0.25)' },

  // ── Phone
  heroRight: {
    flex: '1 1 280px', display: 'flex',
    justifyContent: 'center', alignItems: 'center',
    position: 'relative', minHeight: 540,
  },
  phoneWrap: {
    position: 'relative',
    animation: 'floatPhone 5s ease-in-out infinite',
  },
  phone: {
    width: 270, borderRadius: 32,
    background: '#fff',
    boxShadow: '0 40px 100px rgba(0,0,0,0.35), 0 0 0 1.5px rgba(255,255,255,0.3)',
    overflow: 'hidden',
    transform: 'rotate(-1.5deg)',
  },
  phoneNotch: {
    width: 90, height: 22, borderRadius: 11,
    background: '#f3f4f6', margin: '12px auto 0',
  },
  phoneScreen: {
    padding: '14px 14px 20px',
    display: 'flex', flexDirection: 'column', gap: 8,
  },

  pProfileRow: { display: 'flex', alignItems: 'center', gap: 10 },
  pAvatar: {
    width: 46, height: 46, borderRadius: '50%', flexShrink: 0,
    background: `linear-gradient(135deg, ${PRIMARY}, #c026d3)`,
  },
  pUsername: { fontSize: 13, fontWeight: 700, color: DARK },
  pBio: { fontSize: 10, color: GRAY, marginTop: 2 },

  pSocialRow: { display: 'flex', gap: 6, justifyContent: 'center', margin: '4px 0' },
  pSocialIcon: {
    width: 30, height: 30, borderRadius: '50%',
    background: '#f3f4f6', display: 'flex', alignItems: 'center',
    justifyContent: 'center', fontSize: 13,
  },

  pCard: {
    display: 'flex', alignItems: 'center', gap: 10,
    padding: '10px 12px', borderRadius: 12,
    border: '1.5px solid #f0f0f0', background: '#fff',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  },
  pCardEmoji: { fontSize: 22, flexShrink: 0 },
  pCardInfo: { flex: 1, display: 'flex', flexDirection: 'column', gap: 2 },
  pCardTag: {
    fontSize: 8, fontWeight: 700, letterSpacing: '0.05em',
    color: WHITE, padding: '2px 6px', borderRadius: 4,
    alignSelf: 'flex-start',
  },
  pCardName: { fontSize: 11, fontWeight: 700, color: DARK },
  pCardPrice: { fontSize: 11, fontWeight: 700, color: PRIMARY },
  pCardBtn: {
    fontSize: 11, fontWeight: 700, color: WHITE,
    background: PRIMARY, padding: '5px 10px', borderRadius: 8,
    flexShrink: 0,
  },

  notif: {
    position: 'absolute',
    display: 'flex', alignItems: 'center', gap: 10,
    padding: '10px 14px', borderRadius: 12, fontSize: 16,
    background: WHITE, boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
    border: `1px solid ${BORDER}`, whiteSpace: 'nowrap',
  },
  notifTitle: { fontSize: 12, fontWeight: 700, color: DARK },
  notifSub: { fontSize: 11, color: GRAY, marginTop: 1 },

  // ── How it works
  howSection: {
    padding: '80px 48px',
    background: LIGHT_BG,
    textAlign: 'center',
  },
  steps: {
    display: 'flex', gap: 32, flexWrap: 'wrap',
    justifyContent: 'center', marginTop: 48,
  },
  step: { flex: '1 1 220px', maxWidth: 300 },
  stepNum: {
    fontSize: 48, fontWeight: 900, color: PRIMARY,
    opacity: 0.15, lineHeight: 1, marginBottom: 12,
  },
  stepTitle: { fontSize: 18, fontWeight: 700, marginBottom: 8, color: DARK },
  stepDesc: { fontSize: 14, lineHeight: 1.65, color: GRAY },

  // ── Features
  featSection: {
    padding: '80px 48px',
    maxWidth: 1080, margin: '0 auto',
    textAlign: 'center',
  },
  featGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: 20, marginTop: 48, textAlign: 'left',
  },
  featCard: {
    padding: '28px 24px', borderRadius: 16,
    border: `1px solid ${BORDER}`, background: WHITE,
  },
  featIcon: { fontSize: 28, marginBottom: 14 },
  featTitle: { fontSize: 16, fontWeight: 700, marginBottom: 8, color: DARK },
  featDesc: { fontSize: 13, lineHeight: 1.65, color: GRAY },

  // Section common
  sectionEyebrow: {
    fontSize: 13, fontWeight: 600, letterSpacing: '0.08em',
    color: PRIMARY, textTransform: 'uppercase', marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 'clamp(28px, 4vw, 42px)',
    fontWeight: 800, letterSpacing: '-1px', color: DARK,
  },

  // ── CTA Banner
  ctaBanner: {
    background: PRIMARY,
    padding: '72px 48px',
    textAlign: 'center',
    color: WHITE,
  },
  ctaBannerTitle: {
    fontSize: 'clamp(28px, 4vw, 44px)',
    fontWeight: 900, letterSpacing: '-1.5px', marginBottom: 14,
  },
  ctaBannerSub: { fontSize: 16, color: 'rgba(255,255,255,0.7)', marginBottom: 32 },
  ctaBannerBtn: {
    display: 'inline-block',
    padding: '15px 32px', borderRadius: 50,
    background: WHITE, color: PRIMARY,
    fontWeight: 700, fontSize: 16, textDecoration: 'none',
    boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
  },

  // ── Footer
  footer: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    flexWrap: 'wrap', gap: 12,
    padding: '20px 48px',
    borderTop: `1px solid ${BORDER}`,
    background: WHITE,
  },
  footerLogo: { fontSize: 15, fontWeight: 700, color: DARK },
  footerLinks: { display: 'flex', gap: 24 },
  footerLink: { fontSize: 13, color: GRAY, textDecoration: 'none' },
  footerCopy: { fontSize: 13, color: GRAY },
};
