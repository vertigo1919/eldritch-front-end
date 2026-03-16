import Phaser from "phaser";
import logo from "../assets/logo.png";
import title from "../assets/title2.png";

export default class IntroScene extends Phaser.Scene {
  constructor() {
    super("IntroScene");
  }

  preload() {
    this.load.image("logo", logo);
    this.load.image("title", title);
  }

  create() {
    const centerX = this.scale.width / 2;
    const centerY = this.scale.height / 2;

    const studiologo = this.add
      .image(this.scale.width / 2, 250, "logo")
      .setOrigin(0.5)
      .setAlpha(0);

    const presentsText = this.add
      .text(centerX, centerY + 80, "presents", {
        fontSize: "24px",
        fontFamily: "Blackletter",
        color: "#696969",
        fontStyle: "italic",
      })
      .setOrigin(0.5)
      .setAlpha(0);

    const titleText = this.add
      .image(centerX, centerY + 320, "title")
      .setOrigin(0.5)
      .setAlpha(0)
      .setScale(0.35);

    this.tweens.add({
      targets: [studiologo, presentsText],
      alpha: 1,
      duration: 2000,
      onComplete: () => {
        this.tweens.add({
          targets: titleText,
          alpha: 1,
          duration: 2500,
          onComplete: () => {
            this.cameras.main.fadeOut(1500, 0, 0, 0);
            this.cameras.main.once(
              Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE,
              () => {
                this.scene.start("HomePage");
              },
            );
          },
        });
      },
    });
  }
}
