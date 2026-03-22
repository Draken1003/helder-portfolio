export default function TechIcon({ name, variant = "plain", size = 24 }) {
  return (
    <i className={`devicon-${name}-${variant}`} style={{ fontSize: size }}></i>
  );
}
