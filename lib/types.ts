export interface User {
  date: string;
  user_id: string;
  name: string;
  need: string;
  email: string;
  status: string;
  linkedin: string;
  profile_complete: boolean;
  completion_status: string;
  call_status: string;
  call_count: number;
}

export interface DashboardStats {
  onboarded_today: number;
  onboarded_yesterday: number;
  intros_made: number;
}

export interface Profile {
  id: number;
  name: string;
  email: string;
  linkedin_url: string;
  summary: string;
  match_reason: string;
}