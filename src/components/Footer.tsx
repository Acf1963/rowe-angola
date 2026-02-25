export default function Footer() {
  return (
    <footer
      className="
        w-full 
        py-8 
        text-center 
        text-white 
        bg-transparent 
        backdrop-blur-sm 
        border-t border-white/10
      "
    >
      <p className="text-sm opacity-80">
        © {new Date().getFullYear()} ROWE Angola — Todos os direitos reservados.
      </p>

      <p className="text-xs opacity-60 mt-2">
        HIGHTEC Lubrificantes Premium • Tecnologia Alemã
      </p>
    </footer>
  );
}
