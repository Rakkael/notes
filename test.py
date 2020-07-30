a = 1


def func1():
    print('func1', a)


def func2():
    a = 2
    # print('func2', a)
    func1()


func2()
