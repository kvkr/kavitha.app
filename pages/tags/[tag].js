import Card from '@/components/Card'
import { TagSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import generateRss from '@/lib/generate-rss'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { getAllTags } from '@/lib/tags'
import kebabCase from '@/lib/utils/kebabCase'
import fs from 'fs'
import path from 'path'

const root = process.cwd()

export async function getStaticPaths() {
  const tags = await getAllTags('blog')
  const projectsTags = await getAllTags('projects')

  return {
    paths: [...Object.keys(tags), ...Object.keys(projectsTags)].map((tag) => ({
      params: {
        tag,
      },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const allPosts = await getAllFilesFrontMatter('blog')
  const allProjects = await getAllFilesFrontMatter('projects')
  const filteredPosts = allPosts.filter(
    (post) => post.draft !== true && post.tags.map((t) => kebabCase(t)).includes(params.tag)
  )
  const filteredProjects = allProjects.filter(
    (project) =>
      project.draft !== true && project.tags.map((t) => kebabCase(t)).includes(params.tag)
  )

  // rss
  if (filteredPosts.length > 0) {
    const rss = generateRss(filteredPosts, `tags/${params.tag}/feed.xml`)
    const rssPath = path.join(root, 'public', 'tags', params.tag)
    fs.mkdirSync(rssPath, { recursive: true })
    fs.writeFileSync(path.join(rssPath, 'feed.xml'), rss)
  }

  return { props: { posts: filteredPosts, projects: filteredProjects, tag: params.tag } }
}

export default function Tag({ posts, projects, tag }) {
  // Capitalize first letter and convert space to dash
  const title = tag
  return (
    <>
      <TagSEO
        title={`${tag} - ${siteMetadata.author}`}
        description={`${tag} tags - ${siteMetadata.author}`}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <h1 className="pt-10 pb-10 text-center text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          #{title}
        </h1>

        <div>
          <h2 className="mt-10 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects
          </h2>
          {projects.length === 0 && 'No projects found.'}
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
        <ListLayout posts={posts} title="Posts" />
      </div>
    </>
  )
}
