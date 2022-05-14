class Person:
    name = "Ercan"
    age = 30


person1 = Person()
person2 = Person()
# print(person1.name)
# print(person2.name)
person2.name = "Aaron"
# print(person2.name)
# print(person1.name)

Person.job = "teacher"
print(person2.job)
