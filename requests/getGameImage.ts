const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getGameImage(gameId: string): Promise<string> {
  try {
    // Ajout d'un délai aléatoire entre 100ms et 1000ms
    await delay(Math.random() * 900 + 100);

    const response = await fetch(
      `https://boardgamegeek.com/xmlapi2/thing?id=${gameId}`
    );

    // Si on reçoit un code 429 (trop de requêtes), on attend et on réessaie
    if (response.status === 429) {
      await delay(2000); // Attendre 2 secondes
      return getGameImage(gameId); // Réessayer
    }

    const text = await response.text();
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(text, "text/xml");
    const imageUrl = xmlDoc.querySelector("image")?.textContent;

    return imageUrl || "https://picsum.photos/250/250";
  } catch (error) {
    console.error("Erreur lors de la récupération de l'image:", error);
    return "https://picsum.photos/250/250";
  }
}
