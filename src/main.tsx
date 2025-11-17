import ReactDOM from 'react-dom/client';
import './index.scss';


import { TaskList } from './components/TaskList';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <h1 className="header">ToDo</h1>
    <TaskList />
  </>,
)