import Phaser from "phaser";
import background from "../assets/background.png";
import victory from "../assets/victory.png";

export default class VictoryPage extends Phaser.Scene {
  constructor() {
    super("VictoryPage");
  }

  preload() {
    this.load.image("background", background);
    this.load.image("victory", victory);
  }

  create() {
    this.createBackground();

    const victoryImg = this.add
      .image(this.scale.width / 2, this.scale.height / 2, "victory")
      .setOrigin(0.5)
      .setScale(0.5);

    const victoryTitle = this.add
      .text(this.scale.width / 2, 100, "Victory", {
        fontSize: "64px",
        fontFamily: "Blackletter",
        color: "#FFFFFF",
      })
      .setOrigin(0.5);

    this.createContinueButton();
  }

  createBackground() {
    const background = this.add.image(0, 0, "background").setOrigin(0);
    const scaleX = this.scale.width / background.width;
    const scaleY = this.scale.height / background.height;
    background.setScale(Math.max(scaleX, scaleY));
  }

  createContinueButton() {
    const continueButton = this.add
      .text(this.scale.width / 2, 650, "Continue", {
        fontSize: "32px",
        color: "#FFFFFF",
        backgroundColor: "#494949",
        fontFamily: "Blackletter",
      })
      .setOrigin(0.5);

    continueButton.setInteractive({ useHandCursor: true });
    continueButton.on("pointerdown", () => {
      this.scene.start("ComingSoon");
    });
  }
}
