import { supabaseClient } from '@/lib/supabase';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ExternalLink, ShoppingBag, User, Globe } from 'lucide-react';

interface Profile {
    id: string;
    username: string;
    full_name: string | null;
    bio: string | null;
    avatar_url: string | null;
}

interface LinkItem {
    id: string;
    title: string;
    url: string;
    icon: string | null;
    is_active: boolean;
}

interface Product {
    id: string;
    title: string;
    description: string | null;
    price: number | null;
    currency: string | null;
    image_url: string | null;
    url: string;
    is_active: boolean;
}

export default async function UserProfilePage({
    params,
}: {
    params: Promise<{ username: string }>;
}) {
    const { username } = await params;

    // Fetch profile
    const { data: profile, error: profileError } = await supabaseClient
        .from('profiles')
        .select('*')
        .eq('username', username)
        .single();

    if (profileError || !profile) {
        return <NotFoundPage username={username} />;
    }

    // Fetch links and products in parallel
    const [{ data: links }, { data: products }] = await Promise.all([
        supabaseClient
            .from('links')
            .select('*')
            .eq('user_id', profile.id)
            .eq('is_active', true)
            .order('created_at', { ascending: true }),
        supabaseClient
            .from('products')
            .select('*')
            .eq('user_id', profile.id)
            .eq('is_active', true)
            .order('created_at', { ascending: true }),
    ]);

    return (
        <div style={styles.pageWrapper}>
            {/* Animated background */}
            <div style={styles.bgGradient} />
            <div style={styles.bgOrb1} />
            <div style={styles.bgOrb2} />

            <main style={styles.container}>
                {/* ── Profile Section ── */}
                <section style={styles.profileSection}>
                    <div style={styles.avatarWrapper}>
                        {profile.avatar_url ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                                src={profile.avatar_url}
                                alt={profile.full_name || profile.username}
                                style={styles.avatar}
                            />
                        ) : (
                            <div style={styles.avatarPlaceholder}>
                                <User size={40} color="#fff" />
                            </div>
                        )}
                        <div style={styles.avatarRing} />
                    </div>

                    <h1 style={styles.displayName}>
                        {profile.full_name || profile.username}
                    </h1>
                    <p style={styles.username}>@{profile.username}</p>

                    {profile.bio && (
                        <p style={styles.bio}>{profile.bio}</p>
                    )}
                </section>

                {/* ── Links Section ── */}
                {links && links.length > 0 && (
                    <section style={styles.linksSection}>
                        {links.map((link: LinkItem) => (
                            <a
                                key={link.id}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={styles.linkButton}
                                className="link-btn"
                            >
                                <Globe size={18} style={{ flexShrink: 0 }} />
                                <span style={styles.linkTitle}>{link.title}</span>
                                <ExternalLink size={14} style={styles.linkIcon} />
                            </a>
                        ))}
                    </section>
                )}

                {/* ── Products Section ── */}
                {products && products.length > 0 && (
                    <section style={styles.productsSection}>
                        <div style={styles.sectionHeader}>
                            <ShoppingBag size={18} />
                            <h2 style={styles.sectionTitle}>Ürünler</h2>
                        </div>

                        <div style={styles.productsGrid}>
                            {products.map((product: Product) => (
                                <a
                                    key={product.id}
                                    href={product.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={styles.productCard}
                                    className="product-card"
                                >
                                    {product.image_url ? (
                                        // eslint-disable-next-line @next/next/no-img-element
                                        <img
                                            src={product.image_url}
                                            alt={product.title}
                                            style={styles.productImage}
                                        />
                                    ) : (
                                        <div style={styles.productImagePlaceholder}>
                                            <ShoppingBag size={32} color="#a78bfa" />
                                        </div>
                                    )}

                                    <div style={styles.productInfo}>
                                        <h3 style={styles.productTitle}>{product.title}</h3>
                                        {product.description && (
                                            <p style={styles.productDesc}>{product.description}</p>
                                        )}
                                        {product.price != null && (
                                            <span style={styles.productPrice}>
                                                {product.price.toLocaleString('tr-TR', {
                                                    style: 'currency',
                                                    currency: product.currency || 'TRY',
                                                })}
                                            </span>
                                        )}
                                    </div>
                                    <div style={styles.productBadge}>
                                        <ExternalLink size={12} />
                                    </div>
                                </a>
                            ))}
                        </div>
                    </section>
                )}

                {/* ── Footer ── */}
                <footer style={styles.footer}>
                    <p style={styles.footerText}>
                        Powered by{' '}
                        <span style={styles.footerBrand}>LinkFlow</span>
                    </p>
                </footer>
            </main>

            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Inter', sans-serif; }
        .link-btn {
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease !important;
        }
        .link-btn:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 8px 30px rgba(139, 92, 246, 0.35) !important;
          background: linear-gradient(135deg, rgba(139,92,246,0.25), rgba(236,72,153,0.15)) !important;
        }
        .product-card {
          transition: transform 0.2s ease, box-shadow 0.2s ease !important;
        }
        .product-card:hover {
          transform: translateY(-3px) !important;
          box-shadow: 0 12px 40px rgba(139, 92, 246, 0.3) !important;
        }
      `}</style>
        </div>
    );
}

function NotFoundPage({ username }: { username: string }) {
    return (
        <div style={styles.pageWrapper}>
            <div style={styles.bgGradient} />
            <div style={styles.bgOrb1} />
            <div style={styles.bgOrb2} />

            <div style={styles.notFoundContainer}>
                <div style={styles.notFoundIcon}>🔍</div>
                <h1 style={styles.notFoundTitle}>Kullanıcı Bulunamadı</h1>
                <p style={styles.notFoundDesc}>
                    <strong>@{username}</strong> kullanıcısı henüz LinkFlow&apos;a katılmamış.
                </p>
                <Link href="/" style={styles.notFoundBtn}>
                    Ana Sayfaya Dön
                </Link>
            </div>

            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Inter', sans-serif; }
      `}</style>
        </div>
    );
}

// ── Inline styles ──────────────────────────────────────────────
const styles: Record<string, React.CSSProperties> = {
    pageWrapper: {
        minHeight: '100vh',
        background: '#0d0d1a',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
    },
    bgGradient: {
        position: 'fixed',
        inset: 0,
        background: 'radial-gradient(ellipse at top, #1a0533 0%, #0d0d1a 60%)',
        zIndex: 0,
    },
    bgOrb1: {
        position: 'fixed',
        top: '-20%',
        left: '-10%',
        width: '60vw',
        height: '60vw',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)',
        zIndex: 0,
        pointerEvents: 'none',
    },
    bgOrb2: {
        position: 'fixed',
        bottom: '-20%',
        right: '-10%',
        width: '50vw',
        height: '50vw',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(236,72,153,0.12) 0%, transparent 70%)',
        zIndex: 0,
        pointerEvents: 'none',
    },
    container: {
        position: 'relative',
        zIndex: 1,
        width: '100%',
        maxWidth: '480px',
        padding: '48px 20px 40px',
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
    },

    // Profile
    profileSection: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        textAlign: 'center',
    },
    avatarWrapper: {
        position: 'relative',
        marginBottom: '8px',
    },
    avatar: {
        width: '96px',
        height: '96px',
        borderRadius: '50%',
        objectFit: 'cover',
        border: '3px solid rgba(139,92,246,0.6)',
        position: 'relative',
        zIndex: 1,
    },
    avatarPlaceholder: {
        width: '96px',
        height: '96px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 1,
    },
    avatarRing: {
        position: 'absolute',
        inset: '-4px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #7c3aed, #ec4899, #7c3aed)',
        zIndex: 0,
        filter: 'blur(4px)',
        opacity: 0.7,
    },
    displayName: {
        fontSize: '24px',
        fontWeight: 700,
        color: '#ffffff',
        letterSpacing: '-0.3px',
    },
    username: {
        fontSize: '14px',
        color: 'rgba(255,255,255,0.45)',
        fontWeight: 400,
    },
    bio: {
        fontSize: '14px',
        color: 'rgba(255,255,255,0.7)',
        lineHeight: 1.6,
        maxWidth: '340px',
        marginTop: '4px',
    },

    // Links
    linksSection: {
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
    },
    linkButton: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '16px 20px',
        borderRadius: '16px',
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.1)',
        color: '#ffffff',
        textDecoration: 'none',
        backdropFilter: 'blur(10px)',
        cursor: 'pointer',
    },
    linkTitle: {
        flex: 1,
        fontSize: '15px',
        fontWeight: 500,
        textAlign: 'center',
    },
    linkIcon: {
        color: 'rgba(255,255,255,0.4)',
        flexShrink: 0,
    },

    // Products
    productsSection: {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
    },
    sectionHeader: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        color: 'rgba(255,255,255,0.5)',
    },
    sectionTitle: {
        fontSize: '13px',
        fontWeight: 600,
        textTransform: 'uppercase' as const,
        letterSpacing: '1px',
        color: 'rgba(255,255,255,0.5)',
    },
    productsGrid: {
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
    },
    productCard: {
        display: 'flex',
        gap: '14px',
        alignItems: 'center',
        padding: '14px',
        borderRadius: '16px',
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.08)',
        backdropFilter: 'blur(10px)',
        textDecoration: 'none',
        position: 'relative',
        overflow: 'hidden',
    },
    productImage: {
        width: '70px',
        height: '70px',
        borderRadius: '10px',
        objectFit: 'cover',
        flexShrink: 0,
    },
    productImagePlaceholder: {
        width: '70px',
        height: '70px',
        borderRadius: '10px',
        background: 'rgba(139,92,246,0.1)',
        border: '1px solid rgba(139,92,246,0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
    },
    productInfo: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        minWidth: 0,
    },
    productTitle: {
        fontSize: '15px',
        fontWeight: 600,
        color: '#ffffff',
        whiteSpace: 'nowrap' as const,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    productDesc: {
        fontSize: '12px',
        color: 'rgba(255,255,255,0.5)',
        lineHeight: 1.4,
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical' as const,
        overflow: 'hidden',
    },
    productPrice: {
        fontSize: '14px',
        fontWeight: 700,
        color: '#a78bfa',
        marginTop: '2px',
    },
    productBadge: {
        color: 'rgba(255,255,255,0.3)',
        flexShrink: 0,
    },

    // Footer
    footer: {
        textAlign: 'center',
        paddingTop: '8px',
    },
    footerText: {
        fontSize: '12px',
        color: 'rgba(255,255,255,0.2)',
    },
    footerBrand: {
        background: 'linear-gradient(135deg, #a78bfa, #ec4899)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontWeight: 600,
    },

    // Not Found
    notFoundContainer: {
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '16px',
        minHeight: '100vh',
        padding: '20px',
        textAlign: 'center',
    },
    notFoundIcon: {
        fontSize: '72px',
        marginBottom: '8px',
    },
    notFoundTitle: {
        fontSize: '28px',
        fontWeight: 700,
        color: '#ffffff',
    },
    notFoundDesc: {
        fontSize: '16px',
        color: 'rgba(255,255,255,0.55)',
        lineHeight: 1.6,
        maxWidth: '320px',
    },
    notFoundBtn: {
        marginTop: '8px',
        padding: '12px 28px',
        borderRadius: '12px',
        background: 'linear-gradient(135deg, #7c3aed, #ec4899)',
        color: '#ffffff',
        fontWeight: 600,
        fontSize: '15px',
        textDecoration: 'none',
        display: 'inline-block',
    },
};
