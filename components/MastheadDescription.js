import CustomLink from './Link'

function Link({ ...props }) {
  return <CustomLink className="text-primary-500" {...props}></CustomLink>
}

export default function MastheadDescription() {
  return (
    <div>
      As a <Link href="/tags/ux-research">UX Researcher</Link>, I listen to people & their stories.
      Numbers tell stories too, <Link href="/tags/data-visualization">Data Visualisation</Link> is
      my hobby.
    </div>
  )
}
