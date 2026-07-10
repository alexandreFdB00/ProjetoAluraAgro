<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fazenda Vale Verde | Portfólio Agrícola</title>
    <link rel="stylesheet" src="Css.cs">
</head>
<body>

    <header id="navbar">
        <div class="logo">Vale Verde <span>Agro</span></div>
        <nav>
            <ul>
                <li><a href="#home">Início</a></li>
                <li><a href="#sobre">Sobre Nós</a></li>
                <li><a href="#produtos">Nossa Colheita</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
        </nav>
    </header>

    <section id="home" class="hero">
        <div class="hero-content">
            <h1>Tradição e Qualidade que vêm da Terra</h1>
            <p>Cultivando alimentos orgânicos com respeito à natureza e à sua mesa.</p>
            <a href="#produtos" class="btn">Ver Produtos</a>
        </div>
    </section>

    <section id="sobre" class="sobre">
        <h2>Nossa História</h2>
        <p>A Fazenda Vale Verde é um negócio familiar com mais de 30 anos de tradição. Trabalhamos com agricultura sustentável, garantindo que cada semente plantada se transforme em um alimento rico em nutrientes e livre de agrotóxicos.</p>
    </section>

    <section id="produtos" class="produtos">
        <h2>Nossa Colheita</h2>
        <div class="grid-produtos">
            <div class="card-produto">
                <img src="https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=400&q=80" alt="Tomates Orgânicos">
                <h3>Tomates Orgânicos</h3>
                <p>Cultivados em estufas preparadas para garantir o máximo de sabor.</p>
            </div>
            <div class="card-produto">
                <img src="https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=400&q=80" alt="Milho Verde">
                <h3>Milho Doce</h3>
                <p>Grãos selecionados, perfeitos para consumo in natura ou processamento.</p>
            </div>
            <div class="card-produto">
                <img src="https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&w=400&q=80" alt="Hortaliças">
                <h3>Hortaliças Frescas</h3>
                <p>Alface, rúcula e espinafre colhidos diariamente ao amanhecer.</p>
            </div>
        </div>
    </section>

    <section id="contato" class="contato">
        <h2>Fale Conosco</h2>
        <form id="formContato">
            <input type="text" id="nome" placeholder="Seu Nome" required>
            <input type="email" id="email" placeholder="Seu E-mail" required>
            <textarea id="mensagem" placeholder="Como podemos ajudar?" rows="5" required></textarea>
            <button type="submit" class="btn">Enviar Mensagem</button>
        </form>
    </section>

    <footer>
        <p>&copy; 2026 Fazenda Vale Verde. Todos os direitos reservados.</p>
    </footer>

    <script src="Js.js"></script>
</body>
</html>
