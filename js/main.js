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
 * Utilitário para gerar link direto do WhatsApp com mensagem codificada para cada modelo
 * @param {string} modeloNome - Nome do modelo de chinelo
 * @returns {string} URL formatada para a API do WhatsApp
 */
function gerarLinkWhatsApp(modeloNome) {
  const mensagem = `Olá, Aline! Gostei muito do modelo ${modeloNome} que vi no site Foco no Chinelo e gostaria de saber mais sobre como encomendar.`;
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

// 2. Catálogo Oficial dos 7 Modelos de Chinelos Personalizados
const PRODUTOS = [
  {
    id: "01",
    nome: "Floral Verde",
    imagem: "assets/images/produtos/chinelo_01.png",
    descricao: "Chinelo verde com bordados florais vermelhos e detalhes em pérolas brancas.",
    alt: "Chinelo verde com bordados florais vermelhos e detalhes em pérolas brancas - Modelo Floral Verde",
    badge: "Feito sob encomenda",
    largura: 331,
    altura: 554
  },
  {
    id: "02",
    nome: "Lavanda com Pérolas",
    imagem: "assets/images/produtos/chinelo_02.png",
    descricao: "Chinelo lilás com delicados bordados florais em pérolas e contas claras.",
    alt: "Chinelo lilás com delicados bordados florais em pérolas e contas claras - Modelo Lavanda com Pérolas",
    badge: "Feito sob encomenda",
    largura: 330,
    altura: 554
  },
  {
    id: "03",
    nome: "Rosa com Pérolas e Strass",
    imagem: "assets/images/produtos/chinelo_03.png",
    descricao: "Chinelo rosa mesclado com bordados brilhantes e pérolas.",
    alt: "Chinelo rosa mesclado com bordados brilhantes e pérolas - Modelo Rosa com Pérolas e Strass",
    badge: "Feito sob encomenda",
    largura: 309,
    altura: 554
  },
  {
    id: "04",
    nome: "Verde-Lima Floral",
    imagem: "assets/images/produtos/chinelo_04.png",
    descricao: "Chinelo verde-lima com flores artesanais bordadas em tons claros.",
    alt: "Chinelo verde-lima com flores artesanais bordadas em tons claros - Modelo Verde-Lima Floral",
    badge: "Feito sob encomenda",
    largura: 323,
    altura: 554
  },
  {
    id: "05",
    nome: "Preto com Dourado e Pérolas",
    imagem: "assets/images/produtos/chinelo_05.png",
    descricao: "Chinelo preto com bordados dourados, pérolas e detalhes verdes.",
    alt: "Chinelo preto com bordados dourados, pérolas e detalhes verdes - Modelo Preto com Dourado e Pérolas",
    badge: "Feito sob encomenda",
    largura: 442,
    altura: 638
  },
  {
    id: "06",
    nome: "Preto com Flores Douradas",
    imagem: "assets/images/produtos/chinelo_06.png",
    descricao: "Chinelo preto com flores bordadas em preto e dourado.",
    alt: "Chinelo preto com flores bordadas em preto e dourado - Modelo Preto com Flores Douradas",
    badge: "Feito sob encomenda",
    largura: 417,
    altura: 638
  },
  {
    id: "07",
    nome: "Branco com Pérolas",
    imagem: "assets/images/produtos/chinelo_07.png",
    descricao: "Chinelo branco com bordados delicados em pérolas e detalhes brilhantes.",
    alt: "Chinelo branco com bordados delicados em pérolas e detalhes brilhantes - Modelo Branco com Pérolas",
    badge: "Feito sob encomenda",
    largura: 439,
    altura: 638
  }
];

/**
 * Renderiza dinamicamente os cards dos produtos na vitrine
 */
function renderizarVitrine() {
  const container = document.getElementById('produtos-grid');
  if (!container) return;

  container.innerHTML = PRODUTOS.map(produto => `
    <article class="produto-card" id="card-modelo-${produto.id}">
      <div class="produto-media">
        <span class="produto-badge">${produto.badge}</span>
        <img src="${produto.imagem}" 
             alt="${produto.alt}" 
             class="produto-img" 
             width="${produto.largura}" 
             height="${produto.altura}" 
             loading="lazy" 
             decoding="async">
      </div>
      <div class="produto-info">
        <div class="produto-header-info">
          <h3 class="produto-nome">${produto.nome}</h3>
          <p class="produto-descricao">${produto.descricao}</p>
        </div>
        <div class="produto-action">
          <a href="${gerarLinkWhatsApp(produto.nome)}" 
             class="btn btn-produto-whatsapp" 
             target="_blank" 
             rel="noopener noreferrer" 
             aria-label="Consultar modelo ${produto.nome} no WhatsApp">
            <svg class="whatsapp-icon-sm" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.301-.15-1.78-.879-2.056-.98-.276-.1-.477-.15-.678.15-.2.301-.778.98-.954 1.18-.176.2-.352.226-.653.075-.301-.15-1.272-.469-2.423-1.496-.896-.799-1.501-1.786-1.677-2.087-.176-.301-.019-.464.132-.614.136-.135.301-.352.452-.527.15-.176.2-.301.301-.502.101-.2.05-.376-.025-.527-.075-.15-.678-1.633-.929-2.236-.245-.588-.493-.508-.678-.517-.176-.01-.376-.01-.577-.01-.2 0-.527.075-.803.376s-1.054 1.03-1.054 2.513 1.079 2.915 1.23 3.116c.15.2 2.124 3.243 5.145 4.549.719.311 1.28.497 1.718.636.723.23 1.381.197 1.901.12.579-.087 1.78-.728 2.031-1.431.251-.703.251-1.306.176-1.431-.076-.125-.276-.2-.577-.35z"/>
              <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.174L2 22l4.981-1.396A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.624 0-3.136-.487-4.407-1.326l-.316-.21-2.957.828.84-2.883-.228-.328A8.163 8.163 0 013.8 12c0-4.522 3.678-8.2 8.2-8.2 4.522 0 8.2 3.678 8.2 8.2 0 4.522-3.678 8.2-8.2 8.2z"/>
            </svg>
            <span>Consultar este modelo</span>
          </a>
        </div>
      </div>
    </article>
  `).join('');
}

// 3. Inicialização quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  // Configuração dinâmica do botão principal da Hero
  const btnHeroEncomenda = document.getElementById('btn-hero-encomenda');
  if (btnHeroEncomenda) {
    btnHeroEncomenda.href = gerarLinkWhatsAppHero();
  }

  // Renderização da vitrine com os 7 modelos
  renderizarVitrine();

  // Atualização automática do ano de copyright
  const elAno = document.getElementById('ano-copyright');
  if (elAno) {
    elAno.textContent = new Date().getFullYear();
  }

  console.log(`${CLIENT_CONFIG.storeName} - Vitrine inicializada com ${PRODUTOS.length} modelos.`);
});
