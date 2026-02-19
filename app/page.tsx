export const runtime = 'edge';
import Link from 'next/link';

// ── THEME ──────────────────────────────────────────────────────
const BRAND = '#6B2D6B';
const GREEN = '#00D084';   // Stan'in yeşil CTA rengi — bizde accent
const WHITE = '#ffffff';
const DARK = '#0a0a0a';
const GRAY = '#64748b';
const BORDER = '#e2e8f0';

export default function Page() {
  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', Inter, sans-serif", background: WHITE, color: DARK }}>

      {/* ══════════════════════════════════════════════
          HEADER
      ══════════════════════════════════════════════ */}
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
        height: 64,
        display: 'flex', alignItems: 'center',
        padding: '0 40px',
        background: BRAND,
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flex: 1 }}>
          <span style={{ fontSize: 20, fontWeight: 900, color: WHITE, letterSpacing: '-0.6px' }}>LinkFlow</span>
        </div>

        {/* Nav links — centre */}
        <nav style={{ display: 'flex', gap: 2 }}>
          {[['Özellikler', '#features'], ['Nasıl Çalışır', '#how'], ['Fiyatlandırma', '#pricing'], ['Blog', '/blog']].map(([l, h]) => (
            <a key={l} href={h} style={{ padding: '8px 14px', fontSize: 14, fontWeight: 500, color: 'rgba(255,255,255,0.78)', textDecoration: 'none', borderRadius: 8 }}>{l}</a>
          ))}
        </nav>

        {/* Right actions */}
        <div style={{ display: 'flex', gap: 10, alignItems: 'center', flex: 1, justifyContent: 'flex-end' }}>
          <Link href="/giris" style={{ fontSize: 14, fontWeight: 500, color: WHITE, textDecoration: 'none', padding: '8px 14px' }}>Giriş Yap</Link>
          <Link href="/kayit" style={{ fontSize: 14, fontWeight: 700, color: BRAND, background: WHITE, textDecoration: 'none', padding: '10px 22px', borderRadius: 50 }}>
            Üye Ol
          </Link>
        </div>
      </header>

      {/* ══════════════════════════════════════════════
          HERO  (tam Stan tarzı — sol metin, sağ telefon)
      ══════════════════════════════════════════════ */}
      <section style={{
        background: BRAND, minHeight: '100vh',
        paddingTop: 64,                     /* header height */
        display: 'flex', alignItems: 'stretch',
        overflow: 'hidden',
        position: 'relative',
      }}>
        {/* ── Sol sütun ── */}
        <div style={{
          flex: '0 0 50%', maxWidth: 620,
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          padding: '80px 48px 80px 72px',
          color: WHITE,
        }}>
          <h1 style={{
            fontSize: 'clamp(42px, 5.5vw, 72px)',
            fontWeight: 900, lineHeight: 1.04,
            letterSpacing: '-2.5px', marginBottom: 20,
          }}>
            Herkese Açık<br />Bir Creator<br />Mağazası Kur.
          </h1>

          <p style={{ fontSize: 18, lineHeight: 1.65, color: 'rgba(255,255,255,0.74)', maxWidth: 400, marginBottom: 36 }}>
            Tüm kurslarını, dijital ürünlerini ve randevularını tek bir link altında topla.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <Link href="/kayit" style={{
              display: 'inline-flex', alignItems: 'center',
              padding: '18px 36px', borderRadius: 50,
              background: GREEN, color: DARK,
              fontWeight: 800, fontSize: 17, textDecoration: 'none',
              boxShadow: '0 6px 28px rgba(0,208,132,0.4)',
              alignSelf: 'flex-start',
            }}>
              Devam Et →
            </Link>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.44)' }}>
              Kredi kartı gerekmez · 2 dakikada kurulum · Ücretsiz başla
            </p>
          </div>
        </div>

        {/* ── Sağ sütun — telefon + floating badge'ler ── */}
        <div style={{
          flex: 1,
          display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
          padding: '60px 0 0',
          position: 'relative',
        }}>
          {/* TELEFON */}
          <div style={{
            width: 310, borderRadius: '40px 40px 0 0',
            background: '#f8f5ff',
            boxShadow: '0 -24px 80px rgba(0,0,0,0.28)',
            border: '2px solid rgba(255,255,255,0.25)',
            borderBottom: 'none',
            overflow: 'hidden',
          }}>
            {/* notch */}
            <div style={{ height: 34, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8f5ff' }}>
              <div style={{ width: 90, height: 10, borderRadius: 8, background: '#e2d9f3' }} />
            </div>

            {/* Profile content */}
            <div style={{ padding: '16px 18px 32px', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {/* avatar + name */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, paddingBottom: 8 }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: `linear-gradient(135deg,${BRAND},#c026d3)`, boxShadow: `0 0 0 4px rgba(107,45,107,0.2)` }} />
                <div>
                  <div style={{ fontWeight: 800, fontSize: 15, color: DARK, textAlign: 'center' }}>Alexandra Silva</div>
                  <div style={{ fontSize: 12, color: GRAY, textAlign: 'center', marginTop: 2 }}>Content Creator</div>
                </div>
                {/* social icons */}
                <div style={{ display: 'flex', gap: 8 }}>
                  {['📸', '🎬', '🎵', '💼', '🐦'].map(i => (
                    <div key={i} style={{ width: 32, height: 32, background: 'rgba(107,45,107,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>{i}</div>
                  ))}
                </div>
              </div>

              {/* Products */}
              <div style={{ fontWeight: 700, fontSize: 10, letterSpacing: '0.08em', color: GRAY }}>ÜRÜNLER</div>
              {[
                { e: '📘', n: 'Creator Kursim', p: '₺299', sub: 'Her şeyi öğren', hot: true },
                { e: '📅', n: '1:1 Danışmanlık', p: '₺99', sub: '30 dk seans' },
                { e: '⬇️', n: 'Rehber İndir', p: '₺49', sub: 'PDF içerik' },
              ].map(({ e, n, p, sub, hot }) => (
                <div key={n} style={{ background: WHITE, borderRadius: 14, padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: BRAND, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>{e}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    {hot && <span style={{ fontSize: 8, fontWeight: 700, background: '#fef3c7', color: '#92400e', padding: '1px 5px', borderRadius: 4, display: 'inline-block', marginBottom: 2 }}>EN ÇOK SATAN ⭐</span>}
                    <div style={{ fontWeight: 700, fontSize: 13, color: DARK, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{n}</div>
                    <div style={{ fontSize: 11, color: GRAY }}>{sub}</div>
                  </div>
                  <div style={{ fontWeight: 800, fontSize: 14, color: BRAND, flexShrink: 0 }}>{p}</div>
                </div>
              ))}

              {/* View store button */}
              <div style={{ background: BRAND, borderRadius: 14, padding: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                <span style={{ fontWeight: 700, fontSize: 14, color: WHITE }}>Mağazayı Görüntüle</span>
                <span style={{ color: WHITE, fontSize: 16 }}>→</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          SOCIAL PROOF – "The Best Creators Use Stan"
      ══════════════════════════════════════════════ */}
      <section style={{ background: WHITE, padding: '72px 40px 64px', textAlign: 'center' }}>
        <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', color: GRAY, textTransform: 'uppercase', marginBottom: 20 }}>
          En İyi Creator'lar LinkFlow Kullanıyor 🚀
        </p>
        <h2 style={{ fontSize: 'clamp(26px,4vw,42px)', fontWeight: 900, letterSpacing: '-1.2px', color: DARK, marginBottom: 12 }}>
          Takipçilerini Müşteriye<br />Dönüştür
        </h2>
        <p style={{ fontSize: 16, color: GRAY, lineHeight: 1.65, maxWidth: 420, margin: '0 auto 48px' }}>
          10.000&apos;den fazla creator LinkFlow ile gelir elde ediyor.
        </p>

        {/* Avatar strip */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginBottom: 48, flexWrap: 'wrap' }}>
          {[
            ['#7c3aed', 'C'], ['#db2777', 'A'], ['#0ea5e9', 'M'],
            ['#16a34a', 'T'], ['#ea580c', 'B'], ['#8b5cf6', 'Z'],
          ].map(([bg, l], i) => (
            <div key={i} style={{ width: 52, height: 52, borderRadius: '50%', background: String(bg), display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 18, color: WHITE, boxShadow: '0 4px 12px rgba(0,0,0,0.12)' }}>
              {String(l)}
            </div>
          ))}
        </div>

        {/* Stats */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 64, flexWrap: 'wrap' }}>
          {[['10.000+', 'Aktif Creator'], ['₺2M+', 'Toplam Gelir'], ['4.9 ★', 'Ortalama Puan']].map(([v, l]) => (
            <div key={l} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 36, fontWeight: 900, color: DARK, letterSpacing: '-1.5px' }}>{v}</div>
              <div style={{ fontSize: 14, color: GRAY, marginTop: 4 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          HOW IT WORKS
      ══════════════════════════════════════════════ */}
      <section id="how" style={{ background: '#faf8ff', padding: '80px 40px', textAlign: 'center' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', color: BRAND, textTransform: 'uppercase', marginBottom: 10 }}>Nasıl Çalışır?</p>
          <h2 style={{ fontSize: 'clamp(28px,4vw,44px)', fontWeight: 900, letterSpacing: '-1.5px', color: DARK, marginBottom: 48 }}>3 Adımda Başla</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px,1fr))', border: `1px solid ${BORDER}`, borderRadius: 20, overflow: 'hidden' }}>
            {[
              { n: '01', t: 'Üye Ol', d: 'Dakikalar içinde hesabını oluştur. Kredi kartı gerekmez.' },
              { n: '02', t: 'Sayfanı Kur', d: 'Linklerini ekle, ürünlerini yükle, görünümünü özelleştir.' },
              { n: '03', t: 'Paylaş & Kazan', d: 'Tek linki biyografine ekle ve kazanmaya hemen başla.' },
            ].map(({ n, t, d }, i) => (
              <div key={n} style={{ padding: '40px 32px', background: WHITE, borderRight: i < 2 ? `1px solid ${BORDER}` : 'none', textAlign: 'left' }}>
                <div style={{ fontSize: 44, fontWeight: 900, color: BRAND, opacity: 0.15, lineHeight: 1, marginBottom: 20 }}>{n}</div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: DARK, marginBottom: 10 }}>{t}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: GRAY }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          FEATURES
      ══════════════════════════════════════════════ */}
      <section id="features" style={{ background: WHITE, padding: '80px 40px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <p style={{ textAlign: 'center', fontSize: 13, fontWeight: 700, letterSpacing: '0.08em', color: BRAND, textTransform: 'uppercase', marginBottom: 10 }}>Özellikler</p>
          <h2 style={{ textAlign: 'center', fontSize: 'clamp(28px,4vw,44px)', fontWeight: 900, letterSpacing: '-1.5px', color: DARK, marginBottom: 10 }}>İhtiyacın Olan Her Şey</h2>
          <p style={{ textAlign: 'center', fontSize: 16, color: GRAY, maxWidth: 440, margin: '0 auto 48px', lineHeight: 1.65 }}>
            Gelir elde etmek için gereken tüm araçlar tek platformda.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', border: `1px solid ${BORDER}`, borderRadius: 20, overflow: 'hidden' }}>
            {[
              { i: '🔗', t: 'Sınırsız Link', d: 'Sosyal medya, web sitesi, podcast — istediğin kadar ekle.' },
              { i: '🛍️', t: 'Dijital Mağaza', d: 'E-kitap, kurs, danışmanlık — hepsini tek yerden sat.' },
              { i: '📊', t: 'Canlı Analitik', d: 'Tıklanma, gelir ve ziyaretçi verilerini anlık izle.' },
              { i: '⚡', t: 'Ultra Hızlı', d: 'Edge altyapısı ile küresel ölçekte hızlı yükleme.' },
              { i: '💳', t: 'Güvenli Ödeme', d: 'Kredi kartı ve havale ile entegre ödeme sistemi.' },
              { i: '🎨', t: 'Tam Özelleştirme', d: 'Renk, font, sıralama — sayfanı istediğin gibi tasarla.' },
            ].map(({ i, t, d }, idx) => (
              <div key={t} style={{
                padding: '32px 28px', background: WHITE,
                borderRight: idx % 3 !== 2 ? `1px solid ${BORDER}` : 'none',
                borderBottom: idx < 3 ? `1px solid ${BORDER}` : 'none',
              }}>
                <span style={{ fontSize: 28, display: 'block', marginBottom: 16 }}>{i}</span>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: DARK, marginBottom: 8 }}>{t}</h3>
                <p style={{ fontSize: 13, lineHeight: 1.65, color: GRAY }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CTA
      ══════════════════════════════════════════════ */}
      <section style={{ background: BRAND, padding: '90px 40px', textAlign: 'center', color: WHITE }}>
        <h2 style={{ fontSize: 'clamp(32px,5vw,56px)', fontWeight: 900, letterSpacing: '-2px', marginBottom: 14 }}>
          Hemen Başla.<br />Ücretsiz.
        </h2>
        <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.68)', marginBottom: 36, lineHeight: 1.6 }}>
          Bugün mağazanı kur, takipçilerini müşteriye dönüştür.
        </p>
        <Link href="/kayit" style={{ display: 'inline-block', padding: '18px 40px', borderRadius: 50, background: GREEN, color: DARK, fontWeight: 800, fontSize: 18, textDecoration: 'none', boxShadow: '0 6px 28px rgba(0,208,132,0.35)' }}>
          Devam Et →
        </Link>
        <p style={{ marginTop: 14, fontSize: 13, color: 'rgba(255,255,255,0.4)' }}>Kredi kartı gerekmez</p>
      </section>

      {/* ══════════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════════ */}
      <footer style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, padding: '20px 40px', borderTop: `1px solid ${BORDER}` }}>
        <span style={{ fontSize: 16, fontWeight: 800, color: DARK, letterSpacing: '-0.4px' }}>LinkFlow</span>
        <div style={{ display: 'flex', gap: 24 }}>
          {[['Gizlilik', '/gizlilik'], ['Şartlar', '/sartlar'], ['Destek', '/destek'], ['İletişim', '/iletisim']].map(([l, h]) => (
            <Link key={l} href={h} style={{ fontSize: 13, color: GRAY, textDecoration: 'none' }}>{l}</Link>
          ))}
        </div>
        <span style={{ fontSize: 13, color: '#d1d5db' }}>© 2026 LinkFlow</span>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { font-family: 'Plus Jakarta Sans', sans-serif; -webkit-font-smoothing: antialiased; }
        #features, #how { scroll-margin-top: 64px; }
        a { color: inherit; transition: opacity 0.15s; }
        a:hover { opacity: 0.82; }
      `}</style>
    </div>
  );
}