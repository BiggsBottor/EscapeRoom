export interface GamesList {
  title: string;
  img: string;
  subtitle: string;
  isMultiplayer: boolean
  players: string;
  time: string;
  age: string;
  delay_aos: number;
}

export const GAMES_LIST: GamesList[] = [
  {
    title: 'PANDEMIA',
    img: 'automation_2.svg',
    subtitle: 'imagen ESCAPEROOM PANDEMIA.',
    isMultiplayer: true,
    players: '1-6 jugadores',
    time: '60 minutos',
    age: 'Edad: +16 años',
    delay_aos: 100
  },
  {
    title: 'RITUALS',
    img: 'team.svg',
    subtitle: 'imagen ESCAPEROOM RITUALS.',
    isMultiplayer: true,
    players: 'Máx. 6 jugadores',
    time: '60 minutos',
    age: 'Edad: +16 años',
    delay_aos: 200
  }
];
