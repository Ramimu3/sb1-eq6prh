import React, { useState, useEffect } from 'react';
import { Lead, LeadStatus } from './types/Lead';
import LeadForm from './components/LeadForm';
import LeadList from './components/LeadList';
import SearchBar from './components/SearchBar';
import FilterSort from './components/FilterSort';
import { Users } from 'lucide-react';

function App() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [filteredLeads, setFilteredLeads] = useState<Lead[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<LeadStatus | 'All'>('All');
  const [sortBy, setSortBy] = useState<'name' | 'status'>('name');

  useEffect(() => {
    const storedLeads = localStorage.getItem('leads');
    if (storedLeads) {
      setLeads(JSON.parse(storedLeads));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('leads', JSON.stringify(leads));
    filterAndSortLeads();
  }, [leads, searchTerm, filterStatus, sortBy]);

  const addLead = (newLead: Omit<Lead, 'id'>) => {
    const lead: Lead = {
      ...newLead,
      id: Date.now().toString(),
    };
    setLeads([...leads, lead]);
  };

  const updateLead = (id: string, status: Lead['status']) => {
    setLeads(leads.map(lead => lead.id === id ? { ...lead, status } : lead));
  };

  const filterAndSortLeads = () => {
    let filtered = leads.filter(lead =>
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.number.includes(searchTerm)
    );

    if (filterStatus !== 'All') {
      filtered = filtered.filter(lead => lead.status === filterStatus);
    }

    filtered.sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else {
        return a.status.localeCompare(b.status);
      }
    });

    setFilteredLeads(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center">
            <Users className="mr-2" />
            Lead Tracking Tool
          </h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg p-4">
              <h2 className="text-2xl font-semibold mb-4">Add New Lead</h2>
              <LeadForm onAddLead={addLead} />
            </div>
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Lead List</h2>
              <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
              <FilterSort
                filterStatus={filterStatus}
                setFilterStatus={setFilterStatus}
                sortBy={sortBy}
                setSortBy={setSortBy}
              />
              <LeadList leads={filteredLeads} onUpdateLead={updateLead} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;