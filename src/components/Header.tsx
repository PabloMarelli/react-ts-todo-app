import { TodoTitle } from "../types"
import { CreateTodo } from "./CreateTodo"

interface Props {
  onAddTodo: ({ title }: TodoTitle) => void
}

export const Header: React.FC<Props> = ({  onAddTodo }) => {
  return (
    <header className="header">
      <h1>todo<img
        style={{ width: '50px', height: 'auto' }}
        src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Dtypescript&psig=AOvVaw3uesh4lKzVxW5m2YIoBwwr&ust=1701202898818000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIih0eWA5YIDFQAAAAAdAAAAABAE'/>
      </h1>

      <CreateTodo saveTodo={onAddTodo} />
    </header>
  )
}
