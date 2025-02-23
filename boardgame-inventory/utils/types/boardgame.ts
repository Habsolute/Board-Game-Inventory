export interface BoardGameType {
  id: string;
  name: string;
  yearPublished?: number;
  description?: string;
  image?: string;
  thumbnail?: string;
  minPlayers?: number;
  maxPlayers?: number;
  playingTime?: number;
  minAge?: number;
}

export interface BGGSearchResult {
  items: {
    item: Array<{
      $: { id: string };
      name: [{ $: { value: string } }];
    }>;
  };
}

export interface BGGGameDetails {
  items: {
    item: [
      {
        name: [{ $: { value: string } }];
        yearpublished: [{ $: { value: string } }];
        description: [string];
        image: [string];
        thumbnail: [string];
        minplayers: [{ $: { value: string } }];
        maxplayers: [{ $: { value: string } }];
        playingtime: [{ $: { value: string } }];
        minage: [{ $: { value: string } }];
      }
    ];
  };
}
