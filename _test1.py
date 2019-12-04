while True:
    print('who are you')
    name = input()
    if name != 'joe':
        continue
    print("hello, joe, what is the pwd? (maybe a fish)")
    pwd = input()
    if pwd == 'swordfish':
        break
print('access granted')
