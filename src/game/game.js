import Phaser from "phaser";


export function createPhaserGame(parentId) {
  return new Phaser.Game({
    type: Phaser.AUTO,
    parent: parentId,
    width: 1280,
    height: 720,
    backgroundColor: "#0b0b10",
    scene: [],
    scale: { mode: Phaser.Scale.FIT, autoCenter: Phaser.Scale.CENTER_BOTH },
  });
}