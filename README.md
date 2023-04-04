# Object-Oriented Programming Principles Concept Map

## Concepts

- **Abstraction:** The process of identifying essential characteristics of an object and ignoring others. Example: In a car, we abstract the essential characteristics like steering wheel, accelerator, and brake, and ignore other details like the color or the brand.
- **Encapsulation:** The practice of hiding implementation details while providing an interface for interacting with the object. Example: A bank account object encapsulates the balance and other details from the outside world and provides methods to deposit, withdraw, and check the balance.
- **Inheritance:** The mechanism of creating a new class from an existing class, inheriting its properties and methods, and adding new ones. Example: A `Dog` class can inherit from a `Mammal` class and add properties and methods specific to dogs.
- **Polymorphism:** The ability of an object to take on many forms and behave differently based on the context. Example: A `Shape` class can have different forms like a `Circle`, `Square`, or `Triangle`, and behave differently when drawing or calculating its area.

## Artefacts

- **Class:** A blueprint for creating objects that defines properties and methods that the objects will have. Example: A `Person` class can define properties like name, age, and address, and methods like `eat()` or `sleep()`.
- **Object:** An instance of a class that has its own unique identity and state. Example: An object of the `Person` class can have a name like "John", an age like 30, and an address like "123 Main St.".
- **Interface:** A collection of methods that a class can implement to provide a certain behavior or functionality. Example: A `Drawable` interface can define a `draw()` method that any class implementing the interface should implement.
- **Method:** A function defined in a class that can manipulate the state of the object or provide a certain functionality. Example: A `calculateArea()` method in a `Rectangle` class can calculate the area of the rectangle.
- **Fields:** Variables defined in a class that store the state of the object. Example: A `height` and `width` field in a `Rectangle` class can store the height and width of the rectangle.

## Actions

- **Method Call:** The process of invoking a method on an object to perform a certain action or retrieve a value. Example: Calling the `deposit(100)` method on a bank account object to deposit 100 dollars.
- **New:** The operator used to create a new instance of a class and allocate memory for it. Example: Creating a new object of the `Person` class with `new Person()`.

## Terminology

- **Value Type:** A type that holds a value directly in memory. Example: `int` or `float`.
- **Reference Type:** A type that holds a reference to an object in memory. Example: `String` or `Person`.
- **Abstract Class:** A class that cannot be instantiated and is meant to be inherited from. Example: An `Animal` class that defines common properties and methods for all animals.
- **Abstract Methods:** A method that is declared in an abstract class but has no implementation. Example: An `Animal` class can have an `eat()` method declared as abstract, and its implementation can be provided by its subclasses.
- **Private:** A visibility modifier that makes a field or method accessible only within the same class. Example: A `balance` field in a bank account class can be declared as private to prevent direct access from outside


              +---------------------+
              |  Abstraction        |
              |                     |
              |  - Hides Complexity |
              |  - Generalization   |
              +-----------+---------+
                          |
                          |
                          |
                          v
              +-----------+---------+
              |  Encapsulation      |
              |                     |
              |  - Information Hiding|
              |  - Access Control   |
              +-----------+---------+
                          |
                          |
                          |
          +---------------+----------------+
          |                                |
          |                                |
          v                                v
+---------+----------+           +---------+----------+
|  Inheritance        |           |  Polymorphism      |
|                     |           |                    |
|  - Reuse            |           |  - Flexibility     |
|  - Hierarchy        |           |  - Subtyping       |
+---------+----------+           +---------+----------+
          |                                |
          |                                |
          v                                v
+---------+----------+           +---------+----------+
|  Class              |           |  Object            |
|                     |           |                    |
|  - Blueprint        |           |  - Instance        |
|  - Fields           |           |  - State           |
|  - Methods          |           |  - Behavior        |
+---------+----------+           +---------+----------+
          |                                |
          |          +---------------------+
          v          |
+---------+----------+         +------------+------------+
|  Interface          |         |  Abstract Class        |
|                     |         |                        |
|  - Contract         |         |  - Incomplete          |
|  - Multiple         |         |  - Cannot be Instantiated|
+---------+----------+         +------------+------------+
          |                                     |
          v                                     v
+---------+----------+            +------------+-----------+
|  Method             |            |  Field                 |
|                     |            |                        |
|  - Behavior         |            |  - Data                |
|  - Parameters       |            |  - Access Modifiers    |
|  - Overload         |            |                        |
|  - Override         |            |                        |
|  - Virtual          |            |                        |
+---------+----------+            +------------+-----------+
          |                                     |
          |                                     |
          v                                     v
+---------+----------+             +-----------+---------+
|  Value Type         |             |  Reference Type      |
|                     |             |                      |
|  - Stored on Stack  |             |  - Stored on Heap    |
|  - Copied by Value  |             |  - Copied by Pointer |
+---------+----------+             +-----------+---------+

