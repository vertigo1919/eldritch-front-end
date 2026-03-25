# Eldritch Frontend

**Eldritch** is a browser-based **multiplayer horror quiz RPG**, built as part of a collaborative full-stack project as part of my northcoders bootcamp final project. 

The frontend is built using **Phaser**. Players battle eldritch monsters by answering questions, either solo or as part of a team. 

My role was to design and write [the backend multi-player game engine](https://github.com/vertigo1919/eldritch-backend) that powers this fornt end, using Socket.IO Node abd PostgreSQL to implement synced combat, match history, and reconnection-safe game state. 

- [🎮 Game demo](https://eldritch-game.netlify.app/)  
- [🧠 Backend repo](https://github.com/vertigo1919/eldritch-backend)
---

## Running Locally

Pre-requisite:  backend locally installed (https://github.com/vertigo1919/eldritch-backend) and running.

```bash
npm install
npm run dev
```

## 🎮 Gameplay Experience

Players:

- choose a character  
- enter solo or multiplayer mode  
- answer timed questions  
- deal damage through correct answers  
- take damage through incorrect answers  
- progress through multiple stages  
- fight increasingly difficult monsters  

---

## 🧩 Frontend Responsibilities

The frontend acts as the **game client**, responsible for everything the player sees and interacts with.

### Key Systems

#### 🎬 Scene Management
- Home / title screen  
- Character selection  
- Multiplayer lobby  
- Battle / encounter scene  
- Victory / defeat screens  

#### ⚔️ Encounter System
- Dynamic monster rendering  
- Player sprite management  
- Question + answer UI  
- Health bar updates  
- Countdown timer  
- Stage transitions  

#### ✨ Visual Feedback
- Monster hit effects  
- Player damage animations  
- Idle animations  
- Stage overlays  
- Speech bubbles for team reactions  


## 🏗️ Architecture Approach

The frontend is structured to separate concerns:

- **Scenes** → high-level flow  
- **UI modules** → rendering & layout  
- **FX modules** → animations  
- **Controllers** → game logic coordination  
- **API layer** → backend communication  

This made the project easier to maintain and debug, especially when handling real-time multiplayer events.





### Browser-Based Game Design
Building a game in a web environment required:

- scene lifecycle control  
- event-driven architecture  
- structured rendering logic  
