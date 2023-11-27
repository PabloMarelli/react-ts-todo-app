import { FILTERS_BUTTONS } from "../consts"
import { type FilterValue } from "../types"

interface Props {
  onFilterChange: (filter: FilterValue) => void
  // Como traer todas las opciones desde la constante TODO_FILTERS en consts.ts
  filterSelected: FilterValue
}

export const Filters: React.FC<Props> = (
  { filterSelected, onFilterChange }
) => {
  const handleClick = (filter: FilterValue) => (e:React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    onFilterChange(filter)
  }
  return (
    <ul className="filters">
      {
        Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
          const isSelected = key === filterSelected 
          const className = isSelected ? 'selected' : ''

          return (
            <li key={key}>
              <a
                href={href}
                className={className}
                onClick={handleClick(key as FilterValue)}
              >
                {literal}
              </a>
            </li>
          )
        })
      }
    </ul>
  )
}
