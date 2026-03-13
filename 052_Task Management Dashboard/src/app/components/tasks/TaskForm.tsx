import { useState, useEffect } from 'react';
import { Task, TaskFormData, TaskPriority, TaskStatus } from '../../types/task';
import { validateTaskForm, ValidationError } from '../../utils/validation';
import Input from '../ui/Input';
import Button from '../ui/Button';

interface TaskFormProps {
  task?: Task;
  onSubmit: (data: TaskFormData) => void;
  onCancel: () => void;
}

export default function TaskForm({ task, onSubmit, onCancel }: TaskFormProps) {
  const [formData, setFormData] = useState<TaskFormData>({
    title: '',
    description: '',
    priority: 'medium',
    status: 'pending',
    dueDate: new Date().toISOString().split('T')[0],
    assignedTo: '',
  });

  const [errors, setErrors] = useState<ValidationError[]>([]);
  const [touched, setTouched] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (task) {
      setFormData({
        title: task.title,
        description: task.description,
        priority: task.priority,
        status: task.status,
        dueDate: task.dueDate.split('T')[0],
        assignedTo: task.assignedTo || '',
      });
    }
  }, [task]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Validate on change if field has been touched
    if (touched.has(name)) {
      const validationErrors = validateTaskForm({ ...formData, [name]: value });
      setErrors(validationErrors);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name } = e.target;
    setTouched(prev => new Set(prev).add(name));
    
    const validationErrors = validateTaskForm(formData);
    setErrors(validationErrors);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mark all fields as touched
    const allFields = new Set(['title', 'description', 'priority', 'status', 'dueDate']);
    setTouched(allFields);
    
    const validationErrors = validateTaskForm(formData);
    setErrors(validationErrors);
    
    if (validationErrors.length === 0) {
      onSubmit(formData);
    }
  };

  const getFieldError = (field: string): string | undefined => {
    return errors.find(error => error.field === field)?.message;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Input
          label="Task Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          onBlur={handleBlur}
          error={getFieldError('title')}
          placeholder="Enter task title"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Description
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          onBlur={handleBlur}
          rows={4}
          className={`
            w-full px-4 py-2 rounded-lg border 
            focus:outline-none focus:ring-2 focus:ring-primary-500 
            transition-all duration-200
            ${getFieldError('description') 
              ? 'border-danger focus:ring-danger' 
              : 'border-gray-300 dark:border-gray-600'
            }
            dark:bg-gray-800 dark:text-white
          `}
          placeholder="Describe the task..."
        />
        {getFieldError('description') && (
          <p className="mt-1 text-sm text-danger">{getFieldError('description')}</p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Priority
          </label>
          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`
              w-full px-4 py-2 rounded-lg border 
              focus:outline-none focus:ring-2 focus:ring-primary-500 
              transition-all duration-200
              ${getFieldError('priority') 
                ? 'border-danger focus:ring-danger' 
                : 'border-gray-300 dark:border-gray-600'
              }
              dark:bg-gray-800 dark:text-white
            `}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          {getFieldError('priority') && (
            <p className="mt-1 text-sm text-danger">{getFieldError('priority')}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Status
          </label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            onBlur={handleBlur}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-800 dark:text-white dark:border-gray-600"
          >
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Input
            type="date"
            label="Due Date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            onBlur={handleBlur}
            error={getFieldError('dueDate')}
            min={new Date().toISOString().split('T')[0]}
            required
          />
        </div>

        <div>
          <Input
            label="Assigned To (Optional)"
            name="assignedTo"
            value={formData.assignedTo}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter assignee name"
          />
        </div>
      </div>

      <div className="flex justify-end space-x-3 pt-4">
        <Button type="button" variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" variant="primary">
          {task ? 'Update Task' : 'Create Task'}
        </Button>
      </div>
    </form>
  );
}