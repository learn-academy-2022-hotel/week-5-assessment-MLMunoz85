# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What does calling super do in a class?

Your answer: Calling super in a class passes info from the parent class to the child class. You can pass parameters this way so you don't need to re-enter them for the child class.

Researched answer: Calling super in a class indicates that the child class wants to use methods from the parent class (super class). When you use super() and pass parameters, the child class is letting the parent class know that it would like to use and gain access to parameters/instance variables from the parent class.

2. What is a gem?

Your answer: A Ruby gem is a file of code or methods that you install so you can have access to them.

Researched answer: Ruby gems are open source libraries that contain Ruby code and are packaged with a little extra data. Using a gem allows a programmer to use the code within the gem in their own program, without explicitly inserting that code. You have access to all of the methods inside of the gem. Some examples of Ruby gems are: RSpec, Rails, and ActiveRecord.

3. What is a relational database? Are there other kinds of databases?

Your answer: A relational database is a data management system that uses SQL like Postgresql. I think there are other kinds of databases but I'm not sure of their names.

Researched answer: A relational database or a relational database management system (RDBMS) is a program used to create, update, and manage relational databases, it is based off of SQL. Some of the most well-known RDBMSs include MySQL, PostgreSQL, MariaDB, Microsoft SQL Server, and Oracle Database. There are three other kinds of databases: Object-oriented, Hierarchical, and Network.

4. What are primary keys? Why are they important?

Your answer:

Researched answer:

5. What are the HTTP verbs? What is each verb's corresponding CRUD action?

Your answer: The HTTP verbs are get, post, put, and delete. Get - create, post - read, put - update, delete - delete.

Researched answer: The four HTTP verbs are get, post, put, patch, and delete. Get is when data is displayed, it is the Read action. Post is when data is displayed, it is the Create action. Put is when old content is replaced with new content, it is the first part of the Update action. Patch is when content that has been changed is replaced, it is the second part of the Update action. Lastly delete is when data is removed, it is the Delete action.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. RESTful routes: REST stands for Representational State Transfer which provides a way of mapping HTTP verbs (get, post, put, delete) and CRUD actions (create, read, update, delete) together. It is a convention for defining routes and when something follows the rest principle it is known as RESTFUL.

2. Model validations: Model Validations use your model to predict the output in situations outside your training data, and calculates the same statistical measures of fit on those results. This means you need to divide your data set into two different data files: The first is a training data set, which you use to generate your model. While the second is a validation data set, which you use to check your model’s accuracy against data you didn’t use to train the model.

3. Params: Params is an alias for the parameters methods. Specifically, params refers to the parameters being passed to the controller via a GET or POST request.

4. ERB: ERB files contain source code written in a programming language of the same name. The ERB language is essentially a Ruby templating language. ERB files are saved in a plain text format which allows them to be opened in any text editing program. Thus, the file can contain any type of text alongside the ERB source code.

5. API: API or an Application Programming Interface is a set of defined rules that explain how computers or applications communicate with one another. APIs sit between an application and the web server, acting as an intermediary layer that processes data transfer between systems.
