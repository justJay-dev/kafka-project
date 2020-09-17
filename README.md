# kafka-project
practical testing with a small kafka cluster &amp;&amp; zookeeper


* requirments
    * docker
    * docker-compose
    * node

edit ```stack.yml``` to reflect your current machines hostname



### using
you'll need to edit stack.yml, consumer.js, producer.js, and topic.js to replace ```macbook-02.local``` with your hostname (find this by running ```HostName``` in your terminal)

run ```docker-compose -f stack.yml up```


run ``` node topic.js``` to create a "Users" topic with 2 partitions

Open 3 terminal windows to
### In terminal 1
run ```node consumer.js```

### In terminal 2
run ```node consumer.js```

### In terminal 3 
run ``` node producer.js SOMENAME``` several times to create a few messages in the topic
-- note, use a capital letter in the first character of the first name to let it sort to an appropriate partition

Observe how each terminal window reacts to your inputs!



