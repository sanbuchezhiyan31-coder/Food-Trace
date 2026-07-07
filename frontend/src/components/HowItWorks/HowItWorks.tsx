const steps = ['Capture product origin', 'Track movement in real time', 'Trigger safety actions']

function HowItWorks() {
  return (
    <section style={styles.section}>
      <h2 style={styles.title}>How It Works</h2>
      <ol style={styles.list}>
        {steps.map((step) => (
          <li key={step} style={styles.item}>{step}</li>
        ))}
      </ol>
    </section>
  )
}

const styles = {
  section: { padding: '3rem 2rem', background: '#f8fafc' },
  title: { fontSize: '1.8rem', marginBottom: '1rem', color: '#0f172a' },
  list: { paddingLeft: '1.25rem', color: '#334155', lineHeight: 1.7 },
  item: { marginBottom: '0.5rem' },
}

export default HowItWorks
