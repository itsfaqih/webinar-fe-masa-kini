import Form from './components/Form';
import Card from './components/Card';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({ title: '', desc: '' });

  const addTask = () => {
    setTasks(current => [...current, form]);
  };

  const handleFormChange = event => {
    const { name, value } = event.target;
    if (name === 'judul') {
      setForm(current => ({
        ...current,
        title: value,
      }));
    } else if (name === 'deskripsi') {
      setForm(current => ({
        ...current,
        desc: value,
      }));
    }
  };

  const deleteTask = i => {
    setTasks(current => current.filter((item, index) => index !== i));
  };

  return (
    <div className="App">
      <Form addTask={addTask} handleFormChange={handleFormChange} />
      <div id="task-container" className="grid gap-4 md:grid-cols-2 px-4">
        {tasks.map((task, i) => (
          <Card title={task.title} desc={task.desc} deleteTask={() => deleteTask(i)} />
        ))}
      </div>
    </div>
  );
}

export default App;
