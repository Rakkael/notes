inputs = int(input())
array = list(map(int, input().split()))
f = True
biggest = 0
ans = 0
for i in range(0, inputs - 1):
    biggest = max(array[:i+1])
    for j in range(i + 1, inputs):
        if (biggest <= array[j]):
            f = True
            ans = i + 1
            continue
        else:
            f = False
            break
    if (f):
        break
print(ans)
