import { characters } from "../data/characterData";
import { monsters } from "../data/monsterData";
import { questions } from "../data/questionData";

const DIFFICULTY_ORDER = ["easy", "medium", "hard"];

export function createSoloEncounterController(scene, ui, sceneData) {
  const state = {
    selectedIndex: sceneData.selectedIndex ?? 0,
    difficulty: sceneData.difficulty ?? "easy",
    currentStage: 0,
    player: null,
    monster: null,
    playerStats: null,
    monsterStats: null,
    questionPool: [],
    currentQuestion: null,
    playerSprite: null,
    monsterSprite: null,
  };

  function start() {
    state.player = characters[state.selectedIndex];

    state.playerStats = {
      hp: state.player.base_sanity,
      maxHp: state.player.base_sanity,
    };

    state.currentStage = DIFFICULTY_ORDER.indexOf(state.difficulty);
    if (state.currentStage === -1) state.currentStage = 0;

    loadStage(state.currentStage);
    createCharacters();

    ui.setHud({
      player: state.playerStats,
      monster: state.monsterStats,
    });

    showQuestion();
    ui.setTimer("");
  }

  function handleAnswer(index) {
    if (!state.currentQuestion) return;

    ui.lockAnswers();

    const isCorrect = index === state.currentQuestion.correctIndex;
    ui.showAnswerFeedback(state.currentQuestion.correctIndex, index);

    if (isCorrect) {
      state.monsterStats.hp -= state.player.base_attack;
      if (state.monsterStats.hp < 0) state.monsterStats.hp = 0;
    } else {
      state.playerStats.hp -= state.monster.attack_dmg;
      if (state.playerStats.hp < 0) state.playerStats.hp = 0;
    }

    ui.setHud({
      player: state.playerStats,
      monster: state.monsterStats,
    });

    if (state.playerStats.hp <= 0) {
      ui.showEndOverlay("Defeat!", () => {
        scene.scene.start("HomePage");
      });
      return;
    }

    if (state.monsterStats.hp <= 0) {
      goToNextStageOrWin();
      return;
    }

    scene.time.delayedCall(1000, () => {
      showQuestion();
    });
  }

  function goToNextStageOrWin() {
    if (state.currentStage >= monsters.length - 1) {
      ui.showEndOverlay("Victory!", () => {
        scene.scene.start("HomePage");
      });
      return;
    }

    state.currentStage += 1;
    loadStage(state.currentStage);
    updateMonsterSprite();

    ui.setHud({
      player: state.playerStats,
      monster: state.monsterStats,
    });

    scene.time.delayedCall(1000, () => {
      showQuestion();
    });
  }

  function loadStage(stageIndex) {
    state.difficulty = DIFFICULTY_ORDER[stageIndex] ?? "easy";
    state.monster = monsters[stageIndex] ?? monsters[0];

    state.monsterStats = {
      hp: state.monster.max_hp,
      maxHp: state.monster.max_hp,
    };

    state.questionPool = questions.filter(
      (question) => question.difficulty === state.difficulty
    );
  }

  function formatQuestion(question) {
    return {
      question_id: question.question_id,
      prompt: question.prompt,
      options: [
        question.option_a,
        question.option_b,
        question.option_c,
        question.option_d,
      ],
      correctIndex: ["a", "b", "c", "d"].indexOf(question.correct_option),
    };
  }

  function showQuestion() {
    if (!state.questionPool.length) {
      ui.showEndOverlay("Defeat!", () => {
        scene.scene.start("HomePage");
      });
      return;
    }

    const randomIndex = Math.floor(Math.random() * state.questionPool.length);
    const nextQuestion = state.questionPool.splice(randomIndex, 1)[0];

    state.currentQuestion = formatQuestion(nextQuestion);
    ui.setQuestion(state.currentQuestion);
  }

  function createCharacters() {
    state.playerSprite = scene.add
      .image(250, 380, state.player.image_name)
      .setOrigin(0.5)
      .setScale(0.3);

    state.monsterSprite = scene.add
      .image(980, 380, state.monster.image_name)
      .setOrigin(0.5)
      .setScale(0.5);
  }

  function updateMonsterSprite() {
    if (state.monsterSprite) {
      state.monsterSprite.setTexture(state.monster.image_name);
    }
  }

  function shutdown() {}

  return {
    start,
    handleAnswer,
    shutdown,
  };
}