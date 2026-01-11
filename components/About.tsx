import "@/styles/About.css";

function About() {
  return (
    <section id="about">
      <h2 className="section-title">Um pouco sobre mim</h2>
      <div className="cards-container">
        <div className="about-card life-story-container">
          <p>
            Olá, eu sou o Gustavo! Atualmente moro em Três Coroas, RS e busco
            por uma oportunidade de trabalhar na área de desenvolvimento e
            programação.
          </p>
          <p>
            Desde criança eu sempre gostei muito de computadores, jogos e
            números. A partir daí eu me interessei primeiramente por
            desenvolvimento de jogos, o que me levou a ter meus primeiros
            contatos com programação e arte digital. Com os meus 13 anos de
            idade, eu sabia o suficiente para criar{" "}
            <span lang="en">sprites</span> e mecânicas básicas de jogos.
          </p>
        </div>
        <div className="drawings-container about-card">
          <img
            src="tentacles.png"
            alt="Cavaleiro em uma masmorra"
            className="img-tentacles"
          />
          <img
            src="slash.gif"
            alt="Sprite de samurai atacando com a espada"
            className="img-slash"
          />
          <img
            src="gladiator.gif"
            alt="Sprite de gladiador andando"
            className="img-gladiator"
          />
        </div>
        <div className="about-card medals-container">
          <p>
            A matemática sempre foi minha matéria preferida na escola, o que, ao
            longo dos anos, me levou a me tornar{" "}
            <a href="#" title="Ver certificados" className="certificate-link">
              <strong>bimedalhista nacional da OBMEP </strong>
            </a>
            &#40;Olímpiadas Brasileiras de Matemática&#41; e{" "}
            <a href="#" title="Ver certificado" className="certificate-link">
              <strong>medalhista de ouro da OBMF </strong>
            </a>
            &#40;Olimpíadas Brasileiras de Matemática Financeira&#41; a nível
            nacional, além da{" "}
            <a href="#" title="Ver certificado" className="certificate-link">
              <strong>conclusão do PIC Júnior</strong>
            </a>
            , programa que desenvolve as habilidades de resolução de problemas,
            lógica e algoritmos.
          </p>
        </div>
        <div className="about-card skills-container">
          <p>
            Devido ao meu longo tempo de exposição à programação, já tive
            contato com diversas linguagens, frameworks e ferramentas, então não
            tenho muita dificuldade em me adaptar a diferentes ambientes de
            desenvolvimento. Entretanto, as ferramentas principais que escolho
            para usar nos meus projetos são:
            <ul className="skills-list">
              <li className="skill-item">React</li>
              <li className="skill-item">Vue.js</li>
              <li className="skill-item">TypeScript</li>
              <li className="skill-item">Next.js</li>
              <li className="skill-item">Framer Motion</li>
              <li className="skill-item">Git</li>
            </ul>
            Também já tive contato com ferramentas de back-end, como PHP e
            MySQL.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
