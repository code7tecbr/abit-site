export default function DivIcone(icone, texto1, texto2) {
  return (
    <div className="flex flex-col items-center justify-center">
      {icone}
      <label className="text-xs" style={{ color: "var(--color-gold-deep)" }}>{texto1}</label>
      <label className="text-xs" >{texto2}</label>
    </div>
  );
}
