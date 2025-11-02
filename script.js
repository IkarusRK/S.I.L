


//  MOCKDATA (Banco local)
const SINAIS = [
    { id: 1, termo: 'Algoritmo', descricao: 'Sequência finita de instruções para resolver um problema', categoria: 'Lógica', videoUrl: 'video-algoritmo.mp4' },
    { id: 2, termo: 'Array', descricao: 'Estrutura de dados que armazena elementos em sequência', categoria: 'Estruturas de Dados', videoUrl: 'video-array.mp4' },
    { id: 3, termo: 'Banco de Dados', descricao: 'Sistema organizado para armazenar e gerenciar informações', categoria: 'Banco de Dados', videoUrl: 'video-bd.mp4' },
    { id: 4, termo: 'Compilador', descricao: 'Programa que traduz código-fonte em código executável', categoria: 'Programação', videoUrl: 'video-compilador.mp4' },
    { id: 5, termo: 'Debug', descricao: 'Processo de encontrar e corrigir erros em programas', categoria: 'Programação', videoUrl: 'video-debug.mp4' },
    { id: 6, termo: 'Firewall', descricao: 'Sistema de segurança que controla o tráfego de rede', categoria: 'Segurança', videoUrl: 'video-firewall.mp4' },
    { id: 7, termo: 'Git', descricao: 'Sistema de controle de versão distribuído', categoria: 'Ferramentas', videoUrl: 'video-git.mp4' },
    { id: 8, termo: 'HTML', descricao: 'Linguagem de marcação para criar páginas web', categoria: 'Web', videoUrl: 'video-html.mp4' },
    { id: 9, termo: 'Interface', descricao: 'Ponto de interação entre sistemas ou usuário e sistema', categoria: 'Programação', videoUrl: 'video-interface.mp4' },
    { id: 10, termo: 'JavaScript', descricao: 'Linguagem de programação para web', categoria: 'Programação', videoUrl: 'video-js.mp4' },
    { id: 11, termo: 'Loop', descricao: 'Estrutura de repetição que executa código múltiplas vezes', categoria: 'Lógica', videoUrl: 'video-loop.mp4' },
    { id: 12, termo: 'Malware', descricao: 'Software malicioso projetado para danificar sistemas', categoria: 'Segurança', videoUrl: 'video-malware.mp4' },
    { id: 13, termo: 'Python', descricao: 'Linguagem de programação de alto nível', categoria: 'Programação', videoUrl: 'video-python.mp4' },
    { id: 14, termo: 'SQL', descricao: 'Linguagem para consultar bancos de dados relacionais', categoria: 'Banco de Dados', videoUrl: 'video-sql.mp4' },
    { id: 15, termo: 'Variável', descricao: 'Espaço na memória para armazenar dados', categoria: 'Lógica', videoUrl: 'video-variavel.mp4' }
];

const USUARIOS_MOCK = [
    { id: 1, nome: 'João Silva', email: 'joao@email.com', tipo: 'Intérprete' },
    { id: 2, nome: 'Maria Santos', email: 'maria@email.com', tipo: 'Intérprete' },
    { id: 3, nome: 'Pedro Costa', email: 'pedro@email.com', tipo: 'Intérprete' },
    { id: 4, nome: 'Ana Oliveira', email: 'ana@email.com', tipo: 'Intérprete' },
    { id: 5, nome: 'Admin Sistema', email: 'admin@sil.com', tipo: 'Administrador' }
];

// --Controlador de Temas
const ThemeManager = {
    currentTheme: 'light',

    init() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        this.setTheme(savedTheme);
    },

    setTheme(theme) {
        this.currentTheme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        this.updateToggleButton();
    },

    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
    },

    addToggleButton() {
        const headerContent = document.querySelector('.header-content');
        if (headerContent && !document.getElementById('theme-toggle-btn')) {
            const button = document.createElement('button');
            button.id = 'theme-toggle-btn';
            button.className = 'theme-toggle';
            button.onclick = () => this.toggleTheme();
            headerContent.appendChild(button);
            this.updateToggleButton();
        }
    },

    updateToggleButton() {
        const button = document.getElementById('theme-toggle-btn');
        if (!button) return;

        if (this.currentTheme === 'light') {
            button.innerHTML = `
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z"/>
                </svg>
                <span>Escuro</span>
            `;
        } else {
            button.innerHTML = `
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M3.36,17L5.12,13.23C5.26,14 5.53,14.78 5.95,15.5C6.37,16.24 6.91,16.86 7.5,17.37L3.36,17M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M20.64,17L16.5,17.36C17.09,16.85 17.62,16.22 18.04,15.5C18.46,14.77 18.73,14 18.87,13.21L20.64,17M12,22L9.59,18.56C10.33,18.83 11.14,19 12,19C12.82,19 13.63,18.83 14.37,18.56L12,22Z"/>
                </svg>
                <span>Claro</span>
            `;
        }
    }
};

const App = {
    currentUser: null,
    currentPage: 'login',
    
    init() {
        ThemeManager.init();
        const savedUser = localStorage.getItem('currentUser');
        if (savedUser) {
            this.currentUser = JSON.parse(savedUser);
            this.navigate('home');
        } else {
            this.navigate('login');
        }
    },

    login(email) {
        this.currentUser = { 
            email, 
            tipo: email === 'admin@sil.com' ? 'Administrador' : 'Intérprete' 
        };
        localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
        this.navigate('home');
    },

    logout() {
        this.currentUser = null;
        localStorage.removeItem('currentUser');
        this.navigate('login');
    },

    navigate(page) {
        this.currentPage = page;
        this.render();
    },

    render() {
        const header = document.getElementById('main-header');
        const nav = document.getElementById('main-nav');
        const content = document.getElementById('app-content');

        if (this.currentPage === 'login' || this.currentPage === 'cadastro') {
            header.classList.add('hidden');
        } else {
            header.classList.remove('hidden');
            nav.innerHTML = this.currentUser ? `
                <a href="#" onclick="App.navigate('home'); return false;">Início</a>
                <a href="#" onclick="App.navigate('favoritos'); return false;">Favoritos</a>
                <a href="#" onclick="App.navigate('historico'); return false;">Histórico</a>
                ${this.currentUser.tipo === 'Administrador' ? `
                    <a href="#" onclick="App.navigate('admin-sinais'); return false;">Gerenciar Sinais</a>
                    <a href="#" onclick="App.navigate('admin-usuarios'); return false;">Gerenciar Usuários</a>
                ` : ''}
                <a href="#" onclick="App.logout(); return false;">Sair</a>
            ` : '';
            
            setTimeout(() => ThemeManager.addToggleButton(), 50);
        }

        content.innerHTML = this.getPageContent();
        
        if (this.currentPage === 'home') {
            setTimeout(() => carregarTodosSinais(), 100);
        }
    },

    getPageContent() {
        switch(this.currentPage) {
            case 'login': return this.renderLogin();
            case 'cadastro': return this.renderCadastro();
            case 'home': return this.renderHome();
            case 'detalhe': return this.renderDetalhe();
            case 'favoritos': return this.renderFavoritos();
            case 'historico': return this.renderHistorico();
            case 'admin-sinais': return this.renderAdminSinais();
            case 'admin-usuarios': return this.renderAdminUsuarios();
            default: return '<div class="container"><h1>Página não encontrada</h1></div>';
        }
    },

    renderLogin() {
        return `
            <div class="auth-container">
                <div class="container">
                    <h1>Entrar no Sistema</h1>
                    <form onsubmit="handleLogin(event)">
                        <div class="form-group">
                            <label>E-mail</label>
                            <input type="email" id="login-email" required placeholder="seu@email.com">
                        </div>
                        <div class="form-group">
                            <label>Senha</label>
                            <input type="password" id="login-senha" required placeholder="Digite sua senha">
                        </div>
                        <button type="submit" class="btn">Entrar</button>
                        <p style="margin-top: 1rem; text-align: center;">
                            Não tem conta? <a href="#" onclick="App.navigate('cadastro'); return false;" style="color: var(--cor-primary); font-weight: bold;">Cadastre-se</a>
                        </p>
                        <p style="margin-top: 1rem; font-size: 0.9rem; color: #666;">
                            💡 Dica: Use qualquer e-mail para entrar ou <strong>admin@sil.com</strong> para acesso administrativo
                        </p>
                    </form>
                </div>
            </div>
        `;
    },

    renderCadastro() {
        return `
            <div class="auth-container">
                <div class="container">
                    <h1>Criar Conta</h1>
                    <form onsubmit="handleCadastro(event)">
                        <div class="form-group">
                            <label>Nome Completo</label>
                            <input type="text" id="cadastro-nome" required placeholder="Seu nome completo">
                        </div>
                        <div class="form-group">
                            <label>E-mail</label>
                            <input type="email" id="cadastro-email" required placeholder="seu@email.com">
                        </div>
                        <div class="form-group">
                            <label>Senha</label>
                            <input type="password" id="cadastro-senha" required minlength="6" placeholder="Mínimo 6 caracteres">
                        </div>
                        <div class="form-group">
                            <label>Confirmar Senha</label>
                            <input type="password" id="cadastro-confirma" required minlength="6" placeholder="Digite a senha novamente">
                        </div>
                        <button type="submit" class="btn">Cadastrar</button>
                        <p style="margin-top: 1rem; text-align: center;">
                            Já tem conta? <a href="#" onclick="App.navigate('login'); return false;" style="color: var(--cor-primary); font-weight: bold;">Entrar</a>
                        </p>
                    </form>
                </div>
            </div>
        `;
    },

    renderHome() {
        return `
            <div class="container">
                <div class="home-intro">
                    <h1>🤟 Sinais de Informática em Libras</h1>
                    <p>Explore nosso banco de dados com <strong>${SINAIS.length} sinais</strong> para facilitar o aprendizado</p>
                </div>
                
                <div class="search-box">
                    <input 
                        type="text" 
                        id="search-input" 
                        placeholder="🔍 Buscar sinal específico (ex: algoritmo, array, python...)" 
                        oninput="filtrarSinais()"
                    >
                    <p class="search-hint">
                        💡 Dica: Todos os sinais estão sendo exibidos. Use a busca para encontrar algo específico!
                    </p>
                </div>
                
                <h2 style="margin-bottom: 1rem; color: var(--cor-primary-dark);">
                    📚 Todos os Sinais Disponíveis
                </h2>
                
                <div id="sinais-container" class="sinais-grid"></div>
            </div>
        `;
    },

    renderDetalhe() {
        const id = parseInt(sessionStorage.getItem('detalheId'));
        const sinal = SINAIS.find(s => s.id === id);
        
        if (!sinal) {
            return `
                <div class="container">
                    <h1>Sinal não encontrado</h1>
                    <button class="btn" onclick="App.navigate('home')">← Voltar para Início</button>
                </div>
            `;
        }

        adicionarHistorico(id);
        const isFavorito = verificarFavorito(id);

        return `
            <div class="container">
                <h1>${sinal.termo}</h1>
                <div class="categoria-tag">${sinal.categoria}</div>
                
                <div class="video-container">
                    <div style="text-align: center;">
                        <p style="font-size: 3rem; margin-bottom: 1rem;">🎥</p>
                        <p>Vídeo demonstrativo: ${sinal.videoUrl}</p>
                        <p style="font-size: 0.9rem; opacity: 0.7; margin-top: 0.5rem;">
                            (Este é um protótipo - o vídeo real seria exibido aqui)
                        </p>
                    </div>
                </div>
                
                <h2>Descrição</h2>
                <p style="font-size: 1.1rem; line-height: 1.6;">${sinal.descricao}</p>
                
                <div class="detail-actions">
                    <button class="btn" onclick="toggleFavorito(${id})" id="btn-favorito">
                        ${isFavorito ? '★ Remover dos Favoritos' : '☆ Adicionar aos Favoritos'}
                    </button>
                    <button class="btn btn-secondary" onclick="App.navigate('home')">← Voltar</button>
                </div>
            </div>
        `;
    },

    renderFavoritos() {
        const favoritos = obterFavoritos();
        const sinaisFavoritos = SINAIS.filter(s => favoritos.includes(s.id));

        if (sinaisFavoritos.length === 0) {
            return `
                <div class="container">
                    <h1>Meus Favoritos</h1>
                    <div class="empty-state">
                        <svg viewBox="0 0 24 24"><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"/></svg>
                        <p>Você ainda não tem sinais favoritos</p>
                        <button class="btn" onclick="App.navigate('home')" style="margin-top: 1rem;">Explorar Sinais</button>
                    </div>
                </div>
            `;
        }

        return `
            <div class="container">
                <h1>Meus Favoritos</h1>
                <p style="margin-bottom: 1.5rem; color: var(--cor-text-secondary);">
                    ${sinaisFavoritos.length} ${sinaisFavoritos.length === 1 ? 'sinal salvo' : 'sinais salvos'}
                </p>
                <div class="sinais-grid">
                    ${sinaisFavoritos.map(s => `
                        <div class="sinal-card" onclick="verDetalhe(${s.id})">
                            <h3>${s.termo}</h3>
                            <p>${s.descricao}</p>
                            <div class="categoria-tag">${s.categoria}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    },

    renderHistorico() {
        const historico = obterHistorico();
        const sinaisHistorico = SINAIS.filter(s => historico.includes(s.id));

        if (sinaisHistorico.length === 0) {
            return `
                <div class="container">
                    <h1>Histórico de Consultas</h1>
                    <div class="empty-state">
                        <svg viewBox="0 0 24 24"><path d="M13,3A9,9 0 0,0 4,12H1L4.89,15.89L4.96,16.03L9,12H6A7,7 0 0,1 13,5A7,7 0 0,1 20,12A7,7 0 0,1 13,19C11.07,19 9.32,18.21 8.06,16.94L6.64,18.36C8.27,19.99 10.51,21 13,21A9,9 0 0,0 22,12A9,9 0 0,0 13,3Z"/></svg>
                        <p>Seu histórico está vazio</p>
                        <button class="btn" onclick="App.navigate('home')" style="margin-top: 1rem;">Começar a Explorar</button>
                    </div>
                </div>
            `;
        }

        return `
            <div class="container">
                <h1>Histórico de Consultas</h1>
                <p style="margin-bottom: 1.5rem; color: var(--cor-text-secondary);">
                    Últimas ${sinaisHistorico.length} ${sinaisHistorico.length === 1 ? 'consulta' : 'consultas'}
                </p>
                <div class="sinais-grid">
                    ${sinaisHistorico.reverse().map(s => `
                        <div class="sinal-card" onclick="verDetalhe(${s.id})">
                            <h3>${s.termo}</h3>
                            <p>${s.descricao}</p>
                            <div class="categoria-tag">${s.categoria}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    },

    renderAdminSinais() {
        return `
            <div class="container">
                <h1>Gerenciar Sinais</h1>
                <p style="margin-bottom: 1rem; color: var(--cor-text-secondary);">
                    Total de sinais cadastrados: ${SINAIS.length}
                </p>
                <button class="btn" onclick="mostrarFormSinal()">+ Adicionar Novo Sinal</button>
                
                <div id="form-sinal" class="hidden" style="margin-top: 2rem; padding: 1.5rem; background: var(--cor-background); border-radius: 8px;">
                    <h2>Novo Sinal</h2>
                    <form onsubmit="salvarSinal(event)">
                        <div class="form-group">
                            <label>Termo</label>
                            <input type="text" id="novo-termo" required placeholder="Ex: Algoritmo">
                        </div>
                        <div class="form-group">
                            <label>Descrição</label>
                            <textarea id="novo-descricao" rows="3" required placeholder="Descrição do termo"></textarea>
                        </div>
                        <div class="form-group">
                            <label>Categoria</label>
                            <select id="novo-categoria" required>
                                <option value="">Selecione...</option>
                                <option>Lógica</option>
                                <option>Estruturas de Dados</option>
                                <option>Banco de Dados</option>
                                <option>Programação</option>
                                <option>Segurança</option>
                                <option>Ferramentas</option>
                                <option>Web</option>
                                <option>Redes</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>URL do Vídeo</label>
                            <input type="text" id="novo-video" required placeholder="video-exemplo.mp4">
                        </div>
                        <div style="display: flex; gap: 1rem;">
                            <button type="submit" class="btn">Salvar</button>
                            <button type="button" class="btn btn-secondary" onclick="ocultarFormSinal()">Cancelar</button>
                        </div>
                    </form>
                </div>

                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Termo</th>
                                <th>Categoria</th>
                                <th>Descrição</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${SINAIS.map(s => `
                                <tr>
                                    <td><strong>${s.termo}</strong></td>
                                    <td>${s.categoria}</td>
                                    <td>${s.descricao.length > 50 ? s.descricao.substring(0, 50) + '...' : s.descricao}</td>
                                    <td>
                                        <div class="action-buttons">
                                            <button class="btn btn-small btn-secondary" onclick="editarSinal(${s.id})">Editar</button>
                                            <button class="btn btn-small" onclick="removerSinal(${s.id})">Remover</button>
                                        </div>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    },

    renderAdminUsuarios() {
        return `
            <div class="container">
                <h1>Gerenciar Usuários</h1>
                <p style="margin-bottom: 1rem; color: var(--cor-text-secondary);">
                    Total de usuários cadastrados: ${USUARIOS_MOCK.length}
                </p>
                <button class="btn" onclick="alert('Funcionalidade de adicionar usuário (visual apenas)')">+ Adicionar Usuário</button>
                
                <div class="table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>E-mail</th>
                                <th>Tipo</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${USUARIOS_MOCK.map(u => `
                                <tr>
                                    <td><strong>${u.nome}</strong></td>
                                    <td>${u.email}</td>
                                    <td><span class="categoria-tag">${u.tipo}</span></td>
                                    <td>
                                        <div class="action-buttons">
                                            <button class="btn btn-small btn-secondary" onclick="alert('Editar usuário: ${u.nome} (funcionalidade visual)')">Editar</button>
                                            <button class="btn btn-small" onclick="if(confirm('Deseja remover o usuário ${u.nome}?')) alert('Usuário removido com sucesso! (simulação)')">Remover</button>
                                        </div>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    }
};

// --funções de armazenamento
function obterFavoritos() {
    const favoritos = localStorage.getItem('favoritos');
    return favoritos ? JSON.parse(favoritos) : [];
}

function salvarFavoritos(favoritos) {
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
}

function verificarFavorito(id) {
    return obterFavoritos().includes(id);
}

function toggleFavorito(id) {
    let favoritos = obterFavoritos();
    const index = favoritos.indexOf(id);
    
    if (index > -1) {
        favoritos.splice(index, 1);
        alert('✓ Removido dos favoritos!');
    } else {
        favoritos.push(id);
        alert('✓ Adicionado aos favoritos!');
    }
    
    salvarFavoritos(favoritos);
    App.render();
}

function obterHistorico() {
    const historico = localStorage.getItem('historico');
    return historico ? JSON.parse(historico) : [];
}

function adicionarHistorico(id) {
    let historico = obterHistorico();
    historico = historico.filter(h => h !== id);
    historico.unshift(id);
    
    if (historico.length > 20) {
        historico = historico.slice(0, 20);
    }
    
    localStorage.setItem('historico', JSON.stringify(historico));
}

function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('login-email').value.trim();
    const senha = document.getElementById('login-senha').value;
    
    // Validação básica de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Erro: Por favor, digite um e-mail válido!');
        return;
    }
    
    // Validação de senha mínima
    if (senha.length < 6) {
        alert('Erro: A senha deve ter no mínimo 6 caracteres!');
        return;
    }
    
    // Verificar se o usuário existe (simulação )
    const usuariosCadastrados = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const usuarioEncontrado = usuariosCadastrados.find(u => u.email === email);
    
    // Se não for admin e não estiver cadastrado, bloquear
    if (email !== 'admin@sil.com' && !usuarioEncontrado) {
        alert('Erro: Usuário não encontrado! Por favor, cadastre-se primeiro.');
        return;
    }
    
    // Se encontrou usuário, validar senha
    if (usuarioEncontrado && usuarioEncontrado.senha !== senha) {
        alert('Erro: Senha incorreta!');
        return;
    }
    
    App.login(email);
}

function handleCadastro(e) {
    e.preventDefault();
    
    const nome = document.getElementById('cadastro-nome').value.trim();
    const email = document.getElementById('cadastro-email').value.trim();
    const senha = document.getElementById('cadastro-senha').value;
    const confirma = document.getElementById('cadastro-confirma').value;
    
    // Validação de nome
    if (nome.length < 3) {
        alert('Erro: O nome deve ter no mínimo 3 caracteres!');
        return;
    }
    
    // Validação de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Erro: Por favor, digite um e-mail válido!');
        return;
    }
    
    // Validação de senhas
    if (senha !== confirma) {
        alert('Erro: As senhas não coincidem!');
        return;
    }
    
    if (senha.length < 6) {
        alert('Erro: A senha deve ter no mínimo 6 caracteres!');
        return;
    }
    
    // Verificar se o e-mail já está cadastrado
    const usuariosCadastrados = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const emailExiste = usuariosCadastrados.some(u => u.email === email);
    
    if (emailExiste || email === 'admin@sil.com') {
        alert('Erro: Este e-mail já está cadastrado!');
        return;
    }
    
    // Salvar novo usuário
    usuariosCadastrados.push({
        nome: nome,
        email: email,
        senha: senha,
        tipo: 'Intérprete'
    });
    
    localStorage.setItem('usuarios', JSON.stringify(usuariosCadastrados));
    
    alert('✓ Cadastro realizado com sucesso! Agora você pode fazer login.');
    App.navigate('login');
}

function carregarTodosSinais() {
    const container = document.getElementById('sinais-container');
    if (!container) return;
    
    container.innerHTML = SINAIS.map(s => `
        <div class="sinal-card" onclick="verDetalhe(${s.id})">
            <h3>${s.termo}</h3>
            <p>${s.descricao}</p>
            <div class="categoria-tag">${s.categoria}</div>
        </div>
    `).join('');
}

function filtrarSinais() {
    const input = document.getElementById('search-input');
    const termo = input ? input.value.toLowerCase().trim() : '';
    const container = document.getElementById('sinais-container');
    
    if (!container) return;
    
    if (!termo) {
        carregarTodosSinais();
        return;
    }
    
    const sinaisFiltrados = SINAIS.filter(s => 
        s.termo.toLowerCase().includes(termo) || 
        s.descricao.toLowerCase().includes(termo) ||
        s.categoria.toLowerCase().includes(termo)
    );

    if (sinaisFiltrados.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <p>Nenhum sinal encontrado para "<strong>${termo}</strong>"</p>
                <p style="font-size: 0.9rem; color: var(--cor-text-secondary); margin-top: 0.5rem;">
                    Tente buscar por: algoritmo, array, banco de dados, firewall, etc.
                </p>
            </div>
        `;
        return;
    }

    container.innerHTML = `
        <p style="grid-column: 1/-1; color: var(--cor-text-secondary); margin-bottom: 1rem;">
            ✓ Encontrados <strong>${sinaisFiltrados.length}</strong> 
            ${sinaisFiltrados.length === 1 ? 'sinal' : 'sinais'} para "<strong>${termo}</strong>"
        </p>
        ${sinaisFiltrados.map(s => `
            <div class="sinal-card" onclick="verDetalhe(${s.id})">
                <h3>${s.termo}</h3>
                <p>${s.descricao}</p>
                <div class="categoria-tag">${s.categoria}</div>
            </div>
        `).join('')}
    `;
}

function verDetalhe(id) {
    sessionStorage.setItem('detalheId', id);
    App.navigate('detalhe');
    window.scrollTo(0, 0);
}

function mostrarFormSinal() {
    document.getElementById('form-sinal').classList.remove('hidden');
    window.scrollTo({ top: document.getElementById('form-sinal').offsetTop - 100, behavior: 'smooth' });
}

function ocultarFormSinal() {
    document.getElementById('form-sinal').classList.add('hidden');
}

function salvarSinal(e) {
    e.preventDefault();
    alert('✓ Sinal salvo com sucesso! (simulação - em produção seria salvo no banco de dados)');
    ocultarFormSinal();
    e.target.reset();
}

function editarSinal(id) {
    const sinal = SINAIS.find(s => s.id === id);
    alert(`Editar sinal: "${sinal.termo}"\n\nCategoria: ${sinal.categoria}\nDescrição: ${sinal.descricao}\n\n(Funcionalidade simulada - em produção abriria um formulário de edição)`);
}

function removerSinal(id) {
    const sinal = SINAIS.find(s => s.id === id);
    if (confirm(`Deseja realmente remover o sinal "${sinal.termo}"?`)) {
        alert('✓ Sinal removido com sucesso! (simulação - em produção seria removido do banco de dados)');
    }
}

// --Iniciador
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});