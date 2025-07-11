// Utilidad para normalizar texto: elimina tildes/acentos y pasa a minúsculas
export function normalizarTexto(texto) {
  return texto
    .normalize('NFD')
    .replace(/([\u0300-\u036f])/g, '') // Elimina los diacríticos
    .toLowerCase();
}
