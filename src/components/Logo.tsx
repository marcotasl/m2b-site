import Image from "next/image";

type Variant = "light" | "dark";

export default function Logo({
  variant = "light",
  className = "",
  height = 36,
}: {
  variant?: Variant;
  className?: string;
  height?: number;
}) {
  const src =
    variant === "light"
      ? "/logos/m2b-default-branco.svg"
      : "/logos/m2b-default-preto.svg";

  return (
    <Image
      src={src}
      alt="M2B Projetos e Consultoria"
      height={height}
      width={Math.round((height * 646) / 165)}
      priority
      className={className}
    />
  );
}
