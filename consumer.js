const Kafka = require("kafkajs").Kafka
const msg = process.argv[2]
run();

async function run() {
    try {
        const kafka = new Kafka({
            "clientId" : "kafkaApp",
            "brokers" : ["macbook-02.local:9092"]
        })

        const consumer = kafka.consumer({"groupId": "test"});

        console.log("connecting...")
        await consumer.connect()
        console.log("connected")

        //do science
        consumer.subscribe({
            "topic": "Users",
            "fromBeginning" : true
        })

        await consumer.run({
            "eachMessage": async result => {
                console.log(`recd msg ${result.message.value} on part ${result.partition}`)
            }
        })
    }

    catch(ex) {
        console.error(`something bad happened ${ex}`)
    }

   

}