import Phaser from "phaser";
import createMuteToggle from "../game/ui/BackgroundMusicToggle";

export default class LeaderboardScene extends Phaser.Scene {
  constructor() {
    super("LeaderboardScene");
  }

  create = async () => {
    const bg = this.add.image(0, 0, "background").setOrigin(0);
    const scaleX = this.scale.width / bg.width;
    const scaleY = this.scale.height / bg.height;
    bg.setScale(Math.max(scaleX, scaleY));

    createMuteToggle(this, "backgroundmp3");

    this.add
      .text(this.scale.width / 2, 100, "Leaderboard", {
        fontSize: "64px",
        fontFamily: "Blackletter",
        color: "#FFFFFF",
      })
      .setOrigin(0.5);

    let leaderboardData;

    async function fetchLeaderboard() {
      const response = await fetch(
        `https://eldritch-backend.onrender.com/api/leaderboard`,
      );
      leaderboardData = await response.json();
    }
    await fetchLeaderboard();

    let index = 0;

    for (let player of leaderboardData) {
      const score =
        player.easy_questions_correct * 10 +
        player.medium_questions_correct * 20 +
        player.hard_questions_correct * 30;

      const accuracy =
        ((player.easy_questions_correct +
          player.medium_questions_correct +
          player.hard_questions_correct) *
          100) /
        player.total_questions_attempted;

      this.add.text(
        100,
        160 + index * 40,
        `${index + 1}. ${player.display_name} - ${score} - ${accuracy.toFixed(2)}%`,
        {
          fontSize: "28px",
          color: "#D8D8FF",
        },
      );
      index += 1;
    }
  };
}
