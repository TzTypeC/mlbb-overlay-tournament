// ============================================
// MAIN DATA JSON - Sumber data untuk semua elemen
// ============================================
const gameData = {
    matchInfo: {
        title: "GLASSCO 10th",
        matchNumber: 3,
        gameNumber: 2,
        duration: "15:32",
        totalGames: 3  // BO1, BO3, BO5, etc
    },
    
    blueTeam: {
        name: "Blue Team",
        status: "Victory",
        logo: "https://user-images.githubusercontent.com/709451/182802334-d9c42afe-f35d-4a7b-86ea-9985f73f20c3.png",
        totalKill: 25,
        wins: 2,  // Jumlah game yang menang
        players: [
            {
                name: "Player One",
                hero: "Angela",
                heropict: "../Assets/HeroPick/angela.png",
                level: 15,
                kda: { kills: 10, deaths: 2, assists: 8 },
                gold: 8500,
                items: [
                    "../Assets/Itemandspell/Sky-Piercer.png",
                    "../Assets/Itemandspell/Sky-Piercer.png",
                    "../Assets/Itemandspell/Sky-Piercer.png",
                    "../Assets/Itemandspell/Sky-Piercer.png",
                    "../Assets/Itemandspell/Sky-Piercer.png",
                    "../Assets/Itemandspell/Sky-Piercer.png"
                ]
            },
            {
                name: "Player Two",
                hero: "Alice",
                heropict: "../Assets/HeroPick/alice.png",
                level: 14,
                kda: { kills: 8, deaths: 3, assists: 12 },
                gold: 7200,
                items: [
                    "../Assets/Itemandspell/Sky-Piercer.png",
                    "../Assets/Itemandspell/Sky-Piercer.png",
                    "",
                    "",
                    "",
                    ""
                ]
            },
            {
                name: "Player Three",
                hero: "Akai",
                heropict: "../Assets/HeroPick/akai.png",
                level: 13,
                kda: { kills: 5, deaths: 5, assists: 15 },
                gold: 6500,
                items: [
                    "../Assets/Itemandspell/Sky-Piercer.png",
                    "",
                    "",
                    "",
                    "",
                    ""
                ]
            },
            {
                name: "Player Four",
                hero: "Aamon",
                heropict: "../Assets/HeroPick/aamon.png",
                level: 14,
                kda: { kills: 9, deaths: 2, assists: 10 },
                gold: 7800,
                items: [
                    "../Assets/Itemandspell/Sky-Piercer.png",
                    "../Assets/Itemandspell/Sky-Piercer.png",
                    "../Assets/Itemandspell/Sky-Piercer.png",
                    "",
                    "",
                    ""
                ]
            },
            {
                name: "Player Five",
                hero: "Argus",
                heropict: "../Assets/HeroPick/argus.png",
                level: 15,
                kda: { kills: 12, deaths: 1, assists: 6 },
                gold: 9200,
                items: [
                    "../Assets/Itemandspell/Sky-Piercer.png",
                    "../Assets/Itemandspell/Sky-Piercer.png",
                    "../Assets/Itemandspell/Sky-Piercer.png",
                    "../Assets/Itemandspell/Sky-Piercer.png",
                    "../Assets/Itemandspell/Sky-Piercer.png",
                    "../Assets/Itemandspell/Sky-Piercer.png"
                ]
            }
        ]
    },
    
    redTeam: {
        name: "Red Team",
        status: "Defeat",
        logo: "https://blogs.perficient.com/files/nodejs-1-logo-png-transparent-750x460.png",
        totalKill: 18,
        wins: 1,  // Jumlah game yang menang
        players: [
            {
                name: "Red Player One",
                hero: "Layla",
                heropict: "../Assets/HeroPick/angela.png",
                level: 14,
                kda: { kills: 7, deaths: 4, assists: 5 },
                gold: 7500,
                items: [
                    "../Assets/Itemandspell/Sky-Piercer.png",
                    "../Assets/Itemandspell/Sky-Piercer.png",
                    "",
                    "",
                    "",
                    ""
                ]
            },
            {
                name: "Red Player Two",
                hero: "Balmond",
                heropict: "../Assets/HeroPick/alice.png",
                level: 13,
                kda: { kills: 5, deaths: 6, assists: 8 },
                gold: 6200,
                items: [
                    "",
                    "",
                    "",
                    "",
                    "",
                    ""
                ]
            },
            {
                name: "Red Player Three",
                hero: "Chou",
                heropict: "../Assets/HeroPick/akai.png",
                level: 14,
                kda: { kills: 4, deaths: 5, assists: 10 },
                gold: 6800,
                items: [
                    "../Assets/Itemandspell/Sky-Piercer.png",
                    "",
                    "",
                    "",
                    "",
                    ""
                ]
            },
            {
                name: "Red Player Four",
                hero: "Saber",
                heropict: "../Assets/HeroPick/aamon.png",
                level: 13,
                kda: { kills: 2, deaths: 7, assists: 11 },
                gold: 5500,
                items: []
            },
            {
                name: "Red Player Five",
                hero: "Natalia",
                heropict: "../Assets/HeroPick/argus.png",
                level: 14,
                kda: { kills: 8, deaths: 3, assists: 7 },
                gold: 7900,
                items: [
                    "../Assets/Itemandspell/Sky-Piercer.png",
                    "../Assets/Itemandspell/Sky-Piercer.png",
                    "../Assets/Itemandspell/Sky-Piercer.png",
                    "../Assets/Itemandspell/Sky-Piercer.png",
                    "",
                    ""
                ]
            }
        ]
    }
};

// ============================================
// MARQUEE SETUP
// ============================================
function createMarqueeContent() {
    const botBlueTeamTitleText = document.getElementById("blueteam-bot-text-format");
    const botRedTeamTitleText = document.getElementById("redteam-bot-text-format");
    
    botBlueTeamTitleText.innerHTML = '';
    botRedTeamTitleText.innerHTML = '';
    
    // Create content 2x untuk seamless loop
    for (let j = 0; j < 2; j++) {
        for (let i = 0; i < 20; i++) {
            const span = document.createElement("span");
            span.className = "marquee-text mx-2 text-white text-xl font-bold";
            span.textContent = gameData.matchInfo.title;

            botBlueTeamTitleText.appendChild(span);
            botRedTeamTitleText.appendChild(span.cloneNode(true));
        }
    }
}

// ============================================
// AUTO POPULATE DATA
// ============================================
const DataPopulator = {
    /**
     * Set text content dengan auto-hide jika kosong
     */
    setText(elementId, value) {
        const el = document.getElementById(elementId);
        if (el) {
            if (value === "" || value === null || value === undefined) {
                el.style.opacity = "0";
                el.style.visibility = "hidden";
            } else {
                el.textContent = value;
                el.style.opacity = "1";
                el.style.visibility = "visible";
            }
        }
    },

    /**
     * Set image src dengan auto-hide jika kosong
     */
    setImage(elementId, src) {
        const el = document.getElementById(elementId);
        if (el) {
            if (src === "" || src === null || src === undefined) {
                el.style.opacity = "0";
                el.style.visibility = "hidden";
            } else {
                el.src = src;
                el.style.opacity = "1";
                el.style.visibility = "visible";
            }
        }
    },

    /**
     * Populate satu player
     */
    populatePlayer(team, playerNumber, playerData) {
        const prefix = `${team}-player${playerNumber}`;
        
        this.setImage(`${prefix}-heropict`, playerData.heropict);
        this.setText(`${prefix}-hero`, playerData.hero);
        this.setText(`${prefix}-name`, playerData.name);
        this.setText(`${prefix}-level`, playerData.level || "");
        
        // KDA format
        if (playerData.kda) {
            const kdaText = typeof playerData.kda === 'string' 
                ? playerData.kda 
                : `${playerData.kda.kills} / ${playerData.kda.deaths} / ${playerData.kda.assists}`;
            this.setText(`${prefix}-KDA`, kdaText);
        }
        
        this.setText(`${prefix}-gold`, playerData.gold || "");
        
        // Items
        if (playerData.items && Array.isArray(playerData.items)) {
            for (let i = 0; i < 6; i++) {
                this.setImage(`${prefix}-item${i + 1}`, playerData.items[i] || "");
            }
        } else {
            // Hide semua items jika tidak ada data
            for (let i = 1; i <= 6; i++) {
                this.setImage(`${prefix}-item${i}`, "");
            }
        }
    },

    /**
     * Update win indicators berdasarkan wins dan totalGames
     */
    updateWinIndicators(team, teamWins, totalGames) {
        // Update atau create win boxes
        const container = document.querySelector(`#${team}-kill-score .flex.gap-2`);
        if (!container) return;

        // Clear existing boxes
        container.innerHTML = '';

        // Create boxes sesuai totalGames
        for (let i = 1; i <= totalGames; i++) {
            const winBox = document.createElement("div");
            winBox.className = "w-4 h-4 rounded-sm";
            winBox.id = `${team}-win-${i}`;

            // Color box based on wins
            if (i <= teamWins) {
                winBox.classList.add("bg-blue-500");
            } else {
                winBox.classList.add("bg-white/20");
            }

            container.appendChild(winBox);
        }
    },

    /**
     * Populate semua players dalam team
     */
    populateTeam(team, teamData) {
        if (teamData.players && Array.isArray(teamData.players)) {
            teamData.players.forEach((playerData, index) => {
                if (index < 5) {
                    this.populatePlayer(team, index + 1, playerData);
                }
            });
        }
        
        // Populate team info
        this.setText(`${team}-name`, teamData.name || "");
        this.setText(`${team}-status`, teamData.status || "");
        this.setImage(`${team}-logo`, teamData.logo || "");
        this.setText(`${team}-total-kill`, teamData.totalKill || "");
    },

    /**
     * Populate semua data dari gameData
     */
    populateAll(data) {
        // Marquee
        createMarqueeContent();
        
        // Match info
        this.setText("match-game-title", `MATCH ${data.matchInfo.matchNumber} - GAME ${data.matchInfo.gameNumber}`);
        this.setText("game-duration", data.matchInfo.duration || "00:00");
        
        // Teams
        this.populateTeam("blueteam", data.blueTeam);
        this.populateTeam("redteam", data.redTeam);
        
        // Win indicators
        const totalGames = data.matchInfo.totalGames || 3;
        this.updateWinIndicators("blueteam", data.blueTeam.wins, totalGames);
        this.updateWinIndicators("redteam", data.redTeam.wins, totalGames);
    }
};

// ============================================
// INITIALIZE
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    DataPopulator.populateAll(gameData);
});
