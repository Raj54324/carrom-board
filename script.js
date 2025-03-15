
const canvas = document.getElementById("carromCanvas");
const ctx = canvas.getContext("2d");

function drawBoard() {
    // Outer border
    ctx.fillStyle = "#deb887";
    ctx.fillRect(0, 0, 600, 600);

    // Inner board
    ctx.fillStyle = "#f5deb3";
    ctx.fillRect(50, 50, 500, 500);

    // Draw pockets
    const pocketRadius = 15;
    const pocketPositions = [
        [50, 50],
        [550, 50],
        [50, 550],
        [550, 550]
    ];
    ctx.fillStyle = "#000";
    pocketPositions.forEach(pos => {
        ctx.beginPath();
        ctx.arc(pos[0], pos[1], pocketRadius, 0, Math.PI * 2);
        ctx.fill();
    });
}

drawBoard();
