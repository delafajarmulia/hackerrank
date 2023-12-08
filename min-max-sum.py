def miniMaxSum(arr):
    min = arr[0]
    max = arr[0]
    resultMin = 0
    resultMax = 0
    for i in range(len(arr)):
        if(arr[i] < min):
            min = arr[i]
    
    for i in range(len(arr)):
        if(arr[i] > max):
            max = arr[i]

    for i in range(len(arr)):
        if(arr[i] != max):
            resultMin += arr[i]
        
    for i in range(len(arr)):
        if(arr[i] != min):
            resultMax += arr[i]

    return resultMin, resultMax

arr = [1, 2, 3, 4, 5]
print(miniMaxSum(arr=arr))