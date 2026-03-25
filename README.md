# Eldritch Game - Frontend

[🎮 Game demo](https://eldritch-game.netlify.app/)  
[🧠 Backend repo](https://github.com/vertigo1919/eldritch-backend)
  
**Eldritch** is a browser-based multiplayer horror quiz RPG, built as part of a collaborative full-stack project for my Northcoders bootcamp final project. The frontend is built using **Phaser**. Players battle eldritch monsters by answering questions, either solo or as part of a team. 

This was developed as part of a group project, where we collaborated on designing the overall game logic, integrating frontend and backend systems, building real-time multiplayer interactions, and maintaining shared standards for code and structure. My role was to design and build [the backend multiplayer game engine](https://github.com/vertigo1919/eldritch-backend) that powers this frontend, using Node.js, Socket.IO, and PostgreSQL to implement synced combat, match history, and reconnection-safe game state.

## Running Locally

Pre-requisite:  [backend](https://github.com/vertigo1919/eldritch-backend) installed locally and running.

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

## Frontend Responsibilities

The frontend acts as the game client responsible for everything the player sees and interacts with.

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

## 🏗️ Frontend Architecture 

Separate concerns:

- **Scenes** → high-level flow  
- **UI modules** → rendering & layout  
- **FX modules** → animations  
- **Controllers** → game logic coordination  
- **API layer** → backend communication  

This makes the project easier to maintain and debug, especially when handling real-time multiplayer events.
