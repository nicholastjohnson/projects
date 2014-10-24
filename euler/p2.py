num1 = 0
num2 = 1
tot = 0
sums = 0

while num2 < 4000000:
    if num2 % 2 == 0:
        tot += num2
        print sums
        print tot
    sums = num1 + num2
    num1 = num2
    num2 = sums
