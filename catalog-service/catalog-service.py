file = open("inventory.txt", 'r+')
lines = file.readlines()
while(True):
    choice = int(input("1. Buy Item \n 2. View Items \n 3. Exit \n"))
    if choice == 1:
        print("Item \t Price \t AvailableCount")
        items = []
        for line in lines:
            item, price, count = line.split(',')
            print(item, "\t", price, "\t", count)
            items.append(item)
            print("Which item you want to buy:", items)
            item_choice = input()
            if item_choice not in items:
                print("Item is not available!\n")
                break
            else:
                for i in range(len(lines)):
                    if lines[i].split(',')[0] == item_choice:
                        item, price, count = lines[i].split(',')
                        count = int(count) - 1
                        lines[i] = ','.join([item, price, str(count) + '\n'])
                print("Thanks for buying!")
    elif choice == 2:
        print("Item \t Price \t AvailableCount")
        for line in lines:
            item, price, count = line.split(',')
            print(item, "\t", price, "\t", count)
    else:
        file.seek(0)
        for line in lines:
            file.write(line)
        file.close()
        break
            