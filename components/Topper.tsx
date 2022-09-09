export default function Topper() {
  const links = [
    { href: 'mailto:hi@luciovilla.com?subject=Hola Lucio!', title: 'Email' },
    { href: 'https://github.com/luciovilla', title: 'Github' },
    { href: 'https://twitter.com/luciovilla', title: 'Twitter' },
    { href: 'https://www.linkedin.com/in/luciovilla', title: 'LinkedIn' }
  ]

  return (
    <div className="relative m-auto flex min-h-[65vh] w-full max-w-2xl items-center py-16 md:min-h-[75vh] md:pb-32">
      <div className="mb-16 flex flex-col items-start justify-center">
        <div className="w-full">
          <h1 className="mb-1 text-3xl font-bold tracking-tight md:text-5xl">Lucio Villa</h1>
          <h2 className="mb-2 text-gray-700 sm:text-lg">Senior Engineer at Vox Media</h2>
          <p className="mt-1 text-gray-800 sm:text-lg">
            First-generation Latino, software engineer and web designer. Previously worked within
            newsrooms at the Washington Post, San Francisco Chronicle, Chicago Tribune's Spanish
            daily (Hoy Chicago) and formerly a photojournalist.
          </p>

          <div className="mt-3 flex">
            <div className="space-x-2 text-sm">
              {links.map((link) => {
                return (
                  <a key={link.title} className="underline" href={link.href}>
                    {link.title}
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
