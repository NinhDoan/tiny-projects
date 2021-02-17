import { h } from 'preact'
import style from './style.scss'

const ProjectsSection = () =>
{
  return (
    <>
      <div class={style.project}>
        <div class={style.heading} id='projects'>
          <h2 class={`heading-section`}>Projects</h2>
        </div>
        <div class={style.main}>
          <div class={style.thumbnail}>
            <img src='../../assets/project-1.jpg' />
          </div>
          <div class={style.detail}>
            <h3 class={style.detail__heading}>thich tieng anh</h3>
            <p class={style.detail__para}>2016 - Present</p>
            <p class={style.detail__para}>
              Website thichtienganh.com – a website sharing free documents,
              high-quality articles for helping people learn English.
            </p>
            <p class={style.detail__para}>Wordpress, HTML, CSS</p>
            <button>
              <a
                href='https://thichtienganh.com/'
                target='_blank'
                rel='noreferrer'
              >
                view project
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectsSection