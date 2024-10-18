export type LeadStatus =
  | 'Not Contacted'
  | 'Attempt 1'
  | 'Attempt 2'
  | 'Attempt 3'
  | 'Contacted'
  | 'Lesson Scheduled'
  | 'Bought'
  | 'Unqualified';

export interface Lead {
  id: string;
  name: string;
  number: string;
  email: string;
  status: LeadStatus;
}