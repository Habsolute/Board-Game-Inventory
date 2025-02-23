type TopNavigationRoute = {
  accueil: {
    label: string;
    href: string;
  };
  pretDeJeu: {
    label: string;
    href: string;
  };
};

export const TopNavigationRoute: TopNavigationRoute = {
  accueil: {
    label: "Accueil",
    href: "/",
  },
  pretDeJeu: {
    label: "Pret de jeu",
    href: "/pretDeJeu",
  },
};
