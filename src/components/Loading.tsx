export function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-bg">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-brand-accent mb-4"></div>
        <p className="text-brand-ink font-medium">Loading HorizonWebWorX...</p>
      </div>
    </div>
  )
}

export function SectionLoading() {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-brand-accent"></div>
    </div>
  )
}
