import { getAllFilesFrontMatter } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'
import Intro from '@/components/Intro'

const PROJECTS_IN_PAGE = 1000

export async function getStaticProps() {
  const projects = (await getAllFilesFrontMatter('projects')).slice(0, PROJECTS_IN_PAGE)
  return { props: { projects } }
}

export default function Projects({ projects }) {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <Intro
          title={siteMetadata.mastheadTitle}
          description={siteMetadata.mastheadDescription}
          imageSrc={siteMetadata.mastheadImage}
        ></Intro>
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Showcase
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">My top projects</p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {projects.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.images[0]}
                href={`/projects/${d.slug}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
