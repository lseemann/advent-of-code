data = open('data.txt', 'r')

itemValues = {
  'rock': 1, 
  'paper': 2, 
  'scissors': 3, 
}

outcomeValues = {
  'win': 6,
  'lose': 0,
  'draw': 3
}

opponentMap = {
  'A': 'rock',
  'B': 'paper',
  'C': 'scissors'
}

playerMap = {
  'X': 'rock',
  'Y': 'paper',
  'Z': 'scissors'
}

# Yields the outcome given the opponent’s move and the player’s move.
# moveMap[OPPONENT][PLAYER]
outcomeMap = {
  'rock': {
    'rock': 'draw',
    'paper': 'win',
    'scissors': 'lose'
  },
  'paper': {
    'rock': 'lose',
    'paper': 'draw',
    'scissors': 'win'
  },
  'scissors': {
    'rock': 'win',
    'paper': 'lose',
    'scissors': 'draw'
  },
}

score = 0

lines = data.readlines()

for line in lines:
  line = line.strip()

  opponent = opponentMap[line.split()[0]]
  player = playerMap[line.split()[1]]

  if opponent and player:
    outcome = outcomeMap[opponent][player]
    score += outcomeValues[outcome]
    score += itemValues[player]

print(score)
