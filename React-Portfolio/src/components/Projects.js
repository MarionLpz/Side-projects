import { Nav, Tab, Col, Container, Row } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import background from "../assets/img/background.png";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Mamie Câline",
      description: "Un dating simulator (vraiment) retro.",
      stack: "Lua, Pico-8",
      lienGit:
        "https://github.com/MarionLpz/projets-collectifs/tree/main/01_Pico-8",
      imgUrl: projImg1,
    },
    {
      title: "Safe Place",
      description:
        "Réappropriation d'un code de réseau social, BDD et  fonctionnalités.",
      stack: "PHP, SQL, MAMP",
      lienGit:
        "https://github.com/MarionLpz/projets-collectifs/tree/main/04_ReseauSocPHP",
      imgUrl: projImg2,
    },
    {
      title: "Punchlines V1",
      description: "Les petites et grandes phrases en politique.",
      stack: "HTML, CSS, JS",
      lienGit:
        "https://github.com/MarionLpz/Side-projects/tree/main/PunchlinesV1",
      imgUrl: projImg3,
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projets</h2>
            <p>Made with love. And a lot of resilience. </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Présentation</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Projets</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Ada Tech School</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <p>
                    Ici, vous retrouverez quelques projets collectifs réalisés
                    dans le cadre de ma formation à Ada Tech School. Ces projets
                    sont habituellement réalisés en Mais aussi des
                    sides-projects personnels. <br></br> <br></br>Rendez-vous
                    sur mon{" "}
                    <a href="https://github.com/MarionLpz">✨ GitHub ✨</a> pour
                    plus d'infos
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <p>
                    Une école à la pédagogie alternative fondée autour du
                    "faire" et des <b>projets collectifs</b>. Ils y en a 8 au
                    total, soit un tous les 15 jours environ. Les projets sont
                    rythmés par des rituels importés de{" "}
                    <b>la méthodologie Agile</b> (Road-Map, démo & Retro) qui
                    ont pour objectif le développement de soft skills
                    indispensables pour s'adapter au monde professionnel. La
                    formation dure 21 mois : 9 mois de formation temps-plein +
                    12 mois d'alternance.  <br></br>
                    <br></br>
                    🚀 <b>Diplôme préparé :</b> Concepteur développeur
                    d’application, RNCP Niveau 6
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2} />
      <img className="background-image" src={background} /> */}
    </section>
  );
};
