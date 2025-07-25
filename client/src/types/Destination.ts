export interface Destination {
  id: number | string;
  name: string;
  gallery?: string[];
  Types?: { name: string }[];
  short_description?: string;
  long_description?: string;
  background_image?: string;
}
