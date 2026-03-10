import Phaser from "phaser";
import backgroundImg from "../assets/background.png";
import { createEncounterUI } from "../game/ui/encounterUi";

export default class EncounterScene extends Phaser.Scene {
  constructor() {
    super("EncounterScene");
  }

  init(data) {
    this.selectedIndex = data?.selectedIndex ?? null;
  }

  preload() {
    this.load.image("bg", backgroundImg);
  }

  create() {
    this.createBackground();

    this.ui = createEncounterUI(this, {
      width: this.scale.width,
      height: this.scale.height,
      onAnswer: (i) => {
        console.log("clicked answer", i);
      },
    });

    this.ui.setHud({});
    this.ui.setQuestion({});
    this.ui.setTimer("");
  }

  createBackground() {
    const bg = this.add.image(0, 0, "bg").setOrigin(0);
    const scaleX = this.scale.width / bg.width;
    const scaleY = this.scale.height / bg.height;
    bg.setScale(Math.max(scaleX, scaleY));
  }
}