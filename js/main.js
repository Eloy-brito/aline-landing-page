/**
 * Foco no Chinelo - Script Principal
 * Responsável: Aline Araújo | Birigui - SP
 */

// 1. Constantes e Dados Oficiais da Cliente
const CLIENT_CONFIG = {
  storeName: "Foco no Chinelo",
  owner: "Aline Araújo",
  city: "Birigui - SP",
  email: "lyne.social@gmail.com",
  whatsappNumber: "5518988065804"
};

/**
 * Utilitário para gerar link direto do WhatsApp com mensagem codificada
 * @param {string} modeloNome - Nome ou identificador do produto
 * @returns {string} URL formatada para a API do WhatsApp
 */
function gerarLinkWhatsApp(modeloNome) {
  const mensagem = `Olá, Aline! Gostei muito do ${modeloNome} que vi no site Foco no Chinelo e gostaria de encomendar.`;
  const textoCodificado = encodeURIComponent(mensagem);
  return `https://wa.me/${CLIENT_CONFIG.whatsappNumber}?text=${textoCodificado}`;
}

// 2. Inicialização quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  // Estrutura pronta para os próximos passos (renderização ou eventos da vitrine)
  console.log(`${CLIENT_CONFIG.storeName} - Projeto inicializado.`);
});
