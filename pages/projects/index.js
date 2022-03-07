import { getAllFilesFrontMatter } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'

const PROJECTS_PER_PAGE = 1000

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('projects')
  const initialDisplayProjects = posts.slice(0, PROJECTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / PROJECTS_PER_PAGE),
  }

  return { props: { initialDisplayProjects, posts, pagination } }
}

export default function Projects({ initialDisplayProjects, posts, pagination }) {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Showcase your projects with a hero image (16 x 9)
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {initialDisplayProjects.map((d) => (
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
