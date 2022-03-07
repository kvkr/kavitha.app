export function ListGallery({ children, wbg }) {
  return <div className={`flex ${wbg ? 'bg-white' : ''}`}>{children}</div>
}
