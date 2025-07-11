// Utilidad para normalizar texto: elimina tildes/acentos y pasa a minúsculas
export function normalizarTexto(texto) {
  return texto
    .normalize('NFD')
    .replace(/[ -]|[\u0300-\u036f]/g, c => c.normalize('NFC')) // Normaliza caracteres básicos
    .replace(/([\u0300-\u036f])/g, '') // Elimina los diacríticos
    .toLowerCase();
}
