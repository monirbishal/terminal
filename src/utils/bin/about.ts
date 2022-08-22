import { getBio } from '../../api';

export const about = async (args: string[]): Promise<string> => {
  const bio = await getBio();

  // return bio;
  const about = `Hi! I am Monir Bishal, 
A Full Stack Web Developer. I have over 3 years of work experience in front-end development and back-end development for rich internet applications.`;
  return about;
};
