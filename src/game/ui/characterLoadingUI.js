export function createPlayerSprites(scene, groupPlayers) {
  const positionsByCount = {
    1: [{ x: 250, y: 340 }],
    2: [
      { x: 250, y: 340 },
      { x: 380, y: 340 },
    ],
    3: [
      { x: 120, y: 340 },
      { x: 250, y: 340 },
      { x: 380, y: 340 },
    ],
    4: [
      { x: 120, y: 340 },
      { x: 250, y: 340 },
      { x: 380, y: 340 },
      { x: 510, y: 340 },
    ],
  };

  if (!groupPlayers.length) return [];

  const party = groupPlayers.slice(0, 4);
  const positions = positionsByCount[party.length] ?? positionsByCount[1];

  return party.map((player, index) => {
    const imageName = player?.character?.image_name;
    if (!imageName) return null;
    if (!scene.textures.exists(imageName)) return null;

    const { x, y } = positions[index];

    return scene.add
      .image(x, y, imageName)
      .setOrigin(0.5)
      .setScale(0.3);
  }).filter(Boolean);
}