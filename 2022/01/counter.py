data = open('data.txt', 'r')

elves = []
count = 0
elf = []

lines = data.readlines()
for line in lines:
  if line == '\n':
    total = sum(elf)
    elves.append(total)
    elf = []   
  else:
    elf.append(int(line.strip()))

elves.append(sum(elf))
elves.sort(reverse=True)

print(elves[0] , elves[1] , elves[2])
print(elves[0] + elves[1] + elves[2])
