int quadrantSize;
color[] quadrantColors;

void setup() {
  size(400, 400);
  quadrantSize = width / 2;
  quadrantColors = new color[4];
  noStroke();
}

void draw() {
  background(255);
  
  // Check mouse position and update quadrantColors accordingly
  int currentQuadrant = getCurrentQuadrant(mouseX, mouseY);
  for (int i = 0; i < 4; i++) {
    if (i == currentQuadrant) {
      quadrantColors[i] = color(0); // Black
    } else {
      quadrantColors[i] = color(255); // White
    }
  }
  
  // Draw the four quadrants with their respective colors
  for (int i = 0; i < 4; i++) {
    fill(quadrantColors[i]);
    drawQuadrant(i);
  }
}

int getCurrentQuadrant(int x, int y) {
  if (x < width / 2) {
    if (y < height / 2) {
      return 0; // Top-left quadrant
    } else {
      return 2; // Bottom-left quadrant
    }
  } else {
    if (y < height / 2) {
      return 1; // Top-right quadrant
    } else {
      return 3; // Bottom-right quadrant
    }
  }
}

void drawQuadrant(int quadrant) {
  int x = (quadrant % 2) * quadrantSize;
  int y = (quadrant / 2) * quadrantSize;
  rect(x, y, quadrantSize, quadrantSize);
}