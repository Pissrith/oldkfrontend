import Link from 'next/link'
import React from 'react'

interface Breadcrumb {
	label: string
	path: string
}

interface BreadcrumbsProps {
	breadcrumbs: Breadcrumb[]
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ breadcrumbs }) => (
	<nav aria-label='breadcrumb'>
		<ol className='flex flex-wrap gap-1 text-sm'>
			{breadcrumbs.map((breadcrumb, index) => (
				<li key={breadcrumb.path} className='breadcrumb-item'>
					{index < breadcrumbs.length - 1 ? (
						<Link href={breadcrumb.path} className='text-primary'>
							{breadcrumb.label} /
						</Link>
					) : (
						<span>{breadcrumb.label}</span>
					)}
				</li>
			))}
		</ol>
	</nav>
)

export default Breadcrumbs