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

outcomeMap = {
  'X': 'lose',
  'Y': 'draw',
  'Z': 'win'
}

# Yields the move given the opponent’s move and the desired outcome.
# moveMap[OPPONENT][DESIRED_OUTCOME]
moveMap = {
  'rock': {
    'win': 'paper',
    'lose': 'scissors',
    'draw': 'rock'
  },
  'paper': {
    'win': 'scissors',
    'lose': 'rock',
    'draw': 'paper'
  },
  'scissors': {
    'win': 'rock',
    'lose': 'paper',
    'draw': 'scissors'
  },
}

score = 0

lines = data.readlines()

for line in lines:
  line = line.strip()

  opponent = opponentMap[line.split()[0]]
  desired_outcome = outcomeMap[line.split()[1]]

  if opponent and desired_outcome:
    player_move = moveMap[opponent][desired_outcome]
    score += outcomeValues[desired_outcome]
    score += itemValues[player_move]

print(score)
