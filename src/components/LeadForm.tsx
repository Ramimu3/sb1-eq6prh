import React, { useState } from 'react';
import { Lead, LeadStatus } from '../types/Lead';
import { Plus } from 'lucide-react';

interface LeadFormProps {
  onAddLead: (lead: Omit<Lead, 'id'>) => void;
}

const LeadForm: React.FC<LeadFormProps> = ({ onAddLead }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<LeadStatus>('Not Contacted');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddLead({ name, number, email, status });
    setName('');
    setNumber('');
    setEmail('');
    setStatus('Not Contacted');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="number" className="block text-sm font-medium text-gray-700">Number</label>
        <input
          type="tel"
          id="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
        <select
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value as LeadStatus)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option value="Not Contacted">Not Contacted</option>
          <option value="Attempt 1">Attempt 1</option>
          <option value="Attempt 2">Attempt 2</option>
          <option value="Attempt 3">Attempt 3</option>
          <option value="Contacted">Contacted</option>
          <option value="Lesson Scheduled">Lesson Scheduled</option>
          <option value="Bought">Bought</option>
          <option value="Unqualified">Unqualified</option>
        </select>
      </div>
      <button
        type="submit"
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <Plus className="mr-2 h-4 w-4" />
        Add Lead
      </button>
    </form>
  );
};

export default LeadForm;