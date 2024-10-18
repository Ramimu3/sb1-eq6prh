import React from 'react';
import { LeadStatus } from '../types/Lead';
import { Filter, SortAsc } from 'lucide-react';

interface FilterSortProps {
  filterStatus: LeadStatus | 'All';
  setFilterStatus: (status: LeadStatus | 'All') => void;
  sortBy: 'name' | 'status';
  setSortBy: (sort: 'name' | 'status') => void;
}

const FilterSort: React.FC<FilterSortProps> = ({
  filterStatus,
  setFilterStatus,
  sortBy,
  setSortBy,
}) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <div className="flex items-center">
        <Filter className="h-5 w-5 mr-2 text-gray-500" />
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value as LeadStatus | 'All')}
          className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option value="All">All Statuses</option>
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
      <div className="flex items-center">
        <SortAsc className="h-5 w-5 mr-2 text-gray-500" />
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as 'name' | 'status')}
          className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          <option value="name">Sort by Name</option>
          <option value="status">Sort by Status</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSort;