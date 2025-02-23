export interface BoardGameType {
  id: string;
  name: string;
  yearPublished: number | null;
  description: string;
  image: string;
  thumbnail: string;
  minPlayers: number | null;
  maxPlayers: number | null;
  playingTime: number | null;
  minAge: number | null;
  status?: {
    own: boolean;
    forTrade: boolean;
    want: boolean;
    wantToPlay: boolean;
  };
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
        $: any;
        status: any;
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
