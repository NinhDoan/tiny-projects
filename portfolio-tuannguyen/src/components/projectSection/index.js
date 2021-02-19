import { h } from 'preact'
import style from './style.scss'

const data = [
  {
    name: 'thich tieng anh',
    year: '2016 - Present',
    description: 'Website thichtienganh.com – a website sharing free documents, high-quality articles for helping people learn English.',
    stack: 'Wordpress, HTML, CSS',
    link: 'https://thichtienganh.com/',
    source: '../../assets/project-1.jpg',
  },
]

const ProjectsSection = () => {
  return (
    <>
      <div class={style.project}>
        <div class={style.heading} id='projects'>
          <h2 class={`heading-section`}>Projects</h2>
        </div>
        <div class={style.container}>
          {data.map((d) => {
            return (
              <div class={style.main}>
                <div class={style.thumbnail}>
                  <img src={d.source} alt={d.name} />
                </div>
                <div class={style.detail}>
                  <h3 class={style.detail__heading}>{d.name}</h3>
                  <p class={style.detail__para}>{d.year}</p>
                  <p class={style.detail__para}>{d.description}</p>
                  <p class={style.detail__para}>{d.stack}</p>
                  <button>
                    <a href={d.link} target='_blank' rel='noreferrer'>
                      view project
                    </a>
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default ProjectsSection
