for j in range (1,101):
    c=0
    i = 1
    for i in range (i,j+1):
        if j%i==0: 
            c+=1
    if c==2:
        print(j,end='')