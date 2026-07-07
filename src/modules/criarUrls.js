export function criarUrls(id) {
  const base =
    "https://raw.githubusercontent.com/ffsala2002-a11y/produtos-imagens/main/img-produtos";
  
  return Array.from({ length: 4 }, (_, i) => {
    const numero = String(i + 1).padStart(2, "0");
    return `${base}/${id}_${numero}.webp`;
  });
}