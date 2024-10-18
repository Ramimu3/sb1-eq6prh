import React from 'react';
import { Lead } from '../types/Lead';
import { User, Phone, Mail, Tag } from 'lucide-react';

interface LeadListProps {
  leads: Lead[];
  onUpdateLead: (id: string, status: Lead['status']) => void;
}

const LeadList: React.FC<LeadListProps> = ({ leads, onUpdateLead }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Name</th>
            <th className="py-3 px-6 text-left">Number</th>
            <th className="py-3 px-6 text-left">Email</th>
            <th className="py-3 px-6 text-left">Status</th>
            <th className="py-3 px-6 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {leads.map((lead) => (
            <tr key={lead.id} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left whitespace-nowrap">
                <div className="flex items-center">
                  <User className="mr-2" />
                  <span>{lead.name}</span>
                </div>
              </td>
              <td className="py-3 px-6 text-left">
                <div className="flex items-center">
                  <Phone className="mr-2" />
                  <span>{lead.number}</span>
                </div>
              </td>
              <td className="py-3 px-6 text-left">
                <div className="flex items-center">
                  <Mail className="mr-2" />
                  <span>{lead.email}</span>
                </div>
              </td>
              <td className="py-3 px-6 text-left">
                <div className="flex items-center">
                  <Tag className="mr-2" />
                  <span>{lead.status}</span>
                </div>
              </td>
              <td className="py-3 px-6 text-center">
                <select
                  value={lead.status}
                  onChange={(e) => onUpdateLead(lead.id, e.target.value as Lead['status'])}
                  className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeadList;