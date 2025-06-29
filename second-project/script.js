// Full list of 12 Pokémon
const pokemons = [
  {
    name: "Pikachu",
    image: "images/pikachu.png",
    skills: [
      { name: "Thunderbolt", damage: 30 },
      { name: "Quick Attack", damage: 15 },
      { name: "Electro Ball", damage: 25 },
      { name: "Thunder Wave", damage: 10 },
    ],
  },
  {
    name: "Charizard",
    image: "images/charizard.png",
    skills: [
      { name: "Flamethrower", damage: 35 },
      { name: "Slash", damage: 20 },
      { name: "Fire Spin", damage: 25 },
      { name: "Dragon Claw", damage: 30 },
    ],
  },
  {
    name: "Squirtle",
    image: "images/squirtle.png",
    skills: [
      { name: "Water Gun", damage: 25 },
      { name: "Tackle", damage: 10 },
      { name: "Aqua Tail", damage: 20 },
      { name: "Bubble", damage: 15 },
    ],
  },
  {
    name: "Bulbasaur",
    image: "images/bulbasaur.png",
    skills: [
      { name: "Vine Whip", damage: 20 },
      { name: "Tackle", damage: 10 },
      { name: "Razor Leaf", damage: 25 },
      { name: "Leech Seed", damage: 15 },
    ],
  },
  {
    name: "Jigglypuff",
    image: "images/jigglypuff.png",
    skills: [
      { name: "Sing", damage: 0 },
      { name: "Pound", damage: 15 },
      { name: "Body Slam", damage: 25 },
      { name: "Hyper Voice", damage: 30 },
    ],
  },
  {
    name: "Mewtwo",
    image: "images/mewtwo.png",
    skills: [
      { name: "Psychic", damage: 40 },
      { name: "Shadow Ball", damage: 35 },
      { name: "Swift", damage: 20 },
      { name: "Barrier", damage: 0 },
    ],
  },
  {
    name: "Snorlax",
    image: "images/snorlax.png",
    skills: [
      { name: "Body Slam", damage: 25 },
      { name: "Rest", damage: 0 },
      { name: "Lick", damage: 15 },
      { name: "Hyper Beam", damage: 35 },
    ],
  },
  {
    name: "Gengar",
    image: "images/gengar.png",
    skills: [
      { name: "Shadow Punch", damage: 25 },
      { name: "Hypnosis", damage: 0 },
      { name: "Dark Pulse", damage: 30 },
      { name: "Dream Eater", damage: 20 },
    ],
  },
  {
    name: "Eevee",
    image: "images/eevee.png",
    skills: [
      { name: "Quick Attack", damage: 15 },
      { name: "Bite", damage: 20 },
      { name: "Swift", damage: 15 },
      { name: "Take Down", damage: 25 },
    ],
  },
  {
    name: "Machop",
    image: "images/machop.png",
    skills: [
      { name: "Karate Chop", damage: 20 },
      { name: "Low Kick", damage: 25 },
      { name: "Seismic Toss", damage: 30 },
      { name: "Focus Energy", damage: 0 },
    ],
  },
  {
    name: "Lucario",
    image: "images/lucario.png",
    skills: [
      { name: "Aura Sphere", damage: 35 },
      { name: "Close Combat", damage: 30 },
      { name: "Quick Attack", damage: 15 },
      { name: "Extreme Speed", damage: 25 },
    ],
  },
  {
    name: "Garchomp",
    image: "images/garchomp.png",
    skills: [
      { name: "Dragon Rush", damage: 30 },
      { name: "Earthquake", damage: 35 },
      { name: "Crunch", damage: 25 },
      { name: "Slash", damage: 20 },
    ],
  },
  {
    name: "Alakazam",
    image: "images/alakazam.png",
    skills: [
      { name: "Psychic", damage: 35 },
      { name: "Shadow Ball", damage: 25 },
      { name: "Recover", damage: 0 },
      { name: "Confusion", damage: 20 },
    ],
  },
  {
    name: "Blastoise",
    image: "images/blastoise.png",
    skills: [
      { name: "Hydro Pump", damage: 35 },
      { name: "Water Gun", damage: 20 },
      { name: "Skull Bash", damage: 25 },
      { name: "Bite", damage: 15 },
    ],
  },
  {
    name: "Arcanine",
    image: "images/arcanine.png",
    skills: [
      { name: "Flame Wheel", damage: 30 },
      { name: "Extreme Speed", damage: 25 },
      { name: "Fire Fang", damage: 20 },
      { name: "Roar", damage: 0 },
    ],
  },
  {
    name: "Dragonite",
    image: "images/dragonite.png",
    skills: [
      { name: "Dragon Claw", damage: 30 },
      { name: "Hyper Beam", damage: 40 },
      { name: "Fly", damage: 25 },
      { name: "Thunder Punch", damage: 20 },
    ],
  },
  {
    name: "Togekiss",
    image: "images/togekiss.png",
    skills: [
      { name: "Air Slash", damage: 25 },
      { name: "Aura Sphere", damage: 30 },
      { name: "Wish", damage: 0 },
      { name: "Fairy Wind", damage: 20 },
    ],
  },
  {
    name: "Infernape",
    image: "images/infernape.png",
    skills: [
      { name: "Flare Blitz", damage: 35 },
      { name: "Mach Punch", damage: 20 },
      { name: "Close Combat", damage: 30 },
      { name: "Ember", damage: 15 },
    ],
  },
  {
    name: "Roserade",
    image: "images/roserade.png",
    skills: [
      { name: "Magical Leaf", damage: 20 },
      { name: "Poison Jab", damage: 25 },
      { name: "Leaf Storm", damage: 30 },
      { name: "Toxic", damage: 0 },
    ],
  },
  {
    name: "Metagross",
    image: "images/metagross.png",
    skills: [
      { name: "Meteor Mash", damage: 35 },
      { name: "Zen Headbutt", damage: 25 },
      { name: "Iron Defense", damage: 0 },
      { name: "Bullet Punch", damage: 20 },
    ],
  },
];

// --- SELECT.HTML Functions ---
let selectedPokemons = [];

function renderPokemonSelection() {
  const container = document.getElementById("pokemonList");
  pokemons.forEach((pokemon, index) => {
    const div = document.createElement("div");
    div.classList.add("pokemon-card");
    div.innerHTML = `
      <img src="${pokemon.image}" alt="${pokemon.name}">
      <h3>${pokemon.name}</h3>
      <button onclick="selectPokemon(${index})">Select</button>
    `;
    container.appendChild(div);
  });
}

function selectPokemon(index) {
  if (
    selectedPokemons.length < 3 &&
    !selectedPokemons.includes(pokemons[index])
  ) {
    selectedPokemons.push(pokemons[index]);
    alert(`${pokemons[index].name} selected!`);
  }

  if (selectedPokemons.length === 3) {
    localStorage.setItem("selectedPokemons", JSON.stringify(selectedPokemons));
    document.getElementById("startBtn").disabled = false;
  }
}

function startTournament() {
  window.location.href = "index.html";
}

// --- INDEX.HTML Round Robin Tournament Logic ---

function getRandomTeam() {
  return [...pokemons].sort(() => 0.5 - Math.random()).slice(0, 3);
}

function startRoundRobinTournament() {
  const playerTeam = JSON.parse(localStorage.getItem("selectedPokemons"));
  const playerName = localStorage.getItem("playerName") || "You";

  const aiNames = ["Ace", "Rico", "Clark", "Ramyr", "Thonie", "James", "Luis"];
  const players = [
    { name: playerName, pokemons: playerTeam },
    ...aiNames.map((name) => ({
      name,
      pokemons: getRandomTeam(),
    })),
  ];

  const matches = [];
  const scores = {};

  players.forEach((p) => (scores[p.name] = 0));

  for (let i = 0; i < players.length; i++) {
    for (let j = i + 1; j < players.length; j++) {
      matches.push([players[i], players[j]]);
    }
  }

  let currentMatch = 0;

  function playNextMatch() {
    if (currentMatch >= matches.length) {
      const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
      const maxScore = sorted[0][1];
      const winners = sorted.filter(([_, score]) => score === maxScore).map(([name]) => name);
      document.getElementById("tournamentResults").innerHTML = `
        <h2>🏆 Winners: ${winners.join(", ")}</h2>
      `;
      return;
    }

    const [playerA, playerB] = matches[currentMatch];
    const isUserMatch = playerA.name === playerName || playerB.name === playerName;

    if (isUserMatch) {
      play3vs3FullKO(playerA, playerB, (winner) => {
        scores[winner.name]++;
        document.getElementById("tournamentStatus").innerHTML += `<p>${playerA.name} vs ${playerB.name} → Winner: ${winner.name}</p>`;
        currentMatch++;
        setTimeout(playNextMatch, 1000);
      });
    } else {
      const winner = simulate3v3BattleFullKO(playerA, playerB);
      scores[winner.name]++;
      document.getElementById("tournamentStatus").innerHTML += `<p>${playerA.name} vs ${playerB.name} → Winner: ${winner.name}</p>`;
      currentMatch++;
      setTimeout(playNextMatch, 1000);
    }
  }

  playNextMatch();
}

function simulate3v3BattleFullKO(playerA, playerB) {
  let indexA = 0,
    indexB = 0;

  while (indexA < 3 && indexB < 3) {
    const totalA = playerA.pokemons[indexA].skills.reduce(
      (s, sk) => s + sk.damage,
      0
    );
    const totalB = playerB.pokemons[indexB].skills.reduce(
      (s, sk) => s + sk.damage,
      0
    );
    if (totalA >= totalB) indexB++;
    else indexA++;
  }

  return indexA < 3 ? playerA : playerB;
}

function play3vs3FullKO(user, ai, callback) {
  const arena = document.getElementById("battleArena");
  const controls = document.getElementById("battleControls");
  arena.innerHTML = "";
  controls.innerHTML = "";

  const userHPs = [100, 100, 100];
  const aiHPs = [100, 100, 100];
  let currentUserIndex = 0;
  let currentAiIndex = 0;
  let matchEnded = false;

  function renderArena() {
    const userPoke = user.pokemons[currentUserIndex];
    const aiPoke = ai.pokemons[currentAiIndex];

    arena.innerHTML = `
      <div>
        <img src="${userPoke.image}" alt="${userPoke.name}">
        <p>${user.name}: ${userPoke.name} HP: <span id="userHP">${userHPs[currentUserIndex]}</span></p>
      </div>
      <div>
        <img src="${aiPoke.image}" alt="${aiPoke.name}">
        <p>${ai.name}: ${aiPoke.name} HP: <span id="aiHP">${aiHPs[currentAiIndex]}</span></p>
      </div>
    `;

    controls.innerHTML = "<h3>Choose a skill:</h3>";

    userPoke.skills.forEach((skill) => {
      const btn = document.createElement("button");
      btn.textContent = skill.name;
      btn.onclick = () => {
        if (matchEnded) return;

        aiHPs[currentAiIndex] -= skill.damage;
        document.getElementById("aiHP").textContent = Math.max(
          0,
          aiHPs[currentAiIndex]
        );

        if (aiHPs[currentAiIndex] <= 0) {
          currentAiIndex++;
          if (currentAiIndex >= 3) return endMatch(user);
          renderArena();
          return;
        }

        // AI attack
        const enemySkill =
          ai.pokemons[currentAiIndex].skills[Math.floor(Math.random() * 4)];
        userHPs[currentUserIndex] -= enemySkill.damage;
        document.getElementById("userHP").textContent = Math.max(
          0,
          userHPs[currentUserIndex]
        );

        if (userHPs[currentUserIndex] <= 0) {
          currentUserIndex++;
          if (currentUserIndex >= 3) return endMatch(ai);
          renderArena();
        }
      };
      controls.appendChild(btn);
    });

    // Switch Pokémon
    const switchDiv = document.createElement("div");
    switchDiv.innerHTML = `<h4>Switch Pokémon:</h4>`;
    user.pokemons.forEach((poke, index) => {
      if (userHPs[index] > 0 && index !== currentUserIndex) {
        const switchBtn = document.createElement("button");
        switchBtn.textContent = poke.name;
        switchBtn.onclick = () => {
          if (matchEnded) return;
          currentUserIndex = index;
          renderArena();
        };
        switchDiv.appendChild(switchBtn);
      }
    });
    controls.appendChild(switchDiv);
  }

  function endMatch(winner) {
    matchEnded = true;
    setTimeout(() => callback(winner), 1000);
  }

  renderArena();
}