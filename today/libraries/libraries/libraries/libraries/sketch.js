// dino games
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup();


function draw ()

}

context.subscriptions.push(
  vscode.commands.registerCommand("games.startDino", async () => {
      Dino.start(context);
  })
)

"contributes": {
    "commands": [
        {
            "command": "games.startDino",
            "title": "Start Dino (Chrome Easter Egg)",
            "category": "Games"
        }
    ]
}
