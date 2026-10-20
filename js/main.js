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

/**
 * Utilitário para gerar link do WhatsApp para o botão principal da Hero (encomenda geral)
 * @returns {string} URL formatada para a API do WhatsApp
 */
function gerarLinkWhatsAppHero() {
  const mensagem = `Olá, Aline! Vi o site Foco no Chinelo e gostaria de fazer uma encomenda personalizada.`;
  const textoCodificado = encodeURIComponent(mensagem);
  return `https://wa.me/${CLIENT_CONFIG.whatsappNumber}?text=${textoCodificado}`;
}

// 2. Inicialização quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  // Configuração dinâmica do botão da Hero
  const btnHeroEncomenda = document.getElementById('btn-hero-encomenda');
  if (btnHeroEncomenda) {
    btnHeroEncomenda.href = gerarLinkWhatsAppHero();
  }

  console.log(`${CLIENT_CONFIG.storeName} - Projeto inicializado.`);
});
