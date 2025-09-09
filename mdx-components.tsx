import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Cover: ({
      src,
      alt,
      caption,
    }: {
      src: string
      alt: string
      caption: string
    }) => {
      return (
        <figure>
          <img src={src} alt={alt} className="rounded-xl" />
          <figcaption className="text-center">{caption}</figcaption>
        </figure>
      )
    },
    // Hide any frontmatter that might be rendered as text
    pre: ({ children, ...props }) => {
      // Check if this is frontmatter content
      if (typeof children === 'string' && children.includes('title:')) {
        return null
      }
      return <pre {...props}>{children}</pre>
    },
    // Also handle code blocks that might contain frontmatter
    code: ({ children, ...props }) => {
      // Check if this is frontmatter content
      if (typeof children === 'string' && children.includes('title:')) {
        return null
      }
      return <code {...props}>{children}</code>
    },
  }
}
