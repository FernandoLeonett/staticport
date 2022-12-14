import Layout from "../components/Layout";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

import { skills, experiences, studies, projects } from "../profile";
const Index = ({ skills, experiences, studies, projects }) => {
  useEffect(() => {
    window.scrollTo(0, 150);
  }, []);
  return (
    <Layout>
      {/* Header Card */}
      <header className="row">
        <div className="col-md-12">
          <div className="card card-body bg-secondary text-light animate__animated animate__fadeIn">
            <div className="row">
              <div className="col-md-4">
                <Image
                  src="/Foto.png"
                  alt="Matias Cabral"
                  className="img-fluid rounded-circle foto"
                  width={200}
                  height={200}
                />
              </div>
              <div className="col-md-8">
                <h1>Matias Cabral</h1>
                <h3>Front End Developer</h3>
                <p className="text-justify">
                  Interesado en TI, recientemente comencé a sentirme fascinado
                  por la programación web, por ejemplo: desarrollando
                  aplicaciones y construyendo sitios web. Estoy buscando una
                  compañía dispuesta a ofrecerme una ubicación entre sus
                  desarrolladores. A cambio, ofrecería todo mi compromiso y
                  sería una adición agradable y amigable para su equipo. Por lo
                  tanto, actualmente estoy buscando un trabajo o una pasantía
                  como un front-end desarrollador.
                </p>
                <Link href="/contact">
                  <a className="btn btn-outline-light">Contáctame</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Second section */}

      <section className="row">
        <div className=" col-md-4 py-2">
          <div className="card bg-light animate__animated animate__fadeInLeft">
            <div className="card-body">
              <h1>Habilidades</h1>

              {/* Skill Progress  */}
              {skills.map(({ skill, percentage }, i) => (
                <div className="py-3" key={i}>
                  <h5>{skill}</h5>
                  <div className="progress ">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${percentage}%` }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-md-8 py-2">
          {/* Experience */}
          <div className="card bg-light animate__animated animate__fadeInRight">
            <div className="card-body">
              <h1>Experiencia</h1>

              <ul>
                {/* List Item Experience */}
                {experiences.map(({ title, description, from, to }, index) => (
                  <li key={index}>
                    <h3>{title}</h3>
                    <h5>
                      {from} {to ? `- ${to}` : "- current"}
                    </h5>
                    <p>{description}</p>
                  </li>
                ))}
              </ul>
              {/* <Link href="/hireme">
              <a className="btn btn-light">Ver proyecto</a>
            </Link> */}
            </div>
          </div>
          <div className="card bg-light animate__animated animate__fadeInRight margin">
            <div className="card-body">
              <h1>Formación académica</h1>

              <ul>
                {/* List Item Formación */}
                {studies.map(({ title, from, to, description }, index) => (
                  <li key={index}>
                    <h3>{title}</h3>
                    <h5>
                      {from} {to ? `- ${to}` : "- current"}
                    </h5>
                    <p className="text-justify">{description}</p>
                  </li>
                ))}
              </ul>
              {/* <Link href="/hireme">
              <a className="btn btn-light">Ver proyecto</a>
            </Link> */}
            </div>
          </div>
        </div>
      </section>

      {/* Porfolio */}
      <section>
        <div className="row">
          <div className="col-md-12">
            <div className="card card-body bg-dark">
              <div className="row">
                <div className="col-md-12 my-2">
                  <h1 className="text-center text-light">Portfolio</h1>
                </div>
                {projects.map(({ name, description, image, link }, index) => (
                  <div className="col-md-4 p-2" key={index}>
                    <div className="card h-100">
                      <div className="overflow">
                        <Image
                          src={`/${image}`}
                          alt=""
                          layout="responsive"
                          width={290}
                          height={140}
                          objectFit="cover"
                          className="card-img-top"
                        />
                      </div>
                      <div className="card-body">
                        <h3>{name}</h3>
                        <p className="text-justify">{description}</p>
                        <a href={link} target="_blank">
                          Ver proyecto
                        </a>
                      </div>
                    </div>
                  </div>
                ))}

                {/* <div className="col-md-12 mt-4">
                <div className="text-center">
                  <Link href="/portfolio">
                    <a className="btn btn-outline-light">More Projects</a>
                  </Link>
                </div>
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

export const getStaticProps = async () => {
  return {
    props: {
      skills,
      experiences,
      studies,
      projects,
    },
  };
};
