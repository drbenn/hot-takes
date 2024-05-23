export interface Contributor {
  id: number,
  name: string,
  profile_img_url: string,
  biography: string,
  gpt_prompt?: string
}

export interface AiPost {
  id: number,
  contributor_id: number,
  headline: string,
  content_snippet: string,
  link: string,
  post: string,
  create_date: Date,
  profile_img_url?: string,
}

export interface NumberStringMap {
  [key: number]: string;
}