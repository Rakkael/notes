# arr = input()
arr = [1, 2, 3, 4, 3, 2, 1, 1]
ans = [1 for x in range(0, len(arr))]
i = 0
while (i < len(arr)):
    pre = i - 1
    nex = i + 1
    if (i == 0):
        pre = 0
    if (i == len(arr) - 1):
        nex = i

    if (arr[i] > arr[pre]):
        if(ans[i] <= ans[pre]):
            ans[i] = ans[pre] + 1

    if (arr[i] > arr[nex]):
        if (ans[i] <= ans[nex]):
            ans[i] = ans[nex] + 1

    i += 1

i = len(arr) - 1
while (i >= 0):
    pre = i - 1
    nex = i + 1
    if (i == 0):
        pre = 0
    if (i == len(arr) - 1):
        nex = i

    if (arr[i] > arr[pre]):
        if(ans[i] <= ans[pre]):
            ans[i] = ans[pre] + 1

    if (arr[i] > arr[nex]):
        if (ans[i] <= ans[nex]):
            ans[i] = ans[nex] + 1

    i -= 1

print(ans)
print(sum(ans))

# class Solution:
#     def house(self, person):
#         house = [1 for i in person]
#         # 正着扫
#         for i in range(1, len(person)):
#             if person[i] > person[i-1] and house[i-1] >= house[i]:
#                 house[i] = house[i-1] + 1
#             elif person[i] < person[i-1] and house[i-1] <= house[i]:
#                 house[i-1] = house[i]+1
#         # 反着扫
#         for i in range(1, len(person))[::-1]:
#             if person[i] > person[i-1] and house[i-1] >= house[i]:
#                 house[i] = house[i-1]+1
#             elif person[i] < person[i-1] and house[i-1] <= house[i]:
#                 house[i-1] = house[i]+1

#         return(sum(house))
