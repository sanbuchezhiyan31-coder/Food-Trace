const products = [
  { name: 'Traceable Produce', description: 'End-to-end visibility for leafy greens' },
  { name: 'Cold Chain Monitor', description: 'Temperature alerts across storage and transit' },
]

function FeaturedProducts() {
  return (
    <section id="products" style={styles.section}>
      <h2 style={styles.title}>Featured Products</h2>
      <div style={styles.grid}>
        {products.map((product) => (
          <article key={product.name} style={styles.card}>
            <h3 style={styles.cardTitle}>{product.name}</h3>
            <p style={styles.cardText}>{product.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

const styles = {
  section: { padding: '3rem 2rem', background: '#ffffff' },
  title: { fontSize: '1.8rem', marginBottom: '1.25rem', color: '#0f172a' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' },
  card: { padding: '1.25rem', borderRadius: '0.75rem', background: '#eff6ff' },
  cardTitle: { margin: '0 0 0.25rem', color: '#1d4ed8' },
  cardText: { margin: 0, color: '#334155' },
}

export default FeaturedProducts
