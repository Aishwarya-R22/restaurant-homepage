export default function SectionTitle({ eyebrow, title, center = false }) {
  return <div className={`section-title ${center ? 'center' : ''}`}><span>{eyebrow}</span><h2>{title}</h2><i /></div>
}
