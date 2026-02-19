export const runtime = 'edge';

import Link from 'next/link';

export default function Home() {
  return (
    <div style={s.page}>

      {/* ── Header ── */}
      <header style={s.header}>
        <span style={s.logo}>LinkFlow</span>
        <nav style={s.nav}>
          <Link href="/demo" style={s.navLink}>Demo</Link>
          <Link href="/giris" style={s.navLink}>Blog</Link>
        </nav>
        <div style={s.navRight}>
          <Link href="/giris" style={s.btnLogin}>Giriş Yap</Link>
          <Link href="#" style={s.btnSignup}>Üye Ol</Link>
        </div>
      </header>

      {/* ── Hero (colored) ── */}
      <section style={s.hero}>
        <div style={s.heroLeft}>
          <h1 style={s.headline}>
            Tek Bağlantı,<br />
            Sonsuz Gelir.
          </h1>
          <p style={s.sub}>
            Linklerini, ürünlerini ve içeriklerini tek sayfada topla.
            Takipçilerini müşteriye dönüştür.
          </p>
          <Link href="#" style={s.ctaBtn}>
            Hemen Başla →
          </Link>
          <p style={s.ctaNote}>Kredi kartı gerekmez · Ücretsiz başla</p>
        </div>

        <div style={s.heroRight}>
          {/* Phone */}
          <div style={s.phoneOuter}>
            <div style={s.phone}>
              <div style={s.phoneInner}>
                {/* Header row */}
                <div style={s.pHeader}>
                  <div style={s.pAvatar} />
                  <div>
                    <div style={s.pName} />
                    <div style={s.pHandle} />
                  </div>
                </div>

                {/* Links */}
                {['Instagram', 'YouTube', 'Podcast'].map((l) => (
                  <div key={l} style={s.pLink}>
                    <span style={s.pLinkIcon}>🔗</span>
                    <span style={s.pLinkText}>{l}</span>
                    <span style={s.pLinkArrow}>›</span>
                  </div>
                ))}

                <div style={s.pDivider} />

                {/* Products */}
                {[
                  { emoji: '📘', name: 'E-Kitap', price: '₺149', tag: 'EN ÇOK SATAN' },
                  { emoji: '🎬', name: 'Video Kurs', price: '₺499', tag: '' },
                  { emoji: '📅', name: '1:1 Danışmanlık', price: '₺299', tag: '' },
                ].map((p) => (
                  <div key={p.name} style={s.pProduct}>
                    <div style={s.pProductEmoji}>{p.emoji}</div>
                    <div style={s.pProductInfo}>
                      {p.tag && <span style={s.pProductTag}>{p.tag}</span>}
                      <div style={s.pProductName}>{p.name}</div>
                      <div style={s.pProductPrice}>{p.price}</div>
                    </div>
                    <div style={s.pProductArrow}>›</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating mini cards */}
            <div style={{ ...s.floatCard, top: '5%', right: '-80px' }}>
              <span>🔗</span><span>12 tıklanma</span>
            </div>
            <div style={{ ...s.floatCard, top: '44%', left: '-88px' }}>
              <span>📦</span><span>Yeni sipariş</span>
            </div>
            <div style={{ ...s.floatCard, bottom: '10%', right: '-80px' }}>
              <span>💰</span><span>₺499 gelir</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Social proof strip ── */}
      <section style={s.proof}>
        <p style={s.proofText}>
          <strong>En iyi içerik üreticiler LinkFlow kullanıyor</strong> 🚀
          &nbsp;—&nbsp;Takipçilerini müşteriye dönüştür.
        </p>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Inter', sans-serif; }

        @keyframes floatPhone {
          0%, 100% { transform: translateY(0) rotate(-2deg); }
          50%       { transform: translateY(-12px) rotate(-2deg); }
        }
        .phone-anim { animation: floatPhone 5s ease-in-out infinite; }
      `}</style>
    </div>
  );
}

const PURPLE = '#5B42F3';

const s: Record<string, React.CSSProperties> = {
  page: { minHeight: '100vh', fontFamily: 'Inter, sans-serif', background: '#fff' },

  // Header
  header: {
    position: 'absolute', top: 0, left: 0, right: 0, zIndex: 20,
    display: 'flex', alignItems: 'center', gap: 32,
    padding: '18px 48px',
  },
  logo: { fontSize: 18, fontWeight: 800, color: '#fff', letterSpacing: '-0.5px', marginRight: 8 },
  nav: { display: 'flex', gap: 4, flex: 1 },
  navLink: { padding: '7px 14px', fontSize: 14, fontWeight: 500, color: 'rgba(255,255,255,0.75)', textDecoration: 'none', borderRadius: 8 },
  navRight: { display: 'flex', gap: 8, alignItems: 'center' },
  btnLogin: { padding: '8px 18px', fontSize: 14, fontWeight: 500, color: '#fff', textDecoration: 'none', borderRadius: 8 },
  btnSignup: {
    padding: '8px 20px', fontSize: 14, fontWeight: 600,
    color: PURPLE, textDecoration: 'none', borderRadius: 8,
    background: '#fff',
  },

  // Hero
  hero: {
    background: PURPLE,
    minHeight: '90vh',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    flexWrap: 'wrap', gap: 48,
    padding: '110px 64px 80px',
    position: 'relative', overflow: 'hidden',
  },
  heroLeft: { flex: '1 1 360px', maxWidth: 480, color: '#fff' },
  headline: {
    fontSize: 'clamp(40px, 5.5vw, 68px)',
    fontWeight: 900, lineHeight: 1.08,
    letterSpacing: '-2.5px', marginBottom: 20,
  },
  sub: {
    fontSize: 17, lineHeight: 1.65,
    color: 'rgba(255,255,255,0.75)', marginBottom: 36, maxWidth: 380,
  },
  ctaBtn: {
    display: 'inline-block',
    padding: '15px 30px', borderRadius: 50,
    background: '#00E599', color: '#0f0f0f',
    fontWeight: 700, fontSize: 16, textDecoration: 'none',
    boxShadow: '0 4px 20px rgba(0,229,153,0.4)',
  },
  ctaNote: { marginTop: 12, fontSize: 13, color: 'rgba(255,255,255,0.5)' },

  // Hero phone side
  heroRight: {
    flex: '1 1 280px', display: 'flex',
    justifyContent: 'center', alignItems: 'center',
    position: 'relative', minHeight: 500,
  },
  phoneOuter: { position: 'relative', animation: 'floatPhone 5s ease-in-out infinite' },
  phone: {
    width: 260, borderRadius: 28,
    background: '#f5f3ff',
    boxShadow: '0 32px 80px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.15)',
    overflow: 'hidden',
    transform: 'rotate(-2deg)',
  },
  phoneInner: { padding: '20px 14px', display: 'flex', flexDirection: 'column', gap: 8 },

  pHeader: { display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 },
  pAvatar: {
    width: 44, height: 44, borderRadius: '50%', flexShrink: 0,
    background: 'linear-gradient(135deg, #7c3aed, #db2777)',
  },
  pName: { width: 90, height: 8, borderRadius: 4, background: '#ddd6fe', marginBottom: 4 },
  pHandle: { width: 60, height: 6, borderRadius: 4, background: '#ede9fe' },

  pLink: {
    display: 'flex', alignItems: 'center', gap: 8,
    padding: '10px 12px', borderRadius: 10,
    background: '#fff', border: '1px solid #e9d5ff',
  },
  pLinkIcon: { fontSize: 13 },
  pLinkText: { flex: 1, fontSize: 12, fontWeight: 600, color: '#1f1f2e' },
  pLinkArrow: { fontSize: 16, color: '#c4b5fd' },

  pDivider: { height: 1, background: '#e9d5ff', margin: '2px 0' },

  pProduct: {
    display: 'flex', alignItems: 'center', gap: 10,
    padding: '10px 12px', borderRadius: 10,
    background: '#fff', border: '1px solid #e9d5ff',
  },
  pProductEmoji: { fontSize: 22, flexShrink: 0 },
  pProductInfo: { flex: 1, display: 'flex', flexDirection: 'column', gap: 2 },
  pProductTag: {
    fontSize: 8, fontWeight: 700, letterSpacing: '0.06em',
    color: '#7c3aed', background: '#ede9fe',
    padding: '1px 6px', borderRadius: 4, alignSelf: 'flex-start',
  },
  pProductName: { fontSize: 12, fontWeight: 600, color: '#1f1f2e' },
  pProductPrice: { fontSize: 12, fontWeight: 700, color: '#7c3aed' },
  pProductArrow: { fontSize: 18, color: '#c4b5fd' },

  // Float cards
  floatCard: {
    position: 'absolute',
    display: 'flex', alignItems: 'center', gap: 8,
    padding: '9px 14px', borderRadius: 10,
    background: '#fff', boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
    fontSize: 12, fontWeight: 600, color: '#1f1f2e',
    whiteSpace: 'nowrap',
  },

  // Social proof
  proof: {
    background: '#fff', padding: '28px 48px',
    borderTop: '1px solid #f0f0f0',
    textAlign: 'center',
  },
  proofText: { fontSize: 15, color: '#6b7280' },
};
